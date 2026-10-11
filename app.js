const appContent = document.getElementById('appContent');
const navMenu = document.getElementById('navMenu');

const navItems = [
  'Dashboard',
  'Learn C++',
  'C++ Compiler',
  'Practice Arena',
  'Theory Notes',
  'RU Previous-Year Questions',
  'Mock Exams',
  'My Study Plan',
  'Weak Areas',
  'Achievements',
  'AI Doubt Solver',
  'Progress & Analytics',
  'Settings'
];

const navMap = [
  { key: 'dashboard', label: 'Dashboard' },
  { key: 'learn-cpp', label: 'Learn C++' },
  { key: 'c-compiler', label: 'C++ Compiler' },
  { key: 'practice-arena', label: 'Practice Arena' },
  { key: 'theory-notes', label: 'Theory Notes' },
  { key: 'ru-previous-year-questions', label: 'RU Previous-Year Questions' },
  { key: 'mock-exams', label: 'Mock Exams' },
  { key: 'my-study-plan', label: 'My Study Plan' },
  { key: 'weak-areas', label: 'Weak Areas' },
  { key: 'achievements', label: 'Achievements' },
  { key: 'ai-doubt-solver', label: 'AI Doubt Solver' },
  { key: 'progress-analytics', label: 'Progress & Analytics' },
  { key: 'settings', label: 'Settings' }
];

const sectionOrder = navMap.map((item) => item.key);

const curriculum = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    tag: 'Unit 1',
    level: 'Level 1',
    mastery: 72,
    description: 'Programming basics, compiler ecosystem, and the C++ program skeleton.',
    lessons: [
      {
        id: 'hello-world',
        title: 'First Program: Hello World',
        difficulty: 'Beginner',
        summary: 'Learn how a C++ program starts, compiles, and prints output.',
        concept: 'A C++ program is a set of instructions that the compiler translates into machine-executable code. The entry point is main().',
        analogy: 'Think of a program as a recipe: the compiler reads the cookbook, follows the ingredients, and creates the final meal that your computer can run.',
        definition: 'A program is a sequence of statements executed in order to accomplish a task. C++ is a high-level programming language that supports structured and object-oriented programming.',
        why: 'Every C++ learning path starts here because it teaches syntax, structure, and the compilation process before deeper topics.',
        syntax: '#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello, C++ Quest!";\n    return 0;\n}',
        output: 'Hello, C++ Quest!',
        mistakes: ['Forgetting return 0;', 'Missing semicolon after cout statement;', 'Using cout without #include <iostream>'],
        exercise: 'Create a program that prints your name and roll number.',
        hint: 'Use cout and a newline with << endl or \n.'
      }
    ]
  },
  {
    id: 'fundamentals',
    title: 'Fundamental Concepts',
    tag: 'Unit 2',
    level: 'Level 2',
    mastery: 63,
    description: 'Variables, constants, operators, data types, input/output and expressions.',
    lessons: [
      {
        id: 'variables',
        title: 'Variables and Data Types',
        difficulty: 'Beginner',
        summary: 'Store data using variables, constants and the right primitive type.',
        concept: 'Variables are named memory locations that hold values. Data types define the kind of value a variable can store.',
        analogy: 'A variable is like a labeled box in a warehouse. The label tells you what goes inside and the size of the box tells you how much it can hold.',
        definition: 'A variable is a named memory location used to store data; a constant is a value that does not change during execution.',
        why: 'Correct type selection is essential for reliable calculations, memory efficiency, and exam answers.',
        syntax: 'int age = 20;\nfloat percentage = 89.5f;\nconst double pi = 3.14;',
        output: 'Age stored as integer; percentage stored as float; pi is constant.',
        mistakes: ['Using a variable before declaring it;', 'Assigning a decimal to int without conversion;', 'Changing a const value'],
        exercise: 'Declare variables for total marks, obtained marks, and percentage.',
        hint: 'Use double or float for percentage.'
      }
    ]
  },
  {
    id: 'decision-loops',
    title: 'Decision Making & Loops',
    tag: 'Unit 3',
    level: 'Level 3',
    mastery: 58,
    description: 'Selection statements and repetitive logic through loops.',
    lessons: [
      {
        id: 'loops',
        title: 'for and while loops',
        difficulty: 'Intermediate',
        summary: 'Repeat actions with clear conditions and loop control.',
        concept: 'Loops run the same block of code repeatedly until a condition becomes false.',
        analogy: 'A loop is like a repeated task in a factory assembly line: the machine keeps working until the target count is reached.',
        definition: 'A loop is a control structure that executes a block of statements multiple times.',
        why: 'Loops reduce repetitive code and are used in arrays, pattern printing, input processing, and game logic.',
        syntax: 'for (int i = 1; i <= 5; i++) {\n    cout << i << " ";\n}',
        output: '1 2 3 4 5',
        mistakes: ['Infinite loop due to missing increment;', 'Using = instead of == in conditions;', 'Break statement placed outside the loop'],
        exercise: 'Print the first 10 even numbers using a loop.',
        hint: 'Start from 2 and increase by 2 each iteration.'
      }
    ]
  },
  {
    id: 'arrays-functions',
    title: 'Arrays, Strings & Functions',
    tag: 'Unit 4',
    level: 'Level 5',
    mastery: 49,
    description: 'Collections of data, strings, function decomposition, recursion and reusability.',
    lessons: [
      {
        id: 'functions',
        title: 'Function Overloading',
        difficulty: 'Intermediate',
        summary: 'Use multiple functions with the same name but different parameter lists.',
        concept: 'Function overloading lets the compiler choose the correct function based on arguments.',
        analogy: 'A single task label can have multiple versions depending on what inputs you bring to the station.',
        definition: 'Function overloading is a feature in which multiple functions share the same name but differ by number or type of arguments.',
        why: 'It keeps code clean and promotes readable APIs for calculations and problem solving.',
        syntax: 'int add(int a, int b);\ndouble add(double a, double b);',
        output: 'Different overloads resolve based on the provided input types.',
        mistakes: ['Overloading only by return type;', 'Providing ambiguous overloads;', 'Calling without matching argument types'],
        exercise: 'Write overloads for area of rectangle and area of square using different parameter counts.',
        hint: 'One function may take two dimensions; another may take one side.'
      }
    ]
  },
  {
    id: 'pointers-oop',
    title: 'Pointers & OOP',
    tag: 'Unit 5',
    level: 'Level 7',
    mastery: 41,
    description: 'Memory addresses, classes, objects, constructors, inheritance and polymorphism.',
    lessons: [
      {
        id: 'class-object',
        title: 'Classes and Objects',
        difficulty: 'Intermediate',
        summary: 'Model real-world entities using data and methods inside a class.',
        concept: 'A class is a blueprint, and an object is an instance created from that blueprint.',
        analogy: 'A class is like a building plan for a house; an object is the actual house built from that plan.',
        definition: 'A class defines a data type containing attributes and behaviors; an object is a variable of that class type.',
        why: 'OOP makes programs modular, easier to maintain, and appropriate for university-level complex solutions.',
        syntax: 'class Student {\npublic:\n    string name;\n    void display() { cout << name; }\n};',
        output: 'The object can call display() and access name.',
        mistakes: ['Accessing private members outside class;', 'Forgetting to instantiate the object;', 'Using class keyword incorrectly'],
        exercise: 'Create a class Employee with name and salary and print both values.',
        hint: 'Add public data members and a method display().'
      }
    ]
  }
];

