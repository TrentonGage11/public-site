function owl() {
	sleep(500);
	console.clear();
}
function ol(url) {
	window.open(url, '_blank');
}
function clo() {
	window.close();
}
function opl(name) {
	document.getElementById(name).scrollIntoView();
}
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}