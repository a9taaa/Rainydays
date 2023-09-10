async function fetchJackets() {
    showLoadingIndicator();
    const response = await fetch("https://api.noroff.dev/api/v1/rainy-days/07a7655a-7927-421b-ba6a-b6742d5a75b8");
    const data = await response.json();
    return data;
}

async function displayJackets() {
    const data = await fetchJackets();
    const jacketList = document.getElementById("jacket-list");

   
    const listItem = document.createElement("li");

    const img = document.createElement("img");
    img.src = data.image;
    img.alt = data.title;

    const textElement = document.createElement("p");
    textElement.textContent = data.title;

    listItem.appendChild(img);
    listItem.appendChild(textElement);

    jacketList.appendChild(listItem);
};


function showLoadingIndicator() {
  const itemList = document.getElementById("jacket-list");
  itemList.innerHTML = "<li>Loading...</li>";
}

displayJackets();