//Add buttons:
let add1 = document.querySelector(".add1");
let add2 = document.querySelector(".add2");
let add3 = document.querySelector(".add3");
let add4 = document.querySelector(".add4");
let add5 = document.querySelector(".add5");
let add6 = document.querySelector(".add6");
let add7 = document.querySelector(".add7");
let add8 = document.querySelector(".add8");
let add9 = document.querySelector(".add9");
let add10 = document.querySelector(".add10");
let add11 = document.querySelector(".add11");
let add12 = document.querySelector(".add12");
let add13 = document.querySelector(".add13");
let add14 = document.querySelector(".add14");
let add15 = document.querySelector(".add15");
let add16 = document.querySelector(".add16");

//Substract buttons:
let min1 = document.querySelector(".min1");
let min2 = document.querySelector(".min2");
let min3 = document.querySelector(".min3");
let min4 = document.querySelector(".min4");
let min5 = document.querySelector(".min5");
let min6 = document.querySelector(".min6");
let min7 = document.querySelector(".min7");
let min8 = document.querySelector(".min8");
let min9 = document.querySelector(".min9");
let min10 = document.querySelector(".min10");
let min11 = document.querySelector(".min11");
let min12 = document.querySelector(".min12");
let min13 = document.querySelector(".min13");
let min14 = document.querySelector(".min14");
let min15 = document.querySelector(".min15");
let min16 = document.querySelector(".min16");

//Number displayed in each counter:
let totalcount1 = document.querySelector(".totalcount1");
let totalcount2 = document.querySelector(".totalcount2");
let totalcount3 = document.querySelector(".totalcount3");
let totalcount4 = document.querySelector(".totalcount4");
let totalcount5 = document.querySelector(".totalcount5");
let totalcount6 = document.querySelector(".totalcount6");
let totalcount7 = document.querySelector(".totalcount7");
let totalcount8 = document.querySelector(".totalcount8");
let totalcount9 = document.querySelector(".totalcount9");
let totalcount10 = document.querySelector(".totalcount10");
let totalcount11 = document.querySelector(".totalcount11");
let totalcount12 = document.querySelector(".totalcount12");
let totalcount13 = document.querySelector(".totalcount13");
let totalcount14 = document.querySelector(".totalcount14");
let totalcount15 = document.querySelector(".totalcount15");
let totalcount16 = document.querySelector(".totalcount16");

let numbercounters = document.querySelector(".numbercounters");

//Columns in data table:
let tbl1 = document.querySelector(".tbl1");//Counts
let tbl2 = document.querySelector(".tbl2");
let tbl3 = document.querySelector(".tbl3");
let tbl4 = document.querySelector(".tbl4");
let tbl5 = document.querySelector(".tbl5");
let tbl6 = document.querySelector(".tbl6");
let tbl7 = document.querySelector(".tbl7");
let tbl8 = document.querySelector(".tbl8");
let tbl9 = document.querySelector(".tbl9");
let tbl10 = document.querySelector(".tbl10");
let tbl11 = document.querySelector(".tbl11");
let tbl12 = document.querySelector(".tbl12");
let tbl13 = document.querySelector(".tbl13");
let tbl14 = document.querySelector(".tbl14");
let tbl15 = document.querySelector(".tbl15");
let tbl16 = document.querySelector(".tbl16");

let tbl1b = document.querySelector(".tbl1b");//Colonies/slide
let tbl2b = document.querySelector(".tbl2b");
let tbl3b = document.querySelector(".tbl3b");
let tbl4b = document.querySelector(".tbl4b");
let tbl5b = document.querySelector(".tbl5b");
let tbl6b = document.querySelector(".tbl6b");
let tbl7b = document.querySelector(".tbl7b");
let tbl8b = document.querySelector(".tbl8b");
let tbl9b = document.querySelector(".tbl9b");
let tbl10b = document.querySelector(".tbl10b");
let tbl11b = document.querySelector(".tbl11b");
let tbl12b = document.querySelector(".tbl12b");
let tbl13b = document.querySelector(".tbl13b");
let tbl14b = document.querySelector(".tbl14b");
let tbl15b = document.querySelector(".tbl15b");
let tbl16b = document.querySelector(".tbl16b");

let tbl1c = document.querySelector(".tbl1c");//Colonies/L
let tbl2c = document.querySelector(".tbl2c");
let tbl3c = document.querySelector(".tbl3c");
let tbl4c = document.querySelector(".tbl4c");
let tbl5c = document.querySelector(".tbl5c");
let tbl6c = document.querySelector(".tbl6c");
let tbl7c = document.querySelector(".tbl7c");
let tbl8c = document.querySelector(".tbl8c");
let tbl9c = document.querySelector(".tbl9c");
let tbl10c = document.querySelector(".tbl10c");
let tbl11c = document.querySelector(".tbl11c");
let tbl12c = document.querySelector(".tbl12c");
let tbl13c = document.querySelector(".tbl13c");
let tbl14c = document.querySelector(".tbl14c");
let tbl15c = document.querySelector(".tbl15c");
let tbl16c = document.querySelector(".tbl16c");

