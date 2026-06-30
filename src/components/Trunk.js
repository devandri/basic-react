function Trunk(props) {
    const trunkStyles = {
        color: "red"
    }
    return <div style={trunkStyles}>
        {props.children}
    </div>
}

export default Trunk;