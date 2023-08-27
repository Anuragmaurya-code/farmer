const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

const { config } = require('dotenv');
const { OpenAIApi, Configuration } = require('openai');
const mongoose = require('mongoose');
const cropInfo = require('./cropsInfo.json');
require('dotenv').config()
// const { default: cropsData } = require('./cropsData');
config();
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(process.env.MONGODB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(console.log("database is connected"));
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled

}
const districtSchema = new mongoose.Schema({
    name: String,
    soilName: String,
});
const cropsData = {
  "alluvial": {
    "rabi": ["tobacco", "rice", "wheat", "cotton", "sesame", "barley", "maize", "oilseeds"],
    "kharif": ["rice", "sugarcane", "maize", "cotton", "cucumber", "pumpkin", "okra", "tomato", "eggplant", "gourds", "beans", "Spinach", "fenugreek"],
    "allYear": ["watermelon", "muskmelon", "okra", "cucumber", "bittergourd", "green chilli", "french beans", "raddish", "carrot"]
  },
  "arid": {
    "rabi": ["wheat", "barley", "gram", "pulses", "mustard", "coriander"],
    "kharif": ["moong", "urad", "moth", "bajra", "til", "sesame", "cotton", "groundnut"],
    "allYear": ["castor", "isabgol", "cumin", "fenugreek"]
  },
  "black": {
    "rabi": ["wheat", "gram", "peas", "lentils", "mustard", "sugar cane"],
    "kharif": ["rice", "jowar", "bajra", "cotton", "tur", "moong", "urad"],
    "allYear": ["groundnut", "sunflower", "soybean", "sesame"]
  },
  "forest": {
    "rabi": ["wheat", "oat", "gram", "pulses"],
    "kharif": ["rice", "maize", "jowar", "bajra"],
    "allYear": ["tea", "coffee", "spices", "fruits"]
  },
  "laterite": {
    "rabi": ["wheat", "gram", "pulses", "sunflower", "mustard"],
    "kharif": ["rice", "jowar", "bajra", "groundnut", "cotton", "tur"],
    "allYear": ["banana", "cashew nut", "coconut"]
  },
  "red": {
    "rabi": ["wheat", "gram", "pulses", "mustard", "sugarcane"],
    "kharif": ["rice", "jowar", "bajra", "tur", "urad"],
    "allYear": ["cotton", "groundnut", "sesame"]
  },
  "yellow": {
    "rabi": ["wheat", "gram", "pulses", "sugarcane"],
    "kharif": ["rice", "jowar", "bajra", "cotton", "tur"],
    "allYear": ["sunflower", "soybean", "sesame"]
  }
};

var District = mongoose.model("district", districtSchema);
const openAi = new OpenAIApi(
    new Configuration({
        apiKey:process.env.API
    }));
    function contentToHtml(text) {
        return text
          .split('\n\n')
          .map(paragraph => `<p>${paragraph}</p>`)
          .join('')
      }

app.get("/", function (req, res) {
    res.render("homepage", { header: "", content: "" });
});
app.route("/SearchByState")
    .get((req, res) => {
        res.render("searchByState", { header: "", content: "", crops: [] });
    })
    .post(async (req, res) => {
        const db_resp = await District.findOne({ name: req.body.district })
        let soilName = await db_resp.soilName.toLocaleLowerCase();
        soilName  = soilName.replace(/\.$/, '');
        const name = await db_resp.name;
        const reqseason = await req.body.season;
        await console.log(db_resp);

        let Crops = await cropsData[soilName];
        await console.log(Crops);
        Crops = Crops[reqseason];
        const finalCrops = [];
        Crops.forEach(crop => {
            cropInfo[crop]["name"]=crop;
            cropInfo[crop].info=contentToHtml(cropInfo[crop].info);
            finalCrops.push(cropInfo[crop]);
    
        })
        
        await res.render("searchByState", { header: "The soil type is " + soilName + " in " + name + " district", content: "The list of crops are ", crops: finalCrops});
    });

app.route("/homepage")
    .get((req, res) => {
        res.render("homepage", { header: "", content: "" });
    })
    .post((req, res) => {
        try {
            var prompt=req.body.farming_questions;
            async function myfunct() {

                const response = await openAi.createChatCompletion({
                    model: "gpt-3.5-turbo",
                    messages: [{ role: "user", content:prompt+" give answer in detail considering the farmers in india " }],
                })
                // const result = await  JSON.parse(response.data.choices[0].message.content);
                await console.log(response.data.choices[0].message.content)
                let result = await response.data.choices[0].message.content;
                result=await contentToHtml(result)
                await res.render("homepage", { header: "Question asked : "+prompt, content: result });
            }
            myfunct();
        } catch {
            res.send("something went wrong");
        }

    });

app.route("/SearchByCrop")
    .get((req, res) => {
        res.render("SearchByCrop", { header: "", content: "", crops: [] });
    })
    .post((req, res) => {
        const crop = req.body.crop;
        const finalCrops = [];
        cropInfo[crop].info=contentToHtml(cropInfo[crop].info);
        finalCrops.push(cropInfo[crop]);
        res.render("searchByCrop", { header: crop , content: " Information about "+crop, crops:finalCrops });
    
    })
app.route("/SearchBySoil")
    .get((req, res) => {
        res.render("SearchBySoil", { header: "", content: "", crops: [] });
    })
    .post((req, res) => {
        const soil = req.body.soil;
        const season = req.body.season;
        const Crops = cropsData[soil][season];
        const finalCrops = [];
        Crops.forEach(crop => {
            cropInfo[crop]["name"]=crop;
            cropInfo[crop].info=contentToHtml(cropInfo[crop].info);
            finalCrops.push(cropInfo[crop]);
    
        })
        res.render("searchBySoil", { header: "The soil type is " + soil, content: "The list of crops are ", crops: finalCrops });
    });

app.route("/SearchBySeason")
    .get((req, res) => {
        res.render("SearchBySeason", { header: "", content: "", crops: [] });
    })
    .post((req, res) => {
        const soil = req.body.soil;
        const season = req.body.season;
        const Crops = cropsData[soil][season];
        const finalCrops = [];
        Crops.forEach(crop => {
            cropInfo[crop]["name"]=crop;
            cropInfo[crop].info=contentToHtml(cropInfo[crop].info);
            finalCrops.push(cropInfo[crop]);
    
        })

        res.render("searchBySeason", { header: "The soil type is " + soil, content: "The list of crops are ", crops: finalCrops });
    });;

app.route('/about')
    .get((req, res) => {
        res.render("about");
    });

app.listen(3000, function (req, res) {
    console.log('listening on port 3000');
});


