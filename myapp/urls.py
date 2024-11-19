from django.urls import path
from .views import HuggingFaceView, index

urlpatterns = [
    path('', index, name='index'),
    path('api/huggingface/', HuggingFaceView.as_view(), name='huggingface')
]

