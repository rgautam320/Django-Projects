from django.db import models

# Create your models here.


class Task(models.Model):
    title = models.CharField(max_length=255, blank=False, null=False)
    completed = models.BooleanField(default=False, blank=False, null=False)

    def __str__(self):
        return self.title
