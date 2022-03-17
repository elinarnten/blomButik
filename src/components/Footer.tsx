import { CSSProperties } from "react";
import Edit from "@mui/icons-material/Edit";

function Footer() {
  return (
    <footer style={footStyle}>
      <div style={footContainer}>
        <div style={footHolder}>
          <p>Kontakt</p>
          <p>Om oss</p>
          <p>Leverans</p>
        </div>
        <Edit style={{ display: "flex", justifyContent: "flex-end" }} />
      </div>
    </footer>
  );
}

const footStyle: CSSProperties = {
  display: "flex",
  bottom: 0,
  width: "100%",
  height: "4rem",
  marginTop: "1rem",
};

const footContainer: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderTop: "black solid 1px",
  width: "100%",
  marginRight: "4rem",
  marginLeft: "4rem",
};

const footHolder: CSSProperties = {
  margin: "1rem",
  display: "flex",
  justifyContent: "space-around",
  width: "100%",
};

export default Footer;
