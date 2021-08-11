const calories = document.querySelector(".calories");
const totalFat = document.querySelector(".totalFat");
const fatPer = document.querySelector(".fatPer");
const satFat = document.querySelector(".satFat");
const satFatPer = document.querySelector(".satFatPer");
const cholesterol = document.querySelector(".cholesterol");
const colPer = document.querySelector(".colPer");
const sodium = document.querySelector(".sodium");
const sodiumPer = document.querySelector(".sodiumPer");
const totalCarb = document.querySelector(".totalCarb");
const carbPer = document.querySelector(".carbPer");
const suger = document.querySelector(".suger");
const sugerPer = document.querySelector(".sugerPer");
const protein = document.querySelector(".protein");
const protienPer = document.querySelector(".protienPer");
const clearBtn = document.querySelector(".clearBtn");
const analysisBtn = document.querySelector(".analysisBtn");
const quantity = document.querySelector(".quantity");
const units = document.querySelector(".units");
const ingredient = document.querySelector(".ingredient");

const showData = (data) => {
  textValidation(calories, data.totalNutrients.ENERC_KCAL);
  textValidation(totalFat, data.totalNutrients.FAT);
  textValidation(fatPer, data.totalDaily.FAT);
  textValidation(satFat, data.totalNutrients.FASAT);
  textValidation(satFatPer, data.totalDaily.FASAT);
  textValidation(cholesterol, data.totalNutrients.CHOLE);
  textValidation(colPer, data.totalDaily.CHOLE);
  textValidation(sodium, data.totalNutrients.NA);
  textValidation(sodiumPer, data.totalDaily.NA);
  textValidation(totalCarb, data.totalNutrients.CHOCDF);
  textValidation(carbPer, data.totalDaily.CHOCDF);
  textValidation(suger, data.totalNutrients.SUGAR);
  textValidation(sugerPer, data.totalDaily.SUGAR)
  textValidation(protein, data.totalNutrients.PROCNT);
  textValidation(protienPer, data.totalDaily.PROCNT)
};


clearBtn.addEventListener('click',() =>{
  let elemantArray = [calories,totalFat,fatPer,satFat,satFatPer,cholesterol,colPer,sodium,sodiumPer,totalCarb,carbPer,suger,sugerPer,protein,protienPer]
  let inputArray = [quantity, units, ingredient]
  clear(elemantArray);
  clearInput(inputArray);
})

analysisBtn.addEventListener('click', () =>{
    let quantity = document.querySelector(".quantity").value;
    let units = document.querySelector(".units").value;
    let ingredient = document.querySelector(".ingredient").value;
    fetch(
        `/search?nutrition-type=cooking&ingr=${quantity}%20${units}%20${ingredient}`
      )
        .then((response) => response.json())
        .then((data) => showData(data));
})

