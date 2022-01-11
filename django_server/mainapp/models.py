from django.db import models


class User(models.Model):
    name = models.CharField(max_length=128, verbose_name='Имя пользователя')
    img_link = models.URLField(max_length=512, verbose_name='аватарка')

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'
        ordering = ['name']

    def __str__(self):
        return self.name