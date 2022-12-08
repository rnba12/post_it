const form = document.querySelector("form");
const titleInput = document.querySelector("#title");
const titleLabel = document.querySelector(".title-label");
const authorInput = document.querySelector("#author");
const nameLabel = document.querySelector(".name-label");
const storyInput = document.querySelector("#story");
const errorMessage = document.querySelector(".error-message");
const findPostBtn = document.querySelector(".find-post-btn");

form.addEventListener("submit", postForm);

async function postForm(e) {
  e.preventDefault();

  const isValidForm = isTitleValid();
  if (!isValidForm) {
    setTimeout(removeError, 3500);
    return;
  }

  const url = `http://localhost:3000/posts`;
  const date = dayjs().format("MMMM DD, YYYY");
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...Object.fromEntries(new FormData(e.target)),
      date: date,
    }),
  };

  console.log(options.body);

  await fetch(url, options).then((res) =>
    res.json().then((data) => {
      window.location.href = `./post.html?id=${data.id}`;
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
    window.location.href = `./post.html?id=${findPostInput.value}`;
  }
});

findPostBtn.addEventListener("click", () => {
  window.location.href = `./post.html?id=${findPostInput.value}`;
});

//

titleInput.addEventListener("keydown", (e) => {
  if (e.key == "ArrowDown") {
    authorInput.focus();
  }
});

storyInput.addEventListener("keydown", (e) => {
  if (e.key == "ArrowUp") {
    authorInput.focus();
  }
});

authorInput.addEventListener("keydown", (e) => {
  if (e.key == "ArrowUp") {
    titleInput.focus();
  } else if (e.key == "ArrowDown") {
    storyInput.focus();
  }
});

function isTitleValid() {
  if (titleInput.value.length < 2) {
    titleInput.classList.add("error");
    errorMessage.classList.remove("hidden");
    errorMessage.textContent = "Title is too small";
    return false;
  } else if (storyInput.value.length == 0) {
    titleInput.classList.add("error");
    errorMessage.classList.remove("hidden");
    errorMessage.textContent = "Empty content";
    return false;
  } else {
    return true;
  }
}

function removeError() {
  titleInput.classList.remove("error");
  titleInput.classList.remove("error");
  errorMessage.classList.add("hidden");
  errorMessage.textContent = "";
}

const tx = document.getElementsByTagName("textarea");
for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute(
    "style",
    "height:" + tx[i].scrollHeight + "px;overflow-y:hidden;"
  );
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = 0;
  this.style.height = this.scrollHeight + "px";
}
