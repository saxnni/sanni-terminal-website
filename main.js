const output = document.getElementById("output");
const form = document.getElementById("terminal_form");
const input = document.getElementById("input_field");

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

function addLine(text) {
  const p = document.createElement("p");
  p.textContent = text;
  output.appendChild(p);
  window.scrollTo(0, document.body.scrollHeight);
}

function addLines(linesArray) {
  linesArray.forEach((line) => addLine(line));
}

function command(cmd) {
  const trimmed = cmd.trim();

  addLine(
    `<span class="prompt">&gt;</span> <span class="command-echo">${escapeHtml(trimmed)}</span>`,
  );

  addLine(`> ${trimmed}`);

  switch (cmd.toLowerCase()) {
    case "help":
      addLines(help);
      break;
    case "whois":
      addLines(whois);
      break;
    case "skills":
      addLines(skills);
    case "projects":
      addLines(projects);
      break;
    case "socials":
      addLines(socials);
      break;
    case "info":
      addLines(info);
      break;

    case "projects":
      addLines(projects);
      break;

    case "clear":
      output.innerHTML = "";
      break;
    case "":
      break;
    default:
      addLine("Command not found. Type 'help' for available commands");
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const userText = input.value;
  command(userText);
  input.value = "";
});
