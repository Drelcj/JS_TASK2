         let data, interestData;
        //creation of array of objects called data with the following values:
        data =
        [
            {principal: 2500, time: 1.8, },
            {principal: 1000, time: 5, },
            {principal: 3000, time: 1, },
            {principal: 2000, time: 3, },
        ];
        // creation of function called "interestCalculator" that takes an array as a single argument and does the following:
        function interestCalculator (array) 
        {
            array.forEach(element => {
                if (element.principal >= 2500 && element.principal > 1 && element.time < 3) {
                    element.rate = 3;
                }
                else if (element.principal >= 2500 && element.time >= 3) {
                    element.rate = 4;
                }
                else if (element.principal < 2500 || element.time <= 1) {
                    element.rate = 2;
                }
                else {
                    element.rate = 1;
                }
                // Calculating the interest for each individual object using the formula: (principal * rate * time) / 100. 
                element.interest = (element.principal * element.rate * element.time) / 100 ;
            });
                
        
        // calling the function and passing 'data' array created.   
        interestData = data.map(element => {
            return element;
        });
        console.log(interestData);
        return interestData;
    }
        interestCalculator(data) 