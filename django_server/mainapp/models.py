from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    img_link = models.URLField(max_length=512, blank=True, verbose_name='аватарка')

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'
        ordering = ['username']

    def __str__(self):
        return self.username


class Contact(models.Model):
    facebook = models.URLField(max_length=256, blank=True, verbose_name='Facebook')
    website = models.URLField(max_length=256, blank=True, verbose_name='Website')
    twitter = models.URLField(max_length=256, blank=True, verbose_name='Twitter')
    instagram = models.URLField(max_length=256, blank=True, verbose_name='Instagram')
    youtube = models.URLField(max_length=256, blank=True, verbose_name='Youtube')
    github = models.URLField(max_length=256, blank=True, verbose_name='Github')
    main_link = models.URLField(max_length=256, blank=True, verbose_name='Main link')
    profile = models.OneToOneField('Profile', blank=True, default=1, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Контакт'
        verbose_name_plural = 'Контакты'

    def __str__(self):
        return f'Контакты пользователя {self.profile.user_id.name}'


class Photo(models.Model):
    small = models.URLField(max_length=1024, verbose_name='Малое фото')
    large = models.URLField(max_length=1024, verbose_name='Большое фото')
    profile = models.OneToOneField('Profile', default=1, on_delete=models.CASCADE)

    def __str__(self):
        print()
        return f'Фотографии пользователя {self.profile.user_id.name}'

    class Meta:
        verbose_name = 'Фото'
        verbose_name_plural = 'Фотографии'


# class Friend(models.Model):
#     user = models.ManyToManyField()
#     friend = models.ManyToManyField()

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=256, verbose_name='Полное имя')
    about_me = models.CharField(max_length=256, verbose_name='Обо мне')
    looking_for_a_job = models.BooleanField(default=False, verbose_name='Ищу ли работу')
    looking_for_a_job_description = models.CharField(max_length=512, verbose_name='Описание поиска работы')
    friends = models.ManyToManyField('self', blank=True)

    def __str__(self):
        return f'Профиль пользователя {self.user.username}'

    class Meta:
        verbose_name = 'Профиль'
        verbose_name_plural = 'Профили'


class Message(models.Model):
    sender = models.ForeignKey(User, on_delete=models.CASCADE, related_name='sender', verbose_name='Отправитель')
    recipient = models.ForeignKey(User, on_delete=models.CASCADE, related_name='recipient', verbose_name='Получатель')
    text = models.TextField(max_length=1024, blank=True, verbose_name='Текст сообщения')
    date_send = models.DateTimeField(auto_now_add=True, verbose_name='Дата отправления')

    def __str__(self):
        return f'Сообщение от {self.sender.username} пользователю {self.recipient.username}'

    class Meta:
        verbose_name = 'Сообщение'
        verbose_name_plural = 'Сообщения'
