function convertTemperature() {
    const temperatureInput = document.getElementById("temperature").value;
    const unit = document.getElementById("unit").value;
    const resultDisplay = document.getElementById("result");
    
    // Validate input as a number
    if (isNaN(temperatureInput) || temperatureInput === "") {
        resultDisplay.innerText = "Please enter a valid number.";
        return;
    }
    
    const temperature = parseFloat(temperatureInput);
    let result;
    
    // Conversion logic based on selected unit
    if (unit === "Celsius") {
        const toFahrenheit = (temperature * 9/5) + 32;
        const toKelvin = temperature + 273.15;
        result = `${temperature}°C = ${toFahrenheit.toFixed(2)}°F, ${toKelvin.toFixed(2)}K`;
    } else if (unit === "Fahrenheit") {
        const toCelsius = (temperature - 32) * 5/9;
        const toKelvin = (temperature + 459.67) * 5/9;
        result = `${temperature}°F = ${toCelsius.toFixed(2)}°C, ${toKelvin.toFixed(2)}K`;
    } else if (unit === "Kelvin") {
        const toCelsius = temperature - 273.15;
        const toFahrenheit = (temperature * 9/5) - 459.67;
        result = `${temperature}K = ${toCelsius.toFixed(2)}°C, ${toFahrenheit.toFixed(2)}°F`;
    }

    resultDisplay.innerText = result;
}
