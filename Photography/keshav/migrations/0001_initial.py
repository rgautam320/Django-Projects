# Generated by Django 3.2 on 2021-04-25 10:29

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Home',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('home_saying', models.CharField(default='WHERE PHOTOGRAPHERS INSPIRE EACH OTHER', max_length=25)),
                ('home_name', models.CharField(default='Keshav Gautam', max_length=20)),
                ('home_heading', models.CharField(default='Photography', max_length=20)),
                ('datetime', models.DateTimeField()),
            ],
        ),
    ]