from django.contrib.auth import login, authenticate
from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect

from signup.forms import SignUpForm
from university.models import University

def home(request):
    # return HttpResponse('home')
    return render(request, 'home.html')

def note(request):
    # return HttpResponse('note')
    return render(request, 'note.html')
