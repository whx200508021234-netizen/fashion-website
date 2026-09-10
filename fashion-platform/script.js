const tabButtons = [...document.querySelectorAll("[data-panel]")];
const panels = [...document.querySelectorAll("[data-panel-section]")];
const jumpButtons = [...document.querySelectorAll("[data-panel-jump]")];
const loginDialog = document.querySelector(".login-dialog");
const openLoginButtons = [...document.querySelectorAll("[data-open-login]")];
const filterButtons = [...document.querySelectorAll("[data-filter]")];
const talentCards = [...document.querySelectorAll(".talent-card")];
const menuToggle = document.querySelector("[data-menu-toggle]");
const menuCloseButtons = [...document.querySelectorAll("[data-menu-close]")];
const peopleCategoryButtons = [...document.querySelectorAll("[data-people-category]")];
const peopleEntry = document.querySelector("[data-network-entry]");
const peopleResults = document.querySelector("[data-people-results]");
const peopleBackButton = document.querySelector("[data-people-back]");
const peopleRoleLabel = document.querySelector("[data-people-role] span:last-of-type");
const teamButtons = [...document.querySelectorAll("[data-team-index]")];
const teamDetail = {
  value: document.querySelector("[data-team-value]"),
  name: document.querySelector("[data-team-name]"),
  role: document.querySelector("[data-team-role]"),
  quote: document.querySelector("[data-team-quote]"),
  bio: document.querySelector("[data-team-bio]"),
  scope: document.querySelector("[data-team-scope]"),
  signal: document.querySelector("[data-team-signal]"),
  avatar: document.querySelector("[data-team-avatar]"),
};
const languageToggle = document.querySelector("[data-lang-toggle]");
const statusTime = document.querySelector(".mini-statusbar span:first-child");
const miniShell = document.querySelector(".mini-program-shell");
const sideNav = document.querySelector("[data-side-nav]");
const sideCollapseButton = document.querySelector("[data-side-collapse]");
let activeLanguage = "zh";
let isSideNavCollapsed = false;
let activeTeamIndex = 0;

