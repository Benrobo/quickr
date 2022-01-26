function generateEmail(len) {
  let A = "ABCDEFGHIJKLMNOPQRabcdefghijklmnopqrstuvwxyzSTUVWXYZ0123456789";
  let store = "";
  for (let i = 0; i < len + 1; i++) {
    let rand = Math.floor(Math.random() * A.split("").length);
    store += A[rand];
  }
  return store + "@mail.com";
}

setInterval(() => {
  let genemail = generateEmail(4);

  return console.log(genemail);
  async function request() {
    try {
      let req = await fetch(
        `https://zeddpay-newletter-api.herokuapp.com/api/users/add`,
        {
          method: "post",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            email: genemail,
          }),
        }
      );

      let data = await req.json();

      console.log(data);
    } catch (err) {
      console.log(err.message);
    }
  }
  request();
}, 5000);
