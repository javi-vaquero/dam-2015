window.onload = function() {

    var loaded = false;
    var video = document.getElementById("video");
    var playButton = document.getElementById("playButton");
    var pauseButton = document.getElementById("pauseButton");
    var stopButton = document.getElementById("stopButton");
    var ffdButton = document.getElementById("ffdButton");
    var rwdButton = document.getElementById("rwdButton");
    var startPButton = document.getElementById("startPButton");
    var endPButton = document.getElementById("endPButton");
    var fullscreenButton = document.getElementById("fullscreenButton");
    var volumeRange = document.getElementById("volumeRange");
    var videoProgress = document.getElementById("videoProgress");
    var playList = document.getElementById("playList");

    var canplay = function() {
        loaded = true;
        volumeRange.value = video.volume * 100;
        videoProgress.value = 0;
    };


    var play = function() {
        if (loaded) {
            video.play();
        }
    };
    var playPause = function() {
        if (loaded) {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }

        }
    };
    var pause = function() {
        if (loaded) {
            video.pause();
        }
    };
    var stop = function() {
        if (loaded) {
            video.pause();
            video.currentTime = 0;
        }

    };
    var ffd = function() {
        if (loaded) {
            video.currentTime += 10;
        }
    };
    var rwd = function() {
        if (loaded) {
            video.currentTime -= 10;
        }
    };
    var startP = function() {
        if (loaded) {
            video.currentTime = 0;
        }

    };
    var endP = function() {
        if (loaded) {
            video.currentTime = video.duration;
        }
    };
    var fullscreen = function() {
        if (loaded) {
            console.log("fullscreen");
            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.msRequestFullscreen) {
                video.msRequestFullscreen();
            } else if (video.mozRequestFullScreen) {
                video.mozRequestFullScreen();
            } else if (video.webkitRequestFullscreen) {
                video.webkitRequestFullscreen();
            }
        }
    };
    var volume = function(e) {
        if (loaded) {
            video.volume = volumeRange.value / 100;
        }
    };
    var videoPr = function() {
        if (loaded) {
            videoProgress.value = ((100 / video.duration) * video.currentTime);
        }
    };
    var changeVideo = function(e) {
    	//video.currentSrc = 'assets/videos/' + videoList.item(videoList.selectedIndex).value + 
    	var src = e.target.dataset.src;
    	stop(e);
    	if(Modernizr.video.h264){
    		video.src= src + '.mp4';
    	}
    	else{
    		video.src= src + '.webm';
    	}
    	video.load();
    };



    playButton.addEventListener('click', play, false);
    video.addEventListener('click', playPause, false);
    pauseButton.addEventListener('click', pause, false);
    stopButton.addEventListener('click', stop, false);
    ffdButton.addEventListener('click', ffd, false);
    rwdButton.addEventListener('click', rwd, false);
    startPButton.addEventListener('click', startP, false);
    endPButton.addEventListener('click', endP, false);
    fullscreenButton.addEventListener('click', fullscreen, false);
    volumeRange.addEventListener('input', volume, false);
    video.addEventListener('timeupdate', videoPr, false);

    playList.addEventListener('click', changeVideo, false);

    video.addEventListener('canplay', canplay, false);



};
