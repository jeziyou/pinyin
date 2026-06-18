/* ======================================================
   汉字乐园 v3.0 · Chinese Character Wonderland
   儿童汉字拼音学习应用
   玩-认-练-写-测 五步闭环学习 + 艾宾浩斯复习
   ====================================================== */

// ============ I18N 国际化 ============
const I18N = {
  zh: {
    appTitle: '汉字乐园', appSub: '玩中学 · 学中玩 · 快乐成长',
    // 导航
    navHome: '🏠 首页', navLearn: '🎓 学习', navMap: '🗺️ 闯关', navChars: '📚 汉字库',
    navRadicals: '🔤 偏旁', navIdioms: '💡 成语', navStories: '📖 故事', navReading: '📖 绘本',
    navGames: '🎮 游戏', navQuiz: '🎯 测验', navProgress: '⭐ 进度',
    // 首页
    welcomeTitle: '欢迎来到汉字乐园！', welcomeDesc: '每天学几个汉字，快乐成长！',
    todayProgress: '今日进度', dailyGoal: '每日目标', dailyComplete: '🎉 已完成今日目标！',
    streakDays: '连续打卡', fireEmoji: '🔥',
    reviewReminder: '📅 需要复习', noReview: '今日无需复习',
    recommendedChars: '🌟 推荐学习', newChars: '新汉字', reviewChars: '复习汉字',
    quickStart: '🚀 开始学习', quickMap: '🗺️ 去闯关', quickGames: '🎮 玩游戏', quickQuiz: '🎯 做测验',
    latestAchievement: '🏆 最新成就', noAchievement: '还没有成就哦，快去学习吧！',
    todayLearned: '今日已学', charsLearned: '已学汉字',
    // 闯关地图
    levelLocked: '🔒 未解锁', levelUnlocked: '✅ 已解锁', levelCompleted: '🌟 已完成',
    chooseLevel: '选择学习等级', totalProgress: '总进度',
    // 五步学习
    stepPlay: '🎮 玩一玩', stepRecognize: '👀 认一认', stepPractice: '✏️ 练一练', stepWrite: '📝 写一写', stepTest: '🎯 测一测',
    stepPlayDesc: '通过有趣的小游戏认识汉字', stepRecognizeDesc: '看动画，了解汉字的来源',
    stepPracticeDesc: '跟读拼音，记住发音', stepWriteDesc: '看笔顺，学会写字', stepTestDesc: '做测验，检查学习效果',
    nextStep: '下一步 →', prevStep: '← 上一步', finishStep: '✅ 完成学习',
    originTitle: '字源演变', originDesc: '看看汉字是怎么来的',
    strokeTitle: '笔顺动画', strokeDesc: '跟着动画学写字',
    wordsTitle: '组词练习', storyTitle: '小故事',
    listenPinyin: '🔊 听拼音', listenChar: '🎵 读汉字', listenStory: '📢 读故事',
    markLearned: '✅ 我学会了！', unmark: '↩️ 再学学',
    charPageDesc: '👆 点一点汉字卡片，开始五步学习之旅！',
    // 游戏中心
    gameCenter: '🎮 游戏中心', selectGame: '选择一个游戏开始玩！',
    gameMatch: '配对游戏', gameMatchDesc: '把汉字和拼音配对起来',
    gameFind: '找字游戏', gameFindDesc: '在众多汉字中找到目标字',
    gameOrder: '排序游戏', gameOrderDesc: '按正确顺序排列笔画',
    gameWord: '组词游戏', gameWordDesc: '选择正确的字组成词语',
    gameScore: '得分', gameRestart: '🔄 再来一次', gameBack: '🔙 返回',
    // 偏旁
    radicalPageDesc: '偏旁部首是汉字的组成部分，学会偏旁认字更快！',
    radicalChars: '📌 包含此偏旁的汉字',
    // 成语
    idiomPageDesc: '成语是中华文化的精华，每个成语都有故事！',
    idiomChars: '📌 成语里的汉字',
    // 故事
    storyPageDesc: '每个故事里都藏着今天要学的汉字，一起来读一读吧！',
    storyChars: '📌 故事里的汉字',
    // 绘本
    readingPageDesc: '分级绘本，循序渐进学阅读！',
    readingLevel: '阅读等级',
    // 测验
    quizPageDesc: '挑一个喜欢的题目数量，来挑战一下吧！',
    quizCategory: '题目范围', quizCount: '题目数量', quizStart: '🚀 开始测验',
    quizFromChar: '看汉字·选拼音', quizFromPinyin: '听拼音·选汉字', quizMix: '🎲 混合模式',
    quizProg: '第 {cur} / {total} 题', quizRight: '✨ 答对啦！真棒！', quizWrong: '😢 没关系，正确答案是：{ans}',
    quizFinishTitle: '🎉 挑战完成', quizRetry: '🔄 再来一次',
    quizScore: '正确率', quizAccuracy: '正确率',
    // 进度
    progressPageDesc: '这里记录着你的汉字学习旅程，加油！',
    statLearned: '已学', statMastered: '已掌握', statStars: '星星', statDays: '天数',
    statTotalTime: '学习时长', statAccuracy: '正确率', totalChars: '总汉字数',
    emptyHistory: '还没有测验记录哦，快去挑战一下吧！',
    wrongAnswers: '📝 错题本', noWrongAnswers: '太棒了，没有错题！',
    ebbinghausProgress: '📅 艾宾浩斯进度', achievementDisplay: '🏆 成就展示',
    clearProgress: '🗑️ 清空进度', confirmClear: '确定要清空所有学习记录吗？',
    // 成就
    achFirstLearn: '初次学习', achFirstLearnDesc: '完成第一个汉字的学习',
    achLearn10: '小试牛刀', achLearn10Desc: '学习10个汉字',
    achLearn50: '汉字小达人', achLearn50Desc: '学习50个汉字',
    achLearn100: '汉字专家', achLearn100Desc: '学习100个汉字',
    achLearn150: '汉字大师', achLearn150Desc: '学习150个汉字',
    achStreak3: '坚持不懈', achStreak3Desc: '连续学习3天',
    achStreak7: '一周之星', achStreak7Desc: '连续学习7天',
    achStreak30: '月度冠军', achStreak30Desc: '连续学习30天',
    achQuiz5: '测验新星', achQuiz5Desc: '完成5次测验',
    achQuiz10: '测验达人', achQuiz10Desc: '完成10次测验',
    achQuizFull5: '满分小将', achQuizFull5Desc: '5题测验获得满分',
    achQuizFull10: '满分达人', achQuizFull10Desc: '10题测验获得满分',
    achGame100: '游戏高手', achGame100Desc: '游戏得分超过100',
    achUnlock: '🎉 成就解锁！',
    // 复习
    reviewForDay: '第{day}天复习', reviewToday: '今日需要复习',
    // 通用
    allFilter: '✨ 全部', loading: '加载中…', back: '返回', close: '关闭',
    correct: '正确', wrong: '错误', star: '⭐',
    // 游戏反馈
    gamePerfect: '🌟 太厉害了！', gameGood: '👍 很不错！', gameTryAgain: '💪 再试一次！',
    // 阅读
    readStory: '阅读故事', prevPage: '◀️ 上一页', nextPage: '下一页 ▶️',
  },
  en: {
    appTitle: 'Wonderland', appSub: 'Play & Learn · Grow Happy',
    navHome: '🏠 Home', navLearn: '🎓 Learn', navMap: '🗺️ Map', navChars: '📚 Chars',
    navRadicals: '🔤 Radicals', navIdioms: '💡 Idioms', navStories: '📖 Stories', navReading: '📖 Reading',
    navGames: '🎮 Games', navQuiz: '🎯 Quiz', navProgress: '⭐ Progress',
    welcomeTitle: 'Welcome to Wonderland!', welcomeDesc: 'Learn a few characters each day, grow happily!',
    todayProgress: "Today's Progress", dailyGoal: 'Daily Goal', dailyComplete: '🎉 Daily Goal Completed!',
    streakDays: 'Day Streak', fireEmoji: '🔥',
    reviewReminder: '📅 Review Reminder', noReview: 'No review needed today',
    recommendedChars: '🌟 Recommended', newChars: 'New', reviewChars: 'Review',
    quickStart: '🚀 Start Learning', quickMap: '🗺️ Adventure', quickGames: '🎮 Play Games', quickQuiz: '🎯 Take Quiz',
    latestAchievement: '🏆 Latest Achievement', noAchievement: 'No achievements yet - start learning!',
    todayLearned: 'Learned Today', charsLearned: 'Characters Learned',
    levelLocked: '🔒 Locked', levelUnlocked: '✅ Unlocked', levelCompleted: '🌟 Completed',
    chooseLevel: 'Choose Level', totalProgress: 'Total Progress',
    stepPlay: '🎮 Play', stepRecognize: '👀 Recognize', stepPractice: '✏️ Practice', stepWrite: '📝 Write', stepTest: '🎯 Test',
    stepPlayDesc: 'Learn through fun games', stepRecognizeDesc: 'Watch animation, learn origin',
    stepPracticeDesc: 'Listen to pinyin, remember sound', stepWriteDesc: 'Watch strokes, learn to write', stepTestDesc: 'Take quiz, check progress',
    nextStep: 'Next →', prevStep: '← Previous', finishStep: '✅ Complete',
    originTitle: 'Character Origin', originDesc: 'See how the character came to be',
    strokeTitle: 'Stroke Animation', strokeDesc: 'Follow animation to write',
    wordsTitle: 'Word Practice', storyTitle: 'Mini Story',
    listenPinyin: '🔊 Listen Pinyin', listenChar: '🎵 Say Character', listenStory: '📢 Read Story',
    markLearned: '✅ I learned it!', unmark: '↩️ Practice again',
    charPageDesc: '👆 Tap a character card to start 5-step learning!',
    gameCenter: '🎮 Game Center', selectGame: 'Choose a game to play!',
    gameMatch: 'Match Game', gameMatchDesc: 'Match characters with pinyin',
    gameFind: 'Find Game', gameFindDesc: 'Find target character among many',
    gameOrder: 'Order Game', gameOrderDesc: 'Arrange strokes in correct order',
    gameWord: 'Word Game', gameWordDesc: 'Choose correct characters to form words',
    gameScore: 'Score', gameRestart: '🔄 Restart', gameBack: '🔙 Back',
    radicalPageDesc: 'Radicals are building blocks of characters, learn radicals to read faster!',
    radicalChars: '📌 Characters with radical',
    idiomPageDesc: 'Idioms are gems of Chinese culture, each has a story!',
    idiomChars: '📌 Characters in idiom',
    storyPageDesc: "Each story hides today's characters - come read them!",
    storyChars: '📌 Characters in story',
    readingPageDesc: 'Graded reading, learn to read step by step!',
    readingLevel: 'Reading Level',
    quizPageDesc: 'Pick a number of questions and take the challenge!',
    quizCategory: 'Category', quizCount: 'Questions', quizStart: '🚀 Start Quiz',
    quizFromChar: 'See char·Pick pinyin', quizFromPinyin: 'Hear pinyin·Pick char', quizMix: '🎲 Mix',
    quizProg: 'Question {cur} / {total}', quizRight: '✨ Correct! Amazing!', quizWrong: '😢 No worries. Correct: {ans}',
    quizFinishTitle: '🎉 Challenge Complete', quizRetry: '🔄 Try Again',
    quizScore: 'Score', quizAccuracy: 'Accuracy',
    progressPageDesc: 'Here is your Chinese character journey. Keep going!',
    statLearned: 'Learned', statMastered: 'Mastered', statStars: 'Stars', statDays: 'Days',
    statTotalTime: 'Study Time', statAccuracy: 'Accuracy', totalChars: 'Total Chars',
    emptyHistory: 'No quiz records yet - go take a challenge!',
    wrongAnswers: '📝 Wrong Answers', noWrongAnswers: 'Great! No wrong answers!',
    ebbinghausProgress: '📅 Ebbinghaus Progress', achievementDisplay: '🏆 Achievements',
    clearProgress: '🗑️ Clear Progress', confirmClear: 'Clear ALL learning records?',
    achFirstLearn: 'First Step', achFirstLearnDesc: 'Complete learning your first character',
    achLearn10: 'Beginner', achLearn10Desc: 'Learn 10 characters',
    achLearn50: 'Rising Star', achLearn50Desc: 'Learn 50 characters',
    achLearn100: 'Expert', achLearn100Desc: 'Learn 100 characters',
    achLearn150: 'Master', achLearn150Desc: 'Learn 150 characters',
    achStreak3: 'Persistent', achStreak3Desc: 'Study 3 days in a row',
    achStreak7: 'Weekly Star', achStreak7Desc: 'Study 7 days in a row',
    achStreak30: 'Monthly Champion', achStreak30Desc: 'Study 30 days in a row',
    achQuiz5: 'Quiz Rookie', achQuiz5Desc: 'Complete 5 quizzes',
    achQuiz10: 'Quiz Master', achQuiz10Desc: 'Complete 10 quizzes',
    achQuizFull5: 'Perfect 5', achQuizFull5Desc: 'Get perfect score on 5-question quiz',
    achQuizFull10: 'Perfect 10', achQuizFull10Desc: 'Get perfect score on 10-question quiz',
    achGame100: 'Gamer', achGame100Desc: 'Score over 100 in games',
    achUnlock: '🎉 Achievement Unlocked!',
    reviewForDay: 'Day {day} Review', reviewToday: 'Review Today',
    allFilter: '✨ All', loading: 'Loading…', back: 'Back', close: 'Close',
    correct: 'Correct', wrong: 'Wrong', star: '⭐',
    gamePerfect: '🌟 Amazing!', gameGood: '👍 Great!', gameTryAgain: '💪 Try again!',
    readStory: 'Read Story', prevPage: '◀️ Prev', nextPage: 'Next ▶️',
  }
};

