
let jeu1 = document.getElementById("jeu1");
let jeu3 = document.getElementById("jeu3"); 
let jeu4 = document.getElementById("jeu4"); 
let jeu5 = document.getElementById("jeu5"); 
let jeu6 = document.getElementById("jeu6"); 
let jeu7 = document.getElementById("jeu7"); 
let jeu8 = document.getElementById("jeu8"); 
let jeu9 = document.getElementById("jeu5") 

let xcase1 = document.getElementById("xcase1")
let ocase1 = document.getElementById("ocase1")

let xcase2 = document.getElementById("xcase2");
let ocase2 = document.getElementById("ocase2");

let xcase3 = document.getElementById("xcase3");
let ocase3 = document.getElementById("ocase3");

let xcase4 = document.getElementById("xcase4");
let ocase4 = document.getElementById("ocase4");

let xcase5 = document.getElementById("xcase5");
let ocase5 = document.getElementById("ocase5");

let xcase6 = document.getElementById("xcase6");
let ocase6 = document.getElementById("ocase6");

let xcase7 = document.getElementById("xcase7");
let ocase7 = document.getElementById("ocase7");


let xcase8 = document.getElementById("xcase8");
let ocase8 = document.getElementById("ocase8");

let xcase9 = document.getElementById("xcase9");
let ocase9 = document.getElementById("ocase9")

/*


jeu1.addEventListener("click",function(){
    xcase1.classList.remove("X")
    ocase1.classList.remove("O")

    let a = prompt ("X ou O")
    if (a==="x"){
        xcase1.classList.add("X");
        a=1;
    }
    else {
        ocase1.classList.add("O");
       a=0;
    }

}
)


jeu2.addEventListener("click",function(){
    xcase2.classList.remove("X")
    ocase2.classList.remove("O")
    let b = prompt ("X ou O");
        if (b==="x"){
           xcase2.classList.add("X")
           b=1;
        }
        else {
            ocase2.classList.add("O")
           b=0;
        }
    
    }
    )
    
jeu3.addEventListener("click",function(){
    xcase3.classList.remove("X")
    ocase3.classList.remove("O")
    let c = prompt ("X ou O");
        if (c==="x"){
            xcase3.classList.add("X");
            c=1;
        }
        else {
            ocase3.classList.add("O")
            c=0;
        }
    }
    )

    
jeu4.addEventListener("click",function(){
    xcase4.classList.remove("X")
    ocase4.classList.remove("O")
    let d = prompt ("X ou O");
        if (d==="x"){
            xcase4.classList.add("X")
            d=1;
        }
        else {
            ocase4.classList.add("O")
            d=0;
        }
    
    }
    )
    
jeu5.addEventListener("click",function(){
    xcase5.classList.remove("X")
    ocase5.classList.remove("O")
    let e = prompt ("X ou O");
        if (e==="x"){
            xcase5.classList.add("X")
            e=1;
        }
        else {
            ocase5.classList.add("O")
            e=0;
        }
    }
    )
    

jeu6.addEventListener("click",function(){
    xcase6.classList.remove("X")
    ocase6.classList.remove("O")
    let f = prompt ("X ou O");
        if (f==="x"){
            xcase6.classList.add("X")
            f=1;
        }
        else {
            ocase6.classList.add("O")
            f=0;
        }
        
    }
    )
        
        
    
jeu7.addEventListener("click",function(){
    xcase7.classList.remove("X")
    ocase7.classList.remove("O")
    let g = prompt ("X ou O");
        if (g==="x"){
            xcase7.classList.add("X")
            g=1;
        }
        else {
            ocase7.classList.add("O")
            g=0;
        }
}  
    )


jeu8.addEventListener("click",function(){
    xcase8.classList.remove("X")
    ocase8.classList.remove("O")
    let h = prompt ("X ou O");
        if (h==="x"){
            xcase8.classList.add("X")
            h=1;
        }
        else {
            ocase8.classList.add("O");
            h=0;
            
        }

    }
    )
                    
        
                    

jeu5.addEventListener("click",function(){
    xcase5.classList.remove("X")
    ocase5.classList.remove("O")
    let j = prompt ("X ou O");
        if (j==="x"){
            xcase5.classList.add("X")
            j=1;
        }
        else {
            ocase5.classList.add("O")
            j=0;
        }
      
    }
    )
let p = (j+h+g);
let q = (c+f+j);
if (p===3) {
    console.log("gagne")
}
else if (q===3){
    console.log("gagne")
}
else{
    console.log("perdu")
}


// autre idee
/*
let a = prompt ("X ou O")
if (a==="x"){
    a=1;
}
else {
   a=0;
}

*/
// avec les fonction

