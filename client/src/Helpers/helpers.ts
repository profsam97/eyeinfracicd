const truncate = (word : string, number : number) : string => {

    const length  : number = word.length;
    
    return length > number ?  word.slice(0,number -1)  + '...' : word
}
export const  getLocaltime = (date : Date) =>{
    const  dateWithoutSecond = new Date(date);
    return dateWithoutSecond.toLocaleTimeString([], {month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit'});
}

export default truncate;