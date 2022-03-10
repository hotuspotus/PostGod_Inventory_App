from rest_framework import serializers
from django.contrib.auth.models import User, Group
from .models import Audit, Item

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'is_staff', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['name', 'user_set', 'item_set']


class ItemSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Item
        fields = ['id', 'name', 'description',
                'location', 'quantity', 'unit_price', 'depreciation_rate', 
                'memo', 'purchase_date', 'inventory']


class AuditSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Audit
        fields = ['department', 'datetime_completed', 'item', 'audit_status']

