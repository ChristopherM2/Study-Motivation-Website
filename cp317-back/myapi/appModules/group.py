from rest_framework.response import Response
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate("serviceAccountKey.json")
app = firebase_admin.initialize_app(cred)
db = firestore.client()

"""
-------------------------------------------------------
Create a group using HTTP request add user to group or remove user from group etc
Use: variable = methodname(params)
-------------------------------------------------------
Parameters:
    1- http request
Returns:
    http response
-------------------------------------------------------
"""


def newGroup(request):  # TODO implement
    return Response({'message': "Not implemented yet"}, status=501)


def addUserToGroup(request):  # TODO implement
    return Response({'message': "Not implemented yet"}, status=501)


def removeUserFromGroup(request):  # TODO implement
    return Response({'message': "Not implemented yet"}, status=501)


def getGroup(request):  # TODO implement
    return Response({'message': "Not implemented yet"}, status=501)
