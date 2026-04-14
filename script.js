const TALLY_FORM_URL = "https://tally.so/r/q4KlGO";

const slot = document.getElementById("tally-form-slot");

function isValidHttpUrl(value) {
  try {
    const parsed = new URL(value);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

function renderTallyEmbed(url) {
  const iframe = document.createElement("iframe");
  iframe.className = "tally-iframe";
  iframe.src = url;
  iframe.title = "Tally Form";
  iframe.loading = "lazy";
  iframe.setAttribute("allowfullscreen", "");
  iframe.setAttribute("data-tally-src", url);

  slot.innerHTML = "";
  slot.appendChild(iframe);

  if (window.Tally && typeof window.Tally.loadEmbeds === "function") {
    window.Tally.loadEmbeds();
  }
}

if (isValidHttpUrl(TALLY_FORM_URL)) {
  renderTallyEmbed(TALLY_FORM_URL);
}