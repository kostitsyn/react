from rest_framework.serializers import ModelSerializer
from .models import User, Profile


class UserModelSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class ProfileModelSerializer(ModelSerializer):
    user_id = UserModelSerializer()

    class Meta:
        model = Profile
        fields = '__all__'
