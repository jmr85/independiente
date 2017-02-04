$(document).ready(function() {
    validarForm();
});

function validarForm(){
	
		$('#form-contacto').submit(function(event) {
				
			var valoresInput = $(this).serializeArray();
			var resultado = "Tus datos ingresados: ";
			
			for(var i in valoresInput){
				resultado += " <li>" + valoresInput[i].value + "<br>";
			}
			$('.bg-success').html(resultado);
			
			event.preventDefault();
				
		});
	
}