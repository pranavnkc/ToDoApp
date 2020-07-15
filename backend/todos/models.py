from django.db import models
from django.utils import timezone


class Todo(models.Model):
    PENDING = 'pending'
    COMPLETED = 'completed'
    STATUS_CHOICES = (
        (PENDING, 'Pending'),
        (COMPLETED, 'Completed')
    )
    name = models.CharField(max_length=200)
    level = models.SmallIntegerField()
    status = models.CharField(max_length=200, choices=STATUS_CHOICES, default=PENDING)
    created_on = models.DateTimeField(default=timezone.now)
    def __str__(self):
        return self.title
