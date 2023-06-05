let currentPage = 1;
let isFetching = false;
let hasMore = false;

let root = document.getElementById("root");

async function fetchData(currentPage) {
  isFetching = true;
  let response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}`
  );

  let data = await response.json();
  isFetching = false;

  if (data.length === 0) {
    hasMore = false;
    return;
  }

  data.forEach((d) => {
    let div = document.createElement("div");
    div.innerHTML = `<h2>${d.title}</h2><p>${d.body}</p>`;
    root.append(div);
  });
  hasMore = true;
  currentPage++;
}
document.addEventListener("scroll", function () {
  if (isFetching || !hasMore) {
    return;
  }

  if (
    window.innerHeight + window.screenY >=
    document.documentElement.scrollHeight
  ) {
    console.log("At the bottom of the page");
    fetchData(currentPage);
  }
});

fetchData(currentPage);
