const textValidation = (domEle, value) => {
    if(value === undefined){
        domEle.textContent = "-"
    }else{
        domEle.textContent = `${value.quantity.toFixed(1)} ${value.unit}`;
    }
}