from django.contrib import admin

from sorl.thumbnail import get_thumbnail

from models import Evento


class EventoAdmin(admin.ModelAdmin):
	list_display = ('title', 'location', 'date', 'img')

	# def img(self):
	# 	return '<img src="%s">' % get_thumbnail(self.url, '50x150', format='JPEG')
	
	# img.allow_tags = True

admin.site.register(Evento, EventoAdmin)