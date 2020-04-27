module.exports = connectPostDOM = (postData) => {
  //post_hidden의 게시글 양식을 cloneNode를 통해 복사한다.
  const postEl = document
    .querySelector("#post .post_hidden .post")
    .cloneNode(true);

  //유저 이름, 프로필 사진
  const user_profile_picture = document.createElement("img");
  user_profile_picture.src = postData.user.profile;
  user_profile_picture.alt = "user_profile";
  postEl
    .querySelector(".post_title .user_profile")
    .appendChild(user_profile_picture);
  const user_profile_name = document.createElement("span");
  user_profile_name.classList.add("user_name");
  user_profile_name.innerHTML = postData.user.name;
  postEl
    .querySelector(".post_title .user_profile")
    .appendChild(user_profile_name);
  //사진
  const post_picture = document.createElement("img");
  post_picture.src = postData.picture;
  post_picture.alt = "post_picture";
  postEl.querySelector(".post_picture").appendChild(post_picture);
  //좋아요
  postEl.querySelector(
    ".post_content .likes b"
  ).innerHTML = `좋아요 ${postData.likes}개`;
  //내용
  const post_content = postEl.querySelector(".post_content .content");
  post_content.querySelector(".user_name").innerHTML = postData.user.name;
  post_content.querySelector(".text").innerHTML = postData.content;
  //댓글
  const post_comment = postEl.querySelector(".post_comments");
  postData.comments.map((comment) => {
    const comment_wrapper = document.createElement("div");
    comment_wrapper.classList.add("comment");
    const comment_user_name = document.createElement("b");
    comment_user_name.classList.add("user_name");
    comment_user_name.innerHTML = comment.name;
    const comment_content = document.createElement("span");
    comment_content.classList.add("content");
    comment_content.innerHTML = comment.content;
    comment_wrapper.appendChild(comment_user_name);
    comment_wrapper.appendChild(comment_content);
    post_comment.appendChild(comment_wrapper);
  });

  document.querySelector("#post .post_list").appendChild(postEl);
};
