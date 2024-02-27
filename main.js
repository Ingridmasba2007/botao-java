function mudarCorTexto(){
    alert("banana fugitiva")
    console.log (document.querySelector("#p1"))
    document.querySelector("#p1").style.color="blue"
} 

function mudarCorFundo (){
    document.querySelector("#p1").style.background="white"
}
function alterarTexto(){
    textoform=document.querySelector("#textinput").value
    document.querySelector("#texto2").innerHTML=textoForm
}
