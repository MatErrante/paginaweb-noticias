import requests
from django.shortcuts import render, redirect, get_object_or_404
from .models import Noticia
from .forms import NoticiaForm

# Create your views here.

def home(request):

    noticias = Noticia.objects.all()
    data = {"noticias": noticias}

    return render(request, 'caosnews/main.html')

def actualidad(request):
    return render(request, 'caosnews/main1.html')

def economia(request):
    return render(request, 'caosnews/main2.html')

def cultura(request):
    return render(request, 'caosnews/main3.html')

def aldia(request):
    return render(request, 'caosnews/main4.html')

def contacto(request):
    return render(request, 'caosnews/main5.html')

def formulario(request):
    return render(request, 'caosnews/formulario.html')

def tiempo(request):
    url = 'http://api.openweathermap.org/data/2.5/weather'
    params = {
        'q': 'Arica',
        'appid': '9e122cd782b2d0333f5fe4e7fa192062',
        'units': 'metric'  # Unidades métricas para el resultado en Celsius
    }
    response = requests.get(url, params=params)
    data = response.json()
    temperatura = data['main']['temp']
    ciudad = data['name']
    return render(request, 'caosnews/tiempo.html', {'temperatura': temperatura, 'ciudad': ciudad})


def agregar_noticia(request):
    data = {'form': NoticiaForm()}

    if request.method == 'POST':
        formulario  = NoticiaForm(data.request.POST, files=request.FILES)
        if formulario.is_valid():
            formulario.save()
            data["mensaje"] = "Noticia guardada correctamente"
        else:
            data['form'] = formulario

    return render(request, 'caosnews/noticia/agregar.html', data)

def listar_noticia(request):
    noticias = Noticia.objects.all()
    data = {'noticias': noticias}
    return render(request, 'caosnews/noticia/listar.html', data)

def modificar_noticia(request, id):
    noticia = get_object_or_404(Noticia, id=id)
    data = {'form': NoticiaForm(instance=noticia)}

    if request.method == 'POST':
        formulario = NoticiaForm(data=request.POST, instance=noticia, files=request.FILES)
        if formulario.is_valid():
            formulario.save()
            data["mensaje"] = "Noticia modificada correctamente"
        else:
            data['form'] = formulario

    return render (request, 'caosnews/noticia/modificar.html', data)

def eliminar_noticia(request, id):
    noticia = get_object_or_404(Noticia, id=id)
    noticia.delete()
    return redirect(to="listar-noticia")

