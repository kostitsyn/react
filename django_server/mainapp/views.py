from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView
from .models import User, Profile, Message, Dialog, Post
from .serializers import UserModelSerializer, ProfileModelSerializer, FollowSerializer, \
    MessageModelSerializer, DialogModelSerializer, PostModelSerializer
from rest_framework.response import Response
from rest_framework import status
from django.db.models import Q
from rest_framework.decorators import action
from django.shortcuts import get_object_or_404
from rest_framework import renderers
from django.contrib import auth
from django.views.decorators.csrf import ensure_csrf_cookie
from rest_framework.decorators import api_view
from rest_framework.authtoken.models import Token


@ensure_csrf_cookie
@api_view(['GET'])
def set_csrf_token(request):
    return Response({'details': 'CSRF cookie set'})


class UserModelViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer


class ProfileModelViewSet(ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileModelSerializer


    @action(detail=False, methods=['patch'])
    def edit_status(self, requset):
        response_data = {'messages': [], 'result_code': 0, 'data': dict()}
        profile = requset.user.profile
        new_status = requset.data.get('status')
        if len(new_status) > 256:
            response_data['result_code'] = 1
            response_data['messages'].append('Превышена максимальная длина строки статуса (256)')
        serializer = self.serializer_class(profile, data={'about_me': new_status}, partial=True)
        if serializer.is_valid():
            serializer.save()
            response_data['data'] = {'status': serializer.data.get('about_me')}
        else:
            response_data['result_code'] = 1
            response_data['messages'].append('Не удалось сохранить объект')
        return Response(response_data)

    # Не используется, статус берется из профиля
    @action(detail=True, methods=['get'], renderer_classes=(renderers.JSONRenderer,))
    # @renderer_classes([renderers.JSONRenderer])
    def get_status(self, request, pk=None):
        profile = get_object_or_404(Profile, pk=pk)
        return Response({'status': profile.about_me})


class DialogModelViewSet(ModelViewSet):
    serializer_class = DialogModelSerializer

    def get_queryset(self):
        user_id = self.request.query_params.get('user')
        if user_id:
            dialogs = Dialog.objects.filter(Q(user=user_id) | Q(companion=user_id))
            return dialogs
        return Dialog.objects.all()


class PostModelViewSet(ModelViewSet):
    serializer_class = PostModelSerializer

    def get_queryset(self):
        user_id = self.request.query_params.get('user')
        if user_id:
            posts = Post.objects.filter(user=user_id)
            return posts
        return Post.objects.all()


class MessageAPIView(APIView):

    def post(self, request, pk=None):
        sender = User.objects.get(pk=request.data.get('sender'))
        recipient = User.objects.get(pk=request.data.get('recipient'))
        dialog = Dialog.objects.get(pk=pk)
        new_message = Message.objects.create(sender=sender,
                                             recipient=recipient,
                                             text=request.data.get('text'),
                                             dialog=dialog)
        serializer = MessageModelSerializer(new_message)
        return Response(serializer.data)


class AuthDataAPIView(APIView):

    def get(self, request):
        response_data = {'messages': [], 'result_code': 0, 'data': dict()}
        if request.user.is_authenticated:
            user_data = {'user_id': request.user.id, 'email': request.user.email, 'login': request.user.username}
            response_data['data'] = user_data
        else:
            response_data['result_code'] = 1
            response_data['messages'].append('You are not authorized')

        response = Response(response_data)
        return response


class FollowAPIView(APIView):
    serializer_class = FollowSerializer


    def post(self, request, pk=None):
        response_data = {'messages': [], 'result_code': 0, 'data': dict()}
        if request.user.id == pk:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        user = User.objects.get(pk=request.user.id)
        adding_friend = User.objects.get(pk=pk)
        user_profile = user.profile
        adding_friend_profile = adding_friend.profile
        is_exists = user_profile.friends.filter(pk=adding_friend_profile.id).exists()
        if is_exists:
            response_data['result_code'] = 1
            response_data['messages'].append('Вы уже подписаны на этого пользователя')
        else:
            serializer = ProfileModelSerializer(adding_friend_profile)
            response_data['data'] = serializer.data
            user_profile.friends.add(adding_friend_profile)
            user_profile.save()
        return Response(response_data)

    def delete(self, request, pk=None):
        response_data = {'messages': [], 'result_code': 0, 'data': dict()}
        if request.user.id == pk:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        user = User.objects.get(pk=request.user.id)
        removing_friend = User.objects.get(pk=pk)
        user_profile = user.profile
        removing_friend_profile = removing_friend.profile
        is_exists = user_profile.friends.filter(pk=removing_friend_profile.id).exists()
        if is_exists:
            serializer = ProfileModelSerializer(removing_friend_profile)
            response_data['data'] = serializer.data
            user_profile.friends.remove(removing_friend_profile)
            user_profile.save()
        else:
            response_data['result_code'] = 1
            response_data['messages'].append('You are not following this user')
        return Response(response_data)


class LoginAPIView(APIView):

    def post(self, request, format=None):
        response_data = {'messages': [], 'result_code': 0, 'data': dict()}
        username = request.data.get('username')
        password = request.data.get('password')
        user = auth.authenticate(username=username, password=password)
        token = ''
        if user:
            token = Token.objects.get(user_id=user.id)
            auth.login(request, user)
        else:
            response_data['messages'].append('Неверный логин или пароль')
            response_data['result_code'] = 1
        response = Response(response_data)
        response.set_cookie('token', token, httponly=True)

        return response
        # return Response(response_data)

    def delete(self, request):
        response_data = {'messages': [], 'result_code': 0, 'data': dict()}
        auth.logout(request)
        return Response(response_data)




