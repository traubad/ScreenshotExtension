document.getElementById("screenshot").addEventListener("click", function() {
  chrome.runtime.sendMessage({type: "take-screenshot"});
});