document.getElementById('formularioSolicitud').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('La información se ha enviado con éxito');
    window.location.href = "index.html";
});