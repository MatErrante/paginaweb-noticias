from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='main'),
    path('agregar-noticia', views.agregar_noticia, name='agregar-noticia'), 
    path('listar-noticia', views.listar_noticia, name='listar-noticia'), 
    path('modificar-noticia/<id>', views.modificar_noticia, name='modificar-noticia'),
    path('eliminar-noticia/<id>', views.eliminar_noticia, name='eliminar-noticia'),  
    path('actualidad', views.actualidad, name='actualidad'),
    path('economia', views.economia, name='economia'),
    path('cultura', views.cultura, name='cultura'),
    path('aldia', views.aldia, name='aldia'),
    path('contacto', views.contacto, name='contacto'),
    path('tiempo', views.tiempo, name='tiempo'),
    path('formulario', views.formulario, name='formulario'),
]

