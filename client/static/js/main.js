const form = document.querySelector("form");
const titleInput = document.querySelector("#title");
const titleLabel = document.querySelector(".title-label");
const nameInput = document.querySelector("#name");
const nameLabel = document.querySelector(".name-label");

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

  window.location.href = "./static/html/post.html";
  //   await fetch(url, options).then((res) =>
  //     res.json().then((data) => {
  //       console.log(data);
  //     })
  //   );
}

titleInput.addEventListener("input", () => {
  if (titleInput.value.length > 0) {
    titleLabel.classList.remove("hidden");
  } else {
    titleLabel.classList.add("hidden");
  }
});

nameInput.addEventListener("input", () => {
  if (nameInput.value.length > 0) {
    nameLabel.classList.remove("hidden");
  } else {
    nameLabel.classList.add("hidden");
  }
});
