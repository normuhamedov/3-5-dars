
// var studentName = prompt("Ismingiz");
// var englishScore = prompt("Ingliz tili natijanggiz");
// var mathScore = prompt("Matematika natijanggiz");

// var isTanish = "Boboyor".toLocaleLowerCase() == studentName.toLocaleLowerCase()

// var passScoreFromEnglish = 500;
// var passScoreFromMath = 600;
 
// var mathIsPass = mathScore >= passScoreFromMath
// var englishIsPass = englishScore >= passScoreFromEnglish

// if ((englishIsPass && mathIsPass) || isTanish) {
//     console.log("O'qishga kirdinggiz");

// }else if(mathScore >= passScoreFromMath) {
//     console.log("Matematikadan balinggiz yetarli ammo ingliz tilini bilmas ekansiz");
    
// }else if(englishScore >= passScoreFromEnglish) {
//     console.log("Ingliz tilidan balinggiz yetarli ammo matematikani bilmas ekansiz");
    
// }else {
//     console.log("Yana kirolmadinggiz");
// }



var elForm = document.querySelector(".form");
var elInputName = document.querySelector(".username");
var elResult = document.querySelector(".result");
var elCurency = document.querySelector(".curency");


elForm.addEventListener("input", function(evt) {
    evt.preventDefault()

    var inputName = elInputName.value

    elResult.textContent = inputName * elCurency.value
})