from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class User(AbstractUser):
    firstName = models.CharField(max_length=50)
    lastName = models.CharField(max_length =50)
    bio = models.CharField(max_length=500, blank=True)
    universityId = models.IntegerField(default=0)
    

    def __str__(self):
        return self.username
