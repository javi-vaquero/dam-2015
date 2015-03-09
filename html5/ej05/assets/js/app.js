(function(){
	var tweet = {
		id : "658674753986154865",
		text : "Lalalalala #lala",
		author : "jigbkjb",
		createdAt: "Mon Sep 24 03:12:32 +0000 2014"
	};

	APP.DB.insert(tweet);
	APP.DB.get(tweet.id, function(t){
		console.log(t);
	});


})();