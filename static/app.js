/* ======================================================
   汉字乐园 v2.0 · Chinese Character Wonderland
   参考：洪恩识字 · 玩-认-练-写-测 五步闭环学习
   ====================================================== */

const I18N = {
  zh: {
    appTitle: '汉字乐园', appSub: '玩中学 · 学中玩 · 快乐成长',
    navLearn: '🎓 开始学习', navChars: '📚 汉字库', navStories: '📖 故事屋', navRadicals: '🔤 偏旁部首', navIdioms: '💡 成语学习', navQuiz: '🎯 趣味测验', navProgress: '⭐ 我的进度',
    statLearned: '已学汉字', statTotal: '全部汉字', statStars: '星星', statDays: '学习天数',
    allFilter: '✨ 全部',
    stepPlay: '🎮 玩一玩', stepRecognize: '👀 认一认', stepPractice: '✏️ 练一练', stepWrite: '📝 写一写', stepTest: '🎯 测一测',
    stepPlayDesc: '通过有趣的小游戏认识汉字', stepRecognizeDesc: '看动画，了解汉字的来源', stepPracticeDesc: '跟读拼音，记住发音', stepWriteDesc: '看笔顺，学会写字', stepTestDesc: '做测验，检查学习效果',
    nextStep: '下一步 →', prevStep: '← 上一步', finishStep: '✅ 完成学习',
    originTitle: '字源演变', originDesc: '看看汉字是怎么来的',
    strokeTitle: '笔顺动画', strokeDesc: '跟着动画学写字',
    wordsTitle: '组词练习', storyTitle: '小故事',
    playGame: '开始游戏', listenPinyin: '🔊 听拼音', listenChar: '🎵 读汉字', listenStory: '📢 读故事',
    markLearned: '✅ 我学会了！', unmark: '↩️ 再学学',
    charPageDesc: '👆 点一点汉字卡片，开始五步学习之旅！',
    radicalPageDesc: '偏旁部首是汉字的组成部分，学会偏旁认字更快！',
    idiomPageDesc: '成语是中华文化的精华，每个成语都有故事！',
    storyPageDesc: '每个故事里都藏着今天要学的汉字，一起来读一读吧！',
    quizPageDesc: '挑一个喜欢的题目数量，来挑战一下吧！',
    quizCategory: '题目范围', quizCount: '题目数量', quizStart: '🚀 开始测验',
    quizFromChar: '看汉字 · 选拼音', quizFromPinyin: '听拼音 · 选汉字', quizMix: '🎲 混合模式',
    quizProg: '第 {cur} / {total} 题', quizRight: '✨ 答对啦！真棒！', quizWrong: '😢 没关系，正确答案是：{ans}',
    quizFinishTitle: '🎉 挑战完成', quizRetry: '🔄 再来一次',
    progressPageDesc: '这里记录着你的汉字学习旅程，加油！',
    emptyHistory: '还没有测验记录哦，快去挑战一下吧！',
    clearProgress: '🗑️ 清空进度', confirmClear: '确定要清空所有学习记录吗？',
    loading: '加载中…',
    dailyGoal: '今日目标', dailyProgress: '今日进度', dailyComplete: '已完成今日目标！',
    levelBeginner: '启蒙', levelBasic: '基础', levelIntermediate: '进阶', levelAdvanced: '高级',
    learnPath: '学习路径', chooseLevel: '选择学习等级',
    storyChars: '📌 故事里的汉字',
    radicalChars: '📌 包含此偏旁的汉字',
    idiomChars: '📌 成语里的汉字',
    strokeCount: '笔画数', radicalName: '偏旁',
    gameMatch: '配对游戏', gameFind: '找字游戏', gameOrder: '排序游戏',
    gameMatchDesc: '把汉字和拼音配对起来', gameFindDesc: '在众多汉字中找到目标字', gameOrderDesc: '按正确顺序排列笔画',
    startLearn: '🚀 开始学习', continueLearn: '📖 继续学习',
    welcomeTitle: '欢迎来到汉字乐园！', welcomeDesc: '每天学几个汉字，快乐成长！',
    todayChars: '今日汉字', learnedChars: '已学汉字', newChars: '新汉字',
    reviewChars: '复习汉字', aiCompanion: '小助手川川',
    companionHello: '你好呀！今天我们一起来学汉字吧！',
    companionEncourage: '太棒了！你真聪明！',
    companionHint: '加油！再想想看～',
    companionCelebrate: '🎉 太厉害了！你完成了今天的学习！'
  },
  en: {
    appTitle: 'Wonderland', appSub: 'Play & Learn · Grow Happy',
    navLearn: '🎓 Start Learning', navChars: '📚 Characters', navStories: '📖 Stories', navRadicals: '🔤 Radicals', navIdioms: '💡 Idioms', navQuiz: '🎯 Fun Quiz', navProgress: '⭐ Progress',
    statLearned: 'Learned', statTotal: 'Total', statStars: 'Stars', statDays: 'Days',
    allFilter: '✨ All',
    stepPlay: '🎮 Play', stepRecognize: '👀 Recognize', stepPractice: '✏️ Practice', stepWrite: '📝 Write', stepTest: '🎯 Test',
    stepPlayDesc: 'Learn through fun games', stepRecognizeDesc: 'Watch animation, learn origin', stepPracticeDesc: 'Listen to pinyin, remember sound', stepWriteDesc: 'Watch strokes, learn to write', stepTestDesc: 'Take quiz, check progress',
    nextStep: 'Next →', prevStep: '← Previous', finishStep: '✅ Complete',
    originTitle: 'Character Origin', originDesc: 'See how the character came to be',
    strokeTitle: 'Stroke Animation', strokeDesc: 'Follow animation to write',
    wordsTitle: 'Word Practice', storyTitle: 'Mini Story',
    playGame: 'Start Game', listenPinyin: '🔊 Listen Pinyin', listenChar: '🎵 Say Character', listenStory: '📢 Read Story',
    markLearned: '✅ I learned it!', unmark: '↩️ Practice again',
    charPageDesc: '👆 Tap a character card to start 5-step learning!',
    radicalPageDesc: 'Radicals are building blocks of characters, learn radicals to read faster!',
    idiomPageDesc: 'Idioms are gems of Chinese culture, each has a story!',
    storyPageDesc: 'Each story hides today\'s characters - come read them!',
    quizPageDesc: 'Pick a number of questions and take the challenge!',
    quizCategory: 'Question Type', quizCount: 'Questions', quizStart: '🚀 Start Quiz',
    quizFromChar: 'See character · Pick pinyin', quizFromPinyin: 'Hear pinyin · Pick char', quizMix: '🎲 Mix mode',
    quizProg: 'Question {cur} / {total}', quizRight: '✨ Correct! Amazing!', quizWrong: '😢 No worries. Correct: {ans}',
    quizFinishTitle: '🎉 Challenge Complete', quizRetry: '🔄 Try Again',
    progressPageDesc: 'Here is your Chinese character journey. Keep going!',
    emptyHistory: 'No quiz records yet - go take a challenge!',
    clearProgress: '🗑️ Clear Progress', confirmClear: 'Clear ALL learning records?',
    loading: 'Loading...',
    dailyGoal: 'Daily Goal', dailyProgress: 'Today\'s Progress', dailyComplete: 'Daily goal completed!',
    levelBeginner: 'Beginner', levelBasic: 'Basic', levelIntermediate: 'Intermediate', levelAdvanced: 'Advanced',
    learnPath: 'Learning Path', chooseLevel: 'Choose Level',
    storyChars: '📌 Characters in story',
    radicalChars: '📌 Characters with radical',
    idiomChars: '📌 Characters in idiom',
    strokeCount: 'Strokes', radicalName: 'Radical',
    gameMatch: 'Match Game', gameFind: 'Find Game', gameOrder: 'Order Game',
    gameMatchDesc: 'Match characters with pinyin', gameFindDesc: 'Find target character among many', gameOrderDesc: 'Arrange strokes in correct order',
    startLearn: '🚀 Start Learning', continueLearn: '📖 Continue',
    welcomeTitle: 'Welcome to Wonderland!', welcomeDesc: 'Learn a few characters each day, grow happily!',
    todayChars: 'Today\'s Characters', learnedChars: 'Learned', newChars: 'New',
    reviewChars: 'Review', aiCompanion: 'Assistant Chuan',
    companionHello: 'Hello! Let\'s learn characters together today!',
    companionEncourage: 'Great! You\'re so smart!',
    companionHint: 'Keep going! Think again~',
    companionCelebrate: '🎉 Amazing! You completed today\'s learning!'
  }
};

