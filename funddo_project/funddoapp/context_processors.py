import urllib2
import json


def instagram(request):
	url = "https://www.instagram.com/fund_dos/media/"
	json_obj = urllib2.urlopen(url)
	data = json.load(json_obj)
	images = []
	for i in data ['items']:
		images.append(i['images']['standard_resolution']['url'])
	return {'images':images}