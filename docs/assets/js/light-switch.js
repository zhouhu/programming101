let light = {
  "light_on_img": document.getElementById("img-light-on"),
  "light_off_img": document.getElementById("img-light-off"),
  "status": "on",
  "on": function () {
    this.status = "on";
    this.switch_light();
  },
  "off": function () {
    this.status = "off";
    this.switch_light();
  },
  "switch_light": function () {
    if (this.status === "on") {
      this.light_off_img.style.display = "none";
      this.light_on_img.style.display = "block";
      document.body.style.backgroundColor = "gold";
    } else {
      this.light_off_img.style.display = "block";
      this.light_on_img.style.display = "none";
      document.body.style.backgroundColor = "black";
    }
  }
}

let Switch = {
  "switch_up_image": undefined,
  "switch_down_image": undefined,
  "status": "up",
  "display_status": function () {
    if (this.status === "up") {
      this.switch_up_image.style.display = "block";
      this.switch_down_image.style.display = "none";
    } else {
      this.switch_up_image.style.display = "none";
      this.switch_down_image.style.display = "block";
    }
  },
  "change_status": function () {
    if (this.status === "up") {
      this.status = "down";
      this.display_status();
    } else {
      this.status = "up";
      this.display_status();
    }
  },
  get isUp() {
    return this.status === "up";
  },
  get isDown() {
    return this.status !== "up";
  },
}

let switch_A = Object.create(Switch);
let switch_B = Object.create(Switch);
let switch_C = Object.create(Switch);
let switch_D = Object.create(Switch);

function click_switch(name){
  document.getElementById("click-sound").play();

  switch(name){

    case "A" : switch_A.change_status();
    break;

    case "B" : switch_B.change_status();
    break;

    case "C" : switch_C.change_status();
    break;

    case "D" : switch_D.change_status();
    break;

    default: console.log("click switch with name: " + name);
  }

  light_logic();
}