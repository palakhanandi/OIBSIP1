function convertTemperature() {
  let temp = parseFloat(document.getElementById("temperature").value);
  let from = document.getElementById("fromUnit").value;
  let to = document.getElementById("toUnit").value;
  let result = document.getElementById("result");

  if (isNaN(temp)) {
    result.innerHTML = "⚠️ Please enter a valid number!";
    return;
  }

  let tempInCelsius;

  // Convert input to Celsius
  if (from === "C") {
    tempInCelsius = temp;
  } else if (from === "F") {
    tempInCelsius = (temp - 32) * 5/9;
  } else if (from === "K") {
    tempInCelsius = temp - 273.15;
  }

  let finalTemp;

  // Convert Celsius to target unit
  if (to === "C") {
    finalTemp = tempInCelsius;
  } else if (to === "F") {
    finalTemp = (tempInCelsius * 9/5) + 32;
  } else if (to === "K") {
    finalTemp = tempInCelsius + 273.15;
  }

  // Format result output
  let unitNames = { C: "(°C)", F: "(°F)", K: "(K)" };

 result.innerHTML = `
    
    <p><b>Result => </b> ${finalTemp.toFixed(2)} ${unitNames[to]}</p>
  
   `;
 }