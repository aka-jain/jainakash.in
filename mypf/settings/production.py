import os
from django.conf import settings

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

PROJECT_ROOT = BASE_DIR


DEBUG = False

DATABASES = settings.DATABASES

import dj_databsae_url
DATABASES['default'] = dj_databsae_url.config()


SECURE_PROXY_SSL_HANDLER = ('HTTP_X_FORWARDED_PROTO', 'https')

ALLOWED_HOSTS = ['*']


EMAIL_HOST = 'smtp.gmail.com'
EMAIL_HOST_USER = 'redrobin9211@gmail.com'
EMAIL_HOST_PASSWORD = 'Nikhil001'
EMAIL_PORT = 587
EMAIL_USE_TLS = True


# BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

STATIC_ROOT = os.path.join(PROJECT_ROOT, 'staticfiles')
STATIC_URL = '/static/'

STATICFILES_DIRS = (
	os.path.join(BASE_DIR, 'static')),


STATICFILES_STORAGE = 'whitenoise.django.GzipManifestStaticFilesStorage'