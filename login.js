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
    if(dadosLogin[0].value === clientes[0].email && dadosLogin[1].value ===clientes[0].password){
        janlogin.classList.add("hide");
        tela.classList.remove("hide");

    }else{
        alert("Login sem sucesso");
    } 
    /* janlogin.classList.add("hide");
    tela.classList.remove("hide"); */
}

const efetuarregisto = () => {
    janregisto.classList.add("hide");
    janlogin.classList.remove("hide");
    add();
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
    
}

btnl.addEventListener("click", efetuarregisto);
btnr.addEventListener("click", registo);
login.addEventListener("click", logar);
marcar.addEventListener("click", marcarC);
escolha.addEventListener("click", mostraMedicos);