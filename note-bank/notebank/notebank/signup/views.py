from django.contrib.auth import login, authenticate
from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect

from signup.forms import SignUpForm
from university.models import University

def retrieveUniversities():
    universities = University.objects.all()
    return universities

def signup(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            email = form.cleaned_data.get('email')
            raw_password = form.cleaned_data.get('password1')
            raw_password2 = form.cleaned_data.get('password2')
            first_name = form.cleaned_data.get('firstname')
            last_name = form.cleaned_data.get('lastname')
            university = form.get('university')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            # return redirect('/home')
            return HttpResponseRedirect('/home')
    else:
        form = SignUpForm()
    universities = retrieveUniversities()
    return render(request, 'signup.html', {'form': form, 'universities': universities})