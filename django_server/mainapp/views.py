from rest_framework.viewsets import ModelViewSet
from .models import User, Profile
from .serializers import UserModelSerializer, ProfileModelSerializer


class UserModelViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer


class ProfileModelViewSet(ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileModelSerializer


