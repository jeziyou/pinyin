// ======================================================
// 汉字乐园 —— 儿童汉字学习软件 · 前端逻辑
// ======================================================

const DATA_URL = 'data.json';
const STORAGE_KEY = 'hanzi_progress';

let data = { characters: [], stories: [], levels: [] };
let progress = { learned: [], quiz_scores: [], stars: 0 };
let currentLang = 'cn'; // cn / en
let currentPage = 'home';
let currentChar = null;
let quizState = null;

// 语言映射
const lang = {
  cn: {
    home: '首页', learn: '学习汉字', stories: '故事时间', quiz: '趣味测验', progress: '学习进度',
    today: '今日推荐', all: '全部', learned: '已学', not_learned: '未学',
    pinyin: '拼音', english: '英文', strokes: '笔顺', words: '相关词组', story: '汉字故事',
    mark_learned: '标记为已学', learned: '已学过', listen: '🔊 听发音',
    read_story: '朗读故事', start_quiz: '开始测验', next: '下一题', try_again: '再来一次',
    quiz_type: '测验类型', char_to_pinyin: '看字选拼音', pinyin_to_char: '看拼音选字', audio_to_char: '听音选字',
    num_questions: '题目数量', your_score: '你的得分', perfect: '满分！太厉害了！',
    great: '很棒！继续加油！', keep_going: '继续努力！',
    characters: '汉字', quizzes: '测验', avg_score: '平均分', stars: '星星',
    no_learned: '还没有学习任何汉字，快去学习吧！', reset: '重置进度',
    confirm_reset: '确定要重置所有学习进度吗？',
    loading: '加载中...', success: '成功！', error: '出错了',
    toast_learned: '已标记为已学！', toast_star: '+1 星星！',
    toast_perfect: '🎉 满分！+3 星星！',
  },
  en: {
    home: 'Home', learn: 'Learn', stories: 'Stories', quiz: 'Quiz', progress: 'Progress',
    today: "Today's Picks", all: 'All', learned: 'Learned', not_learned: 'Not Learned',
    pinyin: 'Pinyin', english: 'English', strokes: 'Strokes', words: 'Related Words', story: 'Story',
    mark_learned: 'Mark as Learned', learned: 'Learned', listen: '🔊 Listen',
    read_story: 'Read Story', start_quiz: 'Start Quiz', next: 'Next', try_again: 'Try Again',
    quiz_type: 'Quiz Type', char_to_pinyin: 'Character → Pinyin', pinyin_to_char: 'Pinyin → Character', audio_to_char: 'Audio → Character',
    num_questions: 'Number of Questions', your_score: 'Your Score', perfect: 'Perfect! Amazing!',
    great: 'Great job! Keep it up!', keep_going: 'Keep practicing!',
    characters: 'Characters', quizzes: 'Quizzes', avg_score: 'Avg Score', stars: 'Stars',
    no_learned: 'No characters learned yet. Go learn some!', reset: 'Reset Progress',
    confirm_reset: 'Are you sure to reset all progress?',
    loading: 'Loading...', success: 'Success!', error: 'Error',
    toast_learned: 'Marked as learned!', toast_star: '+1 star!',
    toast_perfect: '🎉 Perfect! +3 stars!',
  }
};

function t(key) { return lang[currentLang][key] || key; }

// ---------- 工具函数 ----------
function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function loadProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) progress = JSON.parse(saved);
  } catch (e) { console.error('Failed to load progress:', e); }
}

