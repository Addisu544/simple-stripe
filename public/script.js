// const button = document.querySelector("button");
// button.addEventListener("click", () => {
//   fetch("http://localhost:3000/create-checkout-session", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       items: [
//         { id: 1, quantity: 3 },
//         { id: 2, quantity: 1 },
//       ],
//     }),
//   })
//     .then((res) => {
//       if (res.ok) return res.json();
//       return res.json().then((json) => Promise.reject(json));
//     })
//     .then(({ url }) => {
//       window.location = url;
//       console.log(url);
//     })
//     .catch((e) => {
//       console.error(e.error);
//     });
// });

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const amount = button.dataset.amount;

    fetch("http://localhost:3000/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [{ id: 1, quantity: 1 }],
        amount: parseInt(amount),
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        window.location = url;
        console.log(url);
      })
      .catch((e) => {
        console.error(e.error);
      });
  });
});
