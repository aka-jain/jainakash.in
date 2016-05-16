from django.conf.urls import include, url, patterns
from django.contrib import admin
from .views import Home, Mobile, Projects, Infoconnect, Zealicon, Recoursera, Dataanalysis, Founch, Getmeashop, Yemmymaids, Zeometree, Messageup, Portfolio, Prepmycar, Ecommerce 

# urlpatterns = [
#     # Examples:
#     url(r'^$', 'mypf.views.home', name='home'),

#     # url(r'^blog/', include('blog.urls')),

#     url(r'^admin/', include(admin.site.urls)),
# ]


urlpatterns = [
    url(r'^$', Home.as_view(), name="home"),
    url(r'^mobile/$', Mobile.as_view(), name="mobile"),
    url(r'^projects/$', Projects.as_view(), name="projects"),
	url(r'^infoconnect/$', Infoconnect.as_view(), name="infoconnect"),
	url(r'^zealicon/$', Zealicon.as_view(), name="zealicon"),
	url(r'^recoursera/$', Recoursera.as_view(), name="recoursera"),
	url(r'^data-analysis/$', Dataanalysis.as_view(), name="data-analysis"),
    url(r'^founch/$', Founch.as_view(), name="founch"),
    url(r'^getmeashop/$', Getmeashop.as_view(), name="getmeashop"),
    url(r'^yemmymaids/$', Yemmymaids.as_view(), name="yemmymaids"),
	url(r'^zeometree/$', Zeometree.as_view(), name="zeometree"),
	url(r'^messageup/$', Messageup.as_view(), name="messageup"),
	url(r'^portfolio/$', Portfolio.as_view(), name="portfolio"),
	url(r'^prepmycar/$', Prepmycar.as_view(), name="prepmycar"),
	url(r'^ecommerce/$', Ecommerce.as_view(), name="ecommerce")
]