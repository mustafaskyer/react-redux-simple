export function numbers(){
    return {
        type:"GET",
    }
}
export function add(action){
    return {
        type:"ADD",
        payload:action
    }
}

export function sub(action){
    return {
        type:"SUB",
        payload:action
    }
}

export function multiple(action){
    return {
        type:"MULTIPLE",
        payload:action
    }
}

export function divide(action){
    return {
        type:"DIVIDE",
        payload:action
    }
}