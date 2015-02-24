(function(){
	var validar_email =/^\w([\w.\-]*\w)?@[A-Za-z0-9]([\w.\-]*\w)?\.[A-Za-z]{2,3}$/;

/*
Crear una expresión regular que valide una dirección de email.
 Para simplificar, los valores antes de la @ pueden contener cualquier
  carácter alfanumérico, y los caracteres . y -, mientras que los valores tra 
  la @ pueden contener caracteres alfanuméricos, y el tipo de dominio puede
   tener una longitud de 2 o 3 caracteres.
*/

	console.log(validar_email.test("hola@arkaitzgarro.com")==true);
	console.log(validar_email.test("arkaitz.garro@gmail.com")==true);
	console.log(validar_email.test("arkaitz.garro@gmail.es")==true);
	console.log(validar_email.test("@gmail.com")==false);
	console.log(validar_email.test("a@gmail.")==false);
	console.log(validar_email.test(".@gmail.")==false);
	console.log(validar_email.test(".@gmail.es")==false);
	console.log(validar_email.test(".a@gmail.com")==false);
	console.log(validar_email.test("-a@gmail.com")==false);
	console.log(validar_email.test("a.aa@gmail.com")==true);
})()