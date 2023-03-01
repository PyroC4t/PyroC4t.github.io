const btn = document.querySelector("#refresh");

console.log("actualizar pagina");

btn.addEventListener("click", function(){
    location.reload();
});