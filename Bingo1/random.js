$(document).ready(function(){
var btn = document.getElementById('btn');

btn.addEventListener('click', UpdateTable);

var maxLength = 5;

function CreateLottoValues() {
    return Math.floor(Math.random() * 99 + 1);
}

//create table
function UpdateTable() {
    var table1 = new Array();
    var table2 = new Array();
    var table3 = new Array();
    var table4 = new Array();
    for (var i = 0; i < maxLength; i++) {
        for (var j = 0; j < maxLength; j++) {
            tmp = 'cell' + i + j;
            random1 = CreateLottoValues();
            while (table1.indexOf(random1) > -1){
                random1 = CreateLottoValues();
            } 
            document.querySelector('.item1 #' + tmp).innerHTML = random1;
            table1.push(random1);
              
         }
    }

for (var i = 0; i < maxLength; i++) {
    for (var j = 0; j < maxLength; j++) {
        tmp = 'cell' + i + j;
        random = CreateLottoValues();
        while (table2.indexOf(random) > -1){
            random = CreateLottoValues();
        } 
        document.querySelector('.item2 #' + tmp).innerHTML = random;
        table2.push(random);  
     }
}

for (var i = 0; i < maxLength; i++) {
    for (var j = 0; j < maxLength; j++) {
        tmp = 'cell' + i + j;
        random3 = CreateLottoValues();
        while (table3.indexOf(random) > -1){
            random3 = CreateLottoValues();
        } 
        document.querySelector('.item3 #' + tmp).innerHTML = random3;
        table3.push(random3);  
     }
}

for (var i = 0; i < maxLength; i++) {
    for (var j = 0; j < maxLength; j++) {
        tmp = 'cell' + i + j;
        random4 = CreateLottoValues();
        while (table4.indexOf(random) > -1){
            random4 = CreateLottoValues();
        } 
        document.querySelector('.item4 #' + tmp).innerHTML = random4;
        table2.push(random4);  
     }
}

}
UpdateTable();
});