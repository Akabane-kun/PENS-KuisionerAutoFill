javascript: (function () { 
    'use strict'; 
    var menu = document.getElementById("tdData"); 
    var table = menu.getElementsByTagName("table")[3]; 
    var rowLenght = table.rows.length - 1; 
    for (var i = 1, l = rowLenght; i < l; i++) { 
        document.getElementById("r" + i + "a" + Math.floor(Math.random()*2+3)).click(); 
    } 
})();
//created by Akabane