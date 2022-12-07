const form = document.querySelector("form");
const titleInput = document.querySelector("#title");
const titleLabel = document.querySelector(".title-label");
const authorInput = document.querySelector("#author");
const nameLabel = document.querySelector(".name-label");
const storyInput = document.querySelector("#story")

form.addEventListener("submit", postForm);

async function postForm(e) {
  e.preventDefault();

  const url = `http://localhost:3000/posts`;

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
  };

  console.log(options.body);

  await fetch(url, options).then((res) =>
    res.json().then((data) => {
      window.location.href = `./static/html/post.html?id=${data.id}`;
    })
  );
}

titleInput.addEventListener("input", () => {
  if (titleInput.value.length > 0) {
    titleLabel.classList.remove("hidden");
  } else {
    titleLabel.classList.add("hidden");
  }
});

authorInput.addEventListener("input", () => {
  if (authorInput.value.length > 0) {
    nameLabel.classList.remove("hidden");
  } else {
    nameLabel.classList.add("hidden");
  }
});

const findPostInput = document.querySelector("#find-post");
findPostInput.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    window.location.href = `./static/html/post.html?id=${findPostInput.value}`;
  }
});

//

titleInput.addEventListener('keydown', (e) => {
  if (e.key == "ArrowDown") {
    authorInput.focus();
  } 
});

storyInput.addEventListener('keydown', (e) => {
  if (e.key == "ArrowUp") {
    authorInput.focus();
  } 
});

authorInput.addEventListener('keydown', (e) => {
  if (e.key == "ArrowUp") {
    titleInput.focus();
  } else if (e.key == "ArrowDown") {
    storyInput.focus();
  }
})
