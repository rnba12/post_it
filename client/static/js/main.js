const form = document.querySelector("form");

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
