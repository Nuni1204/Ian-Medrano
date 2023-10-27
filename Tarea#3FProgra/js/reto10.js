document.addEventListener("DOMContentLoaded", function () {
    const empleados = {
        "208680083": "img/empleado1.jpg",
        "598349822": "img/empleado2.jpg",
        "136274882": "img/empleado3.jpg"
    };

    const cedulaInput = document.getElementById("cedula");
    const buscarButton = document.getElementById("buscarButton");
    const limpiarButton = document.getElementById("limpiarButton");
    const resultado = document.getElementById("resultado");
    const fotoEmpleado = document.getElementById("fotoEmpleado");
    const usuarioNoExiste = document.getElementById("usuarioNoExiste");

    fotoEmpleado.style.display = "none";
    usuarioNoExiste.style.display = "none"; 

    buscarButton.addEventListener("click", function () {
        const cedula = cedulaInput.value;
        if (empleados[cedula]) {
            usuarioNoExiste.style.display = "none";
            fotoEmpleado.src = empleados[cedula];
            fotoEmpleado.style.display = "block";
        } else {
            usuarioNoExiste.style.display = "block";
            fotoEmpleado.style.display = "none";
        }
    });

    limpiarButton.addEventListener("click", function () {
        cedulaInput.value = "";
        usuarioNoExiste.style.display = "none";
        fotoEmpleado.style.display = "none";
    });
});
