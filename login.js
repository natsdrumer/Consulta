const btnr = document.getElementById("btnr");
const btnl = document.querySelector(".btnl");
const janlogin = document.getElementById("login");
const janregisto = document.getElementById("registo");
const dadosInput = janregisto.querySelectorAll('input');
const login = document.getElementById("btn");
const dadosLogin = janlogin.querySelectorAll("input");
const tela = document.getElementById("tela");
const marcar = document.getElementById("btnC");
const telmaEsp = document.getElementById("esp");
const escolha = document.getElementById("btnEs");
const telaM = document.getElementById("medicos")
const meedicos = document.querySelector(".meeedicos");
const eleMedic = meedicos.querySelector("li");
const jnaHor = document.getElementById("horario");
const btnHo = document.getElementById("btnH");
const btnLog = document.getElementById("btnLog");



const clientes = [];

const marcarC = () =>{
    tela.classList.add("hide");
    telmaEsp.classList.remove("hide");
}

const mostraMedicos=()=>{
    telmaEsp.classList.add("hide");
    telaM.classList.remove("hide");
}

const registo = () => {
    janlogin.classList.add("hide");
    janregisto.classList.remove("hide");
}

const logar = () =>{
    let validalogin = false;

    for(let i = 0; i < clientes.length; i++){
        if(dadosLogin[0].value === clientes[i].email && dadosLogin[1].value === clientes[i].password){
            validalogin = true;
            break;
        }
    }

    if(validalogin === true){
        janlogin.classList.add("hide");
        tela.classList.remove("hide");
        limparCampos2();
    }else{
        alert("Erro")
    }
    /*  janlogin.classList.add("hide");
    tela.classList.remove("hide");  */
}

const limparCampos = () =>{
    for (const entrada of dadosInput){
        entrada.value = "";
    }
}

const limparCampos2 = () =>{
    for (const entrada of dadosLogin){
        entrada.value = "";
    }
}

const efetuarregisto = () => {
    janregisto.classList.add("hide");
    janlogin.classList.remove("hide");
    alert("Registo com suceso");
}

const add = () => {
    //buscar o que esta nos input
    const nome = dadosInput[0].value;
    const email = dadosInput[1].value;
    const telefone = dadosInput[2].value;
    const password = dadosInput[3].value;

    //validar os dados

    //criar um objeto e inserir no array
    const dadosNovoCliente = {
        id: Math.random().toString,
        nome,
        email,
        telefone,
        password
    };

    clientes.push(dadosNovoCliente);
    limparCampos();
    
}

const horario = () =>{
    telaM.classList.add("hide");
    jnaHor.classList.remove("hide");
}

const home = () => {
    jnaHor.classList.add("hide");
    tela.classList.remove("hide");
}

const logout = () => {
    tela.classList.add("hide");
    janlogin.classList.remove("hide");
}

btnl.addEventListener("click", efetuarregisto);
btnr.addEventListener("click", registo);
login.addEventListener("click", logar);
marcar.addEventListener("click", marcarC);
escolha.addEventListener("click", mostraMedicos);
eleMedic.addEventListener("click", horario);
btnHo.addEventListener("click", home);
btnLog.addEventListener("click", logout);