# Generated by Django 3.2.2 on 2021-05-20 18:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_auto_20210514_1131'),
    ]

    operations = [
        migrations.AlterField(
            model_name='useraccount',
            name='is_staff',
            field=models.BooleanField(default=True),
        ),
    ]
