let elForm = document.querySelector(".form");
let elInputName = document.querySelector(".username");
let elResult = document.querySelector(".result");

elInputName.addEventListener("input", function() { 
    
    var inputName = +elInputName.value
    switch (inputName) {
        case 1:
        elResult.textContent = ("Dushanba");
        break;
        case 2:
        elResult.textContent = ("Seshanba");
        break;
        case 3:
        elResult.textContent = ("Chorshanba");
        break
        case 4:
        elResult.textContent = ("Payshanba");
        break;
        case 5:
        elResult.textContent = ("Juma");
        break;
        case 6:
        elResult.textContent = ("Shanba");
        break;
        case 7:
        elResult.textContent = ("Yakshanba");
        break;

        default:
        elResult.textContent = ("1 dan 7 gacha son kiriting");
        break;
    }
})