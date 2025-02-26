console.log(
  "%c" +
    " __      __  ______   __  __   ______     " +
    "\n" +
    "/\\ \\  __/\\ \\ /\\__  _\\ /\\ \\ /\\ \\ /\\__  _\\    " +
    "\n" +
    "\\ \\ \\/\\ \\ \\ \\/_\\/\\ \\/ \\ \\ \\/'/'\\/ _/\\ \\/    " +
    "\n" +
    " \\ \\ \\ \\ \\ \\ \\ \\ \\ \\  \\ \\ , <    \\ \\ \\    " +
    "\n" +
    "  \\ \\ \\_/ \\_\\ \\ \\_\\ \\__\\ \\ \\\\`\\   \\_\\ \\__ " +
    "\n" +
    "   \\ `\\___x___/ /\\_____\\\\ \\_\\ \\_\\ /\\_____\\ " +
    "\n" +
    "    '/__//__/  /_____/ \\/_/\\/_/ /_____/",
  "color: #d81b60; font-size: 16px; font-weight: bold;"
);

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  const newComment = document.createElement("li");
  newComment.innerHTML = `<div class="comment-item">
                <div class="comment-author">
                  <img src="./images/comment-author-icon.png" alt="사용자 프로필 이미지" />
                  <span>방문자</span>
                </div>
                <div class="comment-content">
                </div>
              </div>`;
  newComment.querySelector(".comment-content").textContent = data.comment;
  const commentList = document.querySelector(".comment-list");
  commentList.appendChild(newComment);
  form.reset();
  alert("댓글이 등록되었습니다.");
});
