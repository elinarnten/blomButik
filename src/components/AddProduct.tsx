import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";



interface Props {

  
  hideShow:Boolean
}


export default function AddProduct(Props:Props) {
  
  if (Props.hideShow === true){{
    return (
      <>
        <form
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
              backgroundColor: "rgba(244, 220, 155, 0.85)",
              borderRadius: 2,
              padding: 12,
            }}
          >
            <Typography
              variant="h6"
              className="Quicksand"
              fontFamily="Quicksand"
              style={{
                fontFamily: "Quicksand, cursive",
                color: "white",
              }}
            >
              <h2>Title</h2>
              <input
                style={{
                  width: "90%",
                  padding: "5px",
                  justifyContent: "center",
                  alignContent: "center",
                  borderRadius: "5px",
                  border: "solid gold",
                }}
              ></input>
              <h2>Image URL</h2>
              <input
                style={{
                  width: "90%",
                  padding: "5px",
                  justifyContent: "center",
                  alignContent: "center",
                  borderRadius: "5px",
                  border: "solid gold",
                }}
              ></input>
              <h2>Price</h2>
              <input
                style={{
                  width: "90%",
                  padding: "5px",
                  justifyContent: "center",
                  alignContent: "center",
                  borderRadius: "5px",
                  border: "solid gold",
                }}
              ></input>
              <h2>Tag</h2>
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
                ></input>
                <Button
                  variant="contained"
                  style={{
                    marginTop:"10px",
                    borderRadius: 5,
                    backgroundColor: "#ffcc80",
                    padding: "5px 35px",
                    fontSize: "12px",
                    alignSelf: "center",
                  }}
                >
                  add product
                </Button>
              </div>
            </Typography>
          </Box>
        </form>
      </>
    );
  }
  }else if ( Props.hideShow === false){{
    return (
    <>
    <h1>test</h1>
    </>
    );
  }

  }
    return <AddProduct hideShow={Props.hideShow}></AddProduct>;
} 

// const Input = <AddProduct hideShow={ new Boolean()}  />;
// ReactDOM.render(
//   Input,
//   document.getElementById('root')
// );


