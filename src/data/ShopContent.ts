export interface ShopItem {
  id: number;
  img: string;
  title: string;
  price: number;
  tag: string;
  liked: Boolean;
  description: string;
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
    description: "En vacker enkel röd ros.",
  },
  {
    id: generateId(),
    img: require("../images/pinkRose.avif"),
    title: "Rosa ros",
    price: 50,
    tag: "rose",
    liked: false,
    description:
      "En vacker enkel rosa ros. Att ge bort rosa rosor betyder att du visar tacksamhet till någon.",
  },
  {
    id: generateId(),
    img: require("../images/pink-tulips.avif"),
    title: "Rosa tulpaner",
    price: 120,
    tag: "bouqette",
    liked: false,
    description:
      "En bukett som är populär i många svenska hem på våren, men går lika bra i andra årstider",
  },
  {
    id: generateId(),
    img: require("../images/blueOrchid.avif"),
    title: "Blå orkidé",
    price: 100,
    tag: "orchid",
    liked: false,
    description:
      "Låt detta coola färg piffa upp dit hem! Med sina blå blommor och långa hållbarhet är detta en växt du kan njuta av länge. Samtidigt ger denna orkidé en modern och elegant stil för inredningen.",
  },
  {
    id: generateId(),
    img: require("../images/sunflower.avif"),
    title: "Solros",
    price: 50,
    tag: "sunflower",
    liked: false,
    description:
      "Den har upp till 3 meter höga stänglar med gula blommor. Växten har sitt ursprung i södra och sydöstra USA.",
  },
  {
    id: generateId(),
    img: require("../images/colorful-tulips.avif"),
    title: "Färglada tulpaner",
    price: 90,
    tag: "bouqette",
    liked: false,
    description: "Vår florist ordnar en färgglad bukett med tulpaner.",
  },
  {
    id: generateId(),
    img: require("../images/orangetulip.avif"),
    title: "Orange tulpan",
    price: 90,
    tag: "tulip",
    liked: false,
    description:
      "Låt fantasin få sitt flöde genom att skapa ett eget bukett med vårt utbud.",
  },
  {
    id: generateId(),
    img: require("../images/redRoses.jpg"),
    title: "Röda rosor",
    price: 345,
    tag: "bouqette",
    liked: false,
    description:
      "En röd ros är känd som kärlekens blomma och att ge röda rosor brukar betyda att man älskar den man ger blommorna till.",
  },
  {
    id: generateId(),
    img: require("../images/babypinkrose.avif"),
    title: "Rosa rosbukett",
    price: 250,
    tag: "bouqette",
    liked: false,
    description:
      "En vacker rosbukett som vår florist omsorgsfullt har satt ihop.",
  },
  {
    id: generateId(),
    img: require("../images/bigSunflower.jpg"),
    title: "Stor solros",
    price: 120,
    tag: "sunflower",
    liked: false,
    description:
      "Den har upp till 3 meter höga stänglar med gula blommor. Växten har sitt ursprung i södra och sydöstra USA.",
  },
  {
    id: generateId(),
    img: require("../images/blue-bukett1.jpg"),
    title: "Blå bukett",
    price: 100,
    tag: "bouqette",
    liked: false,
    description:
      "Pröva att bryta den klassiska buketten med den här coola blåa.",
  },
  {
    id: generateId(),
    img: require("../images/colorful-bukett.jpg"),
    title: "Färgglad bukett",
    price: 130,
    tag: "bouqette",
    liked: false,
    description:
      "Vår florist ordnar en färgglad bukett med blandning av olika sortes blommor.",
  },
  {
    id: generateId(),
    img: require("../images/colorful-tulips.avif"),
    title: "Färgglada tulpaner",
    price: 90,
    tag: "tulip",
    liked: false,
    description: "Vår florist ordnar en färgglad bukett med tulpaner.",
  },
  {
    id: generateId(),
    img: require("../images/orange-yellow-lillies.jpg"),
    title: "Lilja i orange och gul",
    price: 90,
    tag: "lilly",
    liked: false,
    description:
      "Lilja är både ett uttryck för sympati och en symbol för renhet.",
  },
  {
    id: generateId(),
    img: require("../images/pink-orchid.jpg"),
    title: "Rosa orkidé",
    price: 70,
    tag: "orchid",
    liked: false,
    description:
      "Lättskött orkidé som blommar länge och som dessutom kan blomma när som helst på året.",
  },
  {
    id: generateId(),
    img: require("../images/sunflower-bukett.jpg"),
    title: "Solros i liten bukett",
    price: 100,
    tag: "bouqette",
    liked: false,
    description:
      "Lys upp din eller någon annans dag med denna fantastiska bukett",
  },
  {
    id: generateId(),
    img: require("../images/White-Lilly.jpg"),
    title: "Vit lilja",
    price: 100,
    tag: "lilly",
    liked: false,
    description:
      "Lilja är både ett uttryck för sympati och en symbol för renhet.",
  },
  {
    id: generateId(),
    img: require("../images/white-roses.jpg"),
    title: "Vit stor rosbukett",
    price: 450,
    tag: "bouqette",
    liked: false,
    description:
      "En vacker rosbukett som vår florist omsorgsfullt har satt ihop.",
  },
];
