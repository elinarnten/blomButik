import CardView from "./Card";
import { shopItems } from "../data/ShopContent";

interface shopItems {
  img: string;
  title: string;
  price: number;
}

export function Cardlist(shopItems: shopItems[]) {
  return (
    <>
      {/* { shopItems.map((item,i) =>{
               return (
                <CardView key={item} img={shopItems[i].img} title={shopItems[i].title} price={shopItems[i].price}/>
               )

           })
       } */}
    </>
  );
}
