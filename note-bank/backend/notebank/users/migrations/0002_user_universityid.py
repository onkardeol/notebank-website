# Generated by Django 2.2 on 2019-04-09 04:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='universityId',
            field=models.IntegerField(default=0),
        ),
    ]
