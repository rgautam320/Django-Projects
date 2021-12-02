from django.contrib import admin
from .models import BlogPost


class BlogPostAdmin(admin.ModelAdmin):
    exclude = ('slug', )
    list_display = ('id', 'title', 'category', 'date_created')
    list_display_links = ('id', 'title')
    search_fields = ('title', )
    list_per_page = 25


admin.site.register(BlogPost, BlogPostAdmin)