/* ======================================================
   汉字乐园 · Chinese Character Wonderland · Logic
   ====================================================== */

const I18N = {
  zh: {
    appTitle: '汉字乐园', appSub: '学汉字 · 听故事 · 快乐成长',
    navChars: '📚 学汉字', navStories: '📖 故事屋', navQuiz: '🎯 趣味测验', navProgress: '⭐ 我的进度',
    statLearned: '已学汉字', statTotal: '全部汉字', statStars: '星星', statTests: '测验次数',
    allFilter: '✨ 全部', charPageDesc: '👆 点一点每个汉字，听发音、看笔画、学组词！',
    pronBtn: '🔊 朗读拼音', pronChar: '🎵 读汉字', pronStory: '📢 朗读故事',
    strokeTitle: '✏️ 笔画顺序', storyTitle: '📖 小故事', wordsTitle: '🔤 组个词',
    markLearned: '✅ 我学会啦', unmark: '↩️ 再学学',
    storyPageDesc: '每个故事里都藏着今天要学的汉字，一起来读一读吧！',
    readStory: '📖 阅读故事',
    quizPageDesc: '挑一个喜欢的题目数量，来挑战一下吧！',
    quizCategory: '题目范围', quizCount: '题目数量', quizStart: '🚀 开始测验',
    quizFromChar: '看汉字 · 选拼音', quizFromPinyin: '听拼音 · 选汉字', quizMix: '🎲 混合模式',
    quizProg: '第 {cur} / {total} 题', quizRight: '✨ 答对啦！真棒！', quizWrong: '😢 没关系，正确答案是：{ans}',
    quizFinishTitle: '🎉 挑战完成', quizRetry: '🔄 再来一次',
    progressPageDesc: '这里记录着你的汉字学习旅程，加油！',
    emptyHistory: '还没有测验记录哦，快去挑战一下吧！',
    clearProgress: '🗑️ 清空进度', confirmClear: '确定要清空所有学习记录吗？',
    loading: '加载中…',
    pronHint: '点一点下面的选项，选出正确的拼音吧！',
    charHint: '听一听，选一选正确的汉字！',
    mixHint: '认真思考，选择正确答案！',
    storyChars: '📌 故事里的汉字'
  },
  en: {
    appTitle: 'Wonderland', appSub: 'Learn Chinese · Fun Stories · Grow Happy',
    navChars: '📚 Characters', navStories: '📖 Stories', navQuiz: '🎯 Fun Quiz', navProgress: '⭐ Progress',
    statLearned: 'Learned', statTotal: 'Total', statStars: 'Stars', statTests: 'Tests',
    allFilter: '✨ All', charPageDesc: '👆 Tap a character to hear it, see strokes, and learn words!',
    pronBtn: '🔊 Say Pinyin', pronChar: '🎵 Say Character', pronStory: '📢 Read Story',
    strokeTitle: '✏️ Strokes', storyTitle: '📖 Mini Story', wordsTitle: '🔤 Words',
    markLearned: '✅ I learned it!', unmark: '↩️ Practice again',
    storyPageDesc: 'Each story hides today\'s characters - come read them!',
    readStory: '📖 Read Story',
    quizPageDesc: 'Pick a number of questions and take the challenge!',
    quizCategory: 'Question Type', quizCount: 'Questions', quizStart: '🚀 Start Quiz',
    quizFromChar: 'See character · Pick pinyin', quizFromPinyin: 'Hear pinyin · Pick char', quizMix: '🎲 Mix mode',
    quizProg: 'Question {cur} / {total}', quizRight: '✨ Correct! Amazing!', quizWrong: '😢 No worries. Correct: {ans}',
    quizFinishTitle: '🎉 Challenge Complete', quizRetry: '🔄 Try Again',
    progressPageDesc: 'Here is your Chinese character journey. Keep going!',
    emptyHistory: 'No quiz records yet - go take a challenge!',
    clearProgress: '🗑️ Clear Progress', confirmClear: 'Clear ALL learning records?',
    loading: 'Loading...',
    pronHint: 'Tap the correct pinyin below!',
    charHint: 'Listen and choose the character!',
    mixHint: 'Think carefully and choose!',
    storyChars: '📌 Characters in story'
  }
};

