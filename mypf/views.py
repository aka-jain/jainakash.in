from django.conf import settings
from django.core.mail import send_mail, BadHeaderError
from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import View

from .forms import ContactForm

import json

class Home(View):
	def get(self, request):
		return render(request, "index.html")

	def post(self, request, *args, **kwargs):
		# print request.POST
		name = request.POST['name']
		email = request.POST['email']
		message = request.POST['message']
		email_message = "\n\nName:  "+name+ '\n\nEmail:  '+email+'\n\nMessage:  '+message+'\n\n\n'
		
		if name and message and email:
			try:
				send_mail('Site Contact', 
						email_message,
						email, 
						[settings.EMAIL_HOST_USER,'akashjain993@gmail.com' ])
			except BadHeaderError:
				return HttpResponse('Invalid Header found.')
		return HttpResponse('/')


class Mobile(View):
	def get(self, request):
		return render(request, "mobile.html")


