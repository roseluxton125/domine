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