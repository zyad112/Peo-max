const decorations = [
  "☆彡 Ⓝⓐⓜⓔ 彡☆",
  "ツ ☠️ＮＡＭＥ☠️ ツ",
  "★彡[ＮＡＭＥ]彡★",
  "✿ＮＡＭＥ✿",
  "♡ＮＡＭＥ♡",
  "❆ＮＡＭＥ❆",
  "✪ＮＡＭＥ✪",
  "𓆩ＮＡＭＥ𓆪",
  "⎛⎝ＮＡＭＥ⎠⎞",
  "༒☬ＮＡＭＥ☬༒",
  "➳ＮＡＭＥ➳",
  "꧁༺ＮＡＭＥ༻꧂",
  "𒆜ＮＡＭＥ𒆜",
  "〘ＮＡＭＥ〙",
  "『ＮＡＭＥ』",
  "×º°”˜`”°º×ＮＡＭＥ×º°”˜`”°º×",
  "✾ＮＡＭＥ✾",
  "ஜ۩۞۩ஜＮＡＭＥஜ۩۞۩ஜ"
];

function generateDecorations() {
  const inputText = document.getElementById("text-input").value.trim();
  const container = document.getElementById("decorations-container");
  container.innerHTML = "";

  if (!inputText) {
    container.innerHTML = "<p style='color: red;'>الرجاء إدخال نص لتزيينه</p>";
    return;
  }

  decorations.forEach((pattern) => {
    const decoratedText = pattern.replace(/ＮＡＭＥ/g, inputText);
    const decorationDiv = document.createElement("div");
    decorationDiv.className = "decoration-item";
    decorationDiv.innerHTML = `
      ${decoratedText}
      <button class="copy-btn" onclick="copyText('${decoratedText}')">📋</button>
    `;
    container.appendChild(decorationDiv);
  });
}

function copyText(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert("تم نسخ النص: " + text);
  });
}