// ============ 全局数据 ============
let DATA = {
  characters: [], stories: [], categories: [], radicals: [], idioms: [],
  levels: [], reading: [], achievements: []
};

// ============ STATE 状态管理 ============
let STATE = {
  lang: 'zh',
  page: 'home', // home/learn/map/chars/radicals/idioms/stories/reading/games/quiz/progress
  filter: 'all',
  // 学习相关
  learn: { char: null, step: 0, steps: ['play', 'recognize', 'practice', 'write', 'test'], completed: false },
  // 测验相关
  quiz: { type: 'fromChar', total: 5, idx: 0, correct: 0, pool: [], answered: false, currentOpts: [] },
  // 进度相关
  learned: new Set(),      // 已学汉字
  mastered: new Set(),     // 已掌握汉字
  reviewing: new Set(),    // 待复习
  stars: 0,               // 星星总数
  streak: 0,              // 连续打卡天数
  lastDate: null,         // 上次学习日期
  // 闯关相关
  currentLevel: 0,        // 当前等级索引
  unlockedLevels: [0],    // 已解锁等级
  // 艾宾浩斯复习计划
  reviewSchedule: {},     // {char: [reviewDates]}
  // 游戏相关
  gameHistory: {},        // {gameId: bestScore}
  currentGame: null,      // 当前游戏
  gameScore: 0,           // 当前游戏得分
  // 成就
  unlockedAchievements: new Set(),
  // 统计
  totalStudyTime: 0,      // 总学习时长（分钟）
  quizHistory: [],        // 测验历史
  quizCount: 0,           // 完成的测验次数
  // 错题本
  wrongAnswers: [],        // 错题记录 {char, pinyin, wrongAnswer, date}
  // 每日目标
  dailyGoal: 6,
  dailyLearned: 0,
  dailyDate: null,
  // 字体大小
  fontSize: 'normal',
  // 阅读相关
  currentReading: null,
  currentPage: 0,
};

// ============ 工具函数 ============
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

function t(key) {
  return I18N[STATE.lang]?.[key] || key;
}

function speak(text, lang) {
  if (!('speechSynthesis' in window)) return;
  try {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang || (STATE.lang === 'zh' ? 'zh-CN' : 'en-US');
    u.rate = STATE.lang === 'zh' ? 0.85 : 0.9;
    u.pitch = 1.1;
    window.speechSynthesis.speak(u);
  } catch (e) {}
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getTodayStr() {
  return new Date().toLocaleDateString('zh-CN', { year: 'numeric', month: '2-digit', day: '2-digit' });
}

function daysBetween(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  return Math.floor((d2 - d1) / (1000 * 60 * 60 * 24));
}

// ============ 本地存储 ============
const STORAGE_KEY = 'hanziLand_v3';

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const p = JSON.parse(raw);
      if (p.learned) STATE.learned = new Set(p.learned);
      if (p.mastered) STATE.mastered = new Set(p.mastered);
      if (p.stars != null) STATE.stars = p.stars;
      if (p.streak != null) STATE.streak = p.streak;
      if (p.lastDate) STATE.lastDate = p.lastDate;
      if (p.unlockedLevels) STATE.unlockedLevels = p.unlockedLevels;
      if (p.reviewSchedule) STATE.reviewSchedule = p.reviewSchedule;
      if (p.wrongAnswers) STATE.wrongAnswers = p.wrongAnswers;
      if (p.quizHistory) STATE.quizHistory = p.quizHistory;
      if (p.quizCount != null) STATE.quizCount = p.quizCount;
      if (p.gameHistory) STATE.gameHistory = p.gameHistory;
      if (p.unlockedAchievements) STATE.unlockedAchievements = new Set(p.unlockedAchievements);
      if (p.dailyGoal) STATE.dailyGoal = p.dailyGoal;
      if (p.dailyLearned != null) STATE.dailyLearned = p.dailyLearned;
      if (p.dailyDate) STATE.dailyDate = p.dailyDate;
      if (p.fontSize) STATE.fontSize = p.fontSize;
      if (p.lang) STATE.lang = p.lang;
      if (p.totalStudyTime) STATE.totalStudyTime = p.totalStudyTime;
    }
  } catch (e) {}

  // 检查是否是新的一天
  const today = getTodayStr();
  if (STATE.dailyDate !== today) {
    // 重置每日学习
    STATE.dailyLearned = 0;
    STATE.dailyDate = today;

    // 更新连续打卡
    if (STATE.lastDate) {
      const last = new Date(STATE.lastDate);
      const todayDate = new Date(today);
      const diff = daysBetween(STATE.lastDate, today);
      if (diff === 1) {
        STATE.streak += 1;
      } else if (diff > 1) {
        STATE.streak = 1;
      }
    } else {
      STATE.streak = 1;
    }
    STATE.lastDate = today;
    saveState();
  }

  // 更新待复习列表
  updateReviewingSet();
}

