from rest_framework import serializers
from .models import User, Profile, Photo, Contact, Message, Dialog, Post


class UserModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'img_link', 'img_file')


class PhotoModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = ('small_url', 'small_file', 'large_url', 'large_file')


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


class FollowSerializer(serializers.Serializer):
    user_id = serializers.IntegerField(default=0)


class MessageModelSerializer(serializers.ModelSerializer):
    sender = UserModelSerializer()
    recipient = UserModelSerializer()

    class Meta:
        model = Message
        fields = '__all__'



class DialogModelSerializer(serializers.ModelSerializer):
    user = UserModelSerializer()
    companion = UserModelSerializer()
    messages = MessageModelSerializer(many=True)

    class Meta:
        model = Dialog
        fields = '__all__'


class PostModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'