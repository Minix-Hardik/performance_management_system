# Copyright (c) 2025, Hybrowlabs and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class Competency(Document):

    def after_insert(self):
        distribute_weightage()

    def on_update(self):
        distribute_weightage()


def distribute_weightage():
    competencies = frappe.get_all(
        "Competency",
        filters={"disabled": 0},
        fields=["name"]
    )

    count = len(competencies)
    if count == 0:
        return

    weightage = 100 / count

    for comp in competencies:
        frappe.db.set_value("Competency", comp.name, "weightage", weightage)

    frappe.db.commit()
