from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    context = {}
    context['request'] = request
    context['title'] = "12 Hours After The Domain Was Purchased. Anyone Can Access This Page From Anywhere On This Planet. Except For North Korea. Another 12-Hour Passed. This Scentence Appeared On Each Visitors Screen. In Such An Annoying Way.I Am Tom Feng. Welcome To MrSusanovo"
    context['mainPart'] = ""
    context['script'] ="js/title.js"
    return render(request, "index.html", context)
    # return HttpResponse("currently underconstruction. Problems need to be solved: 1. Django static fil(css) not loaded , got 404. 2.Django template not working.")

# Create your views here.
