$(document).ready(function(){
	$("#run").click(function(){
		var noam = $(".noam");

		var code = $("#code").val().split("\n");

		// remove spaces:
		code = code.map(line => line.trim());

		//remove empty lines
		code = code.filter(line => (line !== ""));

		// split each code line to words
		code = code.map(line=>line.split(" "));

		code.forEach(function (command){
			if(command[0] === "לך") {
				if(command[2] === "ימינה"){
					noam = noam.animate({
						"left": "+=" + command[1] + "px"
					}, 2000)
				} else if(command[2] === "שמאלה"){
					noam = noam.animate({
						"left": "-=" + command[1] + "px"
					}, 2000)
				} else if(command[2] === "למטה"){
					noam = noam.animate({
						"top": "+=" + command[1] + "px"
					}, 2000)
				} else if(command[2] === "למעלה"){
					noam = noam.animate({
						"top": "-=" + command[1] + "px"
					}, 2000)
				} 
			} else if(command[0] === "תן") {
				if (command[1] === "כוכב") {
					noam.addClass("hasStar");
				}
			} 
		});
	});
	$( ".tree" ).draggable();
});