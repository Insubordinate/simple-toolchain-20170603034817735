# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('funddoapp', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='first_name',
            field=models.CharField(default=1, max_length=50, verbose_name=b'First Name'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='userprofile',
            name='last_name',
            field=models.CharField(default=1, max_length=50, verbose_name=b'Last Name'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='your_location',
            field=models.IntegerField(default=1, choices=[(1, b'Brooklyn'), (2, b'Queens'), (3, b'Manhattan'), (4, b'The Bronx'), (5, b'Staten Island')]),
        ),
    ]
