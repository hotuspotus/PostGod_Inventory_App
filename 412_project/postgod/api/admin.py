from django.contrib import admin
from api.models import Item, Audit, AuditStatus

admin.site.register([Item, Audit, AuditStatus])