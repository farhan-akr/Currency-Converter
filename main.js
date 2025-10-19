console.log("Main.js working");

url =
  "https://api.currencyapi.com/v3/latest?apikey=cur_live_jzSIgxgvzIjIKcVzQ8LHMY8q09D2tyEn2WA1ElzU";

const btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("button is clicked");
});

const tablebody = document.querySelector("tbody");
tablebody.innerHTML = `
<tr>
<td>Data 1</td>
<td>Data 2</td>
<td>Data 3</td>
</tr>
`;