const copy = {
  zh: {
    documentTitle: "形场 XINGCHANG | 时尚行业连接平台",
    langButton: "EN",
    langAria: "Switch to English",
    collapseNav: "收起侧边栏",
    expandNav: "展开侧边栏",
    nav: {
      inspiration: "灵感板",
      network: "Network",
      team: "团队",
      jobs: "工作",
      submit: "Submit",
    },
    topLogin: "登录",
    topPost: "发布投稿",
    heroStatus: "加入时尚找工互助群!",
    heroTitle: "给时尚行业的人，一个能真正找到彼此的工作场。",
    heroLede: "模特、摄影师、造型师、妆发、杂志编辑和品牌制片，在这里展示作品、建立联系、申请项目、提交 editorial。",
    join: "加入平台",
    browseTalent: "浏览人才",
    openNow: "Open now",
    recruitingCount: "37 个项目正在招募",
    inspirationKicker: "Inspiration Feed",
    inspirationTitle: "灵感板",
    genre: "Genre",
    searchPhotos: "搜索图片",
    mood: [
      ["夜行皮革", "@LiuQing · 上海", ["High fashion", "Leather"]],
      ["后台银面", "@MaoStudio · 北京", ["Beauty", "Flash"]],
      ["试装间快闪", "@Riven · 广州", ["Behind scene", "Styling"]],
      ["冷调肖像", "@NineFace · 成都", ["Portrait", "New face"]],
      ["地下通道 editorial", "@AfterShow · 上海", ["Street", "Location"]],
      ["镜前暗唇", "@VoidMakeup · 深圳", ["Makeup", "Cover ready"]],
    ],
    findPeople: "Find People",
    peopleCategories: {
      Photographers: "摄影师",
      "Wardrobe Stylists": "造型师",
      "Hair Stylists": "发型师",
      Models: "模特",
      "Makeup Artists": "化妆师",
      More: "更多",
    },
    peopleFilters: {
      near: "附近",
      instagram: "Instagram",
      openTo: "可合作",
      more: "更多筛选...",
    },
    connect: "建立联系",
    profileMeta: [
      "◎ 0.8k · 摄影师 · 上海",
      "◎ 5k · 摄影师 · 北京",
      "◎ 33k · 摄影师 · 杭州",
      "◎ 52k · 摄影师 @ HMG Studios · 上海",
    ],
    team: {
      kicker: "今日团队推荐",
      title: "团队 Profile",
      lede: "从团队气质进入成员故事，快速看到这个小组怎样配合、判断和照顾现场。",
      action: "查看人才库",
      facts: ["负责", "信号"],
      values: [
        {
          value: "默契",
          line: "无需翻译的语言，往往最珍贵",
          name: "Remy",
          role: "团队主理人 · 项目制片",
          bio: "作为团队里最早把创作者、品牌和出版方拉到同一张桌子上的人，Remy 更看重那些很难被量化的部分：性格、态度、现场判断，以及愿意把一件事做完整的热情。",
          scope: "项目节奏、客户沟通、现场决策",
          signal: "能把模糊需求翻译成可执行的拍摄计划",
          avatar: "crop-a",
        },
        {
          value: "理解",
          line: "让每个人都能自在表达",
          name: "Miko",
          role: "造型统筹 · 人才沟通",
          bio: "Miko 擅长在试装、妆发和拍摄之间找到人的状态。她会先听清楚每个人真正担心什么，再把现场安排调到一个大家都能发挥的节奏。",
          scope: "造型资源、试装流程、成员反馈",
          signal: "能把紧张的现场变成可讨论、可调整的协作空间",
          avatar: "crop-c",
        },
        {
          value: "看见",
          line: "每一份成长，都值得被认真看见",
          name: "Ari",
          role: "编辑策展 · 作品审核",
          bio: "Ari 负责从大量作品里找到有潜力的细节。她不会只看完成度，也会看创作者是否在持续形成自己的语言，并把这些信号整理给团队。",
          scope: "作品筛选、创作者标签、出版方匹配",
          signal: "能在不成熟的作品里看到明确的下一步",
          avatar: "crop-e",
        },
        {
          value: "温度",
          line: "归属感需要用心来培育",
          name: "Tao",
          role: "社区运营 · 新人陪跑",
          bio: "Tao 让新成员更快知道该找谁、问什么、怎样开始第一次合作。他维护的不只是社群秩序，也是一种能被信任的回应速度。",
          scope: "新人引导、社群规则、合作回访",
          signal: "能让陌生人第一次开口时不觉得突兀",
          avatar: "crop-b",
        },
        {
          value: "包容",
          line: "给不同节奏留下合作空间",
          name: "Lin",
          role: "制作协调 · 预算排期",
          bio: "Lin 处理现实限制：预算、档期、场地和临时变化。她习惯把选择讲清楚，让团队在不同成本和节奏之间做出稳妥判断。",
          scope: "预算拆分、排期协同、风险提醒",
          signal: "能在变化发生前留出可退可进的位置",
          avatar: "crop-f",
        },
      ],
    },
    jobBoard: "工作列表",
    postJob: "发布工作",
    jobTabs: ["全部", "已申请", "已发布", "已收藏"],
    jobFilters: ["城市", "角色", "报酬"],
    forYou: "为你推荐",
    jobs: [
      {
        seeking: "寻找",
        title: "时装秀 Editorial 模特",
        pay: "¥420/小时",
        meta: ["▦ 尽快", "⌖ 上海"],
        company: "Conscious Talent Management",
        companyMeta: "模特经纪 · 上海",
      },
      {
        seeking: "寻找",
        title: "品牌新面孔模特招募",
        pay: "有偿 · 可议",
        meta: ["▦ 持续招募", "⌖ 米兰"],
        company: "Conscious Talent Management",
        companyMeta: "模特经纪 · 上海",
      },
      {
        seeking: "寻找",
        title: "国际模特 scouting 专业模特",
        pay: "有偿 · 可议",
        meta: ["▦ 持续招募", "⌖ 北京"],
        company: "MEDUSA MODEL",
        companyMeta: "Casting Studio · 北京",
      },
      {
        seeking: "寻找",
        title: "能量饮料广告模特",
        pay: "¥2,800/小时",
        meta: ["▦ 30 天内", "⌖ 广州"],
        company: "Michael Alan",
        companyMeta: "制片 · 广州",
      },
    ],
    submitKicker: "Get Published",
    submitTitle: "Submit 投稿",
    drafts: "查看草稿",
    calls: [
      ["48h 决定", "Razor Magazine · 地下银色", "Web feature，接受 beauty、portrait、street editorial。", ["Free", "8-12 张", "需 credits"]],
      ["即将截止", "New Faces Archive · Issue 09", "面向新模特和新摄影师，偏冷调肖像与实验造型。", ["Print", "Paid option", "独家 30 天"]],
    ],
    formTitle: "提交作品",
    draftSaved: "Draft saved",
    workTitleLabel: "作品标题",
    uploadTitle: "上传图片",
    uploadHint: "JPG / PNG · 最少 8 张 · 单张不超过 20MB",
    credits: ["摄影", "模特", "造型", "妆发"],
    statementLabel: "Artist statement",
    submitButton: "提交给出版方",
    submitted: "已进入审核队列",
    loginKicker: "Member access",
    loginTitle: "登录形场",
    emailLabel: "手机号或邮箱",
    emailPlaceholder: "name@example.com",
    passwordLabel: "密码",
    passwordPlaceholder: "输入密码",
    loginButton: "登录",
    loginNote: "新用户可先创建创作者、出版方或招聘方身份。",
  },
  en: {
    documentTitle: "XINGCHANG | Fashion Industry Platform",
    langButton: "中文",
    langAria: "切换到中文",
    collapseNav: "Collapse side navigation",
    expandNav: "Expand side navigation",
    nav: {
      inspiration: "Inspiration",
      network: "Network",
      team: "Team",
      jobs: "Jobs",
      submit: "Submit",
    },
    topLogin: "Log in",
    topPost: "Submit work",
    heroStatus: "Join the fashion work circle!",
    heroTitle: "A work network for fashion people to actually find each other.",
    heroLede: "Models, photographers, stylists, makeup artists, editors and producers can show portfolios, connect, apply for projects and submit editorials.",
    join: "Join platform",
    browseTalent: "Browse talent",
    openNow: "Open now",
    recruitingCount: "37 projects hiring now",
    inspirationKicker: "Inspiration Feed",
    inspirationTitle: "Inspiration",
    genre: "Genre",
    searchPhotos: "Search Photos",
    mood: [
      ["Night leather", "@LiuQing · Shanghai", ["High fashion", "Leather"]],
      ["Backstage silver", "@MaoStudio · Beijing", ["Beauty", "Flash"]],
      ["Fitting room flash", "@Riven · Guangzhou", ["Behind scene", "Styling"]],
      ["Cool portrait", "@NineFace · Chengdu", ["Portrait", "New face"]],
      ["Tunnel editorial", "@AfterShow · Shanghai", ["Street", "Location"]],
      ["Mirror dark lip", "@VoidMakeup · Shenzhen", ["Makeup", "Cover ready"]],
    ],
    findPeople: "Find People",
    peopleCategories: {
      Photographers: "Photographers",
      "Wardrobe Stylists": "Wardrobe Stylists",
      "Hair Stylists": "Hair Stylists",
      Models: "Models",
      "Makeup Artists": "Makeup Artists",
      More: "More",
    },
    peopleFilters: {
      near: "Near You",
      instagram: "Instagram",
      openTo: "Open To",
      more: "More Filters...",
    },
    connect: "Connect",
    profileMeta: [
      "◎ 0.8k · Photographer · Shanghai",
      "◎ 5k · Photographer · Beijing",
      "◎ 33k · Photographer · Hangzhou",
      "◎ 52k · Photographer @ HMG Studios · Shanghai",
    ],
    team: {
      kicker: "Team pick",
      title: "Team Profile",
      lede: "Move from team traits into member stories, and see how this crew works, decides and takes care of the set.",
      action: "View talent",
      facts: ["Owns", "Signal"],
      values: [
        {
          value: "Fluency",
          line: "The rare language that needs no translation",
          name: "Remy",
          role: "Team lead · Producer",
          bio: "Remy was one of the first people to bring creators, brands and publishers to the same table. He pays attention to the parts that are hard to measure: temperament, attitude, judgment on set and the will to finish the work properly.",
          scope: "Project rhythm, client communication, set decisions",
          signal: "Turns loose briefs into shoot plans people can follow",
          avatar: "crop-a",
        },
        {
          value: "Understanding",
          line: "Making room for people to express themselves",
          name: "Miko",
          role: "Styling coordinator · Talent communication",
          bio: "Miko reads the person between fitting, hair, makeup and camera. She listens for the worry behind the words, then adjusts the room so people can do better work.",
          scope: "Styling resources, fitting flow, member feedback",
          signal: "Turns pressure into a space where people can talk and adjust",
          avatar: "crop-c",
        },
        {
          value: "Attention",
          line: "Every step of growth deserves to be seen",
          name: "Ari",
          role: "Editorial curator · Portfolio review",
          bio: "Ari finds the useful detail inside a large volume of work. She does not only score polish. She looks for creators building a visual language and gives the team that signal.",
          scope: "Portfolio selection, creator tags, publisher fit",
          signal: "Sees the next step inside work that is still forming",
          avatar: "crop-e",
        },
        {
          value: "Care",
          line: "Belonging is built through careful attention",
          name: "Tao",
          role: "Community operator · New member support",
          bio: "Tao helps new members know who to ask, what to prepare and how to begin a first collaboration. He maintains not only community rules, but a response rhythm people can trust.",
          scope: "Onboarding, community rules, collaboration follow-up",
          signal: "Makes the first message feel easy to send",
          avatar: "crop-b",
        },
        {
          value: "Range",
          line: "Leaving space for different working rhythms",
          name: "Lin",
          role: "Production coordinator · Budget and schedule",
          bio: "Lin handles the real constraints: budget, calendar, location and last-minute changes. She makes options legible so the team can choose with a clear head.",
          scope: "Budget split, scheduling, risk notes",
          signal: "Leaves room to move before the plan gets tight",
          avatar: "crop-f",
        },
      ],
    },
    jobBoard: "Job Board",
    postJob: "Post Job",
    jobTabs: ["All", "Applied", "Posted", "Saved"],
    jobFilters: ["City", "Role", "Payment"],
    forYou: "For You",
    jobs: [
      {
        seeking: "Seeking",
        title: "Models for Fashion Show Editorial",
        pay: "USD $60/hr",
        meta: ["▦ ASAP", "⌖ Shanghai"],
        company: "Conscious Talent Management",
        companyMeta: "Talent Agency · Shanghai",
      },
      {
        seeking: "Seeking",
        title: "Models for New Face Campaign",
        pay: "Paid · Negotiable",
        meta: ["▦ Ongoing", "⌖ Milan"],
        company: "Conscious Talent Management",
        companyMeta: "Talent Agency · Shanghai",
      },
      {
        seeking: "Seeking",
        title: "Professional Model for International Scouting",
        pay: "Paid · Negotiable",
        meta: ["▦ Ongoing", "⌖ Beijing"],
        company: "MEDUSA MODEL",
        companyMeta: "Casting Studio · Beijing",
      },
      {
        seeking: "Seeking",
        title: "Model for Energy Drink Commercial",
        pay: "USD $400/hr",
        meta: ["▦ Within 30d", "⌖ Guangzhou"],
        company: "Michael Alan",
        companyMeta: "Production · Guangzhou",
      },
    ],
    submitKicker: "Get Published",
    submitTitle: "Submit",
    drafts: "View drafts",
    calls: [
      ["48h decision", "Razor Magazine · Underground Silver", "Web feature accepting beauty, portrait and street editorial work.", ["Free", "8-12 images", "Credits required"]],
      ["Closing soon", "New Faces Archive · Issue 09", "For new models and photographers, with cool portraits and experimental styling.", ["Print", "Paid option", "30-day exclusive"]],
    ],
    formTitle: "Submit work",
    draftSaved: "Draft saved",
    workTitleLabel: "Work title",
    uploadTitle: "Upload images",
    uploadHint: "JPG / PNG · at least 8 images · under 20MB each",
    credits: ["Photography", "Model", "Styling", "Makeup"],
    statementLabel: "Artist statement",
    submitButton: "Submit to publisher",
    submitted: "Sent to review queue",
    loginKicker: "Member access",
    loginTitle: "Log in to XINGCHANG",
    emailLabel: "Phone or email",
    emailPlaceholder: "name@example.com",
    passwordLabel: "Password",
    passwordPlaceholder: "Enter password",
    loginButton: "Log in",
    loginNote: "New users can create a creator, publisher or recruiter identity first.",
  },
};

