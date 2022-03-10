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
import { useState } from "react";

function CheckOutStepTwo() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const handleFirstnameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFirstname(event.target.value);
  };

  const handleLastnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastname(event.target.value);
  };

  console.log(firstname, lastname);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            width: "100%",
            color: "black",
            border: "none",

            backgroundColor: "rgba(244, 234, 198, 0.4)",
          }}
        >
          Kreditkort
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{ width: "60%" }}
        >
          <div>
            <TextField
              required
              onChange={handleFirstnameChange}
              id="outlined-required"
              label="Kortnummer"
              size="small"
              sx={{ ml: 2, mb: 2, mr: 2, width: "90%" }}
            />
          </div>
          <div>
            <TextField
              required
              onChange={handleFirstnameChange}
              id="outlined-required"
              label="Giltlighet"
              size="small"
              sx={{ ml: 2, mb: 2, mr: 2, width: "50%" }}
            />
            <TextField
              required
              onChange={handleFirstnameChange}
              id="outlined-required"
              label="CVC"
              size="small"
              sx={{ mb: 2, mr: 2, width: "20%" }}
            />
          </div>
          <div>
            <TextField
              required
              onChange={handleFirstnameChange}
              id="outlined-required"
              label="Namn"
              size="small"
              sx={{ ml: 2, mb: 2, mr: 2, width: "50%" }}
            />
          </div>
          <div>
            <Button
              onClick={handleClose}
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
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
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
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{ width: "60%" }}
        >
          <div>
            <TextField
              required
              onChange={handleFirstnameChange}
              id="outlined-required"
              label="Kortnummer"
              size="small"
              sx={{ ml: 2, mb: 2, mr: 2, width: "90%" }}
            />
          </div>
          <div>
            <TextField
              required
              onChange={handleFirstnameChange}
              id="outlined-required"
              label="Giltlighet"
              size="small"
              sx={{ ml: 2, mb: 2, mr: 2, width: "50%" }}
            />
            <TextField
              required
              onChange={handleFirstnameChange}
              id="outlined-required"
              label="CVC"
              size="small"
              sx={{ mb: 2, mr: 2, width: "20%" }}
            />
          </div>
          <div>
            <TextField
              required
              onChange={handleFirstnameChange}
              id="outlined-required"
              label="Namn"
              size="small"
              sx={{ ml: 2, mb: 2, mr: 2, width: "50%" }}
            />
          </div>
          <div>
            <Button
              onClick={handleClose}
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
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            width: "100%",
            mt: 2,
            color: "black",
            border: "none",

            backgroundColor: "rgba(244, 234, 198, 0.4)",
          }}
        >
          Annat
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{ width: "60%" }}
        >
          <div>
            <TextField
              required
              onChange={handleFirstnameChange}
              id="outlined-required"
              label="Kortnummer"
              size="small"
              sx={{ ml: 2, mb: 2, mr: 2, width: "90%" }}
            />
          </div>
          <div>
            <TextField
              required
              onChange={handleFirstnameChange}
              id="outlined-required"
              label="Giltlighet"
              size="small"
              sx={{ ml: 2, mb: 2, mr: 2, width: "50%" }}
            />
            <TextField
              required
              onChange={handleFirstnameChange}
              id="outlined-required"
              label="CVC"
              size="small"
              sx={{ mb: 2, mr: 2, width: "20%" }}
            />
          </div>
          <div>
            <TextField
              required
              onChange={handleFirstnameChange}
              id="outlined-required"
              label="Namn"
              size="small"
              sx={{ ml: 2, mb: 2, mr: 2, width: "50%" }}
            />
          </div>
          <div>
            <Button
              onClick={handleClose}
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
