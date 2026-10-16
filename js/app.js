const itemForm = document.querySelector("#itemForm");
function handleItemSubmit(event) {
    event.preventDefault();
    const itemName = document.querySelector("#itemName").value;
    const itemWeight = Number(document.querySelector("#itemWeight").value);
    const itemCategoryId = Number(document.querySelector("#itemCategory").value);

    const item = {
        name: itemName,
        weight_g: itemWeight,
        category_id: itemCategoryId
    };

    console.log(item);
}

itemForm.addEventListener("submit", handleItemSubmit);

