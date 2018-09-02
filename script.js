$(document).ready(function(){
    
	var arTree = $( ".tree" ).toArray();
	var treeX = arTree[0].offsetLeft;
	var treeY = arTree[0].offsetTop;
	
	

	$("#run").click(function(){
		var noam = $(".noam");
		
		var arNoam = $( ".noam" ).toArray();
		var noamWentX = arNoam[0].offsetLeft;
		var noamWentY = arNoam[0].offsetTop;

		var code = $("#code").val().split("\n");
		
		// remove spaces:
		code = code.map(line => line.trim());

		//remove empty lines
		code = code.filter(line => (line !== ""));

		// split each code line to words
		code = code.map(line=>line.split(" "));
		//code = code.map(line=>alert(line));
       
	   
		code.forEach(function (command){
			if(command[0] === "לך") {
				if(command[2] === "ימינה"){
				    noamWentX += parseInt(command[1]);
					
					noam = noam.animate({
						"left": "+=" + command[1] + "px"
					}, 2000)
				} else if(command[2] === "שמאלה"){
				    noamWentX -= parseInt(command[1]);
					
					noam = noam.animate({
						"left": "-=" + command[1] + "px"
					}, 2000)
				} else if(command[2] === "למטה"){
				    noamWentY += parseInt(command[1]);
					
					noam = noam.animate({
						"top": "+=" + command[1] + "px"
					}, 2000)
				} else if(command[2] === "למעלה"){
				    noamWentY -= parseInt(command[1]);
					
					noam = noam.animate({
						"top": "-=" + command[1] + "px"
					}, 2000)
				} 
				else if(command[1] === "לעץ"){
				
                    var goLeft = treeX - noamWentX ;
                    var goTop = treeY - noamWentY ;
				 	console.log("goLeft="+goLeft);
				 	console.log("goTop="+goTop);
					
					noam = noam.animate({
						"left": "+=" + goLeft + "px"
					}, 2000).noam = noam.animate({
						"top": "+=" + goTop + "px"
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