/* user.js by nutta-git @GitHub
 
 *PLEASE READ* 

    - This user.js disables some of the telemetry in FireFox
    - user.js takes inspiration from [https://github.com/arkenfox/user.js] user.js 
    - Please have a backup of your orginal Profile before using this script,
    - This script may casue site breakage and/or create security holes. 
    - !! USE THIS SCRIPT AT YOUR OWN RISK !! 

***/

//Browser.newtabpage
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.impressionId", "");
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry.structuredIngestion.endpoint", "");

//Safebrowsing && URLs
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false)
user_pref("network.connectivity-service.enabled", false);
user_pref("browser.partnerlink.attributionURL", "");
user_pref("browser.ping-centre.telemetry", false);
user_pref("browser.privatebrowsing.vpnpromourl", "");
user_pref("browser.region.network.url", "");
user_pref("browser.safebrowsing.allowOverride", false);
user_pref("browser.safebrowsing.blockedURIs.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous_host", false);
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.provider.google.advisoryURL", "");
user_pref("browser.safebrowsing.provider.google.gethashURL", "");
user_pref("browser.safebrowsing.provider.google.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.google.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.provider.google.reportURL", "");
user_pref("browser.safebrowsing.provider.google.updateURL", "");
user_pref("browser.safebrowsing.provider.google4.advisoryURL", "");
user_pref("browser.safebrowsing.provider.google4.dataSharingURL", "");
user_pref("browser.safebrowsing.provider.google4.gethashURL", "");
user_pref("browser.safebrowsing.provider.google4.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.reportURL", "");
user_pref("browser.safebrowsing.provider.google4.updateURL", "");
user_pref("browser.safebrowsing.provider.mozilla.gethashURL", "");
user_pref("browser.safebrowsing.provider.mozilla.nextupdatetime", "");
user_pref("browser.safebrowsing.provider.mozilla.updateURL", "");
user_pref("browser.safebrowsing.reportPhishURL", "");

//Browser.Content
user_pref("browser.chrome.errorReporter.infoURL", "");
user_pref("browser.contentblocking.report.cookie.url", "");
user_pref("browser.contentblocking.report.cryptominer.url", "");
user_pref("browser.contentblocking.report.endpoint_url", "");
user_pref("browser.contentblocking.report.fingerprinter.url", "");
user_pref("browser.contentblocking.report.lockwise.how_it_works.url", "");
user_pref("browser.contentblocking.report.manage_devices.url", "");
user_pref("browser.contentblocking.report.mobile-android.url", "");
user_pref("browser.contentblocking.report.mobile-ios.url", "");
user_pref("browser.contentblocking.report.monitor.home_page_url", "");
user_pref("browser.contentblocking.report.monitor.how_it_works.url", "");
user_pref("browser.contentblocking.report.monitor.preferences_url", "");
user_pref("browser.contentblocking.report.monitor.sign_in_url", "");
user_pref("browser.contentblocking.report.monitor.url", "");
user_pref("browser.contentblocking.report.proxy_extension.url", "");
user_pref("browser.contentblocking.report.social.url", "");
user_pref("browser.contentblocking.report.tracker.url", "");
user_pref("browser.contentblocking.report.vpn-android.url", "");
user_pref("browser.contentblocking.report.vpn-ios.url", "");
user_pref("browser.contentblocking.report.vpn-promo.url", "");
user_pref("browser.contentblocking.report.vpn.url", "");
user_pref("browser.contentblocking.reportBreakage.url", "");

//Url Bar
user_pref("browser.urlbar.richSuggestions.tail", false);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.suggest.topsites", false);
user_pref("browser.geolocation.warning.infoURL","");
user_pref("captivedetect.canonicalURL","");
user_pref("browser.urlbar.ctrlCanonizesURLs", false);
user_pref("browser.xr.warning.infoURL","");

//Health Reporting && URLs
user_pref("datareporting.healthreport.infoURL", "");
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.policy.dataSubmissionPolicyAcceptedVersion", 2);
user_pref("datareporting.policy.dataSubmissionPolicyNotifiedTime", "");
user_pref("datareporting.policy.firstRunURL", "");

//User Account && Urls
user_pref("geo.provider.network.url", "");
user_pref("identity.fxaccounts.remote.pairing.uri", "");
user_pref("identity.fxaccounts.service.monitorLoginUrl", "");
user_pref("identity.mobilepromo.android", "");
user_pref("identity.mobilepromo.ios", "");
user_pref("identity.sendtabpromo.url", "");
user_pref("identity.sync.tokenserver.uri", "");

