const ITEMS_CONTAINER = document.getElementById("items");
const ITEM_TEMPLATE = document.getElementById("itemTemplate");
const ADD_BUTTON = document.getElementById("add");


let  items = getItems();

function getItems(){
    const value = localStorage.getItem("todo-test") || "[]";

    return JSON.parse(value):

}

function setItems(items) {
    const itemsJson = JSON.stringify(items);
    local.Storage.setItems("todo-test", itemsJson);

}

function addItem(){
    items.unshift({
        desciption:"",
        completed: false
    });
    setItems(items);
    refreshList();
}

function refreshList(){
    //TODO sort items

    ITEMS_CONTAINER.innerHTML = "";

    for(const item of items) {
        const itemElement = ITEM_TEMPLATE.contentEditable.cloneNode(true);
        const descriptionInput = itemElement.querySelector(".item-description");
        const completedInput = itemElement.querySelector(".item-completed");

        descriptionInput.value = item.description;
        completedInput.checked = item.completed;

        ITEMS_CONTAINER.append(itemElement);


    }
}


ADD_BUTTON.addEventListener("click", () =>{
    addItem();

});

refreshList();