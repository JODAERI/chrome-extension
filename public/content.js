// DOM에 조대리 버튼 삽입
const createChatButton = () => {
  const button = document.createElement("div");
  button.id = "chat-button";
  button.style = `
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 100px;
  height: 10ㄴ0px;
  cursor: pointer;
  z-index: 10000;
  background: url('${chrome.runtime.getURL(
    "./assets/logo.svg"
  )}') no-repeat center center;
  background-size: contain;
`;

  // 채팅창 생성
  const chatBox = document.createElement("div");
  chatBox.id = "chat-box";
  chatBox.style = `
      display: none;
      position: fixed;
      bottom: 90px;
      right: 20px;
      width: 300px;
      height: 400px;
      border: 1px solid #ccc;
      background: white;
      border-radius: 10px;
      z-index: 10001;
    `;

  // React가 채팅창을 렌더링할 div 추가
  const reactRoot = document.createElement("div");
  reactRoot.id = "react-root";
  chatBox.appendChild(reactRoot);

  // 버튼 클릭 이벤트 추가
  button.addEventListener("click", () => {
    console.log("q눌렀쥬");
  });

  // DOM에 추가
  document.body.appendChild(button);
  document.body.appendChild(chatBox);
};

// 실행
createChatButton();
