async function postForm(e) {
  e.preventDefault();
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
  };

  console.log(options.body);
}
