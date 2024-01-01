var generate = document.querySelector(".generate");
var clear = document.querySelector(".clear");
var input = document.querySelector(".passwordInput");

generate.addEventListener("click", () => {
    let array6 = ['S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A'];
    let array1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
    let array3 = ['j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r'];
    let array2 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
    let array4 = ['J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R'];
    let array5 = ['s', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a'];
    let array7 = [';', '*', '-', '_', '=', '!', '@', '#', '$'];
    let array8 = ['5', '6', '3', '8', '9', '2', '4', '7', '1'];
    let array9 = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let array10 = ['9', '8', '7', '6', '5', '4', '3', '2', '1'];
    
    var randomNumber = Math.round(Math.random()*8);
    input.value = array1[randomNumber] + array2[randomNumber] + array3[randomNumber] + array4[randomNumber] + array5[randomNumber] + array6[randomNumber] + array7[randomNumber] + array8[randomNumber] + array9[randomNumber] + array10[randomNumber];
    input.style.color = 'rgb(0, 255, 0)'
})

clear.addEventListener("click", function(){
    input.value = 'No paswords';
    input.style.color = 'red';
})