# Generated by Django 3.0.3 on 2020-07-14 06:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todos', '0003_todo_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todo',
            name='status',
            field=models.CharField(choices=[('pending', 'Pending'), ('completed', 'Completed')], default='pending', max_length=200),
        ),
    ]
