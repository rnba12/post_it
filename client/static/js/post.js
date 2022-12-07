const title = document.querySelector("#title");
const author = document.querySelector("#author");
const story = document.querySelector("#story");

window.addEventListener("load", () => {
  const postId = window.location.href.split("=")[1];
  const url = `http://localhost:3000/posts/${postId}`;
  fetch(url).then((res) =>
    res.json().then((data) => {
      console.log(data);
      title.textContent = data.title;
      author.textContent = `${data.author} - ${data.date}`;
      story.textContent = data.story;
    })
  );
});
