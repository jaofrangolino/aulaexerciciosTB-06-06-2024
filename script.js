// -02
function apertar()
{
    resposta.innerHTML = "Olá, " + nome.value + " Tudo bem?";
}

// -05
function lerNumero(mensagem) 
{
    return parseFloat(prompt(mensagem));
}

function encontrarMaior(num1, num2) 
{
    if (num1 > num2) 
    {
        return num1;
    }
    else 
    {
        return num2;
    }
}

var numero1 = lerNumero("Digite o primeiro número:");
var numero2 = lerNumero("Digite o segundo número:");
var maiorNumero = encontrarMaior(numero1, numero2);
console.log("O maior número é: " + maiorNumero);


// -07
var d = 1;
while (d <= 100)
{
    console.log(d)
    d = d + 1
}


// -08
var c = 0
while(c <= 50)
    {
        console.log(c)
        c = c + 5
    }


// -09
var b = 100;
while (b >= 0)
{
    console.log(b)
    b = b - 10
}