let DATA = { characters: [], stories: [], categories: [] };
let STATE = {
  lang: 'zh', page: 'characters', filter: 'all',
  quiz: { type: 'fromChar', total: 5, idx: 0, correct: 0, currentQ: null },
  modal: null,
  quizHistory: []
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
    const raw = localStorage.getItem('hanziLand_state_v1');
    if (raw) {
      const p = JSON.parse(raw);
      if (p.learned) STATE.learned = p.learned;
      if (p.stars != null) STATE.stars = p.stars;
      if (p.history) STATE.quizHistory = p.history;
      if (p.lang) STATE.lang = p.lang;
    }
  } catch (e) { /* ignore */ }
  if (!STATE.learned) STATE.learned = new Set();
  if (typeof STATE.learned === 'object' && !(STATE.learned instanceof Set)) {
    STATE.learned = new Set(STATE.learned);
  }
  if (STATE.stars == null) STATE.stars = 0;
}

function saveState() {
  try {
    const payload = {
      learned: Array.from(STATE.learned),
      stars: STATE.stars,
      history: STATE.quizHistory.slice(-20),
      lang: STATE.lang
    };
    localStorage.setItem('hanziLand_state_v1', JSON.stringify(payload));
  } catch (e) { /* ignore */ }
}

/* ---------- 顶部栏 & 导航 ---------- */
function renderHeader() {
  const stats = `
    <span class="stat-pill">📚 ${STATE.learned.size}/${DATA.characters.length}</span>
    <span class="stat-pill star">⭐ ${STATE.stars}</span>
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
    { id: 'characters', label: t('navChars') },
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

/* ---------- 汉字页 ---------- */
function renderCharactersPage() {
  const cats = [{id:'all', emoji:'✨'}, ...DATA.categories];
  const filterBar = cats.map(c =>
    `<button class="filter-chip ${STATE.filter===c.id?'active':''}" data-cat="${c.id}">${c.emoji} ${c.name || c.id_zh || c.id}</button>`
  ).join('');
  $('#filter-bar').innerHTML = `<div class="filter-bar" id="fbar">${filterBar}</div>`;
  $$('#fbar .filter-chip').forEach(b => b.onclick = () => { STATE.filter = b.dataset.cat; renderCharactersPage(); });

  const chars = STATE.filter === 'all'
    ? DATA.characters
    : DATA.characters.filter(c => c.category === STATE.filter || c.category_id === STATE.filter);

  const cards = chars.map((c, i) => {
    const learned = STATE.learned.has(c.char);
    return `<div class="char-card ${learned?'learned':''}" data-idx="${DATA.characters.indexOf(c)}">
      ${learned ? '<div class="check-mark">✓</div>' : ''}
      <div class="cat-tag">${c.emoji || '🌟'}</div>
      <div class="content">
        <div class="char-illus" data-emoji="${c.emoji || '🌟'}">${c.char}</div>
        <div class="pinyin">${c.pinyin}</div>
        <div class="english">${c.english}</div>
      </div>
    </div>`;
  }).join('');

  $('#page-title').textContent = t('navChars');
  $('#page-desc').textContent = t('charPageDesc');
  $('#page-main').innerHTML = `<div class="char-grid page-enter">${cards}</div>`;

  $$('#page-main .char-card').forEach(el => el.onclick = () => {
    const idx = parseInt(el.dataset.idx, 10);
    openCharModal(DATA.characters[idx]);
  });
}

function openCharModal(c) {
  const cat = DATA.categories.find(x => x.id === c.category || x.id === c.category_id);
  const learned = STATE.learned.has(c.char);
  const wordsHtml = (c.words || []).map(w => `
    <div class="word-card" onclick="speak('${w.word || w.w}', 'zh-CN')">
      <div class="w">${w.word || w.w}</div>
      <div class="p">${w.pinyin || w.p}</div>
      <div class="e">${w.english || w.e}</div>
    </div>
  `).join('');

  const html = `
    <div class="modal-mask" id="modal-mask">
      <div class="modal" id="modal-panel">
        <button class="modal-close" id="modal-close">✕</button>
        <div class="modal-hero">
          <div class="modal-char-big">${c.char}</div>
          <div class="modal-pinyin">${c.pinyin}</div>
          <div class="modal-english">${c.english}</div>
          <div class="modal-actions">
            <button class="btn btn-primary" id="btn-pron-char">🔊 ${t('pronChar')}</button>
            <button class="btn btn-primary" id="btn-pron-pinyin">🎵 ${t('pronBtn')}</button>
            <button class="btn btn-success ${learned?'done':''}" id="btn-learn">${learned?t('unmark'):t('markLearned')}</button>
          </div>
        </div>
        <div class="modal-body">
          <div class="detail-section">
            <h3>${t('strokeTitle')}</h3>
            <div class="stroke-info">${c.strokes || '—'}</div>
          </div>
          ${wordsHtml ? `<div class="detail-section"><h3>${t('wordsTitle')}</h3><div class="words-row">${wordsHtml}</div></div>` : ''}
          ${c.story ? `<div class="detail-section"><h3>${t('storyTitle')}</h3><div class="story-box">${c.story}</div>
            <div style="text-align:right;margin-top:10px"><button class="btn btn-success" id="btn-pron-story">📢 ${t('pronStory')}</button></div>
          </div>` : ''}
        </div>
      </div>
    </div>
  `;

  const wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  document.body.appendChild(wrapper);

  $('#modal-mask').onclick = (e) => { if (e.target.id === 'modal-mask') closeModal(); };
  $('#modal-close').onclick = closeModal;
  $('#btn-pron-char').onclick = () => speak(c.char, 'zh-CN');
  $('#btn-pron-pinyin').onclick = () => speak(c.char, 'zh-CN');
  if ($('#btn-pron-story')) $('#btn-pron-story').onclick = () => speak(c.story, 'zh-CN');
  $('#btn-learn').onclick = () => {
    if (STATE.learned.has(c.char)) {
      STATE.learned.delete(c.char);
    } else {
      STATE.learned.add(c.char);
      STATE.stars += 1;
    }
    saveState();
    closeModal();
    renderAll();
  };
}

function closeModal() {
  const m = document.querySelector('.modal-mask');
  if (m) m.remove();
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
}

/* ---------- 故事页 ---------- */
function renderStoriesPage() {
  const cards = DATA.stories.map((s, i) => {
    const emoji = s.emoji || '📖';
    const charBadges = (s.characters || []).slice(0, 6).map(ch => {
      const c = DATA.characters.find(x => x.char === ch);
      return `<div class="story-mini-char" data-char="${ch}" title="${c ? c.pinyin + ' · ' + c.english : ''}">${ch}</div>`;
    }).join('');

    return `<div class="story-card" data-idx="${i}">
      <div class="story-head">
        <div class="story-emoji">${emoji}</div>
        <div>
          <h2>${STATE.lang === 'zh' ? s.title : s.title_en || s.title}</h2>
          <div class="sub">${s.characters ? s.characters.length : 0} ${STATE.lang==='zh'?'字 · ':'chars · '}${emoji}</div>
        </div>
      </div>
      <div class="story-preview">${(s.content || '').slice(0, 120)}…</div>
      <div><span class="sub">${t('storyChars')}：</span><div class="story-chars" style="display:inline-flex;gap:8px;flex-wrap:wrap;margin-top:4px">${charBadges}</div></div>
    </div>`;
  }).join('');

  $('#page-title').textContent = t('navStories');
  $('#page-desc').textContent = t('storyPageDesc');
  $('#page-main').innerHTML = `<div class="stories-grid page-enter">${cards}</div>`;

  $$('#page-main .story-card').forEach(el => el.onclick = () => openStoryModal(parseInt(el.dataset.idx, 10)));
  $$('#page-main .story-mini-char').forEach(el => el.onclick = (e) => {
    e.stopPropagation();
    const ch = DATA.characters.find(x => x.char === el.dataset.char);
    if (ch) openCharModal(ch);
  });
}

function openStoryModal(idx) {
  const s = DATA.stories[idx];
  const charBadges = (s.characters || []).map(ch => {
    const c = DATA.characters.find(x => x.char === ch);
    return `<div class="story-mini-char" data-char="${ch}" title="${c ? c.pinyin + ' · ' + c.english : ''}">${ch}</div>`;
  }).join('');

  const html = `
    <div class="modal-mask" id="modal-mask">
      <div class="modal" id="modal-panel">
        <button class="modal-close" id="modal-close">✕</button>
        <div class="modal-hero">
          <div class="story-emoji" style="margin:0 auto 12px;width:90px;height:90px;font-size:52px">${s.emoji || '📖'}</div>
          <div class="modal-pinyin" style="font-size:30px">${STATE.lang==='zh'?s.title:s.title_en||s.title}</div>
          <div class="modal-actions">
            <button class="btn btn-primary" id="btn-pron-story">📢 ${t('pronStory')}</button>
          </div>
        </div>
        <div class="modal-body">
          <div class="story-box">${s.content || ''}</div>
          ${s.content_en && STATE.lang==='en' ? `<div class="story-box" style="margin-top:16px;background:linear-gradient(135deg,#E6FFFA,#FFF8E7);border-left-color:#4ECDC4">${s.content_en}</div>`:''}
          <div class="detail-section" style="margin-top:20px">
            <h3>${t('storyChars')}</h3>
            <div class="story-chars">${charBadges}</div>
          </div>
        </div>
      </div>
    </div>
  `;
  const wrap = document.createElement('div');
  wrap.innerHTML = html;
  document.body.appendChild(wrap);
  $('#modal-mask').onclick = (e) => { if (e.target.id === 'modal-mask') closeModal(); };
  $('#modal-close').onclick = closeModal;
  $('#btn-pron-story').onclick = () => speak(s.content, 'zh-CN');
  $$('#modal-panel .story-mini-char').forEach(el => el.onclick = () => {
    const ch = DATA.characters.find(x => x.char === el.dataset.char);
    if (ch) { closeModal(); openCharModal(ch); }
  });
}

/* ---------- 测验页 ---------- */
function renderQuizPage() {
  $('#page-title').textContent = t('navQuiz');
  $('#page-desc').textContent = t('quizPageDesc');
  const opts = [
    {id:'fromChar', label: t('quizFromChar')},
    {id:'fromPinyin', label: t('quizFromPinyin')},
    {id:'mix', label: t('quizMix')}
  ];
  const qCount = [5, 10, 15, 20].map(n => `<option value="${n}">${n}</option>`).join('');
  const catOpts = [{id:'all', name:'✨ '+t('allFilter')}, ...DATA.categories].map(c =>
    `<option value="${c.id}">${c.emoji || '🌟'} ${STATE.lang==='zh'?c.name:c.name_en||c.name||c.id}</option>`
  ).join('');

  $('#page-main').innerHTML = `
    <div class="page-enter">
      <div class="quiz-control">
        <select id="qc-cat">${catOpts}</select>
        <select id="qc-type">${opts.map(o => `<option value="${o.id}">${o.label}</option>`).join('')}</select>
        <select id="qc-count">${qCount}</select>
        <button class="btn btn-success" id="qc-start" style="font-size:15px;padding:12px 24px">🚀 ${t('quizStart')}</button>
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
  let promptHtml = '';
  let correctText = '';
  let showPinyinPrompt = false;
  let type = q.type === 'mix' ? (Math.random() < 0.5 ? 'fromChar' : 'fromPinyin') : q.type;

  if (type === 'fromChar') {
    // 显示汉字，选拼音
    promptHtml = `<div class="q-big">${cur.char}</div>
                  <button class="btn btn-primary" onclick="speak('${cur.char}','zh-CN')" style="font-size:14px">🔊 ${t('pronChar')}</button>
                  <div class="q-hint">${t('pronHint')}</div>`;
    correctText = cur.pinyin;
    // 三个干扰项
    const distractors = shuffle(DATA.characters.filter(c => c.char !== cur.char)).slice(0, 3).map(c => c.pinyin);
    const options = shuffle([cur.pinyin, ...distractors]);
    STATE.quiz.currentOpts = options.map(o => ({text: o, correct: o === cur.pinyin}));
  } else {
    // 显示拼音，听，选汉字
    promptHtml = `<div class="q-pinyin">${cur.pinyin}</div>
                  <button class="btn btn-primary" onclick="speak('${cur.char}','zh-CN')" style="font-size:14px">🔊 ${t('pronChar')}</button>
                  <div class="q-hint">${t('charHint')}</div>`;
    correctText = cur.char;
    const distractors = shuffle(DATA.characters.filter(c => c.char !== cur.char)).slice(0, 3).map(c => c.char);
    const options = shuffle([cur.char, ...distractors]);
    STATE.quiz.currentOpts = options.map(o => ({text: o, correct: o === cur.char}));
  }

  const pct = Math.round((q.idx / q.total) * 100);
  $('#quiz-area').innerHTML = `
    <div class="quiz-box page-enter">
      <div class="quiz-progress-bar"><span style="width:${pct}%"></span></div>
      <div class="quiz-progress-text">${t('quizProg').replace('{cur}', q.idx+1).replace('{total}', q.total)} · ✨ ${q.correct}</div>
      <div class="quiz-q-box">${promptHtml}</div>
      <div class="quiz-options" id="quiz-opts">
        ${STATE.quiz.currentOpts.map((o, i) => `
          <div class="opt-card" data-i="${i}">
            <div>${o.text}</div>
            <div class="sub">${type==='fromChar'?'':''}</div>
          </div>
        `).join('')}
      </div>
      <div id="quiz-feedback"></div>
    </div>
  `;

  // 自动朗读
  setTimeout(() => speak(cur.char, 'zh-CN'), 200);

  $$('#quiz-opts .opt-card').forEach(el => el.onclick = () => {
    if (STATE.quiz.answered) return;
    STATE.quiz.answered = true;
    const i = parseInt(el.dataset.i, 10);
    const chosen = STATE.quiz.currentOpts[i];
    const correct = STATE.quiz.currentOpts.find(o => o.correct);

    $$('#quiz-opts .opt-card').forEach((card, j) => {
      if (STATE.quiz.currentOpts[j].correct) card.classList.add('correct');
      else if (j === i) card.classList.add('wrong');
    });

    if (chosen.correct) {
      STATE.quiz.correct += 1;
      STATE.stars += 2;
      $('#quiz-feedback').innerHTML = `<div class="quiz-feedback success">${t('quizRight')} +2 ⭐</div>`;
    } else {
      $('#quiz-feedback').innerHTML = `<div class="quiz-feedback fail">${t('quizWrong').replace('{ans}', correct.text)}</div>`;
    }
    saveState();
    renderHeader();

    setTimeout(() => {
      STATE.quiz.idx += 1;
      STATE.quiz.answered = false;
      renderQuizQuestion();
    }, 1400);
  });
}

