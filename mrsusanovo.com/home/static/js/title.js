function playText(counter, sentence,title){
    if(counter == 0){
	title.html(sentence[0]);
    }
    if(counter<12){
	console.log(counter, sentence[counter%12]);
	counter = counter + 1;
	title.fadeIn(400).delay(5000).fadeOut(400,function(){
	    title.html(sentence[counter%12]);
	});
    }else{
	title.html("MrSusanovo: A WebSite Initially Created For Dumping Junk Code");
	title.fadeIn(400);
    }
    return counter;
};

$(document).ready(function(){
    var title = $(".title");
    var data = title.html();
    var bodyClicked = false;
    data = data.split('.');
    title.html("A Brief Story About This Site");
    title.fadeIn(0).delay(4000).fadeOut(500);
    var counter = 0;
    var refreshID = setInterval(function(){counter =  playText(counter, data, title);}, 6000);
    $("#menutag-About").on("click",function(){
	//event.preventDefault();
	console.log("about clicked");
	$.get("about/",{via: "ajax"},function(data){
	    $(".content").html(data);
	    $(".title").css("display","none");
	});
    });
    $("#menutag-GitHub").on("click",function(){
	//event.preventDefault();
	window.open("http://github.com/MrSusanovo");
    });    
});
