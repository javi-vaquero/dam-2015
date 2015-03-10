(function(){
	console.log ("Geolocation...");

	navigator.geolocation.getCurrentPosition(function(position){
		console.log(position);
	});
})();