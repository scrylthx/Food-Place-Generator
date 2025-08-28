const h4Elements = document.querySelectorAll('h4');
const h4Texts = Array.from(h4Elements).map(el => el.textContent.trim());

console.log(h4Texts);

// If you want to display it on the page, uncomment the following line:
alert(JSON.stringify(h4Texts, null, 2));
