const form = document.querySelector('form')

//By doing so it will give us empty value as in starting all the values are empty.

/*
const height = parseInt(form.querySelector("#height").value)
const weight = parseInt(form.querySelector("#weight").value)
*/

form.addEventListener("submit",(e) => {
    e.preventDefault();

    //Always collect value from the form, after the final submit button has been clicked.
    const height = parseInt(form.querySelector("#height").value)
    const weight = parseInt(form.querySelector("#weight").value)
    const results = form.querySelector("#results")

    if ((height < 0 || height === '' || isNaN(height)) && (weight < 0 || weight === '' || isNaN(weight))){
        results.innerHTML = "Plz give a valid height and weight"
    }
    else if (height < 0 || height === '' || isNaN(height)){
        results.innerHTML = "Plz give a valid height"
    }
    else if (weight < 0 || weight === '' || isNaN(weight)){
        results.innerHTML = "Plz give a valid weight"
    }
    else {
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        if (bmi < 18.6) results.innerHTML = `Your BMI is ${bmi} and you are UNDER WEIGHT`
        else if (18.6 <= bmi && bmi <= 24.9) results.innerHTML = `Your BMI is ${bmi} and you are NORMAL`
        else results.innerHTML = `Your BMI is ${bmi} and you are OVERWEIGHT`
    }
    

    
})