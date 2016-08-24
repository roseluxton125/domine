from __future__ import unicode_literals

import os
from time import strftime

from unidecode import unidecode
from django_resized import ResizedImageField

from django.conf import settings
from django.db import models


def file_name(instance, filename):
	name, ext = os.path.splitext(str(filename))
	name = unidecode('evento-'+ instance.location + '-' + instance.date.strftime('%d-%m-%Y') + ext)
	print name
	file = os.path.exists(settings.MEDIA_ROOT+'/eventos/'+str(filename))
	if file:
		os.remove(settings.MEDIA_ROOT+'/eventos/'+str(filename))
	return 'eventos/'+str(name)

class Evento(models.Model):
	title = models.CharField(max_length=200, verbose_name='Titulo')
	location = models.CharField(max_length=100, verbose_name='Lugar')
	date = models.DateField(verbose_name='Fecha')
	img = ResizedImageField(size=[325, 400], quality=100, upload_to=file_name, verbose_name='Imagen')