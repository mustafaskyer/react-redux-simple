export function players(state={players:[
    {id:10,name:"Messi",team:"FCB"},
    {id:11,name:"Andres",team:"FCB"},
    {id:12,name:"Jordi",team:"FCB"},
]},action){
    switch(action.type){
        case "VIEW_PLAYERS":
            return{state,players:[...state.players]}
        break;
        
        case "ADD_PLAYER":
            return {
                players:[
                    ...state.players,...action.payload
                ]
            }
        break;

        case "DELETE_PLAYER":
            // 1- take copy of players array
            // 2- find index
            // 3- remove player

            const allPlayers = [...state.players];
            const index = allPlayers.findIndex(function(player){
                return player.id == action.payload
            })
            if(index === -1){
                alert('No Pkayers with this number')
                return state;
            }
            return {
                players:[
                ...allPlayers.slice(0,index),...allPlayers.slice(index + 1)
                ]
            }
        break;    
    }
    return state;
}