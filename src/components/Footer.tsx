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
  position: "absolute",
  bottom: 0,
  width: "100%",
  justifyContent: "center",
  paddingRight: "3rem",
  paddingLeft: "3rem",
};

const footContainer: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderTop: "black solid 1px",
};

const footHolder: CSSProperties = {
  display: "flex",
  justifyContent: "space-around",
  width: "100%",
};

export default Footer;
