var elForm = document.querySelector("#food_form");
var elImage = document.querySelector("#food_image");
var elName = document.querySelector("#food_name");
var elCost = document.querySelector("#food_cost");
var elList = document.querySelector("#food_list");

var arr = [
  {
    images: "",
    names: "",
    costs: "",
  },
];

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  var image = elImage.value.trim();
  var name = elName.value.trim();
  var cost = Number(elCost.value.trim());

  if (cost <= 0) {
    alert('"Food cost"ga 0 dan katta raqam kiriting');
  } else if (isNaN(cost)) {
    alert('"Food cost"ga raqam kiriting"');
  }

  arr.push(image);
  arr.push(name);
  arr.push(cost);

  elImage.value = null;
  elName.value = null;
  elCost.value = null;

  var newImage = document.createElement("img");
  newImage.setAttribute("class", "images");
  newImage.setAttribute(
    "src",
    "https://www.insidehook.com/wp-content/uploads/2018/09/Foods-1.jpg?resize=1536"
  );
  newImage.setAttribute("alt", "this image");
  newImage.setAttribute("width", "195");
  newImage.setAttribute("height", "140");
  newImage.textContent = image;
  elList.appendChild(newImage);

  var newName = document.createElement("h3");
  newName.setAttribute("class", "header");
  newName.textContent = name;
  elList.appendChild(newName);

  var newCost = document.createElement("p");
  newCost.setAttribute("class", "paragraph");
  newCost.textContent = cost + "$";
  elList.appendChild(newCost);

  newContent = document.createElement("div");
  newContent.setAttribute("class", "content");
  elList.appendChild(newContent);
  newContent.appendChild(newImage);
  newContent.appendChild(newName);
  newContent.appendChild(newCost);

  arr.images = elImage;
  arr.names = elName;
  arr.costs = elCost;

  console.log(arr);
});