function setText(selector, value, root = document) {
  const element = root.querySelector(selector);
  if (element) {
    element.textContent = value;
  }
}

function setAllText(selector, values, root = document) {
  root.querySelectorAll(selector).forEach((element, index) => {
    if (values[index] != null) {
      element.textContent = values[index];
    }
  });
}

function setMixedButtonText(button, value) {
  if (!button || value == null) {
    return;
  }

  const textNode = [...button.childNodes].find(
    (node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim(),
  );
  if (textNode) {
    textNode.textContent = ` ${value} `;
  }
}

function setInputPlaceholder(selector, value) {
  const input = document.querySelector(selector);
  if (input) {
    input.placeholder = value;
  }
}

function getPeopleCategoryLabel(category) {
  return copy[activeLanguage].peopleCategories[category] || category;
}

function renderTeamProfile(index = activeTeamIndex) {
  const team = copy[activeLanguage].team;
  const item = team.values[index] || team.values[0];
  if (!item) {
    return;
  }

  activeTeamIndex = index;
  teamButtons.forEach((button) => {
    const isActive = Number(button.dataset.teamIndex) === index;
    button.classList.toggle("is-selected", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  if (teamDetail.value) teamDetail.value.textContent = item.value;
  if (teamDetail.name) teamDetail.name.textContent = item.name;
  if (teamDetail.role) teamDetail.role.textContent = item.role;
  if (teamDetail.quote) teamDetail.quote.textContent = item.line;
  if (teamDetail.bio) teamDetail.bio.textContent = item.bio;
  if (teamDetail.scope) teamDetail.scope.textContent = item.scope;
  if (teamDetail.signal) teamDetail.signal.textContent = item.signal;
  if (teamDetail.avatar) teamDetail.avatar.className = `team-avatar ${item.avatar}`;
}

function applyLanguage(language) {
  activeLanguage = language;
  const text = copy[language];
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.title = text.documentTitle;

  languageToggle.textContent = text.langButton;
  languageToggle.setAttribute("aria-label", text.langAria);
  updateSideNavState(isSideNavCollapsed);
  menuToggle?.setAttribute("aria-label", language === "zh" ? "打开菜单" : "Open menu");
  document.querySelectorAll("[data-menu-close]").forEach((button) => {
    button.setAttribute("aria-label", language === "zh" ? "关闭菜单" : "Close menu");
  });

  tabButtons.forEach((button) => {
    button.textContent = text.nav[button.dataset.panel];
  });
  setText(".drawer-head strong", language === "zh" ? "形场!" : "XINGCHANG!");
  setText(".topbar [data-open-login]", text.topLogin);
  setText(".topbar [data-panel-jump='submit']", text.topPost);
  setText(".hero-status", text.heroStatus);
  setText("#hero-title", text.heroTitle);
  setText(".hero-lede", text.heroLede);
  setText(".hero-actions [data-open-login]", text.join);
  setText(".hero-actions [data-panel-jump='network']", text.browseTalent);
  setText(".hero-media figcaption span", text.openNow);
  setText(".hero-media figcaption strong", text.recruitingCount);

  setText("#inspiration .section-heading .status-line", text.inspirationKicker);
  setText("#inspiration h2", text.inspirationTitle);
  setMixedButtonText(document.querySelector(".dark-tool"), text.genre);
  setInputPlaceholder(".dark-search input", text.searchPhotos);
  document.querySelectorAll(".mood-card").forEach((card, index) => {
    const item = text.mood[index];
    if (!item) return;
    setText(".mood-meta strong", item[0], card);
    setText(".mood-meta span", item[1], card);
    setAllText(".tag-row span", item[2], card);
  });

  setText(".network-entry h2", text.findPeople);
  peopleCategoryButtons.forEach((button) => {
    setMixedButtonText(button, getPeopleCategoryLabel(button.dataset.peopleCategory));
  });
  if (peopleRoleLabel) {
    peopleRoleLabel.textContent = getPeopleCategoryLabel(peopleRoleLabel.dataset.category || "Photographers");
  }
  const peopleFilterButtons = document.querySelectorAll(".people-filter");
  setMixedButtonText(peopleFilterButtons[1], text.peopleFilters.near);
  setMixedButtonText(peopleFilterButtons[2], text.peopleFilters.instagram);
  setMixedButtonText(peopleFilterButtons[3], text.genre);
  setMixedButtonText(peopleFilterButtons[4], text.peopleFilters.openTo);
  setMixedButtonText(peopleFilterButtons[5], text.peopleFilters.more);
  setAllText(".profile-card-head p", text.profileMeta);
  document.querySelectorAll(".profile-card-head button").forEach((button) => {
    button.textContent = text.connect;
  });

  setText("#team .status-line", text.team.kicker);
  setText("#team h2", text.team.title);
  setText(".team-lede", text.team.lede);
  setText("#team [data-panel-jump='network']", text.team.action);
  document.querySelectorAll(".team-value-card").forEach((button, index) => {
    const item = text.team.values[index];
    if (!item) return;
    setText(".team-value-copy strong", item.value, button);
    setText(".team-value-copy small", item.line, button);
  });
  setAllText(".team-facts dt", text.team.facts);
  renderTeamProfile(activeTeamIndex);

  setText(".job-board-head h2", text.jobBoard);
  setMixedButtonText(document.querySelector(".post-job-button"), text.postJob);
  document.querySelectorAll(".job-board-tabs button").forEach((button, index) => {
    setMixedButtonText(button, text.jobTabs[index]);
  });
  document.querySelectorAll(".job-board-filters button").forEach((button, index) => {
    setMixedButtonText(button, text.jobFilters[index]);
  });
  setText(".for-you-title", text.forYou);
  document.querySelectorAll(".job-card").forEach((card, index) => {
    const job = text.jobs[index];
    if (!job) return;
    setText(".job-card-top p", job.seeking, card);
    setText(".job-card-top h3", job.title, card);
    setText(".job-card-top strong", job.pay, card);
    setAllText(".job-card-meta span", job.meta, card);
    setText(".job-company h4", job.company, card);
    setText(".job-company p", job.companyMeta, card);
  });

  setText("#submit .section-heading .status-line", text.submitKicker);
  setText("#submit h2", text.submitTitle);
  setText("#submit .section-heading button", text.drafts);
  document.querySelectorAll(".call-card").forEach((card, index) => {
    const call = text.calls[index];
    if (!call) return;
    setText(".status-pill", call[0], card);
    setText("h3", call[1], card);
    setText("p", call[2], card);
    setAllText(".tag-row span", call[3], card);
  });
  setText(".form-head h3", text.formTitle);
  setText(".form-head span", text.draftSaved);
  setAllText(".submission-form label > span", [
    text.workTitleLabel,
    ...text.credits,
    text.statementLabel,
  ]);
  setText(".upload-zone strong", text.uploadTitle);
  setText(".upload-zone span", text.uploadHint);
  setText(".submission-form button[type='submit']", text.submitButton);

  setText(".login-dialog .status-line", text.loginKicker);
  setText("#login-title", text.loginTitle);
  setAllText(".login-dialog label > span", [text.emailLabel, text.passwordLabel]);
  setInputPlaceholder(".login-dialog input[type='email']", text.emailPlaceholder);
  setInputPlaceholder(".login-dialog input[type='password']", text.passwordPlaceholder);
  setText(".login-dialog .primary-button", text.loginButton);
  setText(".dialog-note", text.loginNote);
}

function updateSideNavState(isCollapsed) {
  isSideNavCollapsed = isCollapsed;
  miniShell?.classList.toggle("side-nav-collapsed", isCollapsed);
  sideNav?.classList.toggle("is-collapsed", isCollapsed);

  if (sideCollapseButton) {
    sideCollapseButton.textContent = isCollapsed ? "›" : "‹";
    sideCollapseButton.setAttribute("aria-expanded", String(!isCollapsed));
    sideCollapseButton.setAttribute(
      "aria-label",
      isCollapsed ? copy[activeLanguage].expandNav : copy[activeLanguage].collapseNav,
    );
  }
}

function setMenuOpen(isOpen) {
  document.body.classList.toggle("menu-open", isOpen);
  menuToggle?.setAttribute("aria-expanded", String(isOpen));
}

function activatePanel(panelId) {
  tabButtons.forEach((button) => {
    const isActive = button.dataset.panel === panelId;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  panels.forEach((panel) => {
    const isActive = panel.id === panelId;
    panel.hidden = !isActive;
    panel.classList.toggle("is-visible", isActive);
  });

  const target = document.getElementById(panelId);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  setMenuOpen(false);
}

tabButtons.forEach((button) => {
  button.addEventListener("click", () => activatePanel(button.dataset.panel));
});

jumpButtons.forEach((button) => {
  button.addEventListener("click", () => activatePanel(button.dataset.panelJump));
});

openLoginButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setMenuOpen(false);
    if (typeof loginDialog.showModal === "function") {
      loginDialog.showModal();
    }
  });
});

menuToggle?.addEventListener("click", () => {
  setMenuOpen(!document.body.classList.contains("menu-open"));
});

menuCloseButtons.forEach((button) => {
  button.addEventListener("click", () => setMenuOpen(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuOpen(false);
  }
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const role = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    talentCards.forEach((card) => {
      card.hidden = role !== "all" && card.dataset.role !== role;
    });
  });
});

function showPeopleResults(category) {
  if (!peopleEntry || !peopleResults) {
    return;
  }

  peopleEntry.hidden = true;
  peopleResults.hidden = false;
  if (peopleRoleLabel) {
    peopleRoleLabel.dataset.category = category;
    peopleRoleLabel.textContent = getPeopleCategoryLabel(category);
  }
  peopleResults.scrollIntoView({ behavior: "smooth", block: "start" });
}

peopleCategoryButtons.forEach((button) => {
  button.addEventListener("click", () => showPeopleResults(button.dataset.peopleCategory));
});

peopleBackButton?.addEventListener("click", () => {
  if (!peopleEntry || !peopleResults) {
    return;
  }

  peopleResults.hidden = true;
  peopleEntry.hidden = false;
  peopleEntry.scrollIntoView({ behavior: "smooth", block: "start" });
});

teamButtons.forEach((button) => {
  button.addEventListener("click", () => {
    renderTeamProfile(Number(button.dataset.teamIndex));
  });
});

const jobRows = [...document.querySelectorAll(".job-row")];
const jobDetail = {
  cover: document.querySelector("[data-job-cover]"),
  title: document.querySelector("[data-job-title]"),
  role: document.querySelector("[data-job-role]"),
  place: document.querySelector("[data-job-place]"),
  pay: document.querySelector("[data-job-pay]"),
  requirement: document.querySelector("[data-job-requirement]"),
};

function selectJob(row) {
  jobRows.forEach((item) => {
    const isSelected = item === row;
    item.classList.toggle("is-selected", isSelected);
    item.setAttribute("aria-pressed", String(isSelected));
  });

  if (Object.values(jobDetail).every(Boolean)) {
    jobDetail.cover.className = `detail-cover ${row.dataset.cover}`;
    jobDetail.title.textContent = row.dataset.title;
    jobDetail.role.textContent = row.dataset.role;
    jobDetail.place.textContent = row.dataset.place;
    jobDetail.pay.textContent = row.dataset.pay;
    jobDetail.requirement.textContent = row.dataset.requirement;
  }
}

jobRows.forEach((row) => {
  row.addEventListener("click", () => selectJob(row));
  row.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      selectJob(row);
    }
  });
});

document.querySelector(".submission-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector("button[type='submit']");
  const originalLabel = copy[activeLanguage].submitButton;
  button.textContent = copy[activeLanguage].submitted;
  button.disabled = true;

  window.setTimeout(() => {
    button.textContent = originalLabel;
    button.disabled = false;
  }, 1800);
});

languageToggle?.addEventListener("click", () => {
  applyLanguage(activeLanguage === "zh" ? "en" : "zh");
});

sideCollapseButton?.addEventListener("click", () => {
  updateSideNavState(!isSideNavCollapsed);
});

function updateStatusTime() {
  if (!statusTime) {
    return;
  }

  statusTime.textContent = new Intl.DateTimeFormat([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date());
}

updateStatusTime();
window.setInterval(updateStatusTime, 30000);

applyLanguage(activeLanguage);
