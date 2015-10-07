$(document).ready(function() {
	
var bellSound = new buzz.sound("sounds/bell1", {
	formats: ["mp3"],
	preload: true,	
	});	
var bell2Sound = new buzz.sound("sounds/bell2", {
	formats: ["mp3"],
	preload: true,	
	});	
var bell3Sound = new buzz.sound("sounds/bell3", {
	formats: ["mp3"],
	preload: true,	
	});		
	
var bell4Sound = new buzz.sound("sounds/bell4", {
	formats: ["mp3"],
	preload: true,	
	});		
	
var bell5Sound = new buzz.sound("sounds/bell5", {
	formats: ["mp3"],
	preload: true,	
	});		
	
var bell6Sound = new buzz.sound("sounds/bell6", {
	formats: ["mp3"],
	preload: true,	
	});

var bell7Sound = new buzz.sound("sounds/bell7", {
	formats: ["mp3"],
	preload: true,	
	});										

var bell8Sound = new buzz.sound("sounds/bell8", {
	formats: ["mp3"],
	preload: true,	
	});		
	
var bell9Sound = new buzz.sound("sounds/bell9", {
	formats: ["mp3"],
	preload: true,	
	});		

var bell10Sound = new buzz.sound("sounds/bell10", {
	formats: ["mp3"],
	preload: true,	
	});		
	
var bell11Sound = new buzz.sound("sounds/bell11", {
	formats: ["mp3"],
	preload: true,	
	});	
	
var bell12Sound = new buzz.sound("sounds/bell12", {
	formats: ["mp3"],
	preload: true,	
	});
	
var bell13Sound = new buzz.sound("sounds/bell13", {
	formats: ["mp3"],
	preload: true,	
	});		
	
var bell114Sound = new buzz.sound("sounds/bell14", {
	formats: ["mp3"],
	preload: true,	
	});				
	
var bell15Sound = new buzz.sound("sounds/bell15", {
	formats: ["mp3"],
	preload: true,	
	});		
	
var bell16Sound = new buzz.sound("sounds/bell16", {
	formats: ["mp3"],
	preload: true,	
	});		
	
var bell17Sound = new buzz.sound("sounds/bell17", {
	formats: ["mp3"],
	preload: true,	
	});		

var bell18Sound = new buzz.sound("sounds/bell18", {
	formats: ["mp3"],
	preload: true,	
	});	

var bell19Sound = new buzz.sound("sounds/bell19", {
	formats: ["mp3"],
	preload: true,	
	});			

var bell20Sound = new buzz.sound("sounds/bell20", {
	formats: ["mp3"],
	preload: true,	
	});
										
	$("#one").mouseenter(function(){
		$("#one").velocity({width: "+=20px", height: "+=80px"}, 100);
		});
		
	$('#one').mouseenter(function() {
        bellSound.play();
   		 });
   		 	
	$("#one").mouseleave(function(){
		$("#one").velocity({width: "-=20px", height: "-=80px"}, 500);
		});
		
	$("#two").mouseenter(function(){
		$("#two").velocity({width: "+=20px", height: "+=80px"}, 100);
		});
		
	$('#two').mouseenter(function() {
        bell2Sound.play();
   		 });
   		 		
	$("#two").mouseleave(function(){
		$("#two").velocity({width: "-=20px", height: "-=80px"}, 800);
		});	

	$("#three").mouseenter(function(){
		$("#three").velocity({width: "+=20px", height: "+=80px"}, 100);
		});
	
	$('#three').mouseenter(function() {
        bell3Sound.play();
   		 });		
		
	$("#three").mouseleave(function(){
		$("#three").velocity({width: "-=20px", height: "-=80px"}, 400);
		});
		
	$("#four").mouseenter(function(){
		$("#four").velocity({width: "+=20px", height: "+=80px"}, 100);
		});
	$('#four').mouseenter(function() {
        bell4Sound.play();
   		 });		
		
	$("#four").mouseleave(function(){
		$("#four").velocity({width: "-=20px", height: "-=80px"}, 200);
		});	
		
	$("#five").mouseenter(function(){
		$("#five").velocity({width: "+=20px", height: "+=80px"}, 100);
		});
	$('#five').mouseenter(function() {
        bell5Sound.play();
   		 });		
	$("#five").mouseleave(function(){
		$("#five").velocity({width: "-=20px", height: "-=80px"}, 500);
		});
	
	$("#six").mouseenter(function(){
		$("#six").velocity({width: "+=20px", height: "+=80px"}, 100);
		});
	$('#six').mouseenter(function() {
        bell6Sound.play();
   		 });		
		
	$("#six").mouseleave(function(){
		$("#six").velocity({width: "-=20px", height: "-=80px"}, 800);
		});
		
	$("#seven").mouseenter(function(){
		$("#seven").velocity({width: "+=20px", height: "+=80px"}, 100);
		});
		
	$('#seven').mouseenter(function() {
        bell7Sound.play();
   		 });		
   		 
	$("#seven").mouseleave(function(){
		$("#seven").velocity({width: "-=20px", height: "-=80px"}, 1000);
		});	
		
	$("#eight").mouseenter(function(){
		$("#eight").velocity({width: "+=20px", height: "+=80px"}, 100);
		});
		
	$('#eight').mouseenter(function() {
        bell8Sound.play();
   		 });				
		
	$("#eight").mouseleave(function(){
		$("#eight").velocity({width: "-=20px", height: "-=80px"}, 5000);
		});
		
	$("#nine").mouseenter(function(){
		$("#nine").velocity({width: "+=20px", height: "+=80px"}, 100);
		});
		
	$('#nine').mouseenter(function() {
        bell9Sound.play();
   		 });		
   		 		
	$("#nine").mouseleave(function(){
		$("#nine").velocity({width: "-=20px", height: "-=80px"}, 500);
		});	
		
	$("#ten").mouseenter(function(){
		$("#ten").velocity({width: "+=20px", height: "+=80px"}, 100);
		});
		
	$('#ten').mouseenter(function() {
        bell10Sound.play();
   		 });		
   		 		
	$("#ten").mouseleave(function(){
		$("#ten").velocity({width: "-=20px", height: "-=80px"}, 600);
		});																				

	$("#eleven").mouseenter(function(){
		$("#eleven").velocity({width: "+=20px", height: "+=80px"}, 100);
		});
		
	$('#eleven').mouseenter(function() {
        bell11Sound.play();
   		 });		
   		 		
	$("#eleven").mouseleave(function(){
		$("#eleven").velocity({width: "-=20px", height: "-=80px"}, 500);
		});	
		
	$("#twelve").mouseenter(function(){
		$("#twelve").velocity({width: "+=20px", height: "+=80px"}, 500);
		});
	$('#twelve').mouseenter(function() {
        bell12Sound.play();
   		 });		
   		 		
	$("#twelve").mouseleave(function(){
		$("#twelve").velocity({width: "-=20px", height: "-=80px"}, 5000);
		});	
		
	$("#thirteen").mouseenter(function(){
		$("#thirteen").velocity({width: "+=20px", height: "+=80px"}, 2000);
		});
		
	$('#thirteen').mouseenter(function() {
        bell13Sound.play();
   		 });		
   		 		
	$("#thirteen").mouseleave(function(){
		$("#thirteen").velocity({width: "-=20px", height: "-=80px"}, 300);
		});		
		
	$("#fourteen").mouseenter(function(){
		$("#fourteen").velocity({width: "+=20px", height: "+=80px"}, 300);
		});
		
	$('#fourteen').mouseenter(function() {
        bell14Sound.play();
   		 });		
   		 		
	$("#fourteen").mouseleave(function(){
		$("#fourteen").velocity({width: "-=20px", height: "-=80px"}, 1000);
		});	
			
		
	$("#fifteen").mouseenter(function(){
		$("#fifteen").velocity({width: "+=20px", height: "+=80px"}, 200);
		});
		
	$('#fifteen').mouseenter(function() {
        bell15Sound.play();
   		 });				
		
	$("#fifteen").mouseleave(function(){
		$("#fifteen").velocity({width: "-=20px", height: "-=80px"}, 4000);
		});
		
	$("#sixteen").mouseenter(function(){
		$("#sixteen").velocity({width: "+=20px", height: "+=80px"}, 3000);
		});
	$('#sixteen').mouseenter(function() {
        bell16Sound.play();
   		 });		
   		 		
	$("#sixteen").mouseleave(function(){
		$("#sixteen").velocity({width: "-=20px", height: "-=80px"}, 3000);
		});	
		
	$("#seventeen").mouseenter(function(){
		$("#seventeen").velocity({width: "+=20px", height: "+=80px"}, 2000);
		});
	$('#seventeen').mouseenter(function() {
        bell17Sound.play();
   		 });		
   		 		
	$("#seventeen").mouseleave(function(){
		$("#seventeen").velocity({width: "-=20px", height: "-=80px"}, 300);
		});		
		
	$("#eighteen").mouseenter(function(){
		$("#eighteen").velocity({width: "+=20px", height: "+=80px"}, 200);
		});
		
	$('#eighteen').mouseenter(function() {
        bell18Sound.play();
   		 });			
		
	$("#eighteen").mouseleave(function(){
		$("#eighteen").velocity({width: "-=20px", height: "-=80px"}, 1000);
		});	
		
	$("#nineteen").mouseenter(function(){
		$("#nineteen").velocity({width: "+=20px", height: "+=80px"}, 2000);
		});
		
	$('#nineteen').mouseenter(function() {
        bell19Sound.play();
   		 });	
   		 		
	$("#nineteen").mouseleave(function(){
		$("#nineteen").velocity({width: "-=20px", height: "-=80px"}, 2000);
		});		
		
	$("#twenty").mouseenter(function(){
		$("#twenty").velocity({width: "+=20px", height: "+=80px"}, 3000);
		});
	$('#twenty').mouseenter(function() {
        bell20Sound.play();
   		 });			
	$("#twenty").mouseleave(function(){
		$("#twenty").velocity({width: "-=20px", height: "-=80px"}, 2000);
		});																							
});