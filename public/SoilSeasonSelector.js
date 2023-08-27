const soilSelect = document.getElementById("soil");

// add an event listener to the select element for soil
soilSelect.addEventListener("change", (event) => {
  // get the selected option
  const selectedOption = event.target.value;
  
  // print the selected option to the console
  console.log(selectedOption);
});

const seasonSelect = document.getElementById("season");

// add an event listener to the select element for season
seasonSelect.addEventListener("change", (event) => {
  // get the selected option
  const selectedOption = event.target.value;
  
  // print the selected option to the console
  console.log(selectedOption);
});