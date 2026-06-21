(function () {
  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function mountOvalReveal(root, options = {}) {
    const config = {
      heading: "AI-Assisted Workflow Reviews",
      tagline: "Decision support inside existing business workflows.",
      accentWordIndex: 0,
      ...options,
    };

    root.innerHTML = "";
    root.className = "hf-launch-pattern pattern-oval-reveal";

    const stage = el("div", "oval-stage");
    const words = el("div", "oval-wordline");
    config.heading.trim().split(/\s+/).forEach((word, index) => {
      words.appendChild(el("span", index === config.accentWordIndex ? "oval-word is-accent" : "oval-word", word));
    });

    const rails = el("div", "oval-rails");
    ["halo", "outer", "mid", "inner", "core"].forEach((name) => rails.appendChild(el("div", `oval-rail ${name}`)));

    const typing = el("div", "oval-typing");
    typing.appendChild(el("span", "typing-text", ""));
    typing.appendChild(el("span", "typing-cursor"));
    rails.appendChild(typing);

    stage.appendChild(words);
    stage.appendChild(rails);
    root.appendChild(stage);
    root.__ovalConfig = config;
  }

  function animateOvalReveal(tl, root, start = 0) {
    const config = root.__ovalConfig || {};
    const words = root.querySelectorAll(".oval-word");
    const rails = root.querySelector(".oval-rails");
    const railLines = root.querySelectorAll(".oval-rail");
    const typing = root.querySelector(".typing-text");
    const chars = config.tagline || "";

    tl.fromTo(words, { opacity: 0, y: 16, filter: "blur(10px)" }, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.42,
      stagger: 0.14,
      ease: "power3.out",
    }, start + 0.2);

    tl.to(words, { opacity: 0.08, y: -8, filter: "blur(8px)", duration: 0.38, ease: "power2.in" }, start + 1.55);
    tl.fromTo(rails, { opacity: 0, scale: 1.35, rotation: -42 }, {
      opacity: 1,
      scale: 1,
      rotation: 0,
      duration: 0.9,
      ease: "power3.inOut",
    }, start + 1.85);
    tl.fromTo(railLines, { opacity: 0, scaleX: 0.6 }, {
      opacity: 1,
      scaleX: 1,
      duration: 0.55,
      stagger: 0.08,
      ease: "expo.out",
    }, start + 2.2);

    for (let i = 1; i <= chars.length; i += 1) {
      tl.set(typing, { textContent: chars.slice(0, i) }, start + 2.35 + i * 0.012);
    }
  }

  function mountDecisionConstellation(root, options = {}) {
    const config = {
      title: "Behind every workflow is a decision",
      leftTitle: "Multiple checks",
      leftGhost: "before approval",
      cards: [
        ["INPUT", "Validation"],
        ["ROUTE", "Optimization"],
        ["POLICY", "Logic"],
        ["QUEUE", "Priority"],
        ["AMOUNT", "Threshold"],
        ["TRACE", "Audit trail"],
      ],
      questions: [
        ["V", "Was the input valid?"],
        ["C", "Was it classified correctly?"],
        ["R", "Was the route or flow optimized?"],
        ["P", "Was the policy applied correctly?"],
        ["A", "Was the amount or threshold acceptable?"],
      ],
      ...options,
    };

    root.innerHTML = "";
    root.className = "hf-launch-pattern pattern-decision-constellation";

    const stage = el("div", "decision-stage");
    const title = el("div", "decision-title", config.title);
    stage.appendChild(title);

    const positions = [
      { left: "8%", top: "16%", rotate: -8 },
      { left: "70%", top: "12%", rotate: 7 },
      { left: "80%", top: "46%", rotate: -5 },
      { left: "10%", top: "64%", rotate: 5 },
      { left: "42%", top: "74%", rotate: -6 },
      { left: "72%", top: "74%", rotate: 6 },
    ];

    config.cards.forEach(([name, sub], index) => {
      const card = el("div", "decision-doc");
      const pos = positions[index];
      card.style.left = pos.left;
      card.style.top = pos.top;
      card.style.transform = `rotate(${pos.rotate}deg)`;
      card.appendChild(el("div", "decision-doc-title", name));
      card.appendChild(el("div", "decision-doc-sub", sub));
      stage.appendChild(card);
    });

    const rowsPanel = el("div", "decision-rows-panel");
    const leftCopy = el("div", "decision-left-copy");
    leftCopy.textContent = config.leftTitle;
    leftCopy.appendChild(el("span", "", config.leftGhost));
    rowsPanel.appendChild(leftCopy);

    const list = el("div", "decision-question-list");
    config.questions.forEach(([icon, text]) => {
      const row = el("div", "decision-question-row");
      row.appendChild(el("div", "decision-question-icon", icon));
      row.appendChild(el("div", "decision-question-text", text));
      list.appendChild(row);
    });
    rowsPanel.appendChild(list);

    root.appendChild(stage);
    root.appendChild(rowsPanel);
  }

  function animateDecisionConstellation(tl, root, start = 0) {
    const title = root.querySelector(".decision-title");
    const cards = root.querySelectorAll(".decision-doc");
    const panel = root.querySelector(".decision-rows-panel");
    const leftCopy = root.querySelector(".decision-left-copy");
    const rows = root.querySelectorAll(".decision-question-row");

    tl.fromTo(title, { opacity: 0, scale: 0.74, filter: "blur(18px)" }, {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      duration: 0.74,
      ease: "expo.out",
    }, start + 0.15);
    tl.fromTo(cards, { opacity: 0, scale: 0.58, filter: "blur(12px)" }, {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      duration: 0.75,
      stagger: { each: 0.08, from: "center" },
      ease: "power3.out",
    }, start + 0.42);
    tl.to(title, { scale: 1.55, opacity: 0, duration: 0.7, ease: "power3.inOut" }, start + 2.4);
    tl.to(cards, { opacity: 0.12, duration: 0.7, ease: "power3.inOut" }, start + 2.45);
    tl.fromTo(panel, { opacity: 0, scale: 1.06, filter: "blur(16px)" }, {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      duration: 0.55,
      ease: "power2.out",
    }, start + 3.08);
    tl.fromTo(leftCopy, { opacity: 0, x: -36 }, { opacity: 1, x: 0, duration: 0.45, ease: "circ.out" }, start + 3.25);
    tl.fromTo(rows, { opacity: 0, x: 80, y: 42 }, {
      opacity: 1,
      x: 0,
      y: 0,
      duration: 0.45,
      stagger: 0.11,
      ease: "power3.out",
    }, start + 3.45);
  }

  window.LaunchVideoPatterns = {
    mountOvalReveal,
    animateOvalReveal,
    mountDecisionConstellation,
    animateDecisionConstellation,
  };
})();
