const lang_en_reducer = (state = {
  "currency": {
    "symbol": "€",
    "label": "EUR"
  },
  "common": {
    "from": "from",
    "to": "to",
    "net": "net",
    "total": "total",
    "tax": "vat"
  },
  "navbar": {
    "language": "Language",
    "lang": {
      "english": "English",
      "german": "German"
    },
    "user": {
      "account": "My data",
      "invoices": "My invoices",
      "paymentmethods": "My paymentmethods",
      "notifications": "My notifications",
      "logout": "Logout",
      "login": "Login"
    },
    "cart": {
      "cart": "show cart",
      "checkout": "checkout",
      "addproducts": "Add products",
      "empty": "Your cart is empty",
      "items": "product(s)",
      "incart": "in your cart"
    },
    "notifications": {
      "new": "new",
      "notifications": "notifications",
      "showall": "Show all notifications",
      "campaign": {
        "repeat": {
          "title": "Your campaign is very popular",
          "desc": "Run the campaign again with one click or extend the period of the current campaign."
        },
        "reachedgoal": {
          "title": "Campaign goal achieved",
          "desc": "Your campaign achieved its goal."
        },
        "declined": {
          "title": "Campaign declined",
          "desc": "Unfortunately your campaign violates the advertising guidelines of the selected networks. Your campaign has been canceled. You will receive a refund."
        },
        "tocomplete": {
          "title": "Complete your campaign",
          "desc": "Please fill in the missing information about your campaign in order to start it."
        },
        "monthlyreport": {
          "title": "Monthly report",
          "desc": "Your monthly total evaluation of all campaigns is now available."
        }
      }
    }
  },
  "sidebar_left": {
    "dashboard": "Dashboard",
    "help": "Help",
    "ad_channel_finder": "Ad Channel Finder",
    "advice": "Advice",
    "chat": "Chat",
    "email": "Email",
    "phone": "Phone",
    "whats_new": "What's New",
    "deals": "Deals",
    "legal": {
      "legal": "Legal",
      "agb": "Terms of service",
      "privacy": "Privacy policy",
      "imprint": "Imprint"
    }
  },
  "dashboard": {
    "dashboard": "Dashboard",
    "loading": "Loading",
    "tabs": {
      "product_overview": "Product Overview",
      "my_campaigns": "My Campaigns",
      "my_products": "My Products",
      "my_stats": "My Statistics"
    },
    "products": {
      "moreinfo": "Learn more about the advertising channel",
      "banner": {
        "gabudget": "get 120 € advertising budget for free",
        "new": "New",
        "topseller": "Topseller"
      }
    },
    "stats": {
      "title": {
        "numbercampaigns": "Number of campaigns",
        "allcampaigns": "All campaigns",
        "latestcampaign": "Last published campaign"
      },
      "campaigns": {
        "all": "Total",
        "active": "Active",
        "paused": "Paused",
        "canceled": "Canceled",
        "closed": "Completed",
        "notstarted": "Not started"
      },
      "latest": {
        "title": "Progress",
        "desc": "Current status of your last campaign.",
        "clicks": "Clicks",
        "views": "Views",
        "daily": {
          "title": "Daily stats"
        }
      },
      "networks": {
        "title": "Distribution by network"
      },
      "gender": {
        "title": "Distribution by gender"
      },
      "age": {
        "title": "Distribution by age"
      }
    }
  },
  "product_filter": {
    "results_found": "Products",
    "all_products": "All Ad Products",
    "booked_products": "Only my booked campaigns",
    "active_products": "Only my active campaigns",
    "filters": "Filter",
    "price_range": "Price range",
    "net": "net",
    "all": "all",
    "ad_channel": "Ad channels/Products",
    "social_network": "Social Networks",
    "display_network": "Display Networks",
    "market_places": "Marketplace & Job Boards",
    "searchengines": "Search Engines",
    "directories": "Directories",
    "seo": "SEO",
    "tools": "Tools",
    "coupons": "Coupons",
    "clear_filters": "Reset all filters"
  },
  "search": {
    "products": {
      "placeholder": "Search products"
    }
  },
  "details": "Details",
  "coupon_flags": {
    "promo": "Coupon Rebate"
  },
  "need_help": "Need help?",
  "hide_help": "Hide help...",
  "help_text": {
    "1": "<h5>What's the difference between the two types?</h5><p>In a <b>click-optimized campaign</b>, the specified budget is used in such a way that as many people as possible <b>click</b> on the advertisement and follow the link provided (e.g. to your website or online shop). It can bring potential customers to your website or online store.</p><p>in a <b>range-optimized campaign</b>, the budget is used so that as many people as possible <b>see</b> the ad. It can generate maximum attention among your target group and increase your brand awareness and reach. We also recommend this to you if it's for the promotion of local topics (e.g. new openings, special promotions or regional events).</p>"
  },
  "campaign_type": {
    "click": "Click Optimized",
    "impressions": "View Optimized"
  },
  "discovery": "Discover our digital services",
  "ad_google_searchads": {
    "btn_action": "Book now",
    "price_note": "from 59 € net *",
    "price_subnote": "(*) minimum 14 days"
  },
  "ad_google_displayads":{
    "btn_action":"Konfigurieren & bestellen",
    "price_subnote":"(*) z.B. für mind. 14 Tage"
  },
  "ad_facebook": {
    "btn_action": "Book now",
    "price_note": "from 39 € net *",
    "price_subnote": "(*) incl. 5000 views"
  },
  "ad_screenpaper":{
    "btn_action":"Konfigurieren & bestellen",
    "price_subnote":"(*) z.B. bei Flyer DIN A6 und Laufzeit 1 Jahr"
  },
  "ad_linkedin":{
    "btn_action":"Konfigurieren & bestellen",
    "price_subnote":"(*) z.B. bei 5.000 Einblendungen"
  },
  "ad_twitter":{
    "btn_action":"Konfigurieren & bestellen",
    "price_note":"ab 39 € netto *",
    "price_subnote":"(*) z.B. bei 5.000 Einblendungen"
  },
  "ad_ebay":{
    "btn_action":"Konfigurieren & bestellen",
    "price_subnote":"(*) z.B. bei 5.000 Einblendungen"
  },
  "ad_pinterest":{
    "btn_action":"Konfigurieren & bestellen",
    "price_subnote":"(*) z.B. bei 5.000 Einblendungen"
  },
  "ad_indeed":{
    "btn_action":"Konfigurieren & bestellen",
    "price_subnote":"(*) z.B. bei 5.000 Einblendungen"
  },
  "ad_snapchat":{
    "btn_action":"Konfigurieren & bestellen",
    "price_subnote":"(*) z.B. bei 5.000 Einblendungen"
  },
  "ad_seo":{
    "btn_action":"Konfigurieren & bestellen",
    "price_subnote":"(*) z.B. bei 5.000 Einblendungen"
  },
  "ad_listing":{
    "btn_action":"Konfigurieren & bestellen",
    "price_subnote":"(*) z.B. bei 5.000 Einblendungen"
  },
  "ad_gutschein":{
    "btn_action":"Konfigurieren & bestellen",
    "price_subnote":"(*) z.B. bei 5.000 Einblendungen"
  },
  "config": {
    "configure_your_ad": "Add product",
    "cart": "Shopping cart",
    "summary_and_payment": "Checkout",
    "currentstep": "Current step"
  },
  "configurator": {
    "btns": {
      "goto": {
        "audience": "Go to campaign budget & target group",
        "creative": "Go to create ad",
        "cart": "Add to cart"
      },
      "googlesearch": {
        "addkeyword": "Add keyword"
      }
    },
    "tabs": {
      "goal": "Campaign goal & duration",
      "audience": "Campaign budget & target group",
      "creative": "Create ad"
    },
    "tab_panels": {
      "audience": {
        "men": "Men",
        "women": "Women",
        "all": "All",
        "mobile": "Mobile",
        "desktop": "Desktop"
      }
    },
    "toggles": {
      "help": "Need help?",
      "targetgroup": "Limit target group (optional)"
    },
    "headlines": {
      "companyinfo": "Information about your company",
      "goal": "Set campaign goal",
      "campaigntype": "Set campaign type",
      "definegoal": "What would you like to achieve through this campaign?",
      "campaignruntime": "Campaign runtime",
      "dailybudget": "Daily budget",
      "targetarea": "Target area",
      "googlesearch": {
        "setkeywords": "Set keywords",
        "suggestions": "Keyword suggestions"
      },
      "target": {
        "age": "Age group",
        "gender": "Gender",
        "devices": "Devices"
      }
    },
    "notes": {
      "goal": "Choose the right campaign for your business. We'll optimize your ad based on your business goal within your budget.",
      "campaigntype": "Choose a one-time campaign with a fixed start and end date, a continuous campaign without a fixed end date, or a recurring campaign that repeats itself automatically at certain intervals.",
      "dailybudget": "Set a daily budget for your campaign",
      "targetarea": "Set a target area for your campaign",
      "googlesearch": {
        "setkeywords": "Please enter suitable search terms for your campaign below or simply select a suitable search term from the suggestions.",
        "rankingdifficulty": "Ranking difficulty",
        "ranking": {
          "easy": "easy",
          "medium": "medium",
          "hard": "hard"
        }
      }
    },
    "help": {
      "googlesearch": {
        "website": "With the help of your website address, we can recommend suitable search terms that will maximize the success of your campaign.",
        "industry": "By specifying your industry, we can recommend suitable search terms that will maximize the success of your campaign."
      },
      "intervalcampaign": {
        "value": "Please set an interval for repeating the campaign.",
        "unit": "Please select a unit for your specified interval."
      },
      "onetimecampaign": {
        "enddate": "The end date is automatically calculated based on the duration."
      },
      "continuouscampaign": {
        "enddate": "There is no set end date for an ongoing campaign. However, you have the option to cancel your campaign at the end of each month."
      },
      "recurringcampaign": {
        "enddate": "The end date is automatically calculated based on the duration."
      },
      "target": {
        "age": "Limit your campaign to a specific age group.",
        "gender": "Limit your campaign to a specific gender.",
        "devices": "Limit your campaign to mobile or desktop devices."
      }
    },
    "labels": {
      "googlesearch": {
        "website": "Your Website",
        "industry": "Your industry",
        "table": {
          "selectedkeywords": "Your selected keywords",
          "searchvolume": "search volume",
          "cpc": "cost per click (CPC)",
          "delete": "Löschen"
        }
      },
      "startdate": "Startdatum",
      "enddate": "Enddatum",
      "interval": "Repetition interval",
      "estimatedclicks": "Estimated clicks",
      "estimatedviews": "Estimated views",
      "targetarea": "Country, Location or postcode",
      "targetradius": "Radius",
      "km": "km",
      "from": "von",
      "to": "bis"
    },
    "placeholders": {
      "googlesearch": {
        "website": "e.g. www.flyeralarm.com",
        "industry": "Please select",
        "keywords": "Your keyword"
      },
      "intervalcampaign": {
        "value": "e.g. 5",
        "days": "Day(s)",
        "weeks": "Week(s)",
        "months": "Month(s)"
      },
      "targetarea": "e.g. Berlin",
      "targetradius": "e.g. 30"
    },
    "goals": {
      "reach": "I want to increase brand awarness or reach.",
      "clicks": "I want to increase traffic to a website or sales."
    },
    "campaigntype": {
      "onetime": "one-time campaign",
      "continuous": "continuous campaign",
      "recurring": "recurring campaign",
      "desc": {
        "onetime": "I would like to run a one time campaign with a duration of up to 30 days.",
        "continuous": "I want to run a campaign without a fixed end date. Minimum term 30 days, can be canceled monthly.",
        "recurring": "I want to run a campaign that repeats itself automatically at a specific interval."
      }
    }
  },


  "campaign_summary": {
    "labels": {
      "campaign_summary": "Configuration of your campaign",
      "campaign_goal": "Campaign goal",
      "campaign_type": "Campaign type",
      "target_audience": "Campaign budget & target group",
      "age_group": "Age group:",
      "gender": "Gender:",
      "device": "Device:",
      "center": "Center:",
      "radius": "Radius:",
      "settings": "Campaign duration & budget",
      "start_date": "Start date:",
      "run_time": "Runtime:",
      "budget": "Budget:",
      "preview_ad": "Preview your ad"
    },
    "values": {
      "click": "Click Optimized",
      "impressions": "Reach Optimized",
      "onetime": "onetime campaign",
      "continuous": "continuous campaign",
      "interval": "recurring campaign",
      "gender": {
        "all": "All",
        "male": "Men",
        "female": "Women",
        "men": "Men",
        "women": "Women"
      }
    }
  }


}, action) => {
  return state
}

export default lang_en_reducer;