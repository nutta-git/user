/* user.js by nutta-git @GitHub
 
 *PLEASE READ* 

    - This user.js disables some of the telemetry in FireFox
    - user.js takes inspiration from [https://github.com/arkenfox/user.js] 
    - Please have a backup of your orginal Profile before using this script,
    - This script MAY casue browser issues. 
    - !! USE THIS SCRIPT AT YOUR OWN RISK !! 

***/

user_pref("browser.startup.page", 0);
user_pref("browser.startup.homepage", "about:blank");
user_pref("browser.startup.homepage_override.mstone", "ignore");

user_pref("startup.homepage_welcome_url", "");
user_pref("startup.homepage_welcome_url.additional", "");
user_pref("startup.homepage_override_url", "");

user_pref("browser.search.geoSpecificDefaults", false);
user_pref("browser.search.update", false);
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.search.geoSpecificDefaults.url", "");

user_pref("browser.messaging-system.whatsNewPanel.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("browser.region.network.url", ""); 
user_pref("browser.region.update.enabled", false);

user_pref("browser.ping-centre.telemetry", false);
user_pref("browser.send_pings", false); 
user_pref("browser.send_pings.require_same_host", true);
user_pref("browser.tabs.crashReporting.sendReport", false); 
user_pref("browser.chrome.errorReporter.infoURL", "");

user_pref("browser.crashReports.unsubmittedCheck.enabled", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);

user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.urlbar.dnsResolveSingleWordsAfterSearch", 0);
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.bookmark", false);
user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.topsites", false);
user_pref("beacon.enabled", false);
user_pref("browser.uitour.enabled", false);
user_pref("browser.uitour.url", "");

user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
user_pref("browser.safebrowsing.allowOverride", false);
user_pref("browser.contentblocking.database.enabled", false);

user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtab.preload", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false);
user_pref("browser.newtabpage.activity-stream.default.sites", "");
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.favicon", false);
user_pref("browser.newtabpage.activity-stream.feeds.newtabinit", false);
user_pref("browser.newtabpage.activity-stream.feeds.places", false);
user_pref("browser.newtabpage.activity-stream.feeds.recommendationproviderswitcher", false);
user_pref("browser.newtabpage.activity-stream.feeds.system.topsites", false);
user_pref("browser.newtabpage.activity-stream.feeds.system.topstories", false);

user_pref("geo.provider.ms-windows-location", false); 
user_pref("geo.provider.use_corelocation", false); 
user_pref("geo.provider.use_gpsd", false);

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

user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);

user_pref("breakpad.reportURL", "")
user_pref("captivedetect.canonicalURL", "");

user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");

user_pref("extensions.blocklist.enabled", false);
user_pref("extensions.systemAddon.update.enabled", false); 
user_pref("extensions.systemAddon.update.url", ""); 
user_pref("extensions.formautofill.addresses.enabled", false); 
user_pref("extensions.formautofill.available", "off"); 
user_pref("extensions.formautofill.creditCards.available", false); 
user_pref("extensions.formautofill.creditCards.enabled", false); 
user_pref("extensions.formautofill.heuristics.enabled", false); 
user_pref("extensions.webcompat-reporter.enabled", false);
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.getAddons.showPane", false); 
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);

user_pref("network.captive-portal-service.enabled", false);
user_pref("network.connectivity-service.enabled", false);
user_pref("network.prefetch-next", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true); 
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false); 
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.connectivity-service.DNSv4.domain", "");
user_pref("network.connectivity-service.DNSv6.domain", "");
user_pref("network.connectivity-service.nat64-check", false);
user_pref("network.connectivity-service.IPv4.url", "");
user_pref("network.connectivity-service.IPv6.url", "");
user_pref("network.connectivity-service.enabled", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.prefetch-next", false);
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.trr.blocklist_cleanup_done", true);
user_pref("network.trr.resolvers", "");
user_pref("network.trr.uri", "");

user_pref("security.ssl.errorReporting.automatic", false);
user_pref("security.ssl.errorReporting.enabled", false);
user_pref("security.ssl.errorReporting.url", "");
user_pref("security.certerrors.mitm.priming.endpoint", "");
user_pref("security.certerrors.recordEventTelemetry", false);
user_pref("security.identitypopup.recordEventTelemetry", false);
user_pref("security.protectionspopup.recordEventTelemetry", false);
user_pref("security.xfocsp.errorReporting.enabled", false);
user_pref("services.settings.security.onecrl.collection", "");
user_pref("services.settings.security.onecrl.signer", "");
user_pref("services.settings.server", "");

user_pref("dom.push.serverURL", "");
user_pref("dom.security.unexpected_system_load_telemetry_enabled", false);
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
user_pref("dom.ipc.plugins.reportCrashURL", false);
user_pref("dom.ipc.plugins.reportCrashURL", false);

user_pref("messaging-system.rsexperimentloader.enabled", false);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("devtools.debugger.remote-enabled", false);
user_pref("identity.fxaccounts.enabled", false); 
user_pref("reader.parse-on-load.enabled", false);
user_pref("app.update.auto", false);
