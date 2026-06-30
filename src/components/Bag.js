function Bag(props) {
  const bagStyles = {
    padding: "20px",
    border: "1px solid gray",
    background: "#fff",
    margin: "20px 0"
  };

  return (
    <div style={bagStyles}>
      {props.children}
    </div>
  );
}

export default Bag;