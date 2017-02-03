$(document).ready(function() {
    validarForm();
});

function validarForm(){
	/*var form = $('#form-contacto');
	var nombre = $('#nombre_1');
	var email = $('#email_1');
	var nombre = $('#asunto_1');
	var nombre = $('#mensaje_1');
	
	$('#boton-form').on("click", function(){
		if(nombre.val === "juan"){
			
			form.append('<div class="alert alert-success">bien</div>');
		}else{
			form.append('<div class="alert alert-danger">mal</div>');
		}
	});
	*/	
	
	var boton = document.getElementById("boton-form");
	boton.addEventListener("click", enviar);
	var form = document.getElementById("form-contacto");
	form.addEventListener("invalid", comprobar);
	
	function enviar(){
		var validado = form.checkValidity();
		if(validado){
			form.submit();
			alert("VALIDADO");
			$('.bg-success').html('Ha ingresado correctamente los datos');
		}
	}
	
	function comprobar(e){
		var elem = e.target;
		if(elem.validity.valid){
			/*elem.append('<div class="alert alert-success">bien</div>');*/
			$('#form-contacto').append('<div class="alert alert-success">bien</div>');
			elem.style.background = "#fff";
		}else{
			/*form.append('<div class="alert alert-danger" style="margin-top: 15px">mal</div>').hiden();*/
			elem.style.background = "#333";
		
		}
	}
	
}