function renderQuizFinal() {
  const q = STATE.quiz;
  const pct = q.total === 0 ? 0 : Math.round((q.correct / q.total) * 100);
  const earned = q.correct * 2;
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
        <p>✨ 获得 ${earned} ⭐ · 总星数 ${STATE.stars}</p>
        <button class="btn btn-success" id="btn-retry" style="font-size:16px;padding:14px 28px">${t('quizRetry')}</button>
      </div>
    </div>
  `;
  $('#btn-retry').onclick = () => { STATE.quiz = {type:q.type,total:5,idx:0,correct:0,currentQ:null}; renderQuizPage(); };
  renderHeader();
}

/* ---------- 进度页 ---------- */
function renderProgressPage() {
  const pct = DATA.characters.length ? Math.round((STATE.learned.size / DATA.characters.length) * 100) : 0;
  const history = STATE.quizHistory.slice().reverse();

  const boxes = `
    <div class="progress-boxes">
      <div class="progress-box"><div class="emoji">📚</div><div class="num">${STATE.learned.size}</div><div class="cap">${t('statLearned')}</div></div>
      <div class="progress-box"><div class="emoji">🀄</div><div class="num">${DATA.characters.length}</div><div class="cap">${t('statTotal')}</div></div>
      <div class="progress-box"><div class="emoji">⭐</div><div class="num">${STATE.stars}</div><div class="cap">${t('statStars')}</div></div>
      <div class="progress-box"><div class="emoji">🎯</div><div class="num">${STATE.quizHistory.length}</div><div class="cap">${t('statTests')}</div></div>
      <div class="progress-box"><div class="emoji">📈</div><div class="num">${pct}%</div><div class="cap">${STATE.lang==='zh'?'完成度':'Progress'}</div></div>
    </div>
  `;

  const recent = history.length === 0
    ? `<div style="background:white;border-radius:18px;padding:22px;text-align:center;color:#8B8BA7;box-shadow:0 4px 14px rgba(0,0,0,.06)">${t('emptyHistory')}</div>`
    : `<div style="background:white;border-radius:18px;padding:18px 22px;box-shadow:0 4px 14px rgba(0,0,0,.06)">
         <h3 style="margin-bottom:12px">📅 ${STATE.lang==='zh'?'最近测验':'Recent Quizzes'}</h3>
         <div class="history-list">${history.map(h =>
           `<div class="history-item"><span>${h.date}</span><span class="score">${h.correct}/${h.total} (${h.pct}%)</span></div>`
         ).join('')}</div>
       </div>`;

  $('#page-title').textContent = t('navProgress');
  $('#page-desc').textContent = t('progressPageDesc');
  $('#page-main').innerHTML = `
    <div class="page-enter">
      ${boxes}
      ${recent}
      <div style="text-align:center;margin-top:24px">
        <button class="btn btn-danger" id="btn-clear">${t('clearProgress')}</button>
      </div>
    </div>
  `;
  $('#btn-clear').onclick = () => {
    if (confirm(t('confirmClear'))) {
      STATE.learned = new Set();
      STATE.stars = 0;
      STATE.quizHistory = [];
      saveState();
      renderAll();
    }
  };
}

/* ---------- 整体渲染 ---------- */
function renderAll() {
  renderHeader();
  if (STATE.page === 'characters') renderCharactersPage();
  else if (STATE.page === 'stories') renderStoriesPage();
  else if (STATE.page === 'quiz') renderQuizPage();
  else if (STATE.page === 'progress') renderProgressPage();
}

/* ---------- 数据规范化 ---------- */
function normalizeData(raw) {
  const catMap = new Map();
  // 默认的 category → emoji 映射，让筛选按钮更生动
  const catEmoji = {
    '自然': '🌿', '数字': '🔢', '身体': '🧍', '动物': '🐾',
    '植物': '🌱', '食物': '🍎', '颜色': '🎨', '方位': '🧭',
    '动作': '🏃', '情感': '💗', '人称': '👨‍👩‍👧', '天文': '🌠'
  };
  const catNameEn = {
    '自然': 'Nature', '数字': 'Numbers', '身体': 'Body', '动物': 'Animals',
    '植物': 'Plants', '食物': 'Food', '颜色': 'Colors', '方位': 'Directions',
    '动作': 'Actions', '情感': 'Feelings', '人称': 'People', '天文': 'Sky'
  };
  const characters = (raw.characters || []).map(c => {
    const words = (c.words || []).map(line => {
      // 解析 "汉字 pinyin · English"
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
      strokes: c.stroke_hint || c.strokes || '',
      story: STATE.lang === 'zh'
        ? (c.story_cn || c.story || '')
        : (c.story_en || c.story_cn || c.story || ''),
      words
    };
  });

  const stories = (raw.stories || []).map(s => ({
    title: s.title, title_en: s.title_en || s.title,
    emoji: s.emoji || '📖',
    content: s.content_cn || s.content || '',
    content_en: s.content_en || s.content_cn || s.content || '',
    characters: s.characters || []
  }));

  const categories = Array.from(catMap.values());
  return { characters, stories, categories };
}

/* ---------- 启动 ---------- */
async function init() {
  // 先加载状态以便选择语言
  try {
    const raw = localStorage.getItem('hanziLand_state_v1');
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
    $('#page-main').innerHTML = `<div style="text-align:center;padding:40px;background:white;border-radius:18px;box-shadow:0 4px 14px rgba(0,0,0,.06)">
      <div style="font-size:42px">🤔</div>
      <div style="font-size:18px;margin-top:12px;color:#5B5196">${t('loading')}</div>
    </div>`;
    return;
  }

  DATA = normalizeData(rawData);
  loadState();
  renderAll();
}

document.addEventListener('DOMContentLoaded', init);

// 全局 speak 用于内联 onclick
window.speak = speak;
