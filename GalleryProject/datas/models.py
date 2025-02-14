from django.db import models
from django.contrib.auth import get_user_model # 커스텀유저 모델 가져오기


# openApi 사용해서 데이터 불러오기
class DataModel(models.Model):
    title = models.CharField(max_length=200) # TITLE 제목
    description = models.CharField(max_length=10000, null=True) # DESCRIPTION 소개(설명)
    image = models.URLField(max_length=1000, null=True) # IAMGE_OBJECT 이미지주소
    pageUrl = models.URLField(max_length=1000, null=True) # URL 홈페이지 주소
    author = models.CharField(max_length=200, null=True) # AUTHOR 작가
    period = models.CharField(max_length=200, null=True) # PERIOD 기간
    time = models.CharField(max_length=200, null=True) # EVENT_PERIOD 관람시간
    place = models.CharField(max_length=200, null=True) # CNTC_INSTT_NM 장소
    contact = models.CharField(max_length=200, null=True) # CONTACT_POINT 전화번호
    audience = models.CharField(max_length=200, null=True) # AUDIENCE 전체관람

    class Meta:
        ordering = ['-period']

    # 기본 이미지 URL 설정
    DEFAULT_IMAGE_URL = 'http://127.0.0.1:8000/media/data_default.png'

    def save(self, *args, **kwargs):
        if not self.image:
            self.image = self.DEFAULT_IMAGE_URL
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title
    
    def scrap_count(self):
        return self.scrap_set.count()


# 전시 스크랩 기능
User = get_user_model()

class Scrap(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='scraps')
    data = models.ForeignKey(DataModel, on_delete=models.CASCADE)  # 데이터 모델과 연결
    created_at = models.DateTimeField(auto_now_add=True)
    is_scrapped = models.BooleanField(default=False)
    title = models.CharField(max_length=150, blank=True, editable=False) # TITLE 제목
    image = models.URLField(max_length=150, blank=True, editable=False) # IAMGE_OBJECT 이미지주소
    period = models.CharField(max_length=150, blank=True, editable=False) # PERIOD 기간
    place = models.CharField(max_length=150, blank=True, editable=False) # CNTC_INSTT_NM 장소

    class Meta:
        # 동일한 사용자가 동일한 데이터 중복으로 스크랩하지 못하게 함
        unique_together = ['user', 'data'] 
        ordering = ['-created_at']

    def toggle_scrap(self):
        self.is_scrapped = not self.is_scrapped
        self.save()

    def save(self, *args, **kwargs):
        # 데이터 모델에서 정보를 가져와 설정
        if not self.title:
            self.title = self.data.title
        if not self.image:
            self.image = self.data.image
        if not self.period:
            self.period = self.data.period
        if not self.place:
            self.place = self.data.place

        super().save(*args, **kwargs)

    

# 댓글 
class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='comments',  default="")
    username = models.CharField(max_length=150, blank=True, editable=False)
    profile = models.URLField(max_length=200, blank=True, editable=False) 
    comment = models.CharField(verbose_name="댓글", max_length=128)
    data = models.ForeignKey(DataModel, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    nickname = models.CharField(max_length=150, blank=True, editable=False)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.comment
    
    def save(self, *args, **kwargs):
        if not self.username:
            self.username = self.user.username  # 유저네임을 자동으로 설정
        if not self.nickname and self.user:
            self.nickname = self.user.nickname
        if not self.profile and hasattr(self.user, 'profile'):
            self.profile = self.user.profile.url 
        super().save(*args, **kwargs)


# 별점
class Rating(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    item = models.ForeignKey(DataModel, related_name='ratings', on_delete=models.CASCADE)
    score = models.FloatField(default=0.0)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('user', 'item')