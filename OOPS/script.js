// Classes

class User {
  static numberOfUsers = 0;

  constructor(name, age) {
    // instance variables
    this.name = name;
    this.age = age;
    User.numberOfUsers++;
  }

  login() {
    console.log(`Hi ${this.name}`);
    console.log("Login Successfull");
  }

  logout() {
    console.log("Logout Successfull");
  }

  static displayUserCount() {
    console.log(`Total number of users is ${User.numberOfUsers}`);
  }
}

let u1 = new User();
u1.name = "Arun";
u1.age = 28;
u1.login();
u1.logout();

let u2 = new User();
u2.name = "Prasadh";
u2.age = 25;
u2.login();
u2.logout();

User.displayUserCount();

// inheritance

class PaidUser extends User {
  constructor(name, age) {
    super(name, age);
    this.storage = 100;
  }

  message() {
    console.log("You are VIP Subscription");
  }

  //   method over riding
  login() {
    console.log("You are logged in VIP section");
  }

  logout() {
    console.log("Thanks for being a VIP member");
  }
}

let p1 = new PaidUser();
p1.name = "Arc";
p1.message();
p1.login();
p1.logout();
