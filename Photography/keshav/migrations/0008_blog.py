# Generated by Django 3.2 on 2021-04-25 12:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('keshav', '0007_alter_gallery_gallery_img_desc'),
    ]

    operations = [
        migrations.CreateModel(
            name='Blog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('blog_img', models.ImageField(upload_to='blog/images')),
                ('blog_img_type', models.CharField(default='Portrait', max_length=10)),
                ('blog_img_name', models.CharField(default='Blog Image', max_length=15)),
                ('blog_img_desc', models.CharField(default='Blog Description', max_length=30)),
            ],
        ),
    ]