let tbl1d = document.querySelector(".tbl1d");//Relative abundance (%)
let tbl2d = document.querySelector(".tbl2d");
let tbl3d = document.querySelector(".tbl3d");
let tbl4d = document.querySelector(".tbl4d");
let tbl5d = document.querySelector(".tbl5d");
let tbl6d = document.querySelector(".tbl6d");
let tbl7d = document.querySelector(".tbl7d");
let tbl8d = document.querySelector(".tbl8d");
let tbl9d = document.querySelector(".tbl9d");
let tbl10d = document.querySelector(".tbl10d");
let tbl11d = document.querySelector(".tbl11d");
let tbl12d = document.querySelector(".tbl12d");
let tbl13d = document.querySelector(".tbl13d");
let tbl14d = document.querySelector(".tbl14d");
let tbl15d = document.querySelector(".tbl15d");
let tbl16d = document.querySelector(".tbl16d");

let reset = document.querySelector(".reset");
let exp = document.querySelector(".exp");

//User inputs and outputs:
let gradinput = document.querySelector(".gradinput");
let depthinput = document.querySelector(".depthinput");
let diaminput = document.querySelector(".diaminput");
let gradoutput = document.querySelector(".gradoutput");
let depthoutput = document.querySelector(".depthoutput");
let diamoutput = document.querySelector(".diamoutput");

//Detect clicks on each button
add1.addEventListener('click', addCounter1);
add2.addEventListener('click', addCounter2);
add3.addEventListener('click', addCounter3);
add4.addEventListener('click', addCounter4);
add5.addEventListener('click', addCounter5);
add6.addEventListener('click', addCounter6);
add7.addEventListener('click', addCounter7);
add8.addEventListener('click', addCounter8);
add9.addEventListener('click', addCounter9);
add10.addEventListener('click', addCounter10);
add11.addEventListener('click', addCounter11);
add12.addEventListener('click', addCounter12);
add13.addEventListener('click', addCounter13);
add14.addEventListener('click', addCounter14);
add15.addEventListener('click', addCounter15);
add16.addEventListener('click', addCounter16);

min1.addEventListener('click', minCounter1);
min2.addEventListener('click', minCounter2);
min3.addEventListener('click', minCounter3);
min4.addEventListener('click', minCounter4);
min5.addEventListener('click', minCounter5);
min6.addEventListener('click', minCounter6);
min7.addEventListener('click', minCounter7);
min8.addEventListener('click', minCounter8);
min9.addEventListener('click', minCounter9);
min10.addEventListener('click', minCounter10);
min11.addEventListener('click', minCounter11);
min12.addEventListener('click', minCounter12);
min13.addEventListener('click', minCounter13);
min14.addEventListener('click', minCounter14);
min15.addEventListener('click', minCounter15);
min16.addEventListener('click', minCounter16);

//Add function for calculating relative abundance
add1.addEventListener('click', rel);
add2.addEventListener('click', rel);
add3.addEventListener('click', rel);
add4.addEventListener('click', rel);
add5.addEventListener('click', rel);
add6.addEventListener('click', rel);
add7.addEventListener('click', rel);
add8.addEventListener('click', rel);
add9.addEventListener('click', rel);
add10.addEventListener('click', rel);
add11.addEventListener('click', rel);
add12.addEventListener('click', rel);
add13.addEventListener('click', rel);
add14.addEventListener('click', rel);
add15.addEventListener('click', rel);
add16.addEventListener('click', rel);

min1.addEventListener('click', rel);
min2.addEventListener('click', rel);
min3.addEventListener('click', rel);
min4.addEventListener('click', rel);
min5.addEventListener('click', rel);
min6.addEventListener('click', rel);
min7.addEventListener('click', rel);
min8.addEventListener('click', rel);
min9.addEventListener('click', rel);
min10.addEventListener('click', rel);
min11.addEventListener('click', rel);
min12.addEventListener('click', rel);
min13.addEventListener('click', rel);
min14.addEventListener('click', rel);
min15.addEventListener('click', rel);
min16.addEventListener('click', rel);

reset.addEventListener('click', resetCounter);
exp.addEventListener('click', tableToCSV);

