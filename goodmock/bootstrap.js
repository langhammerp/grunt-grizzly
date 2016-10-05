var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  if (req.query.projectId) {
    res.json({
      "project" : req.query.projectId
    })
    } else {
    res.json({
      "bootstrapResource": {
        "accountSetting": {
          "companyName": "GoodData",
          "country":null,
          "created":"2013-05-17 15:39:44",
          "firstName":"Pavel",
          "lastName":"Langhammer",
          "login":"pavel.langhammer@gooddata.com",
          "phoneNumber":"602677182",
          "position":null,
          "timezone":null,
          "updated": "2015-11-25 09:45:36",
          "links": {
            "projects":"/gdc/account/profile/d3745af85b2a847557ab48ce63cffa50/projects",
            "self":"/gdc/account/profile/d3745af85b2a847557ab48ce63cffa50"},
            "email":"pavel.langhammer@gooddata.com",
            "authenticationModes":[]},
          "hostnameBase":"secure.gooddata.com",
          "settings": {
            "applicationTitle":"GoodData",
            "faviconUrl":"/images/favicon.ico",
            "organizationName":"GoodData",
            "displayFlashNews":true,
            "logoUrl":"/images/header/logo.png",
            "displayProjects":true,
            "displayAccountPage":true,
            "isBranded":false,
            "supportEmail":"support@gooddata.com",
            "supportForumUrl":"https://support.gooddata.com",
            "privacyPolicyUrl":"http://www.gooddata.com/privacy.html",
            "documentationUrl":"https://help.gooddata.com/doc/",
            "securityStatementUrl":"http://www.gooddata.com/security.html",
            "termsOfUseUrl":"http://www.gooddata.com/terms.html",
            "trustUrl":"http://www.gooddata.com/trust/",
            "appleTouchIconUrl":"/images/appleTouchIcon.png",
            "skipClientRedirect":false,
            "hideRegistration":false,
            "useOnboarding":true,
            "displayNPS":true,
            "walkMe":"325ea4b9b547463c991a62bf54090302"},
          "profileSetting":{
            "hints":{},
            "currentProjectUri":"/gdc/projects/" + req.params.PID,
            "projectSettings":{
              "/gdc/projects/uhq8dikmtxog8n19jmuqn4gtj3cm2q0t":{
                "introDisplayed":true,
                "recentSearches":[],
                "tab":"aqIuEraPaHKA",
                "dashboard":"/gdc/md/uhq8dikmtxog8n19jmuqn4gtj3cm2q0t/obj/1952"},
              "/gdc/projects/iw17dx8y1zjudv600bq4lqfyt5zawjxd":{
                "recentSearches":[],
                "tab":"90103c763e03",
                "manageReportsSettings":{},
                "dashboard":"/gdc/md/iw17dx8y1zjudv600bq4lqfyt5zawjxd/obj/338"},
              "/gdc/projects/ufq35l2c2gkx517nkwhabfn2chqoozz1":{
                "recentSearches":[],"tab":"961eaf2a483f",
                "manageReportsSettings":{},
                "dashboard":"/gdc/md/ufq35l2c2gkx517nkwhabfn2chqoozz1/obj/23606"},
              "/gdc/projects/ukxr31cl6umispkc6ckl247sr0g0leo1":{
                "recentSearches":[],
                "tab":"a217e3b12bdd",
                "manageReportsSettings":{
                  "tags":[],
                  "folder":"all-reports"},
                "dashboard":"/gdc/md/ukxr31cl6umispkc6ckl247sr0g0leo1/obj/717"}}},
              "npsLastParticipation":"2014-01-22 15:08:56","releaseNotice":["Release 90","Release 91","Release 94","Release 100","Release 101"],"links":{"self":"/gdc/account/profile/d3745af85b2a847557ab48ce63cffa50/settings","profile":"/gdc/account/profile/d3745af85b2a847557ab48ce63cffa50"}},
              "current":{
                "project":{
                  "content":{
                    "guidedNavigation":"1",
                    "isPublic":"0",
                    "state":"ENABLED",
                    "driver":"Pg",
                    "authorizationToken":"INTNA0000000GDC",
                    "cluster":"",
                    "environment":"PRODUCTION"},
                  "links":{
                    "invitations":"/gdc/projects/nlcth0c9p4s7zaaz725akqzvwd2owsqa/invitations",
                    "ldm":"/gdc/projects/nlcth0c9p4s7zaaz725akqzvwd2owsqa/ldm",
                    "ldm_thumbnail":"/gdc/projects/nlcth0c9p4s7zaaz725akqzvwd2owsqa/ldm?thumbnail=1",
                    "metadata":"/gdc/md/nlcth0c9p4s7zaaz725akqzvwd2owsqa",
                    "roles":"/gdc/projects/nlcth0c9p4s7zaaz725akqzvwd2owsqa/roles",
                    "self":"/gdc/projects/nlcth0c9p4s7zaaz725akqzvwd2owsqa",
                    "userPermissions":"/gdc/projects/nlcth0c9p4s7zaaz725akqzvwd2owsqa/users/d3745af85b2a847557ab48ce63cffa50/permissions",
                    "userRoles":"/gdc/projects/nlcth0c9p4s7zaaz725akqzvwd2owsqa/users/d3745af85b2a847557ab48ce63cffa50/roles",
                    "users":"/gdc/projects/nlcth0c9p4s7zaaz725akqzvwd2owsqa/users?link=1&offset=0&limit=100",
                    "templates":"/gdc/md/nlcth0c9p4s7zaaz725akqzvwd2owsqa/templates",
                    "connectors":"/gdc/projects/nlcth0c9p4s7zaaz725akqzvwd2owsqa/connectors",
                    "publicartifacts":"/gdc/projects/nlcth0c9p4s7zaaz725akqzvwd2owsqa/publicartifacts",
                    "uploads":"https://secure-di.gooddata.com/project-uploads/nlcth0c9p4s7zaaz725akqzvwd2owsqa/",
                    "dataload":"/gdc/projects/nlcth0c9p4s7zaaz725akqzvwd2owsqa/dataload",
                    "schedules":"/gdc/projects/nlcth0c9p4s7zaaz725akqzvwd2owsqa/schedules",
                    "eventstores":"/gdc/projects/nlcth0c9p4s7zaaz725akqzvwd2owsqa/dataload/eventstore/stores",
                    "clearCaches":"/gdc/projects/nlcth0c9p4s7zaaz725akqzvwd2owsqa/clearCaches",
                    "execute":"/gdc/projects/nlcth0c9p4s7zaaz725akqzvwd2owsqa/execute",
                    "projectFeatureFlags":"/gdc/projects/nlcth0c9p4s7zaaz725akqzvwd2owsqa/projectFeatureFlags"},
                  "meta":{
                    "created":"2015-05-04 09:18:26",
                    "updated":"2015-11-24 15:06:40",
                    "author":"/gdc/account/profile/546a0f82a046a52520adeedef97ca44c",
                    "contributor":"/gdc/account/profile/546a0f82a046a52520adeedef97ca44c",
                    "summary":"",
                    "title":"GoodScrum"}},
                "featureFlags":{
                  "oldHeader":false,
                  "enableCsvUploader":true,
                  "dashboardScheduleRecipients":true,
                  "disableDefaultBulkUpload":true,
                  "displayUserManagement":true,
                  "enableFilterLift":false,
                  "dashboardSchedule":true,
                  "disableObjectVisibility":false,
                  "ACL":true,
                  "analyticalDesigner":true,
                  "enableAnalyticalDashboards":true},
                "projectPermissions":{
                  "permissions":{
                    "canAccessIntegration":"1",
                    "canCreateProjectDashboard":"1",
                    "canManageComment":"1",
                    "canExecute":"1",
                    "canInitData":"1",
                    "canManageIntegration":"1",
                    "canCreateExecutionContext":"1","canManageFolder":"1","canInviteUserToProject":"1","canCreateTableDataLoad":"1","canCreateDomain":"1","canSeeOtherUserDetails":"1","canManageACL":"1","canCreateRole":"0","canCreateProjectTemplates":"0","canCreateHelp":"1","canManageDomain":"1","canManageAttributeLabel":"1","canCreateColumn":"1","canManageReport":"1","canManageDataSet":"1","canSetUserVariables":"1","canCreateAttributeGroup":"1","canSetStyle":"1","canValidateProject":"1","canCreateETLFile":"1","canMaintainProject":"1","canCreateScheduledMail":"1","canSuspendUserFromProject":"1","canManageIsProduction":"1","canMaintainUserFilterRelation":"1","canManageAttribute":"1","canManageReportDefinition":"1","canCreateReport":"1","canMaintainUserFilter":"1","canSetLocale":"1","canEnrichData":"1","canUploadNonProductionCSV":"1","canManageETLFile":"1","canCreateComment":"1","canCreateDataSet":"1","canManageExecutionContext":"1","canCreateTable":"1","canManageTableDataLoad":"1","canCreateMetric":"1","canRefreshData":"1","canManageProjectDashboard":"1","canManageProject":"1","canManagePrompt":"1","canAccessWorkbench":"1","canCreateAttributeLabel":"1","canManageColumn":"1","canCreatePrompt":"1","canManagePublicAccessCode":"0","canListUsersInProject":"1","canManageAttributeGroup":"1","canManageMetric":"1","canManageHelp":"1","canManageTable":"1","canSetProjectVariables":"1","canCreateFolder":"1","canManageFact":"1","canListInvitationsInProject":"1","canManageScheduledMail":"1","canExecuteRaw":"1","canSeePublicAccessCode":"0","canCreateReportDefinition":"1","canCreateFact":"1","canCreateAttribute":"1","canAssignUserWithRole":"1"},
                  "links":{
                    "project":"/gdc/projects/nlcth0c9p4s7zaaz725akqzvwd2owsqa/",
                    "user":"/gdc/account/profile/d3745af85b2a847557ab48ce63cffa50"}},
                "clusterStatus":"ONLINE",
                "timezone":{"id":"America/Los_Angeles","displayName":"Pacific Standard Time","shortDisplayName":"PST","currentOffsetMs":-28800000},
                "projectTemplates":[],
                "dataUploadsInfo":{"statusesCount":{"OK":52}},
                "loginMD5":"d3745af85b2a847557ab48ce63cffa50","integrations":[],"projectIcons":[],"requiresRedirect":false,
                "analyticalDashboards":["/gdc/md/nlcth0c9p4s7zaaz725akqzvwd2owsqa/obj/9408"]}})
}
});

module.exports = router;
