import json
import requests
import numpy as np
import pandas as pd

import requests
from requests.auth import HTTPBasicAuth

from pprint import pprint as pp

credentials = json.loads(open('credentials.json').read())
auth = HTTPBasicAuth(credentials['username'], credentials['password'])

data = requests.get('https://api.github.com/users/' + credentials['username'], auth = auth)
data = data.json() # basic top level user info

print("Information about user {}:\n".format(credentials['username']))
print("Name: {}".format(data['name']))
print("Email: {}".format(data['email']))
print("Location: {}".format(data['location']))
print("Public repos: {}".format(data['public_repos']))
print("About: {}".format(data['bio']))
