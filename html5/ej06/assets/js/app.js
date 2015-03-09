(function(){
	console.log ("Geolocation...");

	navigator.Geolocation.getCurrentPosition(function(position){
		console.log(position);
	});
})();