const user = {
  user: "Alfonso",
  username: "@Alfonso241564",
  bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  age: 24,
  getInfo: function () {
    return `Esta cuenta fue creada por ${this.user} con el usuario de: ${this.username}`;
  },
  getBio: function () {
    return this.bio;
  },
};

console.log(user.getInfo());
console.log(user.getBio());
