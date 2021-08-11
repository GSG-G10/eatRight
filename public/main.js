const textValidation = (domEle, value) => {
    if(value === undefined){
        domEle.textContent = "-"
    }else{
        domEle.textContent = `${value.quantity.toFixed(1)} ${value.unit}`;
    }
}

const clear = (arr) => {
    for(ele of arr){
        ele.textContent = '-'
    }
}

const clearInput = (arr) => {
    for(ele of arr){
        ele.value = ''
    }
}
