from django.db import models

class Courses(models.Model):
    name = models.CharField(max_length = 100)
    code = models.CharField(max_length = 100)