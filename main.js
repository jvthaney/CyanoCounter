//Define buttons
let add1 = document.querySelector(".add1");
let add2 = document.querySelector(".add2");
let add3 = document.querySelector(".add3");
let add4 = document.querySelector(".add4");
let add5 = document.querySelector(".add5");
let add6 = document.querySelector(".add6");
let add7 = document.querySelector(".add7");
let add8 = document.querySelector(".add8");

let min1 = document.querySelector(".min1");
let min2 = document.querySelector(".min2");
let min3 = document.querySelector(".min3");
let min4 = document.querySelector(".min4");
let min5 = document.querySelector(".min5");
let min6 = document.querySelector(".min6");
let min7 = document.querySelector(".min7");
let min8 = document.querySelector(".min8");

let totalcount1 = document.querySelector(".totalcount1");
let totalcount2 = document.querySelector(".totalcount2");
let totalcount3 = document.querySelector(".totalcount3");
let totalcount4 = document.querySelector(".totalcount4");
let totalcount5 = document.querySelector(".totalcount5");
let totalcount6 = document.querySelector(".totalcount6");
let totalcount7 = document.querySelector(".totalcount7");
let totalcount8 = document.querySelector(".totalcount8");
let tbl1 = document.querySelector(".tbl1");
let tbl2 = document.querySelector(".tbl2");
let tbl3 = document.querySelector(".tbl3");
let tbl4 = document.querySelector(".tbl4");
let tbl5 = document.querySelector(".tbl5");
let tbl6 = document.querySelector(".tbl6");
let tbl7 = document.querySelector(".tbl7");
let tbl8 = document.querySelector(".tbl8");

let reset = document.querySelector(".reset");
let exp = document.querySelector(".exp");

//Detect clicks on each button
add1.addEventListener('click', addCounter1);
add2.addEventListener('click', addCounter2);
add3.addEventListener('click', addCounter3);
add4.addEventListener('click', addCounter4);
add5.addEventListener('click', addCounter5);
add6.addEventListener('click', addCounter6);
add7.addEventListener('click', addCounter7);
add8.addEventListener('click', addCounter8);

min1.addEventListener('click', minCounter1);
min2.addEventListener('click', minCounter2);
min3.addEventListener('click', minCounter3);
min4.addEventListener('click', minCounter4);
min5.addEventListener('click', minCounter5);
min6.addEventListener('click', minCounter6);
min7.addEventListener('click', minCounter7);
min8.addEventListener('click', minCounter8);

reset.addEventListener('click', resetCounter);
exp.addEventListener('click', tableToCSV);


//////////Add-button functions
function addCounter1(){
    // console.log("It's working")
    counter_num = totalcount1.innerHTML
    totalcount1.innerHTML = parseInt(counter_num) + 1
    tbl1.innerHTML = parseInt(counter_num) + 1
    nameoutput.innerHTML = parseInt(counter_num) + 1
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


///////////Minus button functions
function minCounter1(){
    // console.log("It's working")
    counter_num = totalcount1.innerHTML
    if (counter_num == 0){
        return false
    }
    totalcount1.innerHTML = parseInt(counter_num) - 1
};
function minCounter2(){
    counter_num = totalcount2.innerHTML
    if (counter_num == 0){
        return false
    }
    totalcount2.innerHTML = parseInt(counter_num) - 1
};
function minCounter3(){
    counter_num = totalcount3.innerHTML
    if (counter_num == 0){
        return false
    }
    totalcount3.innerHTML = parseInt(counter_num) - 1
};
function minCounter4(){
    counter_num = totalcount4.innerHTML
    if (counter_num == 0){
        return false
    }
    totalcount4.innerHTML = parseInt(counter_num) - 1
};
function minCounter5(){
    counter_num = totalcount5.innerHTML
    if (counter_num == 0){
        return false
    }
    totalcount5.innerHTML = parseInt(counter_num) - 1
};
function minCounter6(){
    counter_num = totalcount6.innerHTML
    if (counter_num == 0){
        return false
    }
    totalcount6.innerHTML = parseInt(counter_num) - 1
};
function minCounter7(){
    counter_num = totalcount7.innerHTML
    if (counter_num == 0){
        return false
    }
    totalcount7.innerHTML = parseInt(counter_num) - 1
};
function minCounter8(){
    counter_num = totalcount8.innerHTML
    if (counter_num == 0){
        return false
    }
    totalcount8.innerHTML = parseInt(counter_num) - 1
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
    tbl1.innerHTML = 0;
    tbl2.innerHTML = 0;
    tbl3.innerHTML = 0;
    tbl4.innerHTML = 0;
    tbl5.innerHTML = 0;
    tbl6.innerHTML = 0;
    tbl7.innerHTML = 0;
    tbl8.innerHTML = 0;
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
const outalert = document.getElementById('outalert');

function fn1(){
    str1 = document.getElementById('text1').value;
    str2 = document.getElementById('text2').value;
    str3 = document.getElementById('text3').value;
    str4 = document.getElementById('text4').value;
    str5 = document.getElementById('text5').value;
    str6 = document.getElementById('text6').value;
    out1.innerHTML = str1;
    out2.innerHTML = str2;
    out3.innerHTML = str3;
    out4.innerHTML = str4;
    out5.innerHTML = str5;
    out6.innerHTML = str6;
    outalert.innerHTML = "Info submitted";
}