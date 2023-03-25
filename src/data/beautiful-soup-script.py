import requests
from bs4 import BeautifulSoup

url = "https://steamwebapi.azurewebsites.net/"
html = requests.get(url)

soup = BeautifulSoup(html.content, 'html.parser')

divs = soup.find_all('div', style='margin-bottom: 75px;')
obj = {"apiInterface": []}


for divH3 in divs:
    obj["apiInterface"].append({"name": divH3.find('h3').text, "methods": []})# push to json later

    methodsDivs = divH3.find_all('div', class_='panel panel-default')
    for method in methodsDivs:
        print(len(methodsDivs))
        methodName = method.find('strong').text.split("/")[-1]
        version = method.find('span', class_='label label-info').text.replace(' ', '').split(':')[-1]

        obj["apiInterface"][obj["apiInterface"].__len__() - 1]["methods"].append({
            'name': methodName,
            "version": version,
            'arguments': []
        })




print(obj)



