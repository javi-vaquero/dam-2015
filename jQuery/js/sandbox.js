/*$(document).ready(function(){*/
$(function(){
	//seleccionar
	var $divs = $('div.module');
	//console.log($divs);

	var $li = $('#myList li:nth-child(3)');
	//console.log($li);
	var $lis = $('#myList > li');
	//console.log($lis.eq(3));


	$lis.on('click mouseover', function(e){
		//console.log(e);
		//console.log(this);
	});

	var $ul = $('#myList');
	//console.log($ul.find('li').eq(2));

	var $input = $('input[name="q"]');
	var $label = $('laberl[for="'+ $input.attr('name') +'"]');
	//console.log($label);

	var $hidden = $(':hidden');
	$hidden.each(function(idx, elem){
		//console.log(elem);
		$(elem).show();
	});

	//recorrer el dom

	var $images = $('img');
	$images.each(function(idx, elem){
		//console.log(elem.alt);
	});

	$input.closest('form').addClass('form');
	//$input.closest('form').removeClass('form');
	//$input.closest('form').toggleClass('form');//si no tiene pone, si tiene quita

	var $current = $('#myList .current');
	$current.removeClass('current').next().addClass('current');

	var $submit = $('#specials select')
						.closest('ul')
						.find('input[type="submit"]');

	$('#slideshow li')
		.first()
		.addClass('current')
		.siblings()
		.addClass('disabled');

		//manipular
		var lis = [];
		for (var i = 0; i <5; i++) {
			lis.push('<li>Element ' + i + '</li>');
		}
		$ul.append(lis.join('')); //se prepara en un array y se añade a la vez, asi solo repinta una vez

		$li = $('<li/>',{
			class : 'current',
			text : 'Node list',
			id : 'myli'
		});
		$ul.append($li);
		//$li.appendTo($ul);

		$ul.find('li:even').remove();


		$ul.on('click', 'li', function(e){
			console.log(e);
			console.log(this);
		});

});