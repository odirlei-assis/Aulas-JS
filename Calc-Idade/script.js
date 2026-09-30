//Pegar os elementos no html 
const formulario = document.getElementById("formulario");

const nome = document.getElementById("nome");
const nascimento = document.getElementById("nascimento");

const nomeResultado = document.getElementById("nomeResultado");
const dataResultado = document.getElementById("dataResultado");
const idadeResultado = document.getElementById("idadeResultado");
const boxResultado = document.getElementById("resultado");


formulario.addEventListener("submit", function(event){
    event.preventDefault();//Impede que a tela recarregue

    //Pegar o valor dos inputs
    const valorNome = nome.value;
    const valorNascimento = nascimento.value;

    // console.log(valorNome);
    // console.log(valorNascimento);

    //Separa a data em 3 valores
    const dataSeparada = valorNascimento.split("-");

    // console.log(dataSeparada);

    //Armazena as datas separadas em formato numerico
    const anoNascimento = Number(dataSeparada[0]);
    const mesNascimento = Number(dataSeparada[1]);
    const diaNascimento = Number(dataSeparada[2]);

    // console.log(anoNascimento);
    
    //Pega a data de hoje do sistema
    const hoje = new Date();
    
    const anoAtual = hoje.getFullYear();//pega somente o ano
    const mesAtual = hoje.getMonth()+1;//pega somente o mes
    const diaAtual = hoje.getDate();//pega somente o dia

    // console.log(hoje);
    // console.log(anoAtual);
    // console.log(mesAtual);
    // console.log(diaAtual);

    let idade = anoAtual - anoNascimento;//calcula a idade utilizando o ano
    
    if (mesNascimento > mesAtual) {//Verifica se o mes de nascimento é maior que o mes atual
        idade = idade -1;//pega a idade e subtrai 1
    }
    
    if (mesNascimento == mesAtual) {//Verifica se o mes de nascimento é IGUAL ao mes atual
        if (diaNascimento > diaAtual) {//Verificase o dia de nascimento é maior que o dia atual
            idade = idade -1;//pega a idade e subtrai 1 
        }
    }
    
    // if (mesNascimento > mesAtual || (mesNascimento == mesAtual && diaNascimento > diaAtual)) {
    //     idade = idade -1;    
    // }
    
    // console.log(idade);

    //montando a data no formato dd/mm/aaaa
    const dataFormatada = diaNascimento + "/" + mesNascimento + "/" + anoNascimento;

    //Inserindo os valores nos elementos HTML
    nomeResultado.textContent = valorNome;
    dataResultado.textContent = dataFormatada;
    idadeResultado.textContent = idade;

    //Exibindo o elemento com as informações
    boxResultado.style.display = "block";

})
