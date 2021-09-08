javascript: (function () { 
    'use strict'; 
    for (var i = 1; i < 20; i++) {
        var a = document.getElementById("a" + i + "_" + Math.floor(Math.random()*2+3));
        var b = document.getElementById("b" + i + "_" + Math.floor(Math.random()*2+3));
        var c = document.getElementById("c" + i + "_" + Math.floor(Math.random()*2+3));
        var d = document.getElementById("d" + i + "_" + Math.floor(Math.random()*2+3));
        var e = document.getElementById("e" + i + "_" + Math.floor(Math.random()*2+3));
        var f = document.getElementById("f" + i + "_" + Math.floor(Math.random()*2+3));
        if (a != null){
            a.click();
        }
        if (b != null){
            b.click();
        }
        if (c != null){
            c.click();
        }
        if (d != null){
            d.click();
        }
    } 
})();
//created by Akabane