from rest_framework import serializers
from .models import User, Profile, Photo, Contact


class UserModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'img_link')


class PhotoModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = ('small', 'large')


class ContactModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        exclude = ('id', 'profile')


class ProfileModelSerializer(serializers.ModelSerializer):
    user = UserModelSerializer()
    photo = PhotoModelSerializer()
    contact = ContactModelSerializer()

    class Meta:
        model = Profile
        fields = '__all__'
