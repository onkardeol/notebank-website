from django.db import models

class Notes(models.Model):
    name = models.CharField(max_length = 100)
    link = models.CharField(max_length = 100)
    course_name = models.CharField(max_length = 100)