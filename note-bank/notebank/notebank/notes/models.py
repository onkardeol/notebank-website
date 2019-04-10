from django.db import models
from university.models import University

class Notes(models.Model):
    name = models.CharField(max_length = 100)
    link = models.CharField(max_length = 100)
    course_name = models.CharField(max_length = 100)
    university_name = models.ForeignKey(University, max_length = 100, on_delete = models.CASCADE)
    professor = models.CharField(max_length = 100)
    mark = models.CharField(max_length = 3)
    time_taken = models.CharField(max_length = 4)
