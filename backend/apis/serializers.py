from rest_framework import serializers
from todos import models


class TodoSerializer(serializers.ModelSerializer):
    
    class Meta:
        fields = (
            'id',
            'name',
            'level',
            'status',
            'created_on'
        )
        model = models.Todo

    def to_representation(self, obj):
        ret  = super(TodoSerializer, self).to_representation(obj)
        ret['created_on_fmt'] = obj.created_on.strftime('%m/%d/%Y %-I:%M %p')
        ret['created_on'] = obj.created_on.strftime('%Y-%m-%dT%I:%M')
        return ret
