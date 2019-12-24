export const setLocal=(name,data)=>{
    localStorage.setItem(name,JSON.stringify(data))
}

export const getLocal=(name)=>{
    if(localStorage.getItem(name)){
        return JSON.parse(localStorage.getItem(name))
    }else{
        return null
    }         
}

export const clearLocal=()=>{
    localStorage.clear()        
}