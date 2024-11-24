function addRedMarker(x, y) {
    const marker = document.createElement("div");
    marker.style.position = "absolute";
    marker.style.top = `${y}px`;
    marker.style.left = `${x}px`;
    marker.style.width = "100px";
    marker.style.height = "100px";
    marker.style.backgroundColor = "red";
    marker.style.zIndex = "1000";
    document.body.appendChild(marker);
}

// 임시로 마커 위치를 지정 (나중에 유저로부터 입력받을 수 있음)
addRedMarker(300, 200); // x, y 좌표