//Telemetry for Security
user_pref("security.certerrors.mitm.priming.endpoint", "");
user_pref("security.certerrors.recordEventTelemetry", false);
user_pref("security.identitypopup.recordEventTelemetry", false);
user_pref("security.protectionspopup.recordEventTelemetry", false);
user_pref("security.ssl.errorReporting.url", "");
user_pref("security.xfocsp.errorReporting.enabled", false);

//Browser Sync
user_pref("services.sync.declinedEngines", "");
user_pref("services.sync.prefs.sync.app.shield.optoutstudies.enabled", false);
user_pref("services.sync.prefs.sync.browser.crashReports.unsubmittedCheck.autoSubmit2", false);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.feeds.section.highlights", false);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.showSponsored", false);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("services.sync.prefs.sync.browser.safebrowsing.downloads.enabled", false);
user_pref("services.sync.prefs.sync.browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("services.sync.prefs.sync.browser.safebrowsing.malware.enabled", false);
user_pref("services.sync.prefs.sync.browser.safebrowsing.phishing.enabled", false);
user_pref("services.sync.prefs.sync.browser.urlbar.suggest.bookmark", false);
user_pref("services.sync.prefs.sync.browser.urlbar.suggest.history", false);
user_pref("services.sync.prefs.sync.layout.spellcheckDefault", false);
user_pref("services.sync.prefs.sync.spellchecker.dictionary", false);

//Toolkit Telemetry && URLs 
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("toolkit.crashreporter.infoURL", "");
user_pref("toolkit.datacollection.infoURL", "");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.cachedClientID", "");
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.pioneer-new-studies-available", false);
user_pref("toolkit.telemetry.previousBuildID", "");
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.server_owner", "");
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true); 
user_pref("toolkit.coverage.opt-out", true); 
user_pref("toolkit.coverage.endpoint.base", "");

//.ssl Reporting 
user_pref("security.ssl.errorReporting.automatic", false);
user_pref("security.ssl.errorReporting.enabled", false);
user_pref("security.ssl.errorReporting.url", "");

//Dev Telemetry
user_pref("devtools.devices.url", "");
user_pref("devtools.performance.recording.ui-base-url", "");
user_pref("devtools.remote.adb.extensionURL", "");

//Extensions && Pocket 
user_pref("extensions.abuseReport.amoDetailsURL", "");
user_pref("extensions.abuseReport.url", "");
user_pref("extensions.blocklist.pingCountVersion", 0);
user_pref("extensions.getAddons.discovery.api_url", "");
user_pref("extensions.getAddons.get.url", "");
user_pref("extensions.getAddons.langpacks.url", "");
user_pref("extensions.getAddons.link.url", "");
user_pref("extensions.getAddons.search.browseURL", "");
user_pref("extensions.pendingOperations", false);
user_pref("extensions.recommendations.privacyPolicyUrl", "");
user_pref("extensions.recommendations.themeRecommendationUrl", "");
user_pref("extensions.update.background.url", "");
user_pref("extensions.pocket.api", "");
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.pocket.oAuthConsumerKey", "");
user_pref("extensions.pocket.onSaveRecs", false);
user_pref("extensions.pocket.site", "");

//Network 
user_pref("network.connectivity-service.IPv4.url", "");
user_pref("network.connectivity-service.IPv6.url", "");
user_pref("network.dns.disablePrefetch", true);
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.trr.blocklist_cleanup_done", true);

//App. 
user_pref("app.releaseNotesURL", "");
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.support.baseURL", "");
user_pref("app.update.lastUpdateTime.telemetry_modules_ping", 0);
user_pref("app.update.url.details", "");
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");
user_pref("app.feedback.baseURL", "");
user_pref("app.normandy.first_run", false);
user_pref("breakpad.reportURL", "");
user_pref("app.update.auto", false);
user_pref("app.update.url.manual","");
user_pref("browser.search.update", false);

//MISC
user_pref("webchannel.allowObject.urlWhitelist", "");
user_pref("webextensions.storage.sync.serverURL", "");
user_pref("xpinstall.signatures.devInfoURL", "");
user_pref("dom.push.serverURL", "");
user_pref("dom.security.unexpected_system_load_telemetry_enabled", false);


//Incomplete Fingerprinting Protection (These settings can casue performace issue, https://wiki.mozilla.org/Security/Fingerprinting) 
//user_pref("privacy.resistFingerprinting", true);  (Use Canvas Blocker addon instead)  
//user_pref("privacy.resistFingerprinting.block_mozAddonManager", true); 
