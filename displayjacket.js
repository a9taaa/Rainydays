// script.js

async function fetchJackets() {
    showLoadingIndicator();
    const response = await fetch("https://api.noroff.dev/api/v1/rainy-days/07a7655a-7927-421b-ba6a-b6742d5a75b8");
    const data = await response.json();
    return data;
}

async function displayJackets() {
    const data = await fetchJackets();
    const jacketList = document.getElementById("jacket-list");

    hideLoadingIndicator();

    const listItem = document.createElement("li");

    const img = document.createElement("img");
    img.src = data.image;
    img.alt = data.title;

    const titleElement = document.createElement("h2");
    titleElement.textContent = data.title;

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = data.description;

    const priceElement = document.createElement("p");
    priceElement.textContent = "Price: $" + data.price.toFixed(2);

    listItem.appendChild(img);
    listItem.appendChild(titleElement);
    listItem.appendChild(descriptionElement);
    listItem.appendChild(priceElement);

    jacketList.appendChild(listItem);
}

function showLoadingIndicator() {
    const itemList = document.getElementById("jacket-list");
    itemList.innerHTML = "<li>Loading...</li>";
}

function hideLoadingIndicator() {
    const itemList = document.getElementById("jacket-list");
    itemList.innerHTML = "";
}

displayJackets();
