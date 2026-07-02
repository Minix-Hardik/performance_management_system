app_name = "pms_system"
app_title = "Pms System"
app_publisher = "Hybrowlabs"
app_description = "none"
app_email = "alik@mail.hybrowlabs.com"
app_license = "mit"



fixtures = [
    {
        "doctype": "Custom Field",
        "filters": [
            ["dt", "in", ["KRA", "Goal", "Appraisal Cycle", "Appraisal"]]
        ]
    },
    {
        "doctype": "Custom HTML Block",
        "filters": [
            ["name", "in", ["Manager Dashboard Cards"]]
        ]
    },
    {
        "doctype": "Property Setter",
        "filters": [
            ["name", "in", ["KRA-main-allow_import","Appraisee-employee-ignore_user_permissions",
                            "Appraisal-goal_score_percentage-allow_on_submit", "Appraisal-total_score-allow_on_submit", "Appraisal-final_score-allow_on_submit"]]
        ]
    }
]

# Apps
# ------------------

# required_apps = []

# Each item in the list will be shown as an app in the apps page
# add_to_apps_screen = [
# 	{
# 		"name": "pms_system",
# 		"logo": "/assets/pms_system/logo.png",
# 		"title": "Pms System",
# 		"route": "/pms_system",
# 		"has_permission": "pms_system.api.permission.has_app_permission"
# 	}
# ]

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
app_include_js = ["/assets/pms_system/js/load-reactapp.bundle.js",
                    "/assets/pms_system/js/appraisal.js"
                ]
doctype_list_js = {
    # "Appraisal": "public/js/appraisal_list.js",
    "KRA": "public/js/kra_list.js"
}
app_include_css = ["/assets/pms_system/pms-ui/index.css"]

# include js, css files in header of web template
# web_include_css = "/assets/pms_system/css/pms_system.css"
# web_include_js = ["/assets/pms_system/js/load-reactapp.bundle.js"]

# include custom scss in every website theme (without file extension ".scss")
# website_theme_scss = "pms_system/public/scss/website"

# include js, css files in header of web form
# webform_include_js = {"doctype": "public/js/doctype.js"}
# webform_include_css = {"doctype": "public/css/doctype.css"}

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
# doctype_js = {"doctype" : "public/js/doctype.js"}
doctype_js = {
    "Appraisal Cycle": "public/js/appraisalCycle.js",
    "Goal": "public/js/goal.js",
    "KRA": "public/js/kra.js",
    "Appraisal": "public/js/appraisal.js",
    "Employee Performance Feedback": "public/js/employee_performance_feedback.js"
}
override_doctype_class = {
    "Appraisal Cycle": "pms_system.python.appraisal_cycle.CustomAppraisalCycle",
    "Employee Performance Feedback": "pms_system.overrides.feedback.CustomEmployeePerformanceFeedback"
}
permission_query_conditions = {
    "Appraisal List": "pms_system.api.get_appraisal_list_permission.get_permission_query_conditions",
    "User Jira Connection": "pms_system.pms_system.doctype.user_jira_connection.user_jira_connection.get_permission_query_conditions"
}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Svg Icons
# ------------------
# include app icons in desk
# app_include_icons = "pms_system/public/icons.svg"

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
# 	"Role": "home_page"
# }

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Jinja
# ----------

# add methods and filters to jinja environment
# jinja = {
# 	"methods": "pms_system.utils.jinja_methods",
# 	"filters": "pms_system.utils.jinja_filters"
# }

# Installation
# ------------

# before_install = "pms_system.install.before_install"
# after_install = "pms_system.install.after_install"

# Uninstallation
# ------------

# before_uninstall = "pms_system.uninstall.before_uninstall"
# after_uninstall = "pms_system.uninstall.after_uninstall"

# Integration Setup
# ------------------
# To set up dependencies/integrations with other apps
# Name of the app being installed is passed as an argument

# before_app_install = "pms_system.utils.before_app_install"
# after_app_install = "pms_system.utils.after_app_install"

# Integration Cleanup
# -------------------
# To clean up dependencies/integrations with other apps
# Name of the app being uninstalled is passed as an argument

# before_app_uninstall = "pms_system.utils.before_app_uninstall"
# after_app_uninstall = "pms_system.utils.after_app_uninstall"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "pms_system.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# DocType Class
# ---------------
# Override standard doctype classes

# override_doctype_class = {
# 	"ToDo": "custom_app.overrides.CustomToDo"
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
# 	"*": {
# 		"on_update": "method",
# 		"on_cancel": "method",
# 		"on_trash": "method"
# 	}
# }

# Scheduled Tasks
# ---------------
# scheduler_events = {
#     "cron": {
#         "*/2 * * * *": [
#             "pms_system.tasks.remider_mail_for_selfappraisal.send_self_appraisal_reminder"
#         ]
#     }
# }
scheduler_events = {
	# "all": [
	# 	"pms_system.tasks.all"
	# ],
	"daily": [
		"pms_system.tasks.remider_mail.send_self_appraisal_reminder",
        "pms_system.tasks.remider_mail.send_manager_review_reminder"
	],
	# "hourly": [
	# 	"pms_system.tasks.hourly"
	# ],
	# "weekly": [
	# 	"pms_system.tasks.weekly"
	# ],
	# "monthly": [
	# 	"pms_system.tasks.monthly"
	# ],
}

# Testing
# -------

# before_tests = "pms_system.install.before_tests"

# Overriding Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "pms_system.event.get_events"
# }
#
# each overriding function accepts a `data` argument;
# generated from the base implementation of the doctype dashboard,
# along with any modifications made in other Frappe apps
# override_doctype_dashboards = {
# 	"Task": "pms_system.task.get_dashboard_data"
# }

# exempt linked doctypes from being automatically cancelled
#
# auto_cancel_exempted_doctypes = ["Auto Repeat"]

# Ignore links to specified DocTypes when deleting documents
# -----------------------------------------------------------

# ignore_links_on_delete = ["Communication", "ToDo"]

# Request Events
# ----------------
# before_request = ["pms_system.utils.before_request"]
# after_request = ["pms_system.utils.after_request"]

# Job Events
# ----------
# before_job = ["pms_system.utils.before_job"]
# after_job = ["pms_system.utils.after_job"]

# User Data Protection
# --------------------

# user_data_fields = [
# 	{
# 		"doctype": "{doctype_1}",
# 		"filter_by": "{filter_by}",
# 		"redact_fields": ["{field_1}", "{field_2}"],
# 		"partial": 1,
# 	},
# 	{
# 		"doctype": "{doctype_2}",
# 		"filter_by": "{filter_by}",
# 		"partial": 1,
# 	},
# 	{
# 		"doctype": "{doctype_3}",
# 		"strict": False,
# 	},
# 	{
# 		"doctype": "{doctype_4}"
# 	}
# ]

# Authentication and authorization
# --------------------------------

# auth_hooks = [
# 	"pms_system.auth.validate"
# ]

# Automatically update python controller files with type annotations for this app.
# export_python_type_annotations = True

# default_log_clearing_doctypes = {
# 	"Logging DocType Name": 30  # days to retain logs
# }

