document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "cenfo" && password === "123") {
            window.location.href = "https://ucenfotec.ac.cr/";
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error de inicio de sesión',
                text: 'Credenciales incorrectas. Por favor, inténtalo de nuevo.',
                confirmButtonColor: '#007bff'
            });
        }
    });
});
