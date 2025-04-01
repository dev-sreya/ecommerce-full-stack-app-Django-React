from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .products import products
from .models import Product
 
from .serializers import ProductSerializer, UserSerializer

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

# def getRoutes(request):
#     return JsonResponse({'message': 'Hello'})


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def validate(self, user):
        data = super().validate(user)

        # Add custom claims
        data['username'] = self.user.username
        data['email'] = self.user.email
        # ...

        return data



@api_view(['GET'])
def getRoutes(request):
    routes = [

    ]
    return Response(routes)



@api_view(['GET'])
def getUserProfile(request):
    user = request.user
    serializer = UserSerializer(user, many = False)
    return Response(serializer.data)




@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many = True)
    return Response(serializer.data)

@api_view(['GET'])
def getProduct(request,pk):
    # product = None
    # for i in products:
    #     if i['_id'] == pk:
    #         product = i
    #         break
    try:
        product = Product.objects.get(_id=pk)
        serializer = ProductSerializer(product, many=False)
        return Response(serializer.data)
    except Product.DoesNotExist:
        return Response({'detail': 'Product not found.'}, status=status.HTTP_404_NOT_FOUND)
        