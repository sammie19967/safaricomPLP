from django.shortcuts import render
import requests


API_KEY = 'a82dc793c28d8ee505c8f26e125319c2'


def weather_view(request):
    city = request.GET.get('city', 'Nairobi')  # Default city is Nairobi
    url = f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric"

    response = requests.get(url)
    data = response.json()

    if response.status_code == 200:
        weather_data = {
            'city': city,
            'temperature': data['main']['temp'],
            'description': data['weather'][0]['description'],
            'icon': data['weather'][0]['icon'],
        }
    else:
        weather_data = {'error': 'City not found'}

    return render(request, 'weather/weather.html', {'weather': weather_data})

# Create your views here