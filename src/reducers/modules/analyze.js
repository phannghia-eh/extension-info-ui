const initState = {
  result: {
    // "name": "LastPass: Free Password Manager",
    // "permissions": {
    //   "tabs": {
    //     "description": "Gives your extension access to privileged fields of the Tabobjects used by several APIs including chrome.tabs and chrome.windows. In many circumstances your extension will not need to declare the \"tabs\" permission to make use of these APIs.",
    //     "isWarning": true,
    //     "warning": "Read your browsing history"
    //   },
    //   "idle": {
    //     "description": "Gives your extension access to the chrome.idle API.",
    //     "isWarning": false,
    //     "warning": "None"
    //   },
    //   "notifications": {
    //     "description": "Gives your extension access to the chrome.notificationsAPI.",
    //     "isWarning": true,
    //     "warning": "Display notifications"
    //   },
    //   "contextMenus": {
    //     "description": "Gives your extension access to the chrome.contextMenusAPI.",
    //     "isWarning": false,
    //     "warning": "None"
    //   },
    //   "unlimitedStorage": {
    //     "description": "Provides an unlimited quota for storing HTML5 client-side data, such as databases and local storage files. Without this permission, the extension or app is limited to 5 MB of local storage.\nNote: This permission applies only to Web SQL Database and application cache (see issue 58985). Also, it doesn't currently work with wildcard subdomains such as http://*.example.com.",
    //     "isWarning": false,
    //     "warning": "None"
    //   },
    //   "webRequest": {
    //     "description": "Gives your extension access to the chrome.webRequestAPI.",
    //     "isWarning": false,
    //     "warning": "None"
    //   },
    //   "webRequestBlocking": {
    //     "description": "Required if the extension uses the chrome.webRequest API in a blocking fashion.",
    //     "isWarning": false,
    //     "warning": "None"
    //   },
    //   "http://*/*": {
    //     "description": "Grants the extension access to all hosts. ",
    //     "isWarning": true,
    //     "warning": "Read and change all your data on the websites you visit"
    //   },
    //   "https://*/*": {
    //     "description": "Grants the extension access to all hosts. ",
    //     "isWarning": true,
    //     "warning": "Read and change all your data on the websites you visit"
    //   }
    // },
    // "csp": "default-src 'self' https://lastpass.com https://lastpass.eu https://rodan.lastpass.com https://dev.lastpass.com https://preprod.lastpass.com https://www.youtube.com https://lpdev.lastpass.com ; img-src 'self' data: https://lastpass.com https://lastpass.eu https://*.google-analytics.com https://rodan.lastpass.com https://dev.lastpass.com https://lpdev.lastpass.com https://preprod.lastpass.com https://*.doubleclick.net; connect-src https://lastpass.com https://lastpass.eu https://lpdev.lastpass.com https://rodan.lastpass.com https://dev.lastpass.com https://preprod.lastpass.com wss://*.lastpass.com wss://*.lastpass.eu ws://127.0.0.1:19536 https://pollserver.lastpass.com https://loglogin.lastpass.com; style-src 'self' https://lastpass.com https://lastpass.eu https://rodan.lastpass.com https://dev.lastpass.com https://preprod.lastpass.com https://lpdev.lastpass.com",
    // "content_scrips": [{"js": ["onloadwff.js"], "matches": ["http://*/*", "https://*/*", "file:///*"]}],
    // "api": {
    //   ".append": {
    //     "behavior": "jQuery .append() when combined with user-controlled input could lead to Cross-site Scripting (XSS) ",
    //     "risk": "Medium risk"
    //   },
    //   "chrome.tabs.update": {
    //     "behavior": "When the url property of the updateProperties argument is controlled by an attacker, Cross-site Scripting (XSS) can occur",
    //     "risk": "Medium risk"
    //   },
    //   "chrome.history.search": {
    //     "behavior": "Might steal user's browsing history (i.e., for advertising purpose or extract URLs with sensitive information)",
    //     "risk": "Medium risk"
    //   },
    //   ".html": {
    //     "behavior": "jQuery .html() when combined with user-controlled input could lead to Cross-site Scripting (XSS) ",
    //     "risk": "Medium risk"
    //   },
    //   "chrome.webRequest": {
    //     "behavior": "Might be used to intercept and modify outgoing traffic;\n\nWith webRequest permission: Might Read and Write sensitive data;\n\nWith webRequestBlocking: Might modify traffic",
    //     "risk": "Medium risk"
    //   },
    //   "chrome.runtime": {
    //     "behavior": "Might be used to provide needed hook for executing code when Chrome restart or update extension\nWhen combined with nativeMessaging permission, Native messaging host could be used to execute OS commands",
    //     "risk": "Medium risk"
    //   },
    //   "chrome.browserAction": {
    //     "behavior": "Might monitor browserAction popup, insert data into popup, modify data on popup or popup action",
    //     "risk": "Low risk"
    //   },
    //   "chrome.extension.getViews": {
    //     "behavior": "Might be used to support persistence of the attack",
    //     "risk": "Medium risk"
    //   },
    //   ".innerHTML": {
    //     "behavior": "jQuery .innerHTML when combined with user-controlled input could lead to Cross-site Scripting (XSS) ",
    //     "risk": "High risk"
    //   },
    //   ".insertBefore": {
    //     "behavior": "jQuery .insertBefore() when combined with user-controlled input could lead to Cross-site Scripting (XSS)",
    //     "risk": "Medium risk"
    //   },
    //   "eval": {
    //     "behavior": "When user-controlled input is wrongly passed in to eval, Cross-site Scripting (XSS) can occur",
    //     "risk": "High risk"
    //   },
    //   ".wrap": {
    //     "behavior": "jQuery .wrap() when combined with user-controlled input could lead to Cross-site Scripting (XSS) ",
    //     "risk": "Medium risk"
    //   },
    //   ".prepend": {
    //     "behavior": "jQuery .prepend() when combined with user-controlled input could lead to Cross-site Scripting (XSS)",
    //     "risk": "Medium risk"
    //   },
    //   ".after": {
    //     "behavior": "jQuery .after() when combined with user-controlled input could lead to Cross-site Scripting (XSS) ",
    //     "risk": "Medium risk"
    //   },
    //   "XMLHttpRequest": {
    //     "behavior": "Connect to an external source, might potentially send user's sensitive data to a malicious server. Besides, this API is also used to inject advertisements in some cases. ",
    //     "risk": "Medium risk"
    //   },
    //   "addEventListener(\"keydown": {
    //     "behavior": "Capture all events related to user's keypress, might potentially capture user's sensitive information, e.g. credentials without user acknowledgement.",
    //     "risk": "High risk"
    //   },
    //   "document.getElementById(\"password\").value": {
    //     "behavior": "Potentially steal user's credential",
    //     "risk": "High risk"
    //   },
    //   "chrome.extension.getBackgroundPage": {
    //     "behavior": "Might be used to support persistence of the attack",
    //     "risk": "Medium risk"
    //   },
    //   ".appendTo": {
    //     "behavior": "jQuery .appendTo() when combined with user-controlled input could lead to Cross-site Scripting (XSS) ",
    //     "risk": "Medium risk"
    //   },
    //   ".insertAfter": {
    //     "behavior": "jQuery .insertAfter() when combined with user-controlled input could lead to Cross-site Scripting (XSS) ",
    //     "risk": "Medium risk"
    //   },
    //   "chrome.idle": {
    //     "behavior": "Might be used to determine the time for the next attacking attempt based on whether or not the user is using the browser",
    //     "risk": "Low risk"
    //   },
    //   "document.getElementById(\"username\").value": {
    //     "behavior": "Potentially steal user's credential",
    //     "risk": "High risk"
    //   },
    //   ".attr('href": {
    //     "behavior": "jQuery .attr(\"href\") when combined with user-controlled input could lead to Cross-site Scripting (XSS) ",
    //     "risk": "Medium risk"
    //   }
    // }
  },
  analyzeItem: {
    isShow: false
  },
  state: 0 // -1: loading; 0: render; 1: permission; 2: scp; 3: conent_script; 4: api
}

const analyze = (state = initState, action) => {
  switch (action.type) {
    case 'SEND_ANALYZE_REQUEST':
      return {
        ...state,
        state: -1
      }
    case 'UPDATE_ANALYZE_RESULT':
      return {
        ...state,
        result: action.payload.result,
        state: 1,
        analyzeItem: {
          ...state.analyzeItem,
          isShow: true
        }
      }
    case 'CHANGE_VIEW_STATE':
      return {
        ...state,
        state: action.payload.state
      }
    default:
      return state
  }
}

export default analyze