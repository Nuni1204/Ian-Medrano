function submitSurvey() {
  var name = document.getElementById('name').value;
  var age = document.getElementById('age').value;
  var gender = document.getElementById('gender').value;
  var destination = document.getElementById('destination').value;
  var trips = document.querySelector('input[name="trips"]:checked');
  var group = document.querySelector('input[name="group"]:checked');
  var budget = document.getElementById('budget').value;
  var accommodation = document.getElementById('accommodation').value;
  var feedback = document.getElementById('feedback').value;

  if (name.trim() === '' || age === '' || gender === '' || destination === '' || !trips || !group || budget === '' || accommodation === '') {
    
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Por favor, completa todos los campos requeridos.',
    });
  } else {
    

    
    Swal.fire({
      icon: 'success',
      title: '¡Gracias!',
      text: 'Tu encuesta ha sido enviada exitosamente.',
    });
  }
}




