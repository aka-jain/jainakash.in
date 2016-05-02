from django.conf.urls import include, url, patterns
from django.contrib import admin
from .views import Home, Mobile

# urlpatterns = [
#     # Examples:
#     url(r'^$', 'mypf.views.home', name='home'),

#     # url(r'^blog/', include('blog.urls')),

#     url(r'^admin/', include(admin.site.urls)),
# ]


urlpatterns = [
    url(r'^$', Home.as_view(), name="home"),
    url(r'^mobile/$', Mobile.as_view(), name="mobile")
]