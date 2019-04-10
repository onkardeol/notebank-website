from django.contrib.auth.decorators import login_required
from django.contrib.auth import login, authenticate
from django.shortcuts import render, redirect

from courses.models import Courses
from notes.models import Notes

#@login_required(login_url='/login')

def retrieveCourses():
    courses = Courses.objects.all()
    return courses

def retrieveNotes():
    notes = Notes.objects.all()
    return notes

def home(request):
    if request.method == 'GET':
        courses = retrieveCourses()
        notes = retrieveNotes()
        return render(request, 'home.html', {'courses': courses, 'notes': notes})