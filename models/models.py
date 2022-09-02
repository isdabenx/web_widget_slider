from odoo import models, fields


class ResPartner(models.Model):
    _inherit = 'res.partner'

    test_slider = fields.Integer('Test Slider')
