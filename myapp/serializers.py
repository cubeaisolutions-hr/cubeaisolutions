from rest_framework import serializers

class MySerializer(serializers.Serializer):
    input_text = serializers.CharField()