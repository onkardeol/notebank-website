from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.contrib.auth import views as auth_views

# Create your views here.
def redirect(request):
    return HttpResponseRedirect('/login')

def login(request):
    if request.user.is_authenticated:
        return HttpResponseRedirect('/home')
    else:
        return auth_views.LoginView.as_view()(request)