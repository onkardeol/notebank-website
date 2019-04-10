from django.shortcuts import render

# Create your views here.

def notepage(request):
    return render(request, 'notepage.html')
