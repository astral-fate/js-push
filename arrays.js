'strict mode'

const years = [2018, 2019, 2020, 2021];


function arrIs (){
//let years = [2018, 2019, 2020, 2021];
console.log(years);
}
arrIs(2017, 2016);




function addArrat (){

    years.unshift(2017);
    years.push(2022);
    years.push(2023);
    years.push(2024);
    console.log(years);
    return arrIs;
  
}
addArrat();

function removeArray (){

    years.pop();
    years.shift();
    years.shift();
    years.shift();
    console.log(years);
    return arrIs;
  
}
removeArray();