from django.contrib import admin
from django.urls import path
from. import views

urlpatterns = [
    path('',views.home,name='home'),
    path('contact/', views.contact, name='contact'),
    path('tictactoe/',views.main, name='end-page'),
    path('message/',views.message,name='message'),
    path('ninja/',views.gametwo,name='gametwo'),
    path('flip/',views.flip,name='flip'),
    path('menu/',views.menu,name='menu'),
]


