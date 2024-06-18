const form=document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector("#height").value)
    const weight=parseInt(document.querySelector("#weight").value)
    const result=document.querySelector('.result')
    if (height===''||height<0||isNaN(height)) {
       result.innerHTML = `please enter valid number height${height}`;
    }else if (weight === "" || weight < 0 || isNaN(weight)) {
      result.innerHTML = `please enter valid number weight${weight}`;
    }else{
        const bmi=(weight / ((height * height) / 10000)).toFixed(2);
        let category=''
        if (bmi <= 18) {
          category='underweight'
        } else if (bmi > 18 && bmi <= 24) {
          category = "Normal Range";
        } else {
          category = "Overweight";
        }
        result.innerHTML=`<span>${bmi}</span> <br><span>${category}</span>`
    }


})