function book() {

  let number = parseInt(document.getElementById("tickets").value);

  fetch("/book", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ number: number })
  })
  .then(function(res) {
    return res.json();
  })
  .then(function(data) {

    document.getElementById("message").innerText = data.message;
    document.getElementById("remaining").innerText = data.remaining;

  });

}