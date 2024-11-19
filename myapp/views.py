import requests
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import render
from .serializers import MySerializer

def index(request):
    return render(request, 'index.html')

# Define the extract_answer function within views.py
def extract_answer(input_text, generated_text):
    # Remove the input text from the beginning of the response
    if generated_text.startswith(input_text):
        generated_text = generated_text[len(input_text):].strip()
    
    # Further clean the response if needed
    patterns = [
        ' are ', ' was ', ' were ', '?', '|', ' - ', ' : '
    ]
    for pattern in patterns:
        if pattern in generated_text:
            generated_text = generated_text.split(pattern, 1)[-1].strip()
    
    return generated_text

class HuggingFaceView(APIView):
    def post(self, request):
        serializer = MySerializer(data=request.data)
        if serializer.is_valid():
            input_text = serializer.validated_data['input_text']
            API_URL = "https://api-inference.huggingface.co/models/Dineshyd/fine_tuned_cubeai"
            headers = {
                "Authorization": "Bearer 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",
                "Content-Type": "application/json"
            }

            def query(payload):
                response = requests.post(API_URL, headers=headers, json=payload)
                return response.json()

            try:
                # Query the model with the input text
                output = query({"inputs": input_text})

                # Extract the generated text from the model's response
                generated_text = output[0]['generated_text']

                # Extract the answer using your extract_answer function
                answer = extract_answer(input_text, generated_text)
                
                # Return only the answer as JSON response
                return Response({"answer": answer}, status=status.HTTP_200_OK)

            except requests.exceptions.RequestException as e:
                return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
