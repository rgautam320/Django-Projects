from django.db import models

# Create your models here.


class Home(models.Model):
    home_saying = models.CharField(
        max_length=50, default="WHERE PHOTOGRAPHERS INSPIRE EACH OTHER")
    home_name = models.CharField(max_length=20, default="Keshav Gautam")
    home_heading = models.CharField(max_length=20, default="Photography")
    datetime = models.DateTimeField()

    def __str__(self):
        return self.home_name


class About(models.Model):
    datetime = models.DateTimeField()
    about_icon = models.ImageField(upload_to="about/images")
    about_keshav = models.CharField(max_length=300, default="")
    exp_nature = models.CharField(max_length=300, default="")
    exp_event = models.CharField(max_length=300, default="")
    exp_portrait = models.CharField(max_length=300, default="")
    exp_life = models.CharField(max_length=300, default="")
    exp_blackwhite = models.CharField(max_length=300, default="")
    skills_info = models.CharField(max_length=200, default="")
    skills_dev = models.IntegerField(default=60)
    skills_photography = models.IntegerField(default=60)
    skills_dynamic = models.IntegerField(default=60)
    skills_classic = models.IntegerField(default=60)

    def __str__(self):
        return "Keshav Gautam"


class Gallery(models.Model):
    gallery_img = models.ImageField(upload_to="gallery/images")
    gallery_img_type = models.CharField(max_length=10, default="Portrait")
    gallery_img_name = models.CharField(max_length=15, default="Gallery Image")
    gallery_img_desc = models.CharField(
        max_length=30, default="Gallery Image Description")

    def __str__(self):
        return "Gallery Images"


class Blog(models.Model):
    blog_img = models.ImageField(upload_to="blog/images")
    blog_img_type = models.CharField(max_length=10, default="Portrait")
    blog_img_name = models.CharField(max_length=15, default="Blog Image")
    blog_img_desc = models.CharField(
        max_length=30, default="Blog Description")
    date = models.DateField()

    def __str__(self):
        return self.blog_img_name


class Contact(models.Model):
    name = models.CharField(max_length=25)
    email = models.CharField(max_length=22)
    phone = models.CharField(max_length=10)
    message = models.TextField(max_length=300)

    def __str__(self):
        return self.name
