
export interface ShopItem {
  id: number,
  img:string, 
  title:string,
  price: number, 
  tag: string,
  liked: Boolean, 
}

export const generateId = () => {
 let numb = 1.56
 let getRandomID = Math.random() * numb
  
  let TakenIds: number[] = []
  while (TakenIds.includes((getRandomID))){
   TakenIds.push(getRandomID)
}
return getRandomID
}

export const shopItems: ShopItem[] = [
  {
    id: generateId(),
    img: "https://www.collinsdictionary.com/images/full/rose_277351964.jpg",
    title: "Red Rose",
    price: 45,
    tag: "rose",
    liked: false,
  },
  {
    id: generateId(),
    img: require("../images/pinkRose.avif"),
    title: "Pink Rose",
    price: 50,
    tag: "rose",
    liked: false,
  },
  {
    id: generateId(),
    img: require("../images/pink-tulips.avif"),
    title: "Pink Tulips",
    price: 120,
    tag: "bouqette",
    liked: false,
  },
  {
    id: generateId(),
    img: require("../images/blueOrchid.avif"),
    title: "Blue Orchid",
    price: 100,
    tag: "orchid",
    liked: false,
  },
  {
    id: generateId(),
    img: require("../images/sunflower.avif"),
    title: "Sunflowers",
    price: 50,
    tag: "sunflower",
    liked: false,
  },
  {
    id: generateId(),
    img: require("../images/colorful-tulips.avif"),
    title: "Colorful Tulpis",
    price: 90,
    tag: "bouqette",
    liked: false,
  },
  {
    id: generateId(),
    img: require("../images/orangetulip.avif"),
    title: "Orange Tulips",
    price: 90,
    tag: "tulip",
    liked: false,
  },
  {
    id: generateId(),
    img: require("../images/redRoses.jpg"),
    title: "Red Roses",
    price: 345,
    tag: "bouqette",
    liked: false,
  },
  {
    id: generateId(),
    img: require("../images/babypinkrose.avif"),
    title: "Pink Rose bouqette",
    price: 250,
    tag: "bouqette",
    liked: false,
  },
  {
    id: generateId(),
    img: require("../images/bigSunflower.jpg"),
    title: "Big Sunflower",
    price: 120,
    tag: "sunflower",
    liked: false,
  },
  {
    id: generateId(),
    img: require("../images/blue-bukett1.jpg"),
    title: "Blue Buqette",
    price: 100,
    tag: "bouqette",
    liked: false,
  },
  {
    id: generateId(),
    img: require("../images/colorful-bukett.jpg"),
    title: "Colorful Bouqette",
    price: 130,
    tag: "bouqette",
    liked: false,
  },
  {
    id: generateId(),
    img: require("../images/colorful-tulips.avif"),
    title: "Colorful Tulpis",
    price: 90,
    tag: "tulip",
    liked: false,
  },
  {
    id: generateId(),
    img: require("../images/orange-yellow-lillies.jpg"),
    title: "Yellow and Orange Lilly",
    price: 90,
    tag: "lilly",
    liked: false,
  },
  {
    id: generateId(),
    img: require("../images/pink-orchid.jpg"),
    title: "Pink Orchid",
    price: 70,
    tag: "orchid",
    liked: false,
  },
  {
    id: generateId(),
    img: require("../images/sunflower-bukett.jpg"),
    title: "Small Sunflower Bouqette",
    price: 100,
    tag: "bouqette",
    liked: false,
  },
  {
    id: generateId(),
    img: require("../images/White-Lilly.jpg"),
    title: "White Lilly",
    price: 100,
    tag: "lilly",
    liked: false,
  },
  {
    id: generateId(),
    img: require("../images/white-roses.jpg"),
    title: "White Roses Big Bouqette",
    price: 450,
    tag: "bouqette",
    liked: false,
  },
];
