import traceback

from rest_framework.response import *
import firebase_admin
from firebase_admin import *
import firebase
from google.cloud import firestore


class friend:
    def __init__(self) -> None:
        pass

    """
    -------------------------------------------------------
    Add or remove friends using HTTP POST OR DELETE respectively
    -------------------------------------------------------
    Parameters:
        1- Http request 
    Returns:
        Http response with a message and status code (200 OK or 418 I'm a teapot (error) or 405 Method Not Allowed)
    -------------------------------------------------------
    """

    def friends(self, request, app):  # TODO implement
        db = firestore.Client(app)
        if request.method == 'POST':
            try:
                user_id = request.data['token']
                friend_id = request.data['friend_id']
                db.collection('accountInfo').document(user_id).update({'friends': firestore.ArrayUnion([friend_id])})
                db.collection('accountInfo').document(friend_id).update({'friends': firestore.ArrayUnion([user_id])})
                return Response({'message': 'Friend added'}, status=200)
            except Exception as e:
                return Response({'message': str(e)}, status=500)
        elif request.method == 'DELETE':
            try:
                user_id = request.data['token']
                friend_id = request.data['friend_id']
                db.collection('accountInfo').document(user_id).update({'friends': firestore.ArrayRemove([friend_id])})
                db.collection('accountInfo').document(friend_id).update({'friends': firestore.ArrayRemove([user_id])})
                return Response({'message': 'Friend removed'}, status=200)
            except Exception as e:
                return Response({'message': str(e)}, status=500)
        else:
            return Response({'message': 'Method not allowed'}, status=405)

