# Generated by Django 3.0.3 on 2020-07-14 09:43

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('todos', '0004_auto_20200714_0643'),
    ]

    operations = [
        migrations.AddField(
            model_name='todo',
            name='created_on',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
