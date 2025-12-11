import { ShoppingItem } from "./ShoppingItem.js";

const input = document.getElementById("item-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("shopping-list");

function renderItem(item) {
    const li = document.createElement("li");
    li.textContent = item.text;

    if (item.done) li.classList.add("done");

    li.addEventListener("click", () => {
        item.toggle();
        li.classList.toggle("done");
    });

    list.appendChild(li);
}

addBtn.addEventListener("click", () => {
    if (!input.value.trim()) return;
    const item = new ShoppingItem(input.value.trim());
    renderItem(item);
    input.value = "";
});

input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addBtn.click(); // те саме, що натиснути Add item
    }
});
