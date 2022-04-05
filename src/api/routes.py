"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Favorites
from api.utils import generate_sitemap, APIException
from psycopg2.extras import Json
import json

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

@api.route('/login', methods=['POST'])
def handle_login():
    req = request.json
    user = User.query.filter_by(username=req['username']).first()
    if req['username'] == user.username:
        return user.serialize()
    return None

@api.route('/user/<int:user_id>')
def get_user(user_id):
    user = User.query.get(user_id)
    return user.serialize()

@api.route('/favorites/<int:user_id>', methods=['POST', 'GET'])
def handle_favorites(user_id):
    user = User.query.get(user_id)
    if request.method == 'POST':
        meal = request.json
        favorite = Favorites(meal=Json(meal), user_id=user_id)
        db.session.add(favorite)
        db.session.commit()
        return jsonify(user.serialize()["favorites"])
    if request.method == 'GET':
        return jsonify(user.serialize()["favorites"]) 

    return jsonify(response_body), 200

@api.route('/favorites/<int:user_id>', methods=['DELETE'])
def delete_favorite(user_id):
    user = User.query.get(user_id)
    fav_query = Favorites.query.filter_by(user_id=user_id)
    favorites = list(map(lambda fav: fav.serialize(),fav_query))
    req = request.json
    for i in range(len(favorites)):
        fav = json.loads(favorites[i]['meal'])
        if fav['id'] == req['id']:
            fav_query = Favorites.query.get(favorites[i]['id'])
            db.session.delete(fav_query)
            db.session.commit()
    return jsonify(user.serialize()['favorites'])
