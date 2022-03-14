
import { ThemeProvider } from "@emotion/react";
import { Box, Button, createTheme} from "@mui/material";



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


export default function Sortbuttons() {
  return (
    <>
      <Box
        sx={{
          mt: "0.1%",
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
          <Button
            variant="contained" >
            Roses
            
          </Button>

          <Button
            variant="contained"
          >
            Lillies
          </Button>
          <Button
            variant="contained"
          >
            Sunflowers
          </Button>
          <Button
            variant="contained"
          >
            Orchids
          </Button>
          <Button
            variant="contained"
          >
            Bouqets
          </Button>
          <Button
            variant="contained"
          >
            Tulips
          </Button>
        </ThemeProvider>
      </Box>
    </>
  );
}
