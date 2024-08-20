var car = {
  make: "Fiat",
  model: "500",
  year: 1957,
  color: "Blue",
  pessengers: 2,
  convertible: false,
  mileage: 88000,
  started: false,

  start: function () {
    this.started = true;
  },

  stop: function () {
    this.started = false;
  },

  drive: function () {
    if (this.started) {
      alert ("Zoom! Zoom!");
    }
    else {
      alert ("You nedd to start the engine first");
    }
  }
};


car.start ();
car.drive ();
car.stop ();
car.drive ();