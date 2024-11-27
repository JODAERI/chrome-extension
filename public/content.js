alert("조대리 챗봇을 사용합니다.");

const createChatButton = () => {
  const button = document.createElement("div");
  button.id = "chat-button";
  button.style = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 100px;
    height: 100px;
    cursor: pointer;
    z-index: 10000;
    margin: 10px 20px;
    padding:10px;
  `;
  button.innerHTML = `
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M49.999 4C25.1454 4 5 24.1474 5 48.999C5 59.5928 8.68337 69.3069 14.8146 76.9888C17.2992 80.0921 18.583 85.0555 16.3189 87.9829C14.7025 90.0769 12.9217 91.5077 10.9997 91.7629C4.73317 92.6001 13.3006 100.102 27.9877 94.3751C31.6904 92.9308 37.4524 92.3604 41.3523 93.1396C44.1462 93.7003 47.0369 93.9981 50.001 93.9981C74.8546 93.9981 95 73.8526 95 49.001C95 24.1493 74.8507 4 49.999 4Z" fill="#1A245A" stroke="#CCCEDA" stroke-width="2"/>
    <path d="M35.7947 37.8043L35.8184 42.8042L27.0935 42.8457C27.1809 43.6953 27.4927 44.4188 28.0289 45.0163C28.5816 45.597 29.2673 46.0854 30.0859 46.4815C30.9043 46.861 31.814 47.14 32.8149 47.3185C33.8157 47.4971 34.8245 47.5923 35.8413 47.6042L35.8662 52.8541C34.6828 52.8431 33.4906 52.7321 32.2896 52.5211C31.1053 52.3101 29.9872 52.0154 28.9354 51.637C27.8836 51.2587 26.9314 50.8132 26.079 50.3006C25.2431 49.7712 24.582 49.1827 24.0956 48.535C23.6153 49.1873 22.9515 49.7821 22.104 50.3195C21.2732 50.8401 20.3336 51.2946 19.2855 51.6829C18.2373 52.0712 17.1137 52.3766 15.9148 52.599C14.7325 52.8212 13.5497 52.9435 12.3665 52.9658L12.3415 47.7159C13.3581 47.6944 14.366 47.5896 15.3651 47.4015C16.3642 47.2134 17.2712 46.9258 18.086 46.5386C18.9008 46.1347 19.5734 45.6398 20.104 45.054C20.6511 44.4513 20.9643 43.7248 21.0436 42.8745L12.3187 42.9159L12.2949 37.916L35.7947 37.8043ZM21.2545 55.6736L21.2364 51.8736L26.9863 51.8463L27.0044 55.6463L35.8793 55.6041L35.9031 60.604L12.4033 60.7157L12.3796 55.7158L21.2545 55.6736ZM56.4038 60.5065L56.3579 50.8566L55.208 50.8621L55.2538 60.512L44.154 60.5648C43.3206 60.5687 42.5617 60.439 41.8771 60.1756C41.2092 59.9121 40.6324 59.5398 40.1468 59.0588C39.6779 58.5944 39.3085 58.0211 39.0386 57.3391C38.7687 56.6737 38.6318 55.9243 38.6279 55.091L38.5456 37.7912L48.4955 37.7439L48.5181 42.4938L43.8181 42.5162L43.8731 54.066C43.8742 54.2994 43.9252 54.5241 44.0263 54.7403C44.1272 54.9398 44.2531 55.1226 44.4039 55.2885C44.5713 55.4377 44.7552 55.5619 44.9557 55.6609C45.1728 55.7599 45.398 55.8088 45.6314 55.8077L49.9813 55.787L49.8955 37.7372L55.1454 37.7123L55.1854 46.1122L56.3354 46.1067L56.2954 37.7068L61.5454 37.6818L61.6538 60.4816L56.4038 60.5065ZM70.5046 60.4395C69.588 60.4438 68.7539 60.2811 68.0023 59.9514C67.2508 59.6383 66.607 59.183 66.0708 58.5855C65.5346 57.9881 65.1145 57.2734 64.8106 56.4415C64.5232 55.5929 64.3771 54.6519 64.3721 53.6186C64.3672 52.5852 64.5045 51.6512 64.7838 50.8166C65.0798 49.9652 65.493 49.2382 66.0235 48.6357C66.5539 48.0331 67.1934 47.5717 67.9419 47.2515C68.6903 46.9146 69.5228 46.744 70.4395 46.7396L71.3645 46.7352C72.0478 46.732 72.5886 46.5461 72.9869 46.1775C73.4017 45.7922 73.6076 45.2829 73.6046 44.6496C73.6013 43.9496 73.3903 43.4006 72.9718 43.0026C72.5698 42.5878 72.0271 42.382 71.3438 42.3853L64.8189 42.4163L64.7963 37.6664L73.9462 37.6229C74.7462 37.6191 75.4803 37.7822 76.1485 38.1124C76.8167 38.4259 77.3855 38.8815 77.8551 39.4793C78.3246 40.0771 78.6864 40.8004 78.9404 41.6492C79.211 42.4812 79.3488 43.4139 79.3537 44.4472C79.3586 45.4805 79.2298 46.4228 78.9671 47.2741C78.7211 48.1086 78.3662 48.827 77.9024 49.4292C77.4386 50.0314 76.8741 50.5007 76.209 50.8372C75.5439 51.1571 74.8113 51.3189 74.0113 51.3227L72.3613 51.3305C71.678 51.3338 71.129 51.5364 70.7142 51.9384C70.3161 52.3403 70.1186 52.8662 70.1217 53.5162C70.1248 54.1662 70.3273 54.6903 70.7292 55.0884C71.1478 55.4864 71.6987 55.6837 72.382 55.6805L81.6319 55.6365L81.5461 37.5867L87.296 37.5594L87.4044 60.3591L70.5046 60.4395Z" fill="white"/>
  </svg>
  `;

  // 채팅창 생성
  const chatBox = document.createElement("div");
  chatBox.id = "chat-box";
  chatBox.style = `
    display: none;
    position: fixed;
    bottom: 120px;
    right: 20px;
    width: 400px;
    height: 558.14px;
    background: #F3F5F9;
    border-radius: 20px;
    z-index: 10001;
    margin: 30px;
    padding:10px;
  `;

  // 채팅 내용 표시 영역
  const messagesContainer = document.createElement("div");
  messagesContainer.id = "messages-container";
  messagesContainer.style = `
     flex: 1;
     overflow-y: auto;
     margin-bottom: 10px;
     padding: 10px;
     border: 1px solid #ccc;
     border-radius: 10px;
     background: white;
   `;

  // 사용자 입력창
  const inputContainer = document.createElement("div");
  inputContainer.style = `
    display: flex;
    align-items: center;
  `;
  const inputField = document.createElement("input");
  inputField.type = "text";
  inputField.placeholder = "메시지를 입력하세요...";
  inputField.style = `
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  `;

  const sendButton = document.createElement("button");
  sendButton.textContent = "전송";
  sendButton.style = `
    margin-left: 10px;
    padding: 10px 20px;
    background: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  `;

  // 입력창과 전송 버튼을 추가
  inputContainer.appendChild(inputField);
  inputContainer.appendChild(sendButton);

  // chatBox에 컨테이너 추가
  chatBox.appendChild(messagesContainer);
  chatBox.appendChild(inputContainer);

  // React 렌더링 div 추가
  const reactRoot = document.createElement("div");
  reactRoot.id = "react-root";
  chatBox.appendChild(reactRoot);

  // 버튼 클릭 이벤트
  button.addEventListener("click", () => {
    chatBox.style.display = chatBox.style.display === "none" ? "block" : "none";
    console.log(" 버튼 클릭");
  });
  // 전송 버튼 클릭 이벤트
  sendButton.addEventListener("click", () => {
    const userMessage = inputField.value.trim();
    if (!userMessage) return;

    const userMessageDiv = document.createElement("div");
    userMessageDiv.textContent = `사용자: ${userMessage}`;
    userMessageDiv.style = `
    padding: 10px;
    margin: 5px 0;
    border-radius: 5px;
    background: #e6f7ff;
    align-self: flex-end;
  `;
    messagesContainer.appendChild(userMessageDiv);

    inputField.value = "";

    simulateApiResponse(userMessage);
  });

  const simulateApiResponse = (message) => {
    setTimeout(() => {
      const botResponseDiv = document.createElement("div");
      botResponseDiv.textContent = `API 응답: ${message}에 대한 응답입니다.`;
      botResponseDiv.style = `
      padding: 10px;
      margin: 5px 0;
      border-radius: 5px;
      background: #f0f0f0;
      align-self: flex-start;
    `;
      messagesContainer.appendChild(botResponseDiv);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 1000);
  };

  // DOM에 추가
  document.body.appendChild(button);
  document.body.appendChild(chatBox);
};

// DOMContentLoaded 이벤트를 사용
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", createChatButton);
} else {
  createChatButton();
}
