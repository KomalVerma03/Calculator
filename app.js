var userinput = document.getElementById('userinput');
var btn=document.querySelectorAll('.btn');

for (item of btn){
    item.addEventListener('click',(e)=>{
        btntext=e.target.innerText;
        userinput.value+=btntext;
    });
}

function sin(){
    userinput.value=Math.sin(userinput.value);
}
function cos(){
    userinput.value=Math.cos(userinput.value);
}

function tan(){
    userinput.value=Math.tan(userinput.value);
}

function sqrt(){
    userinput.value=Math.sqrt(userinput.value);
}

function log(){
   
    userinput.value=Math.log(userinput.value);
}
function pi(){
    userinput.value=3.14159265359;
}
function e(){
    userinput.value=2.718281828459045;
}
function AC(){
    userinput.value=" ";
}
function pow(){
    userinput.value=Math.pow(userinput.value,2);
}

