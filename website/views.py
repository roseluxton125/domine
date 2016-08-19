from django.views.generic.edit import FormView
from website.forms import ContactForm
from django.core.mail import send_mail
from django.shortcuts import render


def index(request):
	return render(request, 'index.html')

def school(request):
	return render(request, 'escuela.html')

def ppg(request):
	return render(request, 'ppg.html')

def pactivo(request):
	return render(request, 'pactivo.html')

def kstretch(request):
	return render(request, 'kstretch.html')

def events(request):
	return render(request, 'eventos.html')

def gallery(request):
	return render(request, 'galeria.html')

class ContactFormView(FormView):
	template_name = 'contacto.html'
	form_class = ContactForm
	success_url = '/'

	def form_valid(self, form):
		message = "{0} quiere contactarte: ".format(form.cleaned_data.get('name'))
		message = "\nEmail: {0}".format(form.cleaned_data.get('email'))
		message += "\n\nTelefono: {0}".format(form.cleaned_data.get('telephone'))
		message += "\n\nMensaje: {0}".format(form.cleaned_data.get('message'))
		
		send_mail('Mensaje de escuelajohanadomine.com',message,'email@email.com',['email@email.com'])
		return super(ContactFormView, self).form_valid(form)