from django.http import HttpResponse
from django.shortcuts import render

def home(request):
    # return HttpResponse('home')
    return render(request, 'home.html')

def note(request):
    # return HttpResponse('note')
    return render(request, 'note.html')