const practiceQuestions = [
  {
    id: 'Q1',
    topic: 'Variables',
    difficulty: 'Easy',
    type: 'MCQ',
    prompt: 'Which of the following is a valid C++ integer declaration?',
    options: ['int x = 5;', 'integer x = 5;', 'num x = 5;', 'float x = 5;'],
    answer: 'int x = 5;',
    explanation: 'The correct keyword for integers in C++ is int.'
  },
  {
    id: 'Q2',
    topic: 'Loops',
    difficulty: 'Medium',
    type: 'Predict Output',
    prompt: 'What does the following output?\nfor (int i = 1; i <= 3; i++) { cout << i << " "; }',
    options: ['1 2 3', '0 1 2', '1 2 3 4', '3 2 1'],
    answer: '1 2 3',
    explanation: 'The loop runs while i is 1, 2, and 3.'
  },
  {
    id: 'Q3',
    topic: 'Functions',
    difficulty: 'Medium',
    type: 'Find Error',
    prompt: 'Which issue is present in this code?\nint sum(int a, int b) { return a + b; }\nint main() { cout << sum(4); }',
    options: ['Missing return type', 'Wrong function call parameters', 'No main function', 'No semicolon'],
    answer: 'Wrong function call parameters',
    explanation: 'The function needs two arguments but only one is passed.'
  }
];

const notesLibrary = [
  {
    title: 'Variables and Constants',
    format: 'Quick Revision',
    tag: 'Beginner',
    summary: 'Use variables to store data and constants when values must remain unchanged.'
  },
  {
    title: 'Loops and Control Flow',
    format: '4-Mark Answer',
    tag: 'Core',
    summary: 'Loop structures control repetition and are crucial in pattern and array programs.'
  },
  {
    title: 'Classes and Objects',
    format: 'Long Answer',
    tag: 'OOP',
    summary: 'Classes provide abstraction, while objects represent real entities with state and behavior.'
  }
];

const pyqData = [
  { year: '2023', code: 'BCA-63T-203', unit: 'Unit 1', topic: 'Intro to C++', source: 'University of Rajasthan', status: 'Verified' },
  { year: '2022', code: 'BCA-63T-203', unit: 'Unit 2', topic: 'Control Structures', source: 'College repository', status: 'Verified' },
  { year: '2021', code: 'BCA-63T-203', unit: 'Unit 5', topic: 'OOP Concepts', source: 'Paper not verified or not available', status: 'Unverified' },
  { year: '2020', code: 'BCA-63T-203', unit: 'Unit 4', topic: 'Functions & Arrays', source: 'University archive', status: 'Verified' }
];

const examItems = [
  { title: 'Unit Test: Fundamentals', duration: '20 mins', difficulty: 'Beginner', passRate: 'Good' },
  { title: 'Mid Semester Mock', duration: '45 mins', difficulty: 'Intermediate', passRate: 'Strong' }
];

const studyPlan = [
  { title: 'Complete C++ syntax basics', duration: '45 mins', status: 'In progress' },
  { title: 'Practice 10 loops questions', duration: '30 mins', status: 'Planned' },
  { title: 'Revise OOP constructors and inheritance', duration: '60 mins', status: 'Pending' }
];

const weakAreas = [
  { key: 'Pointers', progress: 36, note: 'Review memory addresses and dereferencing carefully.' },
  { key: 'Inheritance', progress: 42, note: 'Compare base and derived class access behavior.' },
  { key: 'File Handling', progress: 48, note: 'Practice ifstream and ofstream syntax.' }
];

const achievements = [
  { title: 'First Compile', description: 'Run your first C++ program in the compiler.', badge: '✅' },
  { title: 'Syntax Rookie', description: 'Earn 250 XP by finishing beginner lessons.', badge: '⚡' },
  { title: 'Loop Master', description: 'Score 80% in loop exercises.', badge: '🔁' }
];

