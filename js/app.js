async function cargarMensaje(){
  try{
    const res = await fetch("mensajes/mensajes.json");
    const data = await res.json();
    const hoy = new Date().getDate();
    document.getElementById("mensaje").innerText = data[hoy % data.length];
  }catch(e){
    document.getElementById("mensaje").innerText = "La luz vive en vos 🤍";
  }
}

cargarMensaje();

function compartir(){
  const texto = "VOZ DE LUZ 🤍 " + window.location.href;
  window.open("https://wa.me/?text=" + encodeURIComponent(texto));
}