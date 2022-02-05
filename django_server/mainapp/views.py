from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView
from .models import User, Profile
from .serializers import UserModelSerializer, ProfileModelSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status


class UserModelViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer


class ProfileModelViewSet(ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileModelSerializer


class AuthDataView(APIView):

    def get(self, request):
        response_data = dict()
        if request.user.is_authenticated:
            user_data = {'user_id': request.user.id, 'email': request.user.email, 'login': request.user.username}
            response_data['result_code'] = 0
            response_data['messages'] = []
            response_data['data'] = user_data
        else:
            response_data['result_code'] = 1
            response_data['messages'] = 'You are not authorized'
            response_data['data'] = dict()
        return Response(response_data)