const state = {
  activeSection: 'dashboard',
  searchText: '',
  theme: 'light',
  language: 'en',
  progress: {
    xp: 1480,
    coins: 420,
    level: 5,
    streak: 7,
    examReadiness: 78,
    dailyGoal: 60,
    completedLessons: ['hello-world'],
    completedQuestions: []
  }
};

function loadState() {
  const raw = localStorage.getItem('cppQuestProgress');
  if (!raw) return;
  try {
    const parsed = JSON.parse(raw);
    state.progress = { ...state.progress, ...parsed };
  } catch (error) {
    console.warn('Stored progress could not be parsed', error);
  }
}

function saveState() {
  localStorage.setItem('cppQuestProgress', JSON.stringify(state.progress));
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (match) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  }[match]));
}

function renderNav() {
  const iconMap = {
    dashboard: 'layout-dashboard',
    'learn-cpp': 'book-open',
    'c-compiler': 'code-2',
    'practice-arena': 'gamepad-2',
    'theory-notes': 'notebook-pen',
    'ru-previous-year-questions': 'graduation-cap',
    'mock-exams': 'clipboard-check',
    'my-study-plan': 'calendar-check',
    'weak-areas': 'target',
    achievements: 'trophy',
    'ai-doubt-solver': 'sparkles',
    'progress-analytics': 'chart-no-axes-combined',
    settings: 'settings-2'
  };
  navMenu.innerHTML = navMap.map((item) => `
    <button class="nav-item ${state.activeSection === item.key ? 'active' : ''}" data-section="${item.key}">
      <span class="nav-leading"><i data-lucide="${iconMap[item.key] || 'circle'}"></i></span>
      <span class="nav-item-label">${item.label}</span>
      <span class="nav-item-badge"><i data-lucide="chevron-right"></i></span>
    </button>
  `).join('');
}

