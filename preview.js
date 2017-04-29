
            (function() {
                // Dynamic values from page request
                
            var script = document.getElementById("celtra-script-1");
            if (!script || script.tagName.toLowerCase() !== 'script')
               throw 'Element with id equal to scriptId does not exist or is not a script.';
        
                var runtimeParams = {"tuneAndroidQueryStringFragment":null,"userOptOut":false,"deviceInfo":{"deviceType":"Desktop","primaryHardwareType":"Desktop","mobileDevice":false,"osName":"OSX","osVersion":"10.11.6","platform":"DesktopPlatform","platformVersion":null,"browserName":"Chrome","browserVersion":"58.0.3029.81","browserRenderingEngine":"WebKit","vendor":"Google","model":"Chrome - OS X"},"authToken":"b21e516a3c3162153522c8051230a7bc","ipCity":"Poplar","destinationDefinitions":[],"ipCountryCode":"GB","gpsLat":"","customAudiences":{},"clientTimeZoneOffsetInMinutes":-60,"ipConnectionType":"Cable\/DSL","folderId":"298b173c","accountId":"bda61e7e","derivedAudiences":{},"dynamicContent":{},"overrides":{"deviceInfo":null,"ipCity":null,"ipCountryCode":null,"customAudiences":{},"clientTimeZoneOffsetInMinutes":null,"derivedAudiences":{},"language":null,"ipCityGeonameId":null,"clientTimestamp":null,"ipPrincipalSubdivisionCode":null,"weather":{"windy":null,"currentCondition":null,"apparentTemperature":null},"ipRegionCode":null,"placementId":null},"ipPostalCode":"E14","purpose":"preview","authBasis":"1493426690584,4f79f254,","gpsLng":"","neustarSegment":null,"variantChoices":{},"scriptId":"celtra-script-1","language":"en","ipLat":51.5,"ipCityGeonameId":"2640091","ipCountryName":"United Kingdom","ipMetroCode":null,"sessionId":"s1493426690xd38d20594a460dx46702405","userIdentifiers":{},"clientTimestamp":"1493417591.023","ipPrincipalSubdivisionCode":"ENG","weather":{"windy":"0","currentCondition":"cloudy","apparentTemperature":11},"tuneIosQueryStringFragment":null,"ipTimeZone":"Europe\/London","ipRegionCode":null,"ipContinentCode":"EU","ipLng":-0.0167,"ipContinentName":"Europe","secure":1,"platformAdvIdTrackingLimited":null,"platformAdvId":null,"ipPrincipalSubdivisionName":"England","placementId":null,"firstPage":1,"iosAdvId":null,"iosAdvIdTrackingLimited":null,"androidAdvId":null,"androidAdvIdTrackingLimited":null,"overridableClickThroughDestinationUrl":false};
                runtimeParams.redirectJsClientTimestamp = new Date() / 1000;
                
                var macros = function (x) {
                    if (x instanceof Array) {
                        return x.map(macros);
                    } else {
                        var macroTags = [['{celtraPlacementId}', null],
                                         ['{celtraCreativeId}', "4f79f254"],
                                         ['{celtraCreativeVariant}', ""],
                                         ['{celtraCreativeVariant:urlenc}', ""],
                                         ['{celtraAccountId}', "bda61e7e"],
                                         ['{celtraCampaignId}', "298b173c"],
                                         ['{celtraSupplierId}', ""],
                                         ['{celtraProto}',"https"],
                                         ['%%CACHEBUSTER%%', (Math.random()+'').slice(2)],
                                         ['{celtraRandom}', (Math.random()+'').slice(2)],
                                         ['{celtraPlatformAdvId}', null],
                                         ['{celtraPlatformAdvIdTrackingLimited}', ""],
                                         ['{celtraSessionId}', "s1493426690xd38d20594a460dx46702405"],
                                         ['{celtraIosAdvId}', null],
                                         ['{celtraIosAdvIdTrackingLimited}', ""],
                                         ['{celtraIosAdvIdTrackingLimitedBoolStr}', ""],
                                         ['{celtraAndroidAdvId}', null],
                                         ['{celtraAndroidAdvIdTrackingLimited}', ""],
                                         ['{celtraAndroidAdvIdTrackingLimitedBoolStr}', ""],
                                         ['%s', "https"],
                                         ['%n', (Math.random()+'').slice(2)],
                                         ['{celtraCreativeId:int}', 1333391956],
                                         ['{celtraPlacementId:int}', 0],
                                         ['{celtraCampaignId:int}', 696981308],
                                         ['{celtraSupplierId:int}', ""],
                                         ['{celtraExternalCreativeId}', ""],
                                         ['{celtraExternalCreativeName}', ""],
                                         ['{celtraExternalPlacementId}', ""],
                                         ['{celtraExternalPlacementName}', ""],
                                         ['{celtraExternalSiteId}', ""],
                                         ['{celtraExternalSiteName}', ""],
                                         ['{celtraExternalSupplierId}', ""],
                                         ['{celtraExternalSupplierName}', ""],
                                         ['{celtraExternalSessionId}', ""]

                                        ];
                        return macroTags.reduce(function(str, replacementRule, idx, arr) {
                            return str.replace(new RegExp(replacementRule[0], 'ig'), replacementRule[1] ? replacementRule[1] : '');
                        }, x);
                    }
                };
        

                // Dynamic values that we do not want to pass forward in urls,
                // so we look them up on every page request based on runtimeParams
                var urlOpenedOverrideUrls = {};
                var storeOpenedOverrideUrls = {};
                var urlOpenedUrlAppendage = "";
                var clickThroughDestinationUrl = "https:\/\/ClickThroughDestination";

                // Less dynamic values for payload request
                var payloadBase = "https:\/\/cache-ssl.celtra.com\/api\/creatives\/4f79f254\/compiled\/preview.js";
                var cacheParams = {"v": "28-38bfc9f8fc", "secure": 1, "inmobi": typeof imraid !== 'undefined' && typeof _im_imai !== 'undefined' ? '1' : '0'};

                var trackers = [];
                trackers.urlsAndEventsFor = function(event) {
                    return this.reduce(function(acc, tracker) {
                        var ue = tracker(event) || {};
                        return {
                            urls:   acc.urls.concat(ue.urls || []),
                            events: acc.events.concat(ue.events || [])
                        };
                    }, {urls: [], events: []});
                };
                
                var adLoadingEvent = {"name":"adLoading","sessionId":"s1493426690xd38d20594a460dx46702405"};
                adLoadingEvent.clientTimestamp = new Date/1000;

                trackers.urlsAndEventsFor(adLoadingEvent).urls.forEach(function(url) {
                    // On IE 8+ URLs containing '%' character sometimes throw an error and
                    // stop current JS run loop. One solution  would be to look for that
                    // and replace it with '%25', but we've decided not to modify incoming
                    // URLs, because this issue is really a combination of two external
                    // problems: broken URL on a buggy browser.
                    // https://celtra.atlassian.net/browse/MAB-4476
                    try {
                        (new Image).src = url;
                    } catch(e) {}
                });

                // Build payload url
                var pairs = [];
                for (var k in cacheParams)
                    pairs.push(encodeURIComponent(k) + '=' + encodeURIComponent(cacheParams[k]));
                var payloadUrl = payloadBase + '?' + pairs.join('&');
                
                // Request and run payload
                var payload = document.createElement('script');
                payload.src = payloadUrl;
                payload.onload = function() {
                    runtimeParams.payloadJsClientTimestamp = new Date() / 1000;
                    window.celtraDeviceInfoRuntimeParams = runtimeParams.deviceInfo;
                    window.celtra.payloads[payloadUrl](script, runtimeParams, trackers, urlOpenedOverrideUrls, storeOpenedOverrideUrls, macros, urlOpenedUrlAppendage, clickThroughDestinationUrl);
                };
                console.log(script.parentNode)
                script.parentNode.insertBefore(payload, script.nextSibling);
        
            })();
            