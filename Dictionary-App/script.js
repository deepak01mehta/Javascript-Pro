let input = document.getElementById("inputWord");
let btn = document.getElementById("serachBtn");
let result = document.getElementById("result");


// Add enter key support
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    btn.click()
  }
})

btn.addEventListener("click", () => {
  const word = input.value.trim();
  if (!word) {
    result.textContent = "Please enter a word";
    return;
  }
  fetchMeaning(word);
});

async function fetchMeaning(word) {
  result.textContent = "Loading...";
  try {
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    if (!res.ok) throw new Error("Word not found!");
    const data = await res.json();
    
    displayResult(data);
  } catch (err) {
    result.textContent = err.message;
  }
}

function displayResult(data) {
  const wordData = data[0];

  // Phonetics
  const phoneticsHtml = wordData.phonetics
    .map(
      p => `<div class="phonetics">${p.text || ""} 
      ${p.audio ? `<audio controls src="${p.audio}"></audio>` : ""}</div>`
    )
    .join("");

  // Meanings
  const meaningHTML = wordData.meanings
    .map(m => {
      const def = m.definitions
        .map(d => `<li>${d.definition}</li>`)
        .join("");
      return `<div class="meanings"><strong>${m.partOfSpeech}</strong><ul>${def}</ul></div>`;
    })
    .join("");

  result.innerHTML = `
    <div class="word">${wordData.word}</div>
    ${phoneticsHtml}
    ${meaningHTML}
  `;
  input.value = "";
}
