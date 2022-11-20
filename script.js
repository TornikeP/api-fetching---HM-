const input = document.getElementById("input");
const btn = document.getElementById("btn");
const main = document.getElementById("main");
btn.addEventListener("click", function () {
  const url = `https://api.github.com/users/${input.value}`;
  async function getUrl() {
    const res = await fetch(url);
    const data = await res.json();
   console.log(data);
    const login = data.login;
    const id = data.id;
    const avatar_url = data.avatar_url;
    const public_repos = data.public_repos;
    const following = data.following;
    const followers = data.followers;

    const Test = document.createElement("p");

    Test.innerHTML = `
      <img src = "${avatar_url}" />
      <p> ${login} </p>
      <p> ${id} </p>
      <p> ${public_repos} </p>
      <p> ${following} </p>
      <p> ${followers} </p>
    `;
    main.appendChild(Test);
  }
  getUrl();
});
