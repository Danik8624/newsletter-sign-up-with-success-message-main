const words = new URLSearchParams(window.location.search); 
const emailValue= words.get('email');
const element = document.getElementById("P1").innerHTML = `<b>${emailValue}</b>`;
