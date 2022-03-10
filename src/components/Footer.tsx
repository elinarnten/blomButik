import { CSSProperties } from "react";

function Footer() {
  return (
    <footer style={footStyle}>
      <div style={footContainer}>
        <div style={footHolder}>
          <p>Kontakt</p>
          <p>Om oss</p>
          <p>Leverans</p>
        </div>
      </div>
    </footer>
  );
}

const footStyle: CSSProperties = {
  display: "flex",

  bottom: 0,
  width: "100%",
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
