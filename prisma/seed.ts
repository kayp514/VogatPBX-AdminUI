import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed(): Promise<void> {
  try {
    // Seeding django_content_type
    await prisma.django_content_type.createMany({
      data: [
  {
    "id": 30,
    "app_label": "musiconhold",
    "model": "musiconhold",
    "main_label": "Music on Hold"
  },
  {
    "id": 31,
    "app_label": "musiconhold",
    "model": "mohfile",
    "main_label": "Music on Hold"
  },
  {
    "id": 84,
    "app_label": "callflows",
    "model": "callflows",
    "main_label": "Call"
  },
  {
    "id": 85,
    "app_label": "callblock",
    "model": "callblock",
    "main_label": "Call"
  },
  {
    "id": 82,
    "app_label": "ivrmenus",
    "model": "ivrmenus",
    "main_label": "IVR Menu"
  },
  {
    "id": 83,
    "app_label": "ivrmenus",
    "model": "ivrmenuoptions",
    "main_label": "IVR Menu"
  },
  {
    "id": 90,
    "app_label": "autoreports",
    "model": "autoreports",
    "main_label": "Auto Reports"
  },
  {
    "id": 91,
    "app_label": "autoreports",
    "model": "autoreportsections",
    "main_label": "Auto Reports"
  },
  {
    "id": 5,
    "app_label": "contenttypes",
    "model": "contenttype",
    "main_label": "Content Type"
  },
  {
    "id": 6,
    "app_label": "sessions",
    "model": "session",
    "main_label": "Sessions"
  },
  {
    "id": 7,
    "app_label": "authtoken",
    "model": "token",
    "main_label": "Token"
  },
  {
    "id": 8,
    "app_label": "authtoken",
    "model": "tokenproxy",
    "main_label": "Token"
  },
  {
    "id": 60,
    "app_label": "provision",
    "model": "devicesettings",
    "main_label": "Devices"
  },
  {
    "id": 61,
    "app_label": "provision",
    "model": "deviceprofilesettings",
    "main_label": "Devices"
  },
  {
    "id": 39,
    "app_label": "httapihandler",
    "model": "httapisession",
    "main_label": "HTTP"
  },
  {
    "id": 78,
    "app_label": "phrases",
    "model": "phrases",
    "main_label": "Phrases"
  },
  {
    "id": 79,
    "app_label": "phrases",
    "model": "phrasedetails",
    "main_label": "Phrases"
  },
  {
    "id": 80,
    "app_label": "numbertranslations",
    "model": "numbertranslations",
    "main_label": "Translations"
  },
  {
    "id": 81,
    "app_label": "numbertranslations",
    "model": "numbertranslationdetails",
    "main_label": "Translations"
  },
  {
    "id": 47,
    "app_label": "conferencesettings",
    "model": "conferencecontrols",
    "main_label": "Conference Controls"
  },
  {
    "id": 48,
    "app_label": "conferencesettings",
    "model": "conferenceprofiles",
    "main_label": "Conference Profile"
  },
  {
    "id": 49,
    "app_label": "conferencesettings",
    "model": "conferenceprofileparams",
    "main_label": "Conference Profile"
  },
  {
    "id": 50,
    "app_label": "conferencesettings",
    "model": "conferencecontroldetails",
    "main_label": "Conference Controls"
  },
  {
    "id": 51,
    "app_label": "conferencesettings",
    "model": "conferencecentres",
    "main_label": "Conference Center"
  },
  {
    "id": 54,
    "app_label": "conferencesettings",
    "model": "conferencesessions",
    "main_label": "Conference Center"
  },
  {
    "id": 22,
    "app_label": "switch",
    "model": "accesscontrol",
    "main_label": "Access Controls"
  },
  {
    "id": 23,
    "app_label": "switch",
    "model": "accesscontrolnode",
    "main_label": "Access Controls"
  },
  {
    "id": 86,
    "app_label": "callcentres",
    "model": "callcentreagents",
    "main_label": "Call Center"
  },
  {
    "id": 87,
    "app_label": "callcentres",
    "model": "callcentrequeues",
    "main_label": "Call Center"
  },
  {
    "id": 88,
    "app_label": "callcentres",
    "model": "callcentretiers",
    "main_label": "Call Center"
  },
  {
    "id": 89,
    "app_label": "callcentres",
    "model": "callcentreagentstatuslog",
    "main_label": "Call Center"
  },
  {
    "id": 45,
    "app_label": "xmlcdr",
    "model": "xmlcdr",
    "main_label": "XML CDR"
  },
  {
    "id": 46,
    "app_label": "xmlcdr",
    "model": "calltimeline",
    "main_label": "XML CDR"
  },
  {
    "id": 55,
    "app_label": "provision",
    "model": "deviceprofiles",
    "main_label": "Devices"
  },
  {
    "id": 56,
    "app_label": "provision",
    "model": "devices",
    "main_label": "Devices"
  },
  {
    "id": 57,
    "app_label": "provision",
    "model": "devicevendors",
    "main_label": "Devices"
  },
  {
    "id": 58,
    "app_label": "provision",
    "model": "devicevendorfunctions",
    "main_label": "Devices"
  },
  {
    "id": 59,
    "app_label": "provision",
    "model": "devicevendorfunctiongroups",
    "main_label": "Devices"
  },
  {
    "id": 62,
    "app_label": "provision",
    "model": "deviceprofilekeys",
    "main_label": "Devices"
  },
  {
    "id": 63,
    "app_label": "provision",
    "model": "devicelines",
    "main_label": "Devices"
  },
  {
    "id": 64,
    "app_label": "provision",
    "model": "devicekeys",
    "main_label": "Devices"
  },
  {
    "id": 9,
    "app_label": "portal",
    "model": "menu",
    "main_label": "Menu"
  },
  {
    "id": 10,
    "app_label": "portal",
    "model": "menuitem",
    "main_label": "Menu"
  },
  {
    "id": 11,
    "app_label": "portal",
    "model": "menuitemgroup",
    "main_label": "Menu"
  },
  {
    "id": 12,
    "app_label": "portal",
    "model": "failed_logins",
    "main_label": "Menu"
  },
  {
    "id": 52,
    "app_label": "conferencesettings",
    "model": "conferencerooms",
    "main_label": "Conferences"
  },
  {
    "id": 53,
    "app_label": "conferencesettings",
    "model": "conferenceroomuser",
    "main_label": "Conferences"
  },
  {
    "id": 1,
    "app_label": "admin",
    "model": "logentry",
    "main_label": "Logs"
  },
  {
    "id": 65,
    "app_label": "contacts",
    "model": "contact",
    "main_label": "Contacts"
  },
  {
    "id": 66,
    "app_label": "contacts",
    "model": "contacturl",
    "main_label": "Contacts"
  },
  {
    "id": 67,
    "app_label": "contacts",
    "model": "contacttel",
    "main_label": "Contacts"
  },
  {
    "id": 68,
    "app_label": "contacts",
    "model": "contactorg",
    "main_label": "Contacts"
  },
  {
    "id": 69,
    "app_label": "contacts",
    "model": "contactgeo",
    "main_label": "Contacts"
  },
  {
    "id": 70,
    "app_label": "contacts",
    "model": "contactemail",
    "main_label": "Contacts"
  },
  {
    "id": 71,
    "app_label": "contacts",
    "model": "contactdate",
    "main_label": "Contacts"
  },
  {
    "id": 72,
    "app_label": "contacts",
    "model": "contactcategory",
    "main_label": "Contacts"
  },
  {
    "id": 73,
    "app_label": "contacts",
    "model": "contactaddress",
    "main_label": "Contacts"
  },
  {
    "id": 74,
    "app_label": "contacts",
    "model": "contactgroup",
    "main_label": "Contacts"
  },
  {
    "id": 2,
    "app_label": "auth",
    "model": "permission",
    "main_label": "Auth"
  },
  {
    "id": 75,
    "app_label": "ringgroups",
    "model": "ringgroup",
    "main_label": "Ring Groups"
  },
  {
    "id": 76,
    "app_label": "ringgroups",
    "model": "ringgroupuser",
    "main_label": "Ring Groups"
  },
  {
    "id": 77,
    "app_label": "ringgroups",
    "model": "ringgroupdestination",
    "main_label": "Ring Groups"
  },
  {
    "id": 41,
    "app_label": "voicemail",
    "model": "voicemailgreeting",
    "main_label": "Voicemail"
  },
  {
    "id": 42,
    "app_label": "voicemail",
    "model": "voicemaildestinations",
    "main_label": "Voicemail"
  },
  {
    "id": 13,
    "app_label": "tenants",
    "model": "defaultsetting",
    "main_label": "Tenants"
  },
  {
    "id": 14,
    "app_label": "tenants",
    "model": "domain",
    "main_label": "Tenants"
  },
  {
    "id": 15,
    "app_label": "tenants",
    "model": "profile",
    "main_label": "Tenants"
  },
  {
    "id": 16,
    "app_label": "tenants",
    "model": "profilesetting",
    "main_label": "Tenants"
  },
  {
    "id": 17,
    "app_label": "tenants",
    "model": "domainsetting",
    "main_label": "Tenants"
  },
  {
    "id": 18,
    "app_label": "switch",
    "model": "sipprofile",
    "main_label": "Switch"
  },
  {
    "id": 19,
    "app_label": "switch",
    "model": "switchvariable",
    "main_label": "Switch"
  },
  {
    "id": 20,
    "app_label": "switch",
    "model": "sipprofilesetting",
    "main_label": "Switch"
  },
  {
    "id": 21,
    "app_label": "switch",
    "model": "sipprofiledomain",
    "main_label": "Switch"
  },
  {
    "id": 24,
    "app_label": "switch",
    "model": "emailtemplate",
    "main_label": "Switch"
  },
  {
    "id": 25,
    "app_label": "switch",
    "model": "modules",
    "main_label": "Switch"
  },
  {
    "id": 26,
    "app_label": "switch",
    "model": "ipregister",
    "main_label": "Switch"
  },
  {
    "id": 34,
    "app_label": "accounts",
    "model": "extension",
    "main_label": "Accounts"
  },
  {
    "id": 35,
    "app_label": "accounts",
    "model": "gateway",
    "main_label": "Accounts"
  },
  {
    "id": 36,
    "app_label": "accounts",
    "model": "extensionuser",
    "main_label": "Accounts"
  },
  {
    "id": 37,
    "app_label": "accounts",
    "model": "followmedestination",
    "main_label": "Accounts"
  },
  {
    "id": 38,
    "app_label": "accounts",
    "model": "bridge",
    "main_label": "Accounts"
  },
  {
    "id": 3,
    "app_label": "auth",
    "model": "group",
    "main_label": "Auth"
  },
  {
    "id": 4,
    "app_label": "auth",
    "model": "user",
    "main_label": "Auth"
  },
  {
    "id": 27,
    "app_label": "dialplans",
    "model": "dialplan",
    "main_label": "Dialplans"
  },
  {
    "id": 28,
    "app_label": "dialplans",
    "model": "dialplandetail",
    "main_label": "Dialplans"
  },
  {
    "id": 29,
    "app_label": "dialplans",
    "model": "dialplanexcludes",
    "main_label": "Dialplans"
  },
  {
    "id": 32,
    "app_label": "recordings",
    "model": "recording",
    "main_label": "Recondings"
  },
  {
    "id": 33,
    "app_label": "recordings",
    "model": "callrecording",
    "main_label": "Recondings"
  },
  {
    "id": 40,
    "app_label": "voicemail",
    "model": "voicemail",
    "main_label": "Voicemail"
  },
  {
    "id": 43,
    "app_label": "voicemail",
    "model": "voicemailmessages",
    "main_label": "Voicemail"
  },
  {
    "id": 44,
    "app_label": "voicemail",
    "model": "voicemailoptions",
    "main_label": "Voicemail"
  }
],
      skipDuplicates: true,
    });

    // Seeding auth_group
    await prisma.auth_group.createMany({
      data: [
  {
    "id": 1,
    "name": "contact_view"
  },
  {
    "id": 2,
    "name": "admin"
  },
  {
    "id": 3,
    "name": "agent"
  },
  {
    "id": 4,
    "name": "user_api"
  },
  {
    "id": 5,
    "name": "call_block"
  },
  {
    "id": 6,
    "name": "call_flow"
  },
  {
    "id": 7,
    "name": "call_rec_dl"
  },
  {
    "id": 8,
    "name": "conference"
  },
  {
    "id": 9,
    "name": "contact_edit"
  },
  {
    "id": 10,
    "name": "device_profile"
  },
  {
    "id": 11,
    "name": "ext_adm"
  },
  {
    "id": 12,
    "name": "minor_admin"
  },
  {
    "id": 13,
    "name": "mobile_prov"
  },
  {
    "id": 14,
    "name": "op_panel"
  },
  {
    "id": 15,
    "name": "op_panel_admin"
  },
  {
    "id": 16,
    "name": "ringgroup_adm"
  },
  {
    "id": 17,
    "name": "ringgroup_fwd"
  },
  {
    "id": 18,
    "name": "time_cond_adm"
  },
  {
    "id": 19,
    "name": "user_recordings"
  },
  {
    "id": 20,
    "name": "wallboard"
  },
  {
    "id": 21,
    "name": "public"
  },
  {
    "id": 22,
    "name": "superadmin"
  },
  {
    "id": 23,
    "name": "user"
  },
  {
    "id": 24,
    "name": "admin_api"
  },
  {
    "id": 25,
    "name": "minor_admin_api"
  },
  {
    "id": 26,
    "name": "call_routing"
  },
  {
    "id": 27,
    "name": "call_centre_view"
  }
],
      skipDuplicates: true,
    });

    // Seeding auth_permission
    await prisma.auth_permission.createMany({
      data: [
  {
    "id": 1,
    "name": "Can add log entry",
    "content_type_id": 1,
    "codename": "add_logentry"
  },
  {
    "id": 2,
    "name": "Can change log entry",
    "content_type_id": 1,
    "codename": "change_logentry"
  },
  {
    "id": 3,
    "name": "Can delete log entry",
    "content_type_id": 1,
    "codename": "delete_logentry"
  },
  {
    "id": 4,
    "name": "Can view log entry",
    "content_type_id": 1,
    "codename": "view_logentry"
  },
  {
    "id": 5,
    "name": "Can add permission",
    "content_type_id": 2,
    "codename": "add_permission"
  },
  {
    "id": 6,
    "name": "Can change permission",
    "content_type_id": 2,
    "codename": "change_permission"
  },
  {
    "id": 7,
    "name": "Can delete permission",
    "content_type_id": 2,
    "codename": "delete_permission"
  },
  {
    "id": 8,
    "name": "Can view permission",
    "content_type_id": 2,
    "codename": "view_permission"
  },
  {
    "id": 9,
    "name": "Can add group",
    "content_type_id": 3,
    "codename": "add_group"
  },
  {
    "id": 10,
    "name": "Can change group",
    "content_type_id": 3,
    "codename": "change_group"
  },
  {
    "id": 11,
    "name": "Can delete group",
    "content_type_id": 3,
    "codename": "delete_group"
  },
  {
    "id": 12,
    "name": "Can view group",
    "content_type_id": 3,
    "codename": "view_group"
  },
  {
    "id": 13,
    "name": "Can add user",
    "content_type_id": 4,
    "codename": "add_user"
  },
  {
    "id": 14,
    "name": "Can change user",
    "content_type_id": 4,
    "codename": "change_user"
  },
  {
    "id": 15,
    "name": "Can delete user",
    "content_type_id": 4,
    "codename": "delete_user"
  },
  {
    "id": 16,
    "name": "Can view user",
    "content_type_id": 4,
    "codename": "view_user"
  },
  {
    "id": 17,
    "name": "Can add content type",
    "content_type_id": 5,
    "codename": "add_contenttype"
  },
  {
    "id": 18,
    "name": "Can change content type",
    "content_type_id": 5,
    "codename": "change_contenttype"
  },
  {
    "id": 19,
    "name": "Can delete content type",
    "content_type_id": 5,
    "codename": "delete_contenttype"
  },
  {
    "id": 20,
    "name": "Can view content type",
    "content_type_id": 5,
    "codename": "view_contenttype"
  },
  {
    "id": 21,
    "name": "Can add session",
    "content_type_id": 6,
    "codename": "add_session"
  },
  {
    "id": 22,
    "name": "Can change session",
    "content_type_id": 6,
    "codename": "change_session"
  },
  {
    "id": 23,
    "name": "Can delete session",
    "content_type_id": 6,
    "codename": "delete_session"
  },
  {
    "id": 24,
    "name": "Can view session",
    "content_type_id": 6,
    "codename": "view_session"
  },
  {
    "id": 25,
    "name": "Can add Token",
    "content_type_id": 7,
    "codename": "add_token"
  },
  {
    "id": 26,
    "name": "Can change Token",
    "content_type_id": 7,
    "codename": "change_token"
  },
  {
    "id": 27,
    "name": "Can delete Token",
    "content_type_id": 7,
    "codename": "delete_token"
  },
  {
    "id": 28,
    "name": "Can view Token",
    "content_type_id": 7,
    "codename": "view_token"
  },
  {
    "id": 29,
    "name": "Can add token",
    "content_type_id": 8,
    "codename": "add_tokenproxy"
  },
  {
    "id": 30,
    "name": "Can change token",
    "content_type_id": 8,
    "codename": "change_tokenproxy"
  },
  {
    "id": 31,
    "name": "Can delete token",
    "content_type_id": 8,
    "codename": "delete_tokenproxy"
  },
  {
    "id": 32,
    "name": "Can view token",
    "content_type_id": 8,
    "codename": "view_tokenproxy"
  },
  {
    "id": 33,
    "name": "Can add menu",
    "content_type_id": 9,
    "codename": "add_menu"
  },
  {
    "id": 34,
    "name": "Can change menu",
    "content_type_id": 9,
    "codename": "change_menu"
  },
  {
    "id": 35,
    "name": "Can delete menu",
    "content_type_id": 9,
    "codename": "delete_menu"
  },
  {
    "id": 36,
    "name": "Can view menu",
    "content_type_id": 9,
    "codename": "view_menu"
  },
  {
    "id": 37,
    "name": "Can add menu item",
    "content_type_id": 10,
    "codename": "add_menuitem"
  },
  {
    "id": 38,
    "name": "Can change menu item",
    "content_type_id": 10,
    "codename": "change_menuitem"
  },
  {
    "id": 39,
    "name": "Can delete menu item",
    "content_type_id": 10,
    "codename": "delete_menuitem"
  },
  {
    "id": 40,
    "name": "Can view menu item",
    "content_type_id": 10,
    "codename": "view_menuitem"
  },
  {
    "id": 41,
    "name": "Can add menu item group",
    "content_type_id": 11,
    "codename": "add_menuitemgroup"
  },
  {
    "id": 42,
    "name": "Can change menu item group",
    "content_type_id": 11,
    "codename": "change_menuitemgroup"
  },
  {
    "id": 43,
    "name": "Can delete menu item group",
    "content_type_id": 11,
    "codename": "delete_menuitemgroup"
  },
  {
    "id": 44,
    "name": "Can view menu item group",
    "content_type_id": 11,
    "codename": "view_menuitemgroup"
  },
  {
    "id": 45,
    "name": "Can add failed_logins",
    "content_type_id": 12,
    "codename": "add_failed_logins"
  },
  {
    "id": 46,
    "name": "Can change failed_logins",
    "content_type_id": 12,
    "codename": "change_failed_logins"
  },
  {
    "id": 47,
    "name": "Can delete failed_logins",
    "content_type_id": 12,
    "codename": "delete_failed_logins"
  },
  {
    "id": 48,
    "name": "Can view failed_logins",
    "content_type_id": 12,
    "codename": "view_failed_logins"
  },
  {
    "id": 49,
    "name": "Can add default setting",
    "content_type_id": 13,
    "codename": "add_defaultsetting"
  },
  {
    "id": 50,
    "name": "Can change default setting",
    "content_type_id": 13,
    "codename": "change_defaultsetting"
  },
  {
    "id": 51,
    "name": "Can delete default setting",
    "content_type_id": 13,
    "codename": "delete_defaultsetting"
  },
  {
    "id": 52,
    "name": "Can view default setting",
    "content_type_id": 13,
    "codename": "view_defaultsetting"
  },
  {
    "id": 53,
    "name": "Can add domain",
    "content_type_id": 14,
    "codename": "add_domain"
  },
  {
    "id": 54,
    "name": "Can change domain",
    "content_type_id": 14,
    "codename": "change_domain"
  },
  {
    "id": 55,
    "name": "Can delete domain",
    "content_type_id": 14,
    "codename": "delete_domain"
  },
  {
    "id": 56,
    "name": "Can view domain",
    "content_type_id": 14,
    "codename": "view_domain"
  },
  {
    "id": 57,
    "name": "can_select_domain",
    "content_type_id": 14,
    "codename": "can_select_domain"
  },
  {
    "id": 58,
    "name": "Can add profile",
    "content_type_id": 15,
    "codename": "add_profile"
  },
  {
    "id": 59,
    "name": "Can change profile",
    "content_type_id": 15,
    "codename": "change_profile"
  },
  {
    "id": 60,
    "name": "Can delete profile",
    "content_type_id": 15,
    "codename": "delete_profile"
  },
  {
    "id": 61,
    "name": "Can view profile",
    "content_type_id": 15,
    "codename": "view_profile"
  },
  {
    "id": 62,
    "name": "Can add profile setting",
    "content_type_id": 16,
    "codename": "add_profilesetting"
  },
  {
    "id": 63,
    "name": "Can change profile setting",
    "content_type_id": 16,
    "codename": "change_profilesetting"
  },
  {
    "id": 64,
    "name": "Can delete profile setting",
    "content_type_id": 16,
    "codename": "delete_profilesetting"
  },
  {
    "id": 65,
    "name": "Can view profile setting",
    "content_type_id": 16,
    "codename": "view_profilesetting"
  },
  {
    "id": 66,
    "name": "Can add domain setting",
    "content_type_id": 17,
    "codename": "add_domainsetting"
  },
  {
    "id": 67,
    "name": "Can change domain setting",
    "content_type_id": 17,
    "codename": "change_domainsetting"
  },
  {
    "id": 68,
    "name": "Can delete domain setting",
    "content_type_id": 17,
    "codename": "delete_domainsetting"
  },
  {
    "id": 69,
    "name": "Can view domain setting",
    "content_type_id": 17,
    "codename": "view_domainsetting"
  },
  {
    "id": 70,
    "name": "Can add sip profile",
    "content_type_id": 18,
    "codename": "add_sipprofile"
  },
  {
    "id": 71,
    "name": "Can change sip profile",
    "content_type_id": 18,
    "codename": "change_sipprofile"
  },
  {
    "id": 72,
    "name": "Can delete sip profile",
    "content_type_id": 18,
    "codename": "delete_sipprofile"
  },
  {
    "id": 73,
    "name": "Can view sip profile",
    "content_type_id": 18,
    "codename": "view_sipprofile"
  },
  {
    "id": 74,
    "name": "Can add switch variable",
    "content_type_id": 19,
    "codename": "add_switchvariable"
  },
  {
    "id": 75,
    "name": "Can change switch variable",
    "content_type_id": 19,
    "codename": "change_switchvariable"
  },
  {
    "id": 76,
    "name": "Can delete switch variable",
    "content_type_id": 19,
    "codename": "delete_switchvariable"
  },
  {
    "id": 77,
    "name": "Can view switch variable",
    "content_type_id": 19,
    "codename": "view_switchvariable"
  },
  {
    "id": 78,
    "name": "Can add sip profile setting",
    "content_type_id": 20,
    "codename": "add_sipprofilesetting"
  },
  {
    "id": 79,
    "name": "Can change sip profile setting",
    "content_type_id": 20,
    "codename": "change_sipprofilesetting"
  },
  {
    "id": 80,
    "name": "Can delete sip profile setting",
    "content_type_id": 20,
    "codename": "delete_sipprofilesetting"
  },
  {
    "id": 81,
    "name": "Can view sip profile setting",
    "content_type_id": 20,
    "codename": "view_sipprofilesetting"
  },
  {
    "id": 82,
    "name": "Can add sip profile domain",
    "content_type_id": 21,
    "codename": "add_sipprofiledomain"
  },
  {
    "id": 83,
    "name": "Can change sip profile domain",
    "content_type_id": 21,
    "codename": "change_sipprofiledomain"
  },
  {
    "id": 84,
    "name": "Can delete sip profile domain",
    "content_type_id": 21,
    "codename": "delete_sipprofiledomain"
  },
  {
    "id": 85,
    "name": "Can view sip profile domain",
    "content_type_id": 21,
    "codename": "view_sipprofiledomain"
  },
  {
    "id": 86,
    "name": "Can add access control",
    "content_type_id": 22,
    "codename": "add_accesscontrol"
  },
  {
    "id": 87,
    "name": "Can change access control",
    "content_type_id": 22,
    "codename": "change_accesscontrol"
  },
  {
    "id": 88,
    "name": "Can delete access control",
    "content_type_id": 22,
    "codename": "delete_accesscontrol"
  },
  {
    "id": 89,
    "name": "Can view access control",
    "content_type_id": 22,
    "codename": "view_accesscontrol"
  },
  {
    "id": 90,
    "name": "Can add access control node",
    "content_type_id": 23,
    "codename": "add_accesscontrolnode"
  },
  {
    "id": 91,
    "name": "Can change access control node",
    "content_type_id": 23,
    "codename": "change_accesscontrolnode"
  },
  {
    "id": 92,
    "name": "Can delete access control node",
    "content_type_id": 23,
    "codename": "delete_accesscontrolnode"
  },
  {
    "id": 93,
    "name": "Can view access control node",
    "content_type_id": 23,
    "codename": "view_accesscontrolnode"
  },
  {
    "id": 94,
    "name": "Can add email template",
    "content_type_id": 24,
    "codename": "add_emailtemplate"
  },
  {
    "id": 95,
    "name": "Can change email template",
    "content_type_id": 24,
    "codename": "change_emailtemplate"
  },
  {
    "id": 96,
    "name": "Can delete email template",
    "content_type_id": 24,
    "codename": "delete_emailtemplate"
  },
  {
    "id": 97,
    "name": "Can view email template",
    "content_type_id": 24,
    "codename": "view_emailtemplate"
  },
  {
    "id": 98,
    "name": "Can add modules",
    "content_type_id": 25,
    "codename": "add_modules"
  },
  {
    "id": 99,
    "name": "Can change modules",
    "content_type_id": 25,
    "codename": "change_modules"
  },
  {
    "id": 100,
    "name": "Can delete modules",
    "content_type_id": 25,
    "codename": "delete_modules"
  },
  {
    "id": 101,
    "name": "Can view modules",
    "content_type_id": 25,
    "codename": "view_modules"
  },
  {
    "id": 102,
    "name": "Can add ip register",
    "content_type_id": 26,
    "codename": "add_ipregister"
  },
  {
    "id": 103,
    "name": "Can change ip register",
    "content_type_id": 26,
    "codename": "change_ipregister"
  },
  {
    "id": 104,
    "name": "Can delete ip register",
    "content_type_id": 26,
    "codename": "delete_ipregister"
  },
  {
    "id": 105,
    "name": "Can view ip register",
    "content_type_id": 26,
    "codename": "view_ipregister"
  },
  {
    "id": 106,
    "name": "Can add dialplan",
    "content_type_id": 27,
    "codename": "add_dialplan"
  },
  {
    "id": 107,
    "name": "Can change dialplan",
    "content_type_id": 27,
    "codename": "change_dialplan"
  },
  {
    "id": 108,
    "name": "Can delete dialplan",
    "content_type_id": 27,
    "codename": "delete_dialplan"
  },
  {
    "id": 109,
    "name": "Can view dialplan",
    "content_type_id": 27,
    "codename": "view_dialplan"
  },
  {
    "id": 110,
    "name": "Can add dialplan detail",
    "content_type_id": 28,
    "codename": "add_dialplandetail"
  },
  {
    "id": 111,
    "name": "Can change dialplan detail",
    "content_type_id": 28,
    "codename": "change_dialplandetail"
  },
  {
    "id": 112,
    "name": "Can delete dialplan detail",
    "content_type_id": 28,
    "codename": "delete_dialplandetail"
  },
  {
    "id": 113,
    "name": "Can view dialplan detail",
    "content_type_id": 28,
    "codename": "view_dialplandetail"
  },
  {
    "id": 114,
    "name": "Can add dialplan excludes",
    "content_type_id": 29,
    "codename": "add_dialplanexcludes"
  },
  {
    "id": 115,
    "name": "Can change dialplan excludes",
    "content_type_id": 29,
    "codename": "change_dialplanexcludes"
  },
  {
    "id": 116,
    "name": "Can delete dialplan excludes",
    "content_type_id": 29,
    "codename": "delete_dialplanexcludes"
  },
  {
    "id": 117,
    "name": "Can view dialplan excludes",
    "content_type_id": 29,
    "codename": "view_dialplanexcludes"
  },
  {
    "id": 118,
    "name": "Can add music on hold",
    "content_type_id": 30,
    "codename": "add_musiconhold"
  },
  {
    "id": 119,
    "name": "Can change music on hold",
    "content_type_id": 30,
    "codename": "change_musiconhold"
  },
  {
    "id": 120,
    "name": "Can delete music on hold",
    "content_type_id": 30,
    "codename": "delete_musiconhold"
  },
  {
    "id": 121,
    "name": "Can view music on hold",
    "content_type_id": 30,
    "codename": "view_musiconhold"
  },
  {
    "id": 122,
    "name": "Can add moh file",
    "content_type_id": 31,
    "codename": "add_mohfile"
  },
  {
    "id": 123,
    "name": "Can change moh file",
    "content_type_id": 31,
    "codename": "change_mohfile"
  },
  {
    "id": 124,
    "name": "Can delete moh file",
    "content_type_id": 31,
    "codename": "delete_mohfile"
  },
  {
    "id": 125,
    "name": "Can view moh file",
    "content_type_id": 31,
    "codename": "view_mohfile"
  },
  {
    "id": 126,
    "name": "can_download_file",
    "content_type_id": 31,
    "codename": "can_download_file"
  },
  {
    "id": 127,
    "name": "can_upload_file",
    "content_type_id": 31,
    "codename": "can_upload_file"
  },
  {
    "id": 128,
    "name": "can_play_file",
    "content_type_id": 31,
    "codename": "can_play_file"
  },
  {
    "id": 129,
    "name": "Can add recording",
    "content_type_id": 32,
    "codename": "add_recording"
  },
  {
    "id": 130,
    "name": "Can change recording",
    "content_type_id": 32,
    "codename": "change_recording"
  },
  {
    "id": 131,
    "name": "Can delete recording",
    "content_type_id": 32,
    "codename": "delete_recording"
  },
  {
    "id": 132,
    "name": "Can view recording",
    "content_type_id": 32,
    "codename": "view_recording"
  },
  {
    "id": 133,
    "name": "can_download_recording",
    "content_type_id": 32,
    "codename": "can_download_recording"
  },
  {
    "id": 134,
    "name": "can_upload_recording",
    "content_type_id": 32,
    "codename": "can_upload_recording"
  },
  {
    "id": 135,
    "name": "can_play_recording",
    "content_type_id": 32,
    "codename": "can_play_recording"
  },
  {
    "id": 136,
    "name": "Can add call recording",
    "content_type_id": 33,
    "codename": "add_callrecording"
  },
  {
    "id": 137,
    "name": "Can change call recording",
    "content_type_id": 33,
    "codename": "change_callrecording"
  },
  {
    "id": 138,
    "name": "Can delete call recording",
    "content_type_id": 33,
    "codename": "delete_callrecording"
  },
  {
    "id": 139,
    "name": "Can view call recording",
    "content_type_id": 33,
    "codename": "view_callrecording"
  },
  {
    "id": 140,
    "name": "can_download_call_recording",
    "content_type_id": 33,
    "codename": "can_download_call_recording"
  },
  {
    "id": 141,
    "name": "can_upload_call_recording",
    "content_type_id": 33,
    "codename": "can_upload_call_recording"
  },
  {
    "id": 142,
    "name": "can_play_call_recording",
    "content_type_id": 33,
    "codename": "can_play_call_recording"
  },
  {
    "id": 143,
    "name": "Can add extension",
    "content_type_id": 34,
    "codename": "add_extension"
  },
  {
    "id": 144,
    "name": "Can change extension",
    "content_type_id": 34,
    "codename": "change_extension"
  },
  {
    "id": 145,
    "name": "Can delete extension",
    "content_type_id": 34,
    "codename": "delete_extension"
  },
  {
    "id": 146,
    "name": "Can view extension",
    "content_type_id": 34,
    "codename": "view_extension"
  },
  {
    "id": 147,
    "name": "Can add gateway",
    "content_type_id": 35,
    "codename": "add_gateway"
  },
  {
    "id": 148,
    "name": "Can change gateway",
    "content_type_id": 35,
    "codename": "change_gateway"
  },
  {
    "id": 149,
    "name": "Can delete gateway",
    "content_type_id": 35,
    "codename": "delete_gateway"
  },
  {
    "id": 150,
    "name": "Can view gateway",
    "content_type_id": 35,
    "codename": "view_gateway"
  },
  {
    "id": 151,
    "name": "Can add extension user",
    "content_type_id": 36,
    "codename": "add_extensionuser"
  },
  {
    "id": 152,
    "name": "Can change extension user",
    "content_type_id": 36,
    "codename": "change_extensionuser"
  },
  {
    "id": 153,
    "name": "Can delete extension user",
    "content_type_id": 36,
    "codename": "delete_extensionuser"
  },
  {
    "id": 154,
    "name": "Can view extension user",
    "content_type_id": 36,
    "codename": "view_extensionuser"
  },
  {
    "id": 155,
    "name": "Can add follow me destination",
    "content_type_id": 37,
    "codename": "add_followmedestination"
  },
  {
    "id": 156,
    "name": "Can change follow me destination",
    "content_type_id": 37,
    "codename": "change_followmedestination"
  },
  {
    "id": 157,
    "name": "Can delete follow me destination",
    "content_type_id": 37,
    "codename": "delete_followmedestination"
  },
  {
    "id": 158,
    "name": "Can view follow me destination",
    "content_type_id": 37,
    "codename": "view_followmedestination"
  },
  {
    "id": 159,
    "name": "Can add bridge",
    "content_type_id": 38,
    "codename": "add_bridge"
  },
  {
    "id": 160,
    "name": "Can change bridge",
    "content_type_id": 38,
    "codename": "change_bridge"
  },
  {
    "id": 161,
    "name": "Can delete bridge",
    "content_type_id": 38,
    "codename": "delete_bridge"
  },
  {
    "id": 162,
    "name": "Can view bridge",
    "content_type_id": 38,
    "codename": "view_bridge"
  },
  {
    "id": 163,
    "name": "Can add htt api session",
    "content_type_id": 39,
    "codename": "add_httapisession"
  },
  {
    "id": 164,
    "name": "Can change htt api session",
    "content_type_id": 39,
    "codename": "change_httapisession"
  },
  {
    "id": 165,
    "name": "Can delete htt api session",
    "content_type_id": 39,
    "codename": "delete_httapisession"
  },
  {
    "id": 166,
    "name": "Can view htt api session",
    "content_type_id": 39,
    "codename": "view_httapisession"
  },
  {
    "id": 167,
    "name": "Can add voicemail",
    "content_type_id": 40,
    "codename": "add_voicemail"
  },
  {
    "id": 168,
    "name": "Can change voicemail",
    "content_type_id": 40,
    "codename": "change_voicemail"
  },
  {
    "id": 169,
    "name": "Can delete voicemail",
    "content_type_id": 40,
    "codename": "delete_voicemail"
  },
  {
    "id": 170,
    "name": "Can view voicemail",
    "content_type_id": 40,
    "codename": "view_voicemail"
  },
  {
    "id": 171,
    "name": "Can add voicemail greeting",
    "content_type_id": 41,
    "codename": "add_voicemailgreeting"
  },
  {
    "id": 172,
    "name": "Can change voicemail greeting",
    "content_type_id": 41,
    "codename": "change_voicemailgreeting"
  },
  {
    "id": 173,
    "name": "Can delete voicemail greeting",
    "content_type_id": 41,
    "codename": "delete_voicemailgreeting"
  },
  {
    "id": 174,
    "name": "Can view voicemail greeting",
    "content_type_id": 41,
    "codename": "view_voicemailgreeting"
  },
  {
    "id": 175,
    "name": "can_download_greeting",
    "content_type_id": 41,
    "codename": "can_download_greeting"
  },
  {
    "id": 176,
    "name": "can_upload_greeting",
    "content_type_id": 41,
    "codename": "can_upload_greeting"
  },
  {
    "id": 177,
    "name": "can_play_greeting",
    "content_type_id": 41,
    "codename": "can_play_greeting"
  },
  {
    "id": 178,
    "name": "Can add voicemail destinations",
    "content_type_id": 42,
    "codename": "add_voicemaildestinations"
  },
  {
    "id": 179,
    "name": "Can change voicemail destinations",
    "content_type_id": 42,
    "codename": "change_voicemaildestinations"
  },
  {
    "id": 180,
    "name": "Can delete voicemail destinations",
    "content_type_id": 42,
    "codename": "delete_voicemaildestinations"
  },
  {
    "id": 181,
    "name": "Can view voicemail destinations",
    "content_type_id": 42,
    "codename": "view_voicemaildestinations"
  },
  {
    "id": 182,
    "name": "Can add voicemail messages",
    "content_type_id": 43,
    "codename": "add_voicemailmessages"
  },
  {
    "id": 183,
    "name": "Can change voicemail messages",
    "content_type_id": 43,
    "codename": "change_voicemailmessages"
  },
  {
    "id": 184,
    "name": "Can delete voicemail messages",
    "content_type_id": 43,
    "codename": "delete_voicemailmessages"
  },
  {
    "id": 185,
    "name": "Can view voicemail messages",
    "content_type_id": 43,
    "codename": "view_voicemailmessages"
  },
  {
    "id": 186,
    "name": "can_download_message",
    "content_type_id": 43,
    "codename": "can_download_message"
  },
  {
    "id": 187,
    "name": "can_upload_message",
    "content_type_id": 43,
    "codename": "can_upload_message"
  },
  {
    "id": 188,
    "name": "can_play_message",
    "content_type_id": 43,
    "codename": "can_play_message"
  },
  {
    "id": 189,
    "name": "Can add voicemail options",
    "content_type_id": 44,
    "codename": "add_voicemailoptions"
  },
  {
    "id": 190,
    "name": "Can change voicemail options",
    "content_type_id": 44,
    "codename": "change_voicemailoptions"
  },
  {
    "id": 191,
    "name": "Can delete voicemail options",
    "content_type_id": 44,
    "codename": "delete_voicemailoptions"
  },
  {
    "id": 192,
    "name": "Can view voicemail options",
    "content_type_id": 44,
    "codename": "view_voicemailoptions"
  },
  {
    "id": 193,
    "name": "Can add xml cdr",
    "content_type_id": 45,
    "codename": "add_xmlcdr"
  },
  {
    "id": 194,
    "name": "Can change xml cdr",
    "content_type_id": 45,
    "codename": "change_xmlcdr"
  },
  {
    "id": 195,
    "name": "Can delete xml cdr",
    "content_type_id": 45,
    "codename": "delete_xmlcdr"
  },
  {
    "id": 196,
    "name": "Can view xml cdr",
    "content_type_id": 45,
    "codename": "view_xmlcdr"
  },
  {
    "id": 197,
    "name": "Can add call timeline",
    "content_type_id": 46,
    "codename": "add_calltimeline"
  },
  {
    "id": 198,
    "name": "Can change call timeline",
    "content_type_id": 46,
    "codename": "change_calltimeline"
  },
  {
    "id": 199,
    "name": "Can delete call timeline",
    "content_type_id": 46,
    "codename": "delete_calltimeline"
  },
  {
    "id": 200,
    "name": "Can view call timeline",
    "content_type_id": 46,
    "codename": "view_calltimeline"
  },
  {
    "id": 201,
    "name": "Can add conference controls",
    "content_type_id": 47,
    "codename": "add_conferencecontrols"
  },
  {
    "id": 202,
    "name": "Can change conference controls",
    "content_type_id": 47,
    "codename": "change_conferencecontrols"
  },
  {
    "id": 203,
    "name": "Can delete conference controls",
    "content_type_id": 47,
    "codename": "delete_conferencecontrols"
  },
  {
    "id": 204,
    "name": "Can view conference controls",
    "content_type_id": 47,
    "codename": "view_conferencecontrols"
  },
  {
    "id": 205,
    "name": "Can add conference profiles",
    "content_type_id": 48,
    "codename": "add_conferenceprofiles"
  },
  {
    "id": 206,
    "name": "Can change conference profiles",
    "content_type_id": 48,
    "codename": "change_conferenceprofiles"
  },
  {
    "id": 207,
    "name": "Can delete conference profiles",
    "content_type_id": 48,
    "codename": "delete_conferenceprofiles"
  },
  {
    "id": 208,
    "name": "Can view conference profiles",
    "content_type_id": 48,
    "codename": "view_conferenceprofiles"
  },
  {
    "id": 209,
    "name": "Can add conference profile params",
    "content_type_id": 49,
    "codename": "add_conferenceprofileparams"
  },
  {
    "id": 210,
    "name": "Can change conference profile params",
    "content_type_id": 49,
    "codename": "change_conferenceprofileparams"
  },
  {
    "id": 211,
    "name": "Can delete conference profile params",
    "content_type_id": 49,
    "codename": "delete_conferenceprofileparams"
  },
  {
    "id": 212,
    "name": "Can view conference profile params",
    "content_type_id": 49,
    "codename": "view_conferenceprofileparams"
  },
  {
    "id": 213,
    "name": "Can add conference control details",
    "content_type_id": 50,
    "codename": "add_conferencecontroldetails"
  },
  {
    "id": 214,
    "name": "Can change conference control details",
    "content_type_id": 50,
    "codename": "change_conferencecontroldetails"
  },
  {
    "id": 215,
    "name": "Can delete conference control details",
    "content_type_id": 50,
    "codename": "delete_conferencecontroldetails"
  },
  {
    "id": 216,
    "name": "Can view conference control details",
    "content_type_id": 50,
    "codename": "view_conferencecontroldetails"
  },
  {
    "id": 217,
    "name": "Can add conference centres",
    "content_type_id": 51,
    "codename": "add_conferencecentres"
  },
  {
    "id": 218,
    "name": "Can change conference centres",
    "content_type_id": 51,
    "codename": "change_conferencecentres"
  },
  {
    "id": 219,
    "name": "Can delete conference centres",
    "content_type_id": 51,
    "codename": "delete_conferencecentres"
  },
  {
    "id": 220,
    "name": "Can view conference centres",
    "content_type_id": 51,
    "codename": "view_conferencecentres"
  },
  {
    "id": 221,
    "name": "Can add conference rooms",
    "content_type_id": 52,
    "codename": "add_conferencerooms"
  },
  {
    "id": 222,
    "name": "Can change conference rooms",
    "content_type_id": 52,
    "codename": "change_conferencerooms"
  },
  {
    "id": 223,
    "name": "Can delete conference rooms",
    "content_type_id": 52,
    "codename": "delete_conferencerooms"
  },
  {
    "id": 224,
    "name": "Can view conference rooms",
    "content_type_id": 52,
    "codename": "view_conferencerooms"
  },
  {
    "id": 225,
    "name": "Can add conference room user",
    "content_type_id": 53,
    "codename": "add_conferenceroomuser"
  },
  {
    "id": 226,
    "name": "Can change conference room user",
    "content_type_id": 53,
    "codename": "change_conferenceroomuser"
  },
  {
    "id": 227,
    "name": "Can delete conference room user",
    "content_type_id": 53,
    "codename": "delete_conferenceroomuser"
  },
  {
    "id": 228,
    "name": "Can view conference room user",
    "content_type_id": 53,
    "codename": "view_conferenceroomuser"
  },
  {
    "id": 229,
    "name": "Can add conference sessions",
    "content_type_id": 54,
    "codename": "add_conferencesessions"
  },
  {
    "id": 230,
    "name": "Can change conference sessions",
    "content_type_id": 54,
    "codename": "change_conferencesessions"
  },
  {
    "id": 231,
    "name": "Can delete conference sessions",
    "content_type_id": 54,
    "codename": "delete_conferencesessions"
  },
  {
    "id": 232,
    "name": "Can view conference sessions",
    "content_type_id": 54,
    "codename": "view_conferencesessions"
  },
  {
    "id": 233,
    "name": "Can add device profiles",
    "content_type_id": 55,
    "codename": "add_deviceprofiles"
  },
  {
    "id": 234,
    "name": "Can change device profiles",
    "content_type_id": 55,
    "codename": "change_deviceprofiles"
  },
  {
    "id": 235,
    "name": "Can delete device profiles",
    "content_type_id": 55,
    "codename": "delete_deviceprofiles"
  },
  {
    "id": 236,
    "name": "Can view device profiles",
    "content_type_id": 55,
    "codename": "view_deviceprofiles"
  },
  {
    "id": 237,
    "name": "Can add devices",
    "content_type_id": 56,
    "codename": "add_devices"
  },
  {
    "id": 238,
    "name": "Can change devices",
    "content_type_id": 56,
    "codename": "change_devices"
  },
  {
    "id": 239,
    "name": "Can delete devices",
    "content_type_id": 56,
    "codename": "delete_devices"
  },
  {
    "id": 240,
    "name": "Can view devices",
    "content_type_id": 56,
    "codename": "view_devices"
  },
  {
    "id": 241,
    "name": "Can add device vendors",
    "content_type_id": 57,
    "codename": "add_devicevendors"
  },
  {
    "id": 242,
    "name": "Can change device vendors",
    "content_type_id": 57,
    "codename": "change_devicevendors"
  },
  {
    "id": 243,
    "name": "Can delete device vendors",
    "content_type_id": 57,
    "codename": "delete_devicevendors"
  },
  {
    "id": 244,
    "name": "Can view device vendors",
    "content_type_id": 57,
    "codename": "view_devicevendors"
  },
  {
    "id": 245,
    "name": "Can add device vendor functions",
    "content_type_id": 58,
    "codename": "add_devicevendorfunctions"
  },
  {
    "id": 246,
    "name": "Can change device vendor functions",
    "content_type_id": 58,
    "codename": "change_devicevendorfunctions"
  },
  {
    "id": 247,
    "name": "Can delete device vendor functions",
    "content_type_id": 58,
    "codename": "delete_devicevendorfunctions"
  },
  {
    "id": 248,
    "name": "Can view device vendor functions",
    "content_type_id": 58,
    "codename": "view_devicevendorfunctions"
  },
  {
    "id": 249,
    "name": "Can add device vendor function groups",
    "content_type_id": 59,
    "codename": "add_devicevendorfunctiongroups"
  },
  {
    "id": 250,
    "name": "Can change device vendor function groups",
    "content_type_id": 59,
    "codename": "change_devicevendorfunctiongroups"
  },
  {
    "id": 251,
    "name": "Can delete device vendor function groups",
    "content_type_id": 59,
    "codename": "delete_devicevendorfunctiongroups"
  },
  {
    "id": 252,
    "name": "Can view device vendor function groups",
    "content_type_id": 59,
    "codename": "view_devicevendorfunctiongroups"
  },
  {
    "id": 253,
    "name": "Can add device settings",
    "content_type_id": 60,
    "codename": "add_devicesettings"
  },
  {
    "id": 254,
    "name": "Can change device settings",
    "content_type_id": 60,
    "codename": "change_devicesettings"
  },
  {
    "id": 255,
    "name": "Can delete device settings",
    "content_type_id": 60,
    "codename": "delete_devicesettings"
  },
  {
    "id": 256,
    "name": "Can view device settings",
    "content_type_id": 60,
    "codename": "view_devicesettings"
  },
  {
    "id": 257,
    "name": "Can add device profile settings",
    "content_type_id": 61,
    "codename": "add_deviceprofilesettings"
  },
  {
    "id": 258,
    "name": "Can change device profile settings",
    "content_type_id": 61,
    "codename": "change_deviceprofilesettings"
  },
  {
    "id": 259,
    "name": "Can delete device profile settings",
    "content_type_id": 61,
    "codename": "delete_deviceprofilesettings"
  },
  {
    "id": 260,
    "name": "Can view device profile settings",
    "content_type_id": 61,
    "codename": "view_deviceprofilesettings"
  },
  {
    "id": 261,
    "name": "Can add device profile keys",
    "content_type_id": 62,
    "codename": "add_deviceprofilekeys"
  },
  {
    "id": 262,
    "name": "Can change device profile keys",
    "content_type_id": 62,
    "codename": "change_deviceprofilekeys"
  },
  {
    "id": 263,
    "name": "Can delete device profile keys",
    "content_type_id": 62,
    "codename": "delete_deviceprofilekeys"
  },
  {
    "id": 264,
    "name": "Can view device profile keys",
    "content_type_id": 62,
    "codename": "view_deviceprofilekeys"
  },
  {
    "id": 265,
    "name": "Can add device lines",
    "content_type_id": 63,
    "codename": "add_devicelines"
  },
  {
    "id": 266,
    "name": "Can change device lines",
    "content_type_id": 63,
    "codename": "change_devicelines"
  },
  {
    "id": 267,
    "name": "Can delete device lines",
    "content_type_id": 63,
    "codename": "delete_devicelines"
  },
  {
    "id": 268,
    "name": "Can view device lines",
    "content_type_id": 63,
    "codename": "view_devicelines"
  },
  {
    "id": 269,
    "name": "Can add device keys",
    "content_type_id": 64,
    "codename": "add_devicekeys"
  },
  {
    "id": 270,
    "name": "Can change device keys",
    "content_type_id": 64,
    "codename": "change_devicekeys"
  },
  {
    "id": 271,
    "name": "Can delete device keys",
    "content_type_id": 64,
    "codename": "delete_devicekeys"
  },
  {
    "id": 272,
    "name": "Can view device keys",
    "content_type_id": 64,
    "codename": "view_devicekeys"
  },
  {
    "id": 273,
    "name": "Can add Contact",
    "content_type_id": 65,
    "codename": "add_contact"
  },
  {
    "id": 274,
    "name": "Can change Contact",
    "content_type_id": 65,
    "codename": "change_contact"
  },
  {
    "id": 275,
    "name": "Can delete Contact",
    "content_type_id": 65,
    "codename": "delete_contact"
  },
  {
    "id": 276,
    "name": "Can view Contact",
    "content_type_id": 65,
    "codename": "view_contact"
  },
  {
    "id": 277,
    "name": "Can add URL",
    "content_type_id": 66,
    "codename": "add_contacturl"
  },
  {
    "id": 278,
    "name": "Can change URL",
    "content_type_id": 66,
    "codename": "change_contacturl"
  },
  {
    "id": 279,
    "name": "Can delete URL",
    "content_type_id": 66,
    "codename": "delete_contacturl"
  },
  {
    "id": 280,
    "name": "Can view URL",
    "content_type_id": 66,
    "codename": "view_contacturl"
  },
  {
    "id": 281,
    "name": "Can add Telephone",
    "content_type_id": 67,
    "codename": "add_contacttel"
  },
  {
    "id": 282,
    "name": "Can change Telephone",
    "content_type_id": 67,
    "codename": "change_contacttel"
  },
  {
    "id": 283,
    "name": "Can delete Telephone",
    "content_type_id": 67,
    "codename": "delete_contacttel"
  },
  {
    "id": 284,
    "name": "Can view Telephone",
    "content_type_id": 67,
    "codename": "view_contacttel"
  },
  {
    "id": 285,
    "name": "Can add Organisation",
    "content_type_id": 68,
    "codename": "add_contactorg"
  },
  {
    "id": 286,
    "name": "Can change Organisation",
    "content_type_id": 68,
    "codename": "change_contactorg"
  },
  {
    "id": 287,
    "name": "Can delete Organisation",
    "content_type_id": 68,
    "codename": "delete_contactorg"
  },
  {
    "id": 288,
    "name": "Can view Organisation",
    "content_type_id": 68,
    "codename": "view_contactorg"
  },
  {
    "id": 289,
    "name": "Can add Geoghraphic URI",
    "content_type_id": 69,
    "codename": "add_contactgeo"
  },
  {
    "id": 290,
    "name": "Can change Geoghraphic URI",
    "content_type_id": 69,
    "codename": "change_contactgeo"
  },
  {
    "id": 291,
    "name": "Can delete Geoghraphic URI",
    "content_type_id": 69,
    "codename": "delete_contactgeo"
  },
  {
    "id": 292,
    "name": "Can view Geoghraphic URI",
    "content_type_id": 69,
    "codename": "view_contactgeo"
  },
  {
    "id": 293,
    "name": "Can add Email",
    "content_type_id": 70,
    "codename": "add_contactemail"
  },
  {
    "id": 294,
    "name": "Can change Email",
    "content_type_id": 70,
    "codename": "change_contactemail"
  },
  {
    "id": 295,
    "name": "Can delete Email",
    "content_type_id": 70,
    "codename": "delete_contactemail"
  },
  {
    "id": 296,
    "name": "Can view Email",
    "content_type_id": 70,
    "codename": "view_contactemail"
  },
  {
    "id": 297,
    "name": "Can add Significant Date",
    "content_type_id": 71,
    "codename": "add_contactdate"
  },
  {
    "id": 298,
    "name": "Can change Significant Date",
    "content_type_id": 71,
    "codename": "change_contactdate"
  },
  {
    "id": 299,
    "name": "Can delete Significant Date",
    "content_type_id": 71,
    "codename": "delete_contactdate"
  },
  {
    "id": 300,
    "name": "Can view Significant Date",
    "content_type_id": 71,
    "codename": "view_contactdate"
  },
  {
    "id": 301,
    "name": "Can add Category",
    "content_type_id": 72,
    "codename": "add_contactcategory"
  },
  {
    "id": 302,
    "name": "Can change Category",
    "content_type_id": 72,
    "codename": "change_contactcategory"
  },
  {
    "id": 303,
    "name": "Can delete Category",
    "content_type_id": 72,
    "codename": "delete_contactcategory"
  },
  {
    "id": 304,
    "name": "Can view Category",
    "content_type_id": 72,
    "codename": "view_contactcategory"
  },
  {
    "id": 305,
    "name": "Can add Address",
    "content_type_id": 73,
    "codename": "add_contactaddress"
  },
  {
    "id": 306,
    "name": "Can change Address",
    "content_type_id": 73,
    "codename": "change_contactaddress"
  },
  {
    "id": 307,
    "name": "Can delete Address",
    "content_type_id": 73,
    "codename": "delete_contactaddress"
  },
  {
    "id": 308,
    "name": "Can view Address",
    "content_type_id": 73,
    "codename": "view_contactaddress"
  },
  {
    "id": 309,
    "name": "Can add contact group",
    "content_type_id": 74,
    "codename": "add_contactgroup"
  },
  {
    "id": 310,
    "name": "Can change contact group",
    "content_type_id": 74,
    "codename": "change_contactgroup"
  },
  {
    "id": 311,
    "name": "Can delete contact group",
    "content_type_id": 74,
    "codename": "delete_contactgroup"
  },
  {
    "id": 312,
    "name": "Can view contact group",
    "content_type_id": 74,
    "codename": "view_contactgroup"
  },
  {
    "id": 313,
    "name": "Can add ring group",
    "content_type_id": 75,
    "codename": "add_ringgroup"
  },
  {
    "id": 314,
    "name": "Can change ring group",
    "content_type_id": 75,
    "codename": "change_ringgroup"
  },
  {
    "id": 315,
    "name": "Can delete ring group",
    "content_type_id": 75,
    "codename": "delete_ringgroup"
  },
  {
    "id": 316,
    "name": "Can view ring group",
    "content_type_id": 75,
    "codename": "view_ringgroup"
  },
  {
    "id": 317,
    "name": "Can add ring group user",
    "content_type_id": 76,
    "codename": "add_ringgroupuser"
  },
  {
    "id": 318,
    "name": "Can change ring group user",
    "content_type_id": 76,
    "codename": "change_ringgroupuser"
  },
  {
    "id": 319,
    "name": "Can delete ring group user",
    "content_type_id": 76,
    "codename": "delete_ringgroupuser"
  },
  {
    "id": 320,
    "name": "Can view ring group user",
    "content_type_id": 76,
    "codename": "view_ringgroupuser"
  },
  {
    "id": 321,
    "name": "Can add ring group destination",
    "content_type_id": 77,
    "codename": "add_ringgroupdestination"
  },
  {
    "id": 322,
    "name": "Can change ring group destination",
    "content_type_id": 77,
    "codename": "change_ringgroupdestination"
  },
  {
    "id": 323,
    "name": "Can delete ring group destination",
    "content_type_id": 77,
    "codename": "delete_ringgroupdestination"
  },
  {
    "id": 324,
    "name": "Can view ring group destination",
    "content_type_id": 77,
    "codename": "view_ringgroupdestination"
  },
  {
    "id": 325,
    "name": "Can add phrases",
    "content_type_id": 78,
    "codename": "add_phrases"
  },
  {
    "id": 326,
    "name": "Can change phrases",
    "content_type_id": 78,
    "codename": "change_phrases"
  },
  {
    "id": 327,
    "name": "Can delete phrases",
    "content_type_id": 78,
    "codename": "delete_phrases"
  },
  {
    "id": 328,
    "name": "Can view phrases",
    "content_type_id": 78,
    "codename": "view_phrases"
  },
  {
    "id": 329,
    "name": "Can add phrase details",
    "content_type_id": 79,
    "codename": "add_phrasedetails"
  },
  {
    "id": 330,
    "name": "Can change phrase details",
    "content_type_id": 79,
    "codename": "change_phrasedetails"
  },
  {
    "id": 331,
    "name": "Can delete phrase details",
    "content_type_id": 79,
    "codename": "delete_phrasedetails"
  },
  {
    "id": 332,
    "name": "Can view phrase details",
    "content_type_id": 79,
    "codename": "view_phrasedetails"
  },
  {
    "id": 333,
    "name": "Can add number translations",
    "content_type_id": 80,
    "codename": "add_numbertranslations"
  },
  {
    "id": 334,
    "name": "Can change number translations",
    "content_type_id": 80,
    "codename": "change_numbertranslations"
  },
  {
    "id": 335,
    "name": "Can delete number translations",
    "content_type_id": 80,
    "codename": "delete_numbertranslations"
  },
  {
    "id": 336,
    "name": "Can view number translations",
    "content_type_id": 80,
    "codename": "view_numbertranslations"
  },
  {
    "id": 337,
    "name": "Can add number translation details",
    "content_type_id": 81,
    "codename": "add_numbertranslationdetails"
  },
  {
    "id": 338,
    "name": "Can change number translation details",
    "content_type_id": 81,
    "codename": "change_numbertranslationdetails"
  },
  {
    "id": 339,
    "name": "Can delete number translation details",
    "content_type_id": 81,
    "codename": "delete_numbertranslationdetails"
  },
  {
    "id": 340,
    "name": "Can view number translation details",
    "content_type_id": 81,
    "codename": "view_numbertranslationdetails"
  },
  {
    "id": 341,
    "name": "Can add ivr menus",
    "content_type_id": 82,
    "codename": "add_ivrmenus"
  },
  {
    "id": 342,
    "name": "Can change ivr menus",
    "content_type_id": 82,
    "codename": "change_ivrmenus"
  },
  {
    "id": 343,
    "name": "Can delete ivr menus",
    "content_type_id": 82,
    "codename": "delete_ivrmenus"
  },
  {
    "id": 344,
    "name": "Can view ivr menus",
    "content_type_id": 82,
    "codename": "view_ivrmenus"
  },
  {
    "id": 345,
    "name": "Can add ivr menu options",
    "content_type_id": 83,
    "codename": "add_ivrmenuoptions"
  },
  {
    "id": 346,
    "name": "Can change ivr menu options",
    "content_type_id": 83,
    "codename": "change_ivrmenuoptions"
  },
  {
    "id": 347,
    "name": "Can delete ivr menu options",
    "content_type_id": 83,
    "codename": "delete_ivrmenuoptions"
  },
  {
    "id": 348,
    "name": "Can view ivr menu options",
    "content_type_id": 83,
    "codename": "view_ivrmenuoptions"
  },
  {
    "id": 349,
    "name": "Can add call flows",
    "content_type_id": 84,
    "codename": "add_callflows"
  },
  {
    "id": 350,
    "name": "Can change call flows",
    "content_type_id": 84,
    "codename": "change_callflows"
  },
  {
    "id": 351,
    "name": "Can delete call flows",
    "content_type_id": 84,
    "codename": "delete_callflows"
  },
  {
    "id": 352,
    "name": "Can view call flows",
    "content_type_id": 84,
    "codename": "view_callflows"
  },
  {
    "id": 353,
    "name": "Can add call block",
    "content_type_id": 85,
    "codename": "add_callblock"
  },
  {
    "id": 354,
    "name": "Can change call block",
    "content_type_id": 85,
    "codename": "change_callblock"
  },
  {
    "id": 355,
    "name": "Can delete call block",
    "content_type_id": 85,
    "codename": "delete_callblock"
  },
  {
    "id": 356,
    "name": "Can view call block",
    "content_type_id": 85,
    "codename": "view_callblock"
  },
  {
    "id": 357,
    "name": "Can add call centre agents",
    "content_type_id": 86,
    "codename": "add_callcentreagents"
  },
  {
    "id": 358,
    "name": "Can change call centre agents",
    "content_type_id": 86,
    "codename": "change_callcentreagents"
  },
  {
    "id": 359,
    "name": "Can delete call centre agents",
    "content_type_id": 86,
    "codename": "delete_callcentreagents"
  },
  {
    "id": 360,
    "name": "Can view call centre agents",
    "content_type_id": 86,
    "codename": "view_callcentreagents"
  },
  {
    "id": 361,
    "name": "Can add call centre queues",
    "content_type_id": 87,
    "codename": "add_callcentrequeues"
  },
  {
    "id": 362,
    "name": "Can change call centre queues",
    "content_type_id": 87,
    "codename": "change_callcentrequeues"
  },
  {
    "id": 363,
    "name": "Can delete call centre queues",
    "content_type_id": 87,
    "codename": "delete_callcentrequeues"
  },
  {
    "id": 364,
    "name": "Can view call centre queues",
    "content_type_id": 87,
    "codename": "view_callcentrequeues"
  },
  {
    "id": 365,
    "name": "Can add call centre tiers",
    "content_type_id": 88,
    "codename": "add_callcentretiers"
  },
  {
    "id": 366,
    "name": "Can change call centre tiers",
    "content_type_id": 88,
    "codename": "change_callcentretiers"
  },
  {
    "id": 367,
    "name": "Can delete call centre tiers",
    "content_type_id": 88,
    "codename": "delete_callcentretiers"
  },
  {
    "id": 368,
    "name": "Can view call centre tiers",
    "content_type_id": 88,
    "codename": "view_callcentretiers"
  },
  {
    "id": 369,
    "name": "Can add call centre agent status log",
    "content_type_id": 89,
    "codename": "add_callcentreagentstatuslog"
  },
  {
    "id": 370,
    "name": "Can change call centre agent status log",
    "content_type_id": 89,
    "codename": "change_callcentreagentstatuslog"
  },
  {
    "id": 371,
    "name": "Can delete call centre agent status log",
    "content_type_id": 89,
    "codename": "delete_callcentreagentstatuslog"
  },
  {
    "id": 372,
    "name": "Can view call centre agent status log",
    "content_type_id": 89,
    "codename": "view_callcentreagentstatuslog"
  },
  {
    "id": 373,
    "name": "Can add auto reports",
    "content_type_id": 90,
    "codename": "add_autoreports"
  },
  {
    "id": 374,
    "name": "Can change auto reports",
    "content_type_id": 90,
    "codename": "change_autoreports"
  },
  {
    "id": 375,
    "name": "Can delete auto reports",
    "content_type_id": 90,
    "codename": "delete_autoreports"
  },
  {
    "id": 376,
    "name": "Can view auto reports",
    "content_type_id": 90,
    "codename": "view_autoreports"
  },
  {
    "id": 377,
    "name": "Can add auto report sections",
    "content_type_id": 91,
    "codename": "add_autoreportsections"
  },
  {
    "id": 378,
    "name": "Can change auto report sections",
    "content_type_id": 91,
    "codename": "change_autoreportsections"
  },
  {
    "id": 379,
    "name": "Can delete auto report sections",
    "content_type_id": 91,
    "codename": "delete_autoreportsections"
  },
  {
    "id": 380,
    "name": "Can view auto report sections",
    "content_type_id": 91,
    "codename": "view_autoreportsections"
  }
],
      skipDuplicates: true,
    });

    // Seeding auth_user
    await prisma.auth_user.createMany({
      data: [
  {
    "id": 1291,
    "password": "placeholder",
    "last_login": null,
    "is_superuser": false,
    "username": "turbo@turbo.com",
    "first_name": "",
    "last_name": "",
    "email": "turbo@turbo.com",
    "is_staff": false,
    "is_active": true,
    "date_joined": "2024-11-05T20:45:03.856Z",
    "external_uuid": "L9kIHshjCnNZkGU97lnb2AHpRxd2"
  },
  {
    "id": 1301,
    "password": "placeholder",
    "last_login": null,
    "is_superuser": false,
    "username": "dow@dow.com",
    "first_name": "",
    "last_name": "",
    "email": "dow@dow.com",
    "is_staff": false,
    "is_active": true,
    "date_joined": "2024-11-05T20:52:11.412Z",
    "external_uuid": "OmcFRP0Ks6fTUVAYuZzLMfHT3Kr2"
  },
  {
    "id": 1311,
    "password": "placeholder",
    "last_login": null,
    "is_superuser": false,
    "username": "she@se.com",
    "first_name": "",
    "last_name": "",
    "email": "she@se.com",
    "is_staff": false,
    "is_active": true,
    "date_joined": "2024-11-05T20:55:25.011Z",
    "external_uuid": "aEQynZZeb3grpnJaYWHHNSMotpG2"
  },
  {
    "id": 1321,
    "password": "placeholder",
    "last_login": null,
    "is_superuser": false,
    "username": "event@ev.com",
    "first_name": "",
    "last_name": "",
    "email": "event@ev.com",
    "is_staff": false,
    "is_active": true,
    "date_joined": "2024-11-05T20:57:20.067Z",
    "external_uuid": "z9hs1V9huQTy7jjzOvbEShRH9Ks2"
  },
  {
    "id": 1331,
    "password": "placeholder",
    "last_login": null,
    "is_superuser": false,
    "username": "json@json.com",
    "first_name": "",
    "last_name": "",
    "email": "json@json.com",
    "is_staff": false,
    "is_active": true,
    "date_joined": "2024-11-05T21:08:29.698Z",
    "external_uuid": "BsWuWXe7mAVUGX3ZcNhttvizwSG3"
  },
  {
    "id": 1341,
    "password": "placeholder",
    "last_login": null,
    "is_superuser": false,
    "username": "key@key.com",
    "first_name": "",
    "last_name": "",
    "email": "key@key.com",
    "is_staff": false,
    "is_active": true,
    "date_joined": "2024-11-05T21:12:16.262Z",
    "external_uuid": "0GPF3grSIXbPrrG9qOp8gt6GiUa2"
  },
  {
    "id": 1351,
    "password": "placeholder",
    "last_login": null,
    "is_superuser": false,
    "username": "localhost343@localhost.com",
    "first_name": "",
    "last_name": "",
    "email": "localhost343@localhost.com",
    "is_staff": false,
    "is_active": true,
    "date_joined": "2024-11-07T22:38:54.372Z",
    "external_uuid": "4GCOQhctdPRJryklejBZS67CqCG2"
  }
],
      skipDuplicates: true,
    });

    // Seeding auth_user_groups
    await prisma.auth_user_groups.createMany({
      data: [],
      skipDuplicates: true,
    });

    // Seeding authtoken_token
    await prisma.authtoken_token.createMany({
      data: [
  {
    "key": "L9kIHshjCnNZkGU97lnb2AHpRxd2",
    "created": "2024-11-05T20:45:03.883Z",
    "user_id": 1291
  },
  {
    "key": "OmcFRP0Ks6fTUVAYuZzLMfHT3Kr2",
    "created": "2024-11-05T20:52:11.430Z",
    "user_id": 1301
  },
  {
    "key": "aEQynZZeb3grpnJaYWHHNSMotpG2",
    "created": "2024-11-05T20:55:25.038Z",
    "user_id": 1311
  },
  {
    "key": "z9hs1V9huQTy7jjzOvbEShRH9Ks2",
    "created": "2024-11-05T20:57:20.092Z",
    "user_id": 1321
  },
  {
    "key": "BsWuWXe7mAVUGX3ZcNhttvizwSG3",
    "created": "2024-11-05T21:08:29.724Z",
    "user_id": 1331
  },
  {
    "key": "0GPF3grSIXbPrrG9qOp8gt6GiUa2",
    "created": "2024-11-05T21:12:16.281Z",
    "user_id": 1341
  },
  {
    "key": "4GCOQhctdPRJryklejBZS67CqCG2",
    "created": "2024-11-07T22:38:54.409Z",
    "user_id": 1351
  }
],
      skipDuplicates: true,
    });

    // Seeding django_admin_log
    await prisma.django_admin_log.createMany({
      data: [],
      skipDuplicates: true,
    });

    // Seeding pbx_menus
    await prisma.pbx_menus.createMany({
      data: [
  {
    "id": "5dc0b38c-7522-4c25-a2b9-d6f34d9828e3",
    "name": "Default",
    "description": "",
    "created": "2022-05-07T13:43:15.686Z",
    "updated": "2022-11-29T22:48:44.983Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "2176f15a-9656-43e9-847f-84aaec6d04a7",
    "name": "menu1",
    "description": "",
    "created": "2024-10-13T19:13:37.821Z",
    "updated": "2024-10-13T19:13:37.821Z",
    "synchronised": null,
    "updated_by": "admin"
  }
],
      skipDuplicates: true,
    });

    // Seeding pbx_menu_items
    await prisma.pbx_menu_items.createMany({
      data: [
  {
    "id": "5463cd68-035a-4d5e-9cc7-00391ecb0658",
    "title": "Logout",
    "link": "/portal/pbxlogout/",
    "icon": null,
    "category": "internal",
    "protected": "true",
    "sequence": "1990",
    "description": "",
    "created": "2022-05-07T14:06:23.456Z",
    "updated": "2022-11-29T22:50:55.183Z",
    "synchronised": null,
    "updated_by": "system",
    "menu_id": "5dc0b38c-7522-4c25-a2b9-d6f34d9828e3",
    "parent_id": "1d13580a-3004-4f70-a159-5798103429b2"
  },
  {
    "id": "043683c0-2436-4601-b5ff-4d6667935064",
    "title": "Advanced",
    "link": "dropdown",
    "icon": "fa fa-cog",
    "category": "internal",
    "protected": "true",
    "sequence": "100000",
    "description": "",
    "created": "2022-05-07T13:57:25.696Z",
    "updated": "2022-11-29T22:33:59.269Z",
    "synchronised": null,
    "updated_by": "system",
    "menu_id": "5dc0b38c-7522-4c25-a2b9-d6f34d9828e3",
    "parent_id": null
  },
  {
    "id": "1d13580a-3004-4f70-a159-5798103429b2",
    "title": "Home",
    "link": "dropdown",
    "icon": "fa fa-home",
    "category": "internal",
    "protected": "true",
    "sequence": "1000",
    "description": "",
    "created": "2022-05-07T13:44:21.759Z",
    "updated": "2022-12-19T13:03:22.819Z",
    "synchronised": null,
    "updated_by": "system",
    "menu_id": "5dc0b38c-7522-4c25-a2b9-d6f34d9828e3",
    "parent_id": null
  },
  {
    "id": "73ce309c-95ee-45fe-9e69-919b61a855f8",
    "title": "Applications",
    "link": "dropdown",
    "icon": "fas fa-paper-plane",
    "category": "internal",
    "protected": "true",
    "sequence": "30000",
    "description": "",
    "created": "2022-12-07T18:36:57.907Z",
    "updated": "2022-12-11T20:01:53.068Z",
    "synchronised": null,
    "updated_by": "system",
    "menu_id": "5dc0b38c-7522-4c25-a2b9-d6f34d9828e3",
    "parent_id": null
  },
  {
    "id": "7872454a-54f5-43bb-b9d2-10039c8ff839",
    "title": "Admin",
    "link": "/admin/",
    "icon": null,
    "category": "internal",
    "protected": "true",
    "sequence": "100010",
    "description": "",
    "created": "2022-05-07T14:32:15.726Z",
    "updated": "2022-11-29T22:33:59.271Z",
    "synchronised": null,
    "updated_by": "system",
    "menu_id": "5dc0b38c-7522-4c25-a2b9-d6f34d9828e3",
    "parent_id": "043683c0-2436-4601-b5ff-4d6667935064"
  },
  {
    "id": "acb1aac0-459f-4d52-acb3-f58ddc46bd3f",
    "title": "API",
    "link": "/api/",
    "icon": null,
    "category": "internal",
    "protected": "true",
    "sequence": "100020",
    "description": "",
    "created": "2022-05-07T14:32:46.817Z",
    "updated": "2022-11-29T22:33:59.273Z",
    "synchronised": null,
    "updated_by": "system",
    "menu_id": "5dc0b38c-7522-4c25-a2b9-d6f34d9828e3",
    "parent_id": "043683c0-2436-4601-b5ff-4d6667935064"
  },
  {
    "id": "915f0fd9-5b6d-4530-9b5b-099ba9a1bbe7",
    "title": "Call Routing",
    "link": "dropdown",
    "icon": "fas fa-exchange-alt",
    "category": "internal",
    "protected": "true",
    "sequence": "20000",
    "description": "",
    "created": "2022-11-30T09:58:15.586Z",
    "updated": "2022-11-30T10:06:38.613Z",
    "synchronised": null,
    "updated_by": "system",
    "menu_id": "5dc0b38c-7522-4c25-a2b9-d6f34d9828e3",
    "parent_id": null
  },
  {
    "id": "23a7f6d7-a307-4e46-9876-f2c21bcf1c7e",
    "title": "New Inbound Route",
    "link": "/dialplans/newibroute",
    "icon": null,
    "category": "internal",
    "protected": "true",
    "sequence": "20020",
    "description": "",
    "created": "2022-12-01T15:26:09.950Z",
    "updated": "2022-12-01T15:26:09.950Z",
    "synchronised": null,
    "updated_by": "system",
    "menu_id": "5dc0b38c-7522-4c25-a2b9-d6f34d9828e3",
    "parent_id": "915f0fd9-5b6d-4530-9b5b-099ba9a1bbe7"
  },
  {
    "id": "2fc55232-0f78-4a95-b0a9-c25637199579",
    "title": "Time Contitions",
    "link": "/dialplans/timeconditionviewer",
    "icon": null,
    "category": "internal",
    "protected": "true",
    "sequence": "20050",
    "description": "",
    "created": "2022-12-12T09:40:18.370Z",
    "updated": "2022-12-12T09:40:18.370Z",
    "synchronised": null,
    "updated_by": "system",
    "menu_id": "5dc0b38c-7522-4c25-a2b9-d6f34d9828e3",
    "parent_id": "915f0fd9-5b6d-4530-9b5b-099ba9a1bbe7"
  },
  {
    "id": "4c4a93e7-63ca-42ae-a83b-74b8907e5d8d",
    "title": "New Outbound Route",
    "link": "/dialplans/newobroute",
    "icon": null,
    "category": "internal",
    "protected": "true",
    "sequence": "20040",
    "description": "",
    "created": "2022-12-01T15:27:14.858Z",
    "updated": "2022-12-01T15:27:14.858Z",
    "synchronised": null,
    "updated_by": "system",
    "menu_id": "5dc0b38c-7522-4c25-a2b9-d6f34d9828e3",
    "parent_id": "915f0fd9-5b6d-4530-9b5b-099ba9a1bbe7"
  },
  {
    "id": "7257ad0a-625f-4b2b-9450-73b1d28827c2",
    "title": "Inbound Routes",
    "link": "/admin/dialplans/dialplan/?category=Inbound+route",
    "icon": null,
    "category": "internal",
    "protected": "true",
    "sequence": "20010",
    "description": "",
    "created": "2022-11-30T12:37:03.607Z",
    "updated": "2022-11-30T15:48:29.295Z",
    "synchronised": null,
    "updated_by": "system",
    "menu_id": "5dc0b38c-7522-4c25-a2b9-d6f34d9828e3",
    "parent_id": "915f0fd9-5b6d-4530-9b5b-099ba9a1bbe7"
  },
  {
    "id": "837eecfc-fdb4-45cb-9422-07418178b6b6",
    "title": "Outbound Routes",
    "link": "/admin/dialplans/dialplan/?category=Outbound+route",
    "icon": null,
    "category": "internal",
    "protected": "true",
    "sequence": "20030",
    "description": "",
    "created": "2022-11-30T12:37:45.517Z",
    "updated": "2022-12-01T15:26:42.217Z",
    "synchronised": null,
    "updated_by": "system",
    "menu_id": "5dc0b38c-7522-4c25-a2b9-d6f34d9828e3",
    "parent_id": "915f0fd9-5b6d-4530-9b5b-099ba9a1bbe7"
  },
  {
    "id": "c36269b7-ef2c-4a8a-a469-52bfc0b20108",
    "title": "New Time Contition",
    "link": "/dialplans/timecondition",
    "icon": null,
    "category": "internal",
    "protected": "true",
    "sequence": "20060",
    "description": "",
    "created": "2022-12-17T17:28:29.177Z",
    "updated": "2022-12-17T17:28:29.177Z",
    "synchronised": null,
    "updated_by": "system",
    "menu_id": "5dc0b38c-7522-4c25-a2b9-d6f34d9828e3",
    "parent_id": "915f0fd9-5b6d-4530-9b5b-099ba9a1bbe7"
  },
  {
    "id": "77e9b93a-af73-4a78-a052-8e8bff8a442c",
    "title": "Call Routing",
    "link": "/accounts/callrouting",
    "icon": null,
    "category": "internal",
    "protected": "true",
    "sequence": "20070",
    "description": "",
    "created": "2023-11-26T11:55:41.858Z",
    "updated": "2023-11-26T11:56:15.207Z",
    "synchronised": null,
    "updated_by": "system",
    "menu_id": "5dc0b38c-7522-4c25-a2b9-d6f34d9828e3",
    "parent_id": "915f0fd9-5b6d-4530-9b5b-099ba9a1bbe7"
  },
  {
    "id": "ff25c281-dd24-44c9-b014-2ebf2f19a6cc",
    "title": "Voicemails",
    "link": "/voicemail/listvoicemails",
    "icon": null,
    "category": "internal",
    "protected": "true",
    "sequence": "30910",
    "description": "",
    "created": "2022-12-11T18:43:19.833Z",
    "updated": "2022-12-11T19:45:55.198Z",
    "synchronised": null,
    "updated_by": "system",
    "menu_id": "5dc0b38c-7522-4c25-a2b9-d6f34d9828e3",
    "parent_id": "73ce309c-95ee-45fe-9e69-919b61a855f8"
  },
  {
    "id": "3ffc2da6-4f43-4fba-8066-a527acf09600",
    "title": "CDR Records",
    "link": "/xmlcdr/cdrviewer",
    "icon": null,
    "category": "internal",
    "protected": "true",
    "sequence": "30010",
    "description": "",
    "created": "2022-12-08T21:31:33.185Z",
    "updated": "2022-12-11T20:01:22.462Z",
    "synchronised": null,
    "updated_by": "system",
    "menu_id": "5dc0b38c-7522-4c25-a2b9-d6f34d9828e3",
    "parent_id": "73ce309c-95ee-45fe-9e69-919b61a855f8"
  },
  {
    "id": "1739efdd-1901-442a-8f23-cb2906c6edb8",
    "title": "Switch Dashboard",
    "link": "/dashboard/swdashboard",
    "icon": null,
    "category": "internal",
    "protected": "true",
    "sequence": "1020",
    "description": "",
    "created": "2022-11-29T21:14:15.842Z",
    "updated": "2022-11-29T21:14:15.842Z",
    "synchronised": null,
    "updated_by": "system",
    "menu_id": "5dc0b38c-7522-4c25-a2b9-d6f34d9828e3",
    "parent_id": "1d13580a-3004-4f70-a159-5798103429b2"
  },
  {
    "id": "bc559e8b-bb77-479c-88e2-a6f85d236c7c",
    "title": "OS Dashboard",
    "link": "/dashboard/osdashboard",
    "icon": null,
    "category": "internal",
    "protected": "true",
    "sequence": "1010",
    "description": "",
    "created": "2022-11-29T21:14:15.840Z",
    "updated": "2022-11-29T21:14:15.840Z",
    "synchronised": null,
    "updated_by": "system",
    "menu_id": "5dc0b38c-7522-4c25-a2b9-d6f34d9828e3",
    "parent_id": "1d13580a-3004-4f70-a159-5798103429b2"
  },
  {
    "id": "1ef968ae-5640-418f-a888-876dc489ca8b",
    "title": "Dashboard",
    "link": "/dashboard/usrdashboard",
    "icon": null,
    "category": "internal",
    "protected": "true",
    "sequence": "1030",
    "description": "",
    "created": "2022-12-19T13:05:17.348Z",
    "updated": "2022-12-19T13:06:25.081Z",
    "synchronised": null,
    "updated_by": "system",
    "menu_id": "5dc0b38c-7522-4c25-a2b9-d6f34d9828e3",
    "parent_id": "1d13580a-3004-4f70-a159-5798103429b2"
  },
  {
    "id": "9e02d2b7-3853-4b58-806b-1507775083d4",
    "title": "Firewall",
    "link": "dropdown",
    "icon": "fa fa-fire",
    "category": "internal",
    "protected": "true",
    "sequence": "87000",
    "description": "",
    "created": "2022-11-29T22:33:59.277Z",
    "updated": "2022-11-30T14:26:34.284Z",
    "synchronised": null,
    "updated_by": "system",
    "menu_id": "5dc0b38c-7522-4c25-a2b9-d6f34d9828e3",
    "parent_id": null
  },
  {
    "id": "055559fa-787f-4392-8dd8-bbdba4894a72",
    "title": "Firewall SIP Customer List",
    "link": "/firewall/fwsipcustomerlist",
    "icon": null,
    "category": "internal",
    "protected": "true",
    "sequence": "87040",
    "description": "",
    "created": "2022-11-29T22:53:35.238Z",
    "updated": "2022-11-29T22:53:35.238Z",
    "synchronised": null,
    "updated_by": "system",
    "menu_id": "5dc0b38c-7522-4c25-a2b9-d6f34d9828e3",
    "parent_id": "9e02d2b7-3853-4b58-806b-1507775083d4"
  },
  {
    "id": "5cedf30a-e2e5-4371-8fc9-c70bf965e286",
    "title": "Firewall Configuration",
    "link": "/firewall/fwconfigviewer",
    "icon": null,
    "category": "internal",
    "protected": "true",
    "sequence": "87060",
    "description": "",
    "created": "2022-11-29T22:55:05.250Z",
    "updated": "2022-11-29T22:55:05.250Z",
    "synchronised": null,
    "updated_by": "system",
    "menu_id": "5dc0b38c-7522-4c25-a2b9-d6f34d9828e3",
    "parent_id": "9e02d2b7-3853-4b58-806b-1507775083d4"
  },
  {
    "id": "79ef3b2e-2264-45c5-8f79-75083417de46",
    "title": "Remove IP from Firewall",
    "link": "/firewall/fwdelip",
    "icon": null,
    "category": "internal",
    "protected": "true",
    "sequence": "87080",
    "description": "",
    "created": "2022-11-29T22:56:39.197Z",
    "updated": "2022-11-29T22:56:39.197Z",
    "synchronised": null,
    "updated_by": "system",
    "menu_id": "5dc0b38c-7522-4c25-a2b9-d6f34d9828e3",
    "parent_id": "9e02d2b7-3853-4b58-806b-1507775083d4"
  },
  {
    "id": "7da538ea-83c3-43eb-8aa2-f959f64804dc",
    "title": "Firewall Counters",
    "link": "/firewall/fwlistcounters",
    "icon": null,
    "category": "internal",
    "protected": "true",
    "sequence": "87010",
    "description": "",
    "created": "2022-11-29T22:48:44.986Z",
    "updated": "2022-11-29T22:48:44.986Z",
    "synchronised": null,
    "updated_by": "system",
    "menu_id": "5dc0b38c-7522-4c25-a2b9-d6f34d9828e3",
    "parent_id": "9e02d2b7-3853-4b58-806b-1507775083d4"
  },
  {
    "id": "8de401d5-f7ae-466b-8b9f-cd3279119ac6",
    "title": "Firewall White List",
    "link": "/firewall/fwwhitelist",
    "icon": null,
    "category": "internal",
    "protected": "true",
    "sequence": "87030",
    "description": "",
    "created": "2022-11-29T22:48:44.989Z",
    "updated": "2022-11-29T22:51:52.252Z",
    "synchronised": null,
    "updated_by": "system",
    "menu_id": "5dc0b38c-7522-4c25-a2b9-d6f34d9828e3",
    "parent_id": "9e02d2b7-3853-4b58-806b-1507775083d4"
  },
  {
    "id": "a09d57ee-b11e-42ff-b24b-ea8811044184",
    "title": "Firewall Block List",
    "link": "/firewall/fwblocklist",
    "icon": null,
    "category": "internal",
    "protected": "true",
    "sequence": "87020",
    "description": "",
    "created": "2022-11-29T22:48:44.988Z",
    "updated": "2022-11-29T22:51:45.678Z",
    "synchronised": null,
    "updated_by": "system",
    "menu_id": "5dc0b38c-7522-4c25-a2b9-d6f34d9828e3",
    "parent_id": "9e02d2b7-3853-4b58-806b-1507775083d4"
  },
  {
    "id": "d181dcbc-a3b2-4e1d-8345-3998bdf9707f",
    "title": "Firewall SIP Gateway List",
    "link": "/firewall/fwsipgatewaylist",
    "icon": null,
    "category": "internal",
    "protected": "true",
    "sequence": "87050",
    "description": "",
    "created": "2022-11-29T22:54:17.949Z",
    "updated": "2022-11-29T22:54:17.949Z",
    "synchronised": null,
    "updated_by": "system",
    "menu_id": "5dc0b38c-7522-4c25-a2b9-d6f34d9828e3",
    "parent_id": "9e02d2b7-3853-4b58-806b-1507775083d4"
  },
  {
    "id": "d72de9e9-3e5a-48e8-9a0e-de97168ba8b5",
    "title": "Add IP to Firewall",
    "link": "/firewall/fwaddip",
    "icon": null,
    "category": "internal",
    "protected": "true",
    "sequence": "87070",
    "description": "",
    "created": "2022-11-29T22:56:00.663Z",
    "updated": "2022-11-29T22:56:00.663Z",
    "synchronised": null,
    "updated_by": "system",
    "menu_id": "5dc0b38c-7522-4c25-a2b9-d6f34d9828e3",
    "parent_id": "9e02d2b7-3853-4b58-806b-1507775083d4"
  },
  {
    "id": "e2684abd-239a-4c43-8bac-08c76734f3a9",
    "title": "Firewall web block List",
    "link": "/firewall/fwwebblocklist",
    "icon": null,
    "category": "internal",
    "protected": "true",
    "sequence": "87055",
    "description": "",
    "created": "2023-11-06T17:04:47.456Z",
    "updated": "2023-11-06T17:04:47.456Z",
    "synchronised": null,
    "updated_by": "system",
    "menu_id": "5dc0b38c-7522-4c25-a2b9-d6f34d9828e3",
    "parent_id": "9e02d2b7-3853-4b58-806b-1507775083d4"
  },
  {
    "id": "6c53a5e4-2b23-4ba0-af63-8f1393b8e45b",
    "title": "Status",
    "link": "dropdown",
    "icon": "fa fa-chart-bar",
    "category": "internal",
    "protected": "true",
    "sequence": "89000",
    "description": "",
    "created": "2022-05-07T14:03:19.132Z",
    "updated": "2022-11-29T22:33:59.267Z",
    "synchronised": null,
    "updated_by": "system",
    "menu_id": "5dc0b38c-7522-4c25-a2b9-d6f34d9828e3",
    "parent_id": null
  },
  {
    "id": "22e7afbb-e36b-40ad-addd-39a7083cdb02",
    "title": "FS Log Viewer",
    "link": "/status/fslogviewer",
    "icon": null,
    "category": "internal",
    "protected": "true",
    "sequence": "89010",
    "description": "",
    "created": "2022-11-29T22:33:59.276Z",
    "updated": "2022-11-29T22:33:59.276Z",
    "synchronised": null,
    "updated_by": "system",
    "menu_id": "5dc0b38c-7522-4c25-a2b9-d6f34d9828e3",
    "parent_id": "6c53a5e4-2b23-4ba0-af63-8f1393b8e45b"
  },
  {
    "id": "09806d1d-e324-4f6f-a35e-d0a964927295",
    "title": "Registrations",
    "link": "/status/fsregistrations",
    "icon": null,
    "category": "internal",
    "protected": "true",
    "sequence": "89020",
    "description": "",
    "created": "2023-10-12T15:14:12.895Z",
    "updated": "2023-10-12T15:14:12.895Z",
    "synchronised": null,
    "updated_by": "system",
    "menu_id": "5dc0b38c-7522-4c25-a2b9-d6f34d9828e3",
    "parent_id": "6c53a5e4-2b23-4ba0-af63-8f1393b8e45b"
  },
  {
    "id": "653fbbcf-6f5f-4710-8974-fc6be6eb6911",
    "title": "Switch Modules",
    "link": "/status/modules/",
    "icon": null,
    "category": "internal",
    "protected": "true",
    "sequence": "89110",
    "description": "",
    "created": "2022-12-08T13:22:47.806Z",
    "updated": "2022-12-08T13:22:47.806Z",
    "synchronised": null,
    "updated_by": "system",
    "menu_id": "5dc0b38c-7522-4c25-a2b9-d6f34d9828e3",
    "parent_id": "6c53a5e4-2b23-4ba0-af63-8f1393b8e45b"
  },
  {
    "id": "c588e8de-8b23-4f12-968f-740fa7b2d950",
    "title": "System Status",
    "link": "/status/djangopbx/",
    "icon": null,
    "category": "internal",
    "protected": "true",
    "sequence": "89100",
    "description": "",
    "created": "2022-12-01T15:24:16.091Z",
    "updated": "2022-12-01T15:24:16.091Z",
    "synchronised": null,
    "updated_by": "system",
    "menu_id": "5dc0b38c-7522-4c25-a2b9-d6f34d9828e3",
    "parent_id": "6c53a5e4-2b23-4ba0-af63-8f1393b8e45b"
  },
  {
    "id": "846b62ca-6388-4122-b33d-cf53721df306",
    "title": "Active Calls",
    "link": "/status/fsactivecalls",
    "icon": null,
    "category": "internal",
    "protected": "true",
    "sequence": "89030",
    "description": "",
    "created": "2024-05-06T16:15:01.359Z",
    "updated": "2024-05-06T16:15:01.359Z",
    "synchronised": null,
    "updated_by": "system",
    "menu_id": "5dc0b38c-7522-4c25-a2b9-d6f34d9828e3",
    "parent_id": "6c53a5e4-2b23-4ba0-af63-8f1393b8e45b"
  },
  {
    "id": "9649fa84-a4ce-4de9-946a-2266c91b2bc3",
    "title": "Contacts",
    "link": "/contacts/contactlist/",
    "icon": null,
    "category": "internal",
    "protected": "true",
    "sequence": "30020",
    "description": "",
    "created": "2023-12-03T16:51:45.969Z",
    "updated": "2023-12-03T17:54:24.730Z",
    "synchronised": null,
    "updated_by": "system",
    "menu_id": "5dc0b38c-7522-4c25-a2b9-d6f34d9828e3",
    "parent_id": "73ce309c-95ee-45fe-9e69-919b61a855f8"
  },
  {
    "id": "be939b6f-fd81-4a08-a5a1-7e33cdb03d56",
    "title": "Ring Groups",
    "link": "/ringgroups/groups/",
    "icon": null,
    "category": "internal",
    "protected": "true",
    "sequence": "30710",
    "description": "",
    "created": "2023-12-03T17:42:00.985Z",
    "updated": "2023-12-03T17:42:20.923Z",
    "synchronised": null,
    "updated_by": "system",
    "menu_id": "5dc0b38c-7522-4c25-a2b9-d6f34d9828e3",
    "parent_id": "73ce309c-95ee-45fe-9e69-919b61a855f8"
  },
  {
    "id": "b9ac0610-d2a8-4baf-b5be-d0fba24fbc6e",
    "title": "Utilities",
    "link": "dropdown",
    "icon": "fa fa-wrench",
    "category": "internal",
    "protected": "true",
    "sequence": "88000",
    "description": "",
    "created": "2022-11-29T22:26:08.604Z",
    "updated": "2022-11-29T22:33:59.265Z",
    "synchronised": null,
    "updated_by": "system",
    "menu_id": "5dc0b38c-7522-4c25-a2b9-d6f34d9828e3",
    "parent_id": null
  },
  {
    "id": "0fa09544-65cf-4073-b251-f0dc52b375d0",
    "title": "Clear Cache",
    "link": "/utilities/clearcache/",
    "icon": null,
    "category": "internal",
    "protected": "true",
    "sequence": "88010",
    "description": "",
    "created": "2023-10-31T18:56:06.698Z",
    "updated": "2023-10-31T18:56:06.698Z",
    "synchronised": null,
    "updated_by": "system",
    "menu_id": "5dc0b38c-7522-4c25-a2b9-d6f34d9828e3",
    "parent_id": "b9ac0610-d2a8-4baf-b5be-d0fba24fbc6e"
  },
  {
    "id": "3bfffd8d-75f7-4400-92d7-71317dc0e72b",
    "title": "Reload XML/ACL",
    "link": "/utilities/reloadxml/",
    "icon": null,
    "category": "internal",
    "protected": "true",
    "sequence": "88020",
    "description": "",
    "created": "2023-11-01T11:06:28.052Z",
    "updated": "2023-11-01T11:06:28.052Z",
    "synchronised": null,
    "updated_by": "system",
    "menu_id": "5dc0b38c-7522-4c25-a2b9-d6f34d9828e3",
    "parent_id": "b9ac0610-d2a8-4baf-b5be-d0fba24fbc6e"
  },
  {
    "id": "b302f210-a78f-4b6d-966a-342a8fdc1685",
    "title": "Send test Email",
    "link": "/utilities/testemail/",
    "icon": null,
    "category": "internal",
    "protected": "true",
    "sequence": "88030",
    "description": "",
    "created": "2024-04-04T14:31:33.499Z",
    "updated": "2024-04-04T14:31:33.499Z",
    "synchronised": null,
    "updated_by": "system",
    "menu_id": "5dc0b38c-7522-4c25-a2b9-d6f34d9828e3",
    "parent_id": "b9ac0610-d2a8-4baf-b5be-d0fba24fbc6e"
  },
  {
    "id": "b6824ee2-79b5-48d1-9f7c-faaa2ed369bb",
    "title": "Call Centres",
    "link": "/callcentres/ccqueues/",
    "icon": null,
    "category": "internal",
    "protected": "true",
    "sequence": "30015",
    "description": "",
    "created": "2023-12-16T13:21:57.720Z",
    "updated": "2023-12-16T17:25:36.727Z",
    "synchronised": null,
    "updated_by": "system",
    "menu_id": "5dc0b38c-7522-4c25-a2b9-d6f34d9828e3",
    "parent_id": "73ce309c-95ee-45fe-9e69-919b61a855f8"
  },
  {
    "id": "044c37b4-e987-44db-a06e-4479524c48fb",
    "title": "dasboard",
    "link": null,
    "icon": null,
    "category": "internal",
    "protected": "true",
    "sequence": "10",
    "description": "",
    "created": "2024-10-13T19:13:37.826Z",
    "updated": "2024-10-13T19:13:37.826Z",
    "synchronised": null,
    "updated_by": "admin",
    "menu_id": "2176f15a-9656-43e9-847f-84aaec6d04a7",
    "parent_id": "1ef968ae-5640-418f-a888-876dc489ca8b"
  }
],
      skipDuplicates: true,
    });

    // Seeding pbx_menu_item_groups
    await prisma.pbx_menu_item_groups.createMany({
      data: [
  {
    "id": "31567113-6370-4f4f-9106-d8ae71abce29",
    "name": "user",
    "created": "2022-11-29T22:50:55.186Z",
    "updated": "2022-11-29T22:50:55.186Z",
    "synchronised": null,
    "updated_by": "system",
    "group_id": 23,
    "menu_item_id": "5463cd68-035a-4d5e-9cc7-00391ecb0658"
  },
  {
    "id": "e2d67596-fe41-4676-803e-e839a42c3704",
    "name": "user",
    "created": "2022-11-29T22:50:22.275Z",
    "updated": "2022-11-29T22:50:22.275Z",
    "synchronised": null,
    "updated_by": "system",
    "group_id": 23,
    "menu_item_id": "1d13580a-3004-4f70-a159-5798103429b2"
  },
  {
    "id": "e54d5aeb-e340-45b7-b235-959f4a1a1912",
    "name": "user",
    "created": "2022-12-11T20:01:53.071Z",
    "updated": "2022-12-11T20:01:53.071Z",
    "synchronised": null,
    "updated_by": "system",
    "group_id": 23,
    "menu_item_id": "73ce309c-95ee-45fe-9e69-919b61a855f8"
  },
  {
    "id": "31ccc6b5-18c9-433b-8efa-0a71e27eb8cf",
    "name": "user",
    "created": "2023-11-26T11:54:17.587Z",
    "updated": "2023-11-26T11:54:17.587Z",
    "synchronised": null,
    "updated_by": "system",
    "group_id": 23,
    "menu_item_id": "915f0fd9-5b6d-4530-9b5b-099ba9a1bbe7"
  },
  {
    "id": "651e18a4-0b20-4537-9831-e0502802c4f7",
    "name": "user",
    "created": "2023-11-26T11:56:15.210Z",
    "updated": "2023-11-26T11:56:15.210Z",
    "synchronised": null,
    "updated_by": "system",
    "group_id": 23,
    "menu_item_id": "77e9b93a-af73-4a78-a052-8e8bff8a442c"
  },
  {
    "id": "6f2e0778-876d-413d-88f1-21cafc68ff3e",
    "name": "user",
    "created": "2022-12-11T18:43:19.834Z",
    "updated": "2022-12-11T18:43:19.834Z",
    "synchronised": null,
    "updated_by": "system",
    "group_id": 23,
    "menu_item_id": "ff25c281-dd24-44c9-b014-2ebf2f19a6cc"
  },
  {
    "id": "451faed9-31ec-442a-b602-f24fad4241dd",
    "name": "user",
    "created": "2022-12-11T20:01:22.465Z",
    "updated": "2022-12-11T20:01:22.466Z",
    "synchronised": null,
    "updated_by": "system",
    "group_id": 23,
    "menu_item_id": "3ffc2da6-4f43-4fba-8066-a527acf09600"
  },
  {
    "id": "e8a9cc9b-c7b0-4b3d-9707-092fcc354025",
    "name": "user",
    "created": "2022-12-19T13:06:25.084Z",
    "updated": "2022-12-19T13:06:25.084Z",
    "synchronised": null,
    "updated_by": "system",
    "group_id": 23,
    "menu_item_id": "1ef968ae-5640-418f-a888-876dc489ca8b"
  },
  {
    "id": "06b06aab-5b48-4110-8b62-5edb7fc80cb2",
    "name": "user",
    "created": "2023-12-03T16:51:45.971Z",
    "updated": "2023-12-03T16:51:45.971Z",
    "synchronised": null,
    "updated_by": "system",
    "group_id": 23,
    "menu_item_id": "9649fa84-a4ce-4de9-946a-2266c91b2bc3"
  },
  {
    "id": "70b054d7-e3a5-47b6-9676-50e80fea926a",
    "name": "ringgroup_adm",
    "created": "2023-12-03T17:42:00.989Z",
    "updated": "2023-12-03T17:42:00.989Z",
    "synchronised": null,
    "updated_by": "system",
    "group_id": 16,
    "menu_item_id": "be939b6f-fd81-4a08-a5a1-7e33cdb03d56"
  },
  {
    "id": "9da4bbd8-d473-4015-afe9-fc0718743bea",
    "name": "ringgroup_fwd",
    "created": "2023-12-03T17:42:00.991Z",
    "updated": "2023-12-03T17:42:00.991Z",
    "synchronised": null,
    "updated_by": "system",
    "group_id": 17,
    "menu_item_id": "be939b6f-fd81-4a08-a5a1-7e33cdb03d56"
  },
  {
    "id": "e144a7b5-8be9-4ff6-9540-44fa3632de88",
    "name": "call_centre_view",
    "created": "2023-12-16T13:25:17.996Z",
    "updated": "2023-12-16T13:25:17.996Z",
    "synchronised": null,
    "updated_by": "system",
    "group_id": 27,
    "menu_item_id": "b6824ee2-79b5-48d1-9f7c-faaa2ed369bb"
  },
  {
    "id": "f1872ad1-df50-416a-b7d9-1f4ce1ea6b52",
    "name": "wallboard",
    "created": "2023-12-16T13:21:57.722Z",
    "updated": "2023-12-16T13:21:57.722Z",
    "synchronised": null,
    "updated_by": "system",
    "group_id": 20,
    "menu_item_id": "b6824ee2-79b5-48d1-9f7c-faaa2ed369bb"
  }
],
      skipDuplicates: true,
    });

    // Seeding pbx_domains
    await prisma.pbx_domains.createMany({
      data: [
  {
    "id": "ae639904-abb0-4b49-a9a2-3d2c0a04c3ce",
    "name": "test1.lifesprintcare.ca",
    "enabled": "true",
    "description": null,
    "created": "2024-10-13T19:02:19.352Z",
    "updated": "2024-10-13T19:17:10.784Z",
    "synchronised": null,
    "updated_by": "admin",
    "home_switch": "localhost",
    "menu_id_id": "5dc0b38c-7522-4c25-a2b9-d6f34d9828e3",
    "portal_name": "portal-test1.lifesprintcare.ca"
  },
  {
    "id": "5f366b32-7e4f-49ec-8eee-d648a4817db3",
    "name": "sparks.lifesprintcare.ca",
    "enabled": "true",
    "description": null,
    "created": "2024-10-13T19:38:08.294Z",
    "updated": "2024-10-13T19:38:08.294Z",
    "synchronised": null,
    "updated_by": "admin",
    "home_switch": "vm-pbx",
    "menu_id_id": "5dc0b38c-7522-4c25-a2b9-d6f34d9828e3",
    "portal_name": "2e4d42bf-8a09-4324-9661-d2ee8e991dad.com"
  },
  {
    "id": "4c49094b-64d8-4131-805c-8717cb9217e0",
    "name": "hisense.lifesprintcare.ca",
    "enabled": "true",
    "description": null,
    "created": "2024-10-13T19:49:30.661Z",
    "updated": "2024-10-13T19:49:30.661Z",
    "synchronised": null,
    "updated_by": "admin",
    "home_switch": "vm-pbx",
    "menu_id_id": "5dc0b38c-7522-4c25-a2b9-d6f34d9828e3",
    "portal_name": "87e0b430-a614-4fa4-9437-b1455ae2ca9b.com"
  },
  {
    "id": "eaaaa373-ad68-4b7b-832f-9e99534be89e",
    "name": "hp",
    "enabled": "true",
    "description": null,
    "created": "2024-10-14T17:35:20.715Z",
    "updated": "2024-10-14T17:35:20.715Z",
    "synchronised": null,
    "updated_by": "admin",
    "home_switch": "vm-pbx",
    "menu_id_id": null,
    "portal_name": "a049c291-3c9e-4fa5-b2ef-7b8d43c821f2.com"
  },
  {
    "id": "f8be6b61-0f14-4828-881c-d0656c2ae2be",
    "name": "tenant1",
    "enabled": "true",
    "description": null,
    "created": "2024-10-14T17:37:32.018Z",
    "updated": "2024-10-14T17:37:32.018Z",
    "synchronised": null,
    "updated_by": "admin",
    "home_switch": "vm-pbx",
    "menu_id_id": null,
    "portal_name": "370ebb66-e96e-4c66-9874-aea7391d4ce9.com"
  },
  {
    "id": "24c3b5b8-e0d7-4595-b672-8e2a2d0c9c1f",
    "name": "tenant1.lifesprintcare.ca",
    "enabled": "true",
    "description": null,
    "created": "2024-10-14T17:39:10.031Z",
    "updated": "2024-10-14T17:39:10.031Z",
    "synchronised": null,
    "updated_by": "admin",
    "home_switch": "vm-pbx",
    "menu_id_id": null,
    "portal_name": "50f986f0-d0e9-4449-b510-14b383474d04.com"
  },
  {
    "id": "ad3e5a93-4618-4ebc-95ab-228e6281ff21",
    "name": "tenant2.lifesprintcare.ca",
    "enabled": "true",
    "description": null,
    "created": "2024-10-14T17:41:22.213Z",
    "updated": "2024-10-14T17:41:22.213Z",
    "synchronised": null,
    "updated_by": "admin",
    "home_switch": "vm-pbx",
    "menu_id_id": "5dc0b38c-7522-4c25-a2b9-d6f34d9828e3",
    "portal_name": "cb52815e-e5b7-4af8-889d-d7615a4b95f8.com"
  },
  {
    "id": "d65d1043-b86d-4a6b-adf9-97f67160ef4d",
    "name": "serra.lifesprintcare.ca",
    "enabled": "true",
    "description": null,
    "created": "2024-10-14T17:48:01.658Z",
    "updated": "2024-10-14T17:48:13.206Z",
    "synchronised": null,
    "updated_by": "admin",
    "home_switch": "vm-pbx",
    "menu_id_id": "2176f15a-9656-43e9-847f-84aaec6d04a7",
    "portal_name": "serra.pbxportal.ca"
  },
  {
    "id": "ce93878b-e612-4311-8204-a41a78c6f24a",
    "name": "adc.vogatpbx.com",
    "enabled": "true",
    "description": "Domain for adc",
    "created": "2024-11-05T16:17:57.576Z",
    "updated": "2024-11-05T16:17:57.576Z",
    "synchronised": null,
    "updated_by": "system",
    "home_switch": "default",
    "menu_id_id": null,
    "portal_name": "adc"
  },
  {
    "id": "38174b52-221c-441e-ab40-0de2f30d9d5d",
    "name": "matter.vogat.com",
    "enabled": "true",
    "description": "Domain for matter",
    "created": "2024-11-05T17:53:07.616Z",
    "updated": "2024-11-05T17:53:07.616Z",
    "synchronised": null,
    "updated_by": "system",
    "home_switch": "default",
    "menu_id_id": null,
    "portal_name": "matter"
  },
  {
    "id": "810d5610-2558-4b56-bd6d-9e9355955e91",
    "name": "call.vogat.com",
    "enabled": "true",
    "description": "Domain for call",
    "created": "2024-11-05T17:56:39.142Z",
    "updated": "2024-11-05T17:56:39.142Z",
    "synchronised": null,
    "updated_by": "system",
    "home_switch": "default",
    "menu_id_id": null,
    "portal_name": "call"
  },
  {
    "id": "722aa398-4e48-4ae4-9c23-40e1e791194c",
    "name": "long.vogat.com",
    "enabled": "true",
    "description": "Domain for long",
    "created": "2024-11-05T18:08:29.402Z",
    "updated": "2024-11-05T18:08:29.402Z",
    "synchronised": null,
    "updated_by": "system",
    "home_switch": "default",
    "menu_id_id": null,
    "portal_name": "long"
  },
  {
    "id": "3b174aef-286e-4d88-96c7-109fe1be66a0",
    "name": "close.vogat.com",
    "enabled": "true",
    "description": "Domain for close",
    "created": "2024-11-05T18:14:40.202Z",
    "updated": "2024-11-05T18:14:40.202Z",
    "synchronised": null,
    "updated_by": "system",
    "home_switch": "default",
    "menu_id_id": null,
    "portal_name": "close"
  },
  {
    "id": "14e90fd6-18a6-4022-b7f4-823649d9c162",
    "name": "yes.vogat.com",
    "enabled": "true",
    "description": "Domain for yes",
    "created": "2024-11-05T18:21:57.027Z",
    "updated": "2024-11-05T18:21:57.027Z",
    "synchronised": null,
    "updated_by": "system",
    "home_switch": "default",
    "menu_id_id": null,
    "portal_name": "yes"
  },
  {
    "id": "153442ad-0ca2-4083-a436-7e4af6e8be10",
    "name": "chance.vogat.com",
    "enabled": "true",
    "description": "Domain for chance",
    "created": "2024-11-05T18:29:38.052Z",
    "updated": "2024-11-05T18:29:38.052Z",
    "synchronised": null,
    "updated_by": "system",
    "home_switch": "default",
    "menu_id_id": null,
    "portal_name": "chance"
  },
  {
    "id": "9786e709-a064-4bde-baa2-bc166356d621",
    "name": "here.vogat.com",
    "enabled": "true",
    "description": "Domain for here",
    "created": "2024-11-05T18:30:56.206Z",
    "updated": "2024-11-05T18:30:56.206Z",
    "synchronised": null,
    "updated_by": "system",
    "home_switch": "default",
    "menu_id_id": null,
    "portal_name": "here"
  },
  {
    "id": "84b9198d-368a-4fd3-8f69-e62e18ca0dab",
    "name": "thanks.vogat.com",
    "enabled": "true",
    "description": "Domain for thanks",
    "created": "2024-11-05T18:35:17.344Z",
    "updated": "2024-11-05T18:35:17.344Z",
    "synchronised": null,
    "updated_by": "system",
    "home_switch": "default",
    "menu_id_id": null,
    "portal_name": "thanks"
  },
  {
    "id": "eb2a1b3f-8c00-4134-bc75-623a5a405d5f",
    "name": "rent.vogat.com",
    "enabled": "true",
    "description": "Domain for rent",
    "created": "2024-11-05T18:41:06.327Z",
    "updated": "2024-11-05T18:41:06.327Z",
    "synchronised": null,
    "updated_by": "system",
    "home_switch": "default",
    "menu_id_id": null,
    "portal_name": "rent"
  },
  {
    "id": "587636a4-df27-446f-b795-d95e9da2d3e3",
    "name": "voting.vogat.com",
    "enabled": "true",
    "description": "Domain for voting",
    "created": "2024-11-05T18:47:18.574Z",
    "updated": "2024-11-05T18:47:18.574Z",
    "synchronised": null,
    "updated_by": "system",
    "home_switch": "default",
    "menu_id_id": null,
    "portal_name": "voting"
  },
  {
    "id": "73d391ad-664d-4b6b-b36d-529da407858d",
    "name": "try.vogat.com",
    "enabled": "true",
    "description": "Domain for try",
    "created": "2024-11-05T19:07:01.106Z",
    "updated": "2024-11-05T19:07:01.106Z",
    "synchronised": null,
    "updated_by": "system",
    "home_switch": "default",
    "menu_id_id": null,
    "portal_name": "try"
  },
  {
    "id": "0ac77bb2-0f3d-46e8-b32e-78c5486f96fc",
    "name": "both.vogat.com",
    "enabled": "true",
    "description": "Domain for both",
    "created": "2024-11-05T19:09:48.551Z",
    "updated": "2024-11-05T19:09:48.551Z",
    "synchronised": null,
    "updated_by": "system",
    "home_switch": "default",
    "menu_id_id": null,
    "portal_name": "both"
  },
  {
    "id": "cd78332c-e036-4c4b-a773-0065cd123bb0",
    "name": "pitts.vogat.com",
    "enabled": "true",
    "description": "Domain for pitts",
    "created": "2024-11-05T19:18:49.737Z",
    "updated": "2024-11-05T19:18:49.737Z",
    "synchronised": null,
    "updated_by": "system",
    "home_switch": "default",
    "menu_id_id": null,
    "portal_name": "pitts"
  },
  {
    "id": "fa2d0f2c-55b7-417d-99dd-c7d4d605c19b",
    "name": "gop.vogat.com",
    "enabled": "true",
    "description": "Domain for gop",
    "created": "2024-11-05T19:21:38.187Z",
    "updated": "2024-11-05T19:21:38.187Z",
    "synchronised": null,
    "updated_by": "system",
    "home_switch": "default",
    "menu_id_id": null,
    "portal_name": "gop"
  },
  {
    "id": "b636d72b-20a2-4cdf-8a20-686d16443531",
    "name": "uuid.vogat.com",
    "enabled": "true",
    "description": "Domain for uuid",
    "created": "2024-11-05T19:23:31.152Z",
    "updated": "2024-11-05T19:23:31.152Z",
    "synchronised": null,
    "updated_by": "system",
    "home_switch": "default",
    "menu_id_id": null,
    "portal_name": "uuid"
  },
  {
    "id": "459a4201-8890-4de6-81e8-9fb281bea9be",
    "name": "win.vogat.com",
    "enabled": "true",
    "description": "Domain for win",
    "created": "2024-11-05T19:26:57.673Z",
    "updated": "2024-11-05T19:26:57.673Z",
    "synchronised": null,
    "updated_by": "system",
    "home_switch": "default",
    "menu_id_id": null,
    "portal_name": "win"
  },
  {
    "id": "54f44e19-49c7-4c06-929f-b09395eb18fb",
    "name": "good.vogat.com",
    "enabled": "true",
    "description": "Domain for good",
    "created": "2024-11-05T19:37:38.951Z",
    "updated": "2024-11-05T19:37:38.951Z",
    "synchronised": null,
    "updated_by": "system",
    "home_switch": "default",
    "menu_id_id": null,
    "portal_name": "good"
  },
  {
    "id": "b80fd668-70b9-499b-b52e-80bfaff33285",
    "name": "debate.vogat.com",
    "enabled": "true",
    "description": "Domain for debate",
    "created": "2024-11-05T19:55:26.697Z",
    "updated": "2024-11-05T19:55:26.697Z",
    "synchronised": null,
    "updated_by": "system",
    "home_switch": "default",
    "menu_id_id": null,
    "portal_name": "debate"
  },
  {
    "id": "2a7f0cc4-75f7-4466-b1c5-757cf93cef94",
    "name": "now.vogat.com",
    "enabled": "true",
    "description": "Domain for now",
    "created": "2024-11-05T20:00:57.077Z",
    "updated": "2024-11-05T20:00:57.077Z",
    "synchronised": null,
    "updated_by": "system",
    "home_switch": "default",
    "menu_id_id": null,
    "portal_name": "now"
  },
  {
    "id": "b16f4738-d482-4360-b0d5-16286f8208df",
    "name": "from.vogat.com",
    "enabled": "true",
    "description": "Domain for from",
    "created": "2024-11-05T20:02:25.036Z",
    "updated": "2024-11-05T20:02:25.036Z",
    "synchronised": null,
    "updated_by": "system",
    "home_switch": "default",
    "menu_id_id": null,
    "portal_name": "from"
  },
  {
    "id": "00f4577d-5a20-4d65-a573-54eaac1a15d4",
    "name": "audi.vogat.com",
    "enabled": "true",
    "description": "Domain for audi",
    "created": "2024-11-05T20:07:13.445Z",
    "updated": "2024-11-05T20:07:13.445Z",
    "synchronised": null,
    "updated_by": "system",
    "home_switch": "default",
    "menu_id_id": null,
    "portal_name": "audi"
  },
  {
    "id": "05774a43-2619-4a9c-ac84-49a72e095e00",
    "name": "secure.vogat.com",
    "enabled": "true",
    "description": "Domain for secure",
    "created": "2024-11-05T20:15:58.819Z",
    "updated": "2024-11-05T20:15:58.819Z",
    "synchronised": null,
    "updated_by": "system",
    "home_switch": "default",
    "menu_id_id": null,
    "portal_name": "secure"
  },
  {
    "id": "02528e7c-e3e2-4b09-bcb4-ea034e84211f",
    "name": "elect.vogat.com",
    "enabled": "true",
    "description": "Domain for elect",
    "created": "2024-11-05T20:17:43.042Z",
    "updated": "2024-11-05T20:17:43.042Z",
    "synchronised": null,
    "updated_by": "system",
    "home_switch": "default",
    "menu_id_id": null,
    "portal_name": "elect"
  },
  {
    "id": "73463ce8-5661-4f18-8c3c-8e645ba24475",
    "name": "local.vogat.com",
    "enabled": "true",
    "description": "Domain for local",
    "created": "2024-11-05T20:20:27.295Z",
    "updated": "2024-11-05T20:20:27.295Z",
    "synchronised": null,
    "updated_by": "system",
    "home_switch": "default",
    "menu_id_id": null,
    "portal_name": "local"
  },
  {
    "id": "0afbd344-9465-49b4-a025-5c6e108fca2b",
    "name": "return.vogat.com",
    "enabled": "true",
    "description": "Domain for return",
    "created": "2024-11-05T20:31:58.714Z",
    "updated": "2024-11-05T20:31:58.714Z",
    "synchronised": null,
    "updated_by": "system",
    "home_switch": "default",
    "menu_id_id": null,
    "portal_name": "return"
  },
  {
    "id": "b07f618b-02f5-4da3-931b-02c107c2e849",
    "name": "turbo.vogat.com",
    "enabled": "true",
    "description": "Domain for turbo",
    "created": "2024-11-05T20:45:03.620Z",
    "updated": "2024-11-05T20:45:03.620Z",
    "synchronised": null,
    "updated_by": "system",
    "home_switch": "default",
    "menu_id_id": null,
    "portal_name": "turbo"
  },
  {
    "id": "be78853d-4ee3-4470-8bda-729e600a272a",
    "name": "dow.vogat.com",
    "enabled": "true",
    "description": "Domain for dow",
    "created": "2024-11-05T20:52:11.329Z",
    "updated": "2024-11-05T20:52:11.329Z",
    "synchronised": null,
    "updated_by": "system",
    "home_switch": "default",
    "menu_id_id": null,
    "portal_name": "dow"
  },
  {
    "id": "d6724df3-f2c9-44df-a737-0231e5f68dca",
    "name": "she.vogat.com",
    "enabled": "true",
    "description": "Domain for she",
    "created": "2024-11-05T20:55:24.776Z",
    "updated": "2024-11-05T20:55:24.776Z",
    "synchronised": null,
    "updated_by": "system",
    "home_switch": "default",
    "menu_id_id": null,
    "portal_name": "she"
  },
  {
    "id": "7a25a001-c1a9-4fe3-a1a4-82b4bc5aa587",
    "name": "event.vogat.com",
    "enabled": "true",
    "description": "Domain for event",
    "created": "2024-11-05T20:57:19.835Z",
    "updated": "2024-11-05T20:57:19.835Z",
    "synchronised": null,
    "updated_by": "system",
    "home_switch": "default",
    "menu_id_id": null,
    "portal_name": "event"
  },
  {
    "id": "efd06897-82c8-4496-9f48-06ef3303c6c3",
    "name": "json.vogat.com",
    "enabled": "true",
    "description": "Domain for json",
    "created": "2024-11-05T21:08:29.620Z",
    "updated": "2024-11-05T21:08:29.620Z",
    "synchronised": null,
    "updated_by": "system",
    "home_switch": "default",
    "menu_id_id": null,
    "portal_name": "json"
  },
  {
    "id": "b70589fe-6134-4661-8c77-fab38d710e44",
    "name": "localhost",
    "enabled": "true",
    "description": "Domain for localhost",
    "created": "2024-11-07T22:38:54.172Z",
    "updated": "2024-11-07T22:38:54.172Z",
    "synchronised": null,
    "updated_by": "system",
    "home_switch": "default",
    "menu_id_id": null,
    "portal_name": "localhost"
  },
  {
    "id": "d6fc18bc-7028-4467-8725-cfeb2ff8ed89",
    "name": "vgtpbx.dev",
    "enabled": "true",
    "description": "Domain for vgtpbx",
    "created": "2024-11-05T21:12:16.206Z",
    "updated": "2024-11-05T21:12:16.206Z",
    "synchronised": null,
    "updated_by": "system",
    "home_switch": "default",
    "menu_id_id": null,
    "portal_name": "vgtpbx"
  }
],
      skipDuplicates: true,
    });

    // Seeding pbx_domain_settings
    await prisma.pbx_domain_settings.createMany({
      data: [
  {
    "id": "b8a6d3f9-683f-4dee-93ff-d3d5560474a0",
    "app_uuid": null,
    "category": "domain",
    "subcategory": "menu",
    "value_type": "text",
    "value": null,
    "sequence": "10",
    "enabled": "true",
    "description": null,
    "created": "2024-10-13T23:38:28.998Z",
    "updated": "2024-10-13T23:38:28.998Z",
    "synchronised": null,
    "updated_by": "admin",
    "domain_id_id": "5f366b32-7e4f-49ec-8eee-d648a4817db3"
  }
],
      skipDuplicates: true,
    });

    // Seeding pbx_email_templates
    await prisma.pbx_email_templates.createMany({
      data: [
  {
    "id": "1b6ccd30-19e7-4358-91fe-82d9708cb1aa",
    "language": "en-gb",
    "category": "voicemail",
    "subcategory": "default",
    "subject": "Voicemail from ${caller_id_name} <${caller_id_number}> ${message_duration}",
    "type": "html",
    "body": "<html>\r\n<body>\r\nFrom ${caller_id_name} <a href=\"tel:${caller_id_number}\">${caller_id_number}</a><br />\r\n<br />\r\nTo ${voicemail_name_formatted}<br />\r\nReceived ${message_date}<br />\r\nLength ${message_duration}<br />\r\nMessage ${message}<br />\r\n</body>\r\n</html>",
    "enabled": "true",
    "description": null,
    "created": "2022-11-26T16:01:20.031Z",
    "updated": "2022-11-26T16:01:20.031Z",
    "synchronised": null,
    "updated_by": "system",
    "domain_id_id": null
  },
  {
    "id": "3f6ccafb-4697-44a9-9195-2aa44c67a495",
    "language": "en-us",
    "category": "missed",
    "subcategory": "default",
    "subject": "Missed Call from {caller_id_name} <{caller_id_number}>",
    "type": "html",
    "body": "<html>\r\n<body>\r\nMissed Call from {caller_id_name} <<a href=\"tel:{caller_id_number}\">{caller_id_number}</a>> to {sip_to_user} ext {dialed_user}\r\n</body>\r\n</html>",
    "enabled": "true",
    "description": null,
    "created": "2022-11-27T20:11:18.867Z",
    "updated": "2022-11-27T20:11:18.867Z",
    "synchronised": null,
    "updated_by": "system",
    "domain_id_id": null
  },
  {
    "id": "7332b884-0f5c-4905-b5dd-14680a381a41",
    "language": "en-gb",
    "category": "voicemail",
    "subcategory": "transcritpion",
    "subject": "Voicemail from ${caller_id_name} <${caller_id_number}> ${message_duration}",
    "type": "text",
    "body": "Voicemail from ${caller_id_name} <${caller_id_number}>\r\n\r\nTo ${voicemail_name_formatted}\r\nReceived ${message_date}\r\nLength ${message_duration}\r\nMessage ${message}\r\n\r\nTranscription\r\n${message_text}",
    "enabled": "false",
    "description": null,
    "created": "2022-11-26T16:07:44.448Z",
    "updated": "2022-11-26T16:07:44.448Z",
    "synchronised": null,
    "updated_by": "system",
    "domain_id_id": null
  },
  {
    "id": "be0bc4fb-c756-4c7a-9c03-0ce8df78f067",
    "language": "en-gb",
    "category": "missed",
    "subcategory": "default",
    "subject": "Missed Call from ${caller_id_name} <${caller_id_number}>",
    "type": "text",
    "body": "Missed Call from ${caller_id_name} <${caller_id_number}> to ${sip_to_user} ext ${dialed_user}",
    "enabled": "false",
    "description": null,
    "created": "2022-11-26T16:00:00.562Z",
    "updated": "2022-11-26T16:02:14.762Z",
    "synchronised": null,
    "updated_by": "system",
    "domain_id_id": null
  },
  {
    "id": "c958731b-9dad-42ad-b0f5-f7b3ef5035b4",
    "language": "en-gb",
    "category": "voicemail",
    "subcategory": "default",
    "subject": "Voicemail from ${caller_id_name} <${caller_id_number}> ${message_duration}",
    "type": "text",
    "body": "Voicemail from ${caller_id_name} <${caller_id_number}>\r\n\r\nTo ${voicemail_name_formatted}\r\nReceived ${message_date}\r\nLength ${message_duration}\r\nMessage ${message}",
    "enabled": "false",
    "description": null,
    "created": "2022-11-26T16:03:02.885Z",
    "updated": "2022-11-26T16:03:02.885Z",
    "synchronised": null,
    "updated_by": "system",
    "domain_id_id": null
  },
  {
    "id": "ed03b8cf-1275-4a84-a91f-310ab3f7f160",
    "language": "en-gb",
    "category": "missed",
    "subcategory": "default",
    "subject": "Missed Call from {caller_id_name} <{caller_id_number}>",
    "type": "html",
    "body": "<html>\r\n<body>\r\nMissed Call from {caller_id_name} <<a href=\"tel:{caller_id_number}\">{caller_id_number}</a>> to {sip_to_user} ext {dialed_user}\r\n</body>\r\n</html>",
    "enabled": "true",
    "description": null,
    "created": "2022-11-26T15:51:25.604Z",
    "updated": "2022-11-27T19:29:18.739Z",
    "synchronised": null,
    "updated_by": "system",
    "domain_id_id": null
  },
  {
    "id": "efb5f711-9615-48f9-ab9f-929de1110b2b",
    "language": "en-gb",
    "category": "voicemail",
    "subcategory": "transcritpion",
    "subject": "Voicemail from ${caller_id_name} <${caller_id_number}> ${message_duration}",
    "type": "html",
    "body": "<html>\r\n<body>\r\nVoicemail from ${caller_id_name} <a href=\"tel:${caller_id_number}\">${caller_id_number}</a><br />\r\n<br />\r\nTo ${voicemail_name_formatted}<br />\r\nReceived ${message_date}<br />\r\nLength ${message_duration}<br />\r\nMessage ${message}<br />\r\n<br />\r\nTranscription<br />\r\n${message_text}\r\n</body>\r\n</html>",
    "enabled": "true",
    "description": null,
    "created": "2022-11-26T16:06:52.128Z",
    "updated": "2022-11-26T16:09:04.863Z",
    "synchronised": null,
    "updated_by": "system",
    "domain_id_id": null
  }
],
      skipDuplicates: true,
    });

    // Seeding pbx_extensions
    await prisma.pbx_extensions.createMany({
      data: [
  {
    "id": "5746879f-8b07-4ba7-bdd9-d64e84e2fe3c",
    "extension": "1000",
    "number_alias": null,
    "password": "CaNtFXLgfD8n",
    "accountcode": null,
    "effective_caller_id_name": null,
    "effective_caller_id_number": null,
    "outbound_caller_id_name": null,
    "outbound_caller_id_number": null,
    "emergency_caller_id_name": null,
    "emergency_caller_id_number": null,
    "directory_first_name": null,
    "directory_last_name": null,
    "directory_visible": "true",
    "directory_exten_visible": "true",
    "limit_max": "5",
    "limit_destination": "error/user_busy",
    "missed_call_app": null,
    "missed_call_data": null,
    "user_context": "sparks.lifesprintcare.ca",
    "toll_allow": null,
    "call_timeout": "300",
    "call_group": null,
    "call_screen_enabled": "false",
    "user_record": null,
    "hold_music": "local_stream://default",
    "auth_acl": null,
    "cidr": null,
    "sip_force_contact": null,
    "nibble_account": null,
    "sip_force_expires": null,
    "mwi_account": null,
    "sip_bypass_media": null,
    "unique_id": null,
    "dial_string": "",
    "dial_user": null,
    "dial_domain": null,
    "do_not_disturb": "false",
    "forward_all_destination": null,
    "forward_all_enabled": "false",
    "forward_busy_destination": null,
    "forward_busy_enabled": "false",
    "forward_no_answer_destination": null,
    "forward_no_answer_enabled": "false",
    "forward_user_not_registered_destination": null,
    "forward_user_not_registered_enabled": "false",
    "follow_me_uuid": null,
    "forward_caller_id": null,
    "follow_me_enabled": "false",
    "follow_me_destinations": null,
    "enabled": "true",
    "description": null,
    "absolute_codec_string": null,
    "force_ping": "false",
    "created": "2024-10-13T19:42:01.799Z",
    "updated": "2024-10-13T19:42:01.799Z",
    "synchronised": null,
    "updated_by": "admin",
    "domain_uuid": "5f366b32-7e4f-49ec-8eee-d648a4817db3"
  },
  {
    "id": "4ea1bbb7-586c-49bb-817a-324aecbc10a2",
    "extension": "1000",
    "number_alias": null,
    "password": "BCvWWh3H8Lek",
    "accountcode": null,
    "effective_caller_id_name": null,
    "effective_caller_id_number": null,
    "outbound_caller_id_name": null,
    "outbound_caller_id_number": null,
    "emergency_caller_id_name": null,
    "emergency_caller_id_number": null,
    "directory_first_name": null,
    "directory_last_name": null,
    "directory_visible": "true",
    "directory_exten_visible": "true",
    "limit_max": "5",
    "limit_destination": "error/user_busy",
    "missed_call_app": null,
    "missed_call_data": null,
    "user_context": "serra.lifesprintcare.ca",
    "toll_allow": null,
    "call_timeout": "300",
    "call_group": null,
    "call_screen_enabled": "false",
    "user_record": null,
    "hold_music": "local_stream://default",
    "auth_acl": null,
    "cidr": null,
    "sip_force_contact": null,
    "nibble_account": null,
    "sip_force_expires": null,
    "mwi_account": null,
    "sip_bypass_media": null,
    "unique_id": null,
    "dial_string": "",
    "dial_user": null,
    "dial_domain": null,
    "do_not_disturb": "false",
    "forward_all_destination": null,
    "forward_all_enabled": "false",
    "forward_busy_destination": null,
    "forward_busy_enabled": "false",
    "forward_no_answer_destination": null,
    "forward_no_answer_enabled": "false",
    "forward_user_not_registered_destination": null,
    "forward_user_not_registered_enabled": "false",
    "follow_me_uuid": null,
    "forward_caller_id": null,
    "follow_me_enabled": "false",
    "follow_me_destinations": null,
    "enabled": "true",
    "description": null,
    "absolute_codec_string": null,
    "force_ping": "false",
    "created": "2024-10-14T18:32:00.444Z",
    "updated": "2024-10-14T18:32:00.444Z",
    "synchronised": null,
    "updated_by": "admin",
    "domain_uuid": "d65d1043-b86d-4a6b-adf9-97f67160ef4d"
  },
  {
    "id": "8765d664-916f-4bc1-86b7-b2c1a893c9a7",
    "extension": "1000",
    "number_alias": null,
    "password": "t7V45J6Avxkh",
    "accountcode": null,
    "effective_caller_id_name": null,
    "effective_caller_id_number": null,
    "outbound_caller_id_name": null,
    "outbound_caller_id_number": null,
    "emergency_caller_id_name": null,
    "emergency_caller_id_number": null,
    "directory_first_name": null,
    "directory_last_name": null,
    "directory_visible": "true",
    "directory_exten_visible": "true",
    "limit_max": "5",
    "limit_destination": "error/user_busy",
    "missed_call_app": null,
    "missed_call_data": null,
    "user_context": "test1.lifesprintcare.ca",
    "toll_allow": null,
    "call_timeout": "300",
    "call_group": null,
    "call_screen_enabled": "false",
    "user_record": null,
    "hold_music": "local_stream://default",
    "auth_acl": null,
    "cidr": null,
    "sip_force_contact": null,
    "nibble_account": null,
    "sip_force_expires": null,
    "mwi_account": null,
    "sip_bypass_media": null,
    "unique_id": null,
    "dial_string": "",
    "dial_user": null,
    "dial_domain": null,
    "do_not_disturb": "false",
    "forward_all_destination": null,
    "forward_all_enabled": "false",
    "forward_busy_destination": null,
    "forward_busy_enabled": "false",
    "forward_no_answer_destination": null,
    "forward_no_answer_enabled": "false",
    "forward_user_not_registered_destination": null,
    "forward_user_not_registered_enabled": "false",
    "follow_me_uuid": null,
    "forward_caller_id": null,
    "follow_me_enabled": "false",
    "follow_me_destinations": null,
    "enabled": "true",
    "description": null,
    "absolute_codec_string": null,
    "force_ping": "false",
    "created": "2024-10-14T21:48:47.178Z",
    "updated": "2024-10-14T21:48:47.178Z",
    "synchronised": null,
    "updated_by": "admin",
    "domain_uuid": "ae639904-abb0-4b49-a9a2-3d2c0a04c3ce"
  },
  {
    "id": "dec51d40-8dbb-46fd-80ed-21edb6102c8d",
    "extension": "1001",
    "number_alias": null,
    "password": "HVJBa3RWZnNg",
    "accountcode": null,
    "effective_caller_id_name": null,
    "effective_caller_id_number": null,
    "outbound_caller_id_name": null,
    "outbound_caller_id_number": null,
    "emergency_caller_id_name": null,
    "emergency_caller_id_number": null,
    "directory_first_name": null,
    "directory_last_name": null,
    "directory_visible": "true",
    "directory_exten_visible": "true",
    "limit_max": "5",
    "limit_destination": "error/user_busy",
    "missed_call_app": null,
    "missed_call_data": null,
    "user_context": "test1.lifesprintcare.ca",
    "toll_allow": null,
    "call_timeout": "300",
    "call_group": null,
    "call_screen_enabled": "false",
    "user_record": null,
    "hold_music": "local_stream://default",
    "auth_acl": null,
    "cidr": null,
    "sip_force_contact": null,
    "nibble_account": null,
    "sip_force_expires": null,
    "mwi_account": null,
    "sip_bypass_media": null,
    "unique_id": null,
    "dial_string": "",
    "dial_user": null,
    "dial_domain": null,
    "do_not_disturb": "false",
    "forward_all_destination": null,
    "forward_all_enabled": "false",
    "forward_busy_destination": null,
    "forward_busy_enabled": "false",
    "forward_no_answer_destination": null,
    "forward_no_answer_enabled": "false",
    "forward_user_not_registered_destination": null,
    "forward_user_not_registered_enabled": "false",
    "follow_me_uuid": null,
    "forward_caller_id": null,
    "follow_me_enabled": "false",
    "follow_me_destinations": null,
    "enabled": "true",
    "description": null,
    "absolute_codec_string": null,
    "force_ping": "false",
    "created": "2024-10-22T18:52:09.577Z",
    "updated": "2024-10-22T18:52:09.577Z",
    "synchronised": null,
    "updated_by": "admin",
    "domain_uuid": "ae639904-abb0-4b49-a9a2-3d2c0a04c3ce"
  },
  {
    "id": "ff373cbb-e9c8-4a49-abaf-7c72090d9ec9",
    "extension": "8000",
    "number_alias": null,
    "password": "tgvbnmjhhjk",
    "accountcode": null,
    "effective_caller_id_name": null,
    "effective_caller_id_number": null,
    "outbound_caller_id_name": null,
    "outbound_caller_id_number": null,
    "emergency_caller_id_name": null,
    "emergency_caller_id_number": null,
    "directory_first_name": null,
    "directory_last_name": null,
    "directory_visible": "true",
    "directory_exten_visible": "true",
    "limit_max": null,
    "limit_destination": null,
    "missed_call_app": null,
    "missed_call_data": null,
    "user_context": "serra.lifesprintcare.ca",
    "toll_allow": null,
    "call_timeout": null,
    "call_group": null,
    "call_screen_enabled": "false",
    "user_record": null,
    "hold_music": null,
    "auth_acl": null,
    "cidr": null,
    "sip_force_contact": null,
    "nibble_account": null,
    "sip_force_expires": null,
    "mwi_account": null,
    "sip_bypass_media": null,
    "unique_id": null,
    "dial_string": null,
    "dial_user": null,
    "dial_domain": null,
    "do_not_disturb": "false",
    "forward_all_destination": null,
    "forward_all_enabled": "false",
    "forward_busy_destination": null,
    "forward_busy_enabled": "false",
    "forward_no_answer_destination": null,
    "forward_no_answer_enabled": "false",
    "forward_user_not_registered_destination": null,
    "forward_user_not_registered_enabled": "false",
    "follow_me_uuid": null,
    "forward_caller_id": null,
    "follow_me_enabled": "false",
    "follow_me_destinations": null,
    "enabled": "true",
    "description": null,
    "absolute_codec_string": null,
    "force_ping": "false",
    "created": "2024-10-28T19:52:20.421Z",
    "updated": "2024-10-28T19:52:20.421Z",
    "synchronised": null,
    "updated_by": "system",
    "domain_uuid": "d65d1043-b86d-4a6b-adf9-97f67160ef4d"
  },
  {
    "id": "7840330e-d8b3-489f-96e6-3b01ef7d37a1",
    "extension": "7890",
    "number_alias": null,
    "password": "gbhnjuytg",
    "accountcode": null,
    "effective_caller_id_name": null,
    "effective_caller_id_number": null,
    "outbound_caller_id_name": null,
    "outbound_caller_id_number": null,
    "emergency_caller_id_name": null,
    "emergency_caller_id_number": null,
    "directory_first_name": null,
    "directory_last_name": null,
    "directory_visible": "true",
    "directory_exten_visible": "true",
    "limit_max": null,
    "limit_destination": null,
    "missed_call_app": null,
    "missed_call_data": null,
    "user_context": "serra.lifesprintcare.ca",
    "toll_allow": null,
    "call_timeout": null,
    "call_group": null,
    "call_screen_enabled": "false",
    "user_record": null,
    "hold_music": null,
    "auth_acl": null,
    "cidr": null,
    "sip_force_contact": null,
    "nibble_account": null,
    "sip_force_expires": null,
    "mwi_account": null,
    "sip_bypass_media": null,
    "unique_id": null,
    "dial_string": null,
    "dial_user": null,
    "dial_domain": null,
    "do_not_disturb": "false",
    "forward_all_destination": null,
    "forward_all_enabled": "false",
    "forward_busy_destination": null,
    "forward_busy_enabled": "false",
    "forward_no_answer_destination": null,
    "forward_no_answer_enabled": "false",
    "forward_user_not_registered_destination": null,
    "forward_user_not_registered_enabled": "false",
    "follow_me_uuid": null,
    "forward_caller_id": null,
    "follow_me_enabled": "false",
    "follow_me_destinations": null,
    "enabled": "true",
    "description": null,
    "absolute_codec_string": null,
    "force_ping": "false",
    "created": "2024-10-30T04:45:30.608Z",
    "updated": "2024-10-30T04:45:30.608Z",
    "synchronised": null,
    "updated_by": "system",
    "domain_uuid": "d65d1043-b86d-4a6b-adf9-97f67160ef4d"
  }
],
      skipDuplicates: true,
    });

    // Seeding pbx_gateways
    await prisma.pbx_gateways.createMany({
      data: [
  {
    "id": "926c30a5-bea1-424f-a5e2-81fab463c8a0",
    "gateway": "lifesprint",
    "username": "9lifesprint999",
    "password": "123456k",
    "distinct_to": null,
    "auth_username": null,
    "realm": "sips.lifesprintcare.ca",
    "from_user": null,
    "from_domain": null,
    "proxy": "sips.lifesprintcare.ca",
    "register_proxy": null,
    "outbound_proxy": null,
    "expire_seconds": "1800",
    "register": "true",
    "register_transport": null,
    "retry_seconds": "30",
    "extension": "auto_to_user",
    "ping": null,
    "caller_id_in_from": null,
    "supress_cng": null,
    "sip_cid_type": null,
    "codec_prefs": null,
    "channels": "0",
    "extension_in_contact": null,
    "context": "public",
    "profile": "external",
    "hostname": null,
    "enabled": "true",
    "description": null,
    "created": "2024-10-13T19:31:47.633Z",
    "updated": "2024-10-13T19:31:57.787Z",
    "synchronised": null,
    "updated_by": "admin",
    "domain_uuid": "ae639904-abb0-4b49-a9a2-3d2c0a04c3ce"
  },
  {
    "id": "c5cd8712-e28a-4d0b-a85f-775d94b816ea",
    "gateway": "getaway-test",
    "username": null,
    "password": null,
    "distinct_to": null,
    "auth_username": null,
    "realm": null,
    "from_user": null,
    "from_domain": null,
    "proxy": "sips.lifesprintcare.ca:6050",
    "register_proxy": null,
    "outbound_proxy": null,
    "expire_seconds": "1800",
    "register": "false",
    "register_transport": null,
    "retry_seconds": "30",
    "extension": "auto_to_user",
    "ping": null,
    "caller_id_in_from": null,
    "supress_cng": null,
    "sip_cid_type": null,
    "codec_prefs": null,
    "channels": "0",
    "extension_in_contact": null,
    "context": "public",
    "profile": "external",
    "hostname": null,
    "enabled": "true",
    "description": null,
    "created": "2024-10-22T18:56:23.982Z",
    "updated": "2024-10-22T18:56:23.982Z",
    "synchronised": null,
    "updated_by": "admin",
    "domain_uuid": "ae639904-abb0-4b49-a9a2-3d2c0a04c3ce"
  }
],
      skipDuplicates: true,
    });

    // Seeding pbx_modules
    await prisma.pbx_modules.createMany({
      data: [
  {
    "id": "027bde5c-da2d-4974-b3d6-f5e51a768f5e",
    "label": "ESF",
    "name": "mod_esf",
    "category": "Applications",
    "sequence": "800",
    "enabled": "true",
    "default_enabled": "true",
    "description": "Holds the multi cast paging application for SIP.",
    "created": "2022-12-08T10:03:51.252Z",
    "updated": "2022-12-08T10:03:51.252Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "097d7813-d690-4fd2-9e68-c7bc719666f8",
    "label": "Amrwb",
    "name": "mod_amrwb",
    "category": "Auto",
    "sequence": "800",
    "enabled": "false",
    "default_enabled": "false",
    "description": "",
    "created": "2022-12-08T10:03:51.076Z",
    "updated": "2022-12-08T10:03:51.076Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "09eb06db-f9ff-4a11-9da8-01981677b8bb",
    "label": "Codec2",
    "name": "mod_codec2",
    "category": "Auto",
    "sequence": "800",
    "enabled": "false",
    "default_enabled": "false",
    "description": "",
    "created": "2022-12-08T10:03:51.270Z",
    "updated": "2022-12-08T10:03:51.270Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "0a9dbcd7-3764-4a4d-ae83-2b244f6f45f0",
    "label": "Portuguese",
    "name": "mod_say_pt",
    "category": "Say",
    "sequence": "800",
    "enabled": "false",
    "default_enabled": "false",
    "description": null,
    "created": "2022-12-08T10:03:50.911Z",
    "updated": "2022-12-08T10:30:30.533Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "0ec6cf75-fccf-4bb0-aeff-5a08b29af925",
    "label": "Hash",
    "name": "mod_hash",
    "category": "Applications",
    "sequence": "800",
    "enabled": "true",
    "default_enabled": "true",
    "description": "Resource limitation.",
    "created": "2022-12-08T10:03:50.944Z",
    "updated": "2022-12-08T10:03:50.944Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "12ccc42f-22bc-4155-849a-22d7ff2e197f",
    "label": "Curl",
    "name": "mod_curl",
    "category": "Applications",
    "sequence": "800",
    "enabled": "true",
    "default_enabled": "true",
    "description": "This application allows one to make a HTTP request and receive the response.",
    "created": "2023-01-08T13:21:12.534Z",
    "updated": "2023-01-08T13:21:12.534Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "18f80ba3-551f-488d-9722-2225135938fb",
    "label": "Png",
    "name": "mod_png",
    "category": "Auto",
    "sequence": "800",
    "enabled": "false",
    "default_enabled": "false",
    "description": "",
    "created": "2022-12-08T10:03:51.065Z",
    "updated": "2022-12-08T10:03:51.065Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "1a12ffac-05cd-4b6a-9252-c53bce0f48d9",
    "label": "SpanDSP",
    "name": "mod_spandsp",
    "category": "Applications",
    "sequence": "800",
    "enabled": "true",
    "default_enabled": "true",
    "description": "FAX provides fax send and receive.",
    "created": "2022-12-08T10:03:50.950Z",
    "updated": "2022-12-08T11:00:14.280Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "230852b9-acc1-44e1-b185-1f5c56e01931",
    "label": "BV",
    "name": "mod_bv",
    "category": "Codecs",
    "sequence": "800",
    "enabled": "false",
    "default_enabled": "true",
    "description": "BroadVoice16 and BroadVoice32 audio codecs.",
    "created": "2022-12-08T10:03:51.010Z",
    "updated": "2022-12-08T10:03:51.010Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "236bc67b-ff1c-45a7-90b5-97a1fcf3fd1f",
    "label": "Json Cdr",
    "name": "mod_json_cdr",
    "category": "Auto",
    "sequence": "800",
    "enabled": "false",
    "default_enabled": "false",
    "description": "",
    "created": "2022-12-08T10:03:51.021Z",
    "updated": "2022-12-08T10:03:51.021Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "2478d5ad-b804-432c-8f81-d7ad7096cb86",
    "label": "Commands",
    "name": "mod_commands",
    "category": "Applications",
    "sequence": "100",
    "enabled": "true",
    "default_enabled": "true",
    "description": "API interface commands.",
    "created": "2022-12-08T10:03:51.214Z",
    "updated": "2022-12-08T10:03:51.214Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "268c094c-d7bc-4323-8493-2a42ce66b672",
    "label": "Call Center",
    "name": "mod_callcenter",
    "category": "Applications",
    "sequence": "800",
    "enabled": "true",
    "default_enabled": "true",
    "description": "Call queuing with agents and tiers for call centers.",
    "created": "2022-12-08T10:03:51.148Z",
    "updated": "2022-12-08T10:03:51.148Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "2e66ece8-e71b-4083-b9a9-19fead5836e7",
    "label": "Chinese",
    "name": "mod_say_zh",
    "category": "Say",
    "sequence": "800",
    "enabled": "false",
    "default_enabled": "false",
    "description": null,
    "created": "2022-12-08T10:03:51.038Z",
    "updated": "2022-12-08T10:30:55.034Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "34d8e493-442f-4816-8bed-6a3bd4dcf619",
    "label": "Native File",
    "name": "mod_native_file",
    "category": "File Format Interfaces",
    "sequence": "800",
    "enabled": "true",
    "default_enabled": "true",
    "description": "File interface for codec specific file formats.",
    "created": "2022-12-08T10:03:51.154Z",
    "updated": "2022-12-08T10:03:51.154Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "35f76a3d-e80a-4826-a80d-67d0316b11af",
    "label": "CID Lookup",
    "name": "mod_cidlookup",
    "category": "Applications",
    "sequence": "800",
    "enabled": "false",
    "default_enabled": "false",
    "description": "Lookup caller id info.",
    "created": "2022-12-08T10:03:50.938Z",
    "updated": "2022-12-08T10:03:50.938Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "3ab1ecec-0b18-43e7-ac4f-7167066bc22f",
    "label": "Dialplan Plan Tools",
    "name": "mod_dptools",
    "category": "Applications",
    "sequence": "800",
    "enabled": "true",
    "default_enabled": "true",
    "description": "Provides a number of apps and utilities for the dialplan.",
    "created": "2022-12-08T10:03:51.198Z",
    "updated": "2022-12-08T10:03:51.198Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "3b22d613-bb1e-4f1b-8fb9-d4b2925f5786",
    "label": "TTS Commandline",
    "name": "mod_tts_commandline",
    "category": "Speech Recognition / Text to Speech",
    "sequence": "800",
    "enabled": "false",
    "default_enabled": "true",
    "description": "Commandline text to speech engine.",
    "created": "2022-12-08T10:03:51.245Z",
    "updated": "2022-12-08T10:03:51.245Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "3dc73c75-0307-49eb-8fea-e7087d469576",
    "label": "G.729",
    "name": "mod_g729",
    "category": "Codecs",
    "sequence": "800",
    "enabled": "true",
    "default_enabled": "true",
    "description": "G729 codec supports passthrough mode",
    "created": "2022-12-08T10:03:51.293Z",
    "updated": "2022-12-08T10:03:51.293Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "3e95f4c0-b96a-4741-a27a-cdc88e9da13e",
    "label": "G.723.1",
    "name": "mod_g723_1",
    "category": "Codecs",
    "sequence": "800",
    "enabled": "true",
    "default_enabled": "true",
    "description": "G.723.1 codec.",
    "created": "2022-12-08T10:03:51.181Z",
    "updated": "2022-12-08T10:03:51.181Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "453c067a-8912-4c61-b65d-ee8f0addf4b4",
    "label": "Say Fa",
    "name": "mod_say_fa",
    "category": "Auto",
    "sequence": "800",
    "enabled": "false",
    "default_enabled": "false",
    "description": "",
    "created": "2022-12-08T10:03:50.900Z",
    "updated": "2022-12-08T10:03:50.900Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "480a1c51-6600-4d6c-ae96-82aa108c73ef",
    "label": "Opus",
    "name": "mod_opus",
    "category": "Codecs",
    "sequence": "800",
    "enabled": "false",
    "default_enabled": "false",
    "description": "OPUS ultra-low delay audio codec",
    "created": "2022-12-08T10:03:51.170Z",
    "updated": "2022-12-08T10:03:51.170Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "487aadb9-dd0b-4a57-8cee-b8e544bd90c8",
    "label": "Pgsql",
    "name": "mod_pgsql",
    "category": "Auto",
    "sequence": "800",
    "enabled": "false",
    "default_enabled": "false",
    "description": "",
    "created": "2022-12-08T10:03:51.137Z",
    "updated": "2022-12-08T10:03:51.137Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "54bf7dff-73db-44ac-88fc-15709020ec6d",
    "label": "Dahdi Codec",
    "name": "mod_dahdi_codec",
    "category": "Auto",
    "sequence": "800",
    "enabled": "false",
    "default_enabled": "false",
    "description": "",
    "created": "2022-12-08T10:03:50.916Z",
    "updated": "2022-12-08T10:03:50.916Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "5a4f24fe-ff9c-461d-ac41-4a5995a384c0",
    "label": "Russian",
    "name": "mod_say_ru",
    "category": "Say",
    "sequence": "800",
    "enabled": "false",
    "default_enabled": "false",
    "description": null,
    "created": "2022-12-08T10:03:51.082Z",
    "updated": "2022-12-08T10:30:38.039Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "5f3bbbb7-6c16-4492-a1f5-d5d85df2a57f",
    "label": "Italian",
    "name": "mod_say_it",
    "category": "Say",
    "sequence": "800",
    "enabled": "false",
    "default_enabled": "false",
    "description": null,
    "created": "2022-12-08T10:03:51.043Z",
    "updated": "2022-12-08T10:30:12.721Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "5f7f35e3-3ab4-4bf7-9ac9-034162d025d2",
    "label": "Console",
    "name": "mod_console",
    "category": "Loggers",
    "sequence": "100",
    "enabled": "true",
    "default_enabled": "true",
    "description": "Send logs to the console.",
    "created": "2022-12-08T10:03:50.955Z",
    "updated": "2022-12-27T16:37:01.213Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "6010e23b-dc13-4de8-9ad6-0e578859fc59",
    "label": "French",
    "name": "mod_say_fr",
    "category": "Say",
    "sequence": "800",
    "enabled": "false",
    "default_enabled": "false",
    "description": null,
    "created": "2022-12-08T10:03:51.187Z",
    "updated": "2022-12-08T10:29:46.076Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "60d9ad53-7dce-4289-9a61-462968a131a7",
    "label": "Imagick",
    "name": "mod_imagick",
    "category": "Auto",
    "sequence": "800",
    "enabled": "false",
    "default_enabled": "false",
    "description": "",
    "created": "2022-12-08T10:03:50.972Z",
    "updated": "2022-12-08T10:03:50.972Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "6429591b-37b4-4e30-845e-367edf6ffac2",
    "label": "SMS",
    "name": "mod_sms",
    "category": "Applications",
    "sequence": "800",
    "enabled": "true",
    "default_enabled": "true",
    "description": "Chat messages",
    "created": "2022-12-08T10:03:51.192Z",
    "updated": "2022-12-08T10:03:51.192Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "727ce9dd-3dc0-4b45-b8ba-b8ea1abdc583",
    "label": "Tone Stream",
    "name": "mod_tone_stream",
    "category": "Streams / Files",
    "sequence": "800",
    "enabled": "true",
    "default_enabled": "true",
    "description": "Generate tone streams.",
    "created": "2022-12-08T10:03:51.282Z",
    "updated": "2022-12-08T10:03:51.282Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "76237faf-03ab-4489-bef4-16bd14ef2bc9",
    "label": "CDR CSV",
    "name": "mod_cdr_csv",
    "category": "Event Handlers",
    "sequence": "800",
    "enabled": "false",
    "default_enabled": "false",
    "description": "CSV call detail record handler.",
    "created": "2022-12-08T10:03:51.109Z",
    "updated": "2022-12-08T10:03:51.109Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "782994d9-c0dc-4db9-801b-ee682827eec0",
    "label": "Shout",
    "name": "mod_shout",
    "category": "Streams / Files",
    "sequence": "800",
    "enabled": "true",
    "default_enabled": "true",
    "description": "MP3 files and shoutcast streams.",
    "created": "2022-12-08T10:03:51.258Z",
    "updated": "2022-12-08T10:03:51.258Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "7948490d-e91b-4334-aaa5-fb667d484e50",
    "label": "Isac",
    "name": "mod_isac",
    "category": "Auto",
    "sequence": "800",
    "enabled": "false",
    "default_enabled": "false",
    "description": "",
    "created": "2022-12-08T10:03:50.894Z",
    "updated": "2022-12-08T10:03:50.894Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "7b97826e-f81c-42c7-a4a4-4c3b838ad6e7",
    "label": "HT-TAPI",
    "name": "mod_httapi",
    "category": "Applications",
    "sequence": "800",
    "enabled": "true",
    "default_enabled": "true",
    "description": "HT-TAPI Hypertext Telephony API",
    "created": "2022-12-08T10:03:51.115Z",
    "updated": "2023-01-08T09:25:32.012Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "7c851a76-2916-4d56-9b36-ba7c6ab9a8d4",
    "label": "G.729",
    "name": "mod_bcg729",
    "category": "Codecs",
    "sequence": "800",
    "enabled": "false",
    "default_enabled": "true",
    "description": "bcg729 royalty free implementation",
    "created": "2022-12-08T10:03:51.287Z",
    "updated": "2022-12-08T10:03:51.287Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "7d19e133-a8ff-4441-8d05-dbdac6e35d8f",
    "label": "Local Stream",
    "name": "mod_local_stream",
    "category": "Streams / Files",
    "sequence": "800",
    "enabled": "true",
    "default_enabled": "true",
    "description": "For local streams (play all the files in a directory).",
    "created": "2022-12-08T10:03:51.226Z",
    "updated": "2022-12-08T10:03:51.226Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "7dbf30f2-ee03-4e88-bfc6-c48a9be2bfc4",
    "label": "Hungarian",
    "name": "mod_say_hu",
    "category": "Say",
    "sequence": "800",
    "enabled": "false",
    "default_enabled": "false",
    "description": null,
    "created": "2022-12-08T10:03:50.933Z",
    "updated": "2022-12-08T10:30:04.487Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "83b705c1-108c-4fbe-a499-01208eb2df5e",
    "label": "Hebrew",
    "name": "mod_say_he",
    "category": "Say",
    "sequence": "800",
    "enabled": "false",
    "default_enabled": "false",
    "description": null,
    "created": "2022-12-08T10:03:51.093Z",
    "updated": "2022-12-08T10:29:55.168Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "8f01883d-36c9-45c8-bb1f-d4cd89668a2b",
    "label": "FIFO",
    "name": "mod_fifo",
    "category": "Applications",
    "sequence": "800",
    "enabled": "true",
    "default_enabled": "true",
    "description": "FIFO provides custom call queues including call park.",
    "created": "2022-12-08T10:03:51.176Z",
    "updated": "2022-12-08T10:03:51.176Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "8f8026b8-9f1b-48d9-be60-1dec20cfa6c4",
    "label": "Say Pl",
    "name": "mod_say_pl",
    "category": "Auto",
    "sequence": "800",
    "enabled": "false",
    "default_enabled": "false",
    "description": "",
    "created": "2022-12-08T10:03:50.888Z",
    "updated": "2022-12-08T10:03:50.888Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "92906071-a9cb-4a74-aebb-96e24bf5ecd9",
    "label": "Sound File",
    "name": "mod_sndfile",
    "category": "File Format Interfaces",
    "sequence": "800",
    "enabled": "true",
    "default_enabled": "true",
    "description": "Multi-format file format transcoder (WAV, etc).",
    "created": "2022-12-08T10:03:51.071Z",
    "updated": "2022-12-08T10:03:51.071Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "9da3e8a6-f03d-423d-a760-33adbed59588",
    "label": "ENUM",
    "name": "mod_enum",
    "category": "Applications",
    "sequence": "200",
    "enabled": "true",
    "default_enabled": "true",
    "description": "Route PSTN numbers over internet according to ENUM servers, such as e164.org.",
    "created": "2022-12-08T10:03:50.928Z",
    "updated": "2022-12-27T16:39:38.404Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "9db530db-2b72-4553-a78a-e72b87754109",
    "label": "Event Socket",
    "name": "mod_event_socket",
    "category": "Event Handlers",
    "sequence": "800",
    "enabled": "true",
    "default_enabled": "true",
    "description": "Sends events via a single socket.",
    "created": "2022-12-08T10:03:50.983Z",
    "updated": "2022-12-08T10:03:50.983Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "9dbf4754-d884-4c9d-8f14-58318fc99315",
    "label": "Distributor",
    "name": "mod_distributor",
    "category": "Applications",
    "sequence": "800",
    "enabled": "false",
    "default_enabled": "false",
    "description": "Round robin call distribution.",
    "created": "2022-12-08T10:03:50.960Z",
    "updated": "2022-12-08T10:03:50.960Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "a345427e-7f27-422a-b50e-15853c1cef73",
    "label": "XML Curl",
    "name": "mod_xml_curl",
    "category": "XML Interfaces",
    "sequence": "150",
    "enabled": "true",
    "default_enabled": "true",
    "description": "XML based configuration from webserver.",
    "created": "2022-12-08T10:32:20.251Z",
    "updated": "2023-01-08T09:52:14.543Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "a398c56f-1e48-4222-a515-7c41a71a226f",
    "label": "Directory",
    "name": "mod_directory",
    "category": "Applications",
    "sequence": "800",
    "enabled": "false",
    "default_enabled": "false",
    "description": "Dial by name directory.",
    "created": "2022-12-08T10:03:51.203Z",
    "updated": "2022-12-08T10:03:51.203Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "a6c04de7-2333-4f2b-86ca-90408a1502d6",
    "label": "Silk",
    "name": "mod_silk",
    "category": "Auto",
    "sequence": "800",
    "enabled": "false",
    "default_enabled": "false",
    "description": "",
    "created": "2022-12-08T10:03:51.005Z",
    "updated": "2022-12-08T10:03:51.005Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "aaa8d151-5446-48ba-978a-2349547904a1",
    "label": "Conference",
    "name": "mod_conference",
    "category": "Applications",
    "sequence": "800",
    "enabled": "true",
    "default_enabled": "true",
    "description": "Conference room module.",
    "created": "2022-12-08T10:03:50.994Z",
    "updated": "2022-12-08T10:03:50.994Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "b0571505-dcba-430d-9112-5df1a93d6fb6",
    "label": "Esl",
    "name": "mod_esl",
    "category": "Auto",
    "sequence": "800",
    "enabled": "false",
    "default_enabled": "false",
    "description": "",
    "created": "2022-12-08T10:03:51.104Z",
    "updated": "2022-12-08T10:03:51.104Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "b1219e59-b94c-48d9-8f16-dbac6caaed6f",
    "label": "Dutch",
    "name": "mod_say_nl",
    "category": "Say",
    "sequence": "800",
    "enabled": "false",
    "default_enabled": "false",
    "description": null,
    "created": "2022-12-08T10:03:51.120Z",
    "updated": "2022-12-08T10:30:21.607Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "b5444d54-e985-45a6-8a90-daad30c3d1ea",
    "label": "Thai",
    "name": "mod_say_th",
    "category": "Say",
    "sequence": "800",
    "enabled": "false",
    "default_enabled": "false",
    "description": null,
    "created": "2022-12-08T10:03:50.922Z",
    "updated": "2022-12-08T10:30:46.889Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "b6f36184-2897-4d18-82b9-77d74c153a5e",
    "label": "Lua",
    "name": "mod_lua",
    "category": "Languages",
    "sequence": "200",
    "enabled": "true",
    "default_enabled": "true",
    "description": "Lua script.",
    "created": "2022-12-08T10:03:51.264Z",
    "updated": "2023-01-08T09:26:02.019Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "bae4cd7e-dcfd-4199-9ecb-3c61924fa278",
    "label": "German",
    "name": "mod_say_de",
    "category": "Say",
    "sequence": "800",
    "enabled": "false",
    "default_enabled": "false",
    "description": null,
    "created": "2022-12-08T10:03:51.054Z",
    "updated": "2022-12-08T10:28:33.470Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "bcfbf0a4-250b-4b0a-af45-a7f594c4e758",
    "label": "Flite",
    "name": "mod_flite",
    "category": "Speech Recognition / Text to Speech",
    "sequence": "800",
    "enabled": "false",
    "default_enabled": "true",
    "description": "Text to Speech engine.",
    "created": "2022-12-08T10:03:51.060Z",
    "updated": "2022-12-08T10:03:51.060Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "bed666cd-699f-4da6-965b-22683f975e66",
    "label": "Python",
    "name": "mod_python3",
    "category": "Languages",
    "sequence": "200",
    "enabled": "false",
    "default_enabled": "false",
    "description": "Python script.",
    "created": "2022-12-08T10:09:02.193Z",
    "updated": "2023-01-08T09:25:50.592Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "c0443f1f-3983-4275-82ca-fb472d667f23",
    "label": "Sofia",
    "name": "mod_sofia",
    "category": "Endpoints",
    "sequence": "300",
    "enabled": "true",
    "default_enabled": "true",
    "description": "SIP module.",
    "created": "2022-12-08T10:03:51.232Z",
    "updated": "2022-12-08T10:03:51.232Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "c15ac571-4f1a-4424-91e0-1254d8c47846",
    "label": "Expr",
    "name": "mod_expr",
    "category": "Applications",
    "sequence": "800",
    "enabled": "true",
    "default_enabled": "true",
    "description": "Expression evaluation library.",
    "created": "2022-12-08T10:03:50.977Z",
    "updated": "2022-12-08T10:03:50.977Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "c3b8d66f-4207-4d61-b09e-c2ed75659c3e",
    "label": "AMR",
    "name": "mod_amr",
    "category": "Codecs",
    "sequence": "800",
    "enabled": "true",
    "default_enabled": "true",
    "description": "AMR codec.",
    "created": "2022-12-08T10:03:51.126Z",
    "updated": "2022-12-08T10:03:51.126Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "c44b5e80-3644-49f1-9f25-e2624ccf0feb",
    "label": "Voicemail",
    "name": "mod_voicemail",
    "category": "Applications",
    "sequence": "800",
    "enabled": "true",
    "default_enabled": "true",
    "description": "Voicemail",
    "created": "2022-12-08T10:10:18.750Z",
    "updated": "2022-12-08T10:10:18.750Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "c4d97dbf-5a1d-40c7-82cb-175659920bd8",
    "label": "B64",
    "name": "mod_b64",
    "category": "Auto",
    "sequence": "800",
    "enabled": "false",
    "default_enabled": "false",
    "description": "",
    "created": "2022-12-08T10:03:51.049Z",
    "updated": "2022-12-08T10:03:51.049Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "c7c2395c-9727-45c4-a41f-68d83ff9fa51",
    "label": "Mp4v",
    "name": "mod_mp4v",
    "category": "Auto",
    "sequence": "800",
    "enabled": "false",
    "default_enabled": "false",
    "description": "",
    "created": "2022-12-08T10:03:51.087Z",
    "updated": "2022-12-08T10:03:51.087Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "c9ac140b-3cc1-4fe8-8578-4b98f97299cc",
    "label": "Say Hr",
    "name": "mod_say_hr",
    "category": "Auto",
    "sequence": "800",
    "enabled": "false",
    "default_enabled": "false",
    "description": "",
    "created": "2022-12-08T10:03:51.098Z",
    "updated": "2022-12-08T10:03:51.098Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "d0fffef6-3645-42f6-a0d9-87ec210794fb",
    "label": "Loopback",
    "name": "mod_loopback",
    "category": "Endpoints",
    "sequence": "800",
    "enabled": "true",
    "default_enabled": "true",
    "description": "A loopback channel driver to make an outbound call as an inbound call.",
    "created": "2022-12-08T10:03:50.988Z",
    "updated": "2022-12-08T10:03:50.988Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "d437ffb8-0b04-4d2e-b2ff-6024efafc88f",
    "label": "Valet Parking",
    "name": "mod_valet_parking",
    "category": "Applications",
    "sequence": "800",
    "enabled": "true",
    "default_enabled": "true",
    "description": "Call parking",
    "created": "2022-12-08T10:03:51.276Z",
    "updated": "2022-12-08T10:03:51.276Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "dbd85a8f-9722-46f4-a86c-08a75c342504",
    "label": "Spanish",
    "name": "mod_say_es",
    "category": "Say",
    "sequence": "800",
    "enabled": "false",
    "default_enabled": "false",
    "description": null,
    "created": "2022-12-08T10:03:50.999Z",
    "updated": "2022-12-08T10:29:35.374Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "dd33634d-c55d-4e29-ae39-3cc0e6df31e8",
    "label": "Theora",
    "name": "mod_theora",
    "category": "Auto",
    "sequence": "800",
    "enabled": "false",
    "default_enabled": "false",
    "description": "",
    "created": "2022-12-08T10:03:51.027Z",
    "updated": "2022-12-08T10:03:51.027Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "de9d2274-04d1-4d1a-9303-a2bc698e87d1",
    "label": "H26x",
    "name": "mod_h26x",
    "category": "Codecs",
    "sequence": "800",
    "enabled": "true",
    "default_enabled": "true",
    "description": "Video codecs",
    "created": "2022-12-08T10:03:51.131Z",
    "updated": "2022-12-08T10:03:51.132Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "e484e225-3411-4cc5-a9b5-66e5f464d577",
    "label": "AMQP",
    "name": "mod_amqp",
    "category": "Event Handlers",
    "sequence": "800",
    "enabled": "false",
    "default_enabled": "false",
    "description": "AMQP broker interface.",
    "created": "2024-01-27T18:26:37.753Z",
    "updated": "2024-01-27T18:26:37.753Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "eba6eec5-d9ec-426f-a019-4639ae658e03",
    "label": "Memcached",
    "name": "mod_memcache",
    "category": "Applications",
    "sequence": "250",
    "enabled": "true",
    "default_enabled": "true",
    "description": "API for memcached.",
    "created": "2022-12-08T10:03:51.143Z",
    "updated": "2022-12-27T17:02:17.391Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "eef01333-34dc-4a37-bc8f-a32db86cafa4",
    "label": "Rtc",
    "name": "mod_rtc",
    "category": "Auto",
    "sequence": "800",
    "enabled": "false",
    "default_enabled": "false",
    "description": "",
    "created": "2022-12-08T10:03:50.966Z",
    "updated": "2022-12-08T10:03:50.966Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "efe44a7b-c074-4ae2-a6ec-33c396167b52",
    "label": "Verto",
    "name": "mod_verto",
    "category": "Auto",
    "sequence": "800",
    "enabled": "false",
    "default_enabled": "false",
    "description": "",
    "created": "2022-12-08T10:03:50.906Z",
    "updated": "2022-12-08T10:03:50.906Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "f00fba98-dd1a-4123-a007-ea3e5b885816",
    "label": "English",
    "name": "mod_say_en",
    "category": "Say",
    "sequence": "800",
    "enabled": "true",
    "default_enabled": "true",
    "description": "",
    "created": "2022-12-08T10:03:51.165Z",
    "updated": "2022-12-08T10:03:51.165Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "f28af77b-da46-4bcc-b0db-69b77f7862fe",
    "label": "Say Ja",
    "name": "mod_say_ja",
    "category": "Auto",
    "sequence": "800",
    "enabled": "false",
    "default_enabled": "false",
    "description": "",
    "created": "2022-12-08T10:03:51.220Z",
    "updated": "2022-12-08T10:03:51.220Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "f50df5a0-8a6e-4441-b64b-cbcd60062e3f",
    "label": "XML CDR",
    "name": "mod_xml_cdr",
    "category": "XML Interfaces",
    "sequence": "160",
    "enabled": "true",
    "default_enabled": "true",
    "description": "XML based call detail record handler.",
    "created": "2022-12-08T10:03:51.209Z",
    "updated": "2023-01-02T19:24:20.244Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "f6d0b94a-cf72-445a-a591-80fb210a9ab3",
    "label": "DB",
    "name": "mod_db",
    "category": "Applications",
    "sequence": "800",
    "enabled": "true",
    "default_enabled": "true",
    "description": "Database key / value storage functionality, dialing and limit backend.",
    "created": "2022-12-08T10:03:51.016Z",
    "updated": "2022-12-08T10:03:51.016Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "fc1ec1ed-9d78-4c1b-9efa-8b1ba2f34c4f",
    "label": "Dialplan XML",
    "name": "mod_dialplan_xml",
    "category": "Dialplan Interfaces",
    "sequence": "800",
    "enabled": "true",
    "default_enabled": "true",
    "description": "Provides dialplan functionality in XML.",
    "created": "2022-12-08T10:03:51.032Z",
    "updated": "2022-12-08T10:03:51.032Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "fd1646d2-52ed-4cb7-906b-391e9d725019",
    "label": "FSV",
    "name": "mod_fsv",
    "category": "Applications",
    "sequence": "800",
    "enabled": "true",
    "default_enabled": "true",
    "description": "Video application (Recording and playback).",
    "created": "2022-12-08T10:03:51.159Z",
    "updated": "2022-12-08T10:03:51.159Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "fe35abb6-3a6a-4f15-937a-eef52cb722a9",
    "label": "Log File",
    "name": "mod_logfile",
    "category": "Loggers",
    "sequence": "110",
    "enabled": "true",
    "default_enabled": "true",
    "description": "Send logs to the local file system.",
    "created": "2022-12-08T10:03:51.239Z",
    "updated": "2022-12-27T16:37:18.174Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "1f4875b0-9bb1-4225-879b-65ce32d7f0a5",
    "label": "HTTP GET/PUT",
    "name": "mod_http_cache",
    "category": "Applications",
    "sequence": "790",
    "enabled": "true",
    "default_enabled": "true",
    "description": "Allows HTTP GET request to cache a document",
    "created": "2024-04-09T18:23:31.185Z",
    "updated": "2024-04-09T18:23:31.185Z",
    "synchronised": null,
    "updated_by": "system"
  }
],
      skipDuplicates: true,
    });

    // Seeding pbx_sip_profiles
    await prisma.pbx_sip_profiles.createMany({
      data: [
  {
    "id": "1bd73317-4f7f-4567-b173-33043b6da928",
    "name": "internal-ipv6",
    "hostname": null,
    "enabled": "false",
    "description": "The Internal IPV6 profile binds to the IP version 6 address and is similar to the Internal profile.",
    "created": "2022-05-10T11:39:34.690Z",
    "updated": "2022-05-10T11:39:34.691Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "c23ede89-6936-4b72-b0a9-62ea6a922520",
    "name": "external-ipv6",
    "hostname": null,
    "enabled": "false",
    "description": "The External IPV6 profile binds to the IP version 6 address and is similar to the External profile.",
    "created": "2022-05-10T11:39:34.203Z",
    "updated": "2022-05-10T11:39:34.203Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "d77813a5-7cf4-4148-be43-dec66bf33116",
    "name": "external",
    "hostname": null,
    "enabled": "true",
    "description": "The External profile external provides anonymous calling in the public context. By default the External profile binds to port 5080. Calls can be sent using a SIP URL:voip.domain.com:5080",
    "created": "2022-05-10T11:39:34.904Z",
    "updated": "2022-11-29T19:33:45.250Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421",
    "name": "internal",
    "hostname": null,
    "enabled": "true",
    "description": "The Internal profile by default requires registration which is used by the endpoints. By default the Internal profile binds to port 5060.",
    "created": "2022-05-10T11:39:34.348Z",
    "updated": "2022-11-29T18:20:08.724Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "15122eec-b64a-45c1-8e96-13c7983b0932",
    "name": "lifesprintcare",
    "hostname": null,
    "enabled": "true",
    "description": "Copy of external",
    "created": "2024-10-28T18:35:54.095Z",
    "updated": "2024-10-28T18:35:54.095Z",
    "synchronised": null,
    "updated_by": "system"
  }
],
      skipDuplicates: true,
    });

    // Seeding pbx_sip_profile_settings
    await prisma.pbx_sip_profile_settings.createMany({
      data: [
  {
    "id": "00165439-39de-4516-b107-e2aa3cea98bc",
    "name": "presence-hosts",
    "value": "$${domain}",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.304Z",
    "updated": "2022-05-10T11:39:34.304Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "c23ede89-6936-4b72-b0a9-62ea6a922520"
  },
  {
    "id": "0155f293-bd6d-4d75-81bd-a23312cf6d34",
    "name": "vad",
    "value": "out",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.600Z",
    "updated": "2022-05-10T11:39:34.600Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "03154e34-7e0a-4f3a-9544-7782f6c30b15",
    "name": "hold-music",
    "value": "$${hold_music}",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.953Z",
    "updated": "2022-05-10T11:39:34.953Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "d77813a5-7cf4-4148-be43-dec66bf33116"
  },
  {
    "id": "073b58f0-7893-427b-8a10-47e32637fcf9",
    "name": "tls-only",
    "value": "false",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.785Z",
    "updated": "2022-05-10T11:39:34.785Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "079653b9-a858-4f7a-b431-4b5c120a0d27",
    "name": "disable-register",
    "value": "true",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.632Z",
    "updated": "2022-05-10T11:39:34.632Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "0885d750-7681-4b2b-b23c-2341138b1ba0",
    "name": "registration-thread-frequency",
    "value": "30",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.679Z",
    "updated": "2022-05-10T11:39:34.679Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "089a1fd7-f354-4753-b67a-97b2af1d865b",
    "name": "track-calls",
    "value": "false",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.374Z",
    "updated": "2022-05-10T11:39:34.374Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "095be0bf-d914-41ae-881c-3010ddc5c91f",
    "name": "presence-privacy",
    "value": "$${presence_privacy}",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.481Z",
    "updated": "2022-05-10T11:39:34.481Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "0c538d75-fc16-4677-ae54-fbdefaa58cac",
    "name": "watchdog-enabled",
    "value": "no",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.366Z",
    "updated": "2022-05-10T11:39:34.366Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "0d7a448c-5afa-472f-ad13-40c4b261f04e",
    "name": "sip-trace",
    "value": "no",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.919Z",
    "updated": "2022-05-10T11:39:34.919Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "d77813a5-7cf4-4148-be43-dec66bf33116"
  },
  {
    "id": "0e82f787-3424-4848-9ab9-452d16eab3bd",
    "name": "accept-blind-auth",
    "value": "true",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.557Z",
    "updated": "2022-05-10T11:39:34.557Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "0eed0c69-66a8-4b79-8270-5694e9affb4e",
    "name": "max-proceeding",
    "value": "1000",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.487Z",
    "updated": "2022-05-10T11:39:34.487Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "0f7aff09-1b5f-49f6-b8cb-e641416a2924",
    "name": "user-agent-string",
    "value": "FreeSWITCH",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.696Z",
    "updated": "2022-05-10T11:39:34.696Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "132a3083-8bfd-456b-89d5-fd584706a203",
    "name": "rtp-timer-name",
    "value": "soft",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.294Z",
    "updated": "2022-05-10T11:39:34.294Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "c23ede89-6936-4b72-b0a9-62ea6a922520"
  },
  {
    "id": "137d93e1-3b2a-466b-a1b8-5a3cea02de42",
    "name": "disable-transfer",
    "value": "true",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.630Z",
    "updated": "2022-05-10T11:39:34.630Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "142eea83-5d54-413e-998e-8eec8e0016e4",
    "name": "hold-music",
    "value": "$${hold_music}",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.406Z",
    "updated": "2022-05-10T11:39:34.406Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "15114a7c-bf42-4039-8ebb-18e960c9d85b",
    "name": "outbound-codec-prefs",
    "value": "$${outbound_codec_prefs}",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.289Z",
    "updated": "2022-05-10T11:39:34.289Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "c23ede89-6936-4b72-b0a9-62ea6a922520"
  },
  {
    "id": "160302fb-8012-4839-a279-a6ba63080acf",
    "name": "sip-capture",
    "value": "no",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.361Z",
    "updated": "2022-05-10T11:39:34.361Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "169e928b-c216-4f42-868f-8d01ef53070a",
    "name": "debug",
    "value": "0",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.699Z",
    "updated": "2022-05-10T11:39:34.699Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "16deba3c-e21c-413e-988b-c9ef1a64e649",
    "name": "debug",
    "value": "0",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.910Z",
    "updated": "2022-05-10T11:39:34.910Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "d77813a5-7cf4-4148-be43-dec66bf33116"
  },
  {
    "id": "1704c308-75df-498d-a7f7-1c655c3c5519",
    "name": "rfc2833-pt",
    "value": "101",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.924Z",
    "updated": "2022-05-10T11:39:34.924Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "d77813a5-7cf4-4148-be43-dec66bf33116"
  },
  {
    "id": "171050b6-389d-4bfd-9673-a44be1b157fd",
    "name": "inbound-codec-prefs",
    "value": "$${global_codec_prefs}",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.287Z",
    "updated": "2022-05-10T11:39:34.287Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "c23ede89-6936-4b72-b0a9-62ea6a922520"
  },
  {
    "id": "17d94bd7-a589-47d2-ac12-9916e536e733",
    "name": "tls",
    "value": "$${internal_ssl_enable}",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.782Z",
    "updated": "2022-05-10T11:39:34.782Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "18f6eb60-a2aa-4c6b-aec4-fba1690e8501",
    "name": "disable-naptr",
    "value": "false",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.899Z",
    "updated": "2022-05-10T11:39:34.899Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "190f93b6-3155-44d6-9907-2afae3fe37f2",
    "name": "sip-capture",
    "value": "no",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.921Z",
    "updated": "2022-05-10T11:39:34.921Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "d77813a5-7cf4-4148-be43-dec66bf33116"
  },
  {
    "id": "19783dae-c455-4e18-aa89-6597177fca00",
    "name": "inbound-proxy-media",
    "value": "true",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.824Z",
    "updated": "2022-05-10T11:39:34.824Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "19a87346-0d56-4847-b98e-388c1979b693",
    "name": "dialplan",
    "value": "XML",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.716Z",
    "updated": "2022-05-10T11:39:34.716Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "1ad4430a-9d96-47cb-9e65-45e55f63c7e2",
    "name": "odbc-dsn",
    "value": "$${dsn}",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.542Z",
    "updated": "2022-05-10T11:39:34.543Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "1b7f6524-40e3-41e2-b44e-6f81754fb3f9",
    "name": "rtp-timeout-sec",
    "value": "300",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.594Z",
    "updated": "2022-05-10T11:39:34.595Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "1bdbfa5c-f0a0-4da6-8d29-f68b4d49183c",
    "name": "tls",
    "value": "$${external_ssl_enable}",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:35.025Z",
    "updated": "2022-05-10T11:39:35.025Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "d77813a5-7cf4-4148-be43-dec66bf33116"
  },
  {
    "id": "1c377124-5d18-434f-a374-20d63c0a26ba",
    "name": "auth-subscriptions",
    "value": "true",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:35.005Z",
    "updated": "2022-05-10T11:39:35.005Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "d77813a5-7cf4-4148-be43-dec66bf33116"
  },
  {
    "id": "1dc3f0ad-6d02-490b-93c1-3bf9c3447c80",
    "name": "track-calls",
    "value": "false",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.705Z",
    "updated": "2022-05-10T11:39:34.705Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "1e785d15-c104-49f8-9547-203c4c2e9c9f",
    "name": "inbound-bypass-media",
    "value": "true",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.821Z",
    "updated": "2022-05-10T11:39:34.821Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "1e7bd15f-02bb-4ed5-95a3-4b25312e2e02",
    "name": "enable-100rel",
    "value": "true",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.295Z",
    "updated": "2022-05-10T11:39:34.295Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "c23ede89-6936-4b72-b0a9-62ea6a922520"
  },
  {
    "id": "1e9cf3b4-7975-4b6d-b633-443ec50138be",
    "name": "inbound-codec-negotiation",
    "value": "generous",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.774Z",
    "updated": "2022-05-10T11:39:34.774Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "1f48ace2-4c78-4882-8e75-894ff1714f3e",
    "name": "inbound-codec-prefs",
    "value": "$${global_codec_prefs}",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.724Z",
    "updated": "2022-05-10T11:39:34.724Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "209c7105-8d05-44c7-a8ad-fb37f45ef34d",
    "name": "NDLB-broken-auth-hash",
    "value": "true",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.845Z",
    "updated": "2022-05-10T11:39:34.845Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "20a3758e-eff8-4909-8160-34a48763038a",
    "name": "tls-version",
    "value": "$${sip_tls_version}",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.810Z",
    "updated": "2022-05-10T11:39:34.810Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "211a84f9-462e-478f-bab9-db155e8720bc",
    "name": "session-timeout",
    "value": "1800",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.489Z",
    "updated": "2022-05-10T11:39:34.490Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "21ef2f58-ac49-46e7-a038-2dc8b615ee41",
    "name": "tls-version",
    "value": "$${sip_tls_version}",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.343Z",
    "updated": "2022-05-10T11:39:34.343Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "c23ede89-6936-4b72-b0a9-62ea6a922520"
  },
  {
    "id": "220ce28a-1b1d-439b-8dd7-1758af40c517",
    "name": "record-template",
    "value": "${domain_name}/archive/${strftime(%Y)}/${strftime(%b)}/${strftime(%d)}/${uuid}.${record_ext}",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.463Z",
    "updated": "2022-05-10T11:39:34.463Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "2224d2e7-e3ef-4a51-af7e-e1700a57259e",
    "name": "accept-blind-reg",
    "value": "true",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.554Z",
    "updated": "2022-05-10T11:39:34.554Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "2252e7b2-1c50-4bc2-a701-6e1e806e4301",
    "name": "shutdown-on-fail",
    "value": "true",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.358Z",
    "updated": "2022-05-10T11:39:34.358Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "23c973bc-e49c-47e3-a01e-3c96e468b43c",
    "name": "shutdown-on-fail",
    "value": "true",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.916Z",
    "updated": "2022-05-10T11:39:34.916Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "d77813a5-7cf4-4148-be43-dec66bf33116"
  },
  {
    "id": "23f45b95-32ea-432f-9c24-76f8a434fe02",
    "name": "enable-3pcc",
    "value": "true",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.635Z",
    "updated": "2022-05-10T11:39:34.635Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "249cfdb2-dc3d-4bc9-9dce-d7b1fe2db7bc",
    "name": "rtp-rewrite-timestamps",
    "value": "true",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.537Z",
    "updated": "2022-05-10T11:39:34.537Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "268c3fa0-7545-4315-b26c-e305c7642e3e",
    "name": "enable-3pcc",
    "value": "true",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.887Z",
    "updated": "2022-05-10T11:39:34.888Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "279ed2d3-b378-49e4-9088-5c88556e1880",
    "name": "rtp-timeout-sec",
    "value": "300",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:35.019Z",
    "updated": "2022-05-10T11:39:35.019Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "d77813a5-7cf4-4148-be43-dec66bf33116"
  },
  {
    "id": "2881d01f-c8e6-4f3a-844a-aba901bbcd18",
    "name": "disable-naptr",
    "value": "false",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.658Z",
    "updated": "2022-05-10T11:39:34.658Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "2acb23ee-b2cd-4ff0-87dd-7f123861f4fe",
    "name": "manage-presence",
    "value": "true",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.466Z",
    "updated": "2022-05-10T11:39:34.466Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "2bfd6a2e-8bbf-4f65-9b63-a9a2bff07b32",
    "name": "auto-rtp-bugs",
    "value": null,
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.653Z",
    "updated": "2022-05-10T11:39:34.653Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "2de3b867-fbde-4813-a254-5060c1cd1b0c",
    "name": "dbname",
    "value": "share_presence",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.475Z",
    "updated": "2022-05-10T11:39:34.475Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "2e57aad3-02b0-4a0b-90a6-2d4246306455",
    "name": "context",
    "value": "public",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.939Z",
    "updated": "2022-05-10T11:39:34.939Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "d77813a5-7cf4-4148-be43-dec66bf33116"
  },
  {
    "id": "2f1a1a0c-094f-4ebe-b662-3718b7cf2581",
    "name": "force-subscription-expires",
    "value": "60",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.627Z",
    "updated": "2022-05-10T11:39:34.627Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "2f7d78a1-fec6-4f23-b055-2758d913a90d",
    "name": "ext-sip-ip",
    "value": "$${external_sip_ip}",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:35.017Z",
    "updated": "2022-05-10T11:39:35.017Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "d77813a5-7cf4-4148-be43-dec66bf33116"
  },
  {
    "id": "2f83c25c-f737-458c-bb2b-846778df1da2",
    "name": "username",
    "value": "DCM",
    "enabled": "true",
    "description": null,
    "created": "2022-11-29T18:20:08.730Z",
    "updated": "2022-11-29T18:20:08.730Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "2ffd3b97-fcbb-4a88-a28b-05cc576323f9",
    "name": "force-register-domain",
    "value": "$${domain}",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.611Z",
    "updated": "2022-05-10T11:39:34.611Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "322ef61d-aa80-4075-8549-1f1ef9dbaaac",
    "name": "auto-jitterbuffer-msec",
    "value": "60",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.673Z",
    "updated": "2022-05-10T11:39:34.673Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "34229d3b-720a-4fa6-98fb-07e57d469d27",
    "name": "rtp-rewrite-timestamps",
    "value": "true",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.813Z",
    "updated": "2022-05-10T11:39:34.813Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "35174618-cf33-42ba-8b2a-fe94562a2be3",
    "name": "alias",
    "value": "sip:10.0.1.251:5555",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.603Z",
    "updated": "2022-05-10T11:39:34.603Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "36260210-d9a6-4c25-ad85-3a4981dfeafb",
    "name": "rtcp-video-interval-msec",
    "value": "5000",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.624Z",
    "updated": "2022-05-10T11:39:34.624Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "36bae282-f757-4c43-ac26-b410b4c24c8e",
    "name": "tls-verify-in-subjects",
    "value": "",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.528Z",
    "updated": "2022-05-10T11:39:34.528Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "378a50fc-25b8-4f28-b099-e2ac8001fcac",
    "name": "pass-callee-id",
    "value": "false",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.650Z",
    "updated": "2022-05-10T11:39:34.650Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "37f0c652-0836-4b27-8358-7ecab969824f",
    "name": "pass-rfc2833",
    "value": "true",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.816Z",
    "updated": "2022-05-10T11:39:34.816Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "385b0863-949e-4f01-8dec-9c478929f9a9",
    "name": "nonce-ttl",
    "value": "60",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.310Z",
    "updated": "2022-05-10T11:39:34.310Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "c23ede89-6936-4b72-b0a9-62ea6a922520"
  },
  {
    "id": "3ac3c2af-1074-49cc-b8f0-93096d961eae",
    "name": "timer-T2",
    "value": "4000",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.667Z",
    "updated": "2022-05-10T11:39:34.667Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "3ba1fcfd-8bf6-43f6-b515-fabbf0d38f69",
    "name": "dtmf-type",
    "value": "rfc2833",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.719Z",
    "updated": "2022-05-10T11:39:34.719Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "3c7022e1-f303-46f6-a16f-1b6ce407d24f",
    "name": "rtp-timeout-sec",
    "value": "300",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.323Z",
    "updated": "2022-05-10T11:39:34.323Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "c23ede89-6936-4b72-b0a9-62ea6a922520"
  },
  {
    "id": "3d9c7a24-0412-4ae7-8833-61bb8af1629c",
    "name": "apply-inbound-acl",
    "value": "domains",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.750Z",
    "updated": "2022-05-10T11:39:34.750Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "3fee68e8-bf86-42bb-9660-d9ca2f4dd044",
    "name": "sip-port",
    "value": "$${internal_sip_port}",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.713Z",
    "updated": "2022-05-10T11:39:34.713Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "40445d2f-ae4e-4b11-9846-d74861bd8dd6",
    "name": "multiple-registrations",
    "value": "true",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.771Z",
    "updated": "2022-05-10T11:39:34.771Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "427c6d33-3b37-4264-a9ae-5f047c179803",
    "name": "auth-all-packets",
    "value": "false",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.586Z",
    "updated": "2022-05-10T11:39:34.586Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "42a456dd-f447-43d6-8050-1d0d79b612b4",
    "name": "shutdown-on-fail",
    "value": "true",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.268Z",
    "updated": "2022-05-10T11:39:34.268Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "c23ede89-6936-4b72-b0a9-62ea6a922520"
  },
  {
    "id": "43549ffe-777f-4ce2-a9a9-9e058c347f9b",
    "name": "session-timeout",
    "value": "1800",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.768Z",
    "updated": "2022-05-10T11:39:34.768Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "475e9e84-623d-42b7-9dda-3c7c359fe1ff",
    "name": "apply-inbound-acl",
    "value": "domains",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.976Z",
    "updated": "2022-05-10T11:39:34.976Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "d77813a5-7cf4-4148-be43-dec66bf33116"
  },
  {
    "id": "48e96ffb-35ba-429a-bf1c-2afc58793904",
    "name": "use-rtp-timer",
    "value": "true",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.730Z",
    "updated": "2022-05-10T11:39:34.730Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "49b1d118-4b79-49c2-aceb-d291a57abb77",
    "name": "manual-redirect",
    "value": "true",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.569Z",
    "updated": "2022-05-10T11:39:34.569Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "4a5b8984-807c-42fb-bbce-b179ef6850f1",
    "name": "auth-subscriptions",
    "value": "true",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.580Z",
    "updated": "2022-05-10T11:39:34.580Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "4b4462ce-e32c-45a6-9089-acb5b1c0bc8f",
    "name": "rtp-hold-timeout-sec",
    "value": "1800",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.325Z",
    "updated": "2022-05-10T11:39:34.325Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "c23ede89-6936-4b72-b0a9-62ea6a922520"
  },
  {
    "id": "4c2144f6-1b02-4d8c-9b31-19e34224a89f",
    "name": "max-proceeding",
    "value": "1000",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.765Z",
    "updated": "2022-05-10T11:39:34.765Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "4c5d58d5-e9f3-4cdc-8f94-bfc841277d48",
    "name": "force-register-domain",
    "value": "$${domain}",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.988Z",
    "updated": "2022-05-10T11:39:34.988Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "d77813a5-7cf4-4148-be43-dec66bf33116"
  },
  {
    "id": "4cb64a4e-6cb8-45e3-9be3-fe2cd65fdeb8",
    "name": "accept-blind-auth",
    "value": "true",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.833Z",
    "updated": "2022-05-10T11:39:34.833Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "4e70c8c8-c1a8-49cb-a75a-952b4bb03905",
    "name": "dialplan",
    "value": "XML",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.279Z",
    "updated": "2022-05-10T11:39:34.279Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "c23ede89-6936-4b72-b0a9-62ea6a922520"
  },
  {
    "id": "4f31138b-7e66-4f72-b8d1-18090bf8fef4",
    "name": "rtp-hold-timeout-sec",
    "value": "1800",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.597Z",
    "updated": "2022-05-10T11:39:34.597Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "4f739a66-2ee0-4664-808a-b8c7bb483e01",
    "name": "disable-rtp-auto-adjust",
    "value": "true",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.644Z",
    "updated": "2022-05-10T11:39:34.644Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "5003e58f-1557-4ac8-8434-b2b3a6fe7862",
    "name": "nonce-ttl",
    "value": "60",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.563Z",
    "updated": "2022-05-10T11:39:34.563Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "503bf648-d4b0-42ed-85df-9a89877f4692",
    "name": "auth-all-packets",
    "value": "false",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.856Z",
    "updated": "2022-05-10T11:39:34.856Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "51007cfc-7fe6-4995-bc8d-bcea8755c56d",
    "name": "disable-srv",
    "value": "false",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.656Z",
    "updated": "2022-05-10T11:39:34.656Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "51597573-cc84-4ac2-b82d-63096dd4163c",
    "name": "suppress-cng",
    "value": "true",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.836Z",
    "updated": "2022-05-10T11:39:34.836Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "520c2648-c8b3-40e3-855e-89ff61e9d2df",
    "name": "tls-verify-policy",
    "value": "all|subjects_all",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.523Z",
    "updated": "2022-05-10T11:39:34.523Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "54c472e7-0490-4fd4-9020-8217441132c5",
    "name": "tls-cert-dir",
    "value": "$${internal_ssl_dir}",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.793Z",
    "updated": "2022-05-10T11:39:34.793Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "55a4af34-92b7-4125-a081-c3ac9748b085",
    "name": "tls",
    "value": "$${internal_ssl_enable}",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.503Z",
    "updated": "2022-05-10T11:39:34.503Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "5649be27-1c31-4e86-b3e8-bc1e2be21cd7",
    "name": "apply-register-acl",
    "value": "domains",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.979Z",
    "updated": "2022-05-10T11:39:34.979Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "d77813a5-7cf4-4148-be43-dec66bf33116"
  },
  {
    "id": "56714539-5673-4247-aeac-ebf367a88912",
    "name": "local-network-acl",
    "value": "localnet.auto",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.437Z",
    "updated": "2022-05-10T11:39:34.437Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "57b0dbcf-2fc2-4f6b-8143-7caea9440917",
    "name": "enable-100rel",
    "value": "true",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.962Z",
    "updated": "2022-05-10T11:39:34.962Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "d77813a5-7cf4-4148-be43-dec66bf33116"
  },
  {
    "id": "58202def-8c62-4a6d-971c-4dbbf7848144",
    "name": "inbound-late-negotiation",
    "value": "true",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.551Z",
    "updated": "2022-05-10T11:39:34.551Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "586b33b5-c387-40d9-bb26-3c931fc5c57c",
    "name": "inbound-codec-prefs",
    "value": "$${global_codec_prefs}",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.947Z",
    "updated": "2022-05-10T11:39:34.947Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "d77813a5-7cf4-4148-be43-dec66bf33116"
  },
  {
    "id": "5899def0-d71a-45bc-9053-a183a7eacec5",
    "name": "NDLB-received-in-nat-reg-contact",
    "value": "true",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.574Z",
    "updated": "2022-05-10T11:39:34.575Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "5908a95b-d468-49f4-bc6b-8ab8599cc68d",
    "name": "tls-verify-policy",
    "value": "all|subjects_all",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.802Z",
    "updated": "2022-05-10T11:39:34.802Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "592380a0-da27-46c2-a32a-1bc737e30f1d",
    "name": "inbound-proxy-media",
    "value": "true",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.548Z",
    "updated": "2022-05-10T11:39:34.548Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "5ab71566-c52b-47a0-a538-85b66f781674",
    "name": "zrtp-passthru",
    "value": "true",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.292Z",
    "updated": "2022-05-10T11:39:34.292Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "c23ede89-6936-4b72-b0a9-62ea6a922520"
  },
  {
    "id": "5abd89bf-b106-45ac-857f-cd217cc6410a",
    "name": "vad",
    "value": "out",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.870Z",
    "updated": "2022-05-10T11:39:34.870Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "5d172fdf-df05-418e-bd1a-41ce54c03fc5",
    "name": "outbound-codec-prefs",
    "value": "$${global_codec_prefs}",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.727Z",
    "updated": "2022-05-10T11:39:34.727Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "5d47e389-4876-47a6-82d6-7bebcf5c65f4",
    "name": "tls-passphrase",
    "value": "",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.517Z",
    "updated": "2022-05-10T11:39:34.517Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "5da47db8-500c-49db-83fb-529a99d5f217",
    "name": "challenge-realm",
    "value": "auto_to",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.641Z",
    "updated": "2022-05-10T11:39:34.641Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "5dd68d9a-2d35-49fb-a373-8d8d613738ed",
    "name": "rfc2833-pt",
    "value": "101",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.380Z",
    "updated": "2022-05-10T11:39:34.380Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "5eca91e0-2429-4e0d-95a1-e2f90e7a3c53",
    "name": "dtmf-duration",
    "value": "2000",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.391Z",
    "updated": "2022-05-10T11:39:34.391Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "5f1e3fc7-7a4a-4106-ba43-e74387bcde5f",
    "name": "media-option",
    "value": "bypass-media-after-att-xfer",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.353Z",
    "updated": "2022-05-10T11:39:34.353Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "606cf551-2752-4869-9d59-0c0facf54366",
    "name": "debug",
    "value": "0",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.263Z",
    "updated": "2022-05-10T11:39:34.263Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "c23ede89-6936-4b72-b0a9-62ea6a922520"
  },
  {
    "id": "60b88cb5-258b-42fc-91a1-2a980167903f",
    "name": "enable-rfc-5626",
    "value": "true",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.276Z",
    "updated": "2022-05-10T11:39:34.276Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "c23ede89-6936-4b72-b0a9-62ea6a922520"
  },
  {
    "id": "61c70547-c296-4140-8692-5f75b3f52c22",
    "name": "rtp-hold-timeout-sec",
    "value": "1800",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.867Z",
    "updated": "2022-05-10T11:39:34.868Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "630c71a1-63b2-4b93-a545-16f1c5f4e20b",
    "name": "sip-force-expires",
    "value": "1800",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.608Z",
    "updated": "2022-05-10T11:39:34.608Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "63325cc9-fa10-48a5-a52e-d15d7c401227",
    "name": "alias",
    "value": "sip:10.0.1.251:5555",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.873Z",
    "updated": "2022-05-10T11:39:34.873Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "63d3f698-f8b2-4b16-bf99-e4dcbc0af7d7",
    "name": "tls-passphrase",
    "value": "",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.796Z",
    "updated": "2022-05-10T11:39:34.796Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "63d6356e-c459-43d1-b46e-96b958515180",
    "name": "inbound-codec-prefs",
    "value": "$${global_codec_prefs}",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.393Z",
    "updated": "2022-05-10T11:39:34.393Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "6406e572-538e-4a88-b8ea-112ebfb9cff5",
    "name": "caller-id-type",
    "value": "none",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.456Z",
    "updated": "2022-05-10T11:39:34.456Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "644c4656-313e-493c-90e2-bb04005d83d7",
    "name": "tls-version",
    "value": "$${sip_tls_version}",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.531Z",
    "updated": "2022-05-10T11:39:34.531Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "652aaec9-dec0-4db2-aa2e-3e3376f77b49",
    "name": "auth-all-packets",
    "value": "false",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.315Z",
    "updated": "2022-05-10T11:39:34.315Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "c23ede89-6936-4b72-b0a9-62ea6a922520"
  },
  {
    "id": "65b39ba8-7b15-4790-9a9a-45a32f72ba01",
    "name": "presence-hosts",
    "value": "$${domain},$${local_ip_v4}",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.478Z",
    "updated": "2022-05-10T11:39:34.478Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "65f73aa6-6bb0-4edf-a18a-13a5b26687f1",
    "name": "extended-info-parsing",
    "value": "true",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.415Z",
    "updated": "2022-05-10T11:39:34.415Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "66e74f29-1071-41ef-927f-d902892c4020",
    "name": "ext-rtp-ip",
    "value": "$${external_rtp_ip}",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.589Z",
    "updated": "2022-05-10T11:39:34.589Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "676d62ee-9ba6-4425-8f18-c1541a68f974",
    "name": "dbname",
    "value": "share_presence",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.302Z",
    "updated": "2022-05-10T11:39:34.302Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "c23ede89-6936-4b72-b0a9-62ea6a922520"
  },
  {
    "id": "67d947cd-81bf-42e6-8819-75a4d7dd9b0c",
    "name": "inbound-reg-force-matching-username",
    "value": "true",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.583Z",
    "updated": "2022-05-10T11:39:34.583Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "6832a5d8-d949-46f7-a37b-99a73a52bf4e",
    "name": "dtmf-duration",
    "value": "2000",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.945Z",
    "updated": "2022-05-10T11:39:34.945Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "d77813a5-7cf4-4148-be43-dec66bf33116"
  },
  {
    "id": "693ba110-2bff-41c4-b99a-25d7d4a339d8",
    "name": "sip-ip",
    "value": "$${local_ip_v6}",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.318Z",
    "updated": "2022-05-10T11:39:34.318Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "c23ede89-6936-4b72-b0a9-62ea6a922520"
  },
  {
    "id": "69dd4f94-4e11-4445-a00d-fea06cd3642f",
    "name": "tls-bind-params",
    "value": "transport=tls",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.509Z",
    "updated": "2022-05-10T11:39:34.509Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "6ae5775d-4f18-47e7-afdf-991e74cf62d5",
    "name": "dbname",
    "value": "share_presence",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.982Z",
    "updated": "2022-05-10T11:39:34.982Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "d77813a5-7cf4-4148-be43-dec66bf33116"
  },
  {
    "id": "6b2594cc-e243-4c28-8a6b-d582d69fc85d",
    "name": "rtp-timer-name",
    "value": "soft",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.959Z",
    "updated": "2022-05-10T11:39:34.959Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "d77813a5-7cf4-4148-be43-dec66bf33116"
  },
  {
    "id": "6c206314-17cf-400e-bd26-c7a30dbf061a",
    "name": "manage-presence",
    "value": "true",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.759Z",
    "updated": "2022-05-10T11:39:34.759Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "6c2763e0-f4d2-47c5-a9f8-4450533fed51",
    "name": "tls-only",
    "value": "false",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:35.028Z",
    "updated": "2022-05-10T11:39:35.028Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "d77813a5-7cf4-4148-be43-dec66bf33116"
  },
  {
    "id": "6e5ba649-3f30-4f52-884f-520c06c75f44",
    "name": "tls-verify-policy",
    "value": "all|subjects_all",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:35.046Z",
    "updated": "2022-05-10T11:39:35.046Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "d77813a5-7cf4-4148-be43-dec66bf33116"
  },
  {
    "id": "6f19f995-9733-4a86-beee-8ac3f8fdaf33",
    "name": "context",
    "value": "public",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.707Z",
    "updated": "2022-05-10T11:39:34.707Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "7220a968-d1a6-463e-ac22-7d7714e70d01",
    "name": "media-option",
    "value": "resume-media-on-hold",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.352Z",
    "updated": "2022-05-10T11:39:34.352Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "725c0427-34a9-40c6-971b-b2355b4c4f8c",
    "name": "sip-port",
    "value": "$${external_sip_port}",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.930Z",
    "updated": "2022-05-10T11:39:34.930Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "d77813a5-7cf4-4148-be43-dec66bf33116"
  },
  {
    "id": "728584b2-750d-4c9f-b229-2338f7837841",
    "name": "rfc2833-pt",
    "value": "101",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.710Z",
    "updated": "2022-05-10T11:39:34.710Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "7411cc51-3971-41a1-88ea-64b405e15d93",
    "name": "username",
    "value": "DCM",
    "enabled": "true",
    "description": null,
    "created": "2022-11-29T18:18:33.044Z",
    "updated": "2022-11-29T18:19:23.359Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "d77813a5-7cf4-4148-be43-dec66bf33116"
  },
  {
    "id": "74f6c07d-c1de-45d4-87f8-6739d023241a",
    "name": "tls-verify-in-subjects",
    "value": "",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.807Z",
    "updated": "2022-05-10T11:39:34.807Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "76ab2e57-a25b-4f90-ad07-875403666b9b",
    "name": "bind-params",
    "value": "transport=udp",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.498Z",
    "updated": "2022-05-10T11:39:34.498Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "78a5dc80-da8b-4964-8193-647bc207e1ae",
    "name": "tls-verify-depth",
    "value": "2",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:35.049Z",
    "updated": "2022-05-10T11:39:35.049Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "d77813a5-7cf4-4148-be43-dec66bf33116"
  },
  {
    "id": "7c3b8f36-0df3-4dd1-a414-e481e4ed2c69",
    "name": "bitpacking",
    "value": "aal2",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.762Z",
    "updated": "2022-05-10T11:39:34.762Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "7ddb6d9a-dda7-4444-99cd-74f1f9b40d26",
    "name": "tls",
    "value": "$${external_ssl_enable}",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.326Z",
    "updated": "2022-05-10T11:39:34.326Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "c23ede89-6936-4b72-b0a9-62ea6a922520"
  },
  {
    "id": "7e16bf9a-a68a-4050-9d5b-2c7a30959726",
    "name": "debug",
    "value": "0",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.356Z",
    "updated": "2022-05-10T11:39:34.356Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "7ee9a22c-2f27-45d7-8e87-9c2e86432e69",
    "name": "force-subscription-domain",
    "value": "$${domain}",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.613Z",
    "updated": "2022-05-10T11:39:34.614Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "7fa14ebb-79de-4910-afa8-95766f699f71",
    "name": "context",
    "value": "public",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.282Z",
    "updated": "2022-05-10T11:39:34.282Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "c23ede89-6936-4b72-b0a9-62ea6a922520"
  },
  {
    "id": "7fba90a5-1cd3-469d-bb61-b3c89fd1e3a4",
    "name": "nonce-ttl",
    "value": "60",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:35.000Z",
    "updated": "2022-05-10T11:39:35.000Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "d77813a5-7cf4-4148-be43-dec66bf33116"
  },
  {
    "id": "8191745a-3cb0-465d-8f2b-1ff5757f0cb5",
    "name": "force-register-domain",
    "value": "$${domain}",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.876Z",
    "updated": "2022-05-10T11:39:34.876Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "834795f7-c16e-444f-9d02-8f0f177976c2",
    "name": "local-network-acl",
    "value": "localnet.auto",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.971Z",
    "updated": "2022-05-10T11:39:34.971Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "d77813a5-7cf4-4148-be43-dec66bf33116"
  },
  {
    "id": "83b7ec94-cf2b-43d1-87f8-4445a7351b32",
    "name": "accept-blind-reg",
    "value": "true",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.830Z",
    "updated": "2022-05-10T11:39:34.830Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "83ef28ff-e478-4a5e-b00e-b3f1a4dfe494",
    "name": "manage-shared-appearance",
    "value": "true",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.472Z",
    "updated": "2022-05-10T11:39:34.472Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "84150c71-748a-427a-bb73-2bccdf416775",
    "name": "hold-music",
    "value": "$${hold_music}",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.741Z",
    "updated": "2022-05-10T11:39:34.741Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "86017a33-a1c0-48f7-b4f2-587e2293a128",
    "name": "apply-register-acl",
    "value": "domains",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.440Z",
    "updated": "2022-05-10T11:39:34.440Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "866dadcd-e23d-4098-bab7-7ba8f6405c06",
    "name": "forward-unsolicited-mwi-notify",
    "value": "false",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.372Z",
    "updated": "2022-05-10T11:39:34.372Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "8a6ca06a-a571-48c4-b91f-002a23381a37",
    "name": "send-message-query-on-register",
    "value": "true",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.443Z",
    "updated": "2022-05-10T11:39:34.443Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "8ac0c0a1-2b72-4a07-af9e-2d31846bd4f8",
    "name": "apply-register-acl",
    "value": "domains",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.753Z",
    "updated": "2022-05-10T11:39:34.753Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "8af627c3-eb3d-465a-89ba-14eaafb86dd2",
    "name": "enable-rfc-5626",
    "value": "true",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.927Z",
    "updated": "2022-05-10T11:39:34.927Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "d77813a5-7cf4-4148-be43-dec66bf33116"
  },
  {
    "id": "8c109a79-ec92-4ccc-81ad-67b56bc88923",
    "name": "track-calls",
    "value": "false",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.281Z",
    "updated": "2022-05-10T11:39:34.281Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "c23ede89-6936-4b72-b0a9-62ea6a922520"
  },
  {
    "id": "8d0f29f1-fb46-4d05-9260-c8feb9af592c",
    "name": "tls-verify-date",
    "value": "true",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.337Z",
    "updated": "2022-05-10T11:39:34.337Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "c23ede89-6936-4b72-b0a9-62ea6a922520"
  },
  {
    "id": "8eeafb78-a98c-4884-952d-59f0f299e2c4",
    "name": "auth-calls",
    "value": "true",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.577Z",
    "updated": "2022-05-10T11:39:34.577Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "8f6a286e-9afe-43c8-83cb-7ce6d0333359",
    "name": "force-register-db-domain",
    "value": "$${domain}",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.879Z",
    "updated": "2022-05-10T11:39:34.879Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "90bdd323-783c-423b-8147-61aec46dd30f",
    "name": "delete-subs-on-register",
    "value": "false",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.619Z",
    "updated": "2022-05-10T11:39:34.619Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "931e003f-3b1f-48e9-ab13-bd0b29130e8f",
    "name": "NDLB-received-in-nat-reg-contact",
    "value": "true",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.847Z",
    "updated": "2022-05-10T11:39:34.847Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "947a83e4-6215-44d2-bf76-f4f041b7eea3",
    "name": "rfc2833-pt",
    "value": "101",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.274Z",
    "updated": "2022-05-10T11:39:34.274Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "c23ede89-6936-4b72-b0a9-62ea6a922520"
  },
  {
    "id": "94b43799-cdfe-4af0-9ecc-0150062b8aad",
    "name": "cid-in-1xx",
    "value": "false",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.412Z",
    "updated": "2022-05-10T11:39:34.412Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "94cb4c1b-6023-4a42-97f9-0943024e01b9",
    "name": "disable-srv",
    "value": "false",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.896Z",
    "updated": "2022-05-10T11:39:34.896Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "951d532a-65a4-4062-80b6-2953baa560a8",
    "name": "bitpacking",
    "value": "aal2",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.484Z",
    "updated": "2022-05-10T11:39:34.484Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "95d3b02e-ff1d-49f9-a66b-8d267308c984",
    "name": "tls-verify-date",
    "value": "true",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:35.042Z",
    "updated": "2022-05-10T11:39:35.043Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "d77813a5-7cf4-4148-be43-dec66bf33116"
  },
  {
    "id": "96a9888d-43b6-495f-a2db-99113239246b",
    "name": "inbound-bypass-media",
    "value": "true",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.545Z",
    "updated": "2022-05-10T11:39:34.545Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "977c9991-ec4d-4982-8825-712e6792583e",
    "name": "caller-id-type",
    "value": "rpid",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.450Z",
    "updated": "2022-05-10T11:39:34.450Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "98f47643-1ab5-497c-91a3-d485c659ab81",
    "name": "disable-transcoding",
    "value": "true",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.842Z",
    "updated": "2022-05-10T11:39:34.842Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "9a2bb13b-1f84-4fd0-9222-7c030fa29219",
    "name": "outbound-codec-prefs",
    "value": "$${outbound_codec_prefs}",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.950Z",
    "updated": "2022-05-10T11:39:34.950Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "d77813a5-7cf4-4148-be43-dec66bf33116"
  },
  {
    "id": "9a56a2e2-029d-4c82-a9e2-a37715633805",
    "name": "disable-register",
    "value": "true",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.885Z",
    "updated": "2022-05-10T11:39:34.885Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "9a61d9ee-bf94-4c02-af33-b9cccf3b5d25",
    "name": "apply-nat-acl",
    "value": "nat.auto",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.974Z",
    "updated": "2022-05-10T11:39:34.974Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "d77813a5-7cf4-4148-be43-dec66bf33116"
  },
  {
    "id": "9b229b88-a5ca-4dcf-8a66-e47bffb15fc0",
    "name": "ext-rtp-ip",
    "value": "$${external_rtp_ip}",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.859Z",
    "updated": "2022-05-10T11:39:34.859Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "9ca79e6b-62af-4ce5-8997-51f647d2a10a",
    "name": "odbc-dsn",
    "value": "$${dsn}",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.345Z",
    "updated": "2022-05-10T11:39:34.345Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "c23ede89-6936-4b72-b0a9-62ea6a922520"
  },
  {
    "id": "9dcef7cc-fc41-4002-83f7-5e3e973c3036",
    "name": "caller-id-type",
    "value": "pid",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.453Z",
    "updated": "2022-05-10T11:39:34.453Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "9e7a13e1-ad89-4279-a5a9-63098ea2b552",
    "name": "rtp-autoflush-during-bridge",
    "value": "false",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.534Z",
    "updated": "2022-05-10T11:39:34.534Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "9f537e84-b617-4772-a885-86eeb2440cf8",
    "name": "ext-rtp-ip",
    "value": "$${external_rtp_ip}",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:35.014Z",
    "updated": "2022-05-10T11:39:35.014Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "d77813a5-7cf4-4148-be43-dec66bf33116"
  },
  {
    "id": "9fdde420-9ed9-4b1a-9d7a-66c74d02c705",
    "name": "ext-sip-ip",
    "value": "$${external_sip_ip}",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.592Z",
    "updated": "2022-05-10T11:39:34.592Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "9fef3b8a-e309-4ac0-9117-e9bf14468511",
    "name": "ext-sip-ip",
    "value": "$${external_sip_ip}",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.862Z",
    "updated": "2022-05-10T11:39:34.862Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "a07809d1-e4e4-485d-a0b6-7786d76e2715",
    "name": "NDLB-broken-auth-hash",
    "value": "true",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.572Z",
    "updated": "2022-05-10T11:39:34.572Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "a1aae3b1-ec3e-4a1f-a613-ea6c175bdb8f",
    "name": "renegotiate-codec-on-hold",
    "value": "true",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.676Z",
    "updated": "2022-05-10T11:39:34.676Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "a1d215f3-a58b-4d03-9ae8-2c4eaa4a95f8",
    "name": "stun-auto-disable",
    "value": "true",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.894Z",
    "updated": "2022-05-10T11:39:34.894Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "a35a2ac1-ca9c-4ecf-92c0-50c84b37b3c3",
    "name": "bind-params",
    "value": "transport=udp",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.776Z",
    "updated": "2022-05-10T11:39:34.777Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "a3e0e4fa-f467-41ae-9a37-42ed6859e075",
    "name": "suppress-cng",
    "value": "true",
    "enabled": "false",
    "description": null,
    "created": "2022-05-10T11:39:34.994Z",
    "updated": "2022-11-29T19:33:45.255Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "d77813a5-7cf4-4148-be43-dec66bf33116"
  },
  {
    "id": "a4d009ca-a5fc-48ca-8a57-c73571cfaf2b",
    "name": "rtp-ip",
    "value": "$${local_ip_v6}",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.736Z",
    "updated": "2022-05-10T11:39:34.736Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "a50bae22-c581-4122-a4a4-a2d777fd7a00",
    "name": "multiple-registrations",
    "value": "contact",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.492Z",
    "updated": "2022-05-10T11:39:34.492Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "a5e40cbf-3cee-48b1-bd8e-ad1fcaa2ba28",
    "name": "tls-verify-policy",
    "value": "all|subjects_all",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.339Z",
    "updated": "2022-05-10T11:39:34.339Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "c23ede89-6936-4b72-b0a9-62ea6a922520"
  },
  {
    "id": "a7a01f68-f7a9-4856-b276-c5b509368a4b",
    "name": "force-register-db-domain",
    "value": "$${domain}",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.616Z",
    "updated": "2022-05-10T11:39:34.616Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "a88dd107-8911-4f93-a760-9f723d3e795a",
    "name": "apply-nat-acl",
    "value": "nat.auto",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.409Z",
    "updated": "2022-05-10T11:39:34.409Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "a9679026-68a0-4a02-9087-4530c200292f",
    "name": "inbound-codec-negotiation",
    "value": "generous",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.308Z",
    "updated": "2022-05-10T11:39:34.308Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "c23ede89-6936-4b72-b0a9-62ea6a922520"
  },
  {
    "id": "a9768515-55d3-4a11-80da-933ead2ceaec",
    "name": "zrtp-passthru",
    "value": "true",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.956Z",
    "updated": "2022-05-10T11:39:34.956Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "d77813a5-7cf4-4148-be43-dec66bf33116"
  },
  {
    "id": "aa65f3f3-e9bb-4034-bd25-b2d710ca92f9",
    "name": "auth-subscriptions",
    "value": "true",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.313Z",
    "updated": "2022-05-10T11:39:34.313Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "c23ede89-6936-4b72-b0a9-62ea6a922520"
  },
  {
    "id": "aa7ebdca-1bc7-457a-9dc3-75e0dfaa2dc3",
    "name": "outbound-codec-prefs",
    "value": "$${global_codec_prefs}",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.396Z",
    "updated": "2022-05-10T11:39:34.396Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "ac070066-f5b9-4bda-b41f-fdf7453f1cc1",
    "name": "auth-calls",
    "value": "true",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.850Z",
    "updated": "2022-05-10T11:39:34.850Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "ada35e34-4a73-48c6-81ea-7e03eb11712e",
    "name": "sip-port",
    "value": "$${internal_sip_port}",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.382Z",
    "updated": "2022-05-10T11:39:34.382Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "ae234393-55d3-4bad-9726-1f02e7b95df5",
    "name": "minimum-session-expires",
    "value": "120",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.431Z",
    "updated": "2022-05-10T11:39:34.431Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "ae3437c9-0e5e-49ca-96a2-4cde67eec084",
    "name": "context",
    "value": "test1.djangopbx.com",
    "enabled": "true",
    "description": null,
    "created": "2022-05-10T11:39:34.377Z",
    "updated": "2022-11-14T19:34:14.696Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "af4889d9-1543-4de6-9986-21fdddaef562",
    "name": "nat-options-ping",
    "value": "true",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.682Z",
    "updated": "2022-05-10T11:39:34.682Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "af936e09-9fce-4332-a768-9c3b5e3dcbbb",
    "name": "tls-verify-date",
    "value": "true",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.799Z",
    "updated": "2022-05-10T11:39:34.799Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "b01fa402-43b5-4535-91bd-ab0d55ff33f2",
    "name": "user-agent-string",
    "value": "DCM",
    "enabled": "true",
    "description": null,
    "created": "2022-05-10T11:39:34.913Z",
    "updated": "2022-11-29T18:19:23.357Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "d77813a5-7cf4-4148-be43-dec66bf33116"
  },
  {
    "id": "b1426e0d-71fc-401c-8eb0-9d1aada31a11",
    "name": "tls-verify-depth",
    "value": "2",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.526Z",
    "updated": "2022-05-10T11:39:34.526Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "b21e2ca7-09cf-46fd-861d-e7b4aa9fd7fd",
    "name": "dtmf-type",
    "value": "rfc2833",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.284Z",
    "updated": "2022-05-10T11:39:34.284Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "c23ede89-6936-4b72-b0a9-62ea6a922520"
  },
  {
    "id": "b29eaedb-b8bd-47eb-858b-9a59e66005ba",
    "name": "auth-calls",
    "value": "true",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.312Z",
    "updated": "2022-05-10T11:39:34.312Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "c23ede89-6936-4b72-b0a9-62ea6a922520"
  },
  {
    "id": "b3438605-c366-4019-9449-2b9450b47121",
    "name": "nonce-ttl",
    "value": "60",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.839Z",
    "updated": "2022-05-10T11:39:34.839Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "b4c8cdb3-2e5d-47b5-b556-2216affb394d",
    "name": "record-template",
    "value": "$${recordings_dir}/${caller_id_number}.${strftime(%Y-%m-%d-%H-%M-%S)}.${record_ext}",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.756Z",
    "updated": "2022-05-10T11:39:34.756Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "b4e08e7d-ec19-495f-b446-b91239461dbf",
    "name": "sip-ip",
    "value": "$${local_ip_v4}",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.404Z",
    "updated": "2022-05-10T11:39:34.404Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "b4fb7e15-fe39-4d8e-9798-da01c449435a",
    "name": "tls-cert-dir",
    "value": "$${internal_ssl_dir}",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.514Z",
    "updated": "2022-05-10T11:39:34.514Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "b5128c06-66e0-41fa-b674-706c1d361ae6",
    "name": "rtp-ip",
    "value": "$${local_ip_v6}",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.317Z",
    "updated": "2022-05-10T11:39:34.317Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "c23ede89-6936-4b72-b0a9-62ea6a922520"
  },
  {
    "id": "b583dba4-7302-4cdc-ab03-6a20b4b8ec80",
    "name": "timer-T1X64",
    "value": "32000",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.665Z",
    "updated": "2022-05-10T11:39:34.665Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "b7d6f443-d0f6-429d-8ca5-d2819921f62b",
    "name": "record-path",
    "value": "$${recordings_dir}",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.459Z",
    "updated": "2022-05-10T11:39:34.459Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "b835df49-524f-4c0f-9257-299a802f109d",
    "name": "unregister-on-options-fail",
    "value": "true",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.500Z",
    "updated": "2022-05-10T11:39:34.500Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "b88a2ce0-3b97-4fc5-9f51-46d377bf76af",
    "name": "disable-srv503",
    "value": "true",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.423Z",
    "updated": "2022-05-10T11:39:34.423Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "b897ad79-839f-4e0b-bdb9-c4753ebdf370",
    "name": "liberal-dtmf",
    "value": "true",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.364Z",
    "updated": "2022-05-10T11:39:34.364Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "b99764f3-a511-45cd-91f3-71f24e63457e",
    "name": "tls-verify-depth",
    "value": "2",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.340Z",
    "updated": "2022-05-10T11:39:34.340Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "c23ede89-6936-4b72-b0a9-62ea6a922520"
  },
  {
    "id": "ba0972a8-996b-4c9f-a540-af20824b11d6",
    "name": "manage-presence",
    "value": "false",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.300Z",
    "updated": "2022-05-10T11:39:34.300Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "c23ede89-6936-4b72-b0a9-62ea6a922520"
  },
  {
    "id": "ba511f6a-eec7-4646-aa73-e153b33ac69e",
    "name": "tls-verify-in-subjects",
    "value": "",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.342Z",
    "updated": "2022-05-10T11:39:34.342Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "c23ede89-6936-4b72-b0a9-62ea6a922520"
  },
  {
    "id": "ba5287d1-9beb-4602-b0c3-d953c9341078",
    "name": "sip-trace",
    "value": "no",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.359Z",
    "updated": "2022-05-10T11:39:34.359Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "ba6b4f4f-76ff-4f2f-adc0-6e58a6d8a1cf",
    "name": "watchdog-event-timeout",
    "value": "30000",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.369Z",
    "updated": "2022-05-10T11:39:34.369Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "bb1b0d1f-266e-4bb4-bc20-3191b34a315c",
    "name": "wss-binding",
    "value": ":7443",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.685Z",
    "updated": "2022-05-10T11:39:34.685Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "bb606f6d-ee1a-4008-bf4c-40dea566be84",
    "name": "tls-cert-dir",
    "value": "$${external_ssl_dir}",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:35.037Z",
    "updated": "2022-05-10T11:39:35.037Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "d77813a5-7cf4-4148-be43-dec66bf33116"
  },
  {
    "id": "bc47ece3-37f2-4943-93ea-3a0475e7d7f2",
    "name": "odbc-dsn",
    "value": "$${dsn}",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:35.057Z",
    "updated": "2022-05-10T11:39:35.057Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "d77813a5-7cf4-4148-be43-dec66bf33116"
  },
  {
    "id": "bc98248e-4299-426f-bcf8-7fed07b4393c",
    "name": "disable-transfer",
    "value": "true",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.882Z",
    "updated": "2022-05-10T11:39:34.882Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "bcdb6ee2-f19f-4374-9096-0e2d5072ec2a",
    "name": "tls-verify-depth",
    "value": "2",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.804Z",
    "updated": "2022-05-10T11:39:34.804Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "bdd372b1-2aa8-4baa-b52f-65594f73105d",
    "name": "sip-port",
    "value": "$${external_sip_port}",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.277Z",
    "updated": "2022-05-10T11:39:34.277Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "c23ede89-6936-4b72-b0a9-62ea6a922520"
  },
  {
    "id": "be5888b2-b03c-4e13-9212-ca6f9f0719a9",
    "name": "inbound-late-negotiation",
    "value": "true",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.827Z",
    "updated": "2022-05-10T11:39:34.827Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "be8e95f8-197e-4bec-8d9c-e65b9ca5aa8b",
    "name": "auth-subscriptions",
    "value": "true",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.853Z",
    "updated": "2022-05-10T11:39:34.853Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "bfd64208-0258-43d1-88fe-a33846c06f01",
    "name": "dialplan",
    "value": "XML",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.933Z",
    "updated": "2022-05-10T11:39:34.933Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "d77813a5-7cf4-4148-be43-dec66bf33116"
  },
  {
    "id": "c071ca3f-fdae-4214-869a-0a75a390f59a",
    "name": "dtmf-type",
    "value": "rfc2833",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.942Z",
    "updated": "2022-05-10T11:39:34.942Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "d77813a5-7cf4-4148-be43-dec66bf33116"
  },
  {
    "id": "c0f678bb-aa88-4ea3-8139-7da59afb99c0",
    "name": "enable-100rel",
    "value": "false",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.744Z",
    "updated": "2022-05-10T11:39:34.744Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "c1a1f3eb-d400-4a99-85ca-2461e63b1c45",
    "name": "tls-sip-port",
    "value": "$${external_tls_port}",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.332Z",
    "updated": "2022-05-10T11:39:34.332Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "c23ede89-6936-4b72-b0a9-62ea6a922520"
  },
  {
    "id": "c336a2ed-ece0-4b81-ab54-d9e1b7b0b71d",
    "name": "inbound-codec-negotiation",
    "value": "generous",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.495Z",
    "updated": "2022-05-10T11:39:34.495Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "c33b6dbf-77d4-40fd-963c-abd06c0001bd",
    "name": "rtp-ip",
    "value": "$${local_ip_v4}",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:35.008Z",
    "updated": "2022-05-10T11:39:35.008Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "d77813a5-7cf4-4148-be43-dec66bf33116"
  },
  {
    "id": "c603bee8-69f5-47a5-874f-fb440208e5e5",
    "name": "ext-sip-ip",
    "value": "$${external_sip_ip}",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.321Z",
    "updated": "2022-05-10T11:39:34.321Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "c23ede89-6936-4b72-b0a9-62ea6a922520"
  },
  {
    "id": "c648def3-8cbe-43a6-bb23-cf166e870452",
    "name": "enable-timer",
    "value": "false",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.428Z",
    "updated": "2022-05-10T11:39:34.429Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "c77b986b-59fc-4687-95e6-3bdbdcb5296b",
    "name": "track-calls",
    "value": "false",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.936Z",
    "updated": "2022-05-10T11:39:34.936Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "d77813a5-7cf4-4148-be43-dec66bf33116"
  },
  {
    "id": "c7e676fa-64ff-42ad-b127-f00a3342b350",
    "name": "enable-compact-headers",
    "value": "true",
    "enabled": "true",
    "description": null,
    "created": "2022-11-29T17:19:00.781Z",
    "updated": "2022-11-29T17:19:00.781Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "d77813a5-7cf4-4148-be43-dec66bf33116"
  },
  {
    "id": "c804be2d-6c72-435e-b12d-430c21cdc18b",
    "name": "rtcp-audio-interval-msec",
    "value": "5000",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.621Z",
    "updated": "2022-05-10T11:39:34.621Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "cc355d1d-72db-4a63-ac3c-ad55f070e57c",
    "name": "sip-trace",
    "value": "no",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.702Z",
    "updated": "2022-05-10T11:39:34.702Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "cdd806b7-2a78-4e3f-915b-a0286b70223f",
    "name": "inbound-codec-negotiation",
    "value": "generous",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.997Z",
    "updated": "2022-05-10T11:39:34.997Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "d77813a5-7cf4-4148-be43-dec66bf33116"
  },
  {
    "id": "cf17b77e-6937-4eb0-90b7-b1f193b3c59f",
    "name": "disable-srv503",
    "value": "true",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.965Z",
    "updated": "2022-05-10T11:39:34.965Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "d77813a5-7cf4-4148-be43-dec66bf33116"
  },
  {
    "id": "cf68d728-37e6-4179-9e01-954564108312",
    "name": "disable-srv503",
    "value": "true",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.747Z",
    "updated": "2022-05-10T11:39:34.747Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "d0006c4a-212e-44c7-9d4f-2fb799076ca7",
    "name": "pass-rfc2833",
    "value": "true",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.540Z",
    "updated": "2022-05-10T11:39:34.540Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "d050bfab-392b-4de9-ab7f-cde42ae91318",
    "name": "tls-only",
    "value": "false",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.329Z",
    "updated": "2022-05-10T11:39:34.329Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "c23ede89-6936-4b72-b0a9-62ea6a922520"
  },
  {
    "id": "d067f03b-b7c0-4eb2-b8de-9369d7cf15ed",
    "name": "dtmf-type",
    "value": "rfc2833",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.388Z",
    "updated": "2022-05-10T11:39:34.388Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "d176a772-7c07-4c68-86eb-dec58338a923",
    "name": "dialplan",
    "value": "XML",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.385Z",
    "updated": "2022-05-10T11:39:34.385Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "d38ca467-1390-4c1d-8797-3f42395da1ce",
    "name": "rtp-hold-timeout-sec",
    "value": "1800",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:35.022Z",
    "updated": "2022-05-10T11:39:35.022Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "d77813a5-7cf4-4148-be43-dec66bf33116"
  },
  {
    "id": "d4e76d71-f6e7-467b-9f85-a81c14c74ca2",
    "name": "aggressive-nat-detection",
    "value": "true",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.417Z",
    "updated": "2022-05-10T11:39:34.417Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "d6455a25-2820-4b54-8d28-2a4a8d15bc9b",
    "name": "tls-version",
    "value": "$${sip_tls_version}",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:35.054Z",
    "updated": "2022-05-10T11:39:35.054Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "d77813a5-7cf4-4148-be43-dec66bf33116"
  },
  {
    "id": "d66a5e4b-dc8e-47e1-a54a-c5c5b4fa48a0",
    "name": "stun-enabled",
    "value": "true",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.891Z",
    "updated": "2022-05-10T11:39:34.891Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "d68ba8d6-dc3b-4f71-8fb9-54d8ee1f27da",
    "name": "tls-only",
    "value": "false",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.506Z",
    "updated": "2022-05-10T11:39:34.506Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "d6a829d6-002f-48a4-92bd-9e866bb39dce",
    "name": "user-agent-string",
    "value": "DCM",
    "enabled": "true",
    "description": null,
    "created": "2022-05-10T11:39:34.355Z",
    "updated": "2022-11-29T18:20:08.728Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "d70692e5-dc22-4485-926b-b7d388000c5a",
    "name": "tls-passphrase",
    "value": "",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:35.040Z",
    "updated": "2022-05-10T11:39:35.040Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "d77813a5-7cf4-4148-be43-dec66bf33116"
  },
  {
    "id": "d71a9928-fb8a-44c9-8b70-5a211a7380c2",
    "name": "force-register-db-domain",
    "value": "$${domain}",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.307Z",
    "updated": "2022-05-10T11:39:34.307Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "c23ede89-6936-4b72-b0a9-62ea6a922520"
  },
  {
    "id": "d81902cf-6ac6-4439-8624-3033b6df8436",
    "name": "sip-ip",
    "value": "$${local_ip_v4}",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:35.011Z",
    "updated": "2022-05-10T11:39:35.011Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "d77813a5-7cf4-4148-be43-dec66bf33116"
  },
  {
    "id": "d848465b-8b74-45a5-ab4b-04dc220a5e58",
    "name": "tls-bind-params",
    "value": "transport=tls",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.330Z",
    "updated": "2022-05-10T11:39:34.330Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "c23ede89-6936-4b72-b0a9-62ea6a922520"
  },
  {
    "id": "d8ae0029-8743-4f7f-b5bd-93a333919949",
    "name": "sip-ip",
    "value": "$${local_ip_v6}",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.738Z",
    "updated": "2022-05-10T11:39:34.738Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "d8d5aeb6-a388-424b-a824-ea252c38889c",
    "name": "tls-sip-port",
    "value": "$${internal_tls_port}",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.791Z",
    "updated": "2022-05-10T11:39:34.791Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "d913156f-ff76-4997-b9ee-62537a3661a0",
    "name": "rtp-timeout-sec",
    "value": "300",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.865Z",
    "updated": "2022-05-10T11:39:34.865Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "d973076f-8da7-428c-8318-4c22ce672aaf",
    "name": "suppress-cng",
    "value": "true",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.560Z",
    "updated": "2022-05-10T11:39:34.560Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "daa27193-f1b2-49aa-965b-b14957237f1c",
    "name": "timer-T1",
    "value": "500",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.661Z",
    "updated": "2022-05-10T11:39:34.661Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "db98d7ec-3004-475f-a986-89e258c470b9",
    "name": "disable-srv503",
    "value": "true",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.297Z",
    "updated": "2022-05-10T11:39:34.297Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "c23ede89-6936-4b72-b0a9-62ea6a922520"
  },
  {
    "id": "dc8a363c-f643-4965-882d-4c0eac759f7c",
    "name": "tls-passphrase",
    "value": "",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.335Z",
    "updated": "2022-05-10T11:39:34.335Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "c23ede89-6936-4b72-b0a9-62ea6a922520"
  },
  {
    "id": "dcf9f6dc-c1b4-49fb-ba65-6f4646bbd23e",
    "name": "send-presence-on-register",
    "value": "true",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.447Z",
    "updated": "2022-05-10T11:39:34.447Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "dec21d52-576c-474d-873a-de3f4fe1bcc4",
    "name": "NDLB-force-rport",
    "value": "safe",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.638Z",
    "updated": "2022-05-10T11:39:34.638Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "def54c16-cd0d-4604-8659-f69b3b9d1460",
    "name": "watchdog-step-timeout",
    "value": "30000",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.367Z",
    "updated": "2022-05-10T11:39:34.367Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "df17bd5c-df47-438b-b0a7-008b0e132c54",
    "name": "ext-rtp-ip",
    "value": "$${external_rtp_ip}",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.320Z",
    "updated": "2022-05-10T11:39:34.320Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "c23ede89-6936-4b72-b0a9-62ea6a922520"
  },
  {
    "id": "df8d7c4d-e6a4-471d-ad16-e573f9bc4268",
    "name": "auth-calls",
    "value": "false",
    "enabled": "true",
    "description": null,
    "created": "2022-05-10T11:39:35.003Z",
    "updated": "2022-11-29T19:33:45.253Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "d77813a5-7cf4-4148-be43-dec66bf33116"
  },
  {
    "id": "e0836d9f-68c7-449d-950c-2dfa324e416c",
    "name": "tls-bind-params",
    "value": "transport=tls",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.788Z",
    "updated": "2022-05-10T11:39:34.788Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "e0b8984f-075c-4b4e-ac62-c89d75c64d6c",
    "name": "sip-capture",
    "value": "no",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.272Z",
    "updated": "2022-05-10T11:39:34.272Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "c23ede89-6936-4b72-b0a9-62ea6a922520"
  },
  {
    "id": "e226f763-e816-4669-bae0-58cfe2155ed5",
    "name": "local-network-acl",
    "value": "localnet.auto",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.299Z",
    "updated": "2022-05-10T11:39:34.299Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "c23ede89-6936-4b72-b0a9-62ea6a922520"
  },
  {
    "id": "e343b176-05f1-48aa-ac73-a54ce2a8b41f",
    "name": "user-agent-string",
    "value": "FreeSWITCH",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.266Z",
    "updated": "2022-05-10T11:39:34.266Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "c23ede89-6936-4b72-b0a9-62ea6a922520"
  },
  {
    "id": "e35a1492-af88-41f6-8b57-5454997a1541",
    "name": "sip-trace",
    "value": "no",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.270Z",
    "updated": "2022-05-10T11:39:34.270Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "c23ede89-6936-4b72-b0a9-62ea6a922520"
  },
  {
    "id": "e57ff70e-7b6a-4ccf-a16a-7e8df8c513ed",
    "name": "rtp-timer-name",
    "value": "soft",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.733Z",
    "updated": "2022-05-10T11:39:34.733Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "e60b17f0-1d87-420d-8d74-0eb87bc93198",
    "name": "disable-transcoding",
    "value": "true",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.566Z",
    "updated": "2022-05-10T11:39:34.566Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "e76de7b5-9157-43e1-9cef-a5e2f8e109fe",
    "name": "presence-proto-lookup",
    "value": "true",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.363Z",
    "updated": "2022-05-10T11:39:34.363Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "e7c2c2ec-8eda-48d8-92c9-fbc5ca0178a6",
    "name": "dtmf-duration",
    "value": "2000",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.286Z",
    "updated": "2022-05-10T11:39:34.286Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "c23ede89-6936-4b72-b0a9-62ea6a922520"
  },
  {
    "id": "e80f22f1-d862-43bf-9ed0-064c1a4e97ed",
    "name": "dtmf-duration",
    "value": "2000",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.721Z",
    "updated": "2022-05-10T11:39:34.721Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "e857db3a-a1f6-44f6-98cf-ff664c0c567d",
    "name": "tls-sip-port",
    "value": "$${external_tls_port}",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:35.034Z",
    "updated": "2022-05-10T11:39:35.034Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "d77813a5-7cf4-4148-be43-dec66bf33116"
  },
  {
    "id": "e9578f4c-4cf0-4ce8-ae05-27a5f4f77c9e",
    "name": "manage-presence",
    "value": "false",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.968Z",
    "updated": "2022-05-10T11:39:34.968Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "d77813a5-7cf4-4148-be43-dec66bf33116"
  },
  {
    "id": "e9e7d9a6-d3d5-49b1-9767-66e6e38cb5a5",
    "name": "force-register-domain",
    "value": "$${domain}",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.305Z",
    "updated": "2022-05-10T11:39:34.305Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "c23ede89-6936-4b72-b0a9-62ea6a922520"
  },
  {
    "id": "e9f32d41-90ee-4cca-9f15-7abc9dde1bec",
    "name": "tls-verify-date",
    "value": "true",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.520Z",
    "updated": "2022-05-10T11:39:34.520Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "ea66099c-415b-41ee-bd07-bc5f7553be0e",
    "name": "presence-probe-on-register",
    "value": "true",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.469Z",
    "updated": "2022-05-10T11:39:34.469Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "eb00174b-a76f-4e5d-bf42-b9ae860bed31",
    "name": "rtp-autofix-timing",
    "value": "false",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.647Z",
    "updated": "2022-05-10T11:39:34.647Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "eb195a03-4e5b-4227-9152-8c0910149caa",
    "name": "rtp-ip",
    "value": "$${local_ip_v4}",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.401Z",
    "updated": "2022-05-10T11:39:34.401Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "ecb4ee70-d9ef-4895-b279-3563b06f2063",
    "name": "enable-compact-headers",
    "value": "true",
    "enabled": "true",
    "description": null,
    "created": "2022-05-10T11:39:34.426Z",
    "updated": "2022-11-29T17:19:34.471Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "ee00b7ce-4266-4bbd-959f-7c7a54cf1b37",
    "name": "tls-verify-in-subjects",
    "value": "",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:35.052Z",
    "updated": "2022-05-10T11:39:35.052Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "d77813a5-7cf4-4148-be43-dec66bf33116"
  },
  {
    "id": "effbe326-5c06-44b0-b405-9db3cb780cfc",
    "name": "odbc-dsn",
    "value": "$${dsn}",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.818Z",
    "updated": "2022-05-10T11:39:34.818Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "effdf262-8d28-4d0b-843a-b53053bc31f7",
    "name": "enable-100rel",
    "value": "true",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.420Z",
    "updated": "2022-05-10T11:39:34.420Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "f2dc49a8-01f5-4423-8986-16ca9a43c8e0",
    "name": "timer-T4",
    "value": "4000",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.670Z",
    "updated": "2022-05-10T11:39:34.670Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "f31976fb-b6bd-4c57-a207-a4ceec2dfe44",
    "name": "apply-inbound-acl",
    "value": "domains",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.434Z",
    "updated": "2022-05-10T11:39:34.434Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "f46c2377-bba3-4ac9-a285-7d84feff0835",
    "name": "tls-bind-params",
    "value": "transport=tls",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:35.031Z",
    "updated": "2022-05-10T11:39:35.031Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "d77813a5-7cf4-4148-be43-dec66bf33116"
  },
  {
    "id": "f4965449-bdbc-44dd-9cb7-9023555c0cf9",
    "name": "presence-hosts",
    "value": "$${domain}",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.985Z",
    "updated": "2022-05-10T11:39:34.985Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "d77813a5-7cf4-4148-be43-dec66bf33116"
  },
  {
    "id": "f71e593c-451c-450d-a45b-c0e5dfbf29b5",
    "name": "tls-sip-port",
    "value": "$${internal_tls_port}",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.511Z",
    "updated": "2022-05-10T11:39:34.511Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "f8cffc02-fd5a-4a41-afdd-d05fb52618b9",
    "name": "force-register-db-domain",
    "value": "$${domain}",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.991Z",
    "updated": "2022-05-10T11:39:34.991Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "d77813a5-7cf4-4148-be43-dec66bf33116"
  },
  {
    "id": "fb6744d8-d304-40b4-9026-b0da725858d2",
    "name": "log-auth-failures",
    "value": "true",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.370Z",
    "updated": "2022-05-10T11:39:34.370Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "fc9693d8-0340-4bde-9720-295c4597cad1",
    "name": "rtp-timer-name",
    "value": "soft",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.398Z",
    "updated": "2022-05-10T11:39:34.398Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "fe34f5f6-607f-4afc-9c93-53319dfe14ba",
    "name": "unregister-on-options-fail",
    "value": "true",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.779Z",
    "updated": "2022-05-10T11:39:34.779Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "fe634b8f-2afb-4dbc-80d3-9b682a99aad9",
    "name": "tls-cert-dir",
    "value": "$${external_ssl_dir}",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.334Z",
    "updated": "2022-05-10T11:39:34.334Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "c23ede89-6936-4b72-b0a9-62ea6a922520"
  },
  {
    "id": "fe7e7418-9386-4771-b6a2-1f6777c1c739",
    "name": "hold-music",
    "value": "$${hold_music}",
    "enabled": "true",
    "description": "",
    "created": "2022-05-10T11:39:34.290Z",
    "updated": "2022-05-10T11:39:34.291Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "c23ede89-6936-4b72-b0a9-62ea6a922520"
  },
  {
    "id": "fed73ad5-01d1-4589-99fb-22738e5f7459",
    "name": "sip-expires-max-deviation",
    "value": "600",
    "enabled": "false",
    "description": "",
    "created": "2022-05-10T11:39:34.605Z",
    "updated": "2022-05-10T11:39:34.606Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "eb8efb9e-db59-4f1a-9f36-15678a38aa76",
    "name": "hold-music",
    "value": "$${hold_music}",
    "enabled": "true",
    "description": "",
    "created": "2024-10-28T18:35:54.134Z",
    "updated": "2024-10-28T18:35:54.134Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "15122eec-b64a-45c1-8e96-13c7983b0932"
  },
  {
    "id": "051b2efd-76bd-439b-b55c-0f41b410d433",
    "name": "sip-trace",
    "value": "no",
    "enabled": "true",
    "description": "",
    "created": "2024-10-28T18:35:54.134Z",
    "updated": "2024-10-28T18:35:54.134Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "15122eec-b64a-45c1-8e96-13c7983b0932"
  },
  {
    "id": "b7be06fc-955b-4642-85ac-eefcf4bf0fe0",
    "name": "debug",
    "value": "0",
    "enabled": "true",
    "description": "",
    "created": "2024-10-28T18:35:54.134Z",
    "updated": "2024-10-28T18:35:54.134Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "15122eec-b64a-45c1-8e96-13c7983b0932"
  },
  {
    "id": "06533b29-bc74-4963-9255-774985308d77",
    "name": "rfc2833-pt",
    "value": "101",
    "enabled": "true",
    "description": "",
    "created": "2024-10-28T18:35:54.134Z",
    "updated": "2024-10-28T18:35:54.134Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "15122eec-b64a-45c1-8e96-13c7983b0932"
  },
  {
    "id": "0c62a54c-a248-4694-8468-03ed1a037372",
    "name": "sip-capture",
    "value": "no",
    "enabled": "true",
    "description": "",
    "created": "2024-10-28T18:35:54.134Z",
    "updated": "2024-10-28T18:35:54.134Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "15122eec-b64a-45c1-8e96-13c7983b0932"
  },
  {
    "id": "11a29cf2-6a35-4265-8469-dc170cd44b28",
    "name": "tls",
    "value": "$${external_ssl_enable}",
    "enabled": "true",
    "description": "",
    "created": "2024-10-28T18:35:54.134Z",
    "updated": "2024-10-28T18:35:54.134Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "15122eec-b64a-45c1-8e96-13c7983b0932"
  },
  {
    "id": "17ec64e0-0e26-45f2-9ea2-26d4e6b9196d",
    "name": "auth-subscriptions",
    "value": "true",
    "enabled": "true",
    "description": "",
    "created": "2024-10-28T18:35:54.134Z",
    "updated": "2024-10-28T18:35:54.134Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "15122eec-b64a-45c1-8e96-13c7983b0932"
  },
  {
    "id": "372d12c6-fd0e-44e9-a488-ae1b628ca91d",
    "name": "shutdown-on-fail",
    "value": "true",
    "enabled": "false",
    "description": "",
    "created": "2024-10-28T18:35:54.134Z",
    "updated": "2024-10-28T18:35:54.134Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "15122eec-b64a-45c1-8e96-13c7983b0932"
  },
  {
    "id": "18c81380-9a7c-45a5-ac32-28fc1db4fcdf",
    "name": "rtp-timeout-sec",
    "value": "300",
    "enabled": "true",
    "description": "",
    "created": "2024-10-28T18:35:54.134Z",
    "updated": "2024-10-28T18:35:54.134Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "15122eec-b64a-45c1-8e96-13c7983b0932"
  },
  {
    "id": "14c50792-8348-4572-816a-ce1e6729efc8",
    "name": "context",
    "value": "public",
    "enabled": "true",
    "description": "",
    "created": "2024-10-28T18:35:54.134Z",
    "updated": "2024-10-28T18:35:54.134Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "15122eec-b64a-45c1-8e96-13c7983b0932"
  },
  {
    "id": "12a558dc-c3ef-4070-83b2-e0e1148952bc",
    "name": "ext-sip-ip",
    "value": "$${external_sip_ip}",
    "enabled": "true",
    "description": "",
    "created": "2024-10-28T18:35:54.134Z",
    "updated": "2024-10-28T18:35:54.134Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "15122eec-b64a-45c1-8e96-13c7983b0932"
  },
  {
    "id": "09a8b593-b53f-46e1-bea1-52d5d6a5c1dd",
    "name": "apply-inbound-acl",
    "value": "domains",
    "enabled": "true",
    "description": "",
    "created": "2024-10-28T18:35:54.134Z",
    "updated": "2024-10-28T18:35:54.134Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "15122eec-b64a-45c1-8e96-13c7983b0932"
  },
  {
    "id": "059644a4-1d97-4bdc-afb1-7537b06c677b",
    "name": "force-register-domain",
    "value": "$${domain}",
    "enabled": "false",
    "description": "",
    "created": "2024-10-28T18:35:54.134Z",
    "updated": "2024-10-28T18:35:54.134Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "15122eec-b64a-45c1-8e96-13c7983b0932"
  },
  {
    "id": "e377b521-319c-45b3-8b42-cbc9bec00623",
    "name": "apply-register-acl",
    "value": "domains",
    "enabled": "false",
    "description": "",
    "created": "2024-10-28T18:35:54.135Z",
    "updated": "2024-10-28T18:35:54.135Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "15122eec-b64a-45c1-8e96-13c7983b0932"
  },
  {
    "id": "d7b262b8-7371-4e13-ad8c-e3a3d85ea15f",
    "name": "enable-100rel",
    "value": "true",
    "enabled": "false",
    "description": "",
    "created": "2024-10-28T18:35:54.135Z",
    "updated": "2024-10-28T18:35:54.135Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "15122eec-b64a-45c1-8e96-13c7983b0932"
  },
  {
    "id": "aa7c2317-dcb0-418b-b8f9-809e870ba1de",
    "name": "inbound-codec-prefs",
    "value": "$${global_codec_prefs}",
    "enabled": "true",
    "description": "",
    "created": "2024-10-28T18:35:54.135Z",
    "updated": "2024-10-28T18:35:54.135Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "15122eec-b64a-45c1-8e96-13c7983b0932"
  },
  {
    "id": "e4543376-4382-474e-a54a-6cb75fa634e1",
    "name": "dtmf-duration",
    "value": "2000",
    "enabled": "true",
    "description": "",
    "created": "2024-10-28T18:35:54.135Z",
    "updated": "2024-10-28T18:35:54.135Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "15122eec-b64a-45c1-8e96-13c7983b0932"
  },
  {
    "id": "20bfb1bc-ee5a-4965-a53d-c880c645f7a6",
    "name": "dbname",
    "value": "share_presence",
    "enabled": "false",
    "description": "",
    "created": "2024-10-28T18:35:54.135Z",
    "updated": "2024-10-28T18:35:54.135Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "15122eec-b64a-45c1-8e96-13c7983b0932"
  },
  {
    "id": "9495b560-5360-41b2-9a7f-0ce5305400f5",
    "name": "rtp-timer-name",
    "value": "soft",
    "enabled": "true",
    "description": "",
    "created": "2024-10-28T18:35:54.135Z",
    "updated": "2024-10-28T18:35:54.135Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "15122eec-b64a-45c1-8e96-13c7983b0932"
  },
  {
    "id": "4191f266-fa6f-4472-a422-8c57de6d1968",
    "name": "tls-only",
    "value": "false",
    "enabled": "true",
    "description": "",
    "created": "2024-10-28T18:35:54.135Z",
    "updated": "2024-10-28T18:35:54.135Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "15122eec-b64a-45c1-8e96-13c7983b0932"
  },
  {
    "id": "f6783594-2748-4610-a362-11797f66e1aa",
    "name": "tls-verify-policy",
    "value": "all|subjects_all",
    "enabled": "false",
    "description": "",
    "created": "2024-10-28T18:35:54.135Z",
    "updated": "2024-10-28T18:35:54.135Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "15122eec-b64a-45c1-8e96-13c7983b0932"
  },
  {
    "id": "5fb05647-123d-4511-b79b-b16ed435fb4f",
    "name": "sip-port",
    "value": "$${external_sip_port}",
    "enabled": "true",
    "description": "",
    "created": "2024-10-28T18:35:54.135Z",
    "updated": "2024-10-28T18:35:54.135Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "15122eec-b64a-45c1-8e96-13c7983b0932"
  },
  {
    "id": "74005dee-0ffa-4415-b5fd-3a3c137bc226",
    "name": "username",
    "value": "DCM",
    "enabled": "true",
    "description": null,
    "created": "2024-10-28T18:35:54.135Z",
    "updated": "2024-10-28T18:35:54.135Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "15122eec-b64a-45c1-8e96-13c7983b0932"
  },
  {
    "id": "da4b5ae5-fd21-4096-8a7f-3fbf33689582",
    "name": "tls-verify-depth",
    "value": "2",
    "enabled": "true",
    "description": "",
    "created": "2024-10-28T18:35:54.135Z",
    "updated": "2024-10-28T18:35:54.135Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "15122eec-b64a-45c1-8e96-13c7983b0932"
  },
  {
    "id": "fbd32a28-76a3-461a-a9f2-9b090a6193a7",
    "name": "nonce-ttl",
    "value": "60",
    "enabled": "true",
    "description": "",
    "created": "2024-10-28T18:35:54.135Z",
    "updated": "2024-10-28T18:35:54.135Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "15122eec-b64a-45c1-8e96-13c7983b0932"
  },
  {
    "id": "a69da479-2253-48ba-8b76-f0b97fa20800",
    "name": "local-network-acl",
    "value": "localnet.auto",
    "enabled": "true",
    "description": "",
    "created": "2024-10-28T18:35:54.135Z",
    "updated": "2024-10-28T18:35:54.135Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "15122eec-b64a-45c1-8e96-13c7983b0932"
  },
  {
    "id": "fd52850c-6be2-40b7-9bce-36083b23af53",
    "name": "enable-rfc-5626",
    "value": "true",
    "enabled": "false",
    "description": "",
    "created": "2024-10-28T18:35:54.135Z",
    "updated": "2024-10-28T18:35:54.135Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "15122eec-b64a-45c1-8e96-13c7983b0932"
  },
  {
    "id": "2e0e8396-cb74-4c37-bad4-f93b1e892c75",
    "name": "tls-verify-date",
    "value": "true",
    "enabled": "true",
    "description": "",
    "created": "2024-10-28T18:35:54.135Z",
    "updated": "2024-10-28T18:35:54.135Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "15122eec-b64a-45c1-8e96-13c7983b0932"
  },
  {
    "id": "7d92bc25-478f-4c9a-99ac-0b3b79f5d4a6",
    "name": "outbound-codec-prefs",
    "value": "$${outbound_codec_prefs}",
    "enabled": "true",
    "description": "",
    "created": "2024-10-28T18:35:54.135Z",
    "updated": "2024-10-28T18:35:54.135Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "15122eec-b64a-45c1-8e96-13c7983b0932"
  },
  {
    "id": "c6ceb04c-702b-4a3b-bc54-c2331241b3a1",
    "name": "apply-nat-acl",
    "value": "nat.auto",
    "enabled": "true",
    "description": "",
    "created": "2024-10-28T18:35:54.135Z",
    "updated": "2024-10-28T18:35:54.135Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "15122eec-b64a-45c1-8e96-13c7983b0932"
  },
  {
    "id": "726c3a81-6aa5-4c58-8ef4-a95043a78659",
    "name": "ext-rtp-ip",
    "value": "$${external_rtp_ip}",
    "enabled": "true",
    "description": "",
    "created": "2024-10-28T18:35:54.135Z",
    "updated": "2024-10-28T18:35:54.135Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "15122eec-b64a-45c1-8e96-13c7983b0932"
  },
  {
    "id": "7f28fe3f-8dfd-401e-81df-b10b73e7a537",
    "name": "suppress-cng",
    "value": "true",
    "enabled": "false",
    "description": null,
    "created": "2024-10-28T18:35:54.135Z",
    "updated": "2024-10-28T18:35:54.135Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "15122eec-b64a-45c1-8e96-13c7983b0932"
  },
  {
    "id": "3fc3b479-979e-4ecd-ad64-b4a65aef9567",
    "name": "zrtp-passthru",
    "value": "true",
    "enabled": "true",
    "description": "",
    "created": "2024-10-28T18:35:54.135Z",
    "updated": "2024-10-28T18:35:54.135Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "15122eec-b64a-45c1-8e96-13c7983b0932"
  },
  {
    "id": "89c1b485-5df6-47e8-9f77-38ed8750e210",
    "name": "user-agent-string",
    "value": "DCM",
    "enabled": "true",
    "description": null,
    "created": "2024-10-28T18:35:54.135Z",
    "updated": "2024-10-28T18:35:54.135Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "15122eec-b64a-45c1-8e96-13c7983b0932"
  },
  {
    "id": "f88cfbf0-6971-4d51-8f64-bd87ccf3f14e",
    "name": "tls-cert-dir",
    "value": "$${external_ssl_dir}",
    "enabled": "true",
    "description": "",
    "created": "2024-10-28T18:35:54.135Z",
    "updated": "2024-10-28T18:35:54.135Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "15122eec-b64a-45c1-8e96-13c7983b0932"
  },
  {
    "id": "d1190628-a023-443f-b44b-a0a63c28c7ff",
    "name": "odbc-dsn",
    "value": "$${dsn}",
    "enabled": "false",
    "description": "",
    "created": "2024-10-28T18:35:54.135Z",
    "updated": "2024-10-28T18:35:54.135Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "15122eec-b64a-45c1-8e96-13c7983b0932"
  },
  {
    "id": "3ea0bfc1-9437-492a-87fe-203f92b61686",
    "name": "dialplan",
    "value": "XML",
    "enabled": "true",
    "description": "",
    "created": "2024-10-28T18:35:54.135Z",
    "updated": "2024-10-28T18:35:54.135Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "15122eec-b64a-45c1-8e96-13c7983b0932"
  },
  {
    "id": "0438feb7-8d11-4b3a-8abb-7c3a7c159348",
    "name": "dtmf-type",
    "value": "rfc2833",
    "enabled": "true",
    "description": "",
    "created": "2024-10-28T18:35:54.135Z",
    "updated": "2024-10-28T18:35:54.135Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "15122eec-b64a-45c1-8e96-13c7983b0932"
  },
  {
    "id": "3a132e7b-3172-4f10-b632-e2e93b36e0d8",
    "name": "rtp-ip",
    "value": "$${local_ip_v4}",
    "enabled": "true",
    "description": "",
    "created": "2024-10-28T18:35:54.136Z",
    "updated": "2024-10-28T18:35:54.136Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "15122eec-b64a-45c1-8e96-13c7983b0932"
  },
  {
    "id": "04ccec7e-0fea-4443-9806-c4812f72eb16",
    "name": "track-calls",
    "value": "false",
    "enabled": "true",
    "description": "",
    "created": "2024-10-28T18:35:54.136Z",
    "updated": "2024-10-28T18:35:54.136Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "15122eec-b64a-45c1-8e96-13c7983b0932"
  },
  {
    "id": "501ec808-e975-4c8b-887f-c9df1cc1cc3b",
    "name": "enable-compact-headers",
    "value": "true",
    "enabled": "true",
    "description": null,
    "created": "2024-10-28T18:35:54.136Z",
    "updated": "2024-10-28T18:35:54.136Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "15122eec-b64a-45c1-8e96-13c7983b0932"
  },
  {
    "id": "b3fed871-d75e-4f52-ba7c-c2c359b7b779",
    "name": "inbound-codec-negotiation",
    "value": "generous",
    "enabled": "true",
    "description": "",
    "created": "2024-10-28T18:35:54.136Z",
    "updated": "2024-10-28T18:35:54.136Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "15122eec-b64a-45c1-8e96-13c7983b0932"
  },
  {
    "id": "65797fce-be33-427f-865f-7811c4cf26c5",
    "name": "disable-srv503",
    "value": "true",
    "enabled": "false",
    "description": "",
    "created": "2024-10-28T18:35:54.136Z",
    "updated": "2024-10-28T18:35:54.136Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "15122eec-b64a-45c1-8e96-13c7983b0932"
  },
  {
    "id": "7a0b5cd0-6050-48d4-a1bf-03687b912d45",
    "name": "rtp-hold-timeout-sec",
    "value": "1800",
    "enabled": "true",
    "description": "",
    "created": "2024-10-28T18:35:54.136Z",
    "updated": "2024-10-28T18:35:54.136Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "15122eec-b64a-45c1-8e96-13c7983b0932"
  },
  {
    "id": "3c0c97f7-524c-41e5-b3e4-46060160636b",
    "name": "tls-version",
    "value": "$${sip_tls_version}",
    "enabled": "true",
    "description": "",
    "created": "2024-10-28T18:35:54.136Z",
    "updated": "2024-10-28T18:35:54.136Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "15122eec-b64a-45c1-8e96-13c7983b0932"
  },
  {
    "id": "e020a365-3167-430a-b44e-8e0b3cfcd2d3",
    "name": "tls-passphrase",
    "value": "",
    "enabled": "true",
    "description": "",
    "created": "2024-10-28T18:35:54.136Z",
    "updated": "2024-10-28T18:35:54.136Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "15122eec-b64a-45c1-8e96-13c7983b0932"
  },
  {
    "id": "cfd18f7a-b60d-4c12-8f11-1a27fff8dab9",
    "name": "sip-ip",
    "value": "$${local_ip_v4}",
    "enabled": "true",
    "description": "",
    "created": "2024-10-28T18:35:54.136Z",
    "updated": "2024-10-28T18:35:54.136Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "15122eec-b64a-45c1-8e96-13c7983b0932"
  },
  {
    "id": "610f812f-db1a-4400-8f99-ff054d1f5c97",
    "name": "auth-calls",
    "value": "false",
    "enabled": "true",
    "description": null,
    "created": "2024-10-28T18:35:54.136Z",
    "updated": "2024-10-28T18:35:54.136Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "15122eec-b64a-45c1-8e96-13c7983b0932"
  },
  {
    "id": "019d772c-8421-434e-94d1-00f2fae76231",
    "name": "tls-sip-port",
    "value": "$${external_tls_port}",
    "enabled": "true",
    "description": "",
    "created": "2024-10-28T18:35:54.136Z",
    "updated": "2024-10-28T18:35:54.136Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "15122eec-b64a-45c1-8e96-13c7983b0932"
  },
  {
    "id": "d37759c6-9a70-45fa-97f9-ebd7546fb795",
    "name": "manage-presence",
    "value": "false",
    "enabled": "true",
    "description": "",
    "created": "2024-10-28T18:35:54.136Z",
    "updated": "2024-10-28T18:35:54.136Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "15122eec-b64a-45c1-8e96-13c7983b0932"
  },
  {
    "id": "368c4df1-f3fc-4b41-9f48-86a2146e01d4",
    "name": "tls-verify-in-subjects",
    "value": "",
    "enabled": "true",
    "description": "",
    "created": "2024-10-28T18:35:54.136Z",
    "updated": "2024-10-28T18:35:54.136Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "15122eec-b64a-45c1-8e96-13c7983b0932"
  },
  {
    "id": "243bde2e-93c4-46ff-9e05-56a47c09a865",
    "name": "tls-bind-params",
    "value": "transport=tls",
    "enabled": "true",
    "description": "",
    "created": "2024-10-28T18:35:54.136Z",
    "updated": "2024-10-28T18:35:54.136Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "15122eec-b64a-45c1-8e96-13c7983b0932"
  },
  {
    "id": "d65a5676-4d89-4bd8-bbaa-4e946f41ce4b",
    "name": "presence-hosts",
    "value": "$${domain}",
    "enabled": "false",
    "description": "",
    "created": "2024-10-28T18:35:54.136Z",
    "updated": "2024-10-28T18:35:54.136Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "15122eec-b64a-45c1-8e96-13c7983b0932"
  },
  {
    "id": "b1797586-afa3-457a-9f7c-0ffc02d4e563",
    "name": "force-register-db-domain",
    "value": "$${domain}",
    "enabled": "false",
    "description": "",
    "created": "2024-10-28T18:35:54.136Z",
    "updated": "2024-10-28T18:35:54.136Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "15122eec-b64a-45c1-8e96-13c7983b0932"
  }
],
      skipDuplicates: true,
    });

    // Seeding pbx_sip_profile_domains
    await prisma.pbx_sip_profile_domains.createMany({
      data: [
  {
    "id": "1725c7a1-9890-43d2-8da8-dfd6746f1db9",
    "name": "all",
    "alias": "false",
    "parse": "true",
    "created": "2022-05-10T11:39:34.259Z",
    "updated": "2022-05-10T11:39:34.259Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "c23ede89-6936-4b72-b0a9-62ea6a922520"
  },
  {
    "id": "6ed2d566-bb01-4164-832c-ad75f85da7ec",
    "name": "all",
    "alias": "false",
    "parse": "false",
    "created": "2022-05-10T11:39:34.693Z",
    "updated": "2022-05-10T11:39:34.693Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "1bd73317-4f7f-4567-b173-33043b6da928"
  },
  {
    "id": "7e56196d-1a22-4069-a163-c77f5f96ae37",
    "name": "all",
    "alias": "false",
    "parse": "false",
    "created": "2022-05-10T11:39:34.907Z",
    "updated": "2022-05-10T11:39:34.907Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "d77813a5-7cf4-4148-be43-dec66bf33116"
  },
  {
    "id": "b8724a84-6bd0-4e8d-86af-137d72781774",
    "name": "all",
    "alias": "false",
    "parse": "false",
    "created": "2022-05-10T11:39:34.350Z",
    "updated": "2022-05-10T11:39:34.350Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "ff1d96c9-5b4a-44bb-a7d6-43363986f421"
  },
  {
    "id": "6c255798-7537-4b61-96ca-15cd0c0f4f0b",
    "name": "all",
    "alias": "false",
    "parse": "false",
    "created": "2024-10-28T18:35:54.205Z",
    "updated": "2024-10-28T18:35:54.205Z",
    "synchronised": null,
    "updated_by": "system",
    "sip_profile_id": "15122eec-b64a-45c1-8e96-13c7983b0932"
  }
],
      skipDuplicates: true,
    });

    // Seeding pbx_users
    await prisma.pbx_users.createMany({
      data: [
  {
    "id": 1321,
    "user_uuid": "b6240e62-d333-4d0f-93d6-d779d523ec3c",
    "username": "event@ev.com",
    "email": "event@ev.com",
    "status": "",
    "api_key": null,
    "enabled": "true",
    "created": "2024-11-05T20:57:20.073Z",
    "updated": "2024-11-05T20:57:20.073Z",
    "synchronised": null,
    "updated_by": "event@ev.com",
    "domain_id_id": "7a25a001-c1a9-4fe3-a1a4-82b4bc5aa587",
    "user_id": 1321
  },
  {
    "id": 1341,
    "user_uuid": "e1a74ec0-53b0-4b44-9380-b1db8ce67199",
    "username": "key@key.com",
    "email": "key@key.com",
    "status": "",
    "api_key": null,
    "enabled": "true",
    "created": "2024-11-05T21:12:16.268Z",
    "updated": "2024-11-05T21:12:16.268Z",
    "synchronised": null,
    "updated_by": "system",
    "domain_id_id": "d6fc18bc-7028-4467-8725-cfeb2ff8ed89",
    "user_id": 1341
  }
],
      skipDuplicates: true,
    });

    // Seeding pbx_vars
    await prisma.pbx_vars.createMany({
      data: [
  {
    "id": "00652c28-ad5f-47bb-b7ab-4d60fa64fee2",
    "category": "Defaults",
    "name": "default_areacode",
    "value": "208",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "60",
    "description": null,
    "created": "2022-05-10T11:39:25.265Z",
    "updated": "2022-05-10T11:39:25.265Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "02abbebb-b260-4fa0-b3c7-db3d44d11c26",
    "category": "Defaults",
    "name": "use_profile",
    "value": "internal",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "80",
    "description": null,
    "created": "2022-05-10T11:39:25.268Z",
    "updated": "2022-05-10T11:39:25.268Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "0d877924-555e-4e0a-9122-2a7b1353a14e",
    "category": "Ringtones",
    "name": "cy-ring",
    "value": "%(1500,3000,425)",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "300",
    "description": null,
    "created": "2022-05-10T11:39:25.303Z",
    "updated": "2022-05-10T11:39:25.303Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "14ef9e06-ffc9-4c68-834f-43963a85f3bd",
    "category": "Ringtones",
    "name": "ru-ring",
    "value": "%(800,3200,425)",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "500",
    "description": null,
    "created": "2022-05-10T11:39:25.332Z",
    "updated": "2022-05-10T11:39:25.332Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "1f8d82bc-bfb8-440e-b7af-62dd7c02eabd",
    "category": "Ringtones",
    "name": "hk-ring",
    "value": "%(400,200,440,480);%(400,3000,440,480)",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "390",
    "description": null,
    "created": "2022-05-10T11:39:25.316Z",
    "updated": "2022-05-10T11:39:25.316Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "1fc13450-c252-410d-a8cf-2b3fcd4d44e9",
    "category": "Codecs",
    "name": "media_mix_inbound_outbound_codecs",
    "value": "true",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "30",
    "description": null,
    "created": "2022-05-10T11:39:25.258Z",
    "updated": "2022-05-10T11:39:25.258Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "22e855a8-93c2-4e3a-bfac-d626a93a3619",
    "category": "Ringtones",
    "name": "pt-ring",
    "value": "%(1000,5000,400)",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "380",
    "description": null,
    "created": "2022-05-10T11:39:25.314Z",
    "updated": "2022-05-10T11:39:25.315Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "25fbf401-4685-49f0-b069-de008271a2cc",
    "category": "Ringtones",
    "name": "hu-ring",
    "value": "%(1250,3750,425)",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "400",
    "description": null,
    "created": "2022-05-10T11:39:25.317Z",
    "updated": "2022-05-10T11:39:25.317Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "264b2977-8440-4e47-bf77-548516e63a01",
    "category": "IP Address",
    "name": "external_rtp_ip",
    "value": "$${local_ip_v4}",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "230",
    "description": null,
    "created": "2022-05-10T11:39:25.292Z",
    "updated": "2022-05-10T11:39:25.292Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "2685414b-797c-4aaf-b5de-f29e975287f7",
    "category": "Ringtones",
    "name": "ro-ring",
    "value": "%(1850,4150,475,425)",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "470",
    "description": null,
    "created": "2022-05-10T11:39:25.328Z",
    "updated": "2022-05-10T11:39:25.328Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "29d1a1dc-6276-4c04-98da-48ce2c6104e6",
    "category": "Ringtones",
    "name": "us-ring",
    "value": "%(2000,4000,440,480)",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "540",
    "description": null,
    "created": "2022-05-10T11:39:25.339Z",
    "updated": "2022-05-10T11:39:25.339Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "2cdfc89d-0932-4515-9542-b4027a6ae807",
    "category": "SIP Profile: Internal",
    "name": "internal_ssl_enable",
    "value": "false",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "710",
    "description": null,
    "created": "2022-05-10T11:39:25.364Z",
    "updated": "2022-05-10T11:39:25.364Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "3031d773-f2ef-4b44-8891-35739d98d603",
    "category": "SIP Profile: External",
    "name": "external_ssl_enable",
    "value": "false",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "670",
    "description": null,
    "created": "2022-05-10T11:39:25.359Z",
    "updated": "2022-05-10T11:39:25.359Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "31fa14c3-59e3-4286-aa22-59b1b172e83e",
    "category": "Ringtones",
    "name": "ca-ring",
    "value": "%(2000,4000,440,480)",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "280",
    "description": null,
    "created": "2022-05-10T11:39:25.300Z",
    "updated": "2022-05-10T11:39:25.300Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "333c0304-b5df-4573-9c01-b6f221a8e660",
    "category": "Ringtones",
    "name": "pk-ring",
    "value": "%(1000,2000,400)",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "450",
    "description": null,
    "created": "2022-05-10T11:39:25.325Z",
    "updated": "2022-05-10T11:39:25.325Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "34c007f6-145d-4c1a-b649-0027ce2a7721",
    "category": "Defaults",
    "name": "default_exitcode",
    "value": "011",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "190",
    "description": null,
    "created": "2022-05-10T11:39:25.286Z",
    "updated": "2022-05-10T11:39:25.286Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "34dfde5e-46fe-496a-8e66-eb01dfeb5ef4",
    "category": "Defaults",
    "name": "default_language",
    "value": "en",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "90",
    "description": null,
    "created": "2022-05-10T11:39:25.270Z",
    "updated": "2022-05-10T11:39:25.270Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "3a47ec38-f976-4bc1-847a-db1047139d2e",
    "category": "SIP Profile: Internal",
    "name": "internal_sip_port",
    "value": "5060",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "690",
    "description": null,
    "created": "2022-05-10T11:39:25.362Z",
    "updated": "2022-05-10T11:39:25.362Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "3b8f0eaf-bcfd-4668-8240-81919c86878f",
    "category": "Ringtones",
    "name": "cz-ring",
    "value": "%(1000,4000,425)",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "310",
    "description": null,
    "created": "2022-05-10T11:39:25.304Z",
    "updated": "2022-05-10T11:39:25.304Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "3f0ad833-190d-4aa1-b3d7-fb1a1f7687e7",
    "category": "Ringtones",
    "name": "dz-ring",
    "value": "%(1500,3500,425)",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "340",
    "description": null,
    "created": "2022-05-10T11:39:25.309Z",
    "updated": "2022-05-10T11:39:25.309Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "4536e173-9ff3-48b2-aed0-c0fafbd38efa",
    "category": "Ringtones",
    "name": "be-ring",
    "value": "%(1000,3000,425)",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "270",
    "description": null,
    "created": "2022-05-10T11:39:25.298Z",
    "updated": "2022-05-10T11:39:25.298Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "4659920c-48bf-4012-b638-97bf0aa31c26",
    "category": "SIP",
    "name": "unroll_loops",
    "value": "true",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "630",
    "description": null,
    "created": "2022-05-10T11:39:25.352Z",
    "updated": "2022-05-10T11:39:25.352Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "48c418c5-8392-4c5b-94e3-61ec11bf1bcd",
    "category": "Ringtones",
    "name": "fi-ring",
    "value": "%(1000,4000,425)",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "360",
    "description": null,
    "created": "2022-05-10T11:39:25.312Z",
    "updated": "2022-05-10T11:39:25.312Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "494fcad1-d971-48e8-aa7b-32198a794dcf",
    "category": "SIP Profile: Internal",
    "name": "internal_tls_port",
    "value": "5061",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "700",
    "description": null,
    "created": "2022-05-10T11:39:25.363Z",
    "updated": "2022-05-10T11:39:25.363Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "4dc0bb3e-3a91-42ef-92d0-9f9f403acbe2",
    "category": "Tones",
    "name": "vacant-us-tone",
    "value": "%(274,0,913.8);%(274,0,1370.6);%(380,0,1776.7)",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "560",
    "description": null,
    "created": "2022-05-10T11:39:25.341Z",
    "updated": "2022-05-10T11:39:25.342Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "52679adf-906c-429b-a2ff-5e375401477b",
    "category": "IP Address",
    "name": "external_sip_ip",
    "value": "$${local_ip_v4}",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "240",
    "description": null,
    "created": "2022-05-10T11:39:25.293Z",
    "updated": "2022-05-10T11:39:25.293Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "5a8da709-c5b8-4496-afdd-551e91d8af6f",
    "category": "Ringtones",
    "name": "bong-ring",
    "value": "v=-7;%(100,0,941.0,1477.0);v=-7;>=2;+=.1;%(1400,0,350,440)",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "550",
    "description": null,
    "created": "2022-05-10T11:39:25.340Z",
    "updated": "2022-05-10T11:39:25.340Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "5c59d5d7-8b97-4d86-8dd3-aa3b296853c2",
    "category": "XMPP",
    "name": "xmpp_client_profile",
    "value": "xmppc",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "200",
    "description": null,
    "created": "2022-05-10T11:39:25.287Z",
    "updated": "2022-05-10T11:39:25.287Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "5fc0017a-0cb6-4fab-be4d-06e1976a1c57",
    "category": "Defaults",
    "name": "ajax_refresh_rate",
    "value": "3000",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "120",
    "description": null,
    "created": "2022-05-10T11:39:25.275Z",
    "updated": "2022-05-10T11:39:25.275Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "693b1e41-265c-4187-94ce-bc78faca8098",
    "category": "Ringtones",
    "name": "in-ring",
    "value": "%(400,200,425,375);%(400,2000,425,375)",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "420",
    "description": null,
    "created": "2022-05-10T11:39:25.321Z",
    "updated": "2022-05-10T11:39:25.321Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "6a52a38c-2aee-418a-bf71-638e32050d5e",
    "category": "Ringtones",
    "name": "pl-ring",
    "value": "%(1000,4000,425)",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "460",
    "description": null,
    "created": "2022-05-10T11:39:25.327Z",
    "updated": "2022-05-10T11:39:25.327Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "6b0bfff1-4011-40dc-96fd-3013a455db79",
    "category": "XMPP",
    "name": "bind_server_ip",
    "value": "auto",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "220",
    "description": null,
    "created": "2022-05-10T11:39:25.290Z",
    "updated": "2022-05-10T11:39:25.291Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "73135f9d-1070-41b2-a75a-80a1405a4ca2",
    "category": "Ringtones",
    "name": "au-ring",
    "value": "%(400,200,383,417);%(400,2000,383,417)",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "260",
    "description": null,
    "created": "2022-05-10T11:39:25.297Z",
    "updated": "2022-05-10T11:39:25.297Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "78880410-49a1-4495-8963-57057223e4d2",
    "category": "Defaults",
    "name": "sleep",
    "value": "0",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "150",
    "description": null,
    "created": "2022-05-10T11:39:25.279Z",
    "updated": "2022-05-10T11:39:25.279Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "7e8848fb-ace6-48f3-9a69-e21e51e96e39",
    "category": "Ringtones",
    "name": "jp-ring",
    "value": "%(1000,2000,420,380)",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "430",
    "description": null,
    "created": "2022-05-10T11:39:25.322Z",
    "updated": "2022-05-10T11:39:25.322Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "819745ac-edd7-4342-94d1-07d6e5f23b00",
    "category": "Defaults",
    "name": "sit",
    "value": "%(274,0,913.8);%(274,0,1370.6);%(380,0,1776.7)",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "70",
    "description": null,
    "created": "2022-05-10T11:39:25.267Z",
    "updated": "2022-05-10T11:39:25.267Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "82555625-0650-49eb-990c-78ded1ca6c6c",
    "category": "Ringtones",
    "name": "it-ring",
    "value": "%(1000,4000,425)",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "490",
    "description": null,
    "created": "2022-05-10T11:39:25.331Z",
    "updated": "2022-05-10T11:39:25.331Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "84320a82-2ffb-4f92-86c1-7390e21f9aea",
    "category": "Ringtones",
    "name": "rs-ring",
    "value": "%(1000,4000,425)",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "480",
    "description": null,
    "created": "2022-05-10T11:39:25.329Z",
    "updated": "2022-05-10T11:39:25.329Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "92e0c815-f0c0-45eb-9768-21a0f6de4527",
    "category": "Tones",
    "name": "bong-us-tone",
    "value": "v=-7;%(100,0,941.0,1477.0);v=-7;>=2;+=.1;%(1400,0,350,440)",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "600",
    "description": null,
    "created": "2022-05-10T11:39:25.348Z",
    "updated": "2022-05-10T11:39:25.348Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "9332b90e-017d-495f-8bd5-dcc6adcc6391",
    "category": "Tones",
    "name": "vacant-uk-tone",
    "value": "%(330,15,950);%(330,15,1400);%(330,1000,1800)",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "570",
    "description": null,
    "created": "2022-05-10T11:39:25.343Z",
    "updated": "2022-05-10T11:39:25.343Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "94dff3af-f5a2-4a90-aa2b-e750497b5a0e",
    "category": "Defaults",
    "name": "transfer_ringback",
    "value": "$${uk-ring}",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "140",
    "description": "",
    "created": "2022-05-10T11:39:25.278Z",
    "updated": "2022-11-29T18:23:05.788Z",
    "synchronised": null,
    "updated_by": "fretweah"
  },
  {
    "id": "978314c6-7cae-4783-ad18-862e8ae2eb41",
    "category": "SIP Profile: External",
    "name": "external_tls_port",
    "value": "5081",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "660",
    "description": null,
    "created": "2022-05-10T11:39:25.357Z",
    "updated": "2022-05-10T11:39:25.357Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "98f38118-26ee-412d-a415-e2b7e3dc3464",
    "category": "Defaults",
    "name": "ringback",
    "value": "$${uk-ring}",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "130",
    "description": "",
    "created": "2022-05-10T11:39:25.276Z",
    "updated": "2022-11-29T18:22:54.913Z",
    "synchronised": null,
    "updated_by": "fretweah"
  },
  {
    "id": "9c65a985-5ad0-4ad3-885b-ccb412adf836",
    "category": "Music on Hold",
    "name": "hold_music",
    "value": "local_stream://default",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "250",
    "description": null,
    "created": "2022-05-10T11:39:25.295Z",
    "updated": "2022-05-10T11:39:25.295Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "9e2971aa-3f15-4fe3-af3c-57e892985211",
    "category": "Ringtones",
    "name": "fr-ring",
    "value": "%(1500,3500,440)",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "370",
    "description": null,
    "created": "2022-05-10T11:39:25.313Z",
    "updated": "2022-05-10T11:39:25.313Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "a4eb601b-d91c-46e9-9ead-3627d3c8d12a",
    "category": "SIP",
    "name": "hangup_on_subscriber_absent",
    "value": "true",
    "command": "set",
    "hostname": null,
    "enabled": "false",
    "sequence": "610",
    "description": null,
    "created": "2022-05-10T11:39:25.349Z",
    "updated": "2022-05-10T11:39:25.349Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "a7bfe1ab-488d-4c73-a9ba-f81c07676b2e",
    "category": "Codecs",
    "name": "outbound_codec_prefs",
    "value": "PCMU,PCMA",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "20",
    "description": "",
    "created": "2022-05-10T11:39:25.256Z",
    "updated": "2022-11-29T17:22:53.998Z",
    "synchronised": null,
    "updated_by": "fretweah"
  },
  {
    "id": "a9f1bee8-a283-4fe1-8519-12c58d2dc420",
    "category": "Ringtones",
    "name": "ko-ring",
    "value": "%(1000,2000,440,480)",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "440",
    "description": null,
    "created": "2022-05-10T11:39:25.324Z",
    "updated": "2022-05-10T11:39:25.324Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "ad1b2ef9-e67e-436f-85bc-008f6ac8a9e8",
    "category": "Defaults",
    "name": "default_country",
    "value": "US",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "170",
    "description": null,
    "created": "2022-05-10T11:39:25.283Z",
    "updated": "2022-05-10T11:39:25.283Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "b22faae3-bb13-44cd-9b07-c880afe8cd7d",
    "category": "Defaults",
    "name": "console_loglevel",
    "value": "info",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "50",
    "description": null,
    "created": "2022-05-10T11:39:25.263Z",
    "updated": "2022-05-10T11:39:25.263Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "b3911936-90f6-41fb-9f57-98619499b3a8",
    "category": "Ringtones",
    "name": "cn-ring",
    "value": "%(1000,4000,450)",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "290",
    "description": null,
    "created": "2022-05-10T11:39:25.301Z",
    "updated": "2022-05-10T11:39:25.301Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "b5683ebf-8cf1-4a2a-9254-826bf15ae2ec",
    "category": "Ringtones",
    "name": "eg-ring",
    "value": "%(2000,1000,475,375)",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "350",
    "description": null,
    "created": "2022-05-10T11:39:25.310Z",
    "updated": "2022-05-10T11:39:25.310Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "b9a6b9d8-a68f-4c18-9c90-232bc46df3b5",
    "category": "Defaults",
    "name": "record_ext",
    "value": "wav",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "160",
    "description": null,
    "created": "2022-05-10T11:39:25.281Z",
    "updated": "2022-05-10T11:39:25.281Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "bb52b2f5-7641-42d2-87d2-3d8e077d6ff2",
    "category": "Tones",
    "name": "busy-au-tone",
    "value": "v=-13;%(375,375,420);v=-23;%(375,375,420)",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "590",
    "description": null,
    "created": "2022-05-10T11:39:25.346Z",
    "updated": "2022-05-10T11:39:25.346Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "c010eb1e-ac88-4b36-bad6-26ac50cda64c",
    "category": "Codecs",
    "name": "global_codec_prefs",
    "value": "G7221@32000h,G7221@16000h,G722,PCMU,PCMA",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "10",
    "description": "",
    "created": "2022-05-10T11:39:25.202Z",
    "updated": "2022-11-29T17:22:35.941Z",
    "synchronised": null,
    "updated_by": "fretweah"
  },
  {
    "id": "c74302d2-08ac-4680-b098-b8401ed30480",
    "category": "SIP Profile: External",
    "name": "external_ssl_dir",
    "value": "$${conf_dir}/tls",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "680",
    "description": null,
    "created": "2022-05-10T11:39:25.360Z",
    "updated": "2022-05-10T11:39:25.360Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "c8390d39-0ad7-44df-b723-52164d19e9b7",
    "category": "Defaults",
    "name": "default_countrycode",
    "value": "1",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "180",
    "description": null,
    "created": "2022-05-10T11:39:25.284Z",
    "updated": "2022-05-10T11:39:25.284Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "c83fa13f-d6bc-442f-bf74-28b380c08cf9",
    "category": "Ringtones",
    "name": "de-ring",
    "value": "%(1000,4000,425)",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "320",
    "description": null,
    "created": "2022-05-10T11:39:25.306Z",
    "updated": "2022-05-10T11:39:25.306Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "cc2c2c0b-027a-4f3e-b239-d093a086c9c9",
    "category": "Tones",
    "name": "busy-us-tone",
    "value": "%(500,500,480,620)",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "580",
    "description": null,
    "created": "2022-05-10T11:39:25.345Z",
    "updated": "2022-05-10T11:39:25.345Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "d2d0057b-fe1e-4c8b-8785-7c1475c771fe",
    "category": "Ringtones",
    "name": "uk-ring",
    "value": "%(400,200,400,450);%(400,2000,400,450)",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "530",
    "description": null,
    "created": "2022-05-10T11:39:25.337Z",
    "updated": "2022-05-10T11:39:25.337Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "d6fe603c-4d51-4f1e-97fb-761633be27d6",
    "category": "Ringtones",
    "name": "dk-ring",
    "value": "%(1000,4000,425)",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "330",
    "description": null,
    "created": "2022-05-10T11:39:25.307Z",
    "updated": "2022-05-10T11:39:25.307Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "d97d15fa-9f91-4e5b-be49-3c7fac860343",
    "category": "Sound",
    "name": "sound_prefix",
    "value": "$${sounds_dir}/en/us/callie",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "730",
    "description": null,
    "created": "2022-05-10T11:39:25.368Z",
    "updated": "2022-05-10T11:39:25.368Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "e33fba27-80e8-40f1-a34d-808367326855",
    "category": "XMPP",
    "name": "xmpp_server_profile",
    "value": "xmpps",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "210",
    "description": null,
    "created": "2022-05-10T11:39:25.289Z",
    "updated": "2022-05-10T11:39:25.289Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "e586bf55-a665-42e4-a835-708cc510bac0",
    "category": "SIP",
    "name": "hangup_on_call_reject",
    "value": "true",
    "command": "set",
    "hostname": null,
    "enabled": "false",
    "sequence": "620",
    "description": null,
    "created": "2022-05-10T11:39:25.351Z",
    "updated": "2022-05-10T11:39:25.351Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "e802c10c-c80c-44a3-94ff-a80d2100fd6e",
    "category": "Defaults",
    "name": "default_voice",
    "value": "callie",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "110",
    "description": null,
    "created": "2022-05-10T11:39:25.273Z",
    "updated": "2022-05-10T11:39:25.273Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "eb30bc83-ccb8-4f27-a1d6-9340ae7de325",
    "category": "Defaults",
    "name": "call_debug",
    "value": "false",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "40",
    "description": null,
    "created": "2022-05-10T11:39:25.261Z",
    "updated": "2022-05-10T11:39:25.261Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "eb64acf4-fab4-41d4-bca1-6b5c7a2cb5f4",
    "category": "SIP",
    "name": "sip_tls_version",
    "value": "tlsv1,tlsv1.1,tlsv1.2",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "640",
    "description": null,
    "created": "2022-05-10T11:39:25.354Z",
    "updated": "2022-05-10T11:39:25.354Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "ee9ec502-db02-488a-b1e2-99de728f9c89",
    "category": "Ringtones",
    "name": "sa-ring",
    "value": "%(1200,4600,425)",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "510",
    "description": null,
    "created": "2022-05-10T11:39:25.334Z",
    "updated": "2022-05-10T11:39:25.334Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "f197a3c6-e7d7-4c34-a5ee-ee5333775955",
    "category": "Ringtones",
    "name": "il-ring",
    "value": "%(1000,3000,400)",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "410",
    "description": null,
    "created": "2022-05-10T11:39:25.319Z",
    "updated": "2022-05-10T11:39:25.319Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "fbe9e7f4-4f0b-4272-8755-90f36339cd22",
    "category": "Ringtones",
    "name": "tr-ring",
    "value": "%(2000,4000,450)",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "520",
    "description": null,
    "created": "2022-05-10T11:39:25.335Z",
    "updated": "2022-05-10T11:39:25.335Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "fd0caeb3-67e6-45d7-b239-80f32620614d",
    "category": "Defaults",
    "name": "default_dialect",
    "value": "us",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "100",
    "description": null,
    "created": "2022-05-10T11:39:25.271Z",
    "updated": "2022-05-10T11:39:25.271Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "ff120c77-f028-42db-97ea-287ea888ad1e",
    "category": "SIP Profile: External",
    "name": "external_sip_port",
    "value": "5080",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "650",
    "description": null,
    "created": "2022-05-10T11:39:25.355Z",
    "updated": "2022-05-10T11:39:25.355Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "0ad70943-e1c1-40ec-9732-004be85602d3",
    "category": "DSN",
    "name": "dsn",
    "value": "pgsql://hostaddr=127.0.0.1 dbname=freeswitch user=freeswitch password='postgres-insecure-abcdef9876543210'",
    "command": "set",
    "hostname": null,
    "enabled": "false",
    "sequence": "10",
    "description": "",
    "created": "2024-01-17T11:06:42.276Z",
    "updated": "2024-01-17T11:38:04.567Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "beef8e8c-f9d5-4883-ba26-393e808677fd",
    "category": "DSN",
    "name": "dsn_callcentre",
    "value": "pgsql://hostaddr=127.0.0.1 dbname=freeswitch user=freeswitch password='postgres-insecure-abcdef9876543210'",
    "command": "set",
    "hostname": null,
    "enabled": "false",
    "sequence": "20",
    "description": "",
    "created": "2024-01-17T11:30:25.347Z",
    "updated": "2024-01-17T11:44:33.777Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "de4c5d9f-beae-495e-bb3b-7580d0c7568d",
    "category": "DSN",
    "name": "dsn_voicemail",
    "value": "pgsql://hostaddr=127.0.0.1 dbname=freeswitch user=freeswitch password='postgres-insecure-abcdef9876543210'",
    "command": "set",
    "hostname": null,
    "enabled": "false",
    "sequence": "30",
    "description": "",
    "created": "2024-01-17T11:30:53.014Z",
    "updated": "2024-01-17T11:38:30.691Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "e97e5841-5ae7-4269-a0d3-d375adf515aa",
    "category": "Other",
    "name": "cache_dir",
    "value": "/home/django-pbx/cache",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "20",
    "description": "http_cache cache directory",
    "created": "2024-04-09T18:19:18.723Z",
    "updated": "2024-04-09T18:19:18.723Z",
    "synchronised": null,
    "updated_by": "system"
  },
  {
    "id": "a4a15c7f-4e90-4e9d-a5bc-d6898b7beccc",
    "category": "Other",
    "name": "certs_dir",
    "value": "/etc/ssl/certs",
    "command": "set",
    "hostname": null,
    "enabled": "true",
    "sequence": "10",
    "description": "SSL CA Certificates directory",
    "created": "2022-05-10T11:39:25.366Z",
    "updated": "2024-04-09T17:50:12.597Z",
    "synchronised": null,
    "updated_by": "system"
  }
],
      skipDuplicates: true,
    });

    console.log('Seeding completed successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

seed()
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

export default seed;
