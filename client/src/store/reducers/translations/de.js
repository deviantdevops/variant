const lang_de_reducer = (state = {
    "currency": {
        "symbol": "€",
        "label": "EUR"
    },
    "common": {
        "from": "ab",
        "to": "bis",
        "net": "netto",
        "total": "brutto",
        "tax": "mwst",
        "year": "Jahre",
        "day": "Tag(e)"
    },
    "navbar": {
        "language": "Sprache",
        "lang" : {
            "english": "Englisch",
            "german": "Deutsch"
        },
        "user": {
            "account": "Meine Daten",
            "invoices": "Meine Rechnungen",
            "paymentmethods": "Meine Zahlungsarten",
            "notifications": "Meine Benachrichtigungen",
            "logout": "Ausloggen",
            "login": "Einloggen"
        },
        "cart": {
            "cart": "Zum Warenkorb",
            "checkout": "Zur Kasse",
            "addproducts": "Produkte hinzufügen",
            "empty": "Ihr Warenkorb ist leer.",
            "items": "Produkt(e)",
            "incart": "im Warenkorb"
        },
        "notifications": {
            "new": "neue",
            "notifications": "Benachrichtigungen",
            "showall": "Alle Benachrichtigungen anzeigen",
            "campaign": {
                "repeat": {
                    "title": "Update zu Ihrer Kampagne",
                    "desc": "Kampagne mit einem Klick erneut schalten oder Zeitraum verlängern."
                },
                "reachedgoal": {
                    "title": "Neuer Kampagnenstatus: Beendet",
                    "desc": "Ihre Kampagne hat ihr Ziel erreicht."
                },
                "declined": {
                    "title": "Neuer Kampagnenstatus: Anzeige abgelehnt",
                    "desc": "Leider verstößt Ihre Anzeige gegen die Werberichtlinien, und kann daher nicht geschaltet werden. Bitte wenden Sie Sich an unser Team."
                },
                "tocomplete": {
                    "title": "Kampagne vervollständigen",
                    "desc": "Ihre bei FLYERALARM bestellte Social Media Kampagne muss noch vervollständigt werden."
                },
                "monthlyreport": {
                    "title": "Monatsauswertung",
                    "desc": "Ihre monatliche Gesamtauswertung aller Kampagnen ist jetzt verfügbar."
                }
            }
        }
    },
    "sidebar_left": {
        "dashboard": "Dashboard",
        "help": "Hilfe",
        "ad_channel_finder": "Werbekanalfinder",
        "advice": "Ratgeber",
        "chat": "Chat",
        "email": "Email",
        "phone": "Telefon",
        "whats_new": "Neuigkeiten",
        "deals": "Aktionen",
        "legal": {
            "legal": "Rechtliches",
            "agb": "AGB",
            "privacy": "Datenschutz",
            "imprint": "Impressum"
        }
    },
    "dashboard": {
        "dashboard": "Dashboard",
        "loading": "Lade Inhalte",
        "tabs": {
            "product_overview": "Produktübersicht",
            "my_campaigns": "Meine Kampagnen",
            "my_products": "Meine Produkte",
            "my_stats": "Meine Gesamtstatistik"
        },
        "products": {
            "moreinfo": "Klicken Sie hier, um mehr über das Produkt zu erfahren.",
            "banner": {
                "gabudget": "120 € Werbeguthaben sichern",
                "new": "Neu",
                "topseller": "Topseller"
            }
        },
        "stats": {
            "title": {
                "numbercampaigns": "Anzahl Kampagnen",
                "allcampaigns": "Alle Kampagnen",
                "latestcampaign": "Zuletzt geschaltete Kampagne"
            },
            "campaigns": {
                "all": "Gesamt",
                "active": "Aktiv",
                "paused": "Pausiert",
                "canceled": "Storniert",
                "closed": "Abgeschlossen",
                "notstarted": "Nicht gestartet"
            },
            "latest": {
                "title": "Fortschritt",
                "desc": "Aktueller Stand Ihrer zuletzt geschalteten Kampagne.",
                "clicks": "Klicks",
                "views": "Einblendungen",
                "daily": {
                    "title": "Tagesstatistik"
                }
            },
            "networks": {
                "title": "Verteilung nach Netzwerken"
            },
            "gender": {
                "title": "Verteilung nach Geschlecht"
            },
            "age": {
                "title": "Verteilung nach Alter"
            }
        }
    },
    "product_filter": {
        "results_found": "Produkte",
        "all_products": "Alle Produkte anzeigen",
        "booked_products": "Bereits gekaufte Produkte anzeigen",
        "active_products": "Aktiv genutzte Produkte anzeigen",
        "filters": "Filter",
        "price_range": "Preispanne",
        "net": "netto",
        "all": "alle",
        "ad_channel": "Werbekanäle/Produkte",
        "social_network": "Soziale Netzwerke",
        "display_network": "Display Netzwerke",
        "market_places": "Marktplätze & Jobbörsen",
        "searchengines": "Suchmaschinen",
        "directories": "Online-Verzeichnisse",
        "seo": "SEO",
        "tools": "Tools",
        "coupons": "Gutscheine",
        "clear_filters": "Alle Filter zurücksetzen"
    },
    "search": {
        "products": {
            "placeholder": "Produkte durchsuchen"
        }
    },
    "details": "Details anzeigen",
    "coupon_flags": {
        "promo":"Werbeguthaben sichern"
    },
    "need_help": "Brauchen Sie Hilfe?",
    "hide_help": "Hilfe ausblenden",
    "help_text": {
        "1": "<h5>What's the difference between the two types?</h5><p>In a <b>click-optimized campaign</b>, the specified budget is used in such a way that as many people as possible <b>click</b> on the advertisement and follow the link provided (e.g. to your website or online shop). It can bring potential customers to your website or online store.</p><p>in a <b>range-optimized campaign</b>, the budget is used so that as many people as possible <b>see</b> the ad. It can generate maximum attention among your target group and increase your brand awareness and reach. We also recommend this to you if it's for the promotion of local topics (e.g. new openings, special promotions or regional events).</p>"
    },
    "campaign_type": {
        "click": "reichweitenoptimiert",
        "impressions": "View Optimized"
    },
    "discovery": "Entdecken Sie unsere digitalen Services",

    "gdn-standard":{
        "btn_action":"Konfigurieren & bestellen",
        "price_subnote":"(*) z.B. für mind. 14 Tage"
    },

    "linkedin-standard":{
        "btn_action":"Konfigurieren & bestellen",
        "price_subnote":"(*) z. B. bei 5.000 Einblendungen"
    },

    "screenpaper-standard":{
        "btn_action":"Konfigurieren & bestellen",
        "price_subnote":"(*) z. B. bei Flyer DIN A6 und Laufzeit 1 Jahr"
    },

    "fad-voucher":{
        "btn_action":"Konfigurieren & bestellen",
        "price_subnote":"(*) z.B. bei 100 € Budget"
    },

    "layout-ads":{
        "btn_action":"Konfigurieren & bestellen",
        "price_subnote":"(*) im Monat"
    },

    "rc-listing":{
        "btn_action":"Konfigurieren & bestellen",
        "price_subnote":"(*) im Monat"
    },

    "fb-standard":{
        "btn_action":"Konfigurieren & bestellen",
        "price_subnote":"(*) z. B. bei 5.000 Einblendungen"
    },

    "twitter-standard":{
        "btn_action":"Konfigurieren & bestellen",
        "price_subnote":"(*) z. B. bei 5.000 Einblendungen"
    },

    "ebay-standard":{
        "btn_action":"Konfigurieren & bestellen",
        "price_subnote":"(*) z.B. 5.000 Einblendungen, 300x250 Pixel"
    },

    "pinterest-standard":{
        "btn_action":"Konfigurieren & bestellen",
        "price_subnote":"(*) z. B. bei 10.000 Einblendungen"
    },

    "indeed-standard":{
        "btn_action":"Konfigurieren & bestellen",
        "price_subnote":"(*) z. B. bei 5.000 Einblendungen"
    },

    "snapchat-standard":{
        "btn_action":"Konfigurieren & bestellen",
        "price_subnote":"(*) z. B. bei 50.000 Einblendungen"
    },

    "seo-standard":{
        "btn_action":"Konfigurieren & bestellen",
        "price_subnote":"(*) im Monat"
    },

    "config": {
        "configure_your_ad": "Produkt hinzufügen",
        "cart": "Warenkorb",
        "summary_and_payment": "Kasse",
        "currentstep": "Aktueller Schritt"
    },
    "configurator": {
        "btns": {
            "goto": {
                "audience": "Weiter zu Budget & Zielgruppe",
                "creative": "Weiter zur Anzeigenerstellung",
                "cart": "In den Warenkorb legen",
                "goback_to_goals": "Zurück zu Ziel & Laufzeit",
                "goback_to_budget": "Zurück zu Budget & Zielgruppe",
            },
            "googlesearch": {
                "addkeyword": "Suchbegriff hinzufügen"
            }
        },
        "tabs": {
            "goal": "Ziel & Laufzeit",
            "audience": "Budget & Zielgruppe",
            "creative": "Anzeige erstellen"
        },
        "tab_panels":{
            "audience": {
                "men": "Männer",
                "women": "Frauen",
                "all": "Alle",
                "mobile": "Mobil",
                "desktop": "Desktop"
            }
        },
        "toggles": {
            "help": "Brauchen Sie Hilfe?",
            "targetgroup": "Zielgruppe einschränken (optional)"
        },
        "headlines": {
            "companyinfo": "Infos zu Ihrer Firma",
            "goal": "Kampagnenziel festlegen",
            "definegoal": "Was möchten Sie mit dieser Kampagne erreichen?",
            "campaigntype": "Kampagnentyp festlegen",
            "campaignruntime": "Kampagnenlaufzeit",
            "dailybudget": "Tagesbudget",
            "targetarea": "Zielgebiet",
            "googlesearch": {
                "setkeywords": "Suchbegriffe festlegen",
                "suggestions": "Suchbegriffvorschläge"
            },
            "target": {
                "age": "Auswahl Altersgruppe",
                "gender": "Auswahl Geschlecht",
                "devices": "Auswahl Geräte"
            },
            "ad_name": {
                'title': "Auftragsname",
                "help": 'Sie können Ihrer Werbeanzeige einen internen Auftragsnamen vergeben. Dieser wird nicht öffentlich angezeigt und kann zu Übersichtszwecken genutzt werden. Zum Beispiel: Sommerkampagne Google Display 2021.'
            }
        },
        "notes": {
            "goal": "Mit dem Kampagnenziel können Sie steuern, welches Ziel Sie primär verfolgen. Es kann nur ein Ziel ausgewählt werden pro Kampagne",
            "campaigntype": "Wählen Sie eine einmalige Kampagne mit festem Start- und Enddatum, eine fortlaufende Kampagne, ohne festes Enddatum oder eine wiederkehrende Kampagne, die sich in bestimmten Intervallen automatisch wiederholt.",
            "dailybudget": "Legen Sie bitte ein Tagesbudget für Ihre Kampagne fest.",
            "targetarea": "Legen Sie ein Zielgebiet für die Ausspielung Ihrer Anzeige fest. Sie können entweder ein Land oder einen Ort inklusive Umkreis definieren.",
            "googlesearch": {
                "setkeywords": "Geben Sie bitte nachfolgend passende Suchbegriffe für Ihre Kampagne an oder wählen Sie einfach einen passenden Suchbegriff aus den Vorschlägen.",
                "rankingdifficulty": "Ranking Schwierigkeit",
                "ranking": {
                    "easy": "leicht",
                    "medium": "mittel",
                    "hard": "schwer"
                }
            }
        },
        "helpbox":{
            "goals":{
                "title":"Kampagnenziel für Ihr Vorhaben festlegen",
                "body":"<p>Mit <strong>reichweitenoptimierten Kampagnen</strong> erzeugen Sie die maximale Aufmerksamkeit bei Ihrer Zielgruppe. Diese empfehlen wir Ihnen z. B. für die Bewerbung lokaler Themen (z.B. Neueröffnung, Sonderaktionen oder regionale Veranstaltungen). Bei einer reichweitenoptimierten Kampagne wird das Budget so verwendet, dass möglichst viele Menschen die Anzeige sehen. Wenn Sie möchten, dass möglichst viele Nutzer von auf Ihre Webseite oder Ihren Online-Shop klicken, empfehlen wir Ihnen die klickoptimierte Kampagne.</p><p>Mit <strong>klickoptimierten Kampagnen</strong> bringen Sie potenzielle Kunden auf Ihre Webseite oder Ihren Online-Shop. D.h. bei einer klickoptimierten Kampagne wird das festgelegte Budget so verwendet, dass möglichst viele Menschen auf die Werbeanzeige klicken und dem hinterlegten Link (z.B. auf Ihre Webseite oder Online-Shop) folgen.</p>"
            },
            "runtime":{
                "title":"Den passenden Typ für Ihr Vorhaben wählen",
                "body":"Für Ihre Kampagne können Sie aus drei verschiedenen Kampagnentypen wählen. Damit legen Sie fest, wie und wann Ihre Kampagne geschaltet wird.<p><strong>Einmalige Kampagne:</strong><br> Hier wird Ihre Anzeige einmal geschaltet, und zwar in dem von Ihnen definierten Zeitraum (Start/Enddatum). Die Kampagnenlaufzeit kann bis zu 30 Tage lang sein.</p><p><strong>Fortlaufende Kampagne:</strong><br> Mit diesem Typ wird Ihre Anzeige für mindestens 30 Tage geschaltet. Der Zeitraum verlängert sich automatisch um weitere 30 Tage, sofern Sie die Verlängerungsoption nicht im Kundenkonto deaktiviert haben.</p><p><strong>Wiederkehrende Kampagne:</strong><br> Wenn Sie eine Anzeige beispielsweise alle zwei Monate automatisch schalten lassen möchten, können Sie dies mit einer wiederkehrenden Kampagne realisieren. Hier können Sie das Ausführungsintervall selbst festlegen.</p><p>Sie sind sich unsicher, welcher Kampagnentyp der richtige ist? Unsere Experten helfen Ihnen gerne bei der Wahl des passenden Typs. Sie erreichen uns im Live-Chat, per E-Mail oder über die FLYERALARM Digital-Hotline. Alle Kontaktdaten finden Sie <a href=\"https://flyeralarm.digital/kontakt\" target=\"_blank\" rel=\"noopener\">hier</a>.</p>"
            },
            "budget":{
                "title":"Das richtige Tagesbudget wählen",
                "body":"Je höher das Tagesbudget, desto mehr Personen können Sie mit Ihrer Kampagne erreichen. Das Mindestbudget pro Tag beträgt 5 Euro zzgl. Servicegebühr. Sie können maximal 100 Euro pro Tag wählen.  Voraussichtliche Klicks: Es handelt sich hierbei um eine Schätzung basierend auf Ihrem gewählten Werbebudget. Die voraussichtlichen Klicks variieren und sind abhängig von Anzeigenqualität, Zielgruppe, Region und weiteren Parametern."
            },
            "targetarea":{
                "title":"Zielgruppe geografisch eingrenzen",
                "body":"Ihre Online-Werbung wird automatisch in einem Umkreis von 30 Kilometer um die angegebene Adresse ausgespielt. D.h. Sie definieren einen Mittelpunkt z. B. über eine exakte Adresse oder einen Ort. Anschließend erfolgt die Schaltung in einem Umkreis von 30 km. Diesen Umkreis können Sie beeinflussen, indem Sie den vorausgewählten Umkreis anpassen. Bei geografischen Ortsangaben wie Bayern oder Deutschland wird die Werbeanzeige in der genannten Region (d.h. im gesamten Bundesland oder Land) ausgespielt. Hier hat der Umkreis keine Bedeutung mehr."
            },
            "googledisplayads":{
                "title":"Worin unterscheiden sich Reponsive- und Standard-Display Ads?",
                "body":"<p><strong>Responsive Display Ads:</strong><br />Können ohne großen Aufwand erstellt werden und sind das bevorzugte Format, um möglichst viele Internetnutzer über das Google Display Netzwerk anzusprechen. Alles was Sie zum Starten benötigen ist der Anzeigentext (Titel, Beschreibung) und drei Grafiken (Logo, Grafik: Querformat, Quadrat).</p><p><strong>Standard Display Ads:</strong><br />Für jedes Werbeformat muss eine eigene Grafik erstellt werden. Dadurch behält man die maximale Kontrolle über das Anzeigendesign, muss aber mehr Zeit und Ressourcen in die Erstellung der Grafiken investieren.</p><p>Mehr über beide Anzeigenvarianten erfahren Sie in unserem <a href=\"https://flyeralarm.digital/ratgeber/google-ads-responsive-vs-bildanzeigen/\" target=\"_blank\" rel=\"noopener\">Ratgeber</a>. Sie sind sich immer noch unsicher? Unsere Experten helfen Ihnen gerne weiter. Sprechen Sie uns direkt im Live-Chat, per Telefon oder E-Mail an.</p>"
            },
            "addetails":{
                "title":"Werbeanzeige selbst anlegen oder erstellen lassen",
                "body":"<p>Sie können Ihre Werbeanzeige jetzt gleich erstellen oder Sie legen sie erst nach Abschluss der Bestellung zu einem späteren Zeitpunkt an.</p><p>Wenn Sie noch kein Anzeigenlayout haben, können Sie auf Wunsch auch unseren Layoutservice mit einem Klick dazu buchen. Unsere Grafikexperten übernhemen dann die Erstellung und das Aufsetzen der Kampagneninhalte (Text, Bilder) nach einer Absprache mit Ihnen.</p>"
            },
            "titleNlinks":{
                "title": "",
                "body":"<p>Hinweise zum Anzeigentitel:<br />Für den Anzeigentitel können Sie einmal 25 (kurze Variante) und bis zu 90 Zeichen (lange Variante) verwenden. Bitte füllen Sie beide Anzeigentitel aus.</p><p>Hinweise zum Anzeigentext:<br />Der Text darf nicht länger als 90 Zeichen sein. Als Anzeigentext empfehlen wir z.B. direkte Aufforderungen sowie ergänzende Informationen zu Ihrer Werbegrafik.</p><p>Hinweise zum Link:<br />Geben Sie einen Link zu Ihrer Webseite oder Ihren Online-Shop an. Benutzer die auf Ihre Anzeige klicken werden zu dieser Zielseite weitergeleitet.</p>"
            },
            "mediatype":{
                "title":"Medientyp für Ihre Kampagne",
                "body":"<p>Akzeptiertes Format für  <strong>Grafiken</strong> sind : JPG, PNG, PDF / max. Dateigröße 5 MB</p><p>Akzeptiertes Format für  <strong>Videos</strong> sind  MP4, MPEG, AVI, MOV / max. Dateigröße 100 MB</p>"
            },

        },
        "helpicon":{
           "targetarea":"Hier können Sie die geografische Ausrichtung für Ihre Kampagne festlegen. Nur Personen, die sich im festgelegten Gebiet aufhalten, werden Ihre Anzeige später sehen. Sie können einen Ort mit/ohne Umkreis wählen oder Ihre Kampagne landesweit schalten.",
            "more_instructions":"Grenzen Sie Ihre Zielgruppe weiter ein (Beispiel: Studenten, sportbegeistert, gesundheitsinteressiert, umweltbewusst). Unser Team übernimmt dann die passenden Zielgruppeneinstellungen in Ihrer Kampagne.",
            "image_file": "Bitte laden Sie nachfolgend Ihre Grafik(en) für Ihre Werbeanzeige im angegebenen Format hoch. Falls Ihre Grafik nicht das angeforderte Format hat, können Sie diese nach dem Hochladen über unseren Image-Cropper passend zuschneiden. Alternativ können Sie auch unseren Online Designer für die Gestaltung Ihrer Werbegrafiken nutzen."
        },



        "help": {
            "googlesearch": {
                "website": "Mithilfe Ihrer Website-Adresse können wir Ihnen passende Suchbegriffe empfehlen, die den Erfolg Ihrer Kampagne maximieren.",
                "industry": "Durch die Angabe Ihrer Branche können wir Ihnen passende Suchbegriffe empfehlen, die den Erfolg Ihrer Kampagne maximieren."
            },
            "intervalcampaign": {
                "value": "Legen Sie bitte einen Intervall für die Wiederholung der Kampagne fest. (z. B. 30 Tage)",
                "unit": "Wählen Sie bitte eine Einheit für Ihren angegebenen Intervall aus."
            },
            "onetimecampaign": {
                "enddate": "Das Enddatum wird automatisch anhand der Kampagnenlaufzeit berechnet."
            },
            "continuouscampaign": {
                "enddate": "Bei einer fortlaufenden Kampagne gibt es kein festes Enddatum. Sie haben jedoch die Möglichkeit Ihre Kampagne zum Ende jeden Monats zu kündigen."
            },
            "recurringcampaign": {
                "enddate": "Das Enddatum wird automatisch anhand der Kampagnenlaufzeit berechnet."
            },
            "target": {
                "age": "Schränken Sie Ihre Kampagne auf eine bestimmte Altersgruppe ein, damit Ihre Werbeanzeigen nur für Nutzer sichtbar ist, die im festgelegten Bereich liegen.",
                "gender": "Schränken Sie Ihre Kampagne auf ein bestimmtes Geschlecht ein. So können Sie festlegen, wer die Werbeanzeige sehen soll. Beispiel: Sie möchten ein Pflegeprodukt nur für Männer bewerben. Dann können Sie hier das Geschlecht eingrenzen.",
                "devices": "Schränken Sie Ihre Kampagne auf Mobil- oder Desktop-Geräte ein. So können Sie kontrollieren, auf welchen Geräten die Anzeige angezeigt wird. Wenn Sie beispielsweise nur Nutzer erreichen möchten, die auf dem Smartphone surfen, können Sie hier nur Mobil auswählen."
            }
        },
        "labels": {
            "googlesearch": {
                "website": "Ihre Website",
                "industry": "Ihre Branche",
                "keywords": "Ihr Suchbegriff",
                "table": {
                    "selectedkeywords": "Ihre ausgewählten Suchbegriffe",
                    "searchvolume": "Suchvolumen",
                    "cpc": "Kosten pro Klick (CPC)",
                    "delete": "Löschen"
                }
            },
            "startdate": "Startdatum",
            "enddate": "Enddatum",
            "interval": "Wiederholungsintervall",
            "estimatedclicks": "Voraussichtliche Klicks",
            "estimatedviews": "Voraussichtliche Einblendungen",
            "targetarea": "Land, Ort oder PLZ wählen",
            "targetradius": "Umkreis",
            "km": "km",
            "from": "von",
            "to": "bis"
        },
        "placeholders": {
            "googlesearch": {
                "website": "z. B. www.flyeralarm.de",
                "industry": "Bitte auswählen"
            },
            "intervalcampaign": {
                "value": "z. B. 5",
                "days": "Tag(e)",
                "weeks": "Woche(n)",
                "months": "Monat(e)"
            },
            "targetarea": "z. B. Würzburg",
            "targetradius": "z. B. 40"
        },
        "goals": {
            "reach": "Markenbekanntheit und Reichweite steigern - Reichweitenoptimiert",
            "clicks": "Mehr Website-Besucher oder Verkäufe erhalten - Klickoptimiert"
        },
        "campaigntype": {
            "onetime": "einmalige Kampagne",
            "continuous": "fortlaufende Kampagne",
            "recurring": "wiederkehrende Kampagne",
            "desc": {
                "onetime": "Ich möchte eine einmalige Kampagne mit einer Dauer von bis zu 30 Tagen durchführen.",
                "continuous": "Ich möchte eine Kampagne ohne festes Enddatum durchführen. Mindestlaufzeit 30 Tage, monatlich kündbar.",
                "recurring": "Ich möchte eine Kampagne ausführen, die sich in einem bestimmten Intervall automatisch wiederholt."
            }
        },

    },
    "campaign_summary": {
        "labels": {
            "campaign_summary": "Konfiguration Ihrer Kampagne",
            "campaign_goal": "Kampagnenziel:",
            "campaign_type": "Kampagnentyp:",
            "target_audience": "Budget & Zielgruppe",
            "age_group": "Altersgruppe:",
            "gender": "Geschlecht:",
            "device": "Geräte:",
            "center": "Schaltungsort:",
            "radius": "Umkreis",
            "settings": "Laufzeit & Budget",
            "start_date": "Startdatum:",
            "run_time": "Laufzeit:",
            "budget": "Budget:",
            "preview_ad": "Vorschau Ihrer Anzeige",
            "campaign_name":"Auftragsname:",
            "ad_title": "Anzeigentitel:",
            "ad_description": "Anzeigentext:",
            "ad_url":"Anzeigenlink:"
        },
        "values": {
            "click": "klickoptimiert",
            "impressions": "reichweitoptimiert",
            "onetime": "einmalige Kampagne",
            "continuous": "fortlaufende Kampagne",
            "interval": "wiederkehrende Kampagne",
            "gender": {
                "all": "Alle",
                "male": "Männlich",
                "female": "Weiblich",
                "men": "Männer",
                "women": "Frauen"
            },
            "devices":{
                "mobile": "Mobil",
                "desktop": "Desktop",
                "all": "Alle"
            }
        }
    },
    "media_type": {
        "header": "Welche Art von Mediendatei möchten Sie hochladen?",
        "image_file": "Grafiken",
        "video_file": "Videos",
    },
    "screenpaper_edit": {
        "header": {
            "screenpaper_edit": "screenpaper bearbeiten",
            "edit": "Darstellung ",
            "settings": "Einstellungen",
            "preview": "screenpaper Vorschau",
            "live_view": "Live-Ansicht Ihres screenpapers",
            "embedded_code": "Einbett-Code"
        },
        "customize_appearance": "Aussehen und Eigenschaften anpassen",
        "title": "Titel:",
        "title_place_holder": "Mein neuer digitaler Flyer!",
        "title_sub_description": "Sie haben 0 zeichen von 150 möglichen Zeichen eingegeben",
        "description": "Beschreibung:",
        "description_sub_description": "Sie haben 0 Zeichen von 1000 möglichen Zeichen eingegeben.:",
        "link": "Link (z. B. zum Produkt oder Ihrer Website):",
        "screenpaper_rotate": "screenpaper drehen",
        "no_rotation": "Nicht drehen",
        "rotate_left": "links",
        "rotate_right": "rechts",
        "background_description": "Den Hintergrund Ihres screenpaper können Sie selbst bestimmen. Zur Wahl stehen zahlreiche Hintergrundgrafiken oder Sie wählen eine bestimmte Farbe aus.",
        "white_label" :"white-label",
        "white_label_description" :"screenpaper als White-Label Lösung nutzen. Das screenpaper Logo wird entfernt.",
        "edit_settings": "Einstellungen",
        "edit_settings_description": "Sie können diese Einstellungen auch jederzeit in Ihrem Kundenkonto anpassen.",
        "set_password": "Passwortschutz festlegen?",
        "share_option": "Teilen-Optionen einblenden?",
        "allow_embedding": "Einbetten erlauben?",
        "set_publish_period": "Veröffentlichungszeitraum festlegen?",
        "assign_order_name": "Auftragsname vergeben?",
        "assign_order_name_details": "Sie können Ihrem screenpaper einen internen Auftragsnamen vergeben, dieser wird nicht öffentlich angezeigt.",

    },

    "ad_guidlines": "<div class='adGuidlines text-left'><h3>Google Display Ads Werberichtlinien</h3><p>Google Ads möchte eine Plattform für digitale Werbung bieten, die vertrauenswürdig und transparent ist und sich gleichermaßen für Nutzer, Werbetreibende und Publisher eignet. Die nachfolgenden Richtlinien dienen nicht nur der Einhaltung von Gesetzen, sondern sollen auch zu einer sicheren und positiven Onlineerfahrung für Nutzer beitragen. Daher sind bestimmte Inhalte verboten, die nach Google's empfinden für Nutzer und das gesamte Werbesystem schädlich sind.</p><p>Bei der Anzeigenprüfung kommt eine Kombination aus automatischen und menschlichen Bewertungsfaktoren zum Einsatz, um zu gewährleisten, dass Google Ads-Anzeigen diesen Richtlinien entsprechen.</p><h4>Unzulässige Inhalte:</h4><p><strong>Produktfälschungen:</strong><br/>Bei Google Ads sind der Verkauf von Produktfälschungen und die Werbung für gefälschte Produkte verboten. Produktfälschungen sind Produkte, die Marken oder Logos enthalten, die mit der Marke bzw. dem Logo eines anderen Anbieters identisch oder kaum davon zu unterscheiden sind. Die Markenkennzeichen des Produkts werden nachgeahmt, um den Eindruck zu erwecken, es handele sich um ein echtes Produkt des Markeninhabers. Diese Richtlinie gilt sowohl für den Inhalt der Anzeige als auch für die Inhalte Ihrer Website oder App.</p><p><strong>Gefährliche Produkte oder Dienstleistungen</strong><br/>Wir möchten, dass Nutzer online und offline sicher sind. Deshalb dürfen keine Produkte oder Dienstleistungen beworben werden, die Schäden oder Verletzungen verursachen.<br/>Beispiele für gefährliche Inhalte: chemische oder pflanzliche Drogen; psychoaktive Substanzen; Zubehör für den Konsum von Drogen; Waffen, Munition, Sprengstoff und Feuerwerkskörper; Anleitungen zur Herstellung von Sprengkörpern oder anderen gefährlichen Produkten; Tabakprodukte</p><p><strong>Unlauteres Verhalten ermöglichen</strong><br/>Ehrlichkeit und Fairness sind uns sehr wichtig. Deshalb ist keine Werbung für Produkte oder Dienstleistungen gestattet, die unzulässiges Verhalten ermöglichen.<br/>Beispiele für Produkte oder Dienstleistungen, durch die unlauteres Verhalten ermöglicht wird: Hackersoftware oder -anleitungen; Dienste zum künstlichen Steigern von Anzeigen- oder Websitezugriffen; gefälschte Dokumente; Mithilfe bei wissenschaftlichem Betrug</p><p><strong>Unangemessene Inhalte</strong><br/>Diversität und Respekt gegenüber anderen sind uns sehr wichtig. Wir möchten nicht, dass Nutzer beleidigt oder verärgert werden, und dulden daher keine Anzeigen oder Ziele mit schockierenden Inhalten oder Inhalten, in denen für Hass, Intoleranz, Diskriminierung oder Gewalt geworben wird.</p><p>Beispiele für unangemessene oder anstößige Inhalte: Mobbing oder Einschüchterung von Einzelpersonen oder Gruppen; Diskriminierung aufgrund der Herkunft; Produkte und Materialien in Zusammenhang mit Hassgruppierungen; Bilder von Tatorten oder Unfällen; Tierquälerei; Mord; Selbstverletzung; Nötigung; Erpressung; Verkauf von oder Handel mit gefährdeten Tierarten; Anzeigen mit anstößigen Formulierungen</p><h4>Unzulässige Praktiken:</h4><p><strong>Missbrauch des Werbenetzwerks</strong><br/>Wir möchten, dass die Anzeigen im Google-Werbenetzwerk nützlich, vielfältig, relevant und sicher für die Nutzer sind. Anzeigen, Inhalte oder Landingpages, mit denen versucht wird, unsere Verfahren zur Anzeigenüberprüfung zu überlisten oder zu umgehen, sind unzulässig.<br/>Beispiele für den Missbrauch des Werbenetzwerks: Inhalte bewerben, die Malware enthalten; Cloaking oder andere Methoden, um das tatsächliche Ziel zu verschleiern, zu dem Nutzer geleitet werden; Zielseiten ausschließlich oder hauptsächlich zum Zweck der Anzeigenschaltung bewerben; Brücken- oder Gateway-Seiten bewerben, die ausschließlich dazu dienen, Nutzer weiterzuleiten; Werbung mit dem ausschließlichen oder hauptsächlichen Zweck, von Nutzern öffentlich in sozialen Netzwerken empfohlen zu werden; Einstellungen manipulieren, um unsere Systeme zur Richtlinienüberprüfung zu unterlaufen</p><p><strong>Datenerfassung und -nutzung</strong><br/>Die Nutzer sollen darauf vertrauen können, dass Nutzerdaten geschützt und mit der gebotenen Sorgfalt behandelt werden. Daher dürfen unsere Werbepartner diese Informationen nicht missbrauchen und zu unklaren Zwecken oder ohne angemessene Offenlegung oder Sicherheitsmaßnahmen erfassen.</p><p>Für personalisierte Anzeigen einschließlich Remarketing und benutzerdefinierten Zielgruppen gelten zusätzliche Richtlinien. Wenn Sie Ausrichtungsfunktionen für personalisierte Werbung verwenden, lesen Sie unbedingt die Richtlinien zur Datenerfassung und -nutzung in personalisierten Anzeigen.</p><p>Beispiele für Nutzerdaten, mit denen sorgsam umgegangen werden muss: vollständiger Name; E-Mail-Adresse; Postanschrift; Telefonnummer; Personalausweis- oder Reisepassnummer; Rentenversicherungs-, Sozialversicherungs-, Steuer-, Krankenversicherungs- oder Führerscheinnummer; die genannten Daten in Verbindung mit dem Geburtsdatum oder mit dem Mädchennamen der Mutter; finanzielle Situation; politische Neigung; sexuelle Orientierung; ethnische Herkunft; Religion</p><p>Beispiele für unverantwortliche Datenerfassung und -nutzung: Erfassen von Kreditkartendaten über einen unsicheren Server; Werbung, in der behauptet wird, Kenntnis über die sexuelle Orientierung oder finanzielle Situation eines Nutzers zu haben; Verstöße gegen unsere Richtlinien zur interessenbezogenen Werbung und zu Remarketing</p><p><strong>Falsche Darstellungen</strong><br/>Wir möchten, dass die Anzeigen auf unserer Plattform für Nutzer vertrauenswürdig sind. Daher erwarten wir, dass sie offen und ehrlich formuliert sind und den Nutzern Informationen liefern, die ihnen fundierte Entscheidungen ermöglichen. Anzeigen, Zielwebsites und Ziel-Apps, mit denen Nutzer getäuscht werden, indem relevante Produktinformationen ausgelassen oder irreführende Informationen zu Produkten, Dienstleistungen oder Unternehmen angeboten werden, sind nicht erlaubt.</p><p>Beispiele für falsche Darstellungen: Verschweigen oder Verschleiern von Zahlungsangaben, etwa Angaben dazu, wie, was und wann abgerechnet wird; Verschweigen oder Verschleiern von Kosten im Zusammenhang mit Finanzdienstleistungen, etwa Zinssätze, Gebühren oder Strafgebühren; Nichtangabe von Steuer- oder Lizenznummern, von Kontaktdaten oder der Wohnadresse, falls relevant; Unterbreitung von Angeboten, die in Wirklichkeit nicht verfügbar sind; irreführende oder unrealistische Angaben zur möglichen Gewichtsabnahme oder zum möglichen finanziellen Gewinn; Spendensammlung unter Vorspiegelung falscher Tatsachen; Phishing oder Auftreten in betrügerischer Absicht unter dem Namen eines angesehenen Unternehmens, um Nutzer zur Preisgabe wichtiger personenbezogener oder finanzieller Daten zu veranlassen</p><h4>Eingeschränkt zulässige Inhalte:</h4><p>Die nachstehenden Richtlinien beziehen sich auf Inhalte, die in rechtlicher oder kultureller Hinsicht sensibel sein können. Onlinewerbung kann eine wirkungsvolle Methode sein, Kunden zu erreichen. Es gibt jedoch sensible Bereiche, in denen wir verhindern möchten, dass unangemessene Anzeigen geschaltet werden.</p><p>Für Werbung mit den folgenden Inhalten gelten gewisse Einschränkungen. Diese Werbung darf nicht für alle Nutzer an allen Standorten geschaltet werden. Außerdem müssen Werbetreibende unter Umständen zusätzliche Anforderungen erfüllen, damit ihre Anzeigen geschaltet werden. Diese eingeschränkt zulässigen Inhalte werden nicht von allen Anzeigenprodukten, Anzeigenfunktionen oder Werbenetzwerken unterstützt. Ausführliche Informationen finden Sie in der Richtlinienübersicht.</p><p><strong>Inhalte nur für Erwachsene</strong><br/>Die Anzeigen müssen den Nutzerpräferenzen und rechtlichen Bestimmungen entsprechen. Daher sind bestimmte Arten von Inhalten nur für Erwachsene in Anzeigen und auf Zielseiten nicht zulässig. Einige Arten nicht jugendfreier Anzeigen und Zielseiten sind gestattet, sofern sie den unten aufgeführten Richtlinien entsprechen und nicht auf Minderjährige ausgerichtet sind. Sie werden jedoch nur in wenigen Szenarien und auf Grundlage der Suchanfragen und des Alters des Nutzers sowie der lokalen Gesetze ausgeliefert.</p><p>Weitere Informationen dazu, was bei Richtlinienverstößen geschieht, finden Sie hier.</p><p>Beispiele für eingeschränkt zulässige Inhalte nur für Erwachsene: Strip Clubs; Erotikkinos; Sexspielzeug; Erotikmagazine; Produkte zur Steigerung der sexuellen Leistungsfähigkeit; Partnervermittlungsseiten; Models in aufreizenden Posen</p><p><strong>Alkohol</strong><br/>Wir halten die lokalen Gesetze sowie Industriestandards hinsichtlich alkoholischer Getränke ein. Bestimmte Arten von Werbung mit Bezug zu Alkohol sind daher nicht zulässig. Dies gilt sowohl für alkoholische als auch für alkoholähnliche Getränke. Einige Arten von Anzeigen für alkoholische Getränke sind gestattet, sofern sie den unten aufgeführten Richtlinien entsprechen, nicht auf Minderjährige abzielen und nur auf Länder ausgerichtet sind, in denen Werbung für Alkohol ausdrücklich zulässig ist.</p><p>Beispiele für eingeschränkt zulässige alkoholische Getränke: Bier; Wein; Sake; Spirituosen oder hochprozentige alkoholische Getränke; Champagner; Likörwein; alkoholfreies Bier; alkoholfreier Wein und alkoholfreie Spirituosen</p><p><strong>Urheberrechte</strong><br/>Wir halten die Urheberrechtsgesetze der jeweiligen Länder ein und schützen die Rechte der Urheberrechtsinhaber. Daher gestatten wir keine Anzeigen, für die keine Berechtigung zur Verwendung urheberrechtlich geschützter Inhalte vorliegt. Wenn Sie berechtigt sind, solche Inhalte einzusetzen, beantragen Sie eine Zertifizierung für die Verwendung in Anzeigen. Sollten Sie auf nicht autorisierte Inhalte stoßen, reichen Sie eine Urheberrechtsbeschwerde ein.</p><p><strong>Glücksspiele und andere Spiele</strong><br/>Wir unterstützen verantwortungsbewusste Werbung für Glücksspiele und halten die lokalen Gesetze sowie Branchenstandards hinsichtlich Glücksspielen ein. Bestimmte Arten von Werbung mit Bezug zu Glücksspielen sind daher nicht zulässig. Glücksspielbezogene Anzeigen sind gestattet, sofern sie den unten aufgeführten Richtlinien entsprechen und der Werbetreibende ordnungsgemäß für Google Ads zertifiziert ist. Glücksspielanzeigen müssen auf die freigegebenen Länder ausgerichtet sein, dürfen nicht auf Minderjährige abzielen und müssen eine Zielseite aufweisen, auf der Informationen zum verantwortungsvollen Umgang mit Glücksspielen bereitgestellt werden. Sie müssen sich selbst über die Vorschriften in den Ländern informieren, auf die Sie Ihre Anzeigen ausrichten möchten.</p><p>Beispiele für eingeschränkt zulässige glücksspielbezogene Inhalte: physische Spielkasinos; Websites, auf denen Nutzer Wetten für Poker, Bingo, Roulette oder Sportveranstaltungen abschließen können; staatliche oder private Lotterien; Websites mit prognostizierten Quoten für Sportwetten; Websites, auf denen Gutscheincodes oder Werbeangebote für Glücksspielwebsites angeboten werden; Onlineinformationsmaterial für Kasinospiele; Websites, auf denen Pokerspiele \"nur zur Unterhaltung\" angeboten werden; Websites für Nicht-Kasinospiele mit Geldeinsatz</p><p><strong>Gesundheit und Medizin</strong><br/>Es ist uns wichtig, dass die Bestimmungen hinsichtlich Werbung in den Bereichen Gesundheit und Medizin eingehalten werden. Daher müssen Anzeigen und Zielseiten den entsprechenden Gesetzen und Industriestandards entsprechen. Für einige gesundheitsbezogene Inhalte darf keine Werbung geschaltet werden. Andere Inhalte dieses Typs dürfen wiederum nur beworben werden, wenn der Werbetreibende über eine Google-Zertifizierung verfügt und die Anzeigen nur auf Länder ausrichtet, in denen sie zulässig sind. Sie müssen sich selbst über die Vorschriften in den Ländern informieren, auf die Sie Ihre Anzeigen ausrichten möchten.</p><p><strong>Politische Inhalte</strong><br/>Alle Anzeigen und Zielseiten zu politischen Themen oder zu Themen die gesellschaftlich relevant sind können aktuell nicht geschaltet werden und werden daher abgelehnt.</p><p>Beispiele für politische Inhalte: Werbung für politische Parteien oder Kandidaten; Vertretung politischer Interessen</p><p><strong>Finanzdienstleistungen</strong><br/>Wir möchten, dass den Nutzern geeignete Informationen bereitstehen, um fundierte Finanzentscheidungen zu treffen. Durch unsere Richtlinien soll sichergestellt werden, dass Verbraucher die erforderlichen Informationen erhalten, um die mit Finanzprodukten und -dienstleistungen verbundenen Kosten richtig einschätzen zu können. Außerdem möchten wir die Nutzer vor schädigenden und betrügerischen Praktiken schützen. Im Rahmen dieser Richtlinie sind unter Finanzprodukten und -dienstleistungen Produkte und Leistungen in Zusammenhang mit der Verwaltung oder Anlage von Geld und Kryptowährungen zu verstehen, einschließlich persönlicher Beratung.</p><p>Wenn Sie solche Produkte und Dienstleistungen bewerben, müssen Sie die Rechtsvorschriften der Regionen oder Länder befolgen, auf die Ihre Anzeigen ausgerichtet sind. Beispielsweise muss eine Anzeige die nach dem jeweiligen Recht erforderlichen Angaben enthalten. Weitere Informationen finden Sie in unserer Liste der länderspezifischen rechtlichen Erfordernisse, für die kein Anspruch auf Vollständigkeit erhoben wird. Google erwartet jedoch von den Werbetreibenden, dass sie sich selbst informieren, welche Vorschriften in den Ländern gelten, auf die ihre Anzeigen ausgerichtet sind.</p><p><strong>Marken</strong><br/>Anhand mehrerer Faktoren wird bestimmt, inwiefern Marken in Anzeigen verwendet werden dürfen. Diese Richtlinien gelten neben den in unserem Ressourcencenter für Richtlinien beschriebenen Faktoren nur dann, wenn ein Markeninhaber eine gültige Beschwerde bei Google eingereicht hat.<br/>Rechtliche Erfordernisse<br/>Sie sind immer dafür verantwortlich, dass Sie an allen Standorten, in denen Ihre Anzeigen bereitgestellt werden, nicht nur die Werberichtlinien von Google sondern auch die jeweils geltenden Gesetze und Vorschriften einhalten.</p><h4>Andere eingeschränkt zulässige Unternehmen</h4><p>Wir schließen bestimmte Arten von Unternehmen von der Werbung bei uns aus, um zu verhindern, dass Nutzer ausgebeutet werden, selbst wenn bestimmte Einzelfirmen unsere sonstigen Richtlinien offensichtlich einhalten. Auf Grundlage unserer laufenden Überprüfungen und des Feedbacks von Nutzern, Aufsichtsbehörden und Verbraucherschutzorganisationen ermitteln wir gelegentlich Produkte oder Dienstleistungen, bei denen ein hohes Missbrauchsrisiko besteht. Wenn bestimmte Arten von Unternehmen unserer Ansicht nach ein unzumutbares Risiko für die Sicherheit der Nutzer und die Nutzererfahrung darstellen, schränken oder stellen wir die Auslieferung entsprechender Anzeigen unter Umständen ein.<br/><br/><strong>Eingeschränkte Anzeigenformate und &#8209;funktionen</strong><br/>Welche erweiterten Anzeigenformate und &#8209;funktionen in Google Ads verwendet werden dürfen, hängt von mehreren Faktoren ab. Bestimmte Anzeigenformate und &#8209;funktionen sind nur für Werbetreibende verfügbar, die unsere spezifischen Anforderungen erfüllen oder dafür zertifiziert sind.</p><p><strong>Anforderungen an Inhalte speziell für Kinder</strong><br/>Werbetreibende dürfen bei Inhalten speziell für Kinder keine personalisierten Werbeanzeigen schalten. Weitere Informationen zu Kategorien von Werbung speziell für Kinder, für die Beschränkungen gelten.</p><h4>Redaktionelle und technische Anforderungen</h4><p>Die Anzeigen auf Google sollen die Nutzer ansprechen und gleichzeitig eine einfache und problemlose Interaktion ermöglichen. Deshalb haben wir redaktionelle Anforderungen für eine ansprechende Gestaltung von Anzeigen festgelegt. Außerdem sind technische Anforderungen zu erfüllen, damit Nutzer und Werbetreibende die zahlreichen von uns angebotenen Anzeigenformate optimal nutzen können.</p><p><strong>Redaktionelle Anforderungen</strong><br/>Im Interesse einer ausgezeichneten Nutzererfahrung verlangt Google, dass alle Anzeigen, Erweiterungen und Zielseiten hohen fachlichen und redaktionellen Standards genügen. Wir gestatten nur Anzeigen, die unmissverständlich und professionell gestaltet sind und Nutzer zu relevanten, nützlichen Inhalten weiterleiten, mit denen sie leicht interagieren können.<br/>Beispiele für Werbung, die diese redaktionellen und professionellen Anforderungen nicht erfüllt:</p><p>Zu allgemein gehaltene Anzeigen mit vagen Formulierungen wie \"Hier Produkte kaufen\"<br/>Effekthascherische Verwendung von Wörtern, Zahlen, Buchstaben, Satzzeichen oder Symbolen, etwa \"KOSTENLOS\", \"k-o-s-t-e-n-l-o-s\" oder \"kost€nlos!!\"<br/><br/><strong>Anforderungen an Ziele</strong><br/>Wir möchten eine positive Nutzererfahrung bieten, wenn auf eine Anzeige geklickt wird. Deshalb müssen die Ziele für die Nutzer relevant sein, funktionieren und eine einfache Navigation bieten.<br/>Beispiele für Werbung, die die Anforderungen an Ziele nicht erfüllt:</p><p>Eine angezeigte URL, die nicht genau der URL der Zielseite entspricht, wenn beispielsweise <a href=\"http://google.com\" target=\"_blank\">google.com</a> angezeigt wird und die Nutzer zu <a href=\"http://gmail.com\" target=\"_blank\">gmail.com</a> weitergeleitet werden<br/>Noch nicht fertiggestellte Websites bzw. Apps, geparkte Domains oder Websites, die nicht funktionieren<br/>Websites, die in gängigen Browsern nicht darstellbar sind<br/>Websites, bei denen die Schaltfläche \"Zurück\" des Browsers deaktiviert ist<br/> Technische Anforderungen<br/>Werbetreibende müssen unsere technischen Anforderungen erfüllen, damit wir die Verständlichkeit und Funktionalität der Anzeigen gewährleisten können.</p><p><strong>Anforderungen an Anzeigenformate</strong><br/>Wir gestatten nur Werbung, bei der für jede Anzeige die jeweils geltenden Anforderungen erfüllt werden. So stellen wir sicher, dass Sie eine ausgezeichnete Nutzererfahrung bieten und ansprechende, professionell gestaltete Anzeigen schalten. Informieren Sie sich daher über die Anforderungen für alle von Ihnen verwendeten Anzeigenformate.</p><p>Hinweis: Nicht jugendfreie Anzeigen sind für Bild-, Video- und andere Nicht-Text-Anzeigenformate unzulässig. Weitere Informationen finden Sie in unserer Richtlinie Inhalte nur für Erwachsene.</p><p>Beispiele für Anforderungen an Anzeigenformate: maximale Zeichenanzahl für den Anzeigentitel oder Anzeigentext, Anforderungen hinsichtlich der Bildgröße, maximal zulässige Dateigröße und Videolänge, Seitenverhältnisse</p><p>Wenn Sie Fragen zu den Richtlinien haben, wenden Sie sich bitte an unser Support-Team.</p></div>"

}, action) => {
    return state
}

export default lang_de_reducer;
