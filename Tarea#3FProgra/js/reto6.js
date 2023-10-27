document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("menu");
    const imagen = document.getElementById("imagen");

    const imagenes = {
        imagen1: "img/mitsubishi-blanco.png",
        imagen2: "img/mitsubishi-gris-claro.png",
        imagen3: "img/mitsubishi-gris.png",
        imagen4: "img/mitsubishi-gris-oscuro.png",
        imagen5: "img/mitsubishi-negro.png",
        imagen6: "img/mitsubishi-rojo.png",
        imagen7: "img/mitsubishi-vino.png",
        imagen8: "img/mitsubishi-celeste.png",
    };

    function cargarImagen() {
        const opcionSeleccionada = menu.value;
        imagen.src = imagenes[opcionSeleccionada];
    }

    menu.addEventListener("change", cargarImagen);

    cargarImagen();
});