function renderDashboard() {
  const completed = state.progress.completedLessons.length;
  const roadmap = curriculum.map((mod, index) => {
    const lesson = mod.lessons[0];
    const isDone = state.progress.completedLessons.includes(lesson.id);
    const isCurrent = !isDone && index === curriculum.findIndex((candidate) =>
      !state.progress.completedLessons.includes(candidate.lessons[0].id));
    const nodeIcon = isDone ? 'check' : (index === 0 ? 'play' : ['braces', 'repeat-2', 'layers-3', 'brain-circuit'][Math.min(index - 1, 3)]);
    return `
      <div class="roadmap-node ${isDone ? 'is-done' : ''} ${isCurrent ? 'is-current' : ''}">
        <div class="roadmap-connector"></div>
        <div class="roadmap-dot"><i data-lucide="${nodeIcon}"></i></div>
        <div class="roadmap-content">
          <div class="roadmap-meta"><span>${mod.tag}</span><span>${isDone ? 'Completed' : (isCurrent ? 'Up next ✨' : mod.level)}</span></div>
          <h4>${mod.title}</h4>
          <p>${mod.description}</p>
          <div class="roadmap-bottom">
            <div class="mini-progress"><span style="width:${isDone ? 100 : mod.mastery}%"></span></div>
            <span>${isDone ? '100' : mod.mastery}%</span>
            <button class="icon-text-btn" data-action="open-lesson" data-lesson-id="${lesson.id}">${isDone ? 'Review' : 'Explore'} <i data-lucide="arrow-up-right"></i></button>
          </div>
        </div>
      </div>`;
  }).join('');

  return `
    <section class="page-section dashboard-page">
      <div class="welcome-line">
        <div>
          <p class="eyebrow pink-eyebrow"><i data-lucide="sparkles"></i> YOUR LITTLE CORNER OF CODE</p>
          <h2 class="welcome-title">Hey, future <span> C++ star</span> ✿</h2>
          <p class="welcome-subtitle">Tiny steps today. Big developer energy tomorrow.</p>
        </div>
        <div class="date-chip"><i data-lucide="flower-2"></i> Your learning era</div>
      </div>

      <div class="hero-art-card">
        <div class="hero-art-copy">
          <div class="hero-kicker"><i data-lucide="heart"></i> YOUR NEXT QUEST IS WAITING</div>
          <h2>Make progress,<br><em>not perfection.</em></h2>
          <p>Learn the concept, try the code, collect your little wins. Your C++ journey starts right where you are.</p>
          <div class="hero-actions">
            <button class="primary-btn" data-action="open-section" data-target="learn-cpp"><i data-lucide="book-open"></i> Continue learning</button>
            <button class="secondary-btn" data-action="open-section" data-target="c-compiler"><i data-lucide="terminal"></i> Open coding lab</button>
          </div>
          <div class="hero-note"><i data-lucide="coffee"></i> One lesson at a time is still progress.</div>
        </div>
        <div class="hero-art-image">
          <img src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1000&q=85" alt="Soft sunlight falling over a leafy plant in a cozy study space" loading="lazy">
          <div class="floating-sticker sticker-top"><i data-lucide="sparkles"></i> soft focus</div>
          <div class="floating-sticker sticker-bottom"><i data-lucide="heart"></i> you’ve got this</div>
        </div>
        <span class="hero-sparkle sparkle-one">✦</span><span class="hero-sparkle sparkle-two">✿</span>
      </div>

      <div class="stats-grid pretty-stats">
        <div class="card kpi-card stat-lilac"><div class="stat-icon"><i data-lucide="flame"></i></div><div class="kpi-label">Study streak</div><span class="kpi-value">${state.progress.streak}<small> days</small></span><p>Showing up counts.</p></div>
        <div class="card kpi-card stat-peach"><div class="stat-icon"><i data-lucide="sparkles"></i></div><div class="kpi-label">Quest XP</div><span class="kpi-value">${state.progress.xp}</span><p>Every win adds up.</p></div>
        <div class="card kpi-card stat-mint"><div class="stat-icon"><i data-lucide="book-check"></i></div><div class="kpi-label">Lessons done</div><span class="kpi-value">${completed}<small> / ${curriculum.reduce((n, m) => n + m.lessons.length, 0)}</small></span><p>Keep your momentum.</p></div>
        <div class="card kpi-card stat-rose"><div class="stat-icon"><i data-lucide="graduation-cap"></i></div><div class="kpi-label">Exam readiness</div><span class="kpi-value">${state.progress.examReadiness}<small>%</small></span><div class="progress-track"><span style="width:${state.progress.examReadiness}%"></span></div></div>
      </div>

      <div class="dashboard-columns">
        <div class="dashboard-main-column">
          <div class="section-heading-row">
            <div><p class="eyebrow pink-eyebrow">THE LEARNING PATH</p><h3>Your C++ tree-line 🌱</h3><p class="section-subtitle">Follow the branches from first steps to confident coding.</p></div>
            <button class="text-link-btn" data-action="open-section" data-target="learn-cpp">View all lessons <i data-lucide="arrow-up-right"></i></button>
          </div>
          <div class="roadmap-card">${roadmap}</div>

          <div class="section-heading-row next-heading">
            <div><p class="eyebrow pink-eyebrow">PICK YOUR VIBE</p><h3>What do you feel like doing?</h3></div>
          </div>
          <div class="quick-actions-grid">
            <button class="quick-action quick-pink" data-action="open-section" data-target="practice-arena"><span class="quick-action-icon"><i data-lucide="gamepad-2"></i></span><span><strong>Practice Arena</strong><small>Little challenges, big brain gains</small></span><i data-lucide="arrow-up-right"></i></button>
            <button class="quick-action quick-lilac" data-action="open-section" data-target="theory-notes"><span class="quick-action-icon"><i data-lucide="notebook-pen"></i></span><span><strong>Pretty little notes</strong><small>Revise concepts for exams</small></span><i data-lucide="arrow-up-right"></i></button>
            <button class="quick-action quick-peach" data-action="open-section" data-target="ru-previous-year-questions"><span class="quick-action-icon"><i data-lucide="graduation-cap"></i></span><span><strong>Exam prep</strong><small>Explore PYQs and mock exams</small></span><i data-lucide="arrow-up-right"></i></button>
            <button class="quick-action quick-mint" data-action="open-section" data-target="ai-doubt-solver"><span class="quick-action-icon"><i data-lucide="messages-square"></i></span><span><strong>Ask for a hint</strong><small>Get unstuck without the stress</small></span><i data-lucide="arrow-up-right"></i></button>
          </div>
        </div>

        <aside class="dashboard-side-column">
          <div class="side-widget daily-widget">
            <div class="widget-heading"><div><p class="eyebrow pink-eyebrow">A GENTLE PLAN</p><h3>Today's little wins</h3></div><span class="widget-flower">✿</span></div>
            <p class="widget-description">You don't need a perfect day. Just a little progress.</p>
            <button class="task-row" data-action="open-section" data-target="learn-cpp"><span class="task-check"><i data-lucide="book-open"></i></span><span><strong>Learn one concept</strong><small>10–15 minutes</small></span><i data-lucide="chevron-right"></i></button>
            <button class="task-row" data-action="open-section" data-target="practice-arena"><span class="task-check"><i data-lucide="pencil-ruler"></i></span><span><strong>Try 3 questions</strong><small>Practice what you learned</small></span><i data-lucide="chevron-right"></i></button>
            <button class="task-row" data-action="open-section" data-target="theory-notes"><span class="task-check"><i data-lucide="rotate-ccw"></i></span><span><strong>Quick revision</strong><small>Refresh your memory</small></span><i data-lucide="chevron-right"></i></button>
            <button class="daily-plan-link" data-action="open-section" data-target="my-study-plan">See my study plan <i data-lucide="arrow-right"></i></button>
          </div>
          <div class="side-widget affirmation-widget">
            <div class="affirmation-art"><i data-lucide="flower-2"></i><span>✧</span></div>
            <p class="eyebrow">A NOTE TO SELF</p>
            <h3>You are allowed<br>to learn slowly.</h3>
            <p>Understanding one line of code is better than memorizing a hundred you don't understand.</p>
          </div>
          <div class="side-widget mini-progress-widget">
            <div class="widget-heading"><h3>Your daily goal</h3><span class="goal-number">${state.progress.dailyGoal}%</span></div>
            <div class="progress-track"><span style="width:${state.progress.dailyGoal}%"></span></div>
            <p class="widget-description">Small, consistent sessions build real confidence.</p>
          </div>
        </aside>
      </div>
    </section>
  `;
}

