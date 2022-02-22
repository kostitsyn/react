from django.contrib import admin
from .models import User, Profile, Photo, Contact, Message, Dialog, Post
from django.contrib.auth.admin import UserAdmin


admin.site.register(Profile)
admin.site.register(Photo)
admin.site.register(Contact)
admin.site.register(Message)
admin.site.register(Dialog)
admin.site.register(Post)


class EmployeeAdmin(UserAdmin):
    pass

admin.site.register(User, EmployeeAdmin)