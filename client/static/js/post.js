const title = document.querySelector("#title");
const author = document.querySelector("#author");
const story = document.querySelector("#story");
const id = document.querySelector("#postId");
const editBtn = document.querySelector("#submit");

const postId = window.location.href.split("=")[1];
const url = `http://localhost:3000/posts/${postId}`;

window.addEventListener("load", () => {
  fetch(url).then((res) =>
    res.json().then((data) => {
      console.log(data);
      title.textContent = data.title;
      author.textContent = `${data.author} - ${data.date}`;
      story.textContent = data.story;
      id.textContent = `ID - ${data.id}`;
    })
  );
});

editBtn.addEventListener("click", () => {
  fetch(url).then((res) =>
    res.json().then((data) => {
      console.log(data);
      window.location.href = `./edit.html?id=${data.id}`;
    })
  );
});