function renderLearn() {
  const filtered = curriculum.filter((mod) => {
    const hay = `${mod.title} ${mod.description} ${mod.lessons.map((lesson) => lesson.title).join(' ')}`.toLowerCase();
    return !state.searchText || hay.includes(state.searchText.toLowerCase());
  });

  const cards = filtered.map((mod) => `
    <div class="lesson-card">
      <div class="meta-row">
        <span class="tag">${mod.tag}</span>
        <span>${mod.level}</span>
      </div>
      <h4>${mod.title}</h4>
      <p class="muted">${mod.description}</p>
      <div class="progress-track"><span style="width: ${mod.mastery}%"></span></div>
      <div class="inline-actions">
        <button class="small-btn" data-action="open-lesson" data-lesson-id="${mod.lessons[0].id}">Start lesson</button>
      </div>
    </div>
  `).join('');

  const lessonId = state.activeLessonId || curriculum[0].lessons[0].id;
  const activeLesson = curriculum.flatMap((mod) => mod.lessons).find((lesson) => lesson.id === lessonId) || curriculum[0].lessons[0];

  return `
    <section class="page-section">
      <div class="section-header">
        <h3>Learn C++ Curriculum</h3>
        <span class="hint">Officially mapped to beginner-to-advanced topics</span>
      </div>
      <div class="card-grid">${cards || '<div class="card kpi-card"><div class="kpi-label">No results</div><span class="kpi-value">0</span></div>'}</div>

      <div class="detail-layout">
        <div class="lesson-panel">
          <div class="meta-row">
            <span class="pill">${activeLesson.difficulty}</span>
            <span class="pill success">Active lesson</span>
          </div>
          <h3>${activeLesson.title}</h3>
          <p class="main-copy"><strong>Concept:</strong> ${activeLesson.concept}</p>
          <p class="main-copy"><strong>Real-life analogy:</strong> ${activeLesson.analogy}</p>
          <p class="main-copy"><strong>Definition:</strong> ${activeLesson.definition}</p>
          <p class="main-copy"><strong>Why it matters:</strong> ${activeLesson.why}</p>

          <div class="row-space"></div>
          <div class="section-header">
            <h3>Example</h3>
            <span class="hint">Working C++ syntax</span>
          </div>
          <div class="code-block"><pre>${escapeHtml(activeLesson.syntax)}</pre></div>
          <p class="main-copy"><strong>Expected output:</strong> ${activeLesson.output}</p>

          <div class="section-header">
            <h3>Where students get confused</h3>
            <span class="hint">Common mistakes</span>
          </div>
          <ul>
            ${activeLesson.mistakes.map((err) => `<li>${err}</li>`).join('')}
          </ul>

          <div class="section-header">
            <h3>Revision</h3>
            <span class="hint">Three quick points</span>
          </div>
          <ul>
            <li>Keep the entry point as int main().</li>
            <li>Remember to close statements with semicolons.</li>
            <li>Use meaningful variable names for readability.</li>
          </ul>

          <div class="section-header">
            <h3>Practice</h3>
            <span class="hint">Exercise</span>
          </div>
          <p class="main-copy">${activeLesson.exercise}</p>
          <div class="hero-actions">
            <button class="primary-btn" data-action="mark-lesson-complete" data-lesson-id="${activeLesson.id}">Mark Lesson Complete</button>
            <button class="ghost-btn" data-action="show-lesson-help" data-lesson-id="${activeLesson.id}">Hint</button>
          </div>
        </div>

        <div class="panel">
          <div class="kpi-card">
            <div class="kpi-label">Lesson focus</div>
            <span class="kpi-value">${activeLesson.difficulty}</span>
          </div>
          <div class="info-card">
            <h4>Exam-ready question</h4>
            <p class="muted">Define the concept in 2 marks and explain its use in a C++ program.</p>
          </div>
          <div class="info-card">
            <h4>Quick reminder</h4>
            <p class="muted">${activeLesson.hint}</p>
          </div>
          <div class="info-card">
            <h4>Suggested revision</h4>
            <p class="muted">Revisit the example, practice one new exercise, and try to explain it aloud in simple English.</p>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderCompiler() {
  const starterCode = `#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello from C++ Quest!" << endl;\n    return 0;\n}`;

  return `
    <section class="page-section">
      <div class="section-header">
        <h3>C++ Compiler</h3>
        <span class="hint">Compiles live code using a public C++ execution service</span>
      </div>

      <div class="card kpi-card">
        <div class="kpi-label">Compiler status</div>
        <span class="kpi-value">Ready</span>
        <p class="muted">If the public compile service is unavailable, the app will display a setup message instead of pretending execution succeeded.</p>
      </div>

      <div class="panel">
        <h3>Setup guide</h3>
        <ol>
          <li>Use a backend proxy or hosted judge service to avoid exposing credentials in the browser.</li>
          <li>Set environment variables such as COMPILER_API_URL and COMPILER_API_TOKEN.</li>
          <li>Enforce time, memory, and output-size limits before executing student code.</li>
          <li>Return clear errors for network failures, compile errors, and timeouts.</li>
        </ol>
      </div>

      <div class="editor-shell">
        <div id="lineNumbers" class="line-numbers"></div>
        <textarea id="cppEditor" spellcheck="false">${escapeHtml(starterCode)}</textarea>
      </div>

      <div class="toolbar-row">
        <button class="primary-btn" id="runCodeBtn">Run Code</button>
        <button class="secondary-btn" id="resetCodeBtn">Reset</button>
        <button class="ghost-btn" id="clearOutputBtn">Clear Output</button>
        <button class="ghost-btn" id="copyCodeBtn">Copy Code</button>
      </div>

      <div class="two-col">
        <div class="panel">
          <h3>Standard Input</h3>
          <textarea id="stdinInput" rows="6" placeholder="Enter input here for cin programs...">5\n10\n</textarea>
        </div>
        <div class="panel">
          <h3>Examples</h3>
          <div class="tag-row">
            <button class="small-btn" data-action="load-template" data-template="hello">Hello World</button>
            <button class="small-btn" data-action="load-template" data-template="loop">Loops</button>
            <button class="small-btn" data-action="load-template" data-template="class">Class</button>
          </div>
        </div>
      </div>

      <div class="panel output-box">
        <div class="output-status" id="compilerStatus">Idle</div>
        <pre id="compilerOutput">Output will appear here.</pre>
      </div>
    </section>
  `;
}

