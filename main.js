let zitatEl = document.querySelectorAll(".card p");
let zitat = new Array();
for (let i = 0; i < zitatEl.length; i++) {
   zitat[i] = zitatEl[i].innerText;
}
function kopieren(pos) {
   navigator.clipboard.writeText(zitat[pos]);
}
