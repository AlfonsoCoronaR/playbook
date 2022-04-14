const dayjs = require("dayjs");

const trendingTipong = {
  identifier: "#",
  name: "Nombre del Hashtag",
  info: "Información que complementa el hashtag al ser buscado",
  dateCreated: dayjs().format("YYYY-MM-DD"),
  getData: function () {
    return `Nombre del hashtag ${this.identifier}${this.name}`;
  },
  getInfo: function () {
    return `Datos que contiene el Hashtag: ${this.info}`;
  },
};

console.log(trendingTipong.getData());
console.log(trendingTipong.getInfo());
