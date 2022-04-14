const dayjs = require("dayjs");

const user = {
  user: "Alfonso",
  username: "Alfonso Corona",
  age: 24,
  dateCreated: dayjs().format("YYYY-MM-DD"),
  getInfo: function () {
    return `Esta cuenta fue creada por ${this.user} con el usuario de: ${this.username}`;
  },
  getDateCreated: function () {
    return `Esta cuenta fue creada en: ${this.dateCreated}`;
  },
};

console.log(user.getInfo());
console.log(user.getDateCreated());