function saveState() {
  try {
    const payload = {
      learned: Array.from(STATE.learned),
      mastered: Array.from(STATE.mastered),
      stars: STATE.stars,
      streak: STATE.streak,
      lastDate: STATE.lastDate,
      unlockedLevels: STATE.unlockedLevels,
      reviewSchedule: STATE.reviewSchedule,
      wrongAnswers: STATE.wrongAnswers,
      quizHistory: STATE.quizHistory.slice(-20),
      quizCount: STATE.quizCount,
      gameHistory: STATE.gameHistory,
      unlockedAchievements: Array.from(STATE.unlockedAchievements),
      dailyGoal: STATE.dailyGoal,
      dailyLearned: STATE.dailyLearned,
      dailyDate: STATE.dailyDate,
      fontSize: STATE.fontSize,
      lang: STATE.lang,
      totalStudyTime: STATE.totalStudyTime,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch (e) {}
}

// ============ 艾宾浩斯复习计划 ============
const EBINGHAUS_DAYS = [1, 3, 7, 14, 30];

function scheduleReview(char) {
  const today = new Date();
  const schedule = EBINGHAUS_DAYS.map(days => {
    const d = new Date(today);
    d.setDate(d.getDate() + days);
    return d.toLocaleDateString('zh-CN', { year: 'numeric', month: '2-digit', day: '2-digit' });
  });
  STATE.reviewSchedule[char] = schedule;
  saveState();
}

function updateReviewingSet() {
  const today = getTodayStr();
  STATE.reviewing = new Set();
  for (const char in STATE.reviewSchedule) {
    const schedule = STATE.reviewSchedule[char];
    if (schedule && schedule.includes(today)) {
      STATE.reviewing.add(char);
    }
  }
}

function getReviewCharsForToday() {
  const today = getTodayStr();
  const reviewChars = [];
  for (const char in STATE.reviewSchedule) {
    const schedule = STATE.reviewSchedule[char];
    if (schedule && schedule.includes(today)) {
      const charData = DATA.characters.find(c => c.char === char);
      if (charData) reviewChars.push(charData);
    }
  }
  return reviewChars;
}

// ============ 成就系统 ============
const ACHIEVEMENTS = [
  { id: 'first_learn', name: 'achFirstLearn', desc: 'achFirstLearnDesc', icon: '🌟', check: () => STATE.learned.size >= 1 },
  { id: 'learn_10', name: 'achLearn10', desc: 'achLearn10Desc', icon: '📚', check: () => STATE.learned.size >= 10 },
  { id: 'learn_50', name: 'achLearn50', desc: 'achLearn50Desc', icon: '🏅', check: () => STATE.learned.size >= 50 },
  { id: 'learn_100', name: 'achLearn100', desc: 'achLearn100Desc', icon: '🎖️', check: () => STATE.learned.size >= 100 },
  { id: 'learn_150', name: 'achLearn150', desc: 'achLearn150Desc', icon: '👑', check: () => STATE.learned.size >= 150 },
  { id: 'streak_3', name: 'achStreak3', desc: 'achStreak3Desc', icon: '🔥', check: () => STATE.streak >= 3 },
  { id: 'streak_7', name: 'achStreak7', desc: 'achStreak7Desc', icon: '🔥', check: () => STATE.streak >= 7 },
  { id: 'streak_30', name: 'achStreak30', desc: 'achStreak30Desc', icon: '🔥', check: () => STATE.streak >= 30 },
  { id: 'quiz_5', name: 'achQuiz5', desc: 'achQuiz5Desc', icon: '🎯', check: () => STATE.quizCount >= 5 },
  { id: 'quiz_10', name: 'achQuiz10', desc: 'achQuiz10Desc', icon: '🎯', check: () => STATE.quizCount >= 10 },
  { id: 'quiz_full_5', name: 'achQuizFull5', desc: 'achQuizFull5Desc', icon: '💯', check: () => STATE.quizHistory.some(h => h.correct === h.total && h.total === 5) },
  { id: 'quiz_full_10', name: 'achQuizFull10', desc: 'achQuizFull10Desc', icon: '💯', check: () => STATE.quizHistory.some(h => h.correct === h.total && h.total === 10) },
  { id: 'game_100', name: 'achGame100', desc: 'achGame100Desc', icon: '🎮', check: () => Object.values(STATE.gameHistory).some(s => s >= 100) },
];

function checkAchievements() {
  const newAchievements = [];
  for (const ach of ACHIEVEMENTS) {
    if (!STATE.unlockedAchievements.has(ach.id) && ach.check()) {
      STATE.unlockedAchievements.add(ach.id);
      newAchievements.push(ach);
    }
  }
  if (newAchievements.length > 0) {
    saveState();
    showAchievementNotification(newAchievements[0]);
  }
}

function showAchievementNotification(ach) {
  const html = `
    <div class="achievement-notification" id="ach-notify">
      <div class="ach-icon">${ach.icon}</div>
      <div class="ach-content">
        <div class="ach-title">${t(ach.name)}</div>
        <div class="ach-desc">${t(ach.desc)}</div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', html);
  setTimeout(() => {
    const el = $('#ach-notify');
    if (el) el.remove();
  }, 3000);
}

// ============ 数据规范化 ============
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
    id: s.id, title: s.title, title_en: s.title_en || s.title,
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

  const levels = raw.levels || [
    { id: 'beginner', name: '启蒙', name_en: 'Beginner', desc: '适合3-4岁，每天1-2字', desc_en: 'For 3-4 years', char_indices: [0,1,2,3,4,5,6,7,8,9] },
    { id: 'basic', name: '基础', name_en: 'Basic', desc: '适合4-5岁，每天3-4字', desc_en: 'For 4-5 years', char_indices: [10,11,12,13,14,15,16,17,18,19] },
    { id: 'intermediate', name: '进阶', name_en: 'Intermediate', desc: '适合5-6岁，每天5-6字', desc_en: 'For 5-6 years', char_indices: [20,21,22,23,24,25,26,27,28,29] },
    { id: 'advanced', name: '高级', name_en: 'Advanced', desc: '适合6-7岁，每天8-10字', desc_en: 'For 6-7 years', char_indices: [30,31,32,33,34,35,36,37,38,39] },
  ];

  const reading = raw.reading || [
    { id: 'r1', level: 1, title: '小太阳', title_en: 'Little Sun', emoji: '☀️', pages: ['太阳公公早早起。', '照亮大地真美丽。'] },
    { id: 'r2', level: 1, title: '小小月', title_en: 'Little Moon', emoji: '🌙', pages: ['月亮弯弯像小船。', '星星眨眨亮晶晶。'] },
  ];

  const categories = Array.from(catMap.values());

  return { characters, stories, categories, radicals, idioms, levels, reading };
}

// ============ 渲染头部 ============
function renderHeader() {
  const progressPct = Math.min(100, Math.round((STATE.dailyLearned / STATE.dailyGoal) * 100));
  const stats = `
    <span class="stat-pill">📚 ${STATE.learned.size}/${DATA.characters.length}</span>
    <span class="stat-pill star">⭐ ${STATE.stars}</span>
    <span class="stat-pill">🔥 ${STATE.streak}${t('streakDays')}</span>
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
    { id: 'home', label: t('navHome') },
    { id: 'learn', label: t('navLearn') },
    { id: 'map', label: t('navMap') },
    { id: 'chars', label: t('navChars') },
    { id: 'radicals', label: t('navRadicals') },
    { id: 'idioms', label: t('navIdioms') },
    { id: 'stories', label: t('navStories') },
    { id: 'reading', label: t('navReading') },
    { id: 'games', label: t('navGames') },
    { id: 'quiz', label: t('navQuiz') },
    { id: 'progress', label: t('navProgress') }
  ];
  $('#nav-bar').innerHTML = navs.map(n =>
    `<button class="nav-tab ${STATE.page===n.id?'active':''}" data-page="${n.id}">${n.label}</button>`
  ).join('');
  $$('#nav-bar .nav-tab').forEach(b => b.onclick = () => {
    STATE.page = b.dataset.page;
    STATE.currentGame = null;
    renderAll();
  });
}

// ============ 首页仪表盘 ============
function renderHomePage() {
  $('#page-title').textContent = t('welcomeTitle');
  $('#page-desc').textContent = t('welcomeDesc');
  $('#filter-bar').innerHTML = '';

  const progressPct = Math.min(100, Math.round((STATE.dailyLearned / STATE.dailyGoal) * 100));
  const isComplete = STATE.dailyLearned >= STATE.dailyGoal;

  // 今日复习
  const reviewChars = getReviewCharsForToday();

  // 推荐汉字（未学习的）
  const level = DATA.levels?.[STATE.currentLevel] || DATA.levels?.[0] || { char_indices: [0,1,2,3,4,5] };
  const todayPool = (level.char_indices || []).map(i => DATA.characters[i]).filter(c => c && !STATE.learned.has(c.char)).slice(0, 6);
  const reviewPool = shuffle(Array.from(STATE.reviewing)).slice(0, 6).map(c => DATA.characters.find(ch => ch.char === c)).filter(Boolean);

  // 最新成就
  const latestAch = STATE.unlockedAchievements.size > 0
    ? ACHIEVEMENTS.find(a => a.id === Array.from(STATE.unlockedAchievements).pop())
    : null;

  const html = `
    <div class="home-page page-enter">
      <!-- 今日进度卡片 -->
      <div class="daily-progress-card ${isComplete?'complete':''}">
        <div class="daily-header">
          <div class="daily-emoji">${isComplete ? '🎉' : '📚'}</div>
          <div class="daily-info">
            <div class="daily-title">${t('todayProgress')}</div>
            <div class="daily-num">${STATE.dailyLearned} / ${STATE.dailyGoal}</div>
          </div>
          <div class="daily-streak">
            ${t('fireEmoji')} ${STATE.streak} ${t('streakDays')}
          </div>
        </div>
        <div class="daily-bar">
          <div class="daily-bar-fill" style="width:${progressPct}%"></div>
        </div>
        <div class="daily-status">${isComplete ? t('dailyComplete') : `${progressPct}% ${t('dailyGoal')}`}</div>
      </div>

      <!-- 复习提醒 -->
      <div class="review-reminder-card ${reviewChars.length > 0 ? 'has-review' : ''}">
        <div class="reminder-icon">📅</div>
        <div class="reminder-info">
          <div class="reminder-title">${t('reviewReminder')}</div>
          <div class="reminder-count">${reviewChars.length > 0 ? `${reviewChars.length} ${STATE.lang==='zh'?'个字':'chars'}` : t('noReview')}</div>
        </div>
        ${reviewChars.length > 0 ? `<button class="btn btn-sm btn-primary" onclick="startReview()">${STATE.lang==='zh'?'开始复习':'Start Review'}</button>` : ''}
      </div>

      <!-- 快速入口 -->
      <div class="quick-actions">
        <button class="quick-btn primary" onclick="navigateTo('learn')">${t('quickStart')}</button>
        <button class="quick-btn secondary" onclick="navigateTo('map')">${t('quickMap')}</button>
        <button class="quick-btn secondary" onclick="navigateTo('games')">${t('quickGames')}</button>
        <button class="quick-btn secondary" onclick="navigateTo('quiz')">${t('quickQuiz')}</button>
      </div>

      <!-- 推荐汉字 -->
      ${todayPool.length > 0 ? `
        <div class="today-section">
          <h3>${t('recommendedChars')} 🌟</h3>
          <div class="today-chars">
            ${todayPool.map(c => `
              <div class="today-char-card" data-char="${c.char}">
                <div class="char-emoji">${c.emoji}</div>
                <div class="char-main">${c.char}</div>
                <div class="char-pinyin">${c.pinyin}</div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- 复习汉字 -->
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

      <!-- 最新成就 -->
      <div class="achievement-card">
        <h3>${t('latestAchievement')}</h3>
        ${latestAch ? `
          <div class="latest-ach">
            <div class="ach-icon-lg">${latestAch.icon}</div>
            <div class="ach-info">
              <div class="ach-name">${t(latestAch.name)}</div>
              <div class="ach-desc">${t(latestAch.desc)}</div>
            </div>
          </div>
        ` : `<div class="no-ach">${t('noAchievement')}</div>`}
      </div>
    </div>
  `;

  $('#page-main').innerHTML = html;

  // 绑定点击事件
  $$('.today-char-card, .review-char-card').forEach(el => el.onclick = () => {
    const char = DATA.characters.find(c => c.char === el.dataset.char);
    if (char) startFiveStepLearn(char);
  });
}

function navigateTo(page) {
  STATE.page = page;
  renderAll();
}

function startReview() {
  const reviewChars = getReviewCharsForToday();
  if (reviewChars.length > 0) {
    startFiveStepLearn(reviewChars[0]);
  }
}

// ============ 闯关地图 ============
function renderMapPage() {
  $('#page-title').textContent = t('chooseLevel');
  $('#page-desc').textContent = '';
  $('#filter-bar').innerHTML = '';

  const totalChars = DATA.characters.length;
  const totalProgress = Math.round((STATE.learned.size / totalChars) * 100);

  const levelEmojis = ['🐣', '🐥', '🦅', '🏆'];
  const levelColors = ['#FFD93D', '#4ECDC4', '#5B8DEF', '#FF6B9D'];

  const levelsHtml = DATA.levels.map((level, idx) => {
    const isUnlocked = STATE.unlockedLevels.includes(idx);
    const levelChars = (level.char_indices || []).map(i => DATA.characters[i]).filter(Boolean);
    const learnedInLevel = levelChars.filter(c => STATE.learned.has(c.char)).length;
    const levelProgress = levelChars.length ? Math.round((learnedInLevel / levelChars.length) * 100) : 0;
    const isCompleted = learnedInLevel === levelChars.length && levelChars.length > 0;

    return `
      <div class="level-card ${isUnlocked ? 'unlocked' : 'locked'}" data-level="${idx}" style="--level-color: ${levelColors[idx]}">
        <div class="level-emoji">${isUnlocked ? levelEmojis[idx] : '🔒'}</div>
        <div class="level-name">${STATE.lang === 'zh' ? level.name : level.name_en}</div>
        <div class="level-desc">${STATE.lang === 'zh' ? level.desc : level.desc_en}</div>
        <div class="level-progress-bar">
          <div class="level-progress-fill" style="width:${levelProgress}%"></div>
        </div>
        <div class="level-progress-text">${learnedInLevel}/${levelChars.length} ${t('charsLearned')}</div>
        ${isCompleted ? '<div class="level-badge">🌟</div>' : ''}
      </div>
    `;
  }).join('');

  const html = `
    <div class="map-page page-enter">
      <!-- 总进度 -->
      <div class="total-progress-card">
        <div class="total-progress-title">${t('totalProgress')}</div>
        <div class="total-progress-circle">
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#eee" stroke-width="10"/>
            <circle cx="50" cy="50" r="45" fill="none" stroke="#4ECDC4" stroke-width="10"
              stroke-dasharray="${2 * Math.PI * 45}" stroke-dashoffset="${2 * Math.PI * 45 * (1 - totalProgress / 100)}"
              transform="rotate(-90 50 50)"/>
          </svg>
          <div class="total-progress-text">${totalProgress}%</div>
        </div>
        <div class="total-chars">${STATE.learned.size} / ${totalChars} ${t('statLearned')}</div>
      </div>

      <!-- 等级卡片 -->
      <div class="levels-grid">
        ${levelsHtml}
      </div>
    </div>
  `;

  $('#page-main').innerHTML = html;

  // 绑定等级点击
  $$('.level-card.unlocked').forEach(el => el.onclick = () => {
    const levelIdx = parseInt(el.dataset.level, 10);
    STATE.currentLevel = levelIdx;
    STATE.filter = 'all';
    STATE.page = 'chars';
    renderAll();
  });
}

// ============ 汉字库页面 ============
function renderCharsPage() {
  $('#page-title').textContent = t('navChars');
  $('#page-desc').textContent = t('charPageDesc');

  const cats = [{ id: 'all', emoji: '✨', name: t('allFilter') }, ...DATA.categories];
  const filterBar = cats.map(c =>
    `<button class="filter-chip ${STATE.filter === c.id ? 'active' : ''}" data-cat="${c.id}">${c.emoji} ${STATE.lang === 'zh' ? c.name : c.name_en || c.name}</button>`
  ).join('');
  $('#filter-bar').innerHTML = `<div class="filter-bar">${filterBar}</div>`;
  $$('.filter-chip').forEach(b => b.onclick = () => { STATE.filter = b.dataset.cat; renderCharsPage(); });

  const chars = STATE.filter === 'all'
    ? DATA.characters
    : DATA.characters.filter(c => c.category === STATE.filter || c.category_id === STATE.filter);

  const cards = chars.map(c => {
    const learned = STATE.learned.has(c.char);
    const mastered = STATE.mastered.has(c.char);
    return `<div class="char-card ${learned ? 'learned' : ''} ${mastered ? 'mastered' : ''}" data-char="${c.char}">
      ${mastered ? '<div class="master-badge">🌟</div>' : learned ? '<div class="check-mark">✓</div>' : ''}
      <div class="cat-tag">${c.emoji}</div>
      <div class="char-illus">${c.char}</div>
      <div class="pinyin">${c.pinyin}</div>
      <div class="english">${c.english}</div>
    </div>`;
  }).join('');

  $('#page-main').innerHTML = `<div class="char-grid page-enter">${cards}</div>`;
  $$('.char-card').forEach(el => el.onclick = () => {
    const char = DATA.characters.find(c => c.char === el.dataset.char);
    if (char) startFiveStepLearn(char);
  });
}

// ============ 五步学习 ============
function startFiveStepLearn(char) {
  STATE.learn = { char, step: 0, steps: ['play', 'recognize', 'practice', 'write', 'test'], completed: false };
  STATE.page = 'learn';
  renderAll();
}

function renderLearnPage() {
  const { char, step, steps } = STATE.learn;
  if (!char) {
    renderLearnHome();
    return;
  }

  const currentStep = steps[step];
  const stepNames = {
    play: t('stepPlay'), recognize: t('stepRecognize'),
    practice: t('stepPractice'), write: t('stepWrite'), test: t('stepTest')
  };
  const stepDescs = {
    play: t('stepPlayDesc'), recognize: t('stepRecognizeDesc'),
    practice: t('stepPracticeDesc'), write: t('stepWriteDesc'), test: t('stepTestDesc')
  };

  const progressPct = Math.round((step / 5) * 100);

  let contentHtml = '';
  switch (currentStep) {
    case 'play': contentHtml = renderPlayStep(char); break;
    case 'recognize': contentHtml = renderRecognizeStep(char); break;
    case 'practice': contentHtml = renderPracticeStep(char); break;
    case 'write': contentHtml = renderWriteStep(char); break;
    case 'test': contentHtml = renderTestStep(char); break;
  }

  const html = `
    <div class="five-step-page page-enter">
      <button class="back-btn" onclick="backFromLearn()">← ${t('back')}</button>

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
      <div class="step-content" id="step-content">${contentHtml}</div>

      <!-- 导航按钮 -->
      <div class="step-nav">
        ${step > 0 ? `<button class="btn btn-outline" id="prev-step">${t('prevStep')}</button>` : ''}
        ${step < 4 ? `<button class="btn btn-primary" id="next-step">${t('nextStep')}</button>` : `<button class="btn btn-success" id="finish-learn">${t('finishStep')}</button>`}
      </div>
    </div>
  `;

  $('#page-main').innerHTML = html;

  // 绑定按钮
  if ($('#prev-step')) $('#prev-step').onclick = () => { STATE.learn.step -= 1; renderLearnPage(); };
  if ($('#next-step')) {
    $('#next-step').onclick = () => {
      if (currentStep === 'play') bindPlayGame();
      STATE.learn.step += 1;
      renderLearnPage();
    };
  }
  if ($('#finish-learn')) $('#finish-learn').onclick = () => finishLearning();
}

function backFromLearn() {
  STATE.page = 'home';
  STATE.learn = { char: null, step: 0, steps: ['play', 'recognize', 'practice', 'write', 'test'], completed: false };
  renderAll();
}

function renderLearnHome() {
  $('#page-title').textContent = t('navLearn');
  $('#page-desc').textContent = t('welcomeDesc');
  $('#filter-bar').innerHTML = '';

  const level = DATA.levels?.[STATE.currentLevel] || DATA.levels?.[0] || { char_indices: [0,1,2,3,4,5] };
  const todayPool = (level.char_indices || []).map(i => DATA.characters[i]).filter(c => c && !STATE.learned.has(c.char)).slice(0, 6);
  const reviewChars = getReviewCharsForToday().slice(0, 6);

  const progressPct = Math.min(100, Math.round((STATE.dailyLearned / STATE.dailyGoal) * 100));
  const isComplete = STATE.dailyLearned >= STATE.dailyGoal;

  const html = `
    <div class="learn-home page-enter">
      <!-- 今日进度 -->
      <div class="daily-progress-card ${isComplete ? 'complete' : ''}">
        <div class="daily-header">
          <div class="daily-emoji">${isComplete ? '🎉' : '📚'}</div>
          <div class="daily-info">
            <div class="daily-title">${t('todayProgress')}</div>
            <div class="daily-num">${STATE.dailyLearned} / ${STATE.dailyGoal}</div>
          </div>
        </div>
        <div class="daily-bar">
          <div class="daily-bar-fill" style="width:${progressPct}%"></div>
        </div>
      </div>

      <!-- 新汉字 -->
      ${todayPool.length > 0 ? `
        <div class="today-section">
          <h3>${t('newChars')} 🌟</h3>
          <div class="today-chars">
            ${todayPool.map(c => `
              <div class="today-char-card" data-char="${c.char}">
                <div class="char-emoji">${c.emoji}</div>
                <div class="char-main">${c.char}</div>
                <div class="char-pinyin">${c.pinyin}</div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- 复习 -->
      ${reviewChars.length > 0 ? `
        <div class="review-section">
          <h3>${t('reviewChars')} 🔄</h3>
          <div class="review-chars">
            ${reviewChars.map(c => `
              <div class="review-char-card learned" data-char="${c.char}">
                <div class="char-main">${c.char}</div>
                <div class="char-pinyin">${c.pinyin}</div>
                <div class="check-mark">✓</div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}
    </div>
  `;

  $('#page-main').innerHTML = html;

  $$('.today-char-card, .review-char-card').forEach(el => el.onclick = () => {
    const char = DATA.characters.find(c => c.char === el.dataset.char);
    if (char) startFiveStepLearn(char);
  });
}

// Step 1: 玩一玩 - 配对游戏
function renderPlayStep(char) {
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
      <div class="match-options" id="match-options">
        ${options.map(c => `
          <div class="match-option" data-char="${c.char}" data-correct="${c.char === char.char}">
            <div class="opt-char">${c.char}</div>
          </div>
        `).join('')}
      </div>
      <div id="play-feedback"></div>
    </div>
  `;
}

function bindPlayGame() {
  $$('.match-option').forEach(el => {
    el.onclick = () => {
      if (el.classList.contains('correct') || el.classList.contains('wrong')) return;
      const correct = el.dataset.correct === 'true';
      if (correct) {
        el.classList.add('correct');
        $('#play-feedback').innerHTML = `<div class="game-feedback success">✨ ${t('gameGood')}</div>`;
        STATE.stars += 1;
        saveState();
        renderHeader();
      } else {
        el.classList.add('wrong');
        $$('.match-option').forEach(opt => {
          if (opt.dataset.correct === 'true') opt.classList.add('correct');
        });
        $('#play-feedback').innerHTML = `<div class="game-feedback fail">${t('gameTryAgain')}</div>`;
      }
    };
  });
}

// Step 2: 认一认 - 字源演变
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
      <div class="origin-actions">
        <button class="btn btn-primary" onclick="speak('${char.char}','zh-CN')">${t('listenChar')}</button>
        <button class="btn btn-secondary" onclick="speak('${char.pinyin}','zh-CN')">${t('listenPinyin')}</button>
      </div>
    </div>
  `;
}

// Step 3: 练一练 - 拼音跟读+组词
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

// Step 4: 写一写 - 田字格笔顺
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
      <!-- 田字格 -->
      <div class="tian-grid">
        <div class="tian-cell"></div><div class="tian-cell"></div><div class="tian-cell"></div><div class="tian-cell"></div>
        <div class="tian-cross"></div>
        <div class="tian-cell"></div><div class="tian-cell"></div><div class="tian-cell"></div><div class="tian-cell"></div>
        <div class="tian-char" id="stroke-char">${char.char}</div>
      </div>
      <div class="stroke-controls">
        <button class="btn btn-primary" id="play-stroke" onclick="playStrokeAnimation('${char.char}')">▶️ ${STATE.lang==='zh'?'播放动画':'Play'}</button>
        <button class="btn btn-outline" onclick="speak('${char.char}','zh-CN')">${t('listenChar')}</button>
      </div>
      <div class="stroke-list">
        ${strokes.map((s, i) => `<span class="stroke-item">${i + 1}. ${s}</span>`).join('')}
      </div>
    </div>
  `;
}

function playStrokeAnimation(char) {
  const el = $('#stroke-char');
  if (el) {
    el.classList.add('stroke-animate');
    setTimeout(() => el.classList.remove('stroke-animate'), 1000);
  }
}

// Step 5: 测一测 - 小测验
function renderTestStep(char) {
  const distractors = shuffle(DATA.characters.filter(c => c.char !== char.char)).slice(0, 3);
  const options = shuffle([{ text: char.pinyin, correct: true }, ...distractors.map(c => ({ text: c.pinyin, correct: false }))]);
  STATE.learn.testOptions = options;

  return `
    <div class="test-quiz">
      <h3>${t('stepTest')}</h3>
      <div class="test-question">
        <div class="test-char">${char.char}</div>
        <div class="test-hint">${STATE.lang === 'zh' ? '选择正确的拼音' : 'Choose correct pinyin'}</div>
      </div>
      <div class="test-options" id="test-options">
        ${options.map((o, i) => `
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
  $$('.test-option').forEach(el => {
    el.onclick = () => {
      if (el.classList.contains('correct') || el.classList.contains('wrong')) return;
      const i = parseInt(el.dataset.i, 10);
      const chosen = STATE.learn.testOptions[i];
      if (chosen.correct) {
        el.classList.add('correct');
        $('#test-feedback').innerHTML = `<div class="test-feedback success">✨ ${t('quizRight')} +2 ⭐</div>`;
        STATE.stars += 2;
      } else {
        el.classList.add('wrong');
        STATE.learn.testOptions.forEach((opt, j) => {
          if (opt.correct) $(`.test-option[data-i="${j}"]`).classList.add('correct');
        });
        $('#test-feedback').innerHTML = `<div class="test-feedback fail">${t('quizWrong').replace('{ans}', STATE.learn.char.pinyin)}</div>`;
        // 记录错题
        STATE.wrongAnswers.push({
          char: STATE.learn.char.char,
          pinyin: STATE.learn.char.pinyin,
          wrongAnswer: chosen.text,
          date: getTodayStr()
        });
        if (STATE.wrongAnswers.length > 50) STATE.wrongAnswers = STATE.wrongAnswers.slice(-50);
      }
      saveState();
      renderHeader();
    };
  });
}

function finishLearning() {
  const char = STATE.learn.char;
  if (!STATE.learned.has(char.char)) {
    STATE.learned.add(char.char);
    STATE.dailyLearned += 1;
    STATE.stars += 5;
    // 安排艾宾浩斯复习
    scheduleReview(char.char);
    // 检查是否完成等级
    checkLevelUnlock();
  }
  // 如果测试全对，标记为掌握
  const testCorrect = STATE.learn.testOptions ? STATE.learn.testOptions.filter(o => o.correct).length : 0;
  if (testCorrect === STATE.learn.testOptions?.length && STATE.learn.testOptions?.length > 0) {
    STATE.mastered.add(char.char);
  }

  saveState();
  checkAchievements();

  STATE.learn.completed = true;
  STATE.learn = { char: null, step: 0, steps: ['play', 'recognize', 'practice', 'write', 'test'], completed: false };
  STATE.page = 'home';
  renderAll();
}

function checkLevelUnlock() {
  const level = DATA.levels?.[STATE.currentLevel];
  if (!level) return;
  const levelChars = (level.char_indices || []).map(i => DATA.characters[i]).filter(Boolean);
  const allLearned = levelChars.every(c => STATE.learned.has(c.char));
  if (allLearned && STATE.currentLevel < DATA.levels.length - 1) {
    if (!STATE.unlockedLevels.includes(STATE.currentLevel + 1)) {
      STATE.unlockedLevels.push(STATE.currentLevel + 1);
    }
  }
}

// ============ 偏旁部首页面 ============
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
  document.body.insertAdjacentHTML('beforeend', html);
  $('#modal-mask').onclick = e => { if (e.target.id === 'modal-mask') closeModal(); };
  $('#modal-close').onclick = closeModal;
  $$('.radical-modal-char').forEach(el => el.onclick = () => {
    const char = DATA.characters.find(c => c.char === el.dataset.char);
    if (char) { closeModal(); startFiveStepLearn(char); }
  });
}

// ============ 成语学习页面 ============
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
  document.body.insertAdjacentHTML('beforeend', html);
  $('#modal-mask').onclick = e => { if (e.target.id === 'modal-mask') closeModal(); };
  $('#modal-close').onclick = closeModal;
  $$('.idiom-modal-char').forEach(el => el.onclick = () => {
    const char = DATA.characters.find(c => c.char === el.dataset.char);
    if (char) { closeModal(); startFiveStepLearn(char); }
  });
}

// ============ 故事页面 ============
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
          <button class="btn btn-primary" onclick="speak('${(STATE.lang === 'zh' ? s.content_cn : s.content_en).replace(/'/g, "\\'")}','zh-CN')">📢 ${t('listenStory')}</button>
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
  document.body.insertAdjacentHTML('beforeend', html);
  $('#modal-mask').onclick = e => { if (e.target.id === 'modal-mask') closeModal(); };
  $('#modal-close').onclick = closeModal;
  $$('.story-modal-char').forEach(el => el.onclick = () => {
    const char = DATA.characters.find(c => c.char === el.dataset.char);
    if (char) { closeModal(); startFiveStepLearn(char); }
  });
}

// ============ 绘本阅读页面 ============
function renderReadingPage() {
  $('#page-title').textContent = t('navReading');
  $('#page-desc').textContent = t('readingPageDesc');
  $('#filter-bar').innerHTML = '';

  if (STATE.currentReading) {
    renderReadingContent();
    return;
  }

  const cards = DATA.reading.map(r => `
    <div class="reading-card" data-reading="${r.id}">
      <div class="reading-emoji">${r.emoji}</div>
      <div class="reading-title">${STATE.lang === 'zh' ? r.title : r.title_en}</div>
      <div class="reading-level">${t('readingLevel')}: ${r.level}</div>
    </div>
  `).join('');

  $('#page-main').innerHTML = `<div class="reading-grid page-enter">${cards || '<div class="empty-state">📚 '+t('loading')+'</div>'}</div>`;
  $$('.reading-card').forEach(el => el.onclick = () => {
    const reading = DATA.reading.find(r => r.id === el.dataset.reading);
    if (reading) {
      STATE.currentReading = reading;
      STATE.currentPage = 0;
      renderReadingContent();
    }
  });
}

function renderReadingContent() {
  const r = STATE.currentReading;
  if (!r) return;

  const page = r.pages?.[STATE.currentPage] || '';
  const totalPages = r.pages?.length || 1;

  const html = `
    <div class="reading-content page-enter">
      <button class="back-btn" onclick="closeReading()">← ${t('back')}</button>
      <div class="reading-header">
        <div class="reading-emoji-lg">${r.emoji}</div>
        <div class="reading-title-lg">${STATE.lang === 'zh' ? r.title : r.title_en}</div>
      </div>
      <div class="reading-page">
        <div class="page-text" id="page-text">${page}</div>
        <button class="btn btn-primary btn-large" onclick="speak('${page.replace(/'/g, "\\'")}','zh-CN')">🔊 ${t('listenStory')}</button>
      </div>
      <div class="reading-nav">
        <button class="btn btn-outline" ${STATE.currentPage === 0 ? 'disabled' : ''} onclick="prevPage()">${t('prevPage')}</button>
        <span class="page-indicator">${STATE.currentPage + 1} / ${totalPages}</span>
        <button class="btn btn-outline" ${STATE.currentPage >= totalPages - 1 ? 'disabled' : ''} onclick="nextPage()">${t('nextPage')}</button>
      </div>
    </div>
  `;

  $('#page-main').innerHTML = html;
}

function closeReading() {
  STATE.currentReading = null;
  STATE.currentPage = 0;
  renderAll();
}

function prevPage() {
  if (STATE.currentPage > 0) {
    STATE.currentPage -= 1;
    renderReadingContent();
  }
}

function nextPage() {
  const r = STATE.currentReading;
  if (r && STATE.currentPage < (r.pages?.length || 1) - 1) {
    STATE.currentPage += 1;
    renderReadingContent();
  }
}

// ============ 游戏中心 ============
function renderGamesPage() {
  $('#page-title').textContent = t('gameCenter');
  $('#page-desc').textContent = t('selectGame');
  $('#filter-bar').innerHTML = '';

  if (STATE.currentGame) {
    renderCurrentGame();
    return;
  }

  const games = [
    { id: 'match', name: t('gameMatch'), desc: t('gameMatchDesc'), emoji: '🎯', color: '#FF6B9D' },
    { id: 'find', name: t('gameFind'), desc: t('gameFindDesc'), emoji: '🔍', color: '#4ECDC4' },
    { id: 'order', name: t('gameOrder'), desc: t('gameOrderDesc'), emoji: '✏️', color: '#5B8DEF' },
    { id: 'word', name: t('gameWord'), desc: t('gameWordDesc'), emoji: '🔤', color: '#FFD93D' },
  ];

  const gamesHtml = games.map(g => `
    <div class="game-card" data-game="${g.id}" style="--game-color: ${g.color}">
      <div class="game-emoji">${g.emoji}</div>
      <div class="game-name">${g.name}</div>
      <div class="game-desc">${g.desc}</div>
      <div class="game-best">${t('gameScore')}: ${STATE.gameHistory[g.id] || 0}</div>
    </div>
  `).join('');

  $('#page-main').innerHTML = `<div class="games-grid page-enter">${gamesHtml}</div>`;
  $$('.game-card').forEach(el => el.onclick = () => {
    STATE.currentGame = el.dataset.game;
    STATE.gameScore = 0;
    initGame();
  });
}

// ============ 游戏逻辑 ============
let gameData = { chars: [], target: null, options: [], correct: null,strokes: [], order: [] };

function initGame() {
  switch (STATE.currentGame) {
    case 'match': initMatchGame(); break;
    case 'find': initFindGame(); break;
    case 'order': initOrderGame(); break;
    case 'word': initWordGame(); break;
  }
  renderCurrentGame();
}

function initMatchGame() {
  // 汉字拼音配对
  const pool = shuffle(DATA.characters).slice(0, 6);
  gameData.chars = pool;
  gameData.target = pool[0];
  gameData.options = shuffle(pool.map(c => c.pinyin));
  gameData.correct = pool[0].pinyin;
  gameData.matchScore = 0;
  gameData.matchTotal = pool.length;
  gameData.matchIdx = 0;
}

function initFindGame() {
  // 在多个汉字中找到目标拼音对应的汉字
  const pool = shuffle(DATA.characters).slice(0, 12);
  gameData.target = pool[0];
  gameData.options = pool;
  gameData.findScore = 0;
  gameData.findRound = 0;
  gameData.findTotal = 5;
}

function initOrderGame() {
  // 笔顺排序
  const char = shuffle(DATA.characters.filter(c => c.stroke_order && c.stroke_order.length > 2))[0];
  gameData.target = char;
  gameData.strokes = char.stroke_order;
  gameData.order = shuffle(char.stroke_order.map((s, i) => ({ text: s, idx: i })));
  gameData.orderScore = 0;
}

function initWordGame() {
  // 组词游戏
  const char = shuffle(DATA.characters.filter(c => c.words && c.words.length > 0))[0];
  gameData.target = char;
  const correctWord = char.words[0];
  const wrongWords = shuffle(DATA.characters.filter(c => c.char !== char.char)).slice(0, 3).flatMap(c => c.words || []);
  gameData.options = shuffle([correctWord, ...wrongWords.slice(0, 2)]);
  gameData.wordScore = 0;
  gameData.wordRound = 0;
  gameData.wordTotal = 5;
}

function renderCurrentGame() {
  let content = '';
  switch (STATE.currentGame) {
    case 'match': content = renderMatchGame(); break;
    case 'find': content = renderFindGame(); break;
    case 'order': content = renderOrderGame(); break;
    case 'word': content = renderWordGame(); break;
  }

  const html = `
    <div class="game-page page-enter">
      <button class="back-btn" onclick="backFromGame()">← ${t('back')}</button>
      <div class="game-score-display">${t('gameScore')}: ${STATE.gameScore}</div>
      ${content}
    </div>
  `;
  $('#page-main').innerHTML = html;
  bindGameEvents();
}

function renderMatchGame() {
  const { target, options, matchIdx, matchTotal, matchScore } = gameData;
  if (matchIdx >= matchTotal) {
    return renderGameEnd('match', matchScore, matchTotal * 2);
  }
  return `
    <div class="match-game">
      <div class="match-progress">${matchIdx + 1} / ${matchTotal}</div>
      <div class="match-target-char">${target.char}</div>
      <div class="match-pinyin-display">${target.pinyin}</div>
      <div class="match-pinyin-options">
        ${options.map(p => `<div class="pinyin-opt" data-pinyin="${p}">${p}</div>`).join('')}
      </div>
      <div class="game-instruction">${STATE.lang === 'zh' ? '选择正确的拼音' : 'Choose correct pinyin'}</div>
    </div>
  `;
}

function renderFindGame() {
  const { target, options, findRound, findTotal, findScore } = gameData;
  if (findRound >= findTotal) {
    return renderGameEnd('find', findScore, findTotal * 2);
  }
  return `
    <div class="find-game">
      <div class="find-progress">${findRound + 1} / ${findTotal}</div>
      <div class="find-target">
        <div class="find-pinyin">${target.pinyin}</div>
        <button class="btn btn-sm btn-primary" onclick="speak('${target.char}','zh-CN')">🔊</button>
      </div>
      <div class="find-grid">
        ${options.map(c => `<div class="find-char" data-char="${c.char}">${c.char}</div>`).join('')}
      </div>
      <div class="game-instruction">${STATE.lang === 'zh' ? '找到这个汉字' : 'Find this character'}</div>
    </div>
  `;
}

function renderOrderGame() {
  const { strokes, order, orderScore } = gameData;
  return `
    <div class="order-game">
      <div class="order-target-char">${gameData.target.char}</div>
      <div class="order-instruction">${STATE.lang === 'zh' ? '按正确顺序点击笔画' : 'Click strokes in correct order'}</div>
      <div class="order-list" id="order-list">
        ${order.map((o, i) => `<div class="order-item" data-idx="${o.idx}" data-i="${i}">${o.text}</div>`).join('')}
      </div>
      <div class="order-result" id="order-result"></div>
    </div>
  `;
}

function renderWordGame() {
  const { target, options, wordRound, wordTotal, wordScore } = gameData;
  if (wordRound >= wordTotal) {
    return renderGameEnd('word', wordScore, wordTotal * 2);
  }
  const correctWord = target.words[0];
  return `
    <div class="word-game">
      <div class="word-progress">${wordRound + 1} / ${wordTotal}</div>
      <div class="word-target-char">${target.char}</div>
      <div class="word-hint">${STATE.lang === 'zh' ? '组成正确的词' : 'Form correct word'}</div>
      <div class="word-options">
        ${options.map(w => `<div class="word-opt" data-word="${w.word}">${w.word}</div>`).join('')}
      </div>
    </div>
  `;
}

function renderGameEnd(gameId, score, maxScore) {
  const pct = Math.round((score / maxScore) * 100);
  const emoji = pct === 100 ? '🌟' : pct >= 60 ? '👍' : '💪';
  const msg = pct === 100 ? t('gamePerfect') : pct >= 60 ? t('gameGood') : t('gameTryAgain');

  // 保存最高分
  if (!STATE.gameHistory[gameId] || score > STATE.gameHistory[gameId]) {
    STATE.gameHistory[gameId] = score;
  }
  saveState();
  checkAchievements();

  return `
    <div class="game-end">
      <div class="game-end-emoji">${emoji}</div>
      <div class="game-end-msg">${msg}</div>
      <div class="game-end-score">${t('gameScore')}: ${score} / ${maxScore}</div>
      <div class="game-end-actions">
        <button class="btn btn-primary" onclick="restartGame()">${t('gameRestart')}</button>
        <button class="btn btn-outline" onclick="backFromGame()">${t('gameBack')}</button>
      </div>
    </div>
  `;
}

function bindGameEvents() {
  // Match game
  $$('.pinyin-opt').forEach(el => el.onclick = () => {
    const pinyin = el.dataset.pinyin;
    if (pinyin === gameData.correct) {
      el.classList.add('correct');
      gameData.matchScore += 1;
      STATE.gameScore += 1;
    } else {
      el.classList.add('wrong');
      $$('.pinyin-opt').forEach(o => { if (o.dataset.pinyin === gameData.correct) o.classList.add('correct'); });
    }
    setTimeout(() => {
      gameData.matchIdx += 1;
      if (gameData.matchIdx < gameData.matchTotal) {
        const nextChar = gameData.chars[gameData.matchIdx];
        gameData.target = nextChar;
        gameData.correct = nextChar.pinyin;
        gameData.options = shuffle(DATA.characters.filter(c => c.char !== nextChar.char).slice(0, 3).map(c => c.pinyin).concat([nextChar.pinyin]));
      }
      renderCurrentGame();
    }, 800);
  });

  // Find game
  $$('.find-char').forEach(el => el.onclick = () => {
    const char = el.dataset.char;
    if (char === gameData.target.char) {
      el.classList.add('correct');
      gameData.findScore += 2;
      STATE.gameScore += 2;
    } else {
      el.classList.add('wrong');
    }
    setTimeout(() => {
      gameData.findRound += 1;
      if (gameData.findRound < gameData.findTotal) {
        const pool = shuffle(DATA.characters).slice(0, 12);
        gameData.target = pool[0];
        gameData.options = pool;
      }
      renderCurrentGame();
    }, 800);
  });

  // Order game - 笔顺排序
  let selectedOrder = [];
  $$('.order-item').forEach(el => el.onclick = () => {
    if (el.classList.contains('used')) return;
    el.classList.add('used');
    selectedOrder.push({ idx: parseInt(el.dataset.idx), text: el.textContent });

    if (selectedOrder.length === gameData.strokes.length) {
      // 检查顺序
      const correct = selectedOrder.every((o, i) => o.idx === i);
      if (correct) {
        gameData.orderScore = gameData.strokes.length * 2;
        STATE.gameScore += gameData.orderScore;
        $('#order-result').innerHTML = `<div class="order-correct">✨ ${t('correct')}!</div>`;
      } else {
        const correctOrder = gameData.strokes.map((s, i) => `${i + 1}. ${s}`).join(', ');
        $('#order-result').innerHTML = `<div class="order-wrong">${t('wrong')}: ${correctOrder}</div>`;
      }
      setTimeout(() => {
        // 更新最高分
        if (!STATE.gameHistory['order'] || gameData.orderScore > STATE.gameHistory['order']) {
          STATE.gameHistory['order'] = gameData.orderScore;
        }
        saveState();
        checkAchievements();
        renderCurrentGame();
      }, 2000);
    }
  });

  // Word game
  $$('.word-opt').forEach(el => el.onclick = () => {
    const word = el.dataset.word;
    const correctWord = gameData.target.words[0];
    if (word === correctWord.word) {
      el.classList.add('correct');
      gameData.wordScore += 2;
      STATE.gameScore += 2;
    } else {
      el.classList.add('wrong');
      $$('.word-opt').forEach(o => { if (o.dataset.word === correctWord.word) o.classList.add('correct'); });
    }
    setTimeout(() => {
      gameData.wordRound += 1;
      if (gameData.wordRound < gameData.wordTotal) {
        const nextChar = shuffle(DATA.characters.filter(c => c.words && c.words.length > 0))[0];
        gameData.target = nextChar;
        const correctWord = nextChar.words[0];
        const wrongWords = shuffle(DATA.characters.filter(c => c.char !== nextChar.char)).slice(0, 3).flatMap(c => c.words || []);
        gameData.options = shuffle([correctWord, ...wrongWords.slice(0, 2)]);
      }
      renderCurrentGame();
    }, 800);
  });
}

function restartGame() {
  STATE.gameScore = 0;
  initGame();
  renderCurrentGame();
}

function backFromGame() {
  STATE.currentGame = null;
  renderAll();
}

// ============ 趣味测验 ============
function renderQuizPage() {
  $('#page-title').textContent = t('navQuiz');
  $('#page-desc').textContent = t('quizPageDesc');
  $('#filter-bar').innerHTML = '';

  if (STATE.quiz.pool.length > 0 && STATE.quiz.idx < STATE.quiz.total) {
    renderQuizQuestion();
    return;
  }

  if (STATE.quiz.pool.length > 0 && STATE.quiz.idx >= STATE.quiz.total) {
    renderQuizFinal();
    return;
  }

  const catOpts = [{ id: 'all', name: '✨ ' + t('allFilter') }, ...DATA.categories].map(c =>
    `<option value="${c.id}">${c.emoji || '🌟'} ${STATE.lang === 'zh' ? c.name : c.name_en || c.name}</option>`
  ).join('');

  $('#page-main').innerHTML = `
    <div class="quiz-setup page-enter">
      <div class="quiz-control">
        <div class="control-group">
          <label>${t('quizCategory')}</label>
          <select id="qc-cat">${catOpts}</select>
        </div>
        <div class="control-group">
          <label>${t('quizCategory')}</label>
          <select id="qc-type">
            <option value="fromChar">${t('quizFromChar')}</option>
            <option value="fromPinyin">${t('quizFromPinyin')}</option>
            <option value="mix">${t('quizMix')}</option>
          </select>
        </div>
        <div class="control-group">
          <label>${t('quizCount')}</label>
          <select id="qc-count">${[5, 10, 15, 20].map(n => `<option value="${n}">${n}</option>`).join('')}</select>
        </div>
        <button class="btn btn-success btn-large" id="qc-start">${t('quizStart')}</button>
      </div>
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
  STATE.quiz = { type, total: pool.length, idx: 0, correct: 0, pool, answered: false, currentOpts: [] };
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const q = STATE.quiz;
  if (q.idx >= q.total) {
    renderQuizFinal();
    return;
  }

  const cur = q.pool[q.idx];
  const type = q.type === 'mix' ? (Math.random() < 0.5 ? 'fromChar' : 'fromPinyin') : q.type;

  let promptHtml = '';
  let options = [];

  if (type === 'fromChar') {
    promptHtml = `
      <div class="q-big">${cur.char}</div>
      <button class="btn btn-primary" onclick="speak('${cur.char}','zh-CN')">🔊 ${t('listenChar')}</button>
      <div class="q-hint">${STATE.lang === 'zh' ? '选择正确的拼音' : 'Choose correct pinyin'}</div>`;
    const distractors = shuffle(DATA.characters.filter(c => c.char !== cur.char)).slice(0, 3).map(c => c.pinyin);
    options = shuffle([cur.pinyin, ...distractors]);
    STATE.quiz.currentOpts = options.map(o => ({ text: o, correct: o === cur.pinyin }));
  } else {
    promptHtml = `
      <div class="q-pinyin">${cur.pinyin}</div>
      <button class="btn btn-primary" onclick="speak('${cur.char}','zh-CN')">🔊</button>
      <div class="q-hint">${STATE.lang === 'zh' ? '选择正确的汉字' : 'Choose correct character'}</div>`;
    const distractors = shuffle(DATA.characters.filter(c => c.char !== cur.char)).slice(0, 3).map(c => c.char);
    options = shuffle([cur.char, ...distractors]);
    STATE.quiz.currentOpts = options.map(o => ({ text: o, correct: o === cur.char }));
  }

  const pct = Math.round((q.idx / q.total) * 100);
  $('#page-main').innerHTML = `
    <div class="quiz-box page-enter">
      <div class="quiz-progress-bar"><span style="width:${pct}%"></span></div>
      <div class="quiz-progress-text">${t('quizProg').replace('{cur}', q.idx + 1).replace('{total}', q.total)} · ✨ ${q.correct}</div>
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

  setTimeout(() => speak(cur.char, 'zh-CN'), 300);
  $$('.opt-card').forEach(el => el.onclick = () => handleQuizAnswer(el));
}

function handleQuizAnswer(el) {
  if (STATE.quiz.answered) return;
  STATE.quiz.answered = true;

  const i = parseInt(el.dataset.i, 10);
  const chosen = STATE.quiz.currentOpts[i];
  const correctOpt = STATE.quiz.currentOpts.find(o => o.correct);

  $$('.opt-card').forEach((card, j) => {
    if (STATE.quiz.currentOpts[j].correct) card.classList.add('correct');
    else if (j === i) card.classList.add('wrong');
  });

  if (chosen.correct) {
    STATE.quiz.correct += 1;
    STATE.stars += 2;
    $('#quiz-feedback').innerHTML = `<div class="quiz-feedback success">${t('quizRight')} +2 ⭐</div>`;
  } else {
    $('#quiz-feedback').innerHTML = `<div class="quiz-feedback fail">${t('quizWrong').replace('{ans}', correctOpt.text)}</div>`;
    STATE.wrongAnswers.push({
      char: STATE.quiz.pool[STATE.quiz.idx].char,
      pinyin: STATE.quiz.pool[STATE.quiz.idx].pinyin,
      wrongAnswer: chosen.text,
      date: getTodayStr()
    });
    if (STATE.wrongAnswers.length > 50) STATE.wrongAnswers = STATE.wrongAnswers.slice(-50);
  }

  saveState();
  renderHeader();

  setTimeout(() => {
    STATE.quiz.idx += 1;
    STATE.quiz.answered = false;
    renderQuizQuestion();
  }, 1400);
}

function renderQuizFinal() {
  const q = STATE.quiz;
  const pct = Math.round((q.correct / q.total) * 100);

  STATE.quizHistory.push({
    date: new Date().toLocaleString(STATE.lang === 'zh' ? 'zh-CN' : 'en-US', { month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }),
    correct: q.correct, total: q.total, pct
  });
  STATE.quizCount += 1;
  saveState();
  checkAchievements();

  $('#page-main').innerHTML = `
    <div class="quiz-box page-enter">
      <div class="quiz-final">
        <div class="score-circle"><div class="num">${q.correct}/${q.total}</div><div class="pct">${pct}%</div></div>
        <h2>${t('quizFinishTitle')}</h2>
        <p>✨ ${t('quizScore')}: ${q.correct * 2} ⭐ · ${t('statStars')}: ${STATE.stars}</p>
        <button class="btn btn-success" id="btn-retry">${t('quizRetry')}</button>
      </div>
    </div>
  `;

  $('#btn-retry').onclick = () => {
    STATE.quiz = { type: 'fromChar', total: 5, idx: 0, correct: 0, pool: [], answered: false, currentOpts: [] };
    renderQuizPage();
  };
}

// ============ 学习报告 ============
function renderProgressPage() {
  $('#page-title').textContent = t('navProgress');
  $('#page-desc').textContent = t('progressPageDesc');
  $('#filter-bar').innerHTML = '';

  const totalChars = DATA.characters.length;
  const learnedPct = totalChars ? Math.round((STATE.learned.size / totalChars) * 100) : 0;
  const masteredPct = totalChars ? Math.round((STATE.mastered.size / totalChars) * 100) : 0;
  const history = STATE.quizHistory.slice().reverse();

  // 计算测验正确率
  const totalCorrect = history.reduce((sum, h) => sum + h.correct, 0);
  const totalQuestions = history.reduce((sum, h) => sum + h.total, 0);
  const accuracy = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

  // 错题本
  const recentWrong = STATE.wrongAnswers.slice(-10);

  // 艾宾浩斯进度
  const reviewProgress = [];
  for (const char in STATE.reviewSchedule) {
    const schedule = STATE.reviewSchedule[char];
    if (schedule) {
      const charData = DATA.characters.find(c => c.char === char);
      if (charData) {
        reviewProgress.push({
          char: charData.char,
          pinyin: charData.pinyin,
          schedule,
          nextReview: schedule.find(d => new Date(d) >= new Date(getTodayStr())) || null
        });
      }
    }
  }

  // 成就
  const unlockedAchs = ACHIEVEMENTS.filter(a => STATE.unlockedAchievements.has(a.id));

  const boxes = `
    <div class="progress-boxes">
      <div class="progress-box"><div class="emoji">📚</div><div class="num">${STATE.learned.size}</div><div class="cap">${t('statLearned')}</div></div>
      <div class="progress-box"><div class="emoji">🌟</div><div class="num">${STATE.mastered.size}</div><div class="cap">${t('statMastered')}</div></div>
      <div class="progress-box"><div class="emoji">⭐</div><div class="num">${STATE.stars}</div><div class="cap">${t('statStars')}</div></div>
      <div class="progress-box"><div class="emoji">🔥</div><div class="num">${STATE.streak}</div><div class="cap">${t('streakDays')}</div></div>
      <div class="progress-box"><div class="emoji">📈</div><div class="num">${accuracy}%</div><div class="cap">${t('statAccuracy')}</div></div>
    </div>
  `;

  const progressBars = `
    <div class="progress-bars-section">
      <h3>📊 ${STATE.lang === 'zh' ? '学习进度' : 'Learning Progress'}</h3>
      <div class="progress-bar-item">
        <div class="pb-label">${t('statLearned')} (${STATE.learned.size}/${totalChars})</div>
        <div class="pb-bar"><div class="pb-fill" style="width:${learnedPct}%"></div></div>
      </div>
      <div class="progress-bar-item">
        <div class="pb-label">${t('statMastered')} (${STATE.mastered.size}/${totalChars})</div>
        <div class="pb-bar"><div class="pb-fill mastered" style="width:${masteredPct}%"></div></div>
      </div>
    </div>
  `;

  const wrongSection = recentWrong.length > 0
    ? `<div class="wrong-section"><h3>${t('wrongAnswers')}</h3><div class="wrong-list">${recentWrong.map(w => `
        <div class="wrong-item">
          <span class="wrong-char">${w.char}</span>
          <span class="wrong-pinyin">${w.pinyin}</span>
          <span class="wrong-wrong">${w.wrongAnswer}</span>
          <span class="wrong-date">${w.date}</span>
        </div>
      `).join('')}</div></div>`
    : `<div class="empty-wrong"><div class="empty-emoji">🎉</div><div>${t('noWrongAnswers')}</div></div>`;

  const achSection = unlockedAchs.length > 0
    ? `<div class="ach-section"><h3>${t('achievementDisplay')}</h3><div class="ach-grid">${unlockedAchs.map(a => `
        <div class="ach-item">
          <div class="ach-icon">${a.icon}</div>
          <div class="ach-name">${t(a.name)}</div>
        </div>
      `).join('')}</div></div>`
    : '';

  const recentHistory = history.length === 0
    ? `<div class="empty-history">${t('emptyHistory')}</div>`
    : `<div class="history-section"><h3>📅 ${STATE.lang === 'zh' ? '最近测验' : 'Recent Quizzes'}</h3>
       <div class="history-list">${history.slice(0, 5).map(h => `<div class="history-item"><span>${h.date}</span><span class="score">${h.correct}/${h.total} (${h.pct}%)</span></div>`).join('')}</div></div>`;

  $('#page-main').innerHTML = `
    <div class="progress-page page-enter">
      ${boxes}
      ${progressBars}
      ${recentHistory}
      ${wrongSection}
      ${achSection}
      <div class="clear-section">
        <button class="btn btn-danger" id="btn-clear">${t('clearProgress')}</button>
      </div>
    </div>
  `;

  $('#btn-clear').onclick = () => {
    if (confirm(t('confirmClear'))) {
      STATE.learned = new Set();
      STATE.mastered = new Set();
      STATE.stars = 0;
      STATE.streak = 0;
      STATE.quizHistory = [];
      STATE.quizCount = 0;
      STATE.wrongAnswers = [];
      STATE.reviewSchedule = {};
      STATE.gameHistory = {};
      STATE.unlockedAchievements = new Set();
      STATE.dailyLearned = 0;
      STATE.unlockedLevels = [0];
      saveState();
      renderAll();
    }
  };
}

// ============ 关闭弹窗 ============
function closeModal() {
  const m = document.querySelector('.modal-mask');
  if (m) m.remove();
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
}

// ============ 整体渲染 ============
function renderAll() {
  renderHeader();
  closeModal();

  switch (STATE.page) {
    case 'home': renderHomePage(); break;
    case 'learn': renderLearnPage(); break;
    case 'map': renderMapPage(); break;
    case 'chars': renderCharsPage(); break;
    case 'radicals': renderRadicalsPage(); break;
    case 'idioms': renderIdiomsPage(); break;
    case 'stories': renderStoriesPage(); break;
    case 'reading': renderReadingPage(); break;
    case 'games': renderGamesPage(); break;
    case 'quiz': renderQuizPage(); break;
    case 'progress': renderProgressPage(); break;
    default: renderHomePage();
  }

  // 绑定步骤中的游戏
  if (STATE.page === 'learn' && STATE.learn.char) {
    const step = STATE.learn.steps[STATE.learn.step];
    if (step === 'play') setTimeout(bindPlayGame, 100);
    if (step === 'test') setTimeout(bindTestQuiz, 100);
  }
}

// ============ 启动 ============
async function init() {
  // 加载语言设置
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const p = JSON.parse(raw);
      if (p.lang) STATE.lang = p.lang;
    }
  } catch (e) {}

  // 加载数据
  let rawData = null;
  if (window.HANZI_DATA && window.HANZI_DATA.characters) {
    rawData = window.HANZI_DATA;
  } else {
    try {
      const r = await fetch('data.json');
      if (r.ok) rawData = await r.json();
    } catch (e) {}
  }

  if (!rawData) {
    $('#page-main').innerHTML = `<div class="loading-error"><div class="loading-emoji">🤔</div><div class="loading-text">${t('loading')}</div></div>`;
    return;
  }

  DATA = normalizeData(rawData);
  loadState();
  renderAll();
}

// 暴露全局函数
window.speak = speak;
window.navigateTo = navigateTo;
window.startReview = startReview;
window.backFromLearn = backFromLearn;
window.playStrokeAnimation = playStrokeAnimation;
window.closeReading = closeReading;
window.prevPage = prevPage;
window.nextPage = nextPage;
window.backFromGame = backFromGame;
window.restartGame = restartGame;

document.addEventListener('DOMContentLoaded', init);
