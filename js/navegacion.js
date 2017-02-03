$(document).ready(function () {
    obtenerLinks();
});

        
function obtenerLinks(){
	 var links = $('ul[class="nav navbar-nav"] li a');//selecciona todos los a de ul
	 links.click(function(){	
		 obtenerPagina(this.id);
	 });			   
 }
function obtenerPagina(id){//pasando por parametro id de li
     $('#contenido-principal').load(id + ".html");
}

 
	