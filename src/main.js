import data from "@emoji-mart/data";
import { Picker } from "emoji-mart";

function terminate() {
  window.terminate();
}

window.addEventListener("load", () => {
  const picker = new Picker({
    data,
    autoFocus: true,
    parent: document.querySelector("#app"),
    onEmojiSelect: (emoji) => {
      const textarea = document.createElement("textarea");
      textarea.textContent = emoji.native;
      document.body.appendChild(textarea);
      textarea.select();
      // Do not use the clipboard api because it requires https
      document.execCommand("copy");
      document.body.removeChild(textarea);

      setTimeout(terminate, 10);
    },
  });

  const style = document.createElement("style");
  picker.shadowRoot.appendChild(style);

  style.innerHTML = `
    .category button[aria-selected] .background {
      border: 1px solid cyan;
    }
  `;

  window.addEventListener("blur", terminate);
  window.addEventListener("keyup", (e) => e.key === "Escape" && terminate());

  // Wait for everything to be loaded before showing the window
  setTimeout(() => window.show(), 70);
});
