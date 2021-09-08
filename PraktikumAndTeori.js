javascript: (function () { 
    'use strict'; 
    for (var i = 1; i < 20; i++) {
        var a = document.getElementById("a" + i + "_" + Math.floor(Math.random()*2+3));
        var b = document.getElementById("b" + i + "_" + Math.floor(Math.random()*2+3));
        var c = document.getElementById("c" + i + "_" + Math.floor(Math.random()*2+3));
        if (a != null){
            a.click();
        }
        if (b != null){
            b.click();
        }
        if (c != null){
            c.click();
        }
    } 
})();
//created by Akabane