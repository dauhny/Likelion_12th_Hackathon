from .models import Music
from datas.models import DataModel
from .serializers import MusicSerializer
from rest_framework.viewsets import ModelViewSet 

from rest_framework.permissions import IsAuthenticated
from .permissions import IsOwnerOrReadOnly  # 커스텀 권한 클래스 임포트

from rest_framework.exceptions import NotFound
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt

@method_decorator(csrf_exempt, name='dispatch')
class MusicViewSet(ModelViewSet): 
    queryset = Music.objects.all()
    serializer_class = MusicSerializer
    # 자신이 쓴 글만 수정/삭제할 수 있도록
    
    permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]

    def perform_create(self, serializer):
        exhibition_id = self.kwargs.get('exhibition_id')
        
        if not exhibition_id:
            raise NotFound('Exhibition ID not provided.')
        
        try:
            exhibition = DataModel.objects.get(pk=exhibition_id)
        except DataModel.DoesNotExist:
            raise NotFound('Data not found.')

        serializer.save(writer=self.request.user, data=exhibition)

    def get_queryset(self):
        exhibition_id = self.kwargs.get('exhibition_id')
        if exhibition_id:
            return self.queryset.filter(data=exhibition_id)
        return self.queryset
    
    # def perform_update(self, serializer):
    #     serializer.save(writer = self.request.user)

    # def perform_destroy(self, instance):
    #     instance.delete()
