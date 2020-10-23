let nav = navigator;
document.getElementsByName("closeButton");
function onUpdated(tab) {
  console.log(`Updated tab: ${tab.id}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

function updateFirstTab(tabs) {
  var updating = nav.tabs.update(tabs[0].id, {
    active: true,
    url: "https://developer.mozilla.org"
  });
  updating.then(onUpdated, onError);
}

function queryBT() {
	var querying = nav.tabs.query({currentWindow:true});
	querying.then(updateFirstTab, onError);
}