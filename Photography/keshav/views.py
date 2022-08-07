from django.shortcuts import render
from django.http import HttpResponse

from .models import Home, About, Gallery, Blog, Contact

# Create your views here.


def index(request):

    det = Home.objects.all()

    return render(request, 'index.html', {'detail': det})


def about(request):

    about = About.objects.all()

    return render(request, 'about.html', {'detail': about})


def gallery(request):

    gallery = Gallery.objects.all()

    portrait = []
    landscape = []

    for img in gallery:
        if(img.gallery_img_type == "Portrait"):
            portrait.append(img)
        if(img.gallery_img_type == "Landscape"):
            landscape.append(img)

    return render(request, 'gallery.html', {'portrait': portrait, 'landscape': landscape})


def blog(request):

    blog = Blog.objects.all()

    portrait = []
    landscape = []

    for img in blog:
        if(img.blog_img_type == "Portrait"):
            portrait.append(img)
        if(img.blog_img_type == "Landscape"):
            landscape.append(img)

    return render(request, 'blog.html', {'portrait': portrait, 'landscape': landscape})


def contact(request):

    if request.method == 'POST':
        name = request.POST.get('name', 'Default')
        email = request.POST.get('email', 'Default')
        phone = request.POST.get('phone', 'Default')
        message = request.POST.get('message', 'Default')

        msg = Contact(name=name, email=email, phone=phone, message=message)
        msg.save()

    return render(request, 'contact.html')
