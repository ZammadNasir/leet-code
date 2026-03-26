// 599
const findRestaurant = function(list1, list2) {
    
    let map = {}
    for (let i = 0; i < list1.length; i++) {
        const element1 = list1[i];
        
        for (let j = 0; j < list2.length; j++) {
            const element2 = list2[j];
            if(element1 === element2) {
                map[element1] = i + j

            }   
        }

    }

    let min = Infinity
    for(let key in map) {
        if(map[key] < min) {
            min = map[key]
        }

        // if(map[key] === min) {
        //     result.push(key)
        // }
    }

       let result = [];
    for (let key in map) {
        if (map[key] === min) {
            result.push(key);
        }
    }
    console.log(map);
    
    console.log(result);
    
};

findRestaurant(
    ["Shogun","Tapioca Express","Burger King","KFC"], 
    ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
)
findRestaurant(
    ["happy","sad","good"], 
    ["sad","happy","good"]
)
findRestaurant(
    ["Shogun","Piatti","Tapioca Express","Burger King","KFC"], 
    ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
)