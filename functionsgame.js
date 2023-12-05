function id(str) {
    return document.getElementById(str);
}
function obtenerNalAzar(numMin, numMax) {
    const amplitud = numMax - numMin;
    const valorAzar = Math.floor(Math.random() * amplitud) + numMin;
    console.log(valorAzar)
    return valorAzar
}
function mostrarResultado() {
    // Aquí iría la lógica de tu juego y el resultado

    
    // Mostrar el modal con el resultado
    
    document.getElementById('modal').style.display = 'block';
  }
  
  function cerrarModal() {
    // Cerrar el modal
    document.getElementById('modal').style.display = 'none';
  }

  function recargarPagina() {
    location.reload();
  }
