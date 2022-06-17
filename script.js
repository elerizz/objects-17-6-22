const ele = {
  specie: human,
  name: Eleonora,
  age: 28,
  passion: music,
  curiousAbout: function () {
    return "basically anything!";
  },
  learningCurve: function () {
    return age + " years old, which seems to be a good age to learn!";
  },
};

console.log(
  "Hi, it's",
  ele.name,
  "I started the coding bootcamp at",
  ele.learningCurve()
);
