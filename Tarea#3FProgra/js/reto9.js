document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("enviarButton").addEventListener("click", mostrarRespuesta);

    function mostrarRespuesta() {
        var opciones = document.getElementsByName("opcion");
        var respuesta = "";

        for (var i = 0; i < opciones.length; i++) {
            if (opciones[i].checked) {
                respuesta = opciones[i].value;
                break;
            }
        }

        if (respuesta === "") {
            alert("Por favor, seleccione una opcion antes de enviar.");
        } else {
            var mensaje = "Ha seleccionado la opción: " + respuesta;
            document.getElementById("resultado").textContent = mensaje;
        }
    }
});
