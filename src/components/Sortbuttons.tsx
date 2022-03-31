import { ThemeProvider } from "@emotion/react";
import { Box, Button, createTheme } from "@mui/material";
import { sortButtonsData } from "../data/SortButtonsData";
import { Dispatch, SetStateAction } from "react";

let themeButtonSort = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "white",
          border: "none",
          backgroundColor: "#ffd180",
          margin: "2px",
          borderRadius: "10px",
          "&:hover": {
            backgroundColor: "#ffe180",
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

themeButtonSort = createTheme(themeButtonSort, {
  palette: {
    info: {
      main: themeButtonSort.palette.primary.main,
    },
  },
});

interface Props {
  settag: Dispatch<SetStateAction<string>>;
}
export default function SortbuttonsDOM(props: Props) {
  return (
    <>
      <Box
        sx={{
          mt: "4rem",
          mb: "0.1%",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          justifyItems: "space-between",
          display: "flex",
          flexShrink: "4",
          flexWrap: "wrap",
        }}
      >
        <ThemeProvider theme={themeButtonSort}>
          {sortButtonsData.map((buttonItem) => (
            <Button
              onClick={() => {
                props.settag(buttonItem.value);
              }}
              variant="contained"
              value={buttonItem.value}
              key={buttonItem.name}
              sx={{ position: "static" }}
            >
              {buttonItem.name}
            </Button>
          ))}
        </ThemeProvider>
      </Box>
    </>
  );
}
