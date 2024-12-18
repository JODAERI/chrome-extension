const createChatBot = () => {
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
    bottom: 150px;
    right: 20px;
    width: 400px;
    height: 558px;
    background: #F3F5F9;
    border-radius: 20px;
    z-index: 10001;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    display: flex;
    flex-direction: column;
  `;

  // 헤더 생성
  const header = document.createElement("div");
  header.id = "chat-header";
  header.style = `
    padding: 10px;
    display: flex;
    justify-content: center;
    margin: auto;
    `;
  header.innerHTML = `
    <svg width="126" height="59" viewBox="0 0 126 59" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M39.6507 11.1658L39.6888 19.1657L25.7289 19.2321C25.8687 20.5915 26.3676 21.7491 27.2254 22.705C28.1099 23.6342 29.2069 24.4156 30.5166 25.0494C31.8262 25.6565 33.2817 26.1029 34.883 26.3887C36.4844 26.6744 38.0985 26.8267 39.7253 26.8456L39.7652 35.2456C37.8718 35.2279 35.9642 35.0503 34.0426 34.7128C32.1477 34.3751 30.3587 33.9036 28.6758 33.2983C26.9929 32.6929 25.4695 31.9802 24.1056 31.16C22.7682 30.313 21.7104 29.3713 20.9321 28.335C20.1638 29.3787 19.1016 30.3304 17.7457 31.1902C16.4163 32.0232 14.9131 32.7504 13.236 33.3717C11.5589 33.993 9.76124 34.4815 7.84291 34.8373C5.95125 35.193 4.05882 35.3887 2.16564 35.4243L2.1257 27.0244C3.75222 26.99 5.36477 26.8224 6.96336 26.5214C8.56195 26.2205 10.0131 25.7602 11.3168 25.1407C12.6205 24.4945 13.6967 23.7027 14.5456 22.7653C15.421 21.8012 15.9222 20.6388 16.049 19.2781L2.08918 19.3445L2.05114 11.3446L39.6507 11.1658ZM16.3864 39.7568L16.3575 33.6768L25.5574 33.6331L25.5863 39.713L39.7861 39.6455L39.8242 47.6454L2.2246 47.8242L2.18656 39.8243L16.3864 39.7568ZM72.6254 47.4894L72.5519 32.0496L70.712 32.0584L70.7854 47.4982L53.0256 47.5826C51.6923 47.589 50.4779 47.3814 49.3826 46.96C48.3139 46.5384 47.3911 45.9427 46.6141 45.1731C45.8638 44.43 45.2728 43.5128 44.841 42.4215C44.4092 41.3569 44.1902 40.1579 44.1838 38.8246L44.0522 11.1449L59.972 11.0692L60.0082 18.6691L52.4883 18.7049L52.5761 37.1847C52.5779 37.558 52.6596 37.9176 52.8213 38.2635C52.9828 38.5827 53.1842 38.8751 53.4254 39.1406C53.6933 39.3794 53.9875 39.578 54.3083 39.7365C54.6557 39.8948 55.0161 39.9731 55.3894 39.9713L62.3493 39.9382L62.212 11.0585L70.6119 11.0186L70.6758 24.4585L72.5158 24.4497L72.4519 11.0099L80.8518 10.9699L81.0253 47.4495L72.6254 47.4894ZM95.1867 47.3822C93.72 47.3891 92.3854 47.1288 91.1829 46.6012C89.9805 46.1002 88.9504 45.3718 88.0925 44.4159C87.2346 43.4599 86.5625 42.3164 86.0762 40.9854C85.6164 39.6276 85.3825 38.122 85.3747 36.4687C85.3668 34.8154 85.5864 33.321 86.0334 31.9855C86.5069 30.6232 87.168 29.4601 88.0168 28.496C88.8655 27.532 89.8887 26.7938 91.0863 26.2814C92.2837 25.7424 93.6158 25.4694 95.0824 25.4624L96.5624 25.4554C97.6557 25.4502 98.521 25.1527 99.1582 24.563C99.822 23.9465 100.151 23.1316 100.147 22.1183C100.141 20.9983 99.8038 20.1199 99.1341 19.4831C98.4909 18.8195 97.6227 18.4903 96.5293 18.4955L86.0895 18.5451L86.0533 10.9452L100.693 10.8756C101.973 10.8695 103.148 11.1306 104.217 11.6588C105.286 12.1604 106.196 12.8894 106.947 13.8459C107.699 14.8023 108.277 15.9596 108.684 17.3176C109.117 18.6489 109.337 20.1412 109.345 21.7946C109.353 23.4479 109.147 24.9555 108.727 26.3175C108.333 27.6528 107.765 28.8021 107.023 29.7657C106.281 30.7292 105.378 31.4802 104.314 32.0186C103.249 32.5303 102.077 32.7892 100.797 32.7953L98.1574 32.8079C97.0641 32.8131 96.1856 33.1373 95.522 33.7804C94.885 34.4235 94.569 35.265 94.574 36.305C94.5789 37.3449 94.9029 38.1834 95.546 38.8204C96.2157 39.4572 97.0972 39.773 98.1905 39.7678L112.99 39.6974L112.853 10.8178L122.053 10.774L122.226 47.2536L95.1867 47.3822Z" fill="#1A245A"/>
    </svg>
    `;

  // 헤더 클릭 시 특정 사이트로 이동
  header.addEventListener("click", () => {
    window.open("https://jodaeri.vercel.app/", "_blank");
  });

  // 채팅 내용 표시 영역
  const messagesContainer = document.createElement("div");
  messagesContainer.id = "messages-container";
  messagesContainer.style = `
    flex: 1; 
    overflow-y: auto;
    padding: 10px;
  `;

  // 사용자 입력창
  const inputContainer = document.createElement("div");
  inputContainer.style = `
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px auto;
    padding: 10px;
    border: 1px solid #B2B6C8;
    border-radius: 10px;
    background: #FFFFFF;
    width: 90%;
    height: 50px;
  `;

  const inputField = document.createElement("textarea");
  inputField.type = "text";
  inputField.placeholder = "메시지를 입력해 주세요.";
  inputField.style = `
    align-items: center;
    flex: 1;
    border: none;
    outline: none;
    resize: none;
    font-size: 15px;
    padding: 10px;
    width: 87%;
    height: 40px;
  `;

  const sendButton = document.createElement("div");
  sendButton.style = `
    margin-left: 10px;
    padding: 10px;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

  `;

  sendButton.innerHTML = `
<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.44283 12.1578L19.3031 1.30145M8.75153 12.646L11.2141 17.5712C11.8093 18.7614 12.1068 19.3566 12.4816 19.5161C12.807 19.6546 13.1788 19.6295 13.4827 19.4487C13.8327 19.2402 14.0477 18.6105 14.4777 17.3512L19.1306 3.72472C19.5054 2.62745 19.6926 2.07881 19.5644 1.71587C19.4528 1.40014 19.2045 1.15177 18.8888 1.04023C18.5258 0.911999 17.9772 1.09934 16.8799 1.47401L3.25343 6.12697C1.99411 6.55698 1.36445 6.77199 1.15601 7.12204C0.975121 7.42582 0.950056 7.79769 1.08854 8.12294C1.24813 8.4978 1.84324 8.79543 3.03346 9.39046L7.95868 11.8532C8.15484 11.9512 8.2529 12.0002 8.33778 12.0657C8.41324 12.1239 8.48083 12.1914 8.5389 12.2668C8.60449 12.3518 8.65347 12.4498 8.75153 12.646Z" stroke="#666D91" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  `;

  // 입력창과 전송 버튼을 추가
  inputContainer.appendChild(inputField);
  inputContainer.appendChild(sendButton);

  // chatBox에 요소 추가
  chatBox.appendChild(header);
  chatBox.appendChild(messagesContainer);
  chatBox.appendChild(inputContainer);

  // React 렌더링 div 추가
  const reactRoot = document.createElement("div");
  reactRoot.id = "react-root";
  chatBox.appendChild(reactRoot);

  // 버튼 클릭 이벤트
  button.addEventListener("click", () => {
    chatBox.style.display = chatBox.style.display === "none" ? "flex" : "none";
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // 버튼 클릭 시 스크롤 최하단으로 이동
  });

  // 전송 버튼 클릭 이벤트
  sendButton.addEventListener("click", async () => {
    const userMessage = inputField.value.trim();
    if (!userMessage) return;
    inputField.value = "";
    const API_BASE_URL = "https://www.proclockout.com";
    const postResponse = await fetch(`${API_BASE_URL}/api/question`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: null,
        question: userMessage,
        is_first: true,
        is_short: true,
      }),
    });
    if (!postResponse.ok) {
      throw new Error(`HTTP error! status: ${postResponse.status}`);
    }
    const jsonPostResponse = await postResponse.json(); // JSON 변환 시도
    const userId = jsonPostResponse.userId;

    const getResponse = await fetch(`${API_BASE_URL}/api/qna/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!getResponse.ok) {
      throw new Error(`HTTP error! status: ${getResponse.status}`);
    }

    const jsonGetResponse = await getResponse.json();
    const qnaData = jsonGetResponse.qnas;
    console.log(jsonGetResponse);

    // qnaData 배열 순회
    qnaData.forEach((qna) => {
      const { question, question_created_at, answer, answer_created_at } = qna;

      // 사용자 메시지 표시
      showUserMessage(question, formatTimeStamp(question_created_at));

      // 봇 메시지 표시
      showChatBotMessage(answer, formatTimeStamp(answer_created_at));
    });

    // 타임스탬프 형식을 변환하는 함수
    function formatTimeStamp(timestamp) {
      const date = new Date(timestamp);
      const hours = date.getHours() % 12 || 12; // 12시간 형식
      const minutes = date.getMinutes().toString().padStart(2, "0");
      const ampm = date.getHours() >= 12 ? "PM" : "AM";
      const day = date.getDate();
      const month = date.toLocaleString("en-US", { month: "short" }); // ex: "Nov"

      return `${hours}:${minutes} ${ampm}, ${day} ${month}`;
    }
  });

  const showUserMessage = (userMessage, timeStamp) => {
    const userContentsBox = document.createElement("div");
    const userContents = document.createElement("div");
    const userMessageItem = document.createElement("div");
    const userTimeStamp = document.createElement("div");
    userMessageItem.textContent = `${userMessage}`;
    userTimeStamp.textContent = `${timeStamp}`;

    userContentsBox.style = `
    display: flex;
    justify-content: flex-end;
    text-align: left;
    margin: 10px 0;
    `;

    userContents.style = `
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    `;

    userMessageItem.style = `
    padding: 10px;
    margin: 10px 0;
    background: #CCCEDA;
    border-radius: 10px;
    align-self: flex-start;
    font-size: 15px;
    white-space: pre-wrap;
    word-wrap: break-word;
`;

    userTimeStamp.style = `
    color:#888888;
    font-size: 15px;
    text-align: right;
    padding: 0 5px;
    `;

    messagesContainer.appendChild(userContentsBox);
    userContentsBox.appendChild(userContents);
    userContents.appendChild(userTimeStamp);
    userContents.appendChild(userMessageItem);
  };

  // API 응답 시뮬레이션
  const showChatBotMessage = (message, timeStamp) => {
    setTimeout(() => {
      const botResponseBox = document.createElement("div");
      const botResponseContents = document.createElement("div");
      const botResponseItem = document.createElement("div");
      const botLogoTimeBox = document.createElement("div");
      const botTimeStamp = document.createElement("div");
      const botLogo = document.createElement("div");

      botResponseItem.textContent = `${message}`;
      botTimeStamp.textContent = `${timeStamp}`;

      botResponseBox.style = `
      display: flex;
      justify-content: flex-start;
      text-align: left;
      `;

      botResponseItem.style = `
      padding: 10px;
      margin: 10px 0;
      border-radius: 10px;
      background: #FFFFFF;
      border: 1px solid #E7E7E7;
      font-size: 15px;
      word-wrap: break-word;
      white-space: pre-wrap;
    `;

      botLogo.style = `
      width: 40px;
      height: 40px;
      background: url('${chrome.runtime.getURL(
        "assets/answerLogo.svg"
      )}') no-repeat center center;
      background-size: contain;
      margin-right: 10px; 
    `;

      botTimeStamp.style = `
      color:#888888;
      font-size: 15px;
      padding-top: 20px
    `;

      botLogoTimeBox.style = `
      display: flex

    `;
      messagesContainer.appendChild(botResponseBox);
      botResponseBox.appendChild(botResponseContents);
      botResponseContents.appendChild(botLogoTimeBox);
      botLogoTimeBox.appendChild(botLogo);
      botLogoTimeBox.appendChild(botTimeStamp);
      botResponseContents.appendChild(botResponseItem);

      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 1000);
  };

  // DOM에 추가
  document.body.appendChild(button);
  document.body.appendChild(chatBox);
};

// DOMContentLoaded 이벤트를 사용
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", createChatBot);
} else {
  createChatBot();
}