//////////Function to calculate relative abundance, colonies/slide, and colonies/l
function rel(){
    c1 = totalcount1.innerHTML//grab counts for each taxon
    c2 = totalcount2.innerHTML
    c3 = totalcount3.innerHTML
    c4 = totalcount4.innerHTML
    c5 = totalcount5.innerHTML
    c6 = totalcount6.innerHTML
    c7 = totalcount7.innerHTML
    c8 = totalcount8.innerHTML
    c9 = totalcount9.innerHTML
    c10 = totalcount10.innerHTML
    c11 = totalcount11.innerHTML
    c12 = totalcount12.innerHTML
    c13 = totalcount13.innerHTML
    c14 = totalcount14.innerHTML
    c15 = totalcount15.innerHTML
    c16 = totalcount16.innerHTML

    var totabundance = parseInt(c1)+parseInt(c2)+parseInt(c3)+parseInt(c4)+parseInt(c5)+parseInt(c6)+parseInt(c7)+parseInt(c8)+parseInt(c9)+parseInt(c10)+parseInt(c11)+parseInt(c12)+parseInt(c13)+parseInt(c14)+parseInt(c15)+parseInt(c16);//total cells counted of all taxa
    
    var r1 = parseFloat((c1/totabundance)*100)//relative abundance of each type
    var r2 = parseFloat((c2/totabundance)*100)
    var r3 = parseFloat((c3/totabundance)*100)
    var r4 = parseFloat((c4/totabundance)*100)
    var r5 = parseFloat((c5/totabundance)*100)
    var r6 = parseFloat((c6/totabundance)*100)
    var r7 = parseFloat((c7/totabundance)*100)
    var r8 = parseFloat((c8/totabundance)*100)
    var r9 = parseFloat((c9/totabundance)*100)
    var r10 = parseFloat((c10/totabundance)*100)
    var r11 = parseFloat((c11/totabundance)*100)
    var r12 = parseFloat((c12/totabundance)*100)
    var r13 = parseFloat((c13/totabundance)*100)
    var r14 = parseFloat((c14/totabundance)*100)
    var r15 = parseFloat((c15/totabundance)*100)
    var r16 = parseFloat((c16/totabundance)*100)
    
    tbl1d.innerHTML = parseFloat(r1.toFixed(1))//insert relative abundance in column "d" of table
    tbl2d.innerHTML = parseFloat(r2.toFixed(1))
    tbl3d.innerHTML = parseFloat(r3.toFixed(1))
    tbl4d.innerHTML = parseFloat(r4.toFixed(1))
    tbl5d.innerHTML = parseFloat(r5.toFixed(1))
    tbl6d.innerHTML = parseFloat(r6.toFixed(1))
    tbl7d.innerHTML = parseFloat(r7.toFixed(1))
    tbl8d.innerHTML = parseFloat(r8.toFixed(1))
    tbl9d.innerHTML = parseFloat(r9.toFixed(1))
    tbl10d.innerHTML = parseFloat(r10.toFixed(1))
    tbl11d.innerHTML = parseFloat(r11.toFixed(1))
    tbl12d.innerHTML = parseFloat(r12.toFixed(1))
    tbl13d.innerHTML = parseFloat(r13.toFixed(1))
    tbl14d.innerHTML = parseFloat(r14.toFixed(1))
    tbl15d.innerHTML = parseFloat(r15.toFixed(1))
    tbl16d.innerHTML = parseFloat(r16.toFixed(1))

    var rows = parseFloat(document.getElementById("text10").value)//#rows coutned by user
    var percslide = parseFloat(rows / 20) //percent of slide counted based on number of rows
    var gradcylinder = parseFloat(document.getElementById("text7").value)//volume in graduated cylinder provided by user
    var literconv = parseFloat(1000)//conversion factor from ml to liters
    var gradcylinderliter = parseFloat(gradcylinder / literconv)//volume in liters

    var cps1 = parseFloat(c1/percslide) //5 counted rows x 4 = total of 20 rows per slide
    var cps2 = parseFloat(c2/percslide) 
    var cps3 = parseFloat(c3/percslide) 
    var cps4 = parseFloat(c4/percslide) 
    var cps5 = parseFloat(c5/percslide) 
    var cps6 = parseFloat(c6/percslide) 
    var cps7 = parseFloat(c7/percslide) 
    var cps8 = parseFloat(c8/percslide) 
    var cps9 = parseFloat(c9/percslide)
    var cps10 = parseFloat(c10/percslide)
    var cps11 = parseFloat(c11/percslide)
    var cps12 = parseFloat(c12/percslide)
    var cps13 = parseFloat(c13/percslide)
    var cps14 = parseFloat(c14/percslide)
    var cps15 = parseFloat(c15/percslide)
    var cps16 = parseFloat(c16/percslide)

    var chambervol = parseFloat(0.001)//1 ml = 0.001 L (Sedgewick Rafter Cell volume)
    var propcounted = parseFloat(chambervol / gradcylinderliter) //proportion volume of Sedgewick Rafter counted based on #rows counted

    var cpsamp1 = parseFloat(cps1 / propcounted)//cells per sample
    var cpsamp2 = parseFloat(cps2 / propcounted)
    var cpsamp3 = parseFloat(cps3 / propcounted)
    var cpsamp4 = parseFloat(cps4 / propcounted)
    var cpsamp5 = parseFloat(cps5 / propcounted)
    var cpsamp6 = parseFloat(cps6 / propcounted)
    var cpsamp7 = parseFloat(cps7 / propcounted)
    var cpsamp8 = parseFloat(cps8 / propcounted)
    var cpsamp9 = parseFloat(cps9 / propcounted)
    var cpsamp10 = parseFloat(cps10 / propcounted)
    var cpsamp11 = parseFloat(cps11 / propcounted)
    var cpsamp12 = parseFloat(cps12 / propcounted)
    var cpsamp13 = parseFloat(cps13 / propcounted)
    var cpsamp14 = parseFloat(cps14 / propcounted)
    var cpsamp15 = parseFloat(cps15 / propcounted)
    var cpsamp16 = parseFloat(cps16 / propcounted)
    
    var diameter = parseFloat(document.getElementById("text9").value)
    var depth = parseFloat(document.getElementById("text8").value)
    var r = parseFloat(diameter/2)
    var lakewaterm3 = parseFloat(Math.PI * r^2 * depth)//Volume cylinder = pi*r^2*h
    var lakewaterL = parseFloat(lakewaterm3 * 1000) //cubic meters to liters

    var cpl1 = parseFloat(cpsamp1/lakewaterL)//cells per liter lake water
    var cpl2 = parseFloat(cpsamp2/lakewaterL)
    var cpl3 = parseFloat(cpsamp3/lakewaterL)
    var cpl4 = parseFloat(cpsamp4/lakewaterL)
    var cpl5 = parseFloat(cpsamp5/lakewaterL)
    var cpl6 = parseFloat(cpsamp6/lakewaterL)
    var cpl7 = parseFloat(cpsamp7/lakewaterL)
    var cpl8 = parseFloat(cpsamp8/lakewaterL)
    var cpl9 = parseFloat(cpsamp9/lakewaterL)
    var cpl10 = parseFloat(cpsamp10/lakewaterL)
    var cpl11 = parseFloat(cpsamp11/lakewaterL)
    var cpl12 = parseFloat(cpsamp12/lakewaterL)
    var cpl13 = parseFloat(cpsamp13/lakewaterL)
    var cpl14 = parseFloat(cpsamp14/lakewaterL)
    var cpl15 = parseFloat(cpsamp15/lakewaterL)
    var cpl16 = parseFloat(cpsamp16/lakewaterL)
    
    tbl1b.innerHTML = parseFloat(cps1.toFixed(3))//insert cells per sample in column "b" of table
    tbl2b.innerHTML = parseFloat(cps2.toFixed(3))
    tbl3b.innerHTML = parseFloat(cps3.toFixed(3))
    tbl4b.innerHTML = parseFloat(cps4.toFixed(3))
    tbl5b.innerHTML = parseFloat(cps5.toFixed(3))
    tbl6b.innerHTML = parseFloat(cps6.toFixed(3))
    tbl7b.innerHTML = parseFloat(cps7.toFixed(3))
    tbl8b.innerHTML = parseFloat(cps8.toFixed(3))
    tbl9b.innerHTML = parseFloat(cps9.toFixed(3))
    tbl10b.innerHTML = parseFloat(cps10.toFixed(3))
    tbl11b.innerHTML = parseFloat(cps11.toFixed(3))
    tbl12b.innerHTML = parseFloat(cps12.toFixed(3))
    tbl13b.innerHTML = parseFloat(cps13.toFixed(3))
    tbl14b.innerHTML = parseFloat(cps14.toFixed(3))
    tbl15b.innerHTML = parseFloat(cps15.toFixed(3))
    tbl16b.innerHTML = parseFloat(cps16.toFixed(3))

    tbl1c.innerHTML = parseFloat(cpl1.toFixed(3))//insert cells per liter lake water in column "c" of table
    tbl2c.innerHTML = parseFloat(cpl2.toFixed(3))
    tbl3c.innerHTML = parseFloat(cpl3.toFixed(3))
    tbl4c.innerHTML = parseFloat(cpl4.toFixed(3))
    tbl5c.innerHTML = parseFloat(cpl5.toFixed(3))
    tbl6c.innerHTML = parseFloat(cpl6.toFixed(3))
    tbl7c.innerHTML = parseFloat(cpl7.toFixed(3))
    tbl8c.innerHTML = parseFloat(cpl8.toFixed(3))
    tbl9c.innerHTML = parseFloat(cpl9.toFixed(3))
    tbl10c.innerHTML = parseFloat(cpl10.toFixed(3))
    tbl11c.innerHTML = parseFloat(cpl11.toFixed(3))
    tbl12c.innerHTML = parseFloat(cpl12.toFixed(3))
    tbl13c.innerHTML = parseFloat(cpl13.toFixed(3))
    tbl14c.innerHTML = parseFloat(cpl14.toFixed(3))
    tbl15c.innerHTML = parseFloat(cpl15.toFixed(3))
    tbl16c.innerHTML = parseFloat(cpl16.toFixed(3))
}

