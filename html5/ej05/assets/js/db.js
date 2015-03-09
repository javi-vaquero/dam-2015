var APP = APP || {};
APP.DB = (function() {
    var db,
        cfg = {
            name: 'Twitter.db',
            version: 2,
            description: 'Twitter database',
            size: 1 * 1024 * 1024
        };



    var init = function(success) {
        if (!db) {
            var request = indexedDB.open(cfg.name, cfg.version);

            request.addEventListener('success', function(ev) {
                console.log("Database " + cfg.name + " OK!!");

                db = ev.target.result;

                success();

            });

            request.addEventListener('upgradeneeded', function(ev) {
                console.log("Updating database...");

                db = ev.target.result;
                var tweets = db.createObjectStore('tweets', {
                    keyPath: 'id',
                    autoIncrement: false
                });
            });

            request.addEventListener('error', function(ev) {
                console.log("ERROR opening " + cfg.name + " Database!!");
            });

        } else {
            success();
        }
    };



    var insert = function(tweet) {
        init(function() {
            var transaction = db.transaction(['tweets'], "readwrite");
            var store = transaction.objectStore('tweets');

            var request = store.add(tweet);
        });

    };


    var get = function(id, success) {
        init(function() {
            var transaction = db.transaction(['tweets'], "readonly");
            var store = transaction.objectStore('tweets');

            var getRequest = store.get(id);
            getRequest.addEventListener('success', function (ev){
               success(ev.target.result);
            });
        });

    };


    return {
        insert: insert,
        get : get
    };
})();
