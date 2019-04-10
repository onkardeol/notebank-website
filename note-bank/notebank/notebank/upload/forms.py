from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

class SignUpForm(UserCreationForm):
    name_of_professor = forms.CharField(max_length=30, required=True)
    course_code = forms.CharField(max_length=30, required=True)
    university = forms.CharField(max_length=100, required=True)
    year = forms.IntField(required=True)
    final_mark = forms.IntField(required=True)
    
    class Meta:
        model = User
        fields = ('university', 'name_of_professor', 'course_code', 'year', 'final_mark')