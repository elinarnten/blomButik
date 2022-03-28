
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Dispatch, SetStateAction, useContext, useState } from "react";
import { ShopItem, } from "../data/ShopContent";
import { ProductContext } from "../productContext";
import { generateId } from '../data/ShopContent'

interface Option{
label: string,
value:string
}

interface Props {
  hideShow: Boolean;
  HandleSubmitProducts: Dispatch<SetStateAction<any>>;

}

export default function AddProduct(Props:Props) {
const options: Option[] = [
  { value: "lily", label: "liliy" },
  { value: "rose", label: "rose" },
  { value: "orchid", label: "orchid" },
  { value: "tulip", label: "tulip" },
  { value: "sunflower", label: "sunflower" },
  { value: "tulip", label: "tulip" },
  { value: "bouqette", label: "bouqette" },
  
];



  const [title,setTitle] = useState("");
  const [image,setImage] = useState("");
  const[price,setPrice] = useState(0);
  const [tag,setTag]=useState("");


  const { addProduct } =
    useContext(ProductContext);

    const HandleSubmitProducts = () => {
      

      let newItem: ShopItem = {
        id: generateId(),
        title, 
        img: image,
        price,
        tag,
        liked: false
      }
      addProduct(newItem)
      console.log(newItem)
      

      

    };

     function handleSubmit(e:any) {
       e.preventDefault();
       console.log("You clicked submit.");
     }

    const handleaddTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(event.target.value);
      event.preventDefault();
      

    }; 

     const handleaddTag = (event: React.ChangeEvent<HTMLInputElement>) => {
       setTag(event.target.value as any);
      event.preventDefault();

     }; 

      const handleaddPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(event.target.value as any);
         event.preventDefault();
      }; 

       const handleaddImage = (event: React.ChangeEvent<HTMLInputElement>) => {
         setImage(event.target.value);
          event.preventDefault();
       }; 
    
  
  
     if (Props.hideShow === true) {
       {
         return (
           <form
             onSubmit={handleSubmit}
             style={{
               display: "flex",
               flexDirection: "column",
               padding: "20px",
               margin: "10px",
               justifyContent: "center",
               alignContent: "center",
               width: "100%",
               alignItems: "center",
             }}
           >
             <Box
               style={{
                 display: "flex",
                 flexDirection: "column",
                 padding: "20px",
                 margin: "10px",
                 justifyContent: "center",
                 alignContent: "center",
               }}
               sx={{
                 ml: 4,
                 mr: 5,
                 mt: 9,
                 backgroundColor: "rgba(252, 215, 155, 0.9)",
                 borderRadius: 2,
                 padding: 12,
               }}
             >
               <Typography
                 fontFamily="Quicksand"
                 style={{
                   fontFamily: "Quicksand, cursive",
                   color: "white",
                 }}
               >
                 <h3>Title</h3>

                 <input
                   style={{
                     width: "90%",
                     padding: "5px",
                     justifyContent: "center",
                     alignContent: "center",
                     borderRadius: "5px",
                     border: "solid gold",
                   }}
                   placeholder="Title"
                   name="title-name"
                   value={title}
                   onChange={handleaddTitle}
                   type="text"
                 ></input>

                 <h3>Image URL</h3>
                 <input
                   style={{
                     width: "90%",
                     padding: "5px",
                     justifyContent: "center",
                     alignContent: "center",
                     borderRadius: "5px",
                     border: "solid gold",
                   }}
                   placeholder="image"
                   name="image-name"
                   value={image}
                   onChange={handleaddImage}
                   type="text"
                 ></input>

                 <h3>Price</h3>
                 <input
                   style={{
                     width: "90%",
                     padding: "5px",
                     justifyContent: "center",
                     alignContent: "center",
                     borderRadius: "5px",
                     border: "solid gold",
                   }}
                   placeholder="price"
                   name="price-name"
                   value={price}
                   onChange={handleaddPrice}
                   type="number"
                 ></input>

                 <h3>Tag</h3>
                 <div>
                   <input
                     style={{
                       width: "90%",
                       padding: "5px",
                       justifyContent: "center",
                       alignContent: "center",
                       borderRadius: "5px",
                       border: "solid gold",
                     }}
                     placeholder="tag"
                     name="image-tag"
                     value={tag}
                     onChange={handleaddTag}
                     type="text"
                   ></input>
                   <button onClick={HandleSubmitProducts} type="submit"
                    style={{
                    marginTop: "10px",
                    border:"none",
                    color:"white",
                    borderRadius: 5,
                    backgroundColor: "#ffcc80",
                    padding: "5px 35px",
                    fontSize: "12px",
                    alignSelf: "center",
                    float:"right"
                  }}>
                     <h3>add product</h3>
                   </button>
                 </div>
               </Typography>
             </Box>
           </form>
         );
       }
     } 
      return (
        <>
        </>
      );
}



