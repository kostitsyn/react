from django.contrib import admin
from .models import User, Profile, Photo, Contact, Message
from django.contrib.auth.admin import UserAdmin


admin.site.register(Profile)
admin.site.register(Photo)
admin.site.register(Contact)
admin.site.register(Message)


class EmployeeAdmin(UserAdmin):
    pass

admin.site.register(User, EmployeeAdmin)