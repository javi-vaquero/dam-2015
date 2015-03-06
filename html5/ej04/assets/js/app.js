(function(){
	var tweet = {
		id : "658674753986154865",
		text : "Lalalalala #lala",
		author : "jigbkjb",
		createdAt: "Mon Sep 24 03:12:32 +0000 2014"
	};

	//APP.DB.insert(tweet);
	var tweets = [];
	var success = function(tweets){
		console.log("Desde app --> Datos: " + tweets);
	};
	
	APP.DB.getAll(success);
	

})();