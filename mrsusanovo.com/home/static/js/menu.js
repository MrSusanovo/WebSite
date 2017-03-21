$("menutag-About").on("click",function(){
    $(this).css("color", "rgba(244,0,0,1)");
    console.log("about clicked");
    $.get("about",function(data){
	$(".title").html(data);
    });
});

$("menutag-GitHub").on("click",function(){
    window.open("http://github.com/MrSusanovo");
});
