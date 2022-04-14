const dayjs = require("dayjs");

const pullRequest = {
  title: "Ejercicios",
  poster: "Alfonso+",
  dateCreated: dayjs().format("YYYY-MM-DD"),
  reactionNumber: 30,
  shaderWith: "Friends",
  postContent:
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
  getContentAndReactions: function () {
    return `Contenido del post: "${this.postContent}" y tiene ${this.reactionNumber} de reacciones`;
  },
  getTitleAndAuthor: function () {
    return `Este post es de: ${this.poster} y fue creado el ${this.dateCreated}`;
  },
};

console.log(pullRequest.getTitleAndAuthor());
console.log(pullRequest.getContentAndReactions());
