document.getElementById('carbon-footprint-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const electricity = parseFloat(document.getElementById('electricity').value);
    const gas = parseFloat(document.getElementById('gas').value);
    const miles = parseFloat(document.getElementById('miles').value);
    const foodType = parseInt(document.getElementById('food').value);

    // Cálculos simplificados de huella de carbono
    const electricityCO2 = electricity * 0.5; // kg CO2 por kWh
    const gasCO2 = gas * 2.0; // kg CO2 por m³
    const milesCO2 = miles * 0.404; // kg CO2 por milla

    let foodCO2;
    switch (foodType) {
        case 1: foodCO2 = 0.5; break; // Vegetariana
        case 2: foodCO2 = 1.0; break; // Mixta
        case 3: foodCO2 = 1.5; break; // Carnívora
        default: foodCO2 = 0;
    }

    const totalCO2 = electricityCO2 + gasCO2 + milesCO2 + foodCO2;

    document.getElementById('result').innerText = `Tu huella de carbono es de ${totalCO2.toFixed(2)} kg CO2 al mes.`;
    
    // Sugerencias
    let suggestions = "Sugerencias para reducir tu huella de carbono:";
    if (totalCO2 > 100) {
        suggestions += "\n- Considera usar transporte público.";
    }
    if (foodType === 3) {
        suggestions += "\n- Intenta reducir tu consumo de carne.";
    }
    if (electricity > 300) {
        suggestions += "\n- Cambia a bombillas LED y apaga dispositivos cuando no los uses.";
    }

    document.getElementById('result').innerText += '\n' + suggestions;
});



