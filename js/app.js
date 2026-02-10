// MENSAJE AUTOMÁTICO SEGÚN DÍA
async function cargarMensaje(){
  try{
    const res = await fetch("mensajes/mensajes.json");
    const data = await res.json();

    const hoy = new Date().getDate();
    const mensaje = data[hoy % data.length];

    const contenedor = document.getElementById("mensaje");
    if(contenedor) contenedor.innerText = mensaje;

  }catch(e){
    console.log("No se pudo cargar el mensaje");
  }
}

cargarMensaje();


// BOTÓN COMPARTIR WHATSAPP
function compartir(){
  const texto = "VOZ DE LUZ 🤍 — Un mensaje que puede tocar tu corazón: " + window.location.href;
  const url = "https://wa.me/?text=" + encodeURIComponent(texto);
  window.open(url, "_blank");
}