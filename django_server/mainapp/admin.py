from django.contrib import admin
from .models import User, Profile, Photo, Contact

admin.site.register(User)
admin.site.register(Profile)
admin.site.register(Photo)
admin.site.register(Contact)
