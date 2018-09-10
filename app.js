const employeeList = [
  {
    name: "Jan",
    officeNum: 1,
    phoneNum: "222-222-2222"
  },
  {
    name: "Juan",
    officeNum: 304,
    phoneNum: "489-789-8789"
  },
  {
    name: "Margie",
    officeNum: 789,
    phoneNum: "789-789-7897"
  },
  {
    name: "Sara",
    officeNum: 32,
    phoneNum: "222-789-4654"
  },
  {
    name: "Tyrell",
    officeNum: 3,
    phoneNum: "566-621-0452"
  },
  {
    name: "Tasha",
    officeNum: 213,
    phoneNum: "789-766-5675"
  },
  {
    name: "Ty",
    officeNum: 211,
    phoneNum: "789-766-7865"
  },
  {
    name: "Sarah",
    officeNum: 345,
    phoneNum: "222-789-5231"
  }
];

const $ = function(sel) {
  const nodeList = document.querySelectorAll(sel);
  const on = function(action, cb) {
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].addEventListener(action, cb);
    }
  };
  const val = function(content) {
    if (content === undefined) {
      return nodeList[0].value;
    } else {
      nodeList[0].value = content;
    }
  };
  const publicAPI = {
    on: on,
    val: val
  };

  return publicAPI;
};

//function to show each page specific to each command
function showVerify() {
  document.getElementById("ver").style.visibility = "visible";
}
function showLookup() {
  document.getElementById("look").style.visibility = "visible";
}
function showContains() {
  document.getElementById("cont").style.visibility = "visible";
}
function showUpdate() {
  document.getElementById("up").style.visibility = "visible";
}
function showAdd() {
  document.getElementById("ad").style.visibility = "visible";
}
function showDelete() {
  document.getElementById("del").style.visibility = "visible";
}

//define each function
const print = function() {
  for (let i = 0; i < employeeList.length; i++) {
    render(employeeList[i].name);
    render(employeeList[i].officeNum);
    render(employeeList[i].phoneNum);
  }
};
const verify = function() {
  const inputName = $("#search-input").val();
  let count = 0;
  for (let i = 0; i < employeeList.length; i++) {
    if (employeeList[i].name === inputName) {
      count++;
    }
  }
  if (count == 1) {
    render("Employee Found");
  } else {
    render("Employee Not Found");
  }
};
const lookup = function() {
  const inputName = $("#search-input2").val();
  let index = -1;
  for (let i = 0; i < employeeList.length; i++) {
    if (employeeList[i].name === inputName) {
      index = i;
    }
  }
  if (index === -1) {
    render("Employee Not Found");
  } else {
    render(employeeList[index].name);
    render(employeeList[index].officeNum);
    render(employeeList[index].phoneNum);
  }
};
const contains = function() {
  const inputStr = $("#search-input3").val();
  for (let i = 0; i < employeeList.length; i++) {
    if (employeeList[i].name.includes(inputStr)) {
      render(employeeList[i].name);
      render(employeeList[i].officeNum);
      render(employeeList[i].phoneNum);
    } else {
      render("Employees Not Found");
    }
  }
};
const update = function() {
  const inputName = $("#search-input4").val();
  const inputOffice = $("#search-input5").val();
  const inputPhone = $("#search-input6").val();
  for (let i = 0; i < employeeList.length; i++) {
    if (employeeList[i].name === inputName) {
      index = i;
    }
  }
  employeeList[index].name = inputName;
  employeeList[index].officeNum = inputOffice;
  employeeList[index].phoneNum = inputPhone;
  render(employeeList[index].name);
  render(employeeList[index].officeNum);
  render(employeeList[index].phoneNum);
};

const addName = function() {
  const inputName = $("#search-input7").val();
  const inputOffice = $("#search-input8").val();
  const inputPhone = $("#search-input9").val();
  leng = employeeList.length;
  newObj = [];
  employeeList.push(newObj);
  newObj.name = inputName;
  newObj.officeNum = inputOffice;
  newObj.phoneNum = inputPhone;
  render(employeeList[leng].name);
  render(employeeList[leng].officeNum);
  render(employeeList[leng].phoneNum);
};

const deleteName = function() {
  const inputName = $("#search-input10").val();
  let index = -1;
  for (let i = 0; i < employeeList.length; i++) {
    if (employeeList[i].name === inputName) {
      index = i;
    }
  }
  if (index === -1) {
    render("Employee Not Found");
  } else {
    employeeList[index] = [];
    for (let i = 0; i < employeeList.length; i++) {
      render(employeeList[i].name);
      render(employeeList[i].officeNum);
      render(employeeList[i].phoneNum);
    }
  }
};

//call buttons to each function
$("#print").on("click", print);
$("#verButton").on("click", verify);
$("#lookButton").on("click", lookup);
$("#contButton").on("click", contains);
$("#upButton").on("click", update);
$("#addButton").on("click", addName);
$("#delButton").on("click", deleteName);
