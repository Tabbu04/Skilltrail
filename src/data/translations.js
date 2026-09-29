export const translations = {
  en: {
    government:
      "Government of Maharashtra • Dept. of Skills, Employment, Entrepreneurship & Innovation",

    tagline: "Track the journey. Verify the outcome.",

    nav: {
      overview: "Overview",
      trainee: "Trainee Cockpit",
      employer: "Employer Hub",
      districts: "District Explorer",
      fraud: "Fraud Detector",
      roadmap: "Native App",
    },

    home: {
      gov: "Government of Maharashtra · DSEEI · PS 26135",

      titleLine1: "Maharashtra Skilling Outcomes",
      titleLine2: "& Longitudinal ROI",

      description:
        "Continuous 3-to-36 month post-training tracking, triangulating trainee self-reports, simulated EPFO signals, and employer confirmation — with a fraud-aware verification layer.",

      stats: {
        totalTrained: "Total trained",
        certified: "certified",
        retention: "12-month retention",
        verified: "Verified, not self-reported",
        wageMultiplier: "Wage multiplier",
        trust: "Trust index",
        trustSub: "EPFO + employer + peer signals",
      },

      features: {
        passport: {
          title: "Career Passport",
          desc: "One QR-based ID unifying training + employment across schemes.",
        },
        fraud: {
          title: "Fraud Detector",
          desc: "Flags reused employer numbers and fabricated placements.",
        },
        ivr: {
          title: "IVR Follow-ups",
          desc: "Voice-call fallback for trainees without reliable smartphone access.",
        },
        ml: {
          title: "Real Outcome ML",
          desc: "Explainable model for why placements fail — not vibes.",
        },
      },

      charts: {
        retentionTitle: "Statewide retention curve (3–36 months)",
        retentionSubtitle: "Cohort persistence vs state benchmark",
        wageTitle: "Wage progression by sector (₹/month)",
        wageSubtitle: "Stipend vs 12-month vs 24-month verified earnings",
        stipend: "Stipend",
        month12: "12M",
        month24: "24M",
      },

      map: {
        title: "Maharashtra district outcome map",
        subtitle: "GIS view — click a district for details",
        open: "Open full explorer",
      },
    },

    footer:
      "SkillTrail · SIH 2026 · Problem Statement 135 · Prototype data is synthetic/demo, clearly marked",

    language: "Language",
    darkMode: "Toggle dark mode",

    trainee: {
      label: "Trainee Cockpit · Mobile-first",
      greeting: "Namaste, Rahul 👋",
      description:
        "This view is optimised for a phone screen — the same page works when installed to your home screen as a PWA.",

      passport: "Career Passport",
      passportId: "ID: T-10231",
      passportDescription:
        "Scan to share verified training + employment history with any employer or scheme.",

      journey: "Your journey",

      enrolled: "Enrolled — Electrician & Solar Hybrid",
      certified: "Certified (Score: 82%)",
      placed: "Placed — Sunrise Electricals",
      threeMonth: "3-month check-in — Verified",
      sixMonth: "6-month check-in — Pending",

      dates: {
        enrolled: "12 Jan 2026",
        certified: "18 Apr 2026",
        placed: "02 May 2026",
        threeMonth: "05 Aug 2026",
        sixMonth: "Due 05 Nov 2026",
      },

      callbackTitle: "Prefer a call instead of the app?",
      callbackDescription:
        "If your number changed or the app isn't convenient, we'll reach you the low-tech way too.",

      ivr: "Request IVR call-back",
      whatsapp: "Confirm via WhatsApp",
    },

    employer: {
      label: "Employer & Verification Hub",
      title: "Sunrise Electricals",
      subtitle:
        "No login, no forms — confirm employment status in one tap. This is what makes SkillTrail's data trustworthy instead of self-reported guesswork.",

      verifiedEmployer: "Verified employer",
      location: "Pune, Maharashtra",

      verificationRequests: "Verification requests",
      confirmed: "Confirmed",
      pending: "Pending",

      verificationWorkflow: "Verification workflow",
      step1: "Employer identity",
      step1Desc: "Employer record associated with the placement.",
      step2: "Employment confirmation",
      step2Desc: "Employer confirms whether the trainee is currently employed.",
      step3: "Outcome update",
      step3Desc: "Confirmed status becomes part of the longitudinal record.",

      confirmYes: "Yes, still employed",
      confirmNo: "No",
      confirmedEmployed: "Confirmed employed",
      markedNotEmployed: "Marked not employed",

      whyTitle: "Why employer verification matters",
      whyDescription:
        "SkillTrail separates reported placement from verified employment. A direct employer confirmation provides an additional evidence signal instead of relying only on trainee self-report.",

      verificationPath: "Reported placement",
      verificationArrow1: "Employer confirmation",
      verificationArrow2: "Evidence cross-check",
      verificationFinal: "Verified outcome",
    },

    districts: {
      label: "Geo-spatial intelligence",
      title: "District Outcome Explorer",
      description:
        "Click any district on the map or table to inspect its longitudinal outcomes.",

      selectPrompt:
        "Select a district on the map to see its full outcome profile.",

      tier: "Tier",
      trained: "Trainees tracked",
      retention6: "6M retention",
      retention12: "12M retention",
      wageMultiplier: "Wage multiplier",
      selfEmployment: "Self-employment",
      trustIndex: "Trust index",

      outcomeIndicators: "Outcome indicators",
      retentionTrajectory: "Retention trajectory",
      retentionChange: "6M → 12M change",

      keySignal: "Key outcome signal",
      highRetention: "High retention",
      moderateRetention: "Moderate retention",
      supportNeeded: "High churn / needs support",

      highRetentionDescription:
        "The district maintains a relatively strong 12-month retention level.",
      moderateRetentionDescription:
        "The district shows a moderate 12-month retention level and can be monitored for follow-up needs.",
      supportNeededDescription:
        "The 12-month retention level indicates a stronger need for follow-up and support.",

      performanceTable: "District-wise performance table",
      sortTrained: "Sort: Total trained",
      sortRetention: "Sort: 12M retention",
      sortWage: "Sort: Wage multiplier",
      sortSelf: "Sort: Self-employment",

      district: "District",
      tierHeader: "Tier",
      trainedHeader: "Trained",
      ret6Header: "6M Ret.",
      ret12Header: "12M Ret.",
      wageHeader: "Wage x",
      selfHeader: "Self-emp %",
    },

    fraud: {
      label: "Transparent placement verification",
      title: "Placement Fraud Detector",
      description:
        "This rule-based engine flags suspicious placements using transparent signals such as repeated employer contacts, missing follow-up activity, and unusually short joining-to-verification intervals.",

      recordsScanned: "Records scanned",
      flaggedHighRisk: "Flagged high-risk",
      detectionMethod: "Detection method",
      deterministic: "Deterministic rules, no black box",

      engineTitle: "Verification engine",
      howTitle: "How SkillTrail checks a placement",
      howDescription:
        "Each placement is evaluated against transparent rules and available verification signals. The interface shows the evidence instead of hiding the reasoning behind a single score.",

      rule1: "Employer contact reuse",
      rule1Desc:
        "Checks whether the same employer contact is repeatedly associated with different trainees.",

      rule2: "Follow-up activity",
      rule2Desc:
        "Checks whether expected post-placement activity or verification signals are present.",

      rule3: "Joining-to-verification interval",
      rule3Desc:
        "Flags unusually short intervals between joining and verification.",

      rule4: "Independent confirmation",
      rule4Desc:
        "Looks for an independent employment confirmation or supporting signal.",

      passed: "Observed",
      flagged: "Flagged",

      lowRisk: "Low risk",
      mediumRisk: "Medium risk",
      highRisk: "High risk",

      verificationSignals: "Verification signals",
      viewChecks: "View verification checks",
      hideChecks: "Hide verification checks",

      noRiskSignals:
        "No high-risk rule signals are present in the supplied demo record.",

      ruleBasedNote:
        "Rule-based routing — transparent and explainable. Demo data only.",
    },

    ivr: {
      label: "Assisted follow-up",
      title: "Request an IVR Callback",
      description:
        "Use a simple phone callback when the app or internet is inconvenient.",

      mobile: "Registered mobile number",
      mobilePlaceholder: "+91 XXXXX XXXXX",

      preferredLanguage: "Preferred callback language",

      reason: "Reason for callback",
      employment: "Employment status update",
      retention: "6-month retention check",
      mobileChange: "Change mobile number",
      other: "Other",

      preferredTime: "Preferred time",
      morning: "Morning",
      afternoon: "Afternoon",
      evening: "Evening",

      request: "Request callback",
      cancel: "Cancel",

      successTitle: "Callback requested",
      successDescription:
        "Your IVR callback request has been recorded for this prototype workflow.",
      reference: "Reference",
      selectedLanguage: "Callback language",
      selectedTime: "Preferred time",

      backToTrainee: "Back to Trainee Cockpit",
      note:
        "Prototype workflow: connect this action to an IVR provider such as Twilio or Exotel when the backend is available.",
    },
  },

  hi: {
    government:
      "महाराष्ट्र शासन • कौशल, रोजगार, उद्यमिता एवं नवाचार विभाग",

    tagline: "यात्रा को ट्रैक करें। परिणाम को सत्यापित करें।",

    nav: {
      overview: "अवलोकन",
      trainee: "प्रशिक्षु कॉकपिट",
      employer: "नियोक्ता हब",
      districts: "जिला एक्सप्लोरर",
      fraud: "धोखाधड़ी डिटेक्टर",
      roadmap: "मोबाइल ऐप",
    },

      home: {
          gov: "महाराष्ट्र शासन · कौशल, रोजगार, उद्यमिता एवं नवाचार विभाग · समस्या विवरण 26135",

          titleLine1: "महाराष्ट्र कौशल विकास परिणाम",
          titleLine2: "और दीर्घकालिक ROI",

          description:
              "प्रशिक्षण के बाद 3 से 36 महीने तक निरंतर ट्रैकिंग, प्रशिक्षु की स्वयं-रिपोर्ट, सिम्युलेटेड EPFO संकेतों और नियोक्ता पुष्टि को मिलाकर रोजगार परिणामों की निगरानी।",

          stats: {
              totalTrained: "कुल प्रशिक्षित",
              certified: "प्रमाणित",
              retention: "12 महीने की रिटेंशन",
              verified: "सत्यापित, केवल स्वयं-रिपोर्ट नहीं",
              wageMultiplier: "वेतन गुणक",
              trust: "विश्वास सूचकांक",
              trustSub: "EPFO + नियोक्ता + सहकर्मी संकेत",
          },

          features: {
              passport: {
                  title: "करियर पासपोर्ट",
                  desc: "एक QR-आधारित आईडी जो विभिन्न योजनाओं में प्रशिक्षण और रोजगार रिकॉर्ड को जोड़ती है।",
              },
              fraud: {
                  title: "धोखाधड़ी डिटेक्टर",
                  desc: "दोहराए गए नियोक्ता नंबर और संदिग्ध प्लेसमेंट को चिन्हित करता है।",
              },
              ivr: {
                  title: "IVR फॉलो-अप",
                  desc: "विश्वसनीय स्मार्टफोन सुविधा न रखने वाले प्रशिक्षुओं के लिए वॉइस-कॉल विकल्प।",
              },
              ml: {
                  title: "परिणाम ML",
                  desc: "प्लेसमेंट विफल होने के कारणों के लिए समझाने योग्य मॉडल।",
              },
          },

          charts: {
              retentionTitle: "राज्यव्यापी रिटेंशन वक्र (3–36 महीने)",
              retentionSubtitle: "कोहोर्ट की निरंतरता बनाम राज्य बेंचमार्क",
              wageTitle: "क्षेत्र के अनुसार वेतन प्रगति (₹/माह)",
              wageSubtitle: "स्टाइपेंड बनाम 12-महीने और 24-महीने की सत्यापित आय",
              stipend: "स्टाइपेंड",
              month12: "12M",
              month24: "24M",
          },

          map: {
              title: "महाराष्ट्र जिला परिणाम मानचित्र",
              subtitle: "GIS दृश्य — विवरण के लिए किसी जिले पर क्लिक करें",
              open: "पूरा एक्सप्लोरर खोलें",
          },
      },

    footer:
      "SkillTrail · SIH 2026 · समस्या विवरण 135 · प्रदर्शित डेटा सिंथेटिक/डेमो है",

    language: "भाषा",
    darkMode: "डार्क मोड बदलें",

    trainee: {
      label: "प्रशिक्षु कॉकपिट · मोबाइल-फर्स्ट",
      greeting: "नमस्ते, राहुल 👋",
      description:
        "यह दृश्य मोबाइल स्क्रीन के लिए अनुकूलित है और PWA के रूप में होम स्क्रीन पर भी काम करता है।",

      passport: "करियर पासपोर्ट",
      passportId: "आईडी: T-10231",
      passportDescription:
        "किसी नियोक्ता या योजना के साथ सत्यापित प्रशिक्षण और रोजगार इतिहास साझा करने के लिए स्कैन करें।",

      journey: "आपकी यात्रा",

      enrolled: "नामांकन — इलेक्ट्रीशियन एवं सोलर हाइब्रिड",
      certified: "प्रमाणित (स्कोर: 82%)",
      placed: "प्लेसमेंट — Sunrise Electricals",
      threeMonth: "3 महीने की जांच — सत्यापित",
      sixMonth: "6 महीने की जांच — लंबित",

      dates: {
        enrolled: "12 जनवरी 2026",
        certified: "18 अप्रैल 2026",
        placed: "02 मई 2026",
        threeMonth: "05 अगस्त 2026",
        sixMonth: "देय 05 नवंबर 2026",
      },

      callbackTitle: "ऐप की जगह कॉल पसंद है?",
      callbackDescription:
        "यदि आपका नंबर बदल गया है या ऐप सुविधाजनक नहीं है, तो हम फोन के माध्यम से भी आप तक पहुंचेंगे।",

      ivr: "IVR कॉलबैक अनुरोध करें",
      whatsapp: "WhatsApp से पुष्टि करें",
    },

    employer: {
      label: "नियोक्ता एवं सत्यापन हब",
      title: "Sunrise Electricals",
      subtitle:
        "लॉगिन नहीं, फॉर्म नहीं — एक टैप में रोजगार स्थिति की पुष्टि करें। इससे SkillTrail का डेटा केवल स्वयं-रिपोर्ट पर निर्भर नहीं रहता।",

      verifiedEmployer: "सत्यापित नियोक्ता",
      location: "पुणे, महाराष्ट्र",

      verificationRequests: "सत्यापन अनुरोध",
      confirmed: "पुष्ट",
      pending: "लंबित",

      verificationWorkflow: "सत्यापन प्रक्रिया",
      step1: "नियोक्ता पहचान",
      step1Desc: "प्लेसमेंट से जुड़े नियोक्ता रिकॉर्ड की जांच।",
      step2: "रोजगार पुष्टि",
      step2Desc: "नियोक्ता पुष्टि करता है कि प्रशिक्षु वर्तमान में कार्यरत है या नहीं।",
      step3: "परिणाम अपडेट",
      step3Desc: "पुष्ट स्थिति दीर्घकालिक रिकॉर्ड का हिस्सा बनती है।",

      confirmYes: "हाँ, अभी भी कार्यरत",
      confirmNo: "नहीं",
      confirmedEmployed: "रोजगार की पुष्टि हुई",
      markedNotEmployed: "रोजगार नहीं है के रूप में चिह्नित",

      whyTitle: "नियोक्ता सत्यापन क्यों महत्वपूर्ण है",
      whyDescription:
        "SkillTrail रिपोर्ट किए गए प्लेसमेंट और सत्यापित रोजगार को अलग करता है। सीधे नियोक्ता की पुष्टि से एक अतिरिक्त प्रमाण संकेत मिलता है।",

      verificationPath: "रिपोर्ट किया गया प्लेसमेंट",
      verificationArrow1: "नियोक्ता पुष्टि",
      verificationArrow2: "प्रमाण क्रॉस-चेक",
      verificationFinal: "सत्यापित परिणाम",
    },

    districts: {
      label: "भौगोलिक बुद्धिमत्ता",
      title: "जिला परिणाम एक्सप्लोरर",
      description:
        "दीर्घकालिक परिणाम देखने के लिए मानचित्र या तालिका में किसी जिले पर क्लिक करें।",

      selectPrompt:
        "पूरा परिणाम प्रोफ़ाइल देखने के लिए मानचित्र पर जिला चुनें।",

      tier: "श्रेणी",
      trained: "ट्रैक किए गए प्रशिक्षु",
      retention6: "6 महीने की रिटेंशन",
      retention12: "12 महीने की रिटेंशन",
      wageMultiplier: "वेतन गुणक",
      selfEmployment: "स्वरोजगार",
      trustIndex: "विश्वास सूचकांक",

      outcomeIndicators: "परिणाम संकेतक",
      retentionTrajectory: "रिटेंशन प्रवृत्ति",
      retentionChange: "6M → 12M बदलाव",

      keySignal: "मुख्य परिणाम संकेत",
      highRetention: "उच्च रिटेंशन",
      moderateRetention: "मध्यम रिटेंशन",
      supportNeeded: "अधिक छोड़ने की दर / सहायता आवश्यक",

      highRetentionDescription:
        "जिले में 12 महीने की रिटेंशन अपेक्षाकृत मजबूत है।",
      moderateRetentionDescription:
        "जिले में 12 महीने की रिटेंशन मध्यम है और फॉलो-अप आवश्यकताओं पर निगरानी रखी जा सकती है।",
      supportNeededDescription:
        "12 महीने की रिटेंशन फॉलो-अप और सहायता की अधिक आवश्यकता दर्शाती है।",

      performanceTable: "जिला-वार प्रदर्शन तालिका",
      sortTrained: "क्रम: कुल प्रशिक्षित",
      sortRetention: "क्रम: 12M रिटेंशन",
      sortWage: "क्रम: वेतन गुणक",
      sortSelf: "क्रम: स्वरोजगार",

      district: "जिला",
      tierHeader: "श्रेणी",
      trainedHeader: "प्रशिक्षित",
      ret6Header: "6M रिट.",
      ret12Header: "12M रिट.",
      wageHeader: "वेतन x",
      selfHeader: "स्वरोजगार %",
    },

    fraud: {
      label: "पारदर्शी प्लेसमेंट सत्यापन",
      title: "प्लेसमेंट धोखाधड़ी डिटेक्टर",
      description:
        "यह नियम-आधारित इंजन दोहराए गए नियोक्ता संपर्क, अनुपस्थित फॉलो-अप और असामान्य रूप से कम जॉइनिंग-से-सत्यापन अंतराल जैसे संकेतों के आधार पर संदिग्ध प्लेसमेंट चिन्हित करता है।",

      recordsScanned: "स्कैन किए गए रिकॉर्ड",
      flaggedHighRisk: "उच्च जोखिम वाले रिकॉर्ड",
      detectionMethod: "डिटेक्शन विधि",
      deterministic: "निश्चित नियम, कोई ब्लैक बॉक्स नहीं",

      engineTitle: "सत्यापन इंजन",
      howTitle: "SkillTrail प्लेसमेंट की जांच कैसे करता है",
      howDescription:
        "हर प्लेसमेंट को पारदर्शी नियमों और उपलब्ध सत्यापन संकेतों के आधार पर जांचा जाता है। सिस्टम एक ही छिपे हुए स्कोर के बजाय प्रमाण दिखाता है।",

      rule1: "नियोक्ता संपर्क का दोहराव",
      rule1Desc:
        "जांचता है कि क्या एक ही नियोक्ता संपर्क कई अलग-अलग प्रशिक्षुओं से जुड़ा है।",

      rule2: "फॉलो-अप गतिविधि",
      rule2Desc:
        "जांचता है कि अपेक्षित प्लेसमेंट के बाद की गतिविधि या सत्यापन संकेत मौजूद हैं या नहीं।",

      rule3: "जॉइनिंग-से-सत्यापन अंतराल",
      rule3Desc:
        "जॉइनिंग और सत्यापन के बीच असामान्य रूप से कम समय को चिन्हित करता है।",

      rule4: "स्वतंत्र पुष्टि",
      rule4Desc:
        "स्वतंत्र रोजगार पुष्टि या अन्य सहायक संकेतों की जांच करता है।",

      passed: "संकेत मिला",
      flagged: "चिन्हित",

      lowRisk: "कम जोखिम",
      mediumRisk: "मध्यम जोखिम",
      highRisk: "उच्च जोखिम",

      verificationSignals: "सत्यापन संकेत",
      viewChecks: "सत्यापन जांच देखें",
      hideChecks: "सत्यापन जांच छिपाएं",

      noRiskSignals:
        "दिए गए डेमो रिकॉर्ड में कोई उच्च-जोखिम नियम संकेत मौजूद नहीं है।",

      ruleBasedNote:
        "नियम-आधारित — पारदर्शी और समझाने योग्य। केवल डेमो डेटा।",
    },

    ivr: {
      label: "सहायता आधारित फॉलो-अप",
      title: "IVR कॉलबैक का अनुरोध करें",
      description:
        "जब ऐप या इंटरनेट सुविधाजनक न हो, तो सरल फोन कॉलबैक का उपयोग करें।",

      mobile: "पंजीकृत मोबाइल नंबर",
      mobilePlaceholder: "+91 XXXXX XXXXX",

      preferredLanguage: "कॉलबैक की पसंदीदा भाषा",

      reason: "कॉलबैक का कारण",
      employment: "रोजगार स्थिति अपडेट",
      retention: "6 महीने की रिटेंशन जांच",
      mobileChange: "मोबाइल नंबर बदलना",
      other: "अन्य",

      preferredTime: "पसंदीदा समय",
      morning: "सुबह",
      afternoon: "दोपहर",
      evening: "शाम",

      request: "कॉलबैक अनुरोध करें",
      cancel: "रद्द करें",

      successTitle: "कॉलबैक का अनुरोध किया गया",
      successDescription:
        "इस प्रोटोटाइप वर्कफ़्लो में आपका IVR कॉलबैक अनुरोध दर्ज किया गया है।",
      reference: "संदर्भ",
      selectedLanguage: "कॉलबैक भाषा",
      selectedTime: "पसंदीदा समय",

      backToTrainee: "ट्रेनी कॉकपिट पर वापस जाएं",
      note:
        "प्रोटोटाइप वर्कफ़्लो: बैकएंड उपलब्ध होने पर इस कार्रवाई को Twilio या Exotel जैसे IVR प्रदाता से जोड़ा जा सकता है।",
    },
  },

  mr: {
    government:
      "महाराष्ट्र शासन • कौशल्य, रोजगार, उद्योजकता व नाविन्य विभाग",

    tagline: "प्रवासाचा मागोवा घ्या. परिणामाची पडताळणी करा.",

    nav: {
      overview: "आढावा",
      trainee: "प्रशिक्षणार्थी कॉकपिट",
      employer: "नियोक्ता हब",
      districts: "जिल्हा एक्सप्लोरर",
      fraud: "फसवणूक शोधक",
      roadmap: "मोबाइल अॅप",
    },

      home: {
          gov: "महाराष्ट्र शासन · कौशल्य, रोजगार, उद्योजकता व नाविन्य विभाग · समस्या विधान 26135",

          titleLine1: "महाराष्ट्र कौशल्य विकास परिणाम",
          titleLine2: "आणि दीर्घकालीन ROI",

          description:
              "प्रशिक्षणानंतर 3 ते 36 महिन्यांपर्यंत सातत्यपूर्ण ट्रॅकिंग, प्रशिक्षणार्थी स्वयं-अहवाल, सिम्युलेटेड EPFO संकेत आणि नियोक्ता पुष्टी यांचा वापर करून रोजगार परिणामांचा मागोवा.",

          stats: {
              totalTrained: "एकूण प्रशिक्षित",
              certified: "प्रमाणित",
              retention: "12 महिन्यांचे रिटेन्शन",
              verified: "पडताळलेले, केवळ स्वयं-अहवाल नाही",
              wageMultiplier: "वेतन गुणक",
              trust: "विश्वास निर्देशांक",
              trustSub: "EPFO + नियोक्ता + सहकारी संकेत",
          },

          features: {
              passport: {
                  title: "करिअर पासपोर्ट",
                  desc: "विविध योजनांमधील प्रशिक्षण आणि रोजगार इतिहास एकत्र करणारी QR-आधारित ओळख.",
              },
              fraud: {
                  title: "फसवणूक शोधक",
                  desc: "पुनर्वापरलेले नियोक्ता क्रमांक आणि संशयास्पद प्लेसमेंट ओळखतो.",
              },
              ivr: {
                  title: "IVR फॉलो-अप",
                  desc: "विश्वसनीय स्मार्टफोन सुविधा नसलेल्या प्रशिक्षणार्थ्यांसाठी व्हॉइस-कॉल पर्याय.",
              },
              ml: {
                  title: "परिणाम ML",
                  desc: "प्लेसमेंट अयशस्वी होण्याची कारणे समजावून सांगणारे मॉडेल.",
              },
          },

          charts: {
              retentionTitle: "राज्यव्यापी रिटेन्शन वक्र (3–36 महिने)",
              retentionSubtitle: "कोहोर्ट सातत्य विरुद्ध राज्य बेंचमार्क",
              wageTitle: "क्षेत्रानुसार वेतन प्रगती (₹/महिना)",
              wageSubtitle: "स्टायपेंड विरुद्ध 12-महिने आणि 24-महिन्यांची पडताळलेली कमाई",
              stipend: "स्टायपेंड",
              month12: "12M",
              month24: "24M",
          },

          map: {
              title: "महाराष्ट्र जिल्हा परिणाम नकाशा",
              subtitle: "GIS दृश्य — तपशील पाहण्यासाठी जिल्ह्यावर क्लिक करा",
              open: "पूर्ण एक्सप्लोरर उघडा",
          },
      },

    footer:
      "SkillTrail · SIH 2026 · समस्या विधान 135 · दाखवलेला डेटा सिंथेटिक/डेमो आहे",

    language: "भाषा",
    darkMode: "डार्क मोड बदला",

    trainee: {
      label: "प्रशिक्षणार्थी कॉकपिट · मोबाइल-फर्स्ट",
      greeting: "नमस्कार, राहुल 👋",
      description:
        "हे दृश्य मोबाइल स्क्रीनसाठी अनुकूलित आहे आणि PWA म्हणून होम स्क्रीनवरही वापरता येते.",

      passport: "करिअर पासपोर्ट",
      passportId: "आयडी: T-10231",
      passportDescription:
        "कोणत्याही नियोक्ता किंवा योजनेसह पडताळलेला प्रशिक्षण व रोजगार इतिहास शेअर करण्यासाठी स्कॅन करा.",

      journey: "तुमचा प्रवास",

      enrolled: "नोंदणी — इलेक्ट्रिशियन व सोलर हायब्रिड",
      certified: "प्रमाणित (गुण: 82%)",
      placed: "नोकरी — Sunrise Electricals",
      threeMonth: "3 महिन्यांची तपासणी — पडताळलेली",
      sixMonth: "6 महिन्यांची तपासणी — प्रलंबित",

      dates: {
        enrolled: "12 जानेवारी 2026",
        certified: "18 एप्रिल 2026",
        placed: "02 मे 2026",
        threeMonth: "05 ऑगस्ट 2026",
        sixMonth: "देय 05 नोव्हेंबर 2026",
      },

      callbackTitle: "अॅपऐवजी फोन कॉल पसंत आहे?",
      callbackDescription:
        "तुमचा नंबर बदलला असल्यास किंवा अॅप सोयीचे नसल्यास आम्ही फोनद्वारेही संपर्क करू.",

      ivr: "IVR कॉलबॅक मागवा",
      whatsapp: "WhatsApp द्वारे पुष्टी करा",
    },

    employer: {
      label: "नियोक्ता व पडताळणी हब",
      title: "Sunrise Electricals",
      subtitle:
        "लॉगिन नाही, फॉर्म नाही — एका टॅपमध्ये रोजगार स्थितीची पुष्टी करा. यामुळे SkillTrail चा डेटा फक्त स्वयं-अहवालावर अवलंबून राहत नाही.",

      verifiedEmployer: "पडताळलेला नियोक्ता",
      location: "पुणे, महाराष्ट्र",

      verificationRequests: "पडताळणी विनंत्या",
      confirmed: "पुष्टी झालेल्या",
      pending: "प्रलंबित",

      verificationWorkflow: "पडताळणी प्रक्रिया",
      step1: "नियोक्ता ओळख",
      step1Desc: "प्लेसमेंटशी संबंधित नियोक्ता रेकॉर्डची पडताळणी.",
      step2: "रोजगार पुष्टी",
      step2Desc: "प्रशिक्षणार्थी सध्या कार्यरत आहे की नाही याची नियोक्त्याकडून पुष्टी.",
      step3: "परिणाम अपडेट",
      step3Desc: "पुष्टी झालेली स्थिती दीर्घकालीन रेकॉर्डचा भाग बनते.",

      confirmYes: "होय, अजूनही कार्यरत",
      confirmNo: "नाही",
      confirmedEmployed: "रोजगाराची पुष्टी झाली",
      markedNotEmployed: "रोजगार नाही म्हणून चिन्हांकित",

      whyTitle: "नियोक्ता पडताळणी का महत्त्वाची आहे",
      whyDescription:
        "SkillTrail मध्ये रिपोर्ट केलेले प्लेसमेंट आणि पडताळलेला रोजगार वेगळा ठेवला जातो. थेट नियोक्ता पुष्टीमुळे अतिरिक्त पुरावा मिळतो.",

      verificationPath: "रिपोर्ट केलेले प्लेसमेंट",
      verificationArrow1: "नियोक्ता पुष्टी",
      verificationArrow2: "पुरावा क्रॉस-चेक",
      verificationFinal: "पडताळलेला परिणाम",
    },

    districts: {
      label: "भौगोलिक बुद्धिमत्ता",
      title: "जिल्हा परिणाम एक्सप्लोरर",
      description:
        "दीर्घकालीन परिणाम पाहण्यासाठी नकाशावर किंवा तक्त्यातील कोणत्याही जिल्ह्यावर क्लिक करा.",

      selectPrompt:
        "संपूर्ण परिणाम प्रोफाइल पाहण्यासाठी नकाशावर जिल्हा निवडा.",

      tier: "श्रेणी",
      trained: "ट्रॅक केलेले प्रशिक्षणार्थी",
      retention6: "6M रिटेन्शन",
      retention12: "12M रिटेन्शन",
      wageMultiplier: "वेतन गुणक",
      selfEmployment: "स्वयंरोजगार",
      trustIndex: "विश्वास निर्देशांक",

      outcomeIndicators: "परिणाम निर्देशक",
      retentionTrajectory: "रिटेन्शन प्रवाह",
      retentionChange: "6M → 12M बदल",

      keySignal: "मुख्य परिणाम संकेत",
      highRetention: "उच्च रिटेन्शन",
      moderateRetention: "मध्यम रिटेन्शन",
      supportNeeded: "जास्त गळती / सहाय्य आवश्यक",

      highRetentionDescription:
        "जिल्ह्यातील 12 महिन्यांचे रिटेन्शन तुलनेने मजबूत आहे.",
      moderateRetentionDescription:
        "जिल्ह्यातील 12 महिन्यांचे रिटेन्शन मध्यम आहे; फॉलो-अप आवश्यकतांवर लक्ष ठेवता येईल.",
      supportNeededDescription:
        "12 महिन्यांचे रिटेन्शन अधिक फॉलो-अप आणि सहाय्याची गरज दर्शवते.",

      performanceTable: "जिल्हानिहाय कामगिरी तक्ता",
      sortTrained: "क्रम: एकूण प्रशिक्षणार्थी",
      sortRetention: "क्रम: 12M रिटेन्शन",
      sortWage: "क्रम: वेतन गुणक",
      sortSelf: "क्रम: स्वयंरोजगार",

      district: "जिल्हा",
      tierHeader: "श्रेणी",
      trainedHeader: "प्रशिक्षित",
      ret6Header: "6M रिट.",
      ret12Header: "12M रिट.",
      wageHeader: "वेतन x",
      selfHeader: "स्वयंरोजगार %",
    },

    fraud: {
      label: "पारदर्शक प्लेसमेंट पडताळणी",
      title: "प्लेसमेंट फसवणूक शोधक",
      description:
        "हा नियम-आधारित इंजिन पुनर्वापरलेले नियोक्ता संपर्क, अनुपस्थित फॉलो-अप आणि असामान्य जॉइनिंग-ते-पडताळणी अंतर यांसारख्या पारदर्शक संकेतांवर आधारित संशयास्पद प्लेसमेंट शोधतो.",

      recordsScanned: "स्कॅन केलेले रेकॉर्ड",
      flaggedHighRisk: "उच्च जोखीम म्हणून चिन्हांकित",
      detectionMethod: "शोध पद्धत",
      deterministic: "निश्चित नियम, ब्लॅक बॉक्स नाही",

      engineTitle: "पडताळणी इंजिन",
      howTitle: "SkillTrail प्लेसमेंट कसे तपासते",
      howDescription:
        "प्रत्येक प्लेसमेंटची पारदर्शक नियम आणि उपलब्ध पडताळणी संकेतांनुसार तपासणी केली जाते. एका लपवलेल्या स्कोअरऐवजी प्रणाली पुरावे दाखवते.",

      rule1: "नियोक्ता संपर्क पुनर्वापर",
      rule1Desc:
        "एकच नियोक्ता संपर्क अनेक वेगवेगळ्या प्रशिक्षणार्थींशी जोडलेला आहे का हे तपासते.",

      rule2: "फॉलो-अप क्रियाकलाप",
      rule2Desc:
        "प्लेसमेंटनंतरची अपेक्षित क्रिया किंवा पडताळणी संकेत उपलब्ध आहेत का हे तपासते.",

      rule3: "जॉइनिंग-ते-पडताळणी अंतर",
      rule3Desc:
        "जॉइनिंग आणि पडताळणीमधील असामान्यपणे कमी अंतर चिन्हांकित करते.",

      rule4: "स्वतंत्र पुष्टी",
      rule4Desc:
        "स्वतंत्र रोजगार पुष्टी किंवा इतर सहाय्यक संकेत तपासते.",

      passed: "संकेत आढळला",
      flagged: "चिन्हांकित",

      lowRisk: "कमी जोखीम",
      mediumRisk: "मध्यम जोखीम",
      highRisk: "उच्च जोखीम",

      verificationSignals: "पडताळणी संकेत",
      viewChecks: "पडताळणी तपासा",
      hideChecks: "पडताळणी लपवा",

      noRiskSignals:
        "दिलेल्या डेमो रेकॉर्डमध्ये उच्च-जोखीम नियम संकेत नाहीत.",

      ruleBasedNote:
        "नियम-आधारित — पारदर्शक आणि समजण्यास सोपे. फक्त डेमो डेटा.",
    },

    ivr: {
      label: "सहाय्यित फॉलो-अप",
      title: "IVR कॉलबॅक मागवा",
      description:
        "अॅप किंवा इंटरनेट सोयीचे नसल्यास साध्या फोन कॉलबॅकचा वापर करा.",

      mobile: "नोंदणीकृत मोबाइल नंबर",
      mobilePlaceholder: "+91 XXXXX XXXXX",

      preferredLanguage: "कॉलबॅकची पसंतीची भाषा",

      reason: "कॉलबॅकचे कारण",
      employment: "रोजगार स्थिती अपडेट",
      retention: "6 महिन्यांची रिटेन्शन तपासणी",
      mobileChange: "मोबाइल नंबर बदलणे",
      other: "इतर",

      preferredTime: "पसंतीची वेळ",
      morning: "सकाळ",
      afternoon: "दुपार",
      evening: "संध्याकाळ",

      request: "कॉलबॅक मागवा",
      cancel: "रद्द करा",

      successTitle: "कॉलबॅक मागवला आहे",
      successDescription:
        "या प्रोटोटाइप वर्कफ्लोमध्ये तुमची IVR कॉलबॅक विनंती नोंदवली गेली आहे.",
      reference: "संदर्भ",
      selectedLanguage: "कॉलबॅक भाषा",
      selectedTime: "पसंतीची वेळ",

      backToTrainee: "प्रशिक्षणार्थी कॉकपिटवर परत जा",
      note:
        "प्रोटोटाइप वर्कफ्लो: बॅकएंड उपलब्ध झाल्यावर ही कृती Twilio किंवा Exotel सारख्या IVR प्रदात्याशी जोडता येईल.",
    },
  },
};