let titulo = document.getElementById("titulo").value;

console.log(titulo);

function submeter() {
    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;
    let idade = document.getElementById("idade").value;
    console.log (cpf)
    console.log(validaCPF(cpf));
}
function validaCPF(cpf) {

    if (cpf == ""){
     alert ("Campo CPF nao pode ser vazio")
        return false;
}
    cpf = cpf.trim();

    if(/[a-zA-Z]/.test(cpf)) {
        console.log("Contem letras")
        alert ("campo nao pode conter letras");
        return false;
    }

    if(!/^[\d.-]+$/.test(cpf)) {
        alert ("campo cotem letras e numeros")
       
    }

    if(cpf.length !=11 )

    return true

    let soma = 0;

    for ( let i = 1; i <= 9; i++) {
        console.log(cpf.charAt(i-1));
        soma = soma +(cpf.charAt(i-i) * (10 - (i-1)));
     
    }
    console.log(soma);
    let resto = soma % 11;
    
    if(resto < 2) {
        if(cpf.charAt(9)  !=0) {
            alert("CPF invalido");
            return false;
        }
    return true
    }


    let digitoVerificador1 =  11 - resto;
     


}

