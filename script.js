async function fetchJackets() {
  showLoadingIndicator();
  const response = await fetch("https://api.noroff.dev/api/v1/rainy-days");
  const data = await response.json();
  return data;
}

async function displayJackets() {
  const data = await fetchJackets();
  const jacketList = document.getElementById("jacket-list");
  jacketList.innerHTML = "";

  data.forEach((jacket, index) => {
    const listItem = document.createElement("li");

    const img = document.createElement("img");
    img.src = jacket.image;
    img.alt = jacket.title;

    const textElement = document.createElement("p");
    textElement.textContent = jacket.title;

    if (index === 0) {

      const firstJacketLink = document.createElement("a");
      firstJacketLink.href = `jacket.html?id=${jacket.id}`;
      firstJacketLink.appendChild(img);
      firstJacketLink.appendChild(textElement);
      listItem.appendChild(firstJacketLink);
    } else {
      
      listItem.addEventListener("click", () => {
        window.location.href = `mens.html?id=${jacket.id}`;
      });

      listItem.appendChild(img);
      listItem.appendChild(textElement);
    }

    jacketList.appendChild(listItem);
  });
}

function showLoadingIndicator() {
  const itemList = document.getElementById("jacket-list");
  itemList.innerHTML = "<li>Loading...</li>";
}

displayJackets();
