// Scroll reveal — works on every page automatically
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// Table Topics widget (only runs if the widget exists on the page, i.e. Home)
const prompts = [
  "What's a rule you'd break if no one would notice?",
  "Describe your ideal weekend without using the word 'relax.'",
  "What's something everyone in this room can agree on?",
  "If you had to teach a 5-minute class right now, what's the topic?",
  "What's the most useless skill you're actually proud of?",
  "Convince us to visit a place you've never been.",
  "What's a compliment you've never said out loud to someone?",
  "Describe your first day here — but you're the villain of the story."
];

const promptEl = document.getElementById('tt-prompt');
const timerEl = document.getElementById('tt-timer');
const newBtn = document.getElementById('tt-new');
const startBtn = document.getElementById('tt-start');
let countdown = null;

if (promptEl && timerEl && newBtn && startBtn) {
  newBtn.addEventListener('click', () => {
    if (countdown) { clearInterval(countdown); countdown = null; }
    timerEl.textContent = "60";
    promptEl.textContent = prompts[Math.floor(Math.random() * prompts.length)];
  });

  startBtn.addEventListener('click', () => {
    if (countdown) clearInterval(countdown);
    let t = 60;
    timerEl.textContent = t;
    countdown = setInterval(() => {
      t--;
      timerEl.textContent = t;
      if (t <= 0) {
        clearInterval(countdown);
        timerEl.textContent = "Time!";
      }
    }, 1000);
  });
}
