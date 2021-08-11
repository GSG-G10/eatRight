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
