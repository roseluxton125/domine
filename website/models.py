from __future__ import unicode_literals

from django.db import models

class Evento(models.Model):
	title = models.CharField(max_length=200)
	location = models.CharField(max_length=100)
	date = models.DateField()
	img = models.ImageField(upload_to='eventos/')