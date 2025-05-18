document.addEventListener('DOMContentLoaded', function() {
    const rangeMin = document.getElementById('rangeMin');
    const rangeMax = document.getElementById('rangeMax');
    const minValue = document.getElementById('minValue');
    const maxValue = document.getElementById('maxValue');

   
    function updateValues() { // Function to update the input values
        const min = parseInt(rangeMin.value);
        const max = parseInt(rangeMax.value);

        if (min > max) {
            rangeMin.value = max;
            minValue.value = max;
        } else {
            minValue.value = min;
        }

        if (max < min) {//making sure max does not go under min
            rangeMax.value = min;
            maxValue.value = min;
        } else {
            maxValue.value = max;
        }
    }

    // Add event listeners for range inputs
    rangeMin.addEventListener('input', updateValues);
    rangeMax.addEventListener('input', updateValues);

    
    minValue.addEventListener('input', function() {// Add event listeners for number inputs
        const value = parseInt(this.value);
        if (value >= 100 && value <= 1000) {
            rangeMin.value = value;
            updateValues();
        }
    });

    maxValue.addEventListener('input', function() {
        const value = parseInt(this.value);
        if (value >= 100 && value <= 1000) {
            rangeMax.value = value;
            updateValues();
        }
    });


    updateValues();// Initialize values
});
