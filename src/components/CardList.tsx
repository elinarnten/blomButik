import Card from './card'
import { shopItems } from '../data/shopContent'




interface Props{
img:string,
title:string,
price:number

}


// interface shopItems {
//   shopItems: []


// }


export function Cardlist(shopItems:{ price: number, img: string, title:string }[]) {
return (
    <>
       { shopItems.map((i) =>{
               return (
                <Card key={i} img={shopItems[i].img} title={shopItems[i].title} price={shopItems[i].price}/>
               )

           })
       }
    </>
)
}