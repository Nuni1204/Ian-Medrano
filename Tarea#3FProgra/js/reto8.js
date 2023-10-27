document.getElementById("select-option").addEventListener("click", function () {
    document.getElementById("menu-options").style.display = "none";
    document.getElementById("login-form").style.display = "block";
});

document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const user = document.getElementById("user").value;
    const password = document.getElementById("password").value;

    if (user === "cenfo" && password === "123") {
        window.location.href = "https://ucenfotec.ac.cr/";
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Credenciales incorrectas',
            text: 'Por favor, inténtalo de nuevo.',
        });
    }
});
