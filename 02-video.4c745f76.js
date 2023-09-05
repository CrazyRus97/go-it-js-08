!function(){var e=document.querySelector("iframe"),t=new Player(e);t.on("timeupdate",_.throttle((function(e){localStorage.setItem("videoplayer-current-time",e.seconds)}),1e3));var r=Number(localStorage.getItem("videoplayer-current-time"));t.setCurrentTime(r).then((function(e){})).catch((function(e){e.name}))}();
//# sourceMappingURL=02-video.4c745f76.js.map
