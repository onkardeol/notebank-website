# Generated by Django 2.2 on 2019-04-10 16:49

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Courses',
            fields=[
                ('course_id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('course_name', models.CharField(max_length=100)),
                ('course_code', models.CharField(max_length=100)),
                ('university_id', models.CharField(max_length=100)),
            ],
        ),
    ]
