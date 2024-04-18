function toggleFlip(element) {
    document.querySelectorAll('.member').forEach(member => {
        if (member !== element) {
            member.classList.remove('flipped');
        }
    });

    element.classList.toggle('flipped');
}

function openDetailsPopup(url, event) {
    event.stopPropagation(); // 이벤트 버블링 방지

    const width = 600;
    const height = 400;
    const left = (window.screen.width / 2) - (width / 2);
    const top = (window.screen.height / 2) - (height / 2);
    const features = `width=${width},height=${height},left=${left},top=${top},status=no,toolbar=no,menubar=no`;
    window.open(url, 'DetailPopup', features);
}
// 외부 클릭 시 모든 카드를 원래대로 돌림 (선택적 기능).
window.addEventListener('click', function(e) {
    let isMemberClicked = false;
    document.querySelectorAll('.member').forEach(member => {
        if (member.contains(e.target)) {
            isMemberClicked = true;
        }
    });
    if (!isMemberClicked) {
        document.querySelectorAll('.member').forEach(member => {
            member.classList.remove('flipped');
        });
    }
});
