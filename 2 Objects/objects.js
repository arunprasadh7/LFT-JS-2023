// Objects in JS

let item = {
  name: "phone",
  price: 25000,
  quantity: 1,
  colors: ["red", "green", "blue"],
  dimensions: {
    length: 7,
    breadth: 3,
  },
  buy: function () {
    console.log("Item added to cart");
  },
  addToList() {
    console.log("Item added to List");
  },
};

console.log(item);
console.log(item.colors);
console.log(item.colors[0]);
item.buy();
item.addToList();

// another way to create obj

let item2 = new Object();
item2.name = "charger";
item2.price = 1000;
item2.quantity = 1;

// add property
item.returnable = true;
console.log(item);

// square bracket
console.log(item["name"]);
console.log(item["price"]);

let key = "price";
console.log(item2[key]);

// exercise

let userDetails = {
  fname: "Arun",
  lname: "Prasadh",
  age: 28,
  title: "FullStack developer",
  techStack: ["Python", "JS", "React", "Angular", "Node", "MySQL"],
  sendEmail() {
    console.log("Email sent");
  },
};

console.log(userDetails.fname);
console.log(userDetails.techStack[2]);
userDetails.sendEmail();
