const dayjs = require("dayjs");

const user = {
  user: "Alfonso",
  username: "Alfonso Corona",
  age: 24,
  dateCreated: dayjs().format("YYYY-MM-DD"),
  hobby: "Programación",
  reactions: 80,
  content:
    "Nulla laoreet lorem a venenatis tristique. Ut interdum eros justo, vitae vehicula ex dapibus nec. Nam dapibus tellus vitae ex ultrices pharetra. Sed eget tellus quis metus tincidunt porta. Etiam sed varius ligula. Aenean dapibus euismod scelerisque. Integer eu aliquam lorem, non maximus arcu.",
  getContent: function () {
    return `Esta biografía contiene: "${this.content}" y tiene: ${this.reactions} reacciones`;
  },
  getGeneralInfo: function () {
    return `El usuario ${this.username} creó esta biografía el ${this.dateCreated} para describir uno de sus hobbies favoritos: ${this.hobby}`;
  },
};

console.log(user.getGeneralInfo());
console.log(user.getContent());
