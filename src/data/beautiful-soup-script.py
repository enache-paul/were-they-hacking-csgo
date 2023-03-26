import requests
from bs4 import BeautifulSoup


def convert_class_to_boolean(class_name):
    return class_name == 'glyphicon glyphicon-ok text-success'


url = "https://steamwebapi.azurewebsites.net/"

html = requests.get(url)

soup = BeautifulSoup(html.content, 'html.parser')
divs = soup.find_all('div', style='margin-bottom: 75px;')

obj = {"apiInterface": []}

for divH3 in divs:
    obj["apiInterface"].append({"name": divH3.find('h3').text, "methods": []})

    methodsDivs = divH3.find_all('div', class_='panel panel-default')
    for method in methodsDivs:
        methodName = method.find('strong').text.split("/")[-1]
        version = method.find('span', class_='label label-info').text.replace(' ', '').split(':')[-1]

        obj["apiInterface"][-1]["methods"].append({
            'name': methodName,
            "version": '000' + version,
            'arguments': []
        })

        tbodys = method.find_all('tbody')
        for tbody in tbodys:
            trs = tbody.find_all('tr')

            for tr in trs:
                tds = tr.find_all('td')
                required_classes = ' '.join(tds[2].i.attrs.get('class'))

                name = tds[0].text.replace('\n', '').replace(' ', '')
                type_ = tds[1].text.replace('\n', '').replace(' ', '')
                required = str(convertClassToBoolean(required_classes)).replace('T', 't')
                description = tds[3].text.replace('\n', '').replace('\r', '').replace('  ', '')

                argument = {'name': tds[0].text.replace('\n', '').replace(' ', ''),
                            'type': type_,
                            'required': required,
                            'description': description}

                if name != 'key':
                    obj["apiInterface"][-1]["methods"][-1]["arguments"].append(argument)

print(obj)
