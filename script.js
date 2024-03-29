let inputNumber = document.getElementById("number");
let convertButton = document.getElementById("convert-btn");
let output = document.getElementById("output");

const romanNumerals = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' }
];

function Convert(){
    if(inputNumber.value == ""){
        output.innerText = "Please enter a valid number";
    }
    else if(inputNumber.value < 1){
        output.innerText = "Please enter a number greater than or equal to 1";
    }
    else if(inputNumber.value > 3999){
        output.innerText = "Please enter a number less than or equal to 3999";
    }
    else{
        let result = "";
    for (let i = 0; i < romanNumerals.length; i++) {
        while (inputNumber.value >= romanNumerals[i].value) {
            result += romanNumerals[i].numeral;
            inputNumber.value -= romanNumerals[i].value;
        }
    }
    return output.innerText = result;
    }
}
convertButton.addEventListener("click", Convert);