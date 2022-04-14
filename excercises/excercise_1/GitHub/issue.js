const dayjs = require("../node_modules/dayjs");

const issue = {
  title: "Js",
  repositoryNameAssociated: "Ejercicios",
  status: "Activo",
  numberOfComments: 25,
  labels: 12,
  author: "Alfonso",
  dateCreated: dayjs().format("YYYY-MM-DD"),
  lastUpdated: dayjs().format("YYYY-MM-DD"),
  getTitleAndAuthor: function () {
    return `El título de este issue es: ${this.title} y el autor es: ${this.author}`;
  },
  getGeneralInfo: function () {
    return `Estatus: ${this.status}, etiquetas: ${this.labels}, comentarios: ${this.numberOfComments}`;
  },
};

console.log(issue.getTitleAndAuthor());
console.log(issue.getGeneralInfo());
