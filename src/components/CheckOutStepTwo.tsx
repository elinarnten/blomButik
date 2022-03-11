import {
  Box,
  Button,
  FormControl,
  Menu,
  MenuItem,
  Popper,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { useState, useContext } from "react";
import VisaMasterCard from "../Assets/visa-mastercard.png";
import { Context } from "../Context";

function CheckOutStepTwo() {
  /*  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm")); */

  const { firstname, lastname, phoneNumber } = useContext(Context);

  console.log("betalning", firstname);

  //const [firstname, setFirstname] = useState("");
  //const [lastname, setLastname] = useState("");

  /*  const handleFirstnameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFirstname(event.target.value);
  };

  const handleLastnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastname(event.target.value);
  };

  console.log(firstname, lastname); */

  const [anchorCardEl, setAnchorCardEl] = React.useState<null | HTMLElement>(
    null
  );
  const openCard = Boolean(anchorCardEl);
  const handleCardClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorCardEl(event.currentTarget);
  };
  const handleCardClose = () => {
    setAnchorCardEl(null);
  };

  const [anchorInvoiceEl, setAnchorInvoiceEl] =
    React.useState<null | HTMLElement>(null);
  const openInvoice = Boolean(anchorInvoiceEl);
  const handleInvoiceClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorInvoiceEl(event.currentTarget);
  };
  const handleInvoiceClose = () => {
    setAnchorInvoiceEl(null);
  };

  const [anchorSwishEl, setAnchorSwishEl] = React.useState<null | HTMLElement>(
    null
  );
  const openSwish = Boolean(anchorSwishEl);
  const handleSwishClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorSwishEl(event.currentTarget);
  };
  const handleSwishClose = () => {
    setAnchorSwishEl(null);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundSize: "cover",
        backgroundColor: "lightGreen",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
      }}
    >
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{ ml: 3, width: "60%" }}
      >
        <Typography sx={{ mb: 3, mt: 8 }} variant="h6">
          Hur vill du betala?
        </Typography>

        <Button
          variant="outlined"
          id="basic-button"
          aria-controls={openCard ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openCard ? "true" : undefined}
          onClick={handleCardClick}
          /* endIcon={VisaMasterCard} */
          sx={{
            width: "100%",
            color: "black",
            border: "none",

            backgroundColor: "rgba(244, 234, 198, 0.4)",
          }}
        >
          VISA/MasterCard
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorCardEl}
          open={openCard}
          onClose={handleCardClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{ width: "60%" }}
        >
          <div>
            <TextField
              required
              //onChange={handleFirstnameChange}
              id="outlined-required"
              label="Kortnummer"
              size="small"
              sx={{ ml: 2, mb: 2, mr: 2, width: "90%" }}
            />
          </div>
          <div>
            <TextField
              required
              //onChange={handleFirstnameChange}
              id="outlined-required"
              label="Giltlighet"
              size="small"
              sx={{ ml: 2, mb: 2, mr: 2, width: "50%" }}
            />
            <TextField
              required
              //onChange={handleFirstnameChange}
              id="outlined-required"
              label="CVC"
              size="small"
              sx={{ mb: 2, mr: 2, width: "20%" }}
            />
          </div>
          <div>
            <TextField
              required
              //onChange={handleFirstnameChange}
              id="outlined-required"
              label="Namn"
              size="small"
              value={firstname + " " + lastname}
              sx={{ ml: 2, mb: 2, mr: 2, width: "50%" }}
            />
          </div>
          <div>
            <Button
              onClick={handleCardClose}
              size="small"
              variant="outlined"
              sx={{
                borderColor: "#F4EAC6",
                boxShadow: "none",
                color: "black",
                ml: 2,
                mr: 3,
                mt: 2,
              }}
            >
              Stäng
            </Button>
            <Button
              size="small"
              variant="contained"
              sx={{
                backgroundColor: "#F4EAC6",
                boxShadow: "none",
                color: "black",
                mt: 2,
              }}
            >
              Gå vidare
            </Button>
          </div>
        </Menu>

        <Button
          variant="outlined"
          id="swish-button"
          aria-controls={openSwish ? "swish-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openSwish ? "true" : undefined}
          onClick={handleSwishClick}
          sx={{
            width: "100%",
            mt: 2,
            color: "black",
            border: "none",

            backgroundColor: "rgba(244, 234, 198, 0.4)",
          }}
        >
          Swish
        </Button>
        <Menu
          id="swish-menu"
          anchorEl={anchorSwishEl}
          open={openSwish}
          onClose={handleSwishClose}
          MenuListProps={{
            "aria-labelledby": "swish-button",
          }}
          sx={{ width: "60%" }}
        >
          <div>
            <TextField
              required
              id="outlined-swish"
              label="Telefonnummer"
              size="small"
              value={phoneNumber}
              sx={{ ml: 2, mb: 2, mr: 2, width: "90%" }}
            />
          </div>

          <div>
            <Button
              onClick={handleSwishClose}
              size="small"
              variant="outlined"
              sx={{
                borderColor: "#F4EAC6",
                boxShadow: "none",
                color: "black",
                ml: 2,
                mr: 3,
                mt: 2,
              }}
            >
              Stäng
            </Button>
            <Button
              size="small"
              variant="contained"
              sx={{
                backgroundColor: "#F4EAC6",
                boxShadow: "none",
                color: "black",
                mt: 2,
              }}
            >
              Gå vidare
            </Button>
          </div>
        </Menu>

        <Button
          variant="outlined"
          id="basic-button"
          aria-controls={openInvoice ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openInvoice ? "true" : undefined}
          onClick={handleInvoiceClick}
          sx={{
            width: "100%",
            mt: 2,
            color: "black",
            border: "none",

            backgroundColor: "rgba(244, 234, 198, 0.4)",
          }}
        >
          Privatfaktura
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorInvoiceEl}
          open={openInvoice}
          onClose={handleInvoiceClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{ width: "60%" }}
        >
          <div>
            <TextField
              required
              //onChange={handleFirstnameChange}
              id="outlined-required"
              label="Personnummer"
              size="small"
              sx={{ ml: 2, mb: 2, mr: 2, width: "90%" }}
            />
          </div>

          <div>
            <Button
              onClick={handleInvoiceClose}
              size="small"
              variant="outlined"
              sx={{
                borderColor: "#F4EAC6",
                boxShadow: "none",
                color: "black",
                ml: 2,
                mr: 3,
                mt: 2,
              }}
            >
              Stäng
            </Button>
            <Button
              size="small"
              variant="contained"
              sx={{
                backgroundColor: "#F4EAC6",
                boxShadow: "none",
                color: "black",
                mt: 2,
              }}
            >
              Gå vidare
            </Button>
          </div>
        </Menu>

        <div>
          <Button
            size="small"
            variant="outlined"
            sx={{
              borderColor: "#F4EAC6",
              boxShadow: "none",
              color: "black",
              mr: 2,
              mt: 3,
            }}
          >
            Tillbaka
          </Button>
          <Button
            size="small"
            variant="contained"
            sx={{
              backgroundColor: "#F4EAC6",
              boxShadow: "none",
              color: "black",

              mt: 3,
            }}
          >
            Gå vidare
          </Button>
        </div>
      </Box>
      <Box
        sx={{
          ml: 2,
          mr: 3,
          mt: 8,
          backgroundColor: "pink",
          width: "40%",
          height: 400,
        }}
      >
        Här visas innehållet i varukorgen, tänker jag.
      </Box>
    </Box>
  );
}

export default CheckOutStepTwo;
