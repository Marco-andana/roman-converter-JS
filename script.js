const inputValue = document.getElementById('number')
const convertBtn = document.getElementById('convert-btn')
const output = document.getElementById('output')

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

const process = (num) => {
 let roman = "";

 for(let i = 0; i < romanNumerals.length; i++) {
   while(num >= romanNumerals[i].value) {
     roman += romanNumerals[i].numeral;
     num -= romanNumerals[i].value
   }
 }
 return roman;
}

const inputValidation = () => {
  const inputInt = parseInt(inputValue.value);

  if(!inputValue.value || isNaN(inputInt)) {
    output.classList.add('alert')
    output.classList.remove('hidden')
    output.textContent = "Please enter a valid number"
    return;
  } else if (inputValue.value < 1) {
    output.classList.add('alert')
    output.classList.remove('hidden')
    output.textContent = "Please enter a number greater than or equal to 1"
  } else if (inputValue.value >= 4000){
    output.classList.add('alert')
    output.classList.remove('hidden')
    output.textContent = "Please enter a number less than or equal to 3999"
  } else {
   output.classList.remove('hidden')
  output.textContent = process(inputInt);
  }
}

convertBtn.addEventListener('click', inputValidation) 

inputValue.addEventListener("keydown", (e) => {
 if (e.key === "Enter") {
   inputValidation();
 }
});
