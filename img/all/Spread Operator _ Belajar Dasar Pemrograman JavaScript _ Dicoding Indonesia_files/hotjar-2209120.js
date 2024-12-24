window.hjSiteSettings = window.hjSiteSettings || {"site_id":2209120,"r":0.19451632277511324,"rec_value":0.0,"state_change_listen_mode":"automatic","record":true,"continuous_capture_enabled":true,"recording_capture_keystrokes":true,"session_capture_console":false,"session_capture_console_consent":false,"anonymize_digits":true,"anonymize_emails":true,"suppress_all":false,"suppress_text":false,"suppress_location":false,"user_attributes_enabled":true,"legal_name":"PT Dicoding Akademi Indonesia.","privacy_policy_url":"https://www.dicoding.com/privacy","deferred_page_contents":[],"record_targeting_rules":[],"feedback_widgets":[],"heatmaps":[],"polls":[],"integrations":{"optimizely":{"tag_recordings":false},"mixpanel":{"send_events":false},"google_optimize":{"tag_recordings":false},"unbounce":{"tag_recordings":false}},"features":["ingestion.http.page_content","heatmap.continuous.manual_retaker","feedback.widgetV2","error_reporting","client_script.metrics","survey.image_question","feedback.widget_telemetry","settings.billing_v2","client_script.safe_date","feedback.embeddable_widget"]};

