chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: addMarker
    });
});

function addMarker() {
    console.log("Marker added!"); // 이 함수는 content.js에서 정의됨
}
