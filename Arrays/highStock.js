const maxProfit = function(prices) {
  
    let max = 0
    let min = prices[0]

    for (let index = 0; index < prices.length; index++) {
        const element = prices[index];
        
        if(element < min) {
            min = element
        }
        max = Math.max(max, prices[index] - min)
    }
    console.log(max);
    
    console.log(min);
    
    
};

maxProfit([7,1,5,3,6,4])

