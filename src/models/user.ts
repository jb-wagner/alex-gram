export default class User {
  username: string;
  name: string;
  image: string;

  constructor(username: string, name: string, image: string) {
    this.username = username;
    this.name = name;
    this.image = image;
  }
}
