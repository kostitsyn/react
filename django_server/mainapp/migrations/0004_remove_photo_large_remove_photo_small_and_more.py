# Generated by Django 4.0.1 on 2022-04-16 12:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0003_alter_profile_about_me'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='photo',
            name='large',
        ),
        migrations.RemoveField(
            model_name='photo',
            name='small',
        ),
        migrations.AddField(
            model_name='photo',
            name='large_file',
            field=models.ImageField(blank=True, upload_to='avatars/large', verbose_name='Файл большого фото'),
        ),
        migrations.AddField(
            model_name='photo',
            name='large_url',
            field=models.URLField(blank=True, max_length=1024, verbose_name='Большое фото'),
        ),
        migrations.AddField(
            model_name='photo',
            name='small_file',
            field=models.ImageField(blank=True, upload_to='avatars/small', verbose_name='Файл малого фото'),
        ),
        migrations.AddField(
            model_name='photo',
            name='small_url',
            field=models.URLField(blank=True, max_length=1024, verbose_name='Малое фото'),
        ),
    ]
