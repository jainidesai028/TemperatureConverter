function convertToCelsius() {
    convertTemperature('C');
}

function convertToFahrenheit() {
    convertTemperature('F');
}

function convertToKelvin() {
    convertTemperature('K');
}

function convertTemperature(toUnit) {
    const temperatureInput = document.getElementById('temperature');
    const resultElement = document.getElementById('result');

    if (temperatureInput.value === '') {
        resultElement.textContent = 'Please enter a temperature.';
        return;
    }

    const temperature = parseFloat(temperatureInput.value);

    let convertedTemperature;

    switch (toUnit) {
        case 'F':
            convertedTemperature = (temperature * 9/5) + 32;
            displayResult(convertedTemperature, '°F');
            break;
        case 'C':
            convertedTemperature = (temperature - 32) * 5/9;
            displayResult(convertedTemperature, '°C');
            break;
        case 'K':
            convertedTemperature = temperature + 273.15;
            displayResult(convertedTemperature, 'K');
            break;
        default:
            resultElement.textContent = 'Invalid conversion unit.';
    }
}

function displayResult(value, unit) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Converted temperature: ${value.toFixed(2)} ${unit}`;
}
