function repeticao1(){
    for(var i = 0 ; i<=10 ; i++){
        console.log(i);
    }
}
function galeria(){
    const minuatura = document.getElementById("miniatura");
    

    for(var i = 1 ; i <= 1 ; i++){
        minuatura.innerHTML += "<img src=img/n" +i+ ".jpg id=n" + i + ">";
        // o sinal de + recoloca a imagem sem subtituila pela antecessor, repetindo-a em 
        // sequência
    }
    abrirNoPainel();
}

function abrirNoPainel() {
document.getElementById("n1").onclick=function(){
    painel.innerHTML = "<img src=img/n1.jpg>";         
};


}