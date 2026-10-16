const itemForm = document.querySelector("#itemForm");
function handleItemSubmit(event) {
    event.preventDefault();
    console.log("Form submitted");
}

itemForm.addEventListener("submit", handleItemSubmit);

