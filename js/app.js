const itemForm = document.querySelector("#itemForm");
const items = [];
let nextItemId = 1;

function handleItemSubmit(event) {
    event.preventDefault();
    const itemName = document.querySelector("#itemName").value;
    const itemWeight = Number(document.querySelector("#itemWeight").value);
    const itemCategoryId = Number(document.querySelector("#itemCategory").value);
    const item = {
        id: nextItemId,
        name: itemName,
        weight_g: itemWeight,
        category_id: itemCategoryId
    };

    nextItemId = nextItemId + 1;
    items.push(item);
    console.log(items);
}

itemForm.addEventListener("submit", handleItemSubmit);

