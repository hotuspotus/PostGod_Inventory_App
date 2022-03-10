from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from .views import UserViewSet, AuditViewSet,\
    ItemViewSet, GroupViewSet

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'inventorys', GroupViewSet)
router.register(r'audit', AuditViewSet)
router.register(r'item', ItemViewSet)


urlpatterns = [
    path('', include(router.urls), name='api'),
    path('auth', include('rest_framework.urls'), name='rest-framework')
    # path('login', LoginView.as_view(template_name='rest_framework/login.html'), name='login')
]

