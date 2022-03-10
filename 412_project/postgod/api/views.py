from typing import Dict
from django.http.request import QueryDict
from django.shortcuts import render
from rest_framework.serializers import Serializer
from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User, Group
from django.urls import reverse
from .models import Audit, Item
from .serializers import UserSerializer,\
    AuditSerializer, ItemSerializer, GroupSerializer

class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class GroupViewSet(ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer


class ItemViewSet(ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

    def create(self, request):
        group_id = request.user.groups.all()[0].id
        item_uri = request.build_absolute_uri(f'/api/inventorys/{group_id}') + '/'
        print(f'type(request.data):{type(request.data)}')
        if  isinstance(request.data, QueryDict):
            data = {**request.data.dict(),  'inventory': item_uri}
        else:
            data = {**request.data,  'inventory': item_uri}

        print(f'data = {data}')
        serializer  = self.serializer_class(data=data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


        # if "uid" in request.POST:
        #     try:
        #         instance = Face.objects.get(pk=request.POST['uid'])
        #         serializer = FaceSerializer(
        #             instance=instance,
        #             data=request.data
        #         )
        #     except Face.DoesNotExist:
        #         serializer = FaceSerializer(data=request.data)
        # else:
        #     serializer = FaceSerializer(data=request.data)

        # serializer.is_valid(raise_exception=True)
        # serializer.save()

        # return Response(serializer.data)


class AuditViewSet(ModelViewSet):
    queryset = Audit.objects.all()
    serializer_class = AuditSerializer
