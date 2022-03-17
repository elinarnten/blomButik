import { Box, Button, Menu, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";
import BgCheckOut from "../Assets/backgroundCheckOut.jpg";
import CheckOutBagOverview from "./CheckOutBagOverview";
import { useForm } from "react-hook-form";

function CheckOutPayment() {
  const { firstname, lastname, phoneNumber } = useContext(Context);
  const [inputValue, setInputValue] = useState("");
  const { register } = useForm();
  const onInputChange = (e: any) => setInputValue(e.target.value);
  const handleSubmit = () => console.log(inputValue);

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
        backgroundImage: `url(${BgCheckOut})`,
        backgroundSize: "cover",
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
          sx={{
            width: "100%",
            color: "black",
            border: "none",
            backgroundColor: "#F4EAC6",
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
          <Typography sx={{ m: 2 }}>
            Vänligen fyll i dina kortuppgifter.
          </Typography>
          <div>
            <TextField
              required
              autoComplete="on"
              type="number"
              id="outlined-required"
              label="Kortnummer"
              size="small"
              inputProps={{ maxLength: 4 }}
              onChange={onInputChange}
              value={inputValue}
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
              inputProps={{ maxLength: 4 }}
              sx={{ ml: 2, mb: 2, mr: 2, width: "50%" }}
            />
            <TextField
              required
              //onChange={handleFirstnameChange}
              id="outlined-required"
              label="CVC"
              size="small"
              inputProps={{ maxLength: 3 }}
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
              onClick={handleSubmit}
            >
              Slutför köp
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
            backgroundColor: "#F4EAC6",
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
          <Typography sx={{ m: 2 }}>Telefonnummer för Swish.</Typography>
          <div>
            <TextField
              required
              id="outlined-swish"
              label="Telefonnummer"
              size="small"
              value={phoneNumber}
              inputProps={{ maxLength: 10 }}
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
              Slutför köp
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
            backgroundColor: "#F4EAC6",
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
          <Typography sx={{ m: 2 }}>
            Ange ditt personnummer så skickar vi fakturan per post.
          </Typography>
          <div>
            <TextField
              required
              //onChange={handleFirstnameChange}
              id="outlined-required"
              label="Personnummer"
              size="small"
              inputProps={{ maxLength: 12 }}
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
              Slutför köp
            </Button>
          </div>
        </Menu>
        <div>
          <Link to={"/leverans"}>
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
          </Link>
        </div>
      </Box>
      <CheckOutBagOverview />
    </Box>
  );
}

export default CheckOutPayment;