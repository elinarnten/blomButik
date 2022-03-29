export interface ShopItem {
  id: number;
  img: string;
  title: string;
  price: number;
  tag: string;
  liked: Boolean;
}

export const generateId = () => {
  let numb = 1.56;
  let getRandomID = Math.random() * numb;

  let TakenIds: number[] = [];
  while (TakenIds.includes(getRandomID)) {
    TakenIds.push(getRandomID);
  }
  return getRandomID;
};

export const shopItems: ShopItem[] = [
  {
    id: generateId(),
    img: "https://www.collinsdictionary.com/images/full/rose_277351964.jpg",
    title: "Röd ros",
    price: 45,
    tag: "rose",
    liked: false,
  },
  {
    id: generateId(),
    img: require("../images/pinkRose.avif"),
    title: "Rosa ros",
    price: 50,
    tag: "rose",
    liked: false,
  },
  {
    id: generateId(),
    img: require("../images/pink-tulips.avif"),
    title: "Rosa tulpaner",
    price: 120,
    tag: "bouqette",
    liked: false,
  },
  {
    id: generateId(),
    img: require("../images/blueOrchid.avif"),
    title: "Blå orkidé",
    price: 100,
    tag: "orchid",
    liked: false,
  },
  {
    id: generateId(),
    img: require("../images/sunflower.avif"),
    title: "Solros",
    price: 50,
    tag: "sunflower",
    liked: false,
  },
  {
    id: generateId(),
    img: require("../images/colorful-tulips.avif"),
    title: "Färglada tulpaner",
    price: 90,
    tag: "bouqette",
    liked: false,
  },
  {
    id: generateId(),
    img: require("../images/orangetulip.avif"),
    title: "Orange tulpan",
    price: 90,
    tag: "tulip",
    liked: false,
  },
  {
    id: generateId(),
    img: require("../images/redRoses.jpg"),
    title: "Röda rosor",
    price: 345,
    tag: "bouqette",
    liked: false,
  },
  {
    id: generateId(),
    img: require("../images/babypinkrose.avif"),
    title: "Rosa rosbukett",
    price: 250,
    tag: "bouqette",
    liked: false,
  },
  {
    id: generateId(),
    img: require("../images/bigSunflower.jpg"),
    title: "Stor solros",
    price: 120,
    tag: "sunflower",
    liked: false,
  },
  {
    id: generateId(),
    img: require("../images/blue-bukett1.jpg"),
    title: "Blå bukett",
    price: 100,
    tag: "bouqette",
    liked: false,
  },
  {
    id: generateId(),
    img: require("../images/colorful-bukett.jpg"),
    title: "Färgglad bukett",
    price: 130,
    tag: "bouqette",
    liked: false,
  },
  {
    id: generateId(),
    img: require("../images/colorful-tulips.avif"),
    title: "Färgglada tulpaner",
    price: 90,
    tag: "tulip",
    liked: false,
  },
  {
    id: generateId(),
    img: require("../images/orange-yellow-lillies.jpg"),
    title: "Lilja i orange och gul",
    price: 90,
    tag: "lilly",
    liked: false,
  },
  {
    id: generateId(),
    img: require("../images/pink-orchid.jpg"),
    title: "Rosa orkidé",
    price: 70,
    tag: "orchid",
    liked: false,
  },
  {
    id: generateId(),
    img: require("../images/sunflower-bukett.jpg"),
    title: "Solros i liten bukett",
    price: 100,
    tag: "bouqette",
    liked: false,
  },
  {
    id: generateId(),
    img: require("../images/White-Lilly.jpg"),
    title: "Vit lilja",
    price: 100,
    tag: "lilly",
    liked: false,
  },
  {
    id: generateId(),
    img: require("../images/white-roses.jpg"),
    title: "Vit stor rosbukett",
    price: 450,
    tag: "bouqette",
    liked: false,
  },
];
