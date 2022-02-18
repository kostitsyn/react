# Generated by Django 4.0.1 on 2022-02-18 11:20

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0011_alter_profile_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='friends',
            field=models.ManyToManyField(blank=True, to='mainapp.Profile'),
        ),
        migrations.CreateModel(
            name='Message',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.TextField(blank=True, max_length=1024, verbose_name='Текст сообщения')),
                ('date_send', models.DateTimeField(auto_now_add=True, verbose_name='Дата отправления')),
                ('recipient', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='recipient', to=settings.AUTH_USER_MODEL, verbose_name='Получатель')),
                ('sender', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='sender', to=settings.AUTH_USER_MODEL, verbose_name='Отправитель')),
            ],
            options={
                'verbose_name': 'Сообщение',
                'verbose_name_plural': 'Сообщения',
            },
        ),
    ]
