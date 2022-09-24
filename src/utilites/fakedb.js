//use local storage to manage data!!!
const addToDb = (id)=>{
    const quantiy = localStorage.getItem(id);
    if(quantiy){
        console.log('already exist');
        const newQuantity = parseInt(quantiy) + 1;
        localStorage.setItem(id, newQuantity);
    }
    else{
        console.log('new item');
        localStorage.setItem(id, 1);
    }
}
export {addToDb};