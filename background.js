const frontPad = (value, places=2, padValue='0') => String(value).padStart(places, padValue);

const generateFileName = () =>{
  const today = new Date();
  return `screenshot_${today.getFullYear()}_${frontPad(today.getMonth())}_${frontPad(today.getDate())}_${frontPad(today.getMinutes())}_${today.getSeconds()}`
};

const takeScreenshot = () => {
  chrome.tabs.captureVisibleTab(null, {format: "png"}, function(dataUrl) {
    var link = document.createElement("a");
    link.download = `${generateFileName()}.png`;
    link.href = dataUrl;
    link.click();
  });
};

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.type === "take-screenshot") {
    takeScreenshot();
  }
});