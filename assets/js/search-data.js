// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-people",
          title: "people",
          description: "members of the lab or group",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/photo-gallery/";
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/pseudocode/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-our-paper-decoding-the-mitre-engenuity-att-amp-amp-ck-enterprise-evaluation-an-analysis-of-edr-performance-in-real-world-environments-is-accepted-by-asiaccs-24-tada-tada",
          title: 'Our paper “Decoding the MITRE Engenuity ATT&amp;amp;amp;CK Enterprise Evaluation: An Analysis of EDR...',
          description: "",
          section: "News",},{id: "news-our-paper-incorporating-gradients-to-rules-towards-lightweight-adaptive-provenance-based-intrusion-detection-is-accepted-by-ndss-25-tada-tada",
          title: 'Our paper “Incorporating Gradients to Rules: Towards Lightweight, Adaptive Provenance-based Intrusion Detection” is...',
          description: "",
          section: "News",},{id: "news-our-poster-llm-driven-automated-exploit-assessment-for-penetration-testing-is-accepted-to-appear-in-ndss-25-tada-tada",
          title: 'Our poster “LLM-Driven Automated Exploit Assessment for Penetration Testing” is accepted to appear...',
          description: "",
          section: "News",},{id: "news-we-are-pleased-to-announce-the-release-of-pentestagent-an-llm-driven-automated-penetration-testing-framework-tada-tada-feel-free-to-try-out-the-tool-share-your-thoughts-and-let-us-know-if-you-run-into-any-issues-if-you-find-pentestagent-useful-do-give-it-a-star-on-github-star-star",
          title: 'We are pleased to announce the release of PentestAgent, an LLM-driven automated penetration...',
          description: "",
          section: "News",},{id: "news-our-paper-pentestagent-incorporating-llm-agents-to-automated-penetration-testing-is-accepted-by-asiaccs-25-tada-tada",
          title: 'Our paper “PentestAgent: Incorporating LLM Agents to Automated Penetration Testing” is accepted by...',
          description: "",
          section: "News",},{id: "news-our-paper-incorporating-gradients-to-rules-towards-online-adaptive-provenance-based-intrusion-detection-is-accepted-by-tdsc-tada-tada",
          title: 'Our paper “Incorporating Gradients to Rules: Towards Online, Adaptive Provenance-based Intrusion Detection” is...',
          description: "",
          section: "News",},{id: "news-our-paper-from-sands-to-mansions-actionable-customizable-and-causality-preserving-cyberattack-emulation-with-llm-powered-symbolic-planning-is-accepted-by-acns-26-tada-tada",
          title: 'Our paper “From Sands to Mansions: Actionable, Customizable, and Causality-Preserving Cyberattack Emulation with...',
          description: "",
          section: "News",},{id: "news-our-papers-the-case-for-llm-enhanced-backward-tracking-and-building-next-generation-datasets-for-provenance-based-intrusion-detection-are-accepted-by-prism-26-tada-tada",
          title: 'Our papers “The Case for LLM-Enhanced Backward Tracking” and “Building Next-Generation Datasets for...',
          description: "",
          section: "News",},{id: "news-our-posters-reconstructing-the-provenance-of-android-and-abstracting-and-tracking-semantic-flow-among-agents-for-threat-detection-are-accepted-to-appear-in-ndss-26-tada-tada",
          title: 'Our posters “Reconstructing the Provenance of Android” and “Abstracting and Tracking Semantic Flow...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%78%69%61%6E%67%6D%69%6E.%73%68%65%6E@%68%6F%66%73%74%72%61.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/nbshenxm", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/xiangmin-shen-336119113", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=k-4gdr8AAAAJ", "_blank");
        },
      },{
        id: 'social-semanticscholar',
        title: 'Semantic Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://www.semanticscholar.org/author/2282102870", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
