from django.contrib import admin
from django.urls import path
from django.urls import path, include
from api import views
from rest_framework import routers

router = routers.SimpleRouter()
router.register(r'users', views.Userdetails)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include("api.urls")),
    path('user/',include(router.urls)),
]