//////////Add-button functions
function addCounter1(){
    //First add counter # to table
    // console.log("It's working")
    counter_num = totalcount1.innerHTML
    c2 = totalcount2.innerHTML
    totalcount1.innerHTML = parseInt(counter_num) + 1
    tbl1.innerHTML = parseInt(counter_num) + 1
};

function addCounter2(){
    counter_num = totalcount2.innerHTML
    totalcount2.innerHTML = parseInt(counter_num) + 1
    tbl2.innerHTML = parseInt(counter_num) + 1
};
function addCounter3(){
    counter_num = totalcount3.innerHTML
    totalcount3.innerHTML = parseInt(counter_num) + 1
    tbl3.innerHTML = parseInt(counter_num) + 1
};
function addCounter4(){
    counter_num = totalcount4.innerHTML
    totalcount4.innerHTML = parseInt(counter_num) + 1
    tbl4.innerHTML = parseInt(counter_num) + 1
};
function addCounter5(){
    counter_num = totalcount5.innerHTML
    totalcount5.innerHTML = parseInt(counter_num) + 1
    tbl5.innerHTML = parseInt(counter_num) + 1
};
function addCounter6(){
    // console.log("It's working")
    counter_num = totalcount6.innerHTML
    totalcount6.innerHTML = parseInt(counter_num) + 1
    tbl6.innerHTML = parseInt(counter_num) + 1
};
function addCounter7(){
    counter_num = totalcount7.innerHTML
    totalcount7.innerHTML = parseInt(counter_num) + 1
    tbl7.innerHTML = parseInt(counter_num) + 1
};
function addCounter8(){
    counter_num = totalcount8.innerHTML
    totalcount8.innerHTML = parseInt(counter_num) + 1
    tbl8.innerHTML = parseInt(counter_num) + 1
};
function addCounter9(){
    counter_num = totalcount9.innerHTML
    totalcount9.innerHTML = parseInt(counter_num) + 1
    tbl9.innerHTML = parseInt(counter_num) + 1
};
function addCounter10(){
    counter_num = totalcount10.innerHTML
    totalcount10.innerHTML = parseInt(counter_num) + 1
    tbl10.innerHTML = parseInt(counter_num) + 1
};
function addCounter11(){
    counter_num = totalcount11.innerHTML
    totalcount11.innerHTML = parseInt(counter_num) + 1
    tbl11.innerHTML = parseInt(counter_num) + 1
};
function addCounter12(){
    counter_num = totalcount12.innerHTML
    totalcount12.innerHTML = parseInt(counter_num) + 1
    tbl12.innerHTML = parseInt(counter_num) + 1
};
function addCounter13(){
    counter_num = totalcount13.innerHTML
    totalcount13.innerHTML = parseInt(counter_num) + 1
    tbl13.innerHTML = parseInt(counter_num) + 1
};
function addCounter14(){
    counter_num = totalcount14.innerHTML
    totalcount14.innerHTML = parseInt(counter_num) + 1
    tbl14.innerHTML = parseInt(counter_num) + 1
};
function addCounter15(){
    counter_num = totalcount15.innerHTML
    totalcount15.innerHTML = parseInt(counter_num) + 1
    tbl15.innerHTML = parseInt(counter_num) + 1
};
function addCounter16(){
    counter_num = totalcount16.innerHTML
    totalcount16.innerHTML = parseInt(counter_num) + 1
    tbl16.innerHTML = parseInt(counter_num) + 1
};

