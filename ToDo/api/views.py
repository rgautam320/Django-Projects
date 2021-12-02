from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import TaskSerializer

from rest_framework.generics import CreateAPIView

from .models import Task

# Create your views here.


class TaskView(CreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer


# @api_view(['GET'])
# def apiOverview(request):

#     api_urls = {
#         'List': '/task-list/',
#         'Detail View': '/task-detail/<str:pk>/',
#         'Create': '/task-create/',
#         'Update': '/task-update/<str:pk>',
#         'Delete': '/task-delete/<str:pk>',
#     }

#     return Response(api_urls)


@api_view(['GET'])
def TaskList(request):
    tasks = Task.objects.all()
    serializer = TaskSerializer(tasks, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def TaskDetail(request, pk):
    tasks = Task.objects.get(id=pk)
    serializer = TaskSerializer(tasks, many=False)
    return Response(serializer.data)


@api_view(['POST'])
def TaskCreate(request):
    serializer = TaskSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


@api_view(['POST'])
def TaskUpdate(request, pk):
    tasks = Task.objects.get(id=pk)
    serializer = TaskSerializer(instance=tasks, data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


@api_view(['DELETE'])
def TaskDelete(request, pk):
    tasks = Task.objects.get(id=pk)
    tasks.delete()

    return Response("Item deleted successfully!")
