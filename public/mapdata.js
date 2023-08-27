let variable;
let state_var = "SearchByState";

if (location.hash === "#") {
  variable = "-1";
} else if (location.hash === "#JammuKashmir") {
  variable = "36";
}else if (location.hash ===  "#AndhraPradesh" ) {variable =  "2" ;}
else if (location.hash ===  "#ArunachalPradesh" ) {variable =  "3" ;}
else if (location.hash ===  "#Assam" ) {variable =  "4" ;}
else if (location.hash ===  "#Bihar" ) {variable =  "5" ;}
else if (location.hash ===  "#Chhattisgarh" ) {variable =  "7" ;}
else if (location.hash ===  '#Goa' ) {variable =  "11" ;}
else if (location.hash ===  '#Gujarat' ) {variable =  "12" ;}
else if (location.hash ===  '#Haryana' ) {variable =  "13" ;}
else if (location.hash ===  '#HimachalPradesh' ) {variable =  "14" ;}
else if (location.hash ===  '#Jharkhand' ) {variable =  "16" ;}
else if (location.hash ===  '#Karnataka' ) {variable =  "17" ;}
else if (location.hash ===  '#Kerala'	 ) {variable =  "18" ;}
else if (location.hash ===  '#Maharashtra' ) {variable =  "21" ;}
else if (location.hash ===  '#MadhyaPradesh'	 ) {variable =  "20" ;}
else if (location.hash ===  '#Manipur' ) {variable =  "22" ;}
else if (location.hash ===  '#Meghalaya' ) {variable = "23" ;}
else if (location.hash ===  '#Mizoram' ) {variable =  "24" ;}
else if (location.hash ===  '#Nagaland' ) {variable =  "25" ;}
else if (location.hash ===  '#Orissa' ) {variable =  "26" ;}
else if (location.hash ===  '#Punjab' ) {variable =  "28" ;}
else if (location.hash ===  '#Rajasthan' ) {variable =  "29" ;}
else if (location.hash ===  '#Sikkim'	 ) {variable =  "30" ;}
else if (location.hash ===  '#TamilNadu'	 ) {variable =  "31" ;}
else if (location.hash ===  '#Tripura' ) {variable =  "32";}
else if (location.hash ===  '#Telangana' ) {variable =  "37";}
else if (location.hash ===  '#UttarPradesh' ) {variable =  "33" ;}
else if (location.hash ===  '#Uttarakhand' ) {variable =  "34" ;}
else if (location.hash ===  '#WestBengal' ) {variable =  "35" ;}
else if (location.hash ===  '#AndamanNicobar' ) {variable =  "1" ;}
else if (location.hash ===  '#Chandigarh' ) {variable =  "6" ;}

var simplemaps_countrymap_mapdata={
  
  main_settings: {
    //General settings
		width: "responsive", //or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#d9ffff",
    pop_ups: "detect",
    
		//State defaults
		state_description: "State description",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "SearchByState",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
		//Location defaults
		location_description: "Location description",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_url: "",
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
		//Label defaults
		label_color: "#d5ddec",
    label_hover_color: "#d5ddec",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
		//Zoom settings
		zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: variable,
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
		//Popup settings
		popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
		//Advanced settings
		div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website"
  },
  state_specific: {
    "1": {
      name: "Andaman And Nicobar",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "SearchByState#AndamanNicobar"
    },
    "2": {
      name: "Andhra Pradesh",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "SearchByState#AndraPradesh"
    },
    "3": {
      name: "Arunachal Pradesh",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "SearchByState#ArunachalPradesh"
    },
    "4": {
      name: "Assam",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "SearchByState#Assam"
    },
    "5": {
      name: "Bihar",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "SearchByState#Bihar"
    },
    "6": {
      name: "Chandigarh",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "SearchByState#Chandigarh"
    },
    "7": {
      name: "Chhattisgarh",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "SearchByState#Chhattisgarh"
    },
    "8": {
      name: "Dadra And Nagar Haveli",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "SearchByState#DadraNagarHaveli"
    },
    "9": {
      name: "Daman And Diu",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "SearchByState#DamanDiu"
    },
    "10": {
      name: "Delhi",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "SearchByState#Delhi"
    },
    "11": {
      name: "Goa",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "SearchByState#Goa"
    },
    "12": {
      name: "Gujarat",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "SearchByState#Gujarat"
    },
    "13": {
      name: "Haryana",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "SearchByState#Haryana"
    },
    "14": {
      name: "Himachal Pradesh",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "SearchByState#HimachalPradesh"
    },
    "16": {
      name: "Jharkhand",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "SearchByState#Jharkhand"
    },
    "17": {
      name: "Karnataka",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "SearchByState#Karnataka",
    },
    "18": {
      name: "Kerala",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "SearchByState#Kerala"
    },
    "19": {
      name: "Lakshadweep",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "SearchByState#Lakshadweep"
    },
    "20": {
      name: "Madhya Pradesh",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "SearchByState#MadhyaPradesh"
    },
    "21": {
      name: "Maharashtra",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "SearchByState#Maharashtra"
    },
    "22": {
      name: "Manipur",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "SearchByState#Manipur"
    },
    "23": {
      name: "Meghalaya",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "SearchByState#Meghalaya"
    },
    "24": {
      name: "Mizoram",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "SearchByState#Mizoram"
    },
    "25": {
      name: "Nagaland",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "SearchByState#Nagaland"
    },
    "26": {
      name: "Orissa",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "SearchByState#Orissa"
    },
    "27": {
      name: "Puducherry",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "SearchByState#Puducherry"
    },
    "28": {
      name: "Punjab",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "SearchByState#Punjab"
    },
    "29": {
      name: "Rajasthan",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "SearchByState#Rajasthan"
    },
    "30": {
      name: "Sikkim",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "SearchByState#Sikkim"
    },
    "31": {
      name: "Tamil Nadu",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "SearchByState#TamilNadu"
    },
    "32": {
      name: "Tripura",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "SearchByState#Tripura"
    },
    "33": {
      name: "Uttar Pradesh",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "SearchByState#UtterPradesh"
    },
    "34": {
      name: "Uttaranchal",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "SearchByState#Uttarakhand"
    },
    "35": {
      name: "West Bengal",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "SearchByState#WestBengal"
    },
    "36": {
      name: "Jammu And Kashmir",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "SearchByState#JammuKashmir"
    },
    "37": {
      name: "Telangana",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "SearchByState#Telangana"
    },
    "38": {
      name: "Ladakh",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "SearchByState#Ladakh"
    }
  },
  /*locations: {
    "0": {
      lat: 18.987807,
      lng: 72.836447,
      name: "Mumbai"
    }
  },*/
  labels: {}
};

