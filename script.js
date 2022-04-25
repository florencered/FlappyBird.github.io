console.log("working"); 
var block=document.getElementById('block'); 
var hole=document.getElementById('hole'); 
var character=document.getElementById('character'); 
var jumping=0; 
var counter=0;
hole.addEventListener('animationiteration',()=>{
	var random=-((Math.random()*300)+150) /*number b/w 0 and 300*/ 
	hole.style.top=random+"px"; 
	console.log(hole); 
	counter++;
}); 
/********************for the gravity effect**************/
setInterval(function(){ 
	/*how to get the value of any css property*/ 
	var characterTop=parseInt(window.getComputedStyle(character).getPropertyValue("top")); 
	/*var blockLeft=parseInt(window.getComputedStyle(block).getPropertyValue("left"));
	var holeTop=parseInt(window.getComputedStyle(hole).getPropertyValue("top")); 
	var ctop=-(500-characterTop);*/
	if(jumping==0){
	character.style.top=(characterTop+3)+"px"; 
}  
var characterTop=parseInt(window.getComputedStyle(character).getPropertyValue("top")); 
	var blockLeft=parseInt(window.getComputedStyle(block).getPropertyValue("left"));
	var holeTop=parseInt(window.getComputedStyle(hole).getPropertyValue("top")); 
	var ctop=-(500-characterTop);

if((characterTop>480)||((blockLeft<20)&&(blockLeft>-50)&&((cTop<holeTop)||(ctop>holeTop+130)))){
	alert("Game over!! Your Score is: "+ counter); 
	character.style.top=100+"px"; 
	counter=0;
}

	console.log(character.style.top);
},10); 
/********************jump***********************/ 
jump=()=>{
	jumping=1; 
	let jumpCount=0; 
	var jumpInterval=setInterval(function(){ 
		var characterTop=parseInt(window.getComputedStyle(character).getPropertyValue("top")); 
	if ((characterTop>6)){
	character.style.top=(characterTop-5)+"px"; 
}

	if(jumpCount>20){
		clearInterval(jumpInterval); 
		jumping=0; 
		jumpCount=0;
	}

		jumpCount++;
	},10);
}