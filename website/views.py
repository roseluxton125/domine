from django.shortcuts import render


def index(request):
	return render(request, 'index.html')


def school(request):
	return render(request, 'escuela.html')


def ppg(request):
	return render(request, 'ppg.html')