from django.db import models

# Create your models here.
class Periodista(models.Model):
    nombre = models.CharField(max_length=70)

    def __str__(self):
        return self.nombre

class Noticia(models.Model):
    categoria = models.CharField(max_length=50)
    imagen = models.ImageField(upload_to = "noticias", null=True)
    titulo = models.CharField(max_length=100)
    cuerpo = models.CharField(max_length=300)
    fecha = models.DateField()
    periodista = models.ForeignKey(Periodista, on_delete=models.PROTECT)

    def __str__(self):
        return self.categoria
    