///////////Minus button functions
function minCounter1(){
    // console.log("It's working")
    counter_num = totalcount1.innerHTML
    if (counter_num == 0){
        return false
    }
    totalcount1.innerHTML = parseInt(counter_num) - 1
    tbl1.innerHTML = parseInt(counter_num) - 1
};
function minCounter2(){
    counter_num = totalcount2.innerHTML
    if (counter_num == 0){
        return false
    }
    totalcount2.innerHTML = parseInt(counter_num) - 1
    tbl2.innerHTML = parseInt(counter_num) - 1
};
function minCounter3(){
    counter_num = totalcount3.innerHTML
    if (counter_num == 0){
        return false
    }
    totalcount3.innerHTML = parseInt(counter_num) - 1
    tbl3.innerHTML = parseInt(counter_num) - 1
};
function minCounter4(){
    counter_num = totalcount4.innerHTML
    if (counter_num == 0){
        return false
    }
    totalcount4.innerHTML = parseInt(counter_num) - 1
    tbl4.innerHTML = parseInt(counter_num) - 1
};
function minCounter5(){
    counter_num = totalcount5.innerHTML
    if (counter_num == 0){
        return false
    }
    totalcount5.innerHTML = parseInt(counter_num) - 1
    tbl5.innerHTML = parseInt(counter_num) - 1
};
function minCounter6(){
    counter_num = totalcount6.innerHTML
    if (counter_num == 0){
        return false
    }
    totalcount6.innerHTML = parseInt(counter_num) - 1
    tbl6.innerHTML = parseInt(counter_num) - 1
};
function minCounter7(){
    counter_num = totalcount7.innerHTML
    if (counter_num == 0){
        return false
    }
    totalcount7.innerHTML = parseInt(counter_num) - 1
    tbl7.innerHTML = parseInt(counter_num) - 1
};
function minCounter8(){
    counter_num = totalcount8.innerHTML
    if (counter_num == 0){
        return false
    }
    totalcount8.innerHTML = parseInt(counter_num) - 1
    tbl8.innerHTML = parseInt(counter_num) - 1
};
function minCounter9(){
    counter_num = totalcount9.innerHTML
    if (counter_num == 0){
        return false
    }
    totalcount9.innerHTML = parseInt(counter_num) - 1
    tbl9.innerHTML = parseInt(counter_num) - 1
};
function minCounter10(){
    counter_num = totalcount10.innerHTML
    if (counter_num == 0){
        return false
    }
    totalcount10.innerHTML = parseInt(counter_num) - 1
    tbl10.innerHTML = parseInt(counter_num) - 1
};
function minCounter11(){
    counter_num = totalcount11.innerHTML
    if (counter_num == 0){
        return false
    }
    totalcount11.innerHTML = parseInt(counter_num) - 1
    tbl11.innerHTML = parseInt(counter_num) - 1
};
function minCounter12(){
    counter_num = totalcount12.innerHTML
    if (counter_num == 0){
        return false
    }
    totalcount12.innerHTML = parseInt(counter_num) - 1
    tbl12.innerHTML = parseInt(counter_num) - 1
};
function minCounter13(){
    counter_num = totalcount13.innerHTML
    if (counter_num == 0){
        return false
    }
    totalcount13.innerHTML = parseInt(counter_num) - 1
    tbl13.innerHTML = parseInt(counter_num) - 1
};
function minCounter14(){
    counter_num = totalcount14.innerHTML
    if (counter_num == 0){
        return false
    }
    totalcount14.innerHTML = parseInt(counter_num) - 1
    tbl14.innerHTML = parseInt(counter_num) - 1
};
function minCounter15(){
    counter_num = totalcount15.innerHTML
    if (counter_num == 0){
        return false
    }
    totalcount15.innerHTML = parseInt(counter_num) - 1
    tbl15.innerHTML = parseInt(counter_num) - 1
};
function minCounter16(){
    counter_num = totalcount16.innerHTML
    if (counter_num == 0){
        return false
    }
    totalcount16.innerHTML = parseInt(counter_num) - 1
    tbl16.innerHTML = parseInt(counter_num) - 1
};


