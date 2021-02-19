export default class Validator {
  validateUsername(username) {
    const templateOne = /^[^_\-\d][a-zA-Z0-9\-_]*[^_\-\d]+$/;
    const templateTwo = /\d{3}/;
    const isValidUsername = templateOne.test(username) && !templateTwo.test(username);
    if (isValidUsername) {
      this.username = username;
      return true;
    }
    throw new Error(`Имя ${username} некорректно.`);
  }
}
