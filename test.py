import json

array = '{"numbers": [1, 2, 3]}'
data = json.loads(array)
print(sum(data['numbers']))
