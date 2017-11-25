var clean= function(tag){
		var target = $('*:contains(' + tag+ ')');
		if(target.length>1){
			for (var i = target.length - 1; i >= 0; i--) {
			$(target[i]).parents("._4ikz").hide()
			};
		}
}


setInterval(function(){
	clean("commented");
	clean("comments");
	clean("replied");
},1000)
