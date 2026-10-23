export type QuestionCategory = "hr" | "javascript" | "frontend" | "internship";

export type InterviewQuestion = {
  id: string;
  category: QuestionCategory;
  question: string;
  /** Beginner-friendly sample answer. */
  answer: string;
  /** Why this answer works — the reasoning, not just the script. */
  why: string;
};

export const interviewCategories: { id: QuestionCategory; label: string }[] = [
  { id: "hr", label: "HR & Introduction" },
  { id: "javascript", label: "JavaScript" },
  { id: "frontend", label: "Frontend" },
  { id: "internship", label: "Internship & Behavioural" },
];

export const interviewQuestions: InterviewQuestion[] = [
  /* ------------------------- HR & Introduction ------------------------- */
  {
    id: "hr-tell-me-about-yourself",
    category: "hr",
    question: "Tell me about yourself.",
    answer:
      "Start with your present (what you're studying or just finished), briefly cover your past (relevant education and projects), and end with why you're here (the role you're applying for). Keep it under two minutes. Example: \"I've just completed my BCA from Pune University, where I built four web projects using HTML, CSS, and JavaScript — one of them a library management system that won second place in our college exhibition. I also did a two-month web development internship where I redesigned a landing page and improved its mobile load time. I'm now looking for an entry-level frontend role where I can keep learning and contribute to a real product.\"",
    why: "Interviewers ask this to hear how you organise information, not your life story. A past–present–future structure sounds calm and intentional. Ending with the role you want signals that you are focused, not just applying everywhere.",
  },
  {
    id: "hr-why-should-we-hire-you",
    category: "hr",
    question: "Why should we hire you?",
    answer:
      "Don't recite your resume — connect your skills to their needs. Example: \"You need someone who can build clean, responsive interfaces and is eager to learn your stack. In my projects and internship I've done exactly that: I built a responsive dashboard in React, fixed over a dozen UI bugs at my internship, and I write code that other people can read. I'm also comfortable starting small — I'd rather ship a working feature and improve it than wait for perfect.\"",
    why: "This answer works because it answers the employer's real question: 'what do I get?' It links evidence (projects, internship) to the job, and shows maturity (willingness to start small).",
  },
  {
    id: "hr-strengths",
    category: "hr",
    question: "What are your strengths?",
    answer:
      "Pick two strengths that are relevant to the role and back each with one example. Example: \"I'd say my strengths are learning quickly and finishing what I start. When I decided to learn React, I rebuilt one of my older projects in it within two weeks and published the code on GitHub. And last semester, while preparing for exams, I still delivered my internship tasks on time every week.\"",
    why: "A strength without evidence is just a claim. One short, specific example per strength makes the answer believable and memorable.",
  },
  {
    id: "hr-weaknesses",
    category: "hr",
    question: "What are your weaknesses?",
    answer:
      "Choose a real but fixable weakness, and show what you're doing about it. Example: \"I used to get stuck trying to make things perfect before showing them to anyone. I've been working on it by setting time limits — for example, I give myself one hour to build a first version, then ask for feedback. My internship mentor said my final landing-page redesign was much stronger because I iterated instead of polishing alone.\"",
    why: "Never say 'I have no weaknesses' — it sounds rehearsed. Never pick something core to the job (like 'I'm bad at JavaScript' for a JS role). A real weakness plus an active fix shows self-awareness, which is itself a strength.",
  },
  {
    id: "hr-five-years",
    category: "hr",
    question: "Where do you see yourself in five years?",
    answer:
      "Show ambition tied to growth in the field, not a specific job title. Example: \"In five years I want to be a solid frontend developer who owns features end-to-end — from design discussion to deployment. I'd like to mentor juniors the way my seniors guided me, and I want to keep learning, whether that's deeper JavaScript, performance, or accessibility. I'm excited to grow inside a company that invests in its developers.\"",
    why: "Employers want to know you'll grow with them, not leave the moment you're trained. Tying your answer to skill growth (not just promotions) sounds realistic for a fresher.",
  },
  {
    id: "hr-why-this-company",
    category: "hr",
    question: "Why do you want to join our company?",
    answer:
      "Reference something specific you actually know: their product, their engineering blog, their tech stack, or their values. Example: \"I've used your app as a student and I like how simple it feels. I read that your team writes about performance budgets, and that matches what I care about — at my internship I cut a landing page's mobile load time by about 35%. I'd love to learn from a team that treats speed as a feature.\"",
    why: "Generic answers ('great culture, good growth') could apply to any company. One specific observation proves you did your homework and are genuinely interested.",
  },
  {
    id: "hr-what-do-you-know",
    category: "hr",
    question: "What do you know about our company?",
    answer:
      "Give a short, accurate summary: what they do, who they serve, and one recent thing you noticed. Example: \"From your website and LinkedIn, you build [product type] for [audience]. I saw you recently [launched X / opened a new office / published a blog post about Y], and your careers page mentions [value or team practice]. That's the kind of company I'd like to learn from.\"",
    why: "Research is a sign of respect. Two or three accurate facts beat a long guess. If you genuinely don't know much, say what you do know and that you're eager to learn more.",
  },
  {
    id: "hr-salary",
    category: "hr",
    question: "What are your salary expectations?",
    answer:
      "As a fresher, flexibility with a range is safest. Example: \"I'm primarily looking to learn and contribute, so I'm flexible on compensation. Based on my research, something in the range of ₹3–4 LPA for this role in this city would be reasonable for a fresher, but I'm open to discussing what fits your budget.\"",
    why: "Quoting a number first can anchor the negotiation against you. Giving a researched range shows maturity, and saying you're flexible keeps the conversation going. Research typical fresher salaries for the role and city before the interview.",
  },
  {
    id: "hr-questions-for-us",
    category: "hr",
    question: "Do you have any questions for us?",
    answer:
      "Always ask one or two thoughtful questions. Good options: \"What does success look like in this role in the first three months?\" or \"What does the team do when someone gets stuck — how do people here usually learn?\" or \"What's the next step in the interview process?\"",
    why: "Asking questions shows engagement, and it also helps you evaluate the company. Avoid asking about salary, leave, or holidays in the first round. 'No questions' can read as low interest.",
  },

  /* ----------------------------- JavaScript ----------------------------- */
  {
    id: "js-var-let-const",
    category: "javascript",
    question: "What is the difference between var, let, and const?",
    answer:
      "All three declare variables, but they differ in scope and reassignment. var is function-scoped and can be re-declared and reassigned. let is block-scoped ({ ... }) and can be reassigned but not re-declared in the same scope. const is block-scoped and cannot be reassigned after declaration — though if it holds an object or array, the contents can still change. In modern JavaScript, use const by default and let when you need to reassign.",
    why: "This shows you understand scope, which is the root cause of many real bugs. Mentioning that const still allows mutation of object contents shows you understand the difference between the binding and the value.",
  },
  {
    id: "js-hoisting",
    category: "javascript",
    question: "What is hoisting?",
    answer:
      "Hoisting means JavaScript moves declarations to the top of their scope before the code runs. A var variable is hoisted and initialised as undefined, so you can reference it before its line — but you get undefined, not an error. let and const are also hoisted, but they stay in a 'temporal dead zone' until their declaration line, so accessing them earlier throws a ReferenceError. Function declarations are hoisted with their whole body, which is why you can call them earlier.",
    why: "Hoisting questions test whether you understand how code actually executes. The temporal dead zone detail is what separates someone who read about it from someone who has been bitten by it.",
  },
  {
    id: "js-loose-equals",
    category: "javascript",
    question: "What is the difference between == and ===?",
    answer:
      "== compares values after converting (coercing) the types — so '5' == 5 is true. === compares both type and value with no conversion — '5' === 5 is false. Because == can produce surprising results (like 0 == false being true), modern code uses === (and !==) almost everywhere.",
    why: "Type coercion is a classic source of bugs. Saying you use strict equality by default is the professional answer; being able to name one surprising coercion case shows real understanding.",
  },
  {
    id: "js-closure",
    category: "javascript",
    question: "What is a closure?",
    answer:
      "A closure is a function that remembers the variables from the scope where it was created, even when it's called from somewhere else. Example: function makeCounter() { let count = 0; return function() { count++; return count; } } — the returned function keeps access to count even after makeCounter has finished. Closures are used for data privacy, callbacks, and functions that need to remember state.",
    why: "Closures are asked in almost every JS interview because they reveal whether you understand scope. A small, correct example in your answer is worth more than a dictionary definition.",
  },
  {
    id: "js-event-loop",
    category: "javascript",
    question: "Can you explain the event loop in simple terms?",
    answer:
      "JavaScript runs on a single thread, so it can do one thing at a time. The event loop lets it handle asynchronous work: when you call something slow like fetch() or setTimeout(), JavaScript hands it off, keeps executing the rest of your code, and later picks up the callback when the result is ready. So console.log('A'); setTimeout(() => console.log('B'), 0); console.log('C') prints A, C, B — the callback waits its turn even with a zero delay.",
    why: "You don't need to explain microtasks vs macrotasks in a fresher interview, but the core idea — 'single thread + callbacks queued by the event loop' — plus a correct prediction of output order shows you can reason about async code.",
  },
  {
    id: "js-promises-async",
    category: "javascript",
    question: "What are promises and how does async/await work?",
    answer:
      "A promise is an object representing a value that will be available later — it's in one of three states: pending, fulfilled, or rejected. You attach handlers with .then() and .catch(). async/await is syntax sugar on top of promises: marking a function async lets you use await inside it, which pauses that function until the promise settles. It makes asynchronous code read like synchronous code, and errors can be caught with a normal try/catch.",
    why: "async/await is how modern JavaScript is actually written. Explaining it as 'syntax sugar over promises' shows you know what's really happening underneath.",
  },
  {
    id: "js-dom",
    category: "javascript",
    question: "What is the DOM?",
    answer:
      "The DOM (Document Object Model) is the browser's tree-shaped representation of your HTML page. JavaScript can read and change that tree — selecting elements with methods like document.querySelector(), changing their text or styles, adding and removing elements, and listening for events like clicks. When you 'change the page' with JavaScript, you're really changing the DOM, and the browser re-renders.",
    why: "The DOM is the bridge between your code and what the user sees. Being able to describe it as a tree you can query and mutate is exactly what interviewers listen for.",
  },
  {
    id: "js-null-undefined",
    category: "javascript",
    question: "What is the difference between null and undefined?",
    answer:
      "undefined means a variable or property has been declared but not given a value — it's JavaScript's default 'no value'. null is an intentional value you (or code) assign to say 'deliberately no value'. A simple way to remember: undefined is 'not set yet', null is 'set to nothing on purpose'. Both are falsy, and == treats them as equal, but === distinguishes them.",
    why: "This is a quick check of whether you know JavaScript's actual semantics rather than guessing. The 'default vs intentional' framing is an easy way to remember it.",
  },

  /* ------------------------------ Frontend ------------------------------ */
  {
    id: "fe-what-is-responsive",
    category: "frontend",
    question: "What is responsive web design?",
    answer:
      "Responsive design means a website adapts its layout to the screen size it's viewed on — one codebase that looks good on a small phone, a tablet, and a desktop. It's built with three ingredients: fluid grids (sizes in percentages rather than fixed pixels), flexible images (that don't overflow their container), and media queries (CSS rules that apply only at certain screen widths, like stacking columns on mobile).",
    why: "Most real users in India will see your work on a phone first. Being able to name the three ingredients shows you understand the concept, not just the CSS syntax.",
  },
  {
    id: "fe-flexbox-grid",
    category: "frontend",
    question: "When would you use Flexbox and when would you use CSS Grid?",
    answer:
      "Use Flexbox for one-dimensional layouts — arranging items in a row OR a column, like a navbar, a card's content, or centering something on a page. Use Grid for two-dimensional layouts — rows AND columns at the same time, like a page layout with a sidebar, header, and content area, or a photo gallery. In practice they're often combined: grid for the page skeleton, flex for the components inside it.",
    why: "Knowing which tool fits which problem is a sign of experience. The 'one-dimensional vs two-dimensional' framing is the standard way to think about it.",
  },
  {
    id: "fe-what-is-react",
    category: "frontend",
    question: "What is React and why would you use it?",
    answer:
      "React is a JavaScript library for building user interfaces from small reusable pieces called components. Instead of manually updating the DOM, you describe what the UI should look like for each state, and React updates the page efficiently when the data changes. It's useful because it makes complex interfaces manageable, encourages reusable code, and has a huge ecosystem and job market.",
    why: "The key idea to communicate is 'components + declarative UI'. Saying you build UIs from small reusable pieces and let React handle updates is the answer interviewers expect.",
  },
  {
    id: "fe-react-hooks",
    category: "frontend",
    question: "What are React hooks? Name two you've used.",
    answer:
      "Hooks are functions that let you use React features inside function components. useState lets a component store and update a value — for example, whether a menu is open. useEffect lets a component run code at certain times — for example, fetching data when the component first loads, or updating the document title. There are rules: hooks must be called at the top level of a component, not inside loops or conditions.",
    why: "useState and useEffect cover most real usage. Mentioning the rules of hooks shows you've actually written React, not just read about it.",
  },
  {
    id: "fe-semantic-html",
    category: "frontend",
    question: "What is semantic HTML and why does it matter?",
    answer:
      "Semantic HTML means using elements that describe their meaning — like <header>, <nav>, <main>, <article>, <section>, and <footer> — instead of using <div> for everything. It matters for three reasons: accessibility (screen readers can navigate the page structure), SEO (search engines understand the page hierarchy), and maintainability (the code explains itself).",
    why: "Companies care because accessibility and SEO affect real users and real traffic. Naming a concrete benefit (not just 'it's good practice') makes the answer land.",
  },
  {
    id: "fe-browser-render",
    category: "frontend",
    question: "What happens when you type a URL into a browser and press Enter?",
    answer:
      "Roughly: the browser checks its cache for the address, then asks DNS to translate the domain into an IP address. It opens a connection to that server and requests the page. The server responds with HTML, which the browser parses into the DOM. While parsing, it discovers CSS and JavaScript files, downloads them, builds the CSSOM, executes the scripts, and finally paints the pixels on screen. Modern browsers do much of this in parallel to be fast.",
    why: "This tests big-picture understanding. You don't need every detail — a correct, ordered summary (DNS → request → HTML → DOM → paint) shows you understand what the browser actually does.",
  },

  /* ------------------------ Internship & Behavioural ------------------------ */
  {
    id: "in-tell-about-a-project",
    category: "internship",
    question: "Tell me about a project you've built.",
    answer:
      "Use a simple structure: what it is, what YOU did, the tech, and the result. Example: \"I built a Library Management System for my DBMS course. It lets librarians add books and students issue and return them, with separate logins. I wrote the frontend in vanilla JavaScript and the backend in PHP with MySQL — I used SQL joins to generate overdue reports, which cut the librarian's manual register work by about 70%. It won second place in our college project exhibition. I'd be happy to walk you through the code.\"",
    why: "Interviewers use this to check two things: can you explain technical work clearly, and did you actually do it? Offering to walk through the code at the end is a confident, honest move.",
  },
  {
    id: "in-teamwork",
    category: "internship",
    question: "Describe a time you worked in a team.",
    answer:
      "Use the STAR pattern: Situation, Task, Action, Result. Example: \"In our DBMS course, our team of four had to build a project in six weeks (situation). I was responsible for the frontend (task). I suggested we split the UI into components and reuse a stylesheet, and I set up a shared GitHub repo with a simple branch workflow (action). We finished a day early and scored the highest marks in our batch (result).\"",
    why: "Behavioural questions are answered with stories, not adjectives. STAR keeps your answer short and structured. 'I' statements for your actions plus 'we' for the team outcome sound mature.",
  },
  {
    id: "in-challenge",
    category: "internship",
    question: "Tell me about a challenge you faced and how you handled it.",
    answer:
      "Pick a small but real challenge. Example: \"In my first week of the internship, my redesigned page looked fine on my laptop but broke on smaller screens (situation). I had to fix it without missing the deadline (task). I used the browser's device emulator, found that a fixed-width container was the cause, and switched to a fluid layout with a media query (action). The page then worked down to small phones, and my mentor merged it the same day (result).\"",
    why: "The interviewer is listening for ownership and a method, not drama. A debugging story is perfect for freshers — it's relatable, shows you can use developer tools, and ends well.",
  },
  {
    id: "in-feedback",
    category: "internship",
    question: "How do you handle feedback or criticism?",
    answer:
      "Example: \"I see feedback as free information. During my internship, my mentor reviewed my code and pointed out three places where I was repeating myself. At first it stung a little, but I asked him to show me how he'd refactor it, I took notes, and I applied the same pattern in my next task — he specifically mentioned the improvement in the next review. I'd rather be corrected early than ship something weak.\"",
    why: "This reveals your ego and your growth mindset. The strongest signal is that you acted on feedback and can point to a visible change it caused.",
  },
  {
    id: "in-stuck",
    category: "internship",
    question: "What do you do when you get stuck on a problem?",
    answer:
      "Describe a real process. Example: \"First I try to solve it myself for a focused stretch — about 30 to 45 minutes — reading the error message carefully, searching documentation, and testing small pieces in isolation. If I'm still stuck, I write down exactly what I've tried and ask someone specific, like 'I expected X but got Y — any idea why?' At my internship, asking one well-formed question saved me half a day on a CSS bug my mentor spotted in two minutes.\"",
    why: "Employers want to know you won't burn hours alone, but also that you won't interrupt others constantly. A time-boxed solo attempt followed by a specific question is the ideal answer.",
  },
  {
    id: "in-why-internship",
    category: "internship",
    question: "Why do you want this internship?",
    answer:
      "Connect it to learning goals, not just 'I need experience'. Example: \"I've mostly built projects alone, where I was the only judge of my code. I want a real internship because I want to learn how professional teams review code, handle deadlines, and ship to real users. Your team works on [specific product/area], which is exactly the environment where I think I'd grow fastest — and I'd like to contribute from week one, not just observe.\"",
    why: "Saying you want to contribute from week one separates you from applicants who only want a certificate. Mentioning a specific thing about their work shows genuine interest.",
  },
];
