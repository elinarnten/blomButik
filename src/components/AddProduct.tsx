import { Typography } from "@mui/material";
import { Box, height } from "@mui/system";
import { Dispatch, SetStateAction, useContext, useState } from "react";
import { ShopItem } from "../data/ShopContent";
import { ProductContext } from "../productContext";
import { generateId } from "../data/ShopContent";

interface Option {
  label: string;
  value: string;
}

interface Props {
  hideShow: Boolean;
  HandleSubmitProducts: Dispatch<SetStateAction<any>>;
}

export default function AddProduct(Props: Props) {
  const options: Option[] = [
    { value: "lily", label: "liliy" },
    { value: "rose", label: "rose" },
    { value: "orchid", label: "orchid" },
    { value: "tulip", label: "tulip" },
    { value: "sunflower", label: "sunflower" },
    { value: "tulip", label: "tulip" },
    { value: "bouqette", label: "bouqette" },
  ];

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const [tag, setTag] = useState("");
  const [description, setDescription] = useState("");

  const { addProduct } = useContext(ProductContext);

  const HandleSubmitProducts = () => {
    let newItem: ShopItem = {
      id: generateId(),
      title,
      img: image,
      price,
      tag,
      liked: false,
      description
    }
    addProduct(newItem)
  }


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
               marginTop: "4rem",
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
                 //mt: 4,
                 //backgroundColor: "rgba(252, 215, 155, 0.9)",
                 borderRadius: 2,
                 padding: 12,
               }}
             >
          
               <Typography
                 //fontFamily="Quicksand"
                 style={{
                   //fontFamily: "Quicksand, cursive",
                   color: "black",
                 }}
               >
                 <h4 style={{marginBottom: 10}}>Lägg till en ny produkt:</h4>
                 <h5>Titel</h5>

                 <input
                   style={{
                     width: "90%",
                     padding: "5px",
                     justifyContent: "center",
                     alignContent: "center",
                     borderRadius: "5px",
                     border: "solid black",
                   }}
                   //placeholder="Title"
                   name="title-name"
                   value={title}
                   onChange={handleaddTitle}
                   type="text"
                 ></input>

                 <h5>Bild URL</h5>
                 <input
                   style={{
                     width: "90%",
                     padding: "5px",
                     justifyContent: "center",
                     alignContent: "center",
                     borderRadius: "5px",
                     border: "solid black",
                   }}
                   //placeholder="image"
                   name="image-name"
                   value={image}
                   onChange={handleaddImage}
                   type="text"
                 ></input>

                 <h5>Pris</h5>
                 <input
                   style={{
                     width: "90%",
                     padding: "5px",
                     justifyContent: "center",
                     alignContent: "center",
                     borderRadius: "5px",
                     border: "solid black",
                   }}
                   //placeholder="price"
                   name="price-name"
                   value={price}
                   onChange={handleaddPrice}
                   type="number"
                 ></input>

                 <h5>Tag</h5>
                 <div>
                   <input
                     style={{
                       width: "90%",
                       padding: "5px",
                       justifyContent: "center",
                       alignContent: "center",
                       borderRadius: "5px",
                       border: "solid black",
                     }}
                     //placeholder="tag"
                     name="image-tag"
                     value={tag}
                     onChange={handleaddTag}
                     type="text"
                   ></input>
                   <button onClick={HandleSubmitProducts} type="submit"
                    style={{
                    marginTop: "10px",
                    marginRight: "10%",
                    border:"none",
                    color:"white",
                    borderRadius: 5,
                    backgroundColor: "green",
                    alignSelf: "center",
                      float: "right",
                      height: "2rem",
                      width: "6rem",
                  }}>
                     <h3>Lägg till</h3>
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