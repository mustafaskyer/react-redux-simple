export function viewPlayers(){
    return {
        type: "VIEW_PLAYERS",
    }
}

export function addPlayer(player){
    return {
        type:"ADD_PLAYER",
        payload:player
    }
}

export function deletePlayer(id){
    return{
        type:"DELETE_PLAYER",
        payload:id
    }
}