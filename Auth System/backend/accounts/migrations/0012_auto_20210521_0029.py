# Generated by Django 3.2.2 on 2021-05-20 18:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0011_auto_20210521_0028'),
    ]

    operations = [
        migrations.AlterField(
            model_name='useraccount',
            name='is_staff',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='useraccount',
            name='is_superuser',
            field=models.BooleanField(default=False),
        ),
    ]