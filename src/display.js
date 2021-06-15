import { format, addDays } from "date-fns";

let defaultList = [
  {
    title: "Groceries",
    description: "Buy item 1, item 2, item 3",
    dueDate: format(addDays(new Date(), 1), "yyyy-MM-dd"),
    priority: "high",
    isCompleted: false,
    project: "Shopping",
  },
  {
    title: "Workout",
    description: "3 sets of bicep, 3 sets of tricep",
    dueDate: format(new Date(), "yyyy-MM-dd"),
    priority: "medium",
    isCompleted: true,
    project: "None",
  },
];

const displayTodo = (arr) => {
  arr.forEach((item) => {
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
      itemDetailElements.itemPriorityLabel,
      itemDetailElements.itemPriority,
      itemDetailElements.itemProjectLabel,
      itemDetailElements.itemProject
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
    itemSumElements.itemContainer.append(document.createElement("hr"));

    itemSumElements.itemDetailBtn.addEventListener("click", () => {
      itemDetailElements.itemDetailContainer.classList.toggle("hidden");
    });

    itemDetailElements.itemDate.addEventListener("change", () => {
      console.log("date changed");
      itemSumElements.itemDueDate.innerText = `Due Date: ${itemDetailElements.itemDate.value}`;
      item.dueDate = itemDetailElements.itemDate.value;
      console.log(item);
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

  itemTitle.addEventListener("input", () => {
    item.title = itemTitle.innerText;
    console.log(item.title);
    console.log(item);
  });

  itemTitle.addEventListener("keydown", function (event) {
    if (this.textContent.length === 15 && event.keyCode != 8) {
      event.preventDefault();
    }
  });

  itemCheckbox.addEventListener("change", () => {
    if (itemCheckbox.checked === false) {
      item.isCompleted = false;
    } else {
      item.isCompleted = true;
    }
  });

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
  const itemPriorityLabel = document.createElement("label");
  const itemProject = document.createElement("span");
  const itemProjectLabel = document.createElement("label");

  const priorityArray = ["low", "medium", "high"];

  priorityArray.forEach((selection) => {
    const option = document.createElement("option");
    option.setAttribute("value", selection);
    option.innerText = selection;
    itemPriority.appendChild(option);
  });

  itemDate.setAttribute("type", "date");
  //   itemDate.setAttribute("value", item.dueDate);
  //   itemDate.value = item.dueDate;
  itemDetailDesc.setAttribute("contenteditable", true);
  itemProject.setAttribute("contenteditable", true);

  itemDetailContainer.classList.add("todo-items-info", "hidden");
  itemDetailLeft.classList.add("info-left-side");
  itemDetailRight.classList.add("info-right-side");
  itemPriority.classList.add("priority-select");
  deleteBtn.classList.add("delete-btn");

  if (item.priority === "low") {
    itemPriority.value = "low";
  } else if (item.priority === "medium") {
    itemPriority.value = "medium";
  } else {
    itemPriority.value = "high";
  }

  itemPriorityLabel.textContent = "Priority:";

  itemDetailDesc.innerText = item.description;
  deleteBtn.innerText = "Delete Item";
  itemProject.textContent = item.project;
  itemProjectLabel.textContent = "Project:";

  itemDetailDesc.addEventListener("input", () => {
    item.description = itemDetailDesc.innerText;
  });

  itemProject.addEventListener("input", () => {
    item.project = itemProject.innerText;
  });

  itemPriority.addEventListener("change", () => {
    item.priority = itemPriority.value;
  });

  deleteBtn.addEventListener("click", () => {
    console.log(`delete ${item.title}`);
    console.log(defaultList.indexOf(item));
    console.log(defaultList);
    defaultList.splice(defaultList.indexOf(item), 1);
    removeAllChildNodes(document.querySelector("#todos-container"));
    displayTodo(defaultList);

    document.querySelector("#right-container-title").textContent = "All Items";
  });

  return {
    itemDetailContainer,
    itemDetailLeft,
    itemDetailRight,
    itemDate,
    deleteBtn,
    itemDetailDesc,
    itemPriority,
    itemPriorityLabel,
    itemProject,
    itemProjectLabel,
  };
};

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

export { displayTodo, removeAllChildNodes, defaultList };
