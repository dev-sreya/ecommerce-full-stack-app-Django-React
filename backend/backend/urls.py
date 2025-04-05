"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
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

import sys
import os

from django.contrib import admin
from django.urls import path, include
from django.conf import settings 
from django.conf.urls.static import static


import base.urls.product_urls as product_urls
import base.urls.order_urls as order_urls
import base.urls.user_urls as user_urls
#sys.path.append(os.path.join(os.path.dirname(os.path.dirname(__file__)),'base'))

urlpatterns = [
    path('admin/', admin.site.urls),
   path('api/products/', include(product_urls.product_urrls)),
    path('api/users/', include(user_urls.user_urrls)),
    path('api/ordered/', include(order_urls.order_urrls)),
    #path('api/', include('base.urls')),
    #path('api-auth/', include('rest_framework.urls'))
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

