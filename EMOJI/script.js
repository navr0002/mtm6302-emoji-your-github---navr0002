const emojiGallery = document.getElementById("emoji-gallery");

const emojis = [
    { char: "😀", code: "Smiling face" },
    { char: "😂", code: "Face with tears" },
    { char: "😍", code: "In love" },
    { char: "🤩", code: "Favorite face" },
    { char: "😎", code: "Smart face" },
    { char: "🤔", code: "Thinking face" },
    { char: "😢", code: "Crying face" },
    { char: "😡", code: "Angry face" },
    { char: "🥳", code: "Congrats face" },
    { char: "🤯", code: "Confused face" },
    { char: "🤗", code: "Hugging face" },
    { char: "🙃", code: "Sarcasm face" }
];

emojis.forEach(emoji => {
    const div = document.createElement("div");
    div.classList.add("emoji");
    div.innerHTML = `${emoji.char} <br> ${emoji.code}`;
    emojiGallery.appendChild(div);
});
