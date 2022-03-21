
export interface ShopItem {
  id: number,
  img:string, 
  title:string,
  price: number, 
  tag: string,
  quantity: number,
  liked: Boolean
}

export const shopItems: ShopItem[] = [
    {
      id: 1,
      img: require("../images/redRose.avif"),
      title: "Red Rose",
      price: 45,
      tag: "rose",
      quantity: 1,
      liked: false
    },
    {
      id: 2,
      img: require("../images/pinkRose.avif"),
      title: "Pink Rose",
      price: 50,
      tag: "rose",
      quantity: 1,
      liked: false
    },
    {
      id: 3,
      img: require("../images/pink-tulips.avif"),
      title: "Pink Tulips",
      price: 120,
      tag: "bouqette",
      quantity: 1,
      liked: false
    },
    {
      id: 4,
      img: require("../images/blueOrchid.avif"),
      title: "Blue Orchid",
      price: 100,
      tag: "orchid",
      quantity: 1,
      liked: false
    },
    {
      id: 5,
      img: require("../images/sunflower.avif"),
      title: "Sunflowers",
      price: 50,
      tag: "sunflower",
      quantity: 1,
      liked: false
    },
    {
      id: 6,
      img: require("../images/colorful-tulips.avif"),
      title: "Colorful Tulpis",
      price: 90,
      tag:"bouqette",
      quantity: 1,
      liked: false
    },
    {
      id: 7,
      img: require("../images/orangetulip.avif"),
      title: "Orange Tulips",
      price: 90,
      tag:"tulip",
      quantity: 1,
      liked: false
    },
    {
      id: 8,
      img: require("../images/redRoses.jpg"),
      title: "Red Roses",
      price: 345,
      tag:"bouqette",
      quantity: 1,
      liked: false
    },
    {
      id: 9,
      img: require("../images/babypinkrose.avif"),
      title: "Pink Rose bouqette",
      price: 250,
      tag:"bouqette",
      quantity: 1,
      liked: false
    },
    {
      id: 10,
      img: require("../images/bigSunflower.jpg"),
      title: "Big Sunflower",
      price: 120,
      tag:"sunflower",
      quantity: 1,
      liked: false
    },
    {
      id: 11,
      img: require("../images/blue-bukett1.jpg"),
      title: "Blue Buqette",
      price: 100,
      tag:"bouqette",
      quantity: 1,
      liked: false
    },
    {
      id: 12,
      img: require("../images/colorful-bukett.jpg"),
      title: "Colorful Bouqette",
      price: 130,
      tag:"bouqette",
      quantity: 1,
      liked: false
    },
    {
      id: 13,
      img: require("../images/colorful-tulips.avif"),
      title: "Colorful Tulpis",
      price: 90,
      tag:"tulip",
      quantity: 1,
      liked: false
    },
    {
      id: 14,
      img: require("../images/orange-yellow-lillies.jpg"),
      title: "Yellow and Orange Lilly Bouqette",
      price: 90,
      tag:"lilly",
      quantity: 1,
      liked: false
    },
    {
      id: 15,
      img: require("../images/pink-orchid.jpg"),
      title: "Pink Orchid",
      price: 70,
      tag:"orchid",
      quantity: 1,
      liked: false
    },
    {
      id: 16,
      img: require("../images/sunflower-bukett.jpg"),
      title: "Small Sunflower Bouqette",
      price: 100,
      tag:"bouqette",
      quantity: 1,
      liked: false
    },
    {
      id: 17,
      img: require("../images/White-Lilly.jpg"),
      title: "White Lilly",
      price: 100,
      tag:"lilly",
      quantity: 1,
      liked: false
    },
    {
      id: 18,
      img: require("../images/white-roses.jpg"),
      title: "White Roses Big Bouqette",
      price: 450,
      tag:"bouqette",
      quantity: 1,
      liked: false
    },
  ];