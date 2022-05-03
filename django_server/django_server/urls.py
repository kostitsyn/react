"""django_server URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from mainapp.views import UserModelViewSet, ProfileModelViewSet, AuthDataAPIView, \
    FollowAPIView, DialogModelViewSet, MessageAPIView, PostModelViewSet, LoginAPIView, set_csrf_token
from rest_framework.authtoken import views
from django.conf import settings
from django.conf.urls.static import static

router = DefaultRouter()
router.register('users', UserModelViewSet)
router.register('profile', ProfileModelViewSet)
router.register('dialogs', DialogModelViewSet, basename='dialogs')
router.register('posts', PostModelViewSet, basename='posts')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/api-token-auth/', views.obtain_auth_token),
    path('api/', include(router.urls)),
    path('api/auth/me/', AuthDataAPIView.as_view()),
    path('api/follow/<int:pk>/', FollowAPIView.as_view()),
    path('api/message/<int:pk>/', MessageAPIView.as_view()),
    path('accounts/', include('django.contrib.auth.urls')),
    path('api/auth/login/', LoginAPIView.as_view()),
    path('api/set-csrf-cookie/', set_csrf_token),
    # path('api/profile/photo/', AvatarAPIView.as_view()),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
