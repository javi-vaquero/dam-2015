var APP = APP || {};
APP.DB = (function() {
    var db,
        cfg = {
            name: 'Twitter.db',
            version: '1.0',
            description: 'Twitter database',
            size: 1 * 1024 * 1024
        },
        createTable = 'CREATE TABLE IF NOT EXISTS tweets (id TEXT PRIMARY KEY, text TEXT NOT NULL, author TEXT NOT NULL, created_at INTEGER NOT NULL);';

    try {
        db = openDatabase(cfg.name, cfg.version, cfg.description, cfg.size);
    } catch (error) {
        if (error.code === 11) {
            db.changeVersion(cfg.version);
        }
        console.log(error);
    }


    if (db) {
        var createSchema = function(tx){
        	tx.executeSql(createTable, [], function(tx, results){
        		console.log("Table tweets created!!");
        		console.log(results);
        	}, function(tx, error){
        		console.log("DB Error: " + error);
        	});
        };
        db.transaction(createSchema);
    }

    var insert = function(tweet){
    	var sql = 'INSERT INTO tweets values(?,?,?,?);';

    	db.transaction(function (tx){
    		tx.executeSql(sql, [tweet.id, tweet.text, tweet.author, tweet.createdAt], function(tx, results){
    			console.log('Tweet inserted!!');
    			console.log(results);
    		}, function(tx, error){
    			console.log('Error inserting tweet');
    			console.log(error);
    		});
    	});
    };

    var getAll = function(success){
    	var sql = 'SELECT * FROM tweets ORDER BY created_at DESC;';

    	db.transaction(function (tx){
    		tx.executeSql(sql, [], function(tx, results){
    			console.log('All tweets recovered!!');
    			console.log(results.rows);
    			var datos = [];
    			for (var i = results.rows.length - 1; i >= 0; i--) {
    				datos.push(results.rows.item(i));
    			}
    			success(datos);
    		}, function(tx, error){
    			console.log('Error recovering tweets');
    			console.log(error);
    		});
    	});
    };

    return {
    	insert : insert,
    	getAll : getAll
    };
})();