//////////Reset button function
function resetCounter(){
    if (confirm('Are you sure you want to reset?')) {        
    totalcount1.innerHTML = 0;
    totalcount2.innerHTML = 0;
    totalcount3.innerHTML = 0;
    totalcount4.innerHTML = 0;
    totalcount5.innerHTML = 0;
    totalcount6.innerHTML = 0;
    totalcount7.innerHTML = 0;
    totalcount8.innerHTML = 0;
    totalcount9.innerHTML = 0;
    totalcount10.innerHTML = 0;
    totalcount11.innerHTML = 0;
    totalcount12.innerHTML = 0;
    totalcount13.innerHTML = 0;
    totalcount14.innerHTML = 0;
    totalcount15.innerHTML = 0;
    totalcount16.innerHTML = 0;
    tbl1.innerHTML = 0;
    tbl2.innerHTML = 0;
    tbl3.innerHTML = 0;
    tbl4.innerHTML = 0;
    tbl5.innerHTML = 0;
    tbl6.innerHTML = 0;
    tbl7.innerHTML = 0;
    tbl8.innerHTML = 0;
    tbl9.innerHTML = 0;
    tbl10.innerHTML = 0;
    tbl11.innerHTML = 0;
    tbl12.innerHTML = 0;
    tbl13.innerHTML = 0;
    tbl14.innerHTML = 0;
    tbl15.innerHTML = 0;
    tbl16.innerHTML = 0;
    tbl1b.innerHTML = 0;
    tbl2b.innerHTML = 0;
    tbl3b.innerHTML = 0;
    tbl4b.innerHTML = 0;
    tbl5b.innerHTML = 0;
    tbl6b.innerHTML = 0;
    tbl7b.innerHTML = 0;
    tbl8b.innerHTML = 0;
    tbl9b.innerHTML = 0;
    tbl10b.innerHTML = 0;
    tbl11b.innerHTML = 0;
    tbl12b.innerHTML = 0;
    tbl13b.innerHTML = 0;
    tbl14b.innerHTML = 0;
    tbl15b.innerHTML = 0;
    tbl16b.innerHTML = 0;
    tbl1c.innerHTML = 0;
    tbl2c.innerHTML = 0;
    tbl3c.innerHTML = 0;
    tbl4c.innerHTML = 0;
    tbl5c.innerHTML = 0;
    tbl6c.innerHTML = 0;
    tbl7c.innerHTML = 0;
    tbl8c.innerHTML = 0;
    tbl9c.innerHTML = 0;
    tbl10c.innerHTML = 0;
    tbl11c.innerHTML = 0;
    tbl12c.innerHTML = 0;
    tbl13c.innerHTML = 0;
    tbl14c.innerHTML = 0;
    tbl15c.innerHTML = 0;
    tbl16c.innerHTML = 0;
        console.log('Counters have been reset.');
      } else {
        // Do nothing!
        console.log('Counters not reset');
      }

};

