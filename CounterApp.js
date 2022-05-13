let add1 = document.querySelector(".add1");
let add2 = document.querySelector(".add2");
let add3 = document.querySelector(".add3");
let add4 = document.querySelector(".add4");

let min1 = document.querySelector(".min1");
let min2 = document.querySelector(".min2");
let min3 = document.querySelector(".min3");
let min4 = document.querySelector(".min4");

let totalcount1 = document.querySelector(".totalcount1");
let totalcount2 = document.querySelector(".totalcount2");
let totalcount3 = document.querySelector(".totalcount3");
let totalcount4 = document.querySelector(".totalcount4");

let reset = document.querySelector(".reset");

add1.addEventListener('click', addCounter1);
add2.addEventListener('click', addCounter2);
add3.addEventListener('click', addCounter3);
add4.addEventListener('click', addCounter4);

min1.addEventListener('click', minCounter1);
min2.addEventListener('click', minCounter2);
min3.addEventListener('click', minCounter3);
min4.addEventListener('click', minCounter4);

reset.addEventListener('click', resetCounter);

//Add counters
function addCounter1(){
    // console.log("It's working")
    counter_num = totalcount1.innerHTML
    totalcount1.innerHTML = parseInt(counter_num) + 1
};

function addCounter2(){
    // console.log("It's working")
    counter_num = totalcount2.innerHTML
    totalcount2.innerHTML = parseInt(counter_num) + 1
};

function addCounter3(){
    // console.log("It's working")
    counter_num = totalcount3.innerHTML
    totalcount3.innerHTML = parseInt(counter_num) + 1
};

function addCounter4(){
    // console.log("It's working")
    counter_num = totalcount4.innerHTML
    totalcount4.innerHTML = parseInt(counter_num) + 1
};

//Minus counters
function minCounter1(){
    // console.log("It's working")
    counter_num = totalcount1.innerHTML
    if (counter_num == 0){
        return false
    }
    totalcount1.innerHTML = parseInt(counter_num) - 1
};

function minCounter2(){
    // console.log("It's working")
    counter_num = totalcount2.innerHTML
    if (counter_num == 0){
        return false
    }
    totalcount2.innerHTML = parseInt(counter_num) - 1
};

function minCounter3(){
    // console.log("It's working")
    counter_num = totalcount3.innerHTML
    if (counter_num == 0){
        return false
    }
    totalcount3.innerHTML = parseInt(counter_num) - 1
};

function minCounter4(){
    // console.log("It's working")
    counter_num = totalcount4.innerHTML
    if (counter_num == 0){
        return false
    }
    totalcount4.innerHTML = parseInt(counter_num) - 1
};

//Reset counter
function resetCounter(){
    if (confirm('Are you sure you want to reset?')) {        
    totalcount1.innerHTML = 0;
    totalcount2.innerHTML = 0;
    totalcount3.innerHTML = 0;
    totalcount4.innerHTML = 0;
        console.log('Counters have been reset.');
      } else {
        // Do nothing!
        console.log('Counters not reset');
      }

};