function renderPractice() {
  const filtered = practiceQuestions.filter((q) => {
    const hay = `${q.topic} ${q.type} ${q.prompt}`.toLowerCase();
    return !state.searchText || hay.includes(state.searchText.toLowerCase());
  });

  return `
    <section class="page-section">
      <div class="section-header">
        <h3>Practice Arena</h3>
        <span class="hint">Adaptive revision and coding challenge practice</span>
      </div>

      <div class="card-grid">
        ${filtered.map((q) => `
          <div class="practice-card">
            <div class="meta-row">
              <span class="tag">${q.type}</span>
              <span class="tag">${q.difficulty}</span>
            </div>
            <h4>${q.topic}</h4>
            <p class="muted">${q.prompt}</p>
            <div class="inline-actions">
              <button class="small-btn" data-action="reveal-answer" data-question-id="${q.id}">Reveal Answer</button>
              <button class="small-btn" data-action="flag-question" data-question-id="${q.id}">Flag</button>
            </div>
            <div class="answer-reveal" id="answer-${q.id}">
              <strong>Answer:</strong> ${q.answer}<br>
              <small>${q.explanation}</small>
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  `;
}

function renderNotes() {
  const cards = notesLibrary.map((note) => `
    <div class="note-card">
      <div class="meta-row">
        <span class="tag">${note.format}</span>
        <span>${note.tag}</span>
      </div>
      <h4>${note.title}</h4>
      <p class="muted">${note.summary}</p>
      <div class="inline-actions">
        <button class="small-btn" data-action="open-section" data-target="ru-previous-year-questions">Browse PYQs</button>
      </div>
    </div>
  `).join('');

  return `
    <section class="page-section">
      <div class="section-header">
        <h3>Theory Notes & Exam Answers</h3>
        <span class="hint">Printable, revision-friendly content</span>
      </div>
      <div class="notes-grid">${cards}</div>
    </section>
  `;
}

function renderPyq() {
  return `
    <section class="page-section">
      <div class="section-header">
        <h3>RU Examination Center</h3>
        <span class="hint">BCA Semester III and verified question access</span>
      </div>
      <div class="panel">
        <table class="table">
          <thead>
            <tr>
              <th>Year</th>
              <th>Code</th>
              <th>Unit</th>
              <th>Topic</th>
              <th>Source</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${pyqData.map((item) => `
              <tr>
                <td>${item.year}</td>
                <td>${item.code}</td>
                <td>${item.unit}</td>
                <td>${item.topic}</td>
                <td>${item.source}</td>
                <td><span class="pill ${item.status === 'Verified' ? 'success' : 'warning'}">${item.status}</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderMockExams() {
  return `
    <section class="page-section">
      <div class="section-header">
        <h3>Mock Exams</h3>
        <span class="hint">Timed exam practice</span>
      </div>
      <div class="exam-grid">
        ${examItems.map((item) => `
          <div class="practice-card">
            <div class="meta-row">
              <span class="tag">${item.difficulty}</span>
              <span class="tag">${item.duration}</span>
            </div>
            <h4>${item.title}</h4>
            <p class="muted">Pass readiness: ${item.passRate}</p>
            <button class="primary-btn" data-action="open-section" data-target="progress-analytics">Start mock</button>
          </div>
        `).join('')}
      </div>
    </section>
  `;
}

function renderStudyPlan() {
  return `
    <section class="page-section">
      <div class="section-header">
        <h3>My Study Plan</h3>
        <span class="hint">Build a sustainable daily revision rhythm</span>
      </div>
      <div class="card-grid">
        ${studyPlan.map((task) => `
          <div class="plan-card">
            <h4>${task.title}</h4>
            <div class="meta-row">
              <span class="tag">${task.duration}</span>
              <span class="pill ${task.status === 'In progress' ? 'warning' : 'success'}">${task.status}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  `;
}

function renderWeakAreas() {
  return `
    <section class="page-section">
      <div class="section-header">
        <h3>Weak Areas</h3>
        <span class="hint">Targeted practice based on performance</span>
      </div>
      <div class="card-grid">
        ${weakAreas.map((area) => `
          <div class="plan-card">
            <h4>${area.key}</h4>
            <div class="progress-track"><span style="width: ${area.progress}%"></span></div>
            <p class="muted">${area.note}</p>
            <button class="small-btn" data-action="open-section" data-target="practice-arena">Practice this topic</button>
          </div>
        `).join('')}
      </div>
    </section>
  `;
}

function renderAchievements() {
  return `
    <section class="page-section">
      <div class="section-header">
        <h3>Achievements</h3>
        <span class="hint">Celebrate milestones and unlock challenge badges</span>
      </div>
      <div class="card-grid">
        ${achievements.map((achievement) => `
          <div class="achievement-item">
            <div class="meta-row"><span class="tag">${achievement.badge}</span></div>
            <h4>${achievement.title}</h4>
            <p class="muted">${achievement.description}</p>
          </div>
        `).join('')}
      </div>
    </section>
  `;
}

function renderSolver() {
  return `
    <section class="page-section">
      <div class="section-header">
        <h3>AI Doubt Solver</h3>
        <span class="hint">Get a concept explanation or fix suggestions</span>
      </div>
      <div class="panel">
        <textarea id="solverPrompt" rows="6" placeholder="Example: Why does my while loop never stop?">Why does my loop keep printing endlessly?</textarea>
        <div class="toolbar-row">
          <button class="primary-btn" id="solvePromptBtn">Solve My Doubt</button>
        </div>
        <div class="output-box" id="solverOutput">
          <p class="muted">Your answer will appear here with a concept explanation, likely cause, and a hint to debug the problem.</p>
        </div>
      </div>
    </section>
  `;
}

function renderAnalytics() {
  return `
    <section class="page-section">
      <div class="section-header">
        <h3>Progress & Analytics</h3>
        <span class="hint">Track mastery, consistency and readiness</span>
      </div>
      <div class="info-grid">
        <div class="info-card">
          <h4>Mastery</h4>
          <p class="kpi-value">${Math.round((state.progress.completedLessons.length / 10) * 100)}%</p>
        </div>
        <div class="info-card">
          <h4>Streak</h4>
          <p class="kpi-value">${state.progress.streak}d</p>
        </div>
        <div class="info-card">
          <h4>Focus area</h4>
          <p class="muted">Pointers and memory behavior</p>
        </div>
      </div>
    </section>
  `;
}

function renderSettings() {
  return `
    <section class="page-section">
      <div class="section-header">
        <h3>Settings</h3>
        <span class="hint">Personalize your study environment</span>
      </div>

      <div class="setting-card">
        <div class="setting-row">
          <div>
            <h4>English explanation</h4>
            <p class="muted">Use clear formal English for theory and exam notes.</p>
          </div>
          <button class="toggle ${state.language === 'en' ? 'active' : ''}" data-toggle="language"></button>
        </div>
        <div class="setting-row">
          <div>
            <h4>Dark mode</h4>
            <p class="muted">Built for long study sessions with a high-contrast interface.</p>
          </div>
          <button class="toggle ${state.theme === 'dark' ? 'active' : ''}" data-toggle="theme"></button>
        </div>
      </div>
    </section>
  `;
}

function renderPage() {
  const rendererMap = {
    dashboard: renderDashboard,
    'learn-cpp': renderLearn,
    'c-compiler': renderCompiler,
    'practice-arena': renderPractice,
    'theory-notes': renderNotes,
    'ru-previous-year-questions': renderPyq,
    'mock-exams': renderMockExams,
    'my-study-plan': renderStudyPlan,
    'weak-areas': renderWeakAreas,
    achievements: renderAchievements,
    'ai-doubt-solver': renderSolver,
    'progress-analytics': renderAnalytics,
    settings: renderSettings
  };

  const renderFn = rendererMap[state.activeSection] || renderDashboard;
  appContent.innerHTML = renderFn();

  document.getElementById('dailyGoalText').textContent = `${state.progress.dailyGoal}%`;
  document.getElementById('dailyGoalBar').style.width = `${state.progress.dailyGoal}%`;
  document.getElementById('xpInline').textContent = String(state.progress.xp);
  document.getElementById('levelPill').textContent = `Level ${state.progress.level}`;
  document.getElementById('streakPill').textContent = `${state.progress.streak} days`;

  if (state.activeSection === 'c-compiler') {
    initCompilerEditor();
  }

  renderNav();
  // Convert data-lucide placeholders into visible SVG icons after every render.
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

function getSectionKeyFromLabel(label) {
  return label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function setActiveSection(sectionKey) {
  state.activeSection = sectionKey;
  renderPage();
}

function updateTheme() {
  const isDark = state.theme === 'dark';
  document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
  document.documentElement.style.setProperty('--bg', isDark ? '#211c29' : '#fff8fc');
  document.documentElement.style.setProperty('--text', isDark ? '#fff0f7' : '#5b4358');
  document.documentElement.style.setProperty('--muted', isDark ? '#c2a8bd' : '#987f95');
  document.documentElement.style.setProperty('--panel', isDark ? 'rgba(45, 37, 53, 0.94)' : 'rgba(255,255,255,0.94)');
  document.documentElement.style.setProperty('--panel-strong', isDark ? '#30283a' : '#ffffff');
  document.documentElement.style.setProperty('--panel-soft', isDark ? '#403247' : '#fff0f7');
  document.documentElement.style.setProperty('--card', isDark ? '#30283a' : '#ffffff');
  document.documentElement.style.setProperty('--card-alt', isDark ? '#3b2e40' : '#fff5fa');
  document.documentElement.style.setProperty('--border', isDark ? '#594258' : '#f0dce8');
  document.documentElement.style.setProperty('--primary', isDark ? '#f09ac5' : '#e879ad');
  document.documentElement.style.setProperty('--secondary', isDark ? '#c0a8f4' : '#b9a1ed');
  document.documentElement.style.setProperty('--cyan', isDark ? '#92d9c6' : '#9edbc5');
}
function initCompilerEditor() {
  const editor = document.getElementById('cppEditor');
  const lineNumbers = document.getElementById('lineNumbers');
  if (!editor || !lineNumbers) return;

  const syncNumbers = () => {
    const values = editor.value.split('\n');
    lineNumbers.innerHTML = values.map((_, index) => `<span>${index + 1}</span>`).join('');
  };

  editor.addEventListener('input', syncNumbers);
  syncNumbers();

  const runBtn = document.getElementById('runCodeBtn');
  const resetBtn = document.getElementById('resetCodeBtn');
  const outputBox = document.getElementById('compilerOutput');
  const stdinInput = document.getElementById('stdinInput');
  const status = document.getElementById('compilerStatus');

  const defaultCode = `#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello from C++ Quest!" << endl;\n    return 0;\n}`;

  resetBtn.addEventListener('click', () => {
    editor.value = defaultCode;
    stdinInput.value = '5\n10\n';
    outputBox.textContent = 'Output will appear here.';
    status.textContent = 'Idle';
    status.className = 'output-status';
    syncNumbers();
  });

  document.getElementById('clearOutputBtn').addEventListener('click', () => {
    outputBox.textContent = 'Output cleared.';
    status.textContent = 'Cleared';
    status.className = 'output-status';
  });

  document.getElementById('copyCodeBtn').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(editor.value);
      status.textContent = 'Copied';
      status.className = 'output-status success';
    } catch (error) {
      status.textContent = 'Copy failed';
      status.className = 'output-status error';
    }
  });

  document.querySelectorAll('[data-action="load-template"]').forEach((button) => {
    button.addEventListener('click', () => {
      const template = button.dataset.template;
      const templates = {
        hello: '#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello, C++ Quest!" << endl;\n    return 0;\n}',
        loop: '#include <iostream>\nusing namespace std;\n\nint main() {\n    for (int i = 1; i <= 5; i++) {\n        cout << i << " ";\n    }\n    return 0;\n}',
        class: '#include <iostream>\nusing namespace std;\n\nclass Student {\npublic:\n    string name;\n    void display() { cout << "Student: " << name << endl; }\n};\n\nint main() {\n    Student s;\n    s.name = "Anshu";\n    s.display();\n    return 0;\n}'
      };
      editor.value = templates[template] || defaultCode;
      syncNumbers();
    });
  });

  runBtn.addEventListener('click', async () => {
    const sourceCode = editor.value.trim();
    if (!sourceCode) {
      outputBox.textContent = 'Please enter C++ code before running.';
      status.textContent = 'No code';
      status.className = 'output-status error';
      return;
    }

    status.textContent = 'Compiling...';
    status.className = 'output-status';
    outputBox.textContent = 'Sending source to compiler...';

    try {
      const response = await fetch('https://emkc.org/api/v2/piston/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          language: 'cpp',
          version: '10.2.0',
          files: [{ name: 'main.cpp', content: sourceCode }],
          stdin: stdinInput.value || '',
          args: []
        })
      });

      if (!response.ok) {
        throw new Error(`Compiler request failed (${response.status})`);
      }

      const result = await response.json();
      const stdout = result.run?.stdout || '';
      const stderr = result.run?.stderr || '';
      const compileErr = result.compile?.stderr || '';
      const output = [stdout, stderr, compileErr].filter(Boolean).join('\n').trim();

      outputBox.textContent = output || 'Program executed without output.';

      if (compileErr) {
        status.textContent = 'Compilation error';
        status.className = 'output-status error';
      } else if (result.run && result.run.code === 0) {
        status.textContent = 'Compiled successfully';
        status.className = 'output-status success';
      } else {
        status.textContent = 'Runtime error';
        status.className = 'output-status error';
      }
    } catch (error) {
      outputBox.textContent = 'Compiler service unavailable. Configure a backend proxy or a valid C++ execution endpoint to run code in production.';
      status.textContent = 'Service unavailable';
      status.className = 'output-status error';
      console.error(error);
    }
  });
}