function toast(msg, type = 'info') {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.remove('hidden');
  setTimeout(() => el.classList.add('hidden'), 2500);
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ---------- 语音朗读 ----------
function speak(text, langCode = 'zh-CN') {
  if ('speechSynthesis' in window) {
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = langCode;
    utterance.rate = 0.9;
    speechSynthesis.speak(utterance);
  } else {
    // Fallback: 使用 gTTS API
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(text)}&tl=${langCode}&client=gtx`;
    const audio = new Audio(url);
    audio.play();
  }
}

function speakChar(charData) {
  speak(charData.char, 'zh-CN');
}

function speakWord(word) {
  speak(word.word || word, 'zh-CN');
}

// ---------- 渲染函数 ----------
function renderStats() {
  document.getElementById('chipLearned').textContent = progress.learned.length;
  document.getElementById('chipTotal').textContent = data.characters.length;
  document.getElementById('chipStars').textContent = progress.stars;
}

function renderHome() {
  const avgScore = progress.quiz_scores.length > 0
    ? Math.round(progress.quiz_scores.reduce((sum, q) => sum + q.score / q.total, 0) / progress.quiz_scores.length * 100)
    : 0;

  const html = `
    <div class="page-hero">
      <h1>🎉 ${t('home')}</h1>
      <p>${currentLang === 'cn' ? '欢迎来到汉字乐园！这里有汉字、拼音、故事和测验，让学习变成游戏！' : 'Welcome to Chinese Character Wonderland! Learn with pinyin, stories and fun quizzes!'}</p>
    </div>

    <div class="stats-grid">
      <div class="stat-card pink"><span class="label">📚 ${t('characters')}</span><span class="value">${progress.learned.length}/${data.characters.length}</span><span class="emoji">📖</span></div>
      <div class="stat-card yellow"><span class="label">⭐ ${t('stars')}</span><span class="value">${progress.stars}</span><span class="emoji">🌟</span></div>
      <div class="stat-card teal"><span class="label">🎮 ${t('quizzes')}</span><span class="value">${progress.quiz_scores.length}</span><span class="emoji">🎯</span></div>
      <div class="stat-card blue"><span class="label">🎯 ${t('avg_score')}</span><span class="value">${avgScore}%</span><span class="emoji">📊</span></div>
    </div>

    <h2 class="section-title">🌟 ${t('today')}</h2>
    <div class="char-grid">
      ${shuffle(data.characters).slice(0, 6).map(c => renderCharCard(c)).join('')}
    </div>
  `;
  document.getElementById('app').innerHTML = html;
}

function renderCharCard(c) {
  const isLearned = progress.learned.includes(c.char);
  return `
    <div class="char-card${isLearned ? ' learned' : ''}" onclick="showCharDetail('${c.char}')">
      ${isLearned ? '<span class="check-mark">✓</span>' : ''}
      <span class="cat-tag">${c.category}</span>
      <div class="ch">${c.char}</div>
      <div class="py">${c.pinyin}</div>
      <div class="en">${c.english}</div>
    </div>
  `;
}

function renderLearn() {
  const categories = [...new Set(data.characters.map(c => c.category))];
  const activeCat = window.activeCat || 'all';

  const html = `
    <div class="page-hero">
      <h1>📖 ${t('learn')}</h1>
      <p>${currentLang === 'cn' ? '点击汉字卡片开始学习，了解拼音、笔顺、词组和有趣的故事！' : 'Click on a character card to start learning pinyin, strokes, words and stories!'}</p>
    </div>

    <div class="filter-bar">
      <button class="filter-chip${activeCat === 'all' ? ' active' : ''}" onclick="window.activeCat='all';renderLearn()">${t('all')}</button>
      <button class="filter-chip${activeCat === 'learned' ? ' active' : ''}" onclick="window.activeCat='learned';renderLearn()">${t('learned')}</button>
      <button class="filter-chip${activeCat === 'not_learned' ? ' active' : ''}" onclick="window.activeCat='not_learned';renderLearn()">${t('not_learned')}</button>
      ${categories.map(cat => `<button class="filter-chip${activeCat === cat ? ' active' : ''}" onclick="window.activeCat='${cat}';renderLearn()">${cat}</button>`).join('')}
    </div>

    <div class="char-grid">
      ${filterChars().map(c => renderCharCard(c)).join('')}
    </div>
  `;
  document.getElementById('app').innerHTML = html;
}

function filterChars() {
  const activeCat = window.activeCat || 'all';
  let chars = [...data.characters];
  if (activeCat === 'learned') chars = chars.filter(c => progress.learned.includes(c.char));
  else if (activeCat === 'not_learned') chars = chars.filter(c => !progress.learned.includes(c.char));
  else if (activeCat !== 'all') chars = chars.filter(c => c.category === activeCat);
  return chars;
}

function showCharDetail(char) {
  const c = data.characters.find(ch => ch.char === char);
  if (!c) return;

  const isLearned = progress.learned.includes(c.char);
  const html = `
    <div class="detail-hero">
      <div class="big-char">${c.char}</div>
      <div class="py">${c.pinyin}</div>
      <div class="en">${c.english}</div>
      <div class="detail-actions">
        <button class="btn btn-primary" onclick="speakChar(this.dataset.char)" data-char="${c.char}">${t('listen')}</button>
        <button class="btn ${isLearned ? 'btn-success done' : 'btn-success'}" onclick="markLearned('${c.char}')">
          ${isLearned ? '✅ ' + t('learned') : '📘 ' + t('mark_learned')}
        </button>
      </div>
    </div>
    <div class="detail-body">
      <div class="detail-section">
        <h3>${t('strokes')}</h3>
        <div class="stroke-info">${c.stroke_hint}</div>
      </div>
      <div class="detail-section">
        <h3>${t('words')}</h3>
        <div class="words-row">
          ${c.words.map(w => `<div class="word-pill" onclick="speakWord(this.dataset.word)" data-word='${JSON.stringify(w)}'><div class="w-ch">${w.word}</div><div class="w-py">${w.pinyin}</div><div class="w-en">${w.english}</div></div>`).join('')}
        </div>
      </div>
      <div class="detail-section">
        <h3>${t('story')}</h3>
        <div class="story-box">${c['story_' + currentLang]}</div>
      </div>
    </div>
  `;
  document.getElementById('modalBody').innerHTML = html;
  document.getElementById('modal').classList.remove('hidden');
}

function markLearned(char) {
  if (!progress.learned.includes(char)) {
    progress.learned.push(char);
    progress.stars++;
    saveProgress();
    renderStats();
    toast(t('toast_learned'));
    // 更新按钮状态
    const btn = document.querySelector('.btn-success');
    if (btn) btn.classList.add('done');
  }
}

function renderStories() {
  const html = `
    <div class="page-hero">
      <h1>📚 ${t('stories')}</h1>
      <p>${currentLang === 'cn' ? '阅读有趣的汉字故事，在故事中学习汉字！' : 'Read fun stories and learn characters while reading!'}</p>
    </div>

    <div class="stories-grid">
      ${data.stories.map(s => renderStoryCard(s)).join('')}
    </div>
  `;
  document.getElementById('app').innerHTML = html;
}

function renderStoryCard(s) {
  return `
    <div class="story-card" onclick="showStoryDetail(${data.stories.indexOf(s)})">
      <h2>${s['title' + (currentLang === 'cn' ? '' : '_en')]}</h2>
      <div class="sub">${s['title' + (currentLang === 'cn' ? '_en' : '')]}</div>
      <div class="preview">${s['content_' + currentLang].substring(0, 100)}...</div>
      <div class="tag-row">
        ${s.characters.map(ch => `<div class="mini-char" onclick="event.stopPropagation();showCharDetail('${ch}')">${ch}</div>`).join('')}
      </div>
    </div>
  `;
}

function showStoryDetail(idx) {
  const s = data.stories[idx];
  if (!s) return;

  const html = `
    <div style="padding: 24px;">
      <h2 style="font-family: 'ZCOOL KuaiLe', sans-serif; font-size: 28px; color: #2C3E50; margin-bottom: 8px;">${s['title' + (currentLang === 'cn' ? '' : '_en')]}</h2>
      <div style="color: #7F8C8D; font-size: 14px; margin-bottom: 20px;">${s['title' + (currentLang === 'cn' ? '_en' : '')]}</div>
      
      <button class="btn btn-primary" style="margin-bottom: 18px;" onclick="speak('${s['content_' + currentLang].substring(0, 150)}', '${currentLang === 'cn' ? 'zh-CN' : 'en-US'}')">${t('read_story')}</button>
      
      <div class="story-box" style="font-size: 16px; line-height: 2;">${s['content_' + currentLang]}</div>
      
      <div style="margin-top: 20px;">
        <h4 style="font-weight: 700; color: #2C3E50; margin-bottom: 12px;">${t('characters')}:</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 10px;">
          ${s.characters.map(ch => `<div class="mini-char" style="cursor: pointer;" onclick="showCharDetail('${ch}')">${ch}</div>`).join('')}
        </div>
      </div>
    </div>
  `;
  document.getElementById('modalBody').innerHTML = html;
  document.getElementById('modal').classList.remove('hidden');
}

function renderQuiz() {
  if (!quizState || !quizState.started) {
    renderQuizSetup();
  } else {
    renderQuizGame();
  }
}

function renderQuizSetup() {
  const html = `
    <div class="page-hero">
      <h1>🎮 ${t('quiz')}</h1>
      <p>${currentLang === 'cn' ? '选择测验类型和题目数量，开始挑战！' : 'Choose quiz type and number of questions!'}</p>
    </div>

    <div class="quiz-control">
      <div style="display: flex; align-items: center; gap: 12px;">
        <span style="font-weight: 700; color: #546E7A;">${t('quiz_type')}:</span>
        <select id="quizType" style="min-width: 160px;">
          <option value="char2pinyin">${t('char_to_pinyin')}</option>
          <option value="pinyin2char">${t('pinyin_to_char')}</option>
          <option value="audio2char">${t('audio_to_char')}</option>
        </select>
      </div>
      <div style="display: flex; align-items: center; gap: 12px;">
        <span style="font-weight: 700; color: #546E7A;">${t('num_questions')}:</span>
        <input type="number" id="quizNum" value="5" min="3" max="10" style="width: 80px;">
      </div>
      <button class="btn btn-primary" onclick="startQuiz()">🚀 ${t('start_quiz')}</button>
    </div>
  `;
  document.getElementById('app').innerHTML = html;
}

function startQuiz() {
  const type = document.getElementById('quizType').value;
  const num = parseInt(document.getElementById('quizNum').value);
  
  quizState = {
    started: true,
    type: type,
    questions: shuffle([...data.characters]).slice(0, num),
    idx: 0,
    score: 0,
    answered: false,
    selected: null,
  };
  renderQuizGame();
}

function renderQuizGame() {
  if (quizState.idx >= quizState.questions.length) {
    renderQuizResult();
    return;
  }

  const q = quizState.questions[quizState.idx];
  const options = shuffle([q, ...shuffle(data.characters.filter(c => c.char !== q.char)).slice(0, 3)]);
  const progressPct = (quizState.idx / quizState.questions.length) * 100;

  let questionHtml = '';
  if (quizState.type === 'char2pinyin') {
    questionHtml = `<div class="q-ch">${q.char}</div><div class="q-hint">${t('pinyin')}?</div>`;
  } else if (quizState.type === 'pinyin2char') {
    questionHtml = `<div class="q-py">${q.pinyin}</div><div class="q-hint">${t('characters')}?</div>`;
  } else {
    questionHtml = `<div class="q-hint">${t('listen')} &rarr; ${t('characters')}?</div><button class="btn btn-primary" onclick="speakChar(this.dataset.char)" data-char="${q.char}" style="margin-top: 10px;">🔊 ${t('listen')}</button>`;
  }

  const optionsHtml = options.map((opt, i) => {
    let label = opt.char;
    if (quizState.type === 'char2pinyin') label = opt.pinyin;
    
    let cls = 'opt-btn';
    if (quizState.answered) {
      if (opt.char === q.char) cls += ' correct';
      else if (quizState.selected === i) cls += ' wrong';
    }
    
    return `<button class="${cls}" onclick="${quizState.answered ? '' : `answerQuiz(${i})`}">${label}<div class="opt-sub">${quizState.type !== 'char2pinyin' ? opt.pinyin : opt.char}</div></button>`;
  }).join('');

  const feedback = quizState.answered ? `
    <div class="quiz-feedback ${quizState.selectedAnswerCorrect ? 'success' : 'fail'}">
      ${quizState.selectedAnswerCorrect ? '🎉 ' + t('great') : '❌ ' + (currentLang === 'cn' ? `正确答案是 ${q.char} ${q.pinyin}` : `Correct: ${q.char} ${q.pinyin}`)}
    </div>
    <button class="btn btn-primary quiz-next-btn" onclick="nextQuiz()">➡️ ${t('next')}</button>
  ` : '';

  const html = `
    <div class="quiz-box">
      <div class="quiz-progress">
        <span>${t('your_score')}: ${quizState.score}</span>
        <span>${quizState.idx + 1} / ${quizState.questions.length}</span>
      </div>
      <div class="quiz-progressbar"><span style="width: ${progressPct}%"></span></div>
      <div class="quiz-question">${questionHtml}</div>
      <div class="quiz-options">${optionsHtml}</div>
      ${feedback}
    </div>
  `;
  document.getElementById('app').innerHTML = html;
}

function answerQuiz(idx) {
  const q = quizState.questions[quizState.idx];
  const options = shuffle([q, ...data.characters.filter(c => c.char !== q.char).slice(0, 3)]);
  
  quizState.answered = true;
  quizState.selected = idx;
  quizState.selectedAnswerCorrect = options[idx].char === q.char;
  
  if (quizState.selectedAnswerCorrect) {
    quizState.score++;
  }
  
  renderQuizGame();
}

function nextQuiz() {
  quizState.idx++;
  quizState.answered = false;
  quizState.selected = null;
  renderQuizGame();
}

function renderQuizResult() {
  const pct = Math.round((quizState.score / quizState.questions.length) * 100);
  let msg = t('keep_going');
  if (pct === 100) {
    msg = t('perfect');
    progress.stars += 3;
    toast(t('toast_perfect'));
  } else if (pct >= 80) {
    msg = t('great');
  }
  
  progress.quiz_scores.push({ score: quizState.score, total: quizState.questions.length });
  saveProgress();
  renderStats();

  const html = `
    <div class="quiz-box">
      <div class="quiz-final">
        <div class="score-circle">
          <div class="num">${quizState.score}/${quizState.questions.length}</div>
          <div class="pct">${pct}%</div>
        </div>
        <h2>${t('your_score')}</h2>
        <p>${msg}</p>
        <button class="btn btn-primary" onclick="resetQuiz()">🔄 ${t('try_again')}</button>
      </div>
    </div>
  `;
  document.getElementById('app').innerHTML = html;
}

function resetQuiz() {
  quizState = { started: false };
  renderQuiz();
}

function renderProgress() {
  const learnedChars = data.characters.filter(c => progress.learned.includes(c.char));
  const pct = Math.round((progress.learned.length / data.characters.length) * 100);

  const html = `
    <div class="page-hero">
      <h1>⭐ ${t('progress')}</h1>
      <p>${currentLang === 'cn' ? '查看你的学习进度和成就！' : 'Check your learning progress and achievements!'}</p>
    </div>

    <div class="progress-hero">
      <div class="box"><div class="emoji">📚</div><div class="num">${progress.learned.length}/${data.characters.length}</div><div class="cap">${t('characters')}</div></div>
      <div class="box"><div class="emoji">⭐</div><div class="num">${progress.stars}</div><div class="cap">${t('stars')}</div></div>
      <div class="box"><div class="emoji">🎮</div><div class="num">${progress.quiz_scores.length}</div><div class="cap">${t('quizzes')}</div></div>
    </div>

    <div style="margin-bottom: 28px;">
      <div class="progress-summary-bar"><span style="width: ${pct}%"></span></div>
      <div class="progress-summary-label">${t('learned')}: ${pct}%</div>
    </div>

    <div>
      <h3 class="section-title">📚 ${t('learned')}</h3>
      ${learnedChars.length > 0 ? `
        <div class="char-grid">${learnedChars.map(c => renderCharCard(c)).join('')}</div>
      ` : `<div style="text-align: center; padding: 30px; background: #FFF8E7; border-radius: 16px; color: #7A5500; font-weight: 700;">${t('no_learned')}</div>`}
    </div>

    ${progress.quiz_scores.length > 0 ? `
      <div style="margin-top: 28px;">
        <h3 class="section-title">📊 ${t('quizzes')}</h3>
        <div class="history-list">
          ${progress.quiz_scores.slice(-10).reverse().map((q, i) => `
            <div class="history-item">
              <span>${currentLang === 'cn' ? '第' : 'Q'}${progress.quiz_scores.length - i}</span>
              <span class="score">${q.score}/${q.total} (${Math.round(q.score/q.total*100)}%)</span>
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}

    <div style="margin-top: 28px; text-align: center;">
      <button class="btn btn-danger" onclick="confirmReset()">🗑️ ${t('reset')}</button>
    </div>
  `;
  document.getElementById('app').innerHTML = html;
}

function confirmReset() {
  if (confirm(t('confirm_reset'))) {
    progress = { learned: [], quiz_scores: [], stars: 0 };
    saveProgress();
    renderStats();
    renderProgress();
    toast('Progress reset!');
  }
}

function closeModal() {
  document.getElementById('modal').classList.add('hidden');
}

function changeLang(lang) {
  currentLang = lang;
  document.getElementById('btnLangCN').classList.toggle('active', lang === 'cn');
  document.getElementById('btnLangEN').classList.toggle('active', lang === 'en');
  document.querySelectorAll('.nav-btn span').forEach((el, i) => {
    el.textContent = lang === 'cn'
      ? ['首页', '学习汉字', '故事时间', '趣味测验', '学习进度'][i]
      : ['Home', 'Learn', 'Stories', 'Quiz', 'Progress'][i];
  });
  renderPage();
}

function navigate(page) {
  currentPage = page;
  document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active'));
  document.querySelector(`[data-page="${page}"]`).classList.add('active');
  renderPage();
}

function renderPage() {
  switch (currentPage) {
    case 'home': renderHome(); break;
    case 'learn': renderLearn(); break;
    case 'stories': renderStories(); break;
    case 'quiz': renderQuiz(); break;
    case 'progress': renderProgress(); break;
  }
}

// ---------- 初始化 ----------
async function init() {
  loadProgress();
  
  // 优先使用内联数据（用于 Streamlit 内嵌）
  if (window.DATA_JSON) {
    data = JSON.parse(window.DATA_JSON);
  } else {
    try {
      const resp = await fetch(DATA_URL);
      data = await resp.json();
    } catch (e) {
      console.error('Failed to load data:', e);
    }
  }

  renderStats();
  renderHome();

  // 绑定事件
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('btnLangCN').addEventListener('click', () => changeLang('cn'));
  document.getElementById('btnLangEN').addEventListener('click', () => changeLang('en'));
  
  document.querySelectorAll('.nav-btn').forEach(el => {
    el.addEventListener('click', () => navigate(el.dataset.page));
  });

  // 关闭加载页
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
  }, 800);
}

window.init = init;
window.navigate = navigate;
window.changeLang = changeLang;
window.showCharDetail = showCharDetail;
window.showStoryDetail = showStoryDetail;
window.closeModal = closeModal;
window.speakChar = speakChar;
window.speakWord = speakWord;
window.markLearned = markLearned;
window.startQuiz = startQuiz;
window.answerQuiz = answerQuiz;
window.nextQuiz = nextQuiz;
window.resetQuiz = resetQuiz;
window.confirmReset = confirmReset;

// 启动
document.addEventListener('DOMContentLoaded', init);
