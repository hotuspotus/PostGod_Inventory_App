from django.db import models
from django.contrib.auth.models import Group

MAX_CHAR = 50

class AuditStatus(models.Model):
    class Status(models.IntegerChoices):
        PASSED = 0
        FAILED = 1

    status = models.IntegerField(choices=Status.choices)
    comments = models.CharField(max_length=MAX_CHAR)
    datetime_audited =  models.DateTimeField(auto_now_add=False)

class Item(models.Model):
    inventory = models.ForeignKey(Group, on_delete=models.CASCADE)
    audit_status = models.ManyToManyField(AuditStatus, through='Audit')
    name = models.CharField(max_length=MAX_CHAR)
    description = models.CharField(max_length=MAX_CHAR)
    location = models.CharField(max_length=MAX_CHAR)
    quantity = models.IntegerField(null=False)
    unit_price = models.FloatField(null=False)
    depreciation_rate = models.FloatField(default=0.01)
    memo = models.CharField(max_length=MAX_CHAR)
    image_file = models.FileField(upload_to='uploads/', null=True)
    purchase_date = models.DateTimeField(auto_now_add=True)

class Audit(models.Model):
    department = models.CharField(max_length=MAX_CHAR)
    datetime_completed = models.DateTimeField(auto_now_add=True)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    audit_status = models.ForeignKey(AuditStatus, on_delete=models.CASCADE)



