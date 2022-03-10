from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('inventory', index),
    path('audit', index),
    path('audit/:id', index)
]
