from rest_framework.serializers import ModelSerializer
from .models import User, Profile, Photo, Contact


class UserModelSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class PhotoModelSerializer(ModelSerializer):
    class Meta:
        model = Photo
        fields = ('small', 'large')


class ContactModelSerializer(ModelSerializer):
    class Meta:
        model = Contact
        exclude = ('id', 'profile')


class ProfileModelSerializer(ModelSerializer):
    user_id = UserModelSerializer()
    photo = PhotoModelSerializer()
    contact = ContactModelSerializer()

    class Meta:
        model = Profile
        fields = '__all__'
