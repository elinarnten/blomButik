import { Button, createTheme, Input, ThemeProvider } from "@mui/material";
import React from "react";
import { useContext, useState } from "react";
import { Dispatch, SetStateAction } from "react";
import { ShopItem } from "../data/ShopContent";
import { ProductContext } from "../contexts/productContext";

interface Props {
  hideShow: Boolean;
  item: ShopItem;
  // updateItem: Dispatch<SetStateAction<any>>;
  handleUpdateProduct: Dispatch<SetStateAction<any>>;
}

let themeEditItem = createTheme({
  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          color: "black",
          border: "none",
          backgroundColor: "white",
          margin: "2px",
          borderRadius: "10px",
          "&:hover": {
            backgroundColor: "#white",
          },
          palette: {
            primary: {
              main: "#ffd180",
            },
          },
        },
      },
    },
  },
});

themeEditItem = createTheme(themeEditItem, {
  palette: {
    info: {
      main: themeEditItem.palette.primary.main,
    },
  },
});

export default function EditButton(props: Props) {
  let [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(props.item.title);
  const [img, setImg] = useState(props.item.img);
  const [price, setPrice] = useState(props.item.price);
  const [tag, setTag] = useState(props.item.tag);
  const [id] = useState(props.item.id);
  const [description, setDescription] = useState(props.item.description);

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log("You clicked submit.");
  }

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    event.preventDefault();
  };

  const handleChangeTag = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTag(event.target.value as any);
    event.preventDefault();
  };

  const handleChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value as any);
    event.preventDefault();
  };

  const handleChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImg(event.target.value);
    event.preventDefault();
  };

  const handleChangeDescription = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
    event.preventDefault();
  };

  const { updateProduct } = useContext(ProductContext);

  const handleUpdateProduct = () => {
    let ChangedItem: ShopItem = {
      id,
      title,
      img,
      price,
      tag,
      liked: false,
      description,
    };

    updateProduct(ChangedItem);
  };

  if (props.hideShow === true) {
    {
      return (
        <>
          <ThemeProvider theme={themeEditItem}>
            {isEditing ? (
              <form
                onSubmit={handleSubmit}
                style={{
                  maxWidth: "70%",
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#c5d9bf",
                  padding: "5px",
                  borderRadius: "5px",
                  justifySelf: "center",
                  alignSelf: "center",
                  margin: "auto",
                  color: "white",
                  fontFamily: "quicksand",
                  border: "none",
                }}
              >
                <p>Titel:</p>
                <Input
                  type="text"
                  defaultValue={props.item.title}
                  onChange={handleChangeTitle}
                  value={title}
                />
                <p>Bild:</p>
                <Input
                  type="text"
                  defaultValue={props.item.img}
                  onChange={handleChangeImage}
                  value={img}
                />

                <p>Tag: </p>
                <Input
                  type="text"
                  defaultValue={props.item.tag}
                  onChange={handleChangeTag}
                  value={tag}
                />
                <p>Pris: </p>
                <Input
                  type="number"
                  defaultValue={props.item.price}
                  onChange={handleChangePrice}
                  value={price}
                />
                <p>Beskrivning: </p>
                <Input
                  type="text"
                  defaultValue={props.item.description}
                  onChange={handleChangeDescription}
                  value={description}
                />
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "white",
                    alignSelf: "center",
                    color: "#c4e6c1",
                  }}
                  onClick={handleUpdateProduct}
                  type="submit"
                >
                  Klar
                </Button>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "white",
                    alignSelf: "center",
                    color: "#c4e6c1",
                  }}
                  onClick={() => {
                    setIsEditing(false);
                  }}
                >
                  Stäng
                </Button>
              </form>
            ) : (
              <Button
                variant="contained"
                style={{
                  backgroundColor: "green",
                  alignSelf: "center",
                  width: "50%",
                  position: "static",
                }}
                onClick={() => {
                  setIsEditing(true);
                }}
              >
                Ändra
              </Button>
            )}
          </ThemeProvider>
        </>
      );
    }
  }

  return <></>;
}
//deleteThisItem={Props.deleteThisItem}

// import { Button } from "@mui/material";
// import React from "react";
// import { createElement, useContext, useState } from "react";
// import { Dispatch, SetStateAction } from "react";
// import { ShopItem } from "../data/ShopContent";
// import { ProductContext } from "../productContext";

// interface Props {
//   hideShow: Boolean;
//   item: ShopItem
//   updateItem: Dispatch<SetStateAction<any>>;

// }

// export default function EditButton(props: Props) {
//   let [isEditing, setIsEditing] = useState(false);

// const { updateProduct } =
//   useContext(ProductContext);

// const handleUpdateProduct = () => {
//  {
//     setIsEditing(true);

//   }
//  updateProduct(props.item)

// };

//   if (props.hideShow === true) {
//     {
//       return (
//         <>
//           {isEditing ? (
//             <form>
//               <input type="text" defaultValue={props.item.title} />
//               <input type="text" defaultValue={props.item.img} />
//               <input type="text" defaultValue={props.item.tag} />
//               <input type="number" defaultValue={props.item.price} />
//             </form>
//           ) : (
//             <Button
//               variant="contained"
//               style={{
//                 backgroundColor: "#c4e6c1",
//                 alignSelf: "center",
//                 width: "50%",
//               }}
//               onClick={handleUpdateProduct}
//             >
//               edit Item
//             </Button>
//           )}
//         </>
//       );
//     }
//   }

//       return (
//         <>
//         </>
//       );
// }
// //deleteThisItem={Props.deleteThisItem}
