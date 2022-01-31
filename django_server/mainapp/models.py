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


class Profile(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=256, verbose_name='Полное имя')
    about_me = models.CharField(max_length=256, verbose_name='Обо мне')
    looking_for_a_job = models.BooleanField(default=False, verbose_name='Ищу ли работу')
    looking_for_a_job_description = models.CharField(max_length=512, verbose_name='Описание поиска работы')

    def __str__(self):
        return f'Профиль пользователя {self.user_id.name}'

    class Meta:
        verbose_name = 'Профиль'
        verbose_name_plural = 'Профили'
