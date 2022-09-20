// add item to the localStorage 
const addItemLS = () => {
    const inputKey = document.getElementById('keyId');
    let inputKeyValue = inputKey.value ;

    const inputValue = document.getElementById('valueId');
    let valueName =  inputValue.value ;

    localStorage.setItem(inputKeyValue,valueName);
    inputKey.value = '';
    inputValue.value ='';
    
}

// remove item from localStorage 
const removeItemLS = () =>{
    const inputKey = document.getElementById('keyId');
    let inputKeyValue = inputKey.value ;

    const inputValue = document.getElementById('valueId');
    let valueName =  inputValue.value ;

    localStorage.removeItem(inputKeyValue,valueName);
    inputKey.value = '';
    inputValue.value ='';
}