function tableToCSV() { //When the tableToCSV() function is triggered, it accesses each table row data using the document object model.

        // Variable to store the final csv data
        var csv_data = [];
    
        // Get each row data
        var rows = document.getElementsByTagName('tr'); //The getElementByTagName(‘tr’) retrieves all table row data and stores it in rows variable
        for (var i = 0; i < rows.length; i++) {
    
            // Get each column data
            var cols = rows[i].querySelectorAll('td'); //The rows[i].querySelectorAll(‘td’) will get each column data of that table row.
    
            // Stores each csv row data
            var csvrow = [];
            for (var j = 0; j < cols.length; j++) { //It is stored in csvrow variable. 
    
                // Get the text data of each cell of
                // a row and push it to csvrow
                csvrow.push(cols[j].innerHTML);
            }
    
            // Combine each column value with comma
            csv_data.push(csvrow.join(",")); //The csvrow variable data are combined w/ commas to represent a row of a CSV file - it's stored in a csv_data variable representing the data of our CSV file in combination.
        }
        // combine each row data with new line character
        csv_data = csv_data.join('\n'); //We then join csv_data values using the newline character as each row in a CSV file is represented in a new line.
        
        // Call this function to download csv file 
        downloadCSVFile(csv_data);
}

function downloadCSVFile(csv_data) { //This function will take the CSV data that was formed earlier, as the argument 

        // Create CSV file object and feed our
        // csv_data into it
        CSVFile = new Blob([csv_data], { type: "text/csv" }); //We will create a new file by creating a blob object of type CSV and then feed our CSV data into it
    
        // Create to temporary link to initiate
        // download process
        var temp_link = document.createElement('a'); //We need a link to trigger the browser window to download the file
    
        // Download csv file
        strname = document.getElementById('text1').value;
        strdate = document.getElementById('text2').value;
        temp_link.download = String(strname) + String(strdate)+".csv"; //We will create a new link using DOM and provide its attributes with the appropriate values
        var url = window.URL.createObjectURL(CSVFile);
        temp_link.href = url;
    
        // This link should not be displayed
        temp_link.style.display = "none"; //This link so created should not be visible to the user as this link is solely for download triggering purposes and not for any other
        document.body.appendChild(temp_link);
    
        // Automatically click the link to trigger download
        temp_link.click(); //Using click() event listener, we can automatically let the link be clicked and download our CSV file.
        document.body.removeChild(temp_link); 
        // Now our CSV file should be successfully downloade
    }
    

/////////////////////Submit info button
const out1 = document.getElementById('output1');
const out2 = document.getElementById('output2');
const out3 = document.getElementById('output3');
const out4 = document.getElementById('output4');
const out5 = document.getElementById('output5');
const out6 = document.getElementById('output6');
const out7 = document.getElementById('output7');
const out8 = document.getElementById('output8');
const out9 = document.getElementById('output9');
const out10 = document.getElementById('output10');
const out11 = document.getElementById('output11');
const out12 = document.getElementById('output12');
const outalert = document.getElementById('outalert');

function fn1(){ //called in html using "onclick=" in the button 
    str1 = document.getElementById('text1').value;
    str2 = document.getElementById('text2').value;
    str3 = document.getElementById('text3').value;
    str4 = document.getElementById('text4').value;
    str5 = document.getElementById('text5').value;
    str6 = document.getElementById('text6').value;
    str7 = document.getElementById('text7').value;
    str8 = document.getElementById('text8').value;
    str9 = document.getElementById('text9').value;
    str10 = document.getElementById('text10').value;
    str11 = document.getElementById('text11').value;
    str12 = document.getElementById('text12').value;
    out1.innerHTML = str1;
    out2.innerHTML = str2;
    out3.innerHTML = str3;
    out4.innerHTML = str4;
    out5.innerHTML = str5;
    out6.innerHTML = str6;
    out7.innerHTML = str7;
    out8.innerHTML = str8;
    out9.innerHTML = str9;
    out10.innerHTML = str10;
    out11.innerHTML = str11;
    out12.innerHTML = str12;
    outalert.innerHTML = "Info submitted";
}

////////////// Adjust taxon name in table
const tax1out = document.getElementById("tax1out");
const tax2out = document.getElementById("tax2out");
const tax3out = document.getElementById("tax3out");
const tax4out = document.getElementById("tax4out");
const tax5out = document.getElementById("tax5out");
const tax6out = document.getElementById("tax6out");
const tax7out = document.getElementById("tax7out");
const tax8out = document.getElementById("tax8out");
const tax9out = document.getElementById("tax9out");
const tax10out = document.getElementById("tax10out");
const tax11out = document.getElementById("tax11out");
const tax12out = document.getElementById("tax12out");
const tax13out = document.getElementById("tax13out");
const tax14out = document.getElementById("tax14out");
const tax15out = document.getElementById("tax15out");
const tax16out = document.getElementById("tax16out");

function namechange(){
    tax1 = document.getElementById("tax1").value;
    tax2 = document.getElementById("tax2").value;
    tax3 = document.getElementById("tax3").value;
    tax4 = document.getElementById("tax4").value;
    tax5 = document.getElementById("tax5").value;
    tax6 = document.getElementById("tax6").value;
    tax7 = document.getElementById("tax7").value;
    tax8 = document.getElementById("tax8").value;
    tax9 = document.getElementById("tax9").value;
    tax10 = document.getElementById("tax10").value;
    tax11 = document.getElementById("tax11").value;
    tax12 = document.getElementById("tax12").value;
    tax13 = document.getElementById("tax13").value;
    tax14 = document.getElementById("tax14").value;
    tax15 = document.getElementById("tax15").value;
    tax16 = document.getElementById("tax16").value;
    
    tax1out.innerHTML = tax1;
    tax2out.innerHTML = tax2;
    tax3out.innerHTML = tax3;
    tax4out.innerHTML = tax4;
    tax5out.innerHTML = tax5;
    tax6out.innerHTML = tax6;
    tax7out.innerHTML = tax7;
    tax8out.innerHTML = tax8;
    tax9out.innerHTML = tax9;
    tax10out.innerHTML = tax10;
    tax11out.innerHTML = tax11;
    tax12out.innerHTML = tax12;
    tax13out.innerHTML = tax13;
    tax14out.innerHTML = tax14;
    tax15out.innerHTML = tax15;
    tax16out.innerHTML = tax16;
}


///////////////// Add more counters
function addnewcounter() {
    counter_num = numbercounters.innerHTML;
    numbercounters.innerHTML = parseInt(counter_num) + 1;
    var x1 = document.getElementById("nextcounter");
    var y1 = document.getElementById("nextrow");
    var x2 = document.getElementById("nextcounter2");
    var y2 = document.getElementById("nextrow2");
    var x3 = document.getElementById("nextcounter3");
    var y3 = document.getElementById("nextrow3");
    var x4 = document.getElementById("nextcounter4");
    var y4 = document.getElementById("nextrow4");
    var x5 = document.getElementById("nextcounter5");
    var y5 = document.getElementById("nextrow5");
    var x6 = document.getElementById("nextcounter6");
    var y6 = document.getElementById("nextrow6");
    var x7 = document.getElementById("nextcounter7");
    var y7 = document.getElementById("nextrow7");
    var x8 = document.getElementById("nextcounter8");
    var y8 = document.getElementById("nextrow8");

    if (x1.style.display === "none") {//Add counter
        x1.style.display = "block";}
    if (y1.style.display === "none"){    //Add table row
        y1.style.display = "table-row"};

    if (numbercounters.innerHTML == 2){
        if (x2.style.display === "none") {
            x2.style.display = "block";}
          if (y2.style.display === "none"){
              y2.style.display = "table-row";}
    }       
    if (numbercounters.innerHTML == 3){
        if (x3.style.display === "none") {
            x3.style.display = "block";}
          if (y3.style.display === "none"){
              y3.style.display = "table-row";}
    }       
    if (numbercounters.innerHTML == 4){
        if (x4.style.display === "none") {
            x4.style.display = "block";}
          if (y4.style.display === "none"){
              y4.style.display = "table-row";}
    }       
    if (numbercounters.innerHTML == 5){
        if (x5.style.display === "none") {
            x5.style.display = "block";}
          if (y5.style.display === "none"){
              y5.style.display = "table-row";}
    }       
    if (numbercounters.innerHTML == 6){
        if (x6.style.display === "none") {
            x6.style.display = "block";}
          if (y6.style.display === "none"){
              y6.style.display = "table-row";}
    }       
    if (numbercounters.innerHTML == 7){
        if (x7.style.display === "none") {
            x7.style.display = "block";}
          if (y7.style.display === "none"){
              y7.style.display = "table-row";}
    }       
    if (numbercounters.innerHTML == 8){
        if (x8.style.display === "none") {
            x8.style.display = "block";}
          if (y8.style.display === "none"){
              y8.style.display = "table-row";}
    }       
}





