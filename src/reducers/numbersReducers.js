export function numbers(state = [1,2,3,4],action){
    switch(action.type){
        case "GET":
            return [...state]
        break;

        case "ADD":
            return [...state,...action.payload]
        break;

        case "SUB":
            // take a copy ,then findIndex the slice your copy
            var all = [...state];
            var i = all.indexOf(action.payload)
            if(i !== -1)
                all.splice(i,1)
            return [...all]
        break;    
    }
    return state;
}