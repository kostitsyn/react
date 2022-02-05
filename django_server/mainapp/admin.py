from django.contrib import admin
from .models import User, Profile, Photo, Contact
from django.contrib.auth.admin import UserAdmin


admin.site.register(Profile)
admin.site.register(Photo)
admin.site.register(Contact)


class EmployeeAdmin(UserAdmin):
    pass

admin.site.register(User, EmployeeAdmin)