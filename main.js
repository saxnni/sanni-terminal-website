const output = document.getElementById("output");
const form = document.getElementById("terminal_form");
const input = document.getElementById("input_field");

<<<<<<< HEAD
const terminalBody = document.querySelector(".terminal-body");

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function addLine(text) {
  const p = document.createElement("p");
  p.innerHTML = text;
  output.appendChild(p);
  if (terminalBody) {
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }
}

document.querySelector(".terminal-window")?.addEventListener("click", () => {
  input.focus();
});

=======
function addLine(text) {
  const p = document.createElement("p");
  p.textContent = text;
  output.appendChild(p);
  window.scrollTo(0, document.body.scrollHeight);
}

>>>>>>> origin/main
function addLines(linesArray) {
  linesArray.forEach((line) => addLine(line));
}

function command(cmd) {
  const trimmed = cmd.trim();

<<<<<<< HEAD
  // Print command line with prompt in magenta and user text in neon green (matching input field)
  addLine(`<span class="prompt">&gt;</span> <span class="command-echo">${escapeHtml(trimmed)}</span>`);
=======
  addLine(`> ${trimmed}`);
>>>>>>> origin/main

  switch (cmd.toLowerCase()) {
    case "help":
      addLines(help);
      break;
    case "whois":
      addLines(whois);
      break;
<<<<<<< HEAD
    case "skills":
      addLines(skills);
=======
    case "projects":
      addLines(projects);
>>>>>>> origin/main
      break;
    case "socials":
      addLines(socials);
      break;
    case "info":
      addLines(info);
      break;
<<<<<<< HEAD
    case "projects":
      addLines(projects);
      break;
=======
>>>>>>> origin/main
    case "clear":
      output.innerHTML = "";
      break;
    case "":
      break;
    default:
<<<<<<< HEAD
      addLine("<span class='pink'>Command not found.</span> Type '<span class='cmd'>help</span>' for available commands.");
=======
      addLine("Command not found. Type 'help' for available commands");
>>>>>>> origin/main
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const userText = input.value;
  command(userText);
  input.value = "";
});
