# Generated by Django 4.1.2 on 2023-07-11 16:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('caosnews', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='noticia',
            name='imagen',
            field=models.ImageField(null=True, upload_to='noticias'),
        ),
    ]
