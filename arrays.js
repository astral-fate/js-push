'strict mode'

const years = [2018, 2019, 2020, 2021];

function arrIs (){
   
    console.log(years);
    }
    arrIs();
    
    



function addArrat (){

    years.unshift(2017);
    years.push(2022);
    years.push(2023);
    years.push(2024);
    console.log(years);
   
  
}
addArrat();

function removeArray (){

    years.pop();
    years.shift();
    years.shift();
    years.shift();
    console.log(years);
    
}
removeArray();