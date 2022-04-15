'use strict';

const btn = document.querySelector('button');
let escrita = document.querySelector('.escrita');
btn.addEventListener('click', () => {
    escrita.innerHTML = "";
    let input = Number(document.querySelector('#numbers').value);
    if(isNaN(input)){
        alert("Digite algum número");
    }else if(input == ""){
        escrita.innerHTML = "";
        alert("Qual é? Do zero é facil, digita outra coisa");
    }else{
        for(let ini = 0; ini <= 10; ini++){
            let calc = `${input} X ${ini} = ${ini*input}`;
            
            let resul = document.createElement('p');
            resul.innerText = calc;
    
            escrita.appendChild(resul);
        }
    }
   
});

let enter = document.querySelector('#numbers');
enter.addEventListener('keyup', (e) => {
    if(e.keyCode === 13){
        document.querySelector('button').click();
    }
})
