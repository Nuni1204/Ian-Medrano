function login() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var gender = document.getElementById('gender').value;
  var customField = document.getElementById('customField').value;

  if (username === '' || password === '' || gender === '' || customField === '') {
      swal('Error', 'Por favor, complete todos los campos', 'error');
  } else {
      
      swal('Éxito', 'Inicio de sesión exitoso', 'success');
      
  }
}