!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=220)}({220:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}r.r(t);var a,o=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3;n(this,e),this.send=t,this.batchSize=r,this.flushInterval=i,this.buffer=[],this.flushTimer=null}var t,r,a;return t=e,(r=[{key:"getBuffer",value:function(){return this.buffer}},{key:"add",value:function(e){var t=this;this.buffer.push(e),this.buffer.length>=this.batchSize?this.flush():this.flushTimer||(this.flushTimer=setTimeout((function(){t.flush()}),this.flushInterval))}},{key:"flush",value:function(){this.buffer.length>0&&(this.send(this.buffer),this.buffer=[]),this.flushTimer&&(clearTimeout(this.flushTimer),this.flushTimer=null)}}])&&i(t.prototype,r),a&&i(t,a),e}();function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l,f=function(){try{return"performance"in window&&"now"in window.performance}catch(e){return!1}},d={version:3,metricsUrl:(null===(a=window._hjSettings)||void 0===a?void 0:a.metricsUrl)||"https://csmetrics.hotjar.com",features:{metrics:{flag:"client_script.metrics",sampling:.1},debug:{flag:"client_script.metrics.debug",sampling:.5}},browser:{hasPerformance:!1,hasDebug:!1},buffer:{bufferSize:40,flushInterval:2e3}},h={isDebugEnabled:!1,isMetricsEnabled:!1,loggedMetrics:{},genericTags:{}},g=function(e,t,r){h.loggedMetrics[e]=u(u({},h.loggedMetrics[e]),{},c({},t,r||{}))},b=function(e){return e&&(e.task||e.reason||e.module)||"value"},p=function(e,t){var r=b(t),n=h.loggedMetrics[e],i=n&&n[r]||{};return{tagName:r,start:i.start,total:i.total}},v=function(e){var t,r=null!==(t=e.tag)&&void 0!==t?t:void 0;return h.isDebugEnabled?u(u(u({},r),e.extraTags),h.genericTags):r},m=function(e){if(!l)return!1;var t=h.isMetricsEnabled||h.isDebugEnabled;return e?t&&e.flush:t},w=function(e){var t=!1,r="v=".concat(d.version),n=h.isDebugEnabled?"".concat(d.metricsUrl,"?").concat(r,"&debug=true"):"".concat(d.metricsUrl,"?").concat(r),i=JSON.stringify(e);if("sendBeacon"in navigator)try{t=navigator.sendBeacon.bind(navigator)(n,i)}catch(e){}if(!1===t)try{var a=new XMLHttpRequest;a.open("POST",n),a.timeout=1e4,a.send(i)}catch(e){}d.browser.hasDebug&&console.debug("New metric/log: ",e)},j={getState:function(){return u({},h)},start:function(){try{d.browser={hasPerformance:f(),hasDebug:/hjDebug=1/.test(location.search)};var e=window.hjSiteSettings||{},t=e.features,r=e.site_id,n=new Set(t),i=d.features,a=i.debug,s=i.metrics;h.genericTags={site_id:r},h.isDebugEnabled=n.has(a.flag)&&Math.random()<=a.sampling,h.isMetricsEnabled=n.has(s.flag)&&Math.random()<=s.sampling,l=new o(w,d.buffer.bufferSize,d.buffer.flushInterval)}catch(e){console.debug("Error in metrics.start",{error:e})}},reset:function(){h.loggedMetrics={}},stop:function(){h.isDebugEnabled=!1,h.isMetricsEnabled=!1,h.genericTags={}},count:function(e,t){var r=t.incr,n=t.tag,i=t.extraTags;try{var a=b(n),o=h.loggedMetrics[e],s=0;if(r)s=(o&&o[a]||0)+(r.value||1),h.loggedMetrics[e]=u(u({},o),{},c({},a,(null==r?void 0:r.flush)?0:s));else s=1;if(m(r)){var f={name:e,type:"count",value:s,tags:v({tag:n,extraTags:i})};l.add(f)}}catch(e){}},distr:function(e,t){var r=t.task,n=t.value;m()&&l.add({name:e,type:"distribution",value:n,tags:v({tag:{task:r}})})},time:function(){try{if(!d.browser.hasPerformance)return;return performance.now()}catch(e){}},timeStart:function(e,t){try{var r=j.time(),n=p(e,t),i=n.start,a=n.tagName;if(i)return;return g(e,a,{start:r}),r}catch(e){}},timeEnd:function(e,t){var r=t.tag,n=t.incr,i=t.extraTags;try{var a=j.time();if(!a)return;var o,s=p(e,r),u=s.start,c=s.tagName,f=s.total;if(n){var d=n.start&&a-n.start;o=d?(f||0)+d:f;var h=n.flush?void 0:{total:o};g(e,c,h)}else o=u?a-u:void 0,g(e,c);if(o&&m(n)){var b={name:e,type:"distribution",value:Math.round(o),tags:v({tag:r,extraTags:i})};l.add(b)}return a}catch(t){console.debug("Failed to send timer metric: ",{name:e,tag:r,error:t})}}};window.hj=window.hj||function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];(window.hj.q=window.hj.q||[]).push(t)},window.hj.metrics=j,hj.metrics.start(),hj.metrics.timeStart("time-to-first-event",null),window.hjBootstrap=window.hjBootstrap||function(e,t,r){var n=["bot","google","headless","baidu","bing","msn","duckduckbot","teoma","slurp","yandex","phantomjs","pingdom","ahrefsbot"].join("|"),i=new RegExp(n,"i"),a=window.navigator||{userAgent:"unknown"},o=a.userAgent?a.userAgent:"unknown";if(i.test(o))return hj.metrics.count("session-rejection",{tag:{reason:"bot"}}),void console.warn("Hotjar not launching due to suspicious userAgent:",o);var s="http:"===window.location.protocol,u=Boolean(window._hjSettings.preview);if(s&&!u)return hj.metrics.count("session-rejection",{tag:{reason:"https"}}),void console.warn("For security reasons, Hotjar only works over HTTPS. Learn more: https://help.hotjar.com/hc/en-us/articles/115011624047");var c=function(e,t,r){window.hjBootstrapCalled=(window.hjBootstrapCalled||[]).concat(r),window.hj&&window.hj._init&&window.hj._init._verifyInstallation&&hj._init._verifyInstallation()};c(0,0,r);var l=window.document,f=l.head||l.getElementsByTagName("head")[0];hj.scriptDomain=e;var d=l.createElement("script");d.async=1,d.src=hj.scriptDomain+t,d.charset="utf-8",f.appendChild(d),c.revision="5d5ad59b2707",window.hjBootstrap=c},window.hjBootstrap("https://script.hotjar.com/","modules.76304821fe35d593f0f4.js","2209120"),window.hjLazyModules=window.hjLazyModules||{SURVEY_V2:{js:"survey-v2.807ddab72851d62a5cf5.js"},SURVEY_BOOTSTRAPPER:{js:"survey-bootstrapper.14f540a805c60f473ee5.js"},SURVEY_ISOLATED:{js:"survey-isolated.c29c3b4d3447782ff220.js"},HEATMAP_RETAKER:{js:"heatmap-retaker.db9fb0b34d322a0b3341.js"},SURVEY_INVITATION:{js:"survey-invitation.d69e76ba312c6c9d6cbe.js"},NOTIFICATION:{js:"notification.91f72ba740a3f85b81e5.js"},INCOMING_FEEDBACK:{js:"incoming-feedback.301dc7ba34836b2535ca.js"},PREACT_INCOMING_FEEDBACK:{js:"preact-incoming-feedback.274337c5779561055a6e.js"},SENTRY:{js:"sentry.0e5dadd9b6b1a6ca4d1e.js"}}}});
