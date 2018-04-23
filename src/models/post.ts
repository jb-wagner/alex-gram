import User from "./user";
import Location from "./location";

export class Post {
  image: string;
  caption: string;
  user: User;
  likes: Number;
  location: Location | null;

  constructor(
    image: string,
    caption: string,
    user: User,
    likes: Number,
    location: Location | null = null
  ) {
    this.image = image;
    this.caption = caption;
    this.user = user;
    this.likes = likes;
    this.location = location;
  }
}

var imageLocations = [
  "http://placebear.com/{width}/{height}",
  "http://placekitten.com/{width}/{height}",
  "http://fillmurray.com/{width}/{height}",
  "http://www.placecage.com/{width}/{height}",
  "http://lorempizza.com/{width}/{height}"
];

var captions = [
  "Jig Is Up",
  "Cut The Mustard",
  "Curiosity Killed The Cat",
  "Lovey Dovey",
  "All Greek To Me",
  "Burst Your Bubble",
  "Under the Weather",
  "Close But No Cigar",
  "On Cloud Nine",
  "Son of a Gun",
  "Money Doesn't Grow On Trees",
  "Jack of All Trades Master of None",
  "Under Your Nose",
  "Ring Any Bells?",
  "Mountain Out of a Molehill",
  "No Ifs, Ands, or Buts",
  "No-Brainer",
  "Scot-free",
  "Roll With the Punches",
  "Jaws of Death",
  "Swinging For the Fences",
  "Up In Arms",
  "Foaming At The Mouth",
  "Heads Up",
  "Man of Few Words",
  "Jaws of Life",
  "A Piece of Cake",
  "Head Over Heels",
  "Back To the Drawing Board",
  "Short End of the Stick",
  "Know the Ropes",
  "My Cup of Tea",
  "Like Father Like Son",
  "There's No I in Team",
  "Between a Rock and a Hard Place",
  "Birds of a Feather Flock Together",
  "Fish Out Of Water",
  "Fight Fire With Fire",
  "Wouldn't Harm a Fly",
  "Dropping Like Flies",
  "Right Off the Bat",
  "Playing For Keeps",
  "Rain on Your Parade",
  "Goody Two-Shoes",
  "Wild Goose Chase",
  "Down To The Wire",
  "Go For Broke",
  "On the Same Page",
  "Drawing a Blank",
  "Quality Time",
  "Put a Sock In It",
  "Keep Your Shirt On",
  "A Dime a Dozen",
  "Beating a Dead Horse",
  "Par For the Course",
  "Cut To The Chase",
  "Easy As Pie",
  "Quick On the Draw",
  "Keep On Truckin'",
  "Cup Of Joe",
  "Yada Yada",
  "Love Birds",
  "It's Not All It's Cracked Up To Be",
  "You Can't Teach an Old Dog New Tricks",
  "Greased Lightning",
  "Tough It Out"
];

var users = [
  new User(
    "World's Best Boss",
    "Michael Scott",
    "http://www.businessnewsdaily.com/images/i/000/008/678/original/michael-scott-the-office.PNG?1431534974"
  ),
  new User(
    "dschrute",
    "Dwight Schrute",
    "https://tse4.mm.bing.net/th?id=OIP.AG4E30Kqq-yephzM7PBCQwHaHa&w=212&h=194&c=7&o=5&dpr=1.25&pid=1.7"
  ),
  new User(
    "jimmyhalpert",
    "Jim Halpert",
    "https://tse1.mm.bing.net/th?id=OIP.Qyjj9XwNbT1dwGfKOelEvgHaHa&pid=Api"
  ),
  new User(
    "pambam",
    "Pam Beesly",
    "http://images.buddytv.com/btv_2_500261069_1_434_593_0_/pam-beesly-photos.jpg"
  ),
  new User(
    "wuphf_creator",
    "Ryan Howard",
    "http://img3.wikia.nocookie.net/__cb20140726043954/theoffice/images/e/e0/Ryan2.jpg"
  ),
  new User(
    "the_narddog",
    "Andy Bernard",
    "http://i2.cdnds.net/11/38/618_ustv_the_office_andy_bernard.jpg"
  ),
  new User(
    "stan_the_man",
    "Stanley Hudson",
    "https://tse3.mm.bing.net/th?id=OIP.j9qTl-PnLZ9IFzFDKPAtMQHaJ4&pid=Api"
  ),
  new User(
    "justKev",
    "Kevin Malone",
    "https://images.rapgenius.com/54e03e0b8cc2e06aeff73429221709c3.749x1000x1.png"
  ),

  new User(
    "cat_lover",
    "Angela Martin",
    "http://www.officetally.com/wp-content/uploads/2009/04/angela-kinsey-angela-martin-the-office-2.jpg"
  ),
  new User(
    "oscar",
    "Oscar Martinez",
    "https://tse2.mm.bing.net/th?id=OIP.PEc4nYJj6ovr3sdRkDlQOAHaJ4&pid=Api"
  ),
  new User(
    "phyllis",
    "Phyllis Lapin Vance",
    "http://www.officetally.com/wp-content/uploads/2009/03/phyllis-smith-phyllis-lapin-vance-the-office.jpg"
  )
];

declare global {
  interface Array<T> {
    randomElement(): T;
  }
}

Array.prototype.randomElement = function() {
  return this[Math.floor(Math.random() * this.length)];
};

export function postGenerator(): Post[] {
  var posts: Post[] = [];

  for (var i: number = 0; i < 15; i++) {
    let imageUrl = imageLocations
      .randomElement()
      .replace("{width}", "" + Math.floor(300 + Math.random() * 200))
      .replace("{height}", "" + Math.floor(200 + Math.random() * 200));

    posts.push(
      new Post(
        imageUrl,
        captions.randomElement(),
        users.randomElement(),
        Math.floor(Math.random() * 150)
      )
    );
  }

  return posts;
}
