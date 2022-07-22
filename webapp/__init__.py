from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import os
import json
from flask_cors import CORS

app = Flask(__name__)
path = os.path.dirname(__file__)
conf_path = '../express_api/config/config.json'
conf = json.load(open(os.path.join(path, conf_path)))
conf = conf['development']

db_uri = f'postgresql://{conf["username"]}:{conf["password"]}@{conf["host"]}:{conf["port"]}/{conf["database"]}'
print(db_uri)
app.config['SQLALCHEMY_DATABASE_URI'] = db_uri
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = '69d168e3888c8f9d157d3cc5'
CORS(app)


db = SQLAlchemy(app)

from webapp import views