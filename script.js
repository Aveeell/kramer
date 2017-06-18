var n = +prompt("Введи размерность матрицы", "2");
var startStr = prompt("Введи коэффициенты перед х через пробелы", "1 2 3 4");
var question = confirm("Хотите расчет по методу Крамера?");

var array = startStr.split(" ");
toNumber(array);
var result = 0;
determiner();

if (question){
    var free = prompt("Введите свободные члены");
    var arrFree = free.split(" ");
    toNumber(arrFree);
    kramer();
}


function determiner () {
    if (n>3) {
        alert ("Сорян, так много еще не реализовал")
    } else if (n==2){
        document.write("Вы ввели матрицу:<br>" + array[0] + "&nbsp;&nbsp;&nbsp;&nbsp;" + array[1] + "<br>" + array[2]+ "&nbsp;&nbsp;&nbsp;&nbsp;"  + array[3])
        
        result = array[0]*array[3] - array[1]*array[2];
    } else if(n==3){
        
        document.write("Вы ввели матрицу:<br>" + array[0] + "&nbsp;&nbsp;&nbsp;&nbsp;"  + array[1] + "&nbsp;&nbsp;&nbsp;&nbsp;" + array[2]+ "<br>" + array[3] + "&nbsp;&nbsp;&nbsp;&nbsp;" + array[4] + "&nbsp;&nbsp;&nbsp;&nbsp;" + array[5] + "<br>" + array[6] + "&nbsp;&nbsp;&nbsp;&nbsp;" + array [7] + "&nbsp;&nbsp;&nbsp;&nbsp;" + array[8]);
        
        result= array[0]*array[4]*array[8] + array[6]*array[1]*array[5 ]+ array[3]*array[7]*array[2] - array[6]*array[4]*array[2] - array[0]*array[7]*array[5] - array[3]*array[1]*array[8];
    }
}

function toNumber (arr) {
    for (var i=0; i<arr.length; i++){
        arr[i]=Number(arr[i]);
    }
}

function kramer () {
    if (n>3) {
        alert ("Сорян, так много еще не реализовал")
    } else if (n==2){
        var x1 = arrFree[0] * array[3] - arrFree[1] * array[1];
        var x2 = arrFree[1] * array[0] - arrFree[0] * array[2];
        
        document.writeln("<br><br>x1=" + x1/result);
        document.writeln("<br>x2=" + x2/result);
    }
    else if (n==3) {
        var x1 = arrFree[0]*array[4]*array[8] + arrFree[2]*array[1]*array[5]+ arrFree[1]*array[7]*array[2] - arrFree[2]*array[4]*array[2] - arrFree[0]*array[7]*array[5] - arrFree[1]*array[1]*array[8];
        var x2 = array[0]*arrFree[1]*array[8] + array[6]*arrFree[0]*array[5 ]+ array[3]*arrFree[2]*array[2] - array[6]*arrFree[1]*array[2] - array[0]*arrFree[2]*array[5] - array[3]*arrFree[0]*array[8];
        var x3 = array[0]*array[4]*arrFree[2] + array[6]*array[1]*arrFree[1]+ array[3]*array[7]*arrFree[0] - array[6]*array[4]*arrFree[0] - array[0]*array[7]*arrFree[1] - array[3]*array[1]*arrFree[2];
        
        document.writeln("<br><br>x1=" + x1/result);
        document.writeln("<br>x2=" + x2/result);
        document.writeln("<br>x3=" + x3/result);
    }
}

document.writeln("<br><br>Определитель матрицы равен: " + result);
