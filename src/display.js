import { format, addDays } from "date-fns";

let defaultList = [
  {
    title: "Ex. Groceries",
    description: "Buy item 1, item 2, item 3",
    dueDate: format(addDays(new Date(), 1), "yyyy-MM-dd"),
    priority: "high",
    isCompleted: false,
    project: "ex.shopping",
  },
  {
    title: "Ex .Workout",
    description: "3 sets of bicep, 3 sets of tricep",
    dueDate: format(new Date(), "yyyy-MM-dd"),
    priority: "medium",
    isCompleted: true,
    project: "ex.fitness",
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

      if (itemSumElements.itemDetailBtn.textContent === "Expand Details") {
        itemSumElements.itemDetailBtn.textContent = "Close Details";
      } else {
        itemSumElements.itemDetailBtn.textContent = "Expand Details";
      }
    });

    itemDetailElements.itemDate.addEventListener("change", () => {
      itemSumElements.itemDueDate.innerText = `Due Date: ${itemDetailElements.itemDate.value}`;
      item.dueDate = itemDetailElements.itemDate.value;
    });

    if (item.priority === "low") {
      itemSumElements.itemDueDate.style.backgroundColor = "lawngreen";
    }
    if (item.priority === "medium") {
      itemSumElements.itemDueDate.style.backgroundColor = "yellow";
    }
    if (item.priority === "high") {
      itemSumElements.itemDueDate.style.backgroundColor = "var(--light-red)";
    }

    itemDetailElements.itemPriority.addEventListener("change", () => {
      if (item.priority === "low") {
        itemSumElements.itemDueDate.style.backgroundColor = "lawngreen";
      }
      if (item.priority === "medium") {
        itemSumElements.itemDueDate.style.backgroundColor = "yellow";
      }
      if (item.priority === "high") {
        itemSumElements.itemDueDate.style.backgroundColor = "var(--light-red)";
      }
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
  itemDetailBtn.innerText = "Expand Details";

  itemTitle.addEventListener("input", () => {
    item.title = itemTitle.innerText;
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
  itemDetailDesc.classList.add("item-description");
  itemPriorityLabel.classList.add("priority-label");
  itemPriority.classList.add("priority-select");
  itemProjectLabel.classList.add("project-label");
  itemProject.classList.add("project-name");
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
  itemProject.textContent = item.project.toLowerCase();
  itemProjectLabel.textContent = "Project:";

  itemDetailDesc.addEventListener("input", () => {
    item.description = itemDetailDesc.innerText;
  });

  itemProject.addEventListener("input", () => {
    item.project = itemProject.innerText;
    removeAllChildNodes(document.querySelector("#custom-projects"));
    displayCustomProject(defaultList);
  });

  itemProject.addEventListener("keydown", function (event) {
    if (this.textContent.length === 15 || event.keyCode === 13) {
      event.preventDefault();
    }
  });

  itemPriority.addEventListener("change", () => {
    item.priority = itemPriority.value;
  });

  deleteBtn.addEventListener("click", () => {
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

function displayCustomProject(array) {
  const customProjectList = document.querySelector("#custom-projects");
  const customBtnNamesList = Array.from(
    document.querySelectorAll(".custom-project-btns")
  ).map(function (e) {
    return e.innerText;
  });
  array.forEach((item) => {
    if (!customBtnNamesList.includes(item.project)) {
      const projectBtn = document.createElement("button");
      projectBtn.textContent = item.project.toLowerCase();
      customBtnNamesList.push(item.project);
      customProjectList.append(projectBtn);

      projectBtn.addEventListener("click", () => {
        const itemArray = defaultList.filter(function (obj) {
          return obj.project === item.project;
        });
        removeAllChildNodes(document.querySelector("#todos-container"));
        displayTodo(itemArray);
        document.querySelector(
          "#right-container-title"
        ).textContent = `${item.project}`;
      });
    }
  });
}

let itemsFromLocalStorage = localStorage.getItem("itemsStorage");
defaultList = JSON.parse(itemsFromLocalStorage);

export { displayTodo, removeAllChildNodes, defaultList, displayCustomProject };
