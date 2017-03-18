function playText(counter, sentence,title){
    if(counter>8){
	counter = counter % 8;
    }
    title.html(sentence[(counter%8)]);
    console.log(counter, counter%8, sentence[counter%6]);
    title.fadeIn(400).delay(4000).fadeOut(500).delay(168);
    counter = counter + 1;
    return counter;
};
$(document).ready(function(){
    var title = $(".title");
    title.fadeOut(0);
    title.css("font-size", "48px");
    title.css("color", "rgba(244,244,244,1)");
    title.css("font-familiy", "cambria");
    title.css("positon", "absolute");
    title.css("margin-top", "200px");
    title.css("margin-left", "80px");
    var data = title.html();
    data = data.split('.');
    title.html("A Breif Story About This Site");
    title.fadeIn(0).delay(4000).fadeOut(500);
    var counter = 0;
    var refreshID = setInterval(function(){counter =  playText(counter, data, title);}, 6500);
});