let DATA = { characters: [], stories: [], categories: [], radicals: [], idioms: [], levels: [] };
let STATE = {
  lang: 'zh', page: 'learn', filter: 'all',
  learn: { char: null, step: 0, steps: ['play', 'recognize', 'practice', 'write', 'test'] },
  quiz: { type: 'fromChar', total: 5, idx: 0, correct: 0, currentQ: null },
  modal: null,
  quizHistory: [],
  learned: new Set(),
  stars: 0,
  days: 0,
  dailyGoal: 6,
  dailyLearned: 0,
  lastDate: null,
  companionMsg: ''
};

/* ---------- 工具 ---------- */
function $(s, r=document) { return r.querySelector(s); }
function $$(s, r=document) { return Array.from(r.querySelectorAll(s)); }
function t(key) { return I18N[STATE.lang][key] || key; }

function speak(text, lang) {
  if (!('speechSynthesis' in window)) return;
  try {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang || (STATE.lang === 'zh' ? 'zh-CN' : 'en-US');
    u.rate = STATE.lang === 'zh' ? 0.85 : 0.9;
    u.pitch = 1.1;
    window.speechSynthesis.speak(u);
  } catch (e) { /* silent */ }
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ---------- 本地存储 ---------- */
function loadState() {
  try {
    const raw = localStorage.getItem('hanziLand_v2');
    if (raw) {
      const p = JSON.parse(raw);
      if (p.learned) STATE.learned = new Set(p.learned);
      if (p.stars != null) STATE.stars = p.stars;
      if (p.days != null) STATE.days = p.days;
      if (p.history) STATE.quizHistory = p.history;
      if (p.lang) STATE.lang = p.lang;
      if (p.dailyGoal) STATE.dailyGoal = p.dailyGoal;
      if (p.lastDate) STATE.lastDate = p.lastDate;
    }
  } catch (e) { /* ignore */ }
  // 检查是否是新的一天
  const today = new Date().toLocaleDateString();
  if (STATE.lastDate !== today) {
    STATE.dailyLearned = 0;
    STATE.lastDate = today;
    STATE.days += 1;
    saveState();
  }
}

function saveState() {
  try {
    const payload = {
      learned: Array.from(STATE.learned),
      stars: STATE.stars,
      days: STATE.days,
      history: STATE.quizHistory.slice(-20),
      lang: STATE.lang,
      dailyGoal: STATE.dailyGoal,
      dailyLearned: STATE.dailyLearned,
      lastDate: STATE.lastDate
    };
    localStorage.setItem('hanziLand_v2', JSON.stringify(payload));
  } catch (e) { /* ignore */ }
}

/* ---------- 数据规范化 ---------- */
function normalizeData(raw) {
  const catMap = new Map();
  const catEmoji = {
    '自然': '🌿', '植物': '🌱', '动物': '🐾', '身体': '🧍',
    '数字': '🔢', '方位': '🧭', '人称': '👨‍👩‍👧', '动作': '🏃',
    '情感': '💗', '食物': '🍎', '颜色': '🎨', '天文': '🌠'
  };
  const catNameEn = {
    '自然': 'Nature', '植物': 'Plants', '动物': 'Animals', '身体': 'Body',
    '数字': 'Numbers', '方位': 'Directions', '人称': 'People', '动作': 'Actions',
    '情感': 'Feelings', '食物': 'Food', '颜色': 'Colors', '天文': 'Sky'
  };

  const characters = (raw.characters || []).map(c => {
    const words = (c.words || []).map(line => {
      const parts = line.split('·').map(s => s.trim());
      const left = parts[0] || '';
      const english = parts[1] || '';
      const m = left.match(/^([\u4e00-\u9fa5]+)\s*(.*)$/);
      if (m) return { word: m[1], pinyin: m[2].trim(), english };
      return { word: left, pinyin: '', english };
    });
    const cid = c.category || '其他';
    if (!catMap.has(cid)) catMap.set(cid, {
      id: cid, name: cid, name_en: catNameEn[cid] || cid,
      emoji: catEmoji[cid] || c.emoji || '🌟'
    });
    return {
      char: c.char, pinyin: c.pinyin || '', english: c.english || '',
      category: cid, category_id: cid,
      emoji: c.emoji || catMap.get(cid).emoji || '🌟',
      strokes: c.strokes || c.stroke_order?.length || 0,
      stroke_order: c.stroke_order || [],
      radical: c.radical || '',
      origin: c.origin || { oracle: '', seal: '', meaning: '' },
      story_cn: c.story_cn || c.story || '',
      story_en: c.story_en || '',
      words
    };
  });

  const stories = (raw.stories || []).map(s => ({
    title: s.title, title_en: s.title_en || s.title,
    emoji: s.emoji || '📖',
    content_cn: s.content_cn || s.content || '',
    content_en: s.content_en || '',
    characters: s.characters || []
  }));

  const radicals = (raw.radicals || []).map(r => ({
    id: r.id, char: r.char, name: r.name, name_en: r.name_en,
    meaning: r.meaning, meaning_en: r.meaning_en,
    examples: r.examples || [], emoji: r.emoji || '🔤'
  }));

  const idioms = (raw.idioms || []).map(i => ({
    id: i.id, idiom: i.idiom, pinyin: i.pinyin,
    meaning: i.meaning, meaning_en: i.meaning_en,
    story: i.story || '', story_en: i.story_en || '',
    chars: i.chars || [], emoji: i.emoji || '💡'
  }));

  const categories = Array.from(catMap.values());
  const levels = raw.levels || [];

  return { characters, stories, categories, radicals, idioms, levels };
}

/* ---------- 顶部栏 & 导航 ---------- */
function renderHeader() {
  const progressPct = Math.min(100, Math.round((STATE.dailyLearned / STATE.dailyGoal) * 100));
  const stats = `
    <span class="stat-pill">📚 ${STATE.learned.size}/${DATA.characters.length}</span>
    <span class="stat-pill star">⭐ ${STATE.stars}</span>
    <span class="stat-pill">📅 ${STATE.days}天</span>
    <button class="lang-btn ${STATE.lang==='zh'?'active':''}" data-lang="zh">中</button>
    <button class="lang-btn ${STATE.lang==='en'?'active':''}" data-lang="en">EN</button>
  `;
  $('#topbar-right').innerHTML = stats;
  $('#logo-title').textContent = t('appTitle');
  $('#logo-sub').textContent = t('appSub');

  $$('#topbar-right .lang-btn').forEach(b => b.onclick = () => {
    STATE.lang = b.dataset.lang;
    saveState();
    renderAll();
  });

  const navs = [
    { id: 'learn',     label: t('navLearn') },
    { id: 'chars',     label: t('navChars') },
    { id: 'radicals',  label: t('navRadicals') },
    { id: 'idioms',    label: t('navIdioms') },
    { id: 'stories',   label: t('navStories') },
    { id: 'quiz',      label: t('navQuiz') },
    { id: 'progress',  label: t('navProgress') }
  ];
  $('#nav-bar').innerHTML = navs.map(n =>
    `<button class="nav-tab ${STATE.page===n.id?'active':''}" data-page="${n.id}">${n.label}</button>`
  ).join('');
  $$('#nav-bar .nav-tab').forEach(b => b.onclick = () => {
    STATE.page = b.dataset.page;
    renderAll();
  });
}

/* ---------- AI 学伴 ---------- */
function showCompanion(msg, type='hello') {
  STATE.companionMsg = msg;
  const companionHtml = `
    <div class="companion-bubble ${type}">
      <div class="companion-avatar">🤖</div>
      <div class="companion-msg">${msg}</div>
    </div>
  `;
  const existing = $('.companion-bubble');
  if (existing) existing.remove();
  $('#page-main').insertAdjacentHTML('beforebegin', companionHtml);
}

/* ---------- 学习主页（五步闭环） ---------- */
function renderLearnPage() {
  $('#page-title').textContent = t('navLearn');
  $('#page-desc').textContent = t('welcomeDesc');

  // 今日进度
  const progressPct = Math.min(100, Math.round((STATE.dailyLearned / STATE.dailyGoal) * 100));
  const isComplete = STATE.dailyLearned >= STATE.dailyGoal;

  // 推荐今日汉字（根据等级）
  const level = DATA.levels?.[0] || { char_indices: [0,1,2,3,4,5] };
  const todayPool = level.char_indices?.map(i => DATA.characters[i]).filter(c => c && !STATE.learned.has(c.char)) || [];
  const reviewPool = shuffle(DATA.characters.filter(c => STATE.learned.has(c.char))).slice(0, 3);

  const html = `
    <div class="learn-home page-enter">
      <!-- 今日进度卡片 -->
      <div class="daily-progress-card ${isComplete?'complete':''}">
        <div class="daily-header">
          <div class="daily-emoji">${isComplete ? '🎉' : '📚'}</div>
          <div class="daily-info">
            <div class="daily-title">${t('dailyProgress')}</div>
            <div class="daily-num">${STATE.dailyLearned} / ${STATE.dailyGoal}</div>
          </div>
        </div>
        <div class="daily-bar">
          <div class="daily-bar-fill" style="width:${progressPct}%"></div>
        </div>
        <div class="daily-status">${isComplete ? t('dailyComplete') : t('todayChars')}</div>
      </div>

      <!-- 今日推荐 -->
      <div class="today-section">
        <h3>${t('newChars')} 🌟</h3>
        <div class="today-chars">
          ${todayPool.slice(0, 6).map(c => `
            <div class="today-char-card" data-char="${c.char}">
              <div class="char-emoji">${c.emoji}</div>
              <div class="char-main">${c.char}</div>
              <div class="char-pinyin">${c.pinyin}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- 复习区 -->
      ${reviewPool.length > 0 ? `
        <div class="review-section">
          <h3>${t('reviewChars')} 🔄</h3>
          <div class="review-chars">
            ${reviewPool.map(c => `
              <div class="review-char-card learned" data-char="${c.char}">
                <div class="char-main">${c.char}</div>
                <div class="char-pinyin">${c.pinyin}</div>
                <div class="check-mark">✓</div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- 学习等级选择 -->
      <div class="level-section">
        <h3>${t('chooseLevel')}</h3>
        <div class="level-cards">
          ${(DATA.levels || []).map(l => `
            <div class="level-card" data-level="${l.id}">
              <div class="level-emoji">${l.id === 'beginner' ? '🐣' : l.id === 'basic' ? '🐥' : l.id === 'intermediate' ? '🦅' : '🏆'}</div>
              <div class="level-name">${STATE.lang === 'zh' ? l.name : l.name_en}</div>
              <div class="level-desc">${STATE.lang === 'zh' ? l.desc : l.desc_en}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  $('#page-main').innerHTML = html;
  showCompanion(t('companionHello'), 'hello');

  // 点击今日汉字开始五步学习
  $$('.today-char-card, .review-char-card').forEach(el => el.onclick = () => {
    const char = DATA.characters.find(c => c.char === el.dataset.char);
    if (char) startFiveStep(char);
  });
}

/* ---------- 五步闭环学习 ---------- */
function startFiveSteps(char) {
  STATE.learn = { char, step: 0, steps: ['play', 'recognize', 'practice', 'write', 'test'] };
  renderFiveStepPage();
}

function renderFiveStepPage() {
  const { char, step, steps } = STATE.learn;
  if (!char) return renderLearnPage();

  const currentStep = steps[step];
  const stepNames = {
    play: t('stepPlay'),
    recognize: t('stepRecognize'),
    practice: t('stepPractice'),
    write: t('stepWrite'),
    test: t('stepTest')
  };
  const stepDescs = {
    play: t('stepPlayDesc'),
    recognize: t('stepRecognizeDesc'),
    practice: t('stepPracticeDesc'),
    write: t('stepWriteDesc'),
    test: t('stepTestDesc')
  };

  // 进度条
  const progressPct = Math.round((step / 5) * 100);

  let contentHtml = '';
  switch (currentStep) {
    case 'play':
      contentHtml = renderPlayStep(char);
      break;
    case 'recognize':
      contentHtml = renderRecognizeStep(char);
      break;
    case 'practice':
      contentHtml = renderPracticeStep(char);
      break;
    case 'write':
      contentHtml = renderWriteStep(char);
      break;
    case 'test':
      contentHtml = renderTestStep(char);
      break;
  }

  const html = `
    <div class="five-step-page page-enter">
      <!-- 步骤进度 -->
      <div class="step-progress">
        <div class="step-bar">
          <div class="step-bar-fill" style="width:${progressPct}%"></div>
        </div>
        <div class="step-indicators">
          ${steps.map((s, i) => `
            <div class="step-indicator ${i <= step ? 'active' : ''} ${i === step ? 'current' : ''}">
              <span class="step-num">${i + 1}</span>
              <span class="step-label">${stepNames[s]}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- 当前汉字展示 -->
      <div class="current-char-hero">
        <div class="hero-emoji">${char.emoji}</div>
        <div class="hero-char">${char.char}</div>
        <div class="hero-pinyin">${char.pinyin}</div>
        <div class="hero-english">${char.english}</div>
      </div>

      <!-- 步骤描述 -->
      <div class="step-desc">${stepDescs[currentStep]}</div>

      <!-- 步骤内容 -->
      <div class="step-content" id="step-content">
        ${contentHtml}
      </div>

      <!-- 导航按钮 -->
      <div class="step-nav">
        ${step > 0 ? `<button class="btn btn-outline" id="prev-step">${t('prevStep')}</button>` : ''}
        ${step < 4 ? `<button class="btn btn-primary" id="next-step">${t('nextStep')}</button>` : `<button class="btn btn-success" id="finish-learn">${t('finishStep')}</button>`}
      </div>
    </div>
  `;

  $('#page-main').innerHTML = html;

  // 绑定按钮
  if ($('#prev-step')) $('#prev-step').onclick = () => { STATE.learn.step -= 1; renderFiveStepPage(); };
  if ($('#next-step')) $('#next-step').onclick = () => { STATE.learn.step += 1; renderFiveStepPage(); };
  if ($('#finish-learn')) $('#finish-learn').onclick = () => finishLearning();
}

/* ---------- 步骤 1: 玩一玩（小游戏） ---------- */
function renderPlayStep(char) {
  // 简单的配对游戏
  const distractors = shuffle(DATA.characters.filter(c => c.char !== char.char)).slice(0, 3);
  const options = shuffle([char, ...distractors]);

  return `
    <div class="play-game">
      <h3>${t('gameMatch')}</h3>
      <p>${t('gameMatchDesc')}</p>
      <div class="match-target">
        <div class="target-pinyin">${char.pinyin}</div>
        <div class="target-hint">${STATE.lang === 'zh' ? '找到这个拼音对应的汉字！' : 'Find the character for this pinyin!'}</div>
      </div>
      <div class="match-options">
        ${options.map(c => `
          <div class="match-option" data-char="${c.char}" data-correct="${c.char === char.char}">
            <div class="opt-emoji">${c.emoji}</div>
            <div class="opt-char">${c.char}</div>
          </div>
        `).join('')}
      </div>
      <div id="play-feedback"></div>
    </div>
  `;
}

// 配对游戏点击处理（在 renderFiveStepPage 后绑定）
function bindPlayGame() {
  $$('.match-option').forEach(el => el.onclick = () => {
    const correct = el.dataset.correct === 'true';
    if (correct) {
      el.classList.add('correct');
      $('#play-feedback').innerHTML = `<div class="game-feedback success">${t('companionEncourage')}</div>`;
      showCompanion(t('companionEncourage'), 'encourage');
      speak(STATE.learn.char.char, 'zh-CN');
    } else {
      el.classList.add('wrong');
      $('#play-feedback').innerHTML = `<div class="game-feedback fail">${t('companionHint')}</div>`;
      showCompanion(t('companionHint'), 'hint');
    }
  });
}

/* ---------- 步骤 2: 认一认（字源演变） ---------- */
function renderRecognizeStep(char) {
  const origin = char.origin || {};
  return `
    <div class="recognize-origin">
      <h3>${t('originTitle')}</h3>
      <p>${t('originDesc')}</p>
      <div class="origin-evolution">
        <div class="origin-stage">
          <div class="origin-label">${STATE.lang === 'zh' ? '甲骨文' : 'Oracle'}</div>
          <div class="origin-char oracle">${origin.oracle || char.char}</div>
        </div>
        <div class="origin-arrow">→</div>
        <div class="origin-stage">
          <div class="origin-label">${STATE.lang === 'zh' ? '小篆' : 'Seal'}</div>
          <div class="origin-char seal">${origin.seal || char.char}</div>
        </div>
        <div class="origin-arrow">→</div>
        <div class="origin-stage">
          <div class="origin-label">${STATE.lang === 'zh' ? '楷书' : 'Modern'}</div>
          <div class="origin-char modern">${char.char}</div>
        </div>
      </div>
      <div class="origin-meaning">
        <div class="meaning-icon">💡</div>
        <div class="meaning-text">${origin.meaning || (STATE.lang === 'zh' ? '这个汉字有悠久的历史' : 'This character has a long history')}</div>
      </div>
      <button class="btn btn-primary" onclick="speak('${char.char}','zh-CN')">${t('listenChar')}</button>
    </div>
  `;
}

/* ---------- 步骤 3: 练一练（跟读拼音） ---------- */
function renderPracticeStep(char) {
  return `
    <div class="practice-pinyin">
      <h3>${t('wordsTitle')}</h3>
      <div class="practice-main">
        <div class="practice-char">${char.char}</div>
        <div class="practice-pinyin-big">${char.pinyin}</div>
      </div>
      <div class="practice-actions">
        <button class="btn btn-primary btn-large" onclick="speak('${char.char}','zh-CN')">${t('listenChar')}</button>
        <button class="btn btn-primary btn-large" onclick="speak('${char.pinyin}','zh-CN')">${t('listenPinyin')}</button>
      </div>
      <div class="practice-words">
        ${(char.words || []).slice(0, 4).map(w => `
          <div class="practice-word" onclick="speak('${w.word}','zh-CN')">
            <div class="word-text">${w.word}</div>
            <div class="word-pinyin">${w.pinyin}</div>
            <div class="word-english">${w.english}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

/* ---------- 步骤 4: 写一写（笔顺动画） ---------- */
function renderWriteStep(char) {
  const strokes = char.stroke_order || [];
  const strokeCount = char.strokes || strokes.length;
  return `
    <div class="write-strokes">
      <h3>${t('strokeTitle')}</h3>
      <p>${t('strokeDesc')}</p>
      <div class="stroke-info">
        <span class="stroke-count">${t('strokeCount')}: ${strokeCount}</span>
        ${char.radical ? `<span class="stroke-radical">${t('radicalName')}: ${char.radical}</span>` : ''}
      </div>
      <div class="stroke-animation">
        <div class="stroke-grid">
          <div class="stroke-char" id="stroke-char">${char.char}</div>
        </div>
        <div class="stroke-controls">
          <button class="btn btn-primary" id="play-stroke">▶️ 播放动画</button>
          <button class="btn btn-outline" id="reset-stroke">🔄 重置</button>
        </div>
      </div>
      <div class="stroke-list">
        ${strokes.map((s, i) => `<span class="stroke-item">${i + 1}. ${s}</span>`).join('')}
      </div>
      <button class="btn btn-primary" onclick="speak('${char.char}','zh-CN')">${t('listenChar')}</button>
    </div>
  `;
}

/* ---------- 步骤 5: 测一测（小测验） ---------- */
function renderTestStep(char) {
  const distractors = shuffle(DATA.characters.filter(c => c.char !== char.char)).slice(0, 3);
  const options = shuffle([char.pinyin, ...distractors.map(c => c.pinyin)]);
  STATE.learn.testOptions = options.map(o => ({ text: o, correct: o === char.pinyin }));

  return `
    <div class="test-quiz">
      <h3>${t('stepTest')}</h3>
      <div class="test-question">
        <div class="test-char">${char.char}</div>
        <div class="test-hint">${STATE.lang === 'zh' ? '选择正确的拼音' : 'Choose correct pinyin'}</div>
      </div>
      <div class="test-options">
        ${STATE.learn.testOptions.map((o, i) => `
          <div class="test-option" data-i="${i}">
            <div class="opt-text">${o.text}</div>
          </div>
        `).join('')}
      </div>
      <div id="test-feedback"></div>
    </div>
  `;
}

function bindTestQuiz() {
  $$('.test-option').forEach(el => el.onclick = () => {
    const i = parseInt(el.dataset.i, 10);
    const chosen = STATE.learn.testOptions[i];
    if (chosen.correct) {
      el.classList.add('correct');
      $('#test-feedback').innerHTML = `<div class="test-feedback success">${t('quizRight')}</div>`;
      showCompanion(t('companionEncourage'), 'encourage');
    } else {
      el.classList.add('wrong');
      $$('.test-option').forEach((opt, j) => {
        if (STATE.learn.testOptions[j].correct) opt.classList.add('correct');
      });
      $('#test-feedback').innerHTML = `<div class="test-feedback fail">${t('quizWrong').replace('{ans}', STATE.learn.char.pinyin)}</div>`;
    }
  });
}

/* ---------- 完成学习 ---------- */
function finishLearning() {
  const char = STATE.learn.char;
  if (!STATE.learned.has(char.char)) {
    STATE.learned.add(char.char);
    STATE.stars += 5;
    STATE.dailyLearned += 1;
  }
  saveState();
  showCompanion(t('companionCelebrate'), 'celebrate');
  renderHeader();
  renderLearnPage();
}

/* ---------- 汉字库页面 ---------- */
function renderCharsPage() {
  $('#page-title').textContent = t('navChars');
  $('#page-desc').textContent = t('charPageDesc');

  const cats = [{id:'all', emoji:'✨', name: t('allFilter')}, ...DATA.categories];
  const filterBar = cats.map(c =>
    `<button class="filter-chip ${STATE.filter===c.id?'active':''}" data-cat="${c.id}">${c.emoji} ${STATE.lang==='zh'?c.name:c.name_en||c.name}</button>`
  ).join('');
  $('#filter-bar').innerHTML = `<div class="filter-bar">${filterBar}</div>`;
  $$('.filter-chip').forEach(b => b.onclick = () => { STATE.filter = b.dataset.cat; renderCharsPage(); });

  const chars = STATE.filter === 'all'
    ? DATA.characters
    : DATA.characters.filter(c => c.category === STATE.filter || c.category_id === STATE.filter);

  const cards = chars.map(c => {
    const learned = STATE.learned.has(c.char);
    return `<div class="char-card ${learned?'learned':''}" data-char="${c.char}">
      ${learned ? '<div class="check-mark">✓</div>' : ''}
      <div class="cat-tag">${c.emoji}</div>
      <div class="char-illus" data-emoji="${c.emoji}">${c.char}</div>
      <div class="pinyin">${c.pinyin}</div>
      <div class="english">${c.english}</div>
    </div>`;
  }).join('');

  $('#page-main').innerHTML = `<div class="char-grid page-enter">${cards}</div>`;
  $$('.char-card').forEach(el => el.onclick = () => {
    const char = DATA.characters.find(c => c.char === el.dataset.char);
    if (char) startFiveSteps(char);
  });
}

/* ---------- 偏旁部首页面 ---------- */
function renderRadicalsPage() {
  $('#page-title').textContent = t('navRadicals');
  $('#page-desc').textContent = t('radicalPageDesc');
  $('#filter-bar').innerHTML = '';

  const cards = DATA.radicals.map(r => `
    <div class="radical-card" data-radical="${r.id}">
      <div class="radical-emoji">${r.emoji}</div>
      <div class="radical-char">${r.char}</div>
      <div class="radical-name">${STATE.lang === 'zh' ? r.name : r.name_en}</div>
      <div class="radical-meaning">${STATE.lang === 'zh' ? r.meaning : r.meaning_en}</div>
      <div class="radical-examples">
        ${(r.examples || []).slice(0, 6).map(c => `<span class="radical-example-char">${c}</span>`).join('')}
      </div>
    </div>
  `).join('');

  $('#page-main').innerHTML = `<div class="radicals-grid page-enter">${cards}</div>`;
  $$('.radical-card').forEach(el => el.onclick = () => openRadicalModal(el.dataset.radical));
}

function openRadicalModal(rid) {
  const r = DATA.radicals.find(x => x.id === rid);
  if (!r) return;
  const chars = (r.examples || []).map(c => DATA.characters.find(x => x.char === c)).filter(Boolean);

  const html = `
    <div class="modal-mask" id="modal-mask">
      <div class="modal">
        <button class="modal-close" id="modal-close">✕</button>
        <div class="modal-hero">
          <div class="radical-hero-emoji">${r.emoji}</div>
          <div class="radical-hero-char">${r.char}</div>
          <div class="radical-hero-name">${STATE.lang === 'zh' ? r.name : r.name_en}</div>
        </div>
        <div class="modal-body">
          <div class="detail-section">
            <h3>${t('radicalChars')}</h3>
            <div class="radical-modal-chars">
              ${chars.map(c => `
                <div class="radical-modal-char" data-char="${c.char}">
                  <div class="char-emoji">${c.emoji}</div>
                  <div class="char-main">${c.char}</div>
                  <div class="char-pinyin">${c.pinyin}</div>
                </div>
              `).join('')}
            </div>
          </div>
          <div class="detail-section">
            <h3>💡 ${STATE.lang === 'zh' ? '含义' : 'Meaning'}</h3>
            <div class="story-box">${STATE.lang === 'zh' ? r.meaning : r.meaning_en}</div>
          </div>
        </div>
      </div>
    </div>
  `;
  const wrap = document.createElement('div');
  wrap.innerHTML = html;
  document.body.appendChild(wrap);
  $('#modal-mask').onclick = e => { if (e.target.id === 'modal-mask') closeModal(); };
  $('#modal-close').onclick = closeModal;
  $$('.radical-modal-char').forEach(el => el.onclick = () => {
    const char = DATA.characters.find(c => c.char === el.dataset.char);
    if (char) { closeModal(); startFiveSteps(char); }
  });
}

/* ---------- 成语学习页面 ---------- */
function renderIdiomsPage() {
  $('#page-title').textContent = t('navIdioms');
  $('#page-desc').textContent = t('idiomPageDesc');
  $('#filter-bar').innerHTML = '';

  const cards = DATA.idioms.map(i => `
    <div class="idiom-card" data-idiom="${i.id}">
      <div class="idiom-emoji">${i.emoji}</div>
      <div class="idiom-text">${i.idiom}</div>
      <div class="idiom-pinyin">${i.pinyin}</div>
      <div class="idiom-meaning">${STATE.lang === 'zh' ? i.meaning : i.meaning_en}</div>
      <div class="idiom-chars">
        ${(i.chars || []).map(c => `<span class="idiom-char">${c}</span>`).join('')}
      </div>
    </div>
  `).join('');

  $('#page-main').innerHTML = `<div class="idioms-grid page-enter">${cards}</div>`;
  $$('.idiom-card').forEach(el => el.onclick = () => openIdiomModal(el.dataset.idiom));
}

function openIdiomModal(iid) {
  const i = DATA.idioms.find(x => x.id === iid);
  if (!i) return;
  const chars = (i.chars || []).map(c => DATA.characters.find(x => x.char === c)).filter(Boolean);

  const html = `
    <div class="modal-mask" id="modal-mask">
      <div class="modal">
        <button class="modal-close" id="modal-close">✕</button>
        <div class="modal-hero">
          <div class="idiom-hero-emoji">${i.emoji}</div>
          <div class="idiom-hero-text">${i.idiom}</div>
          <div class="idiom-hero-pinyin">${i.pinyin}</div>
          <button class="btn btn-primary" onclick="speak('${i.idiom}','zh-CN')">📢 ${t('listenStory')}</button>
        </div>
        <div class="modal-body">
          <div class="detail-section">
            <h3>💡 ${STATE.lang === 'zh' ? '含义' : 'Meaning'}</h3>
            <div class="story-box">${STATE.lang === 'zh' ? i.meaning : i.meaning_en}</div>
          </div>
          <div class="detail-section">
            <h3>📖 ${STATE.lang === 'zh' ? '故事' : 'Story'}</h3>
            <div class="story-box">${STATE.lang === 'zh' ? i.story : i.story_en}</div>
          </div>
          <div class="detail-section">
            <h3>${t('idiomChars')}</h3>
            <div class="idiom-modal-chars">
              ${chars.map(c => `
                <div class="idiom-modal-char" data-char="${c.char}">
                  <div class="char-emoji">${c.emoji}</div>
                  <div class="char-main">${c.char}</div>
                  <div class="char-pinyin">${c.pinyin}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  const wrap = document.createElement('div');
  wrap.innerHTML = html;
  document.body.appendChild(wrap);
  $('#modal-mask').onclick = e => { if (e.target.id === 'modal-mask') closeModal(); };
  $('#modal-close').onclick = closeModal;
  $$('.idiom-modal-char').forEach(el => el.onclick = () => {
    const char = DATA.characters.find(c => c.char === el.dataset.char);
    if (char) { closeModal(); startFiveSteps(char); }
  });
}

/* ---------- 故事页面 ---------- */
function renderStoriesPage() {
  $('#page-title').textContent = t('navStories');
  $('#page-desc').textContent = t('storyPageDesc');
  $('#filter-bar').innerHTML = '';

  const cards = DATA.stories.map(s => `
    <div class="story-card" data-story="${s.id}">
      <div class="story-emoji">${s.emoji}</div>
      <div class="story-title">${STATE.lang === 'zh' ? s.title : s.title_en}</div>
      <div class="story-preview">${(STATE.lang === 'zh' ? s.content_cn : s.content_en).slice(0, 80)}…</div>
      <div class="story-chars">${(s.characters || []).slice(0, 6).map(c => `<span class="story-mini-char">${c}</span>`).join('')}</div>
    </div>
  `).join('');

  $('#page-main').innerHTML = `<div class="stories-grid page-enter">${cards}</div>`;
  $$('.story-card').forEach(el => el.onclick = () => openStoryModal(el.dataset.story));
}

function openStoryModal(sid) {
  const s = DATA.stories.find(x => x.id === sid);
  if (!s) return;
  const chars = (s.characters || []).map(c => DATA.characters.find(x => x.char === c)).filter(Boolean);

  const html = `
    <div class="modal-mask" id="modal-mask">
      <div class="modal">
        <button class="modal-close" id="modal-close">✕</button>
        <div class="modal-hero">
          <div class="story-hero-emoji">${s.emoji}</div>
          <div class="story-hero-title">${STATE.lang === 'zh' ? s.title : s.title_en}</div>
          <button class="btn btn-primary" onclick="speak('${STATE.lang === 'zh' ? s.content_cn : s.content_en}','zh-CN')">📢 ${t('listenStory')}</button>
        </div>
        <div class="modal-body">
          <div class="detail-section">
            <h3>📖 ${STATE.lang === 'zh' ? '故事内容' : 'Story'}</h3>
            <div class="story-box">${STATE.lang === 'zh' ? s.content_cn : s.content_en}</div>
          </div>
          <div class="detail-section">
            <h3>${t('storyChars')}</h3>
            <div class="story-modal-chars">
              ${chars.map(c => `
                <div class="story-modal-char" data-char="${c.char}">
                  <div class="char-emoji">${c.emoji}</div>
                  <div class="char-main">${c.char}</div>
                  <div class="char-pinyin">${c.pinyin}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  const wrap = document.createElement('div');
  wrap.innerHTML = html;
  document.body.appendChild(wrap);
  $('#modal-mask').onclick = e => { if (e.target.id === 'modal-mask') closeModal(); };
  $('#modal-close').onclick = closeModal;
  $$('.story-modal-char').forEach(el => el.onclick = () => {
    const char = DATA.characters.find(c => c.char === el.dataset.char);
    if (char) { closeModal(); startFiveSteps(char); }
  });
}

/* ---------- 测验页面 ---------- */
function renderQuizPage() {
  $('#page-title').textContent = t('navQuiz');
  $('#page-desc').textContent = t('quizPageDesc');
  $('#filter-bar').innerHTML = '';

  const catOpts = [{id:'all', name:'✨ '+t('allFilter')}, ...DATA.categories].map(c =>
    `<option value="${c.id}">${c.emoji || '🌟'} ${STATE.lang==='zh'?c.name:c.name_en||c.name}</option>`
  ).join('');

  $('#page-main').innerHTML = `
    <div class="page-enter">
      <div class="quiz-control">
        <select id="qc-cat">${catOpts}</select>
        <select id="qc-type">
          <option value="fromChar">${t('quizFromChar')}</option>
          <option value="fromPinyin">${t('quizFromPinyin')}</option>
          <option value="mix">${t('quizMix')}</option>
        </select>
        <select id="qc-count">${[5,10,15,20].map(n => `<option value="${n}">${n}</option>`).join('')}</select>
        <button class="btn btn-success" id="qc-start">${t('quizStart')}</button>
      </div>
      <div id="quiz-area"></div>
    </div>
  `;
  $('#qc-start').onclick = startQuiz;
}

function startQuiz() {
  const cat = $('#qc-cat').value;
  const type = $('#qc-type').value;
  const total = parseInt($('#qc-count').value, 10);
  let pool = cat === 'all' ? DATA.characters.slice() : DATA.characters.filter(c => c.category === cat || c.category_id === cat);
  pool = shuffle(pool).slice(0, Math.min(total, pool.length));
  STATE.quiz = { type, total: pool.length, idx: 0, correct: 0, pool, answered: false };
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const q = STATE.quiz;
  if (q.idx >= q.total) return renderQuizFinal();

  const cur = q.pool[q.idx];
  const type = q.type === 'mix' ? (Math.random() < 0.5 ? 'fromChar' : 'fromPinyin') : q.type;

  let promptHtml = '';
  let options = [];

  if (type === 'fromChar') {
    promptHtml = `<div class="q-big">${cur.char}</div>
                  <button class="btn btn-primary" onclick="speak('${cur.char}','zh-CN')">🔊 ${t('listenChar')}</button>
                  <div class="q-hint">${STATE.lang === 'zh' ? '选择正确的拼音' : 'Choose correct pinyin'}</div>`;
    const distractors = shuffle(DATA.characters.filter(c => c.char !== cur.char)).slice(0, 3).map(c => c.pinyin);
    options = shuffle([cur.pinyin, ...distractors]);
    STATE.quiz.currentOpts = options.map(o => ({text: o, correct: o === cur.pinyin}));
  } else {
    promptHtml = `<div class="q-pinyin">${cur.pinyin}</div>
                  <button class="btn btn-primary" onclick="speak('${cur.char}','zh-CN')">🔊 ${t('listenChar')}</button>
                  <div class="q-hint">${STATE.lang === 'zh' ? '选择正确的汉字' : 'Choose correct character'}</div>`;
    const distractors = shuffle(DATA.characters.filter(c => c.char !== cur.char)).slice(0, 3).map(c => c.char);
    options = shuffle([cur.char, ...distractors]);
    STATE.quiz.currentOpts = options.map(o => ({text: o, correct: o === cur.char}));
  }

  const pct = Math.round((q.idx / q.total) * 100);
  $('#quiz-area').innerHTML = `
    <div class="quiz-box page-enter">
      <div class="quiz-progress-bar"><span style="width:${pct}%"></span></div>
      <div class="quiz-progress-text">${t('quizProg').replace('{cur}', q.idx+1).replace('{total}', q.total)} · ✨ ${q.correct}</div>
      <div class="quiz-q-box">${promptHtml}</div>
      <div class="quiz-options">
        ${STATE.quiz.currentOpts.map((o, i) => `
          <div class="opt-card" data-i="${i}">
            <div>${o.text}</div>
          </div>
        `).join('')}
      </div>
      <div id="quiz-feedback"></div>
    </div>
  `;
  setTimeout(() => speak(cur.char, 'zh-CN'), 200);
  $$('.opt-card').forEach(el => el.onclick = () => handleQuizAnswer(el));
}

function handleQuizAnswer(el) {
  if (STATE.quiz.answered) return;
  STATE.quiz.answered = true;
  const i = parseInt(el.dataset.i, 10);
  const chosen = STATE.quiz.currentOpts[i];
  const correct = STATE.quiz.currentOpts.find(o => o.correct);

  $$('.opt-card').forEach((card, j) => {
    if (STATE.quiz.currentOpts[j].correct) card.classList.add('correct');
    else if (j === i) card.classList.add('wrong');
  });

  if (chosen.correct) {
    STATE.quiz.correct += 1;
    STATE.stars += 2;
    $('#quiz-feedback').innerHTML = `<div class="quiz-feedback success">${t('quizRight')} +2 ⭐</div>`;
    showCompanion(t('companionEncourage'), 'encourage');
  } else {
    $('#quiz-feedback').innerHTML = `<div class="quiz-feedback fail">${t('quizWrong').replace('{ans}', correct.text)}</div>`;
  }
  saveState();
  renderHeader();
  setTimeout(() => { STATE.quiz.idx += 1; STATE.quiz.answered = false; renderQuizQuestion(); }, 1400);
}

function renderQuizFinal() {
  const q = STATE.quiz;
  const pct = Math.round((q.correct / q.total) * 100);
  STATE.quizHistory.push({
    date: new Date().toLocaleString(STATE.lang==='zh'?'zh-CN':'en-US', {month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit'}),
    correct: q.correct, total: q.total, pct
  });
  saveState();

  $('#quiz-area').innerHTML = `
    <div class="quiz-box page-enter">
      <div class="quiz-final">
        <div class="score-circle"><div class="num">${q.correct}/${q.total}</div><div class="pct">${pct}%</div></div>
        <h2>${t('quizFinishTitle')}</h2>
        <p>✨ 获得 ${q.correct * 2} ⭐ · 总星数 ${STATE.stars}</p>
        <button class="btn btn-success" id="btn-retry">${t('quizRetry')}</button>
      </div>
    </div>
  `;
  $('#btn-retry').onclick = () => { STATE.quiz = {type:q.type,total:5,idx:0,correct:0,currentQ:null}; renderQuizPage(); };
  showCompanion(t('companionCelebrate'), 'celebrate');
}

/* ---------- 进度页面 ---------- */
function renderProgressPage() {
  $('#page-title').textContent = t('navProgress');
  $('#page-desc').textContent = t('progressPageDesc');
  $('#filter-bar').innerHTML = '';

  const pct = DATA.characters.length ? Math.round((STATE.learned.size / DATA.characters.length) * 100) : 0;
  const history = STATE.quizHistory.slice().reverse();

  const boxes = `
    <div class="progress-boxes">
      <div class="progress-box"><div class="emoji">📚</div><div class="num">${STATE.learned.size}</div><div class="cap">${t('statLearned')}</div></div>
      <div class="progress-box"><div class="emoji">🀄</div><div class="num">${DATA.characters.length}</div><div class="cap">${t('statTotal')}</div></div>
      <div class="progress-box"><div class="emoji">⭐</div><div class="num">${STATE.stars}</div><div class="cap">${t('statStars')}</div></div>
      <div class="progress-box"><div class="emoji">📅</div><div class="num">${STATE.days}</div><div class="cap">${t('statDays')}</div></div>
      <div class="progress-box"><div class="emoji">📈</div><div class="num">${pct}%</div><div class="cap">${STATE.lang==='zh'?'完成度':'Progress'}</div></div>
    </div>
  `;

  const recent = history.length === 0
    ? `<div class="empty-history">${t('emptyHistory')}</div>`
    : `<div class="history-section"><h3>📅 ${STATE.lang==='zh'?'最近测验':'Recent Quizzes'}</h3>
       <div class="history-list">${history.map(h => `<div class="history-item"><span>${h.date}</span><span class="score">${h.correct}/${h.total} (${h.pct}%)</span></div>`).join('')}</div></div>`;

  $('#page-main').innerHTML = `<div class="page-enter">${boxes}${recent}<div style="text-align:center;margin-top:24px"><button class="btn btn-danger" id="btn-clear">${t('clearProgress')}</button></div></div>`;
  $('#btn-clear').onclick = () => {
    if (confirm(t('confirmClear'))) {
      STATE.learned = new Set();
      STATE.stars = 0;
      STATE.quizHistory = [];
      STATE.days = 0;
      STATE.dailyLearned = 0;
      saveState();
      renderAll();
    }
  };
}

/* ---------- 整体渲染 ---------- */
function renderAll() {
  renderHeader();
  closeModal();
  const companion = $('.companion-bubble');
  if (companion) companion.remove();

  switch (STATE.page) {
    case 'learn':     renderLearnPage(); break;
    case 'chars':     renderCharsPage(); break;
    case 'radicals':  renderRadicalsPage(); break;
    case 'idioms':    renderIdiomsPage(); break;
    case 'stories':   renderStoriesPage(); break;
    case 'quiz':      renderQuizPage(); break;
    case 'progress':  renderProgressPage(); break;
    default:          renderLearnPage();
  }

  // 绑定五步学习中的游戏
  if (STATE.page === 'learn' && STATE.learn.char) {
    const step = STATE.learn.steps[STATE.learn.step];
    if (step === 'play') bindPlayGame();
    if (step === 'test') bindTestQuiz();
  }
}

function closeModal() {
  const m = document.querySelector('.modal-mask');
  if (m) m.remove();
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
}

/* ---------- 启动 ---------- */
async function init() {
  try {
    const raw = localStorage.getItem('hanziLand_v2');
    if (raw) {
      const p = JSON.parse(raw);
      if (p.lang) STATE.lang = p.lang;
    }
  } catch (e) { /* ignore */ }

  let rawData = null;
  if (window.HANZI_DATA && window.HANZI_DATA.characters) rawData = window.HANZI_DATA;
  else {
    try {
      const r = await fetch('data.json');
      if (r.ok) rawData = await r.json();
    } catch (e) { /* ignore */ }
  }

  if (!rawData) {
    $('#page-main').innerHTML = `<div class="loading-error"><div class="loading-emoji">🤔</div><div class="loading-text">${t('loading')}</div></div>`;
    return;
  }

  DATA = normalizeData(rawData);
  loadState();
  renderAll();
}

document.addEventListener('DOMContentLoaded', init);
window.speak = speak;