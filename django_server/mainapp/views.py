from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView
from .models import User, Profile, Message, Dialog
from .serializers import UserModelSerializer, ProfileModelSerializer, FollowSerializer, \
    MessageModelSerializer, DialogModelSerializer
from rest_framework.response import Response
from rest_framework import status
from django.db.models import Q


class UserModelViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer


class ProfileModelViewSet(ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileModelSerializer


class DialogModelViewSet(ModelViewSet):
    serializer_class = DialogModelSerializer

    def get_queryset(self):
        user_id = self.request.query_params.get('user')
        if user_id:
            dialog = Dialog.objects.filter(Q(user=user_id) | Q(companion=user_id))
            return dialog
        return Dialog.objects.all()


class MessageAPIView(APIView):
    serializer_class = MessageModelSerializer

    def post(self, request, pk=None):
        sender = User.objects.get(pk=request.data.get('sender'))
        recipient = User.objects.get(pk=request.data.get('recipient'))
        dialog = Dialog.objects.get(pk=pk)
        new_message = Message.objects.create(sender=sender,
                                             recipient=recipient,
                                             text=request.data.get('text'),
                                             dialog=dialog)
        serializer = self.serializer_class(data=new_message)
        serializer.is_valid()
        return Response(serializer.data)


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
