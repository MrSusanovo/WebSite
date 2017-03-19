from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    context = {}
    context['request'] = request
    context['title'] = "Initially This Website Was Expected To Be A Personal Webpage For Co-op Job Search.It Turns Out To Be A Bad Idea Especially To Start It Near The End Of Term.Hosting With Apache2 Cost Me 2 Assignment And 2 Nights. This Web Page Is Accessible To The Whole World 24 Hours After I Bought The Domain.Sorry, Except For North Korea And Probably Some Country Inside The Great Fire Wall. I Spent 60 Bucks On This Server, But This SH*T Can Not Even Persuade My Parents To Support Me For Further Study. At Least, It Have To Be A Dynamic Website. Otherwise The Employers Won't Be Able To Tell The Difference Between Me And Those Who Host Their Webpage On Github And Don't Even Know AJAX. Oh, BTW, They Probably Have Higher Marks. There Will Be More, This Is Just A Beginning. I Am Tom Feng. Welcome To MrSusanovo. Further Funcionalities Under Construction.If You See This Scentence.Probably You Are Inside The Great Fire Wall."
    context['mainPart'] = ""
    context['script'] ="js/title.js"
    return render(request, "index.html", context)
    # return HttpResponse("currently underconstruction. Problems need to be solved: 1. Django static fil(css) not loaded , got 404. 2.Django template not working.")

# Create your views here.
