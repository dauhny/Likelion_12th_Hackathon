# Generated by Django 5.0.7 on 2024-07-15 18:13

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('datas', '0003_alter_datamodel_audience_alter_datamodel_author_and_more'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Scrap',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('data', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='datas.datamodel')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='scraps', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'unique_together': {('user', 'data')},
            },
        ),
    ]
