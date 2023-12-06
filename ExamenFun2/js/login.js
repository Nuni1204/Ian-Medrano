document.getElementById("login-button").addEventListener("click", function() {
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;

    if (usuario === "" || contrasena === "") {
        document.getElementById("mensaje").innerHTML = "<p style='color:red;'>Por favor, llena todos los campos.</p>";
    } else if (usuario === "cenfo" && contrasena === "123") {
        document.getElementById("mensaje").innerHTML = "<p style='color:green;'>Acceso permitido.</p>";
    } else {
        document.getElementById("mensaje").innerHTML = "<p style='color:red;'>Acceso denegado. Verifica tus credenciales.</p>";
    }
});

document.getElementById("login-button").addEventListener("click", function() {
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;

    if (usuario === "" || contrasena === "") {
        document.getElementById("mensaje").innerHTML = "<p style='color:red;'>Por favor, llena todos los campos.</p>";
    } else if (usuario === "cenfo" && contrasena === "123") {
        document.getElementById("mensaje").innerHTML = "<p style='color:green;'>Acceso permitido.</p>";
        window.location.href = "landing.html";
    } else {
        document.getElementById("mensaje").innerHTML = "<p style='color:red;'>Acceso denegado. Verifica tus credenciales.</p>";
    }
});

