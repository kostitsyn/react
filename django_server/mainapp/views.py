from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView
from .models import User, Profile
from .serializers import UserModelSerializer, ProfileModelSerializer, FollowSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from rest_framework_api_key.permissions import HasAPIKey


class UserModelViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer


class ProfileModelViewSet(ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileModelSerializer


class AuthDataAPIView(APIView):

    def get(self, request):
        response_data = dict()
        if request.user.is_authenticated:
            user_data = {'user_id': request.user.id, 'email': request.user.email, 'login': request.user.username}
            response_data['result_code'] = 0
            response_data['messages'] = []
            response_data['data'] = user_data
        else:
            response_data['result_code'] = 1
            response_data['messages'] = ['You are not authorized']
            response_data['data'] = dict()
        return Response(response_data)


class FollowAPIView(APIView):
    serializer_class = FollowSerializer
    # permission_classes = [HasAPIKey]

    def post(self, request, pk=None):
        response_data = dict()
        if request.user.id == pk:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        user = User.objects.get(pk=request.user.id)
        adding_friend = User.objects.get(pk=pk)
        user_profile = user.profile
        adding_friend_profile = adding_friend.profile
        is_exists = user_profile.friends.filter(pk=adding_friend_profile.id).exists()
        if is_exists:
            response_data['result_code'] = 1
            response_data['messages'] = 'You already following this user'
            response_data['data'] = dict()
        else:
            serializer = ProfileModelSerializer(adding_friend_profile)
            response_data['result_code'] = 0
            response_data['messages'] = []
            response_data['data'] = serializer.data
            user_profile.friends.add(adding_friend_profile)
            user_profile.save()
        return Response(response_data)

    def delete(self, request, pk=None):
        response_data = dict()
        if request.user.id == pk:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        user = User.objects.get(pk=request.user.id)
        removing_friend = User.objects.get(pk=pk)
        user_profile = user.profile
        removing_friend_profile = removing_friend.profile
        is_exists = user_profile.friends.filter(pk=removing_friend_profile.id).exists()
        if is_exists:
            serializer = ProfileModelSerializer(removing_friend_profile)
            response_data['result_code'] = 0
            response_data['messages'] = []
            response_data['data'] = serializer.data
            user_profile.friends.remove(removing_friend_profile)
            user_profile.save()
        else:
            response_data['result_code'] = 1
            response_data['messages'] = 'You are not following this user'
            response_data['data'] = dict()
        return Response(response_data)
