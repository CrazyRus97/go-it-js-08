const e=document.querySelector("iframe"),t=new Player(e);t.on("timeupdate",_.throttle((function(e){localStorage.setItem("videoplayer-current-time",e.seconds)}),1e3));const n=Number(localStorage.getItem("videoplayer-current-time"));t.setCurrentTime(n).then((function(e){})).catch((function(e){e.name}));
//# sourceMappingURL=02-video.b6fa9ac9.js.map