function jeucase1() {
    

jeu1.addEventListener("click",function(){
    xcase1.classList.remove("X")
    ocase1.classList.remove("O")

    if (a===1){
        xcase1.classList.add("X");

    }
    else {
        ocase1.classList.add("O");
    }

}
)
}

let a = prompt ("case 1 X ou O")
if (a==="x"){
    a=1;
}
else {
   a=0;
}

jeucase1()
/*
function jeucase2() {
    

jeu2.addEventListener("click",function(){
xcase2.classList.remove("X")
ocase2.classList.remove("O")

if (b===1){
    xcase2.classList.add("X");
    b=1;
}
else {
    ocase2.classList.add("O");
    b=0;
}

}
)
}

let b = prompt ("case 2 X ou O")
if (b==="x"){
b=1;
}
else {
b=0;
}

jeucase2()

function jeucase3() {
    

jeu3.addEventListener("click",function(){
    xcase3.classList.remove("X")
    ocase3.classList.remove("O")

    if (c===1){
        xcase3.classList.add("X");
        c=1;
    }
    else {
        ocase3.classList.add("O");
        c=0;
    }

}
)
}
    
let c = prompt ("case 3 X ou O")
if (c==="x"){
    c=1;
}
else {
    c=0;
}

jeucase3()


function jeucase4() {


    jeu4.addEventListener("click",function(){
        xcase4.classList.remove("X")
        ocase4.classList.remove("O")
    
        if (d===1){
            xcase4.classList.add("X");
            d=1;
        }
        else {
            ocase4.classList.add("O");
            d=0;
        }
    
    }
    )
    }
        
    let d = prompt ("X ou O")
    if (a==="x"){
        a=1;
    }
    else {
        a=0;
    }
    
    jeucase4()


    function jeucase5() {
    

        jeu5.addEventListener("click",function(){
        xcase5.classList.remove("X")
        ocase5.classList.remove("O")
        
        if (a===1){
            xcase5.classList.add("X");
            a=1;
        }
        else {
            ocase5.classList.add("O");
            a=0;
        }
        
        }
        )
        }
        
        let a = prompt ("X ou O")
        if (a==="x"){
        a=1;
        }
        else {
        a=0;
        }
        
        jeucase5()



function jeucase6() {


        jeu6.addEventListener("click",function(){
        xcase6.classList.remove("X")
        ocase6.classList.remove("O")
        
        if (a===1){
            xcase6.classList.add("X");
            a=1;
        }
        else {
            ocase6.classList.add("O");
            a=0;
        }
        
        }
        )
        }
        
        let a = prompt ("X ou O")
        if (a==="x"){
        a=1;
        }
        else {
        a=0;
        }
        
        jeucase6()

        function jeucase7() {


            jeu7.addEventListener("click",function(){
            xcase7.classList.remove("X")
            ocase7.classList.remove("O")
            
            if (a===1){
                xcase7.classList.add("X");
                a=1;
            }
            else {
                ocase7.classList.add("O");
                a=0;
            }
            
            }
            )
            }
            
            let a = prompt ("X ou O")
            if (a==="x"){
            a=1;
            }
            else {
            a=0;
            }
            
            jeucase7()

function jeucase8() {


        jeu8.addEventListener("click",function(){
        xcase8.classList.remove("X")
        ocase8.classList.remove("O")
        
        if (a===1){
            xcase8.classList.add("X");
            a=1;
        }
        else {
            ocase8.classList.add("O");
            a=0;
        }
        
        }
        )
        }
        
        let a = prompt ("X ou O")
        if (a==="x"){
        a=1;
        }
        else {
        a=0;
        }
        
        jeucase8()

function jeucase9() {


        jeu9.addEventListener("click",function(){
        xcase9.classList.remove("X")
        ocase9.classList.remove("O")
        
        if (a===1){
            xcase9.classList.add("X");
            a=1;
        }
        else {
            ocase9.classList.add("O");
            a=0;
        }
        
        }
        )
        }
        
        let a = prompt ("X ou O")
        if (a==="x"){
        a=1;
        }
        else {
        a=0;
        }
        
        jeucase9()

console.log(a)
let p = (j+h+g);
let q = (c+f+j);
if (p===3) {
    console.log("gagne")
}
else if (q===3){
    console.log("gagne")
}
else{
    console.log("perdu")
}
    */