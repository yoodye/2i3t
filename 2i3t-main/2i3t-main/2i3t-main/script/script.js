let a = "";
let b = "";
let c = "";
let sa = "+";
let sb = "+";
let sc = "+";
let valor = "";
let executar = "";
let temPonto = false;
let desligada = false;

soma = (a,b) => Number(a) + Number(b);
sub = (a,b) => Number(a) - Number(b);
mult = (a,b) => Number(a) * Number(b);
div = (a,b) => Number(a) / Number(b);
raiz = a => Math.sqrt(a);

equacao2Grau = (a,b,c) =>{
    let delta = sub(mult(b,b),mult(4,mult(a,c)));
    document.getElementById("delta").innerHTML = delta;
    
    if (delta < 0) return "Não possui raiz Real.";
    if (delta == 0) return "x1 = x2 = " + div(-b,mult(2,a));
    return "x1 = " + div(soma(-b,raiz(delta)),mult(2,a)) + 
           " x2 = " + div(sub(-b,raiz(delta)),mult(2,a));
}
function mostrar_resultado(){
    document.getElementById("resultado").value = valor;
}
function calcular(){
    if (desligada) return;
    if(executar != ""){
        b = valor;
        if(executar == "soma") valor = soma(a,b);
        if(executar == "sub") valor = sub(a,b);
        if(executar == "div") valor = div(a,b);
        if(executar == "mult") valor = mult(a,b);
        if(executar == "porc") valor = mult(div(a/100),b);
        if(executar == "raiz") valor = raiz(a);

        mostrar_resultado();
        executar = "";
        a = ""
        b = "";
        valor = "";
        temPonto = false;
    }
}
function desliga(){
    desligada = !desligada;
    if(desligada){
        zerar();
    }else{
       zerar();
        mostrar_resultado();
    }
    return desligada;
}
desliga();
function calcular_raiz(){
    if(valor == ""){
        valor == 0;
    }
    valor = raiz(valor);
    mostrar_resultado();
}
function porcentagem(){
    if(executar == "mult"){
        b = valor;
        valor = div (mult(a,b),100);
        mostrar_resultado();
    }
}
function zerar(){
    if(desligada) return;
    a = "";
    b = "";
    valor = "0";
    executar = "";
        mostrar_resultado();
     valor = "";
}
    function operacao(op){
        if(desligada) return;
            executar = op;
            a = valor;
            valor = "";
    }
function digitando(tecla){
    if(tecla == "."){
        if(!temPonto){
            mostrar_resultado();
         temPonto = true;
        }
        return;
    }
  valor = valor + tecla;
  mostrar_resultado();
}
const caclcular_equacao = () =>{
    if(a  != "+"){a = -(Number(a))} else {a=Number(a)};
    if(b  != "+"){b = -(Number(b))} else {a=Number(a)};
    if(c  != "+"){c = -(Number(c))} else {a=Number(a)};
    document.getElementById("raiz").innerHTML = equacao2Grau(a,b,c);
}
   
const set_sinal_a = () =>{
    sa = document.getElementById("sinal_sa").value;
    caclcular_equacao();
}
const set_sinal_b = () =>{
    sb = document.getElementById("sinal_sb").value;
    caclcular_equacao();
}
const set_sinal_c = () =>{
    c = document.getElementById("sinal_sc").value;
    caclcular_equacao();
}
const set_valor_a = () =>{
    a = document.getElementById("valor_a").value;
    caclcular_equacao();
}
const set_valor_b = () =>{
    a = document.getElementById("valor_b").value;
    caclcular_equacao();
}
const set_valor_c = () =>{
    a = document.getElementById("valor_c").value;
    caclcular_equacao();
}