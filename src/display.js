const displayTodo = (array) => {
  array.forEach((item) => {
    const todoContainer = document.querySelector("#todos-container");

    const itemDetailElements = createDetailElements(item);
    const itemSumElements = createSummaryElements(item);

    itemSumElements.itemSummaryLeft.append(
      itemSumElements.itemCheckbox,
      itemSumElements.itemTitle
    );
    itemSumElements.itemSummaryRight.append(
      itemSumElements.itemDueDate,
      itemSumElements.itemDetailBtn
    );
    itemSumElements.itemSummaryContainer.append(
      itemSumElements.itemSummaryLeft,
      itemSumElements.itemSummaryRight
    );

    itemSumElements.itemContainer.appendChild(
      itemSumElements.itemSummaryContainer
    );

    todoContainer.appendChild(itemSumElements.itemContainer);

    itemDetailElements.itemDetailLeft.append(
      itemDetailElements.itemDetailDesc,
      itemDetailElements.itemPriority
    );

    itemDetailElements.itemDetailRight.append(
      itemDetailElements.itemDate,
      itemDetailElements.deleteBtn
    );
    itemDetailElements.itemDetailContainer.append(
      itemDetailElements.itemDetailLeft,
      itemDetailElements.itemDetailRight
    );
    itemSumElements.itemContainer.appendChild(
      itemDetailElements.itemDetailContainer
    );

    itemSumElements.itemDetailBtn.addEventListener("click", () => {
      itemDetailElements.itemDetailContainer.classList.toggle("hidden");
    });

    itemDetailElements.itemDate.addEventListener("change", () => {
      console.log("date changed");
      itemSumElements.itemDueDate.innerText = `Due Date: ${itemDetailElements.itemDate.value}`;
    });
  });
};

const createSummaryElements = (item) => {
  const itemContainer = document.createElement("div");

  const itemSummaryContainer = document.createElement("div");
  const itemSummaryLeft = document.createElement("div");
  const itemSummaryRight = document.createElement("div");

  const itemTitle = document.createElement("h3");
  const itemCheckbox = document.createElement("input");
  const itemDueDate = document.createElement("span");
  const itemDetailBtn = document.createElement("button");

  itemTitle.setAttribute("contenteditable", true);

  itemDetailBtn.classList.add("detail-btn");

  itemCheckbox.setAttribute("type", "checkbox");

  if (item.isCompleted === true) {
    itemCheckbox.checked = true;
  }
  if (item.isCompleted === false) {
    itemCheckbox.checked = false;
  }

  itemContainer.classList.add("todo-items");
  itemSummaryContainer.classList.add("todo-items-summary");
  itemSummaryLeft.classList.add("summary-left-side");
  itemSummaryRight.classList.add("summary-right-side");

  itemTitle.innerText = `${item.title}`;

  itemDueDate.innerText = `Due Date: ${item.dueDate}`;
  itemDetailBtn.innerText = "Details";

  return {
    itemContainer,
    itemSummaryContainer,
    itemSummaryLeft,
    itemSummaryRight,
    itemTitle,
    itemCheckbox,
    itemDueDate,
    itemDetailBtn,
  };
};

const createDetailElements = (item) => {
  const itemDetailContainer = document.createElement("div");
  const itemDetailLeft = document.createElement("div");
  const itemDetailRight = document.createElement("div");
  const itemDate = document.createElement("input");
  const deleteBtn = document.createElement("button");
  const itemDetailDesc = document.createElement("p");
  const itemPriority = document.createElement("select");

  const priorityArray = ["low", "medium", "high"];

  priorityArray.forEach((selection) => {
    const option = document.createElement("option");
    option.setAttribute("value", selection);
    option.innerText = selection;
    itemPriority.appendChild(option);
  });

  itemDate.setAttribute("type", "date");
  itemDate.setAttribute("value", item.dueDate);
  itemDetailDesc.setAttribute("contenteditable", true);

  itemDetailContainer.classList.add("todo-items-info", "hidden");
  itemDetailLeft.classList.add("info-left-side");
  itemDetailRight.classList.add("info-right-side");
  itemPriority.classList.add("priority-select");

  if (item.priority === "low") {
    itemPriority.value = "low";
  } else if (item.priority === "medium") {
    itemPriority.value = "medium";
  } else {
    itemPriority.value = "high";
  }

  itemDetailDesc.innerText = item.description;
  deleteBtn.innerText = "Delete Item";

  return {
    itemDetailContainer,
    itemDetailLeft,
    itemDetailRight,
    itemDate,
    deleteBtn,
    itemDetailDesc,
    itemPriority,
  };
};

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

export { displayTodo };
