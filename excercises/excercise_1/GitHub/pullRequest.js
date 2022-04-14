const dayjs = require("dayjs");

const pullRequest = {
  title: "Ejercicios",
  branchName: "Master",
  dateCreated: dayjs().format("YYYY-MM-DD"),
  status: "Activa",
  repositoryNameAssociated: "https://github.com/AlfonsoCoronaR/playbook.git",
  getStatus: function () {
    return `El estatus de este proyecto es: ${this.status} y fue creado el ${this.dateCreated}`;
  },
  getTitleAndAuthor: function () {
    return `El título de este pull request es: ${this.title} y el autor es: ${this.repositoryNameAssociated}`;
  },
};

console.log(pullRequest.getTitleAndAuthor());
console.log(pullRequest.getStatus());