function assignGlobalActions() {
  navMenu.addEventListener('click', (event) => {
    const item = event.target.closest('[data-section]');
    if (!item) return;
    setActiveSection(item.dataset.section);
  });

  appContent.addEventListener('click', (event) => {
    const target = event.target.closest('[data-action]');
    if (!target) return;

    const action = target.dataset.action;
    if (action === 'open-section') {
      setActiveSection(target.dataset.target);
    }

    if (action === 'open-lesson') {
      state.activeLessonId = target.dataset.lessonId;
      setActiveSection('learn-cpp');
    }

    if (action === 'show-lesson-help') {
      const lessonId = target.dataset.lessonId;
      const lesson = curriculum.flatMap((mod) => mod.lessons).find((entry) => entry.id === lessonId);
      const hint = lesson ? lesson.hint : 'Review the syntax and basic structure before attempting the exercise again.';
      alert(hint);
    }

    if (action === 'mark-lesson-complete') {
      const lessonId = target.dataset.lessonId;
      if (!state.progress.completedLessons.includes(lessonId)) {
        state.progress.completedLessons.push(lessonId);
        state.progress.xp += 150;
        state.progress.coins += 35;
        state.progress.examReadiness = Math.min(100, state.progress.examReadiness + 5);
        saveState();
      }
      renderPage();
    }

    if (action === 'reveal-answer') {
      const qid = target.dataset.questionId;
      const answerBlock = document.getElementById(`answer-${qid}`);
      if (answerBlock) answerBlock.classList.toggle('visible');
    }

    if (action === 'flag-question') {
      const qid = target.dataset.questionId;
      target.textContent = `Flagged: ${qid}`;
      target.disabled = true;
    }
  });

  document.getElementById('globalSearch').addEventListener('input', (event) => {
    state.searchText = event.target.value.trim();
    renderPage();
  });

  document.getElementById('solvePromptBtn')?.addEventListener('click', () => {
    const prompt = document.getElementById('solverPrompt')?.value || '';
    const output = document.getElementById('solverOutput');
    if (!output) return;

    const explanation = prompt.toLowerCase().includes('loop')
      ? 'A loop repeats until the condition becomes false. Check whether the loop variable changes inside the loop body. If it does not, the loop becomes infinite.'
      : 'Review the exact syntax, confirm the variable values, and isolate the issue with a small debug trace.';

    output.innerHTML = `<p><strong>Explanation:</strong> ${explanation}</p><p><strong>Likely cause:</strong> The condition may never become false, or a required value is not being updated.</p><p><strong>Hint:</strong> Add a print statement to see the loop variable each time it runs.</p>`;
  });

  document.querySelectorAll('[data-toggle]').forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const key = toggle.dataset.toggle;
      if (key === 'language') {
        state.language = state.language === 'en' ? 'hi' : 'en';
      }
      if (key === 'theme') {
        state.theme = state.theme === 'dark' ? 'light' : 'dark';
        updateTheme();
      }
      renderPage();
    });
  });
}

function initialize() {
  loadState();
  updateTheme();
  renderPage();
  assignGlobalActions();
}

initialize();
