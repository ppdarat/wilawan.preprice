function calculatePrice() {
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value);
    const thickPrice = parseFloat(document.getElementById('thickPrice').value);
    const thinPrice = parseFloat(document.getElementById('thinPrice').value);
    const discount = parseFloat(document.getElementById('discount').value) / 100;

    function calculateCost(width, price) {
        // Step 1: Calculate actual fabric length used
        let actualFabricLength = width * 2.5;
        
        // Step 2: Convert meters to yards
        let yards = actualFabricLength / 0.9;
        
        // Step 3: Calculate fabric cost
        let fabricCost = yards * price;
        
        // Step 4: Calculate tailoring cost
        let tailoringCost = yards * 100;
        
        // Step 5: Add installation cost
        let installationCost = 500;
        
        // Sum up all costs
        let totalCost = fabricCost + tailoringCost + installationCost;
        
        return totalCost;
    }

    function calculateRodCost(width) {
        if (width <= 1.5) return 600;
        if (width <= 2.0) return 700;
        if (width <= 2.5) return 800;
        if (width <= 3.0) return 900;
        if (width <= 3.5) return 1000;
        if (width <= 4.0) return 1500;
        if (width <= 4.5) return 2000;
        if (width <= 5.0) return 3000;
        if (width <= 5.5) return 3500;
        if (width <= 6.0) return 4000;
        if (width <= 6.5) return 4500;
        if (width <= 7.0) return 5000;
        if (width <= 7.5) return 5500;
        if (width <= 8.0) return 6000;
        if (width <= 8.5) return 6500;
        if (width <= 9.0) return 7000;
        if (width <= 9.5) return 7500;
        if (width <= 10.0) return 8000;
        if (width <= 10.5) return 8500;
        if (width <= 11.0) return 9000;
        if (width <= 11.5) return 9500;
        if (width <= 12.0) return 10000;
        if (width <= 12.5) return 10500;
        if (width <= 13.0) return 11000;
        if (width <= 13.5) return 11500;
        if (width <= 14.0) return 12000;
        if (width <= 14.5) return 12500;
        if (width <= 15.0) return 13000;
        if (width <= 15.5) return 13500;
        if (width <= 16.0) return 14000;
        if (width <= 16.5) return 14500;
        if (width <= 17.0) return 15000;
        if (width <= 17.5) return 15500;
        if (width <= 18.0) return 16000;
        if (width <= 18.5) return 16500;
        if (width <= 19.0) return 17000;
        if (width <= 19.5) return 17500;
        if (width <= 20.0) return 18000;
        return 0; // Beyond 20 meters, assume no rod cost
    }

    const rodCost = calculateRodCost(width);
    const thickCost = calculateCost(width, thickPrice) + rodCost;
    const thinCost = calculateCost(width, thinPrice) + rodCost;

    const discountedThickCost = thickCost * (1 - discount);
    const discountedThinCost = thinCost * (1 - discount);

    document.getElementById('result').innerHTML = `
        <p>ราคาผ้าทึบ: ${discountedThickCost.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} บาท</p>
        <p>ราคาผ้าโปร่ง: ${discountedThinCost.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} บาท</p>
    `;
}
