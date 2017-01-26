from django import forms
from models import Request, UserProfile
from django.shortcuts import render, get_object_or_404
from django.contrib.auth.models import User
from models import UserProfile
from funddoapp.location import *
from django.core.mail import send_mail, EmailMessage

class UserForm(forms.ModelForm):
	password = forms.CharField(widget=forms.PasswordInput())

	class Meta:
		model = User
		fields = ('username', 'password', 'email')

class UserProfileForm(forms.ModelForm):
	your_location = forms.ChoiceField(choices= LOCATION_CHOICES, widget=forms.Select(), required=True)
	class Meta:
		model = UserProfile
		fields = ('picture', 'bio')

class RequestForm(forms.ModelForm):
	title = forms.CharField(max_length=128, help_text="Please enter a title")
	request = forms.CharField(widget=forms.Textarea(), required=True)
	email = forms.EmailField(max_length=123, help_text="Enter Email here")


	class Meta:
		model = Request
		fields = ('title', 'request')
		exclude = ('poster',)

class ContactForm(forms.Form):
	subject = forms.CharField(required=True)
	body = forms.CharField(widget=forms.Textarea(), required=True)

	def EmailMessage(self, o):
		subject = self.cleaned_data['subject']
		body = self.cleaned_data['body']
	
		message = '''
			Subject: {subject}
			Message:
			Hey {username} is interested in your request
			{body}
			you can email them at {emails}'''.format(subject=subject,
				body=body,
				username= UserProfile.user,
				emails= UserProfile.user,
				
				)
		email_msg = EmailMessage('Someone is interested', message, [None])

		email_msg.send

