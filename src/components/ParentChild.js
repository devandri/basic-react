function Dog() {
    return (
        <Puppy name="Max" bowlShape="square" bowlStatus="full" />
    )
}

function Puppy(props) {
    return (
        <div>
            {props.name} has <Bowl bowlShape={props.bowlShape} bowlStatus={props.bowlStatus} />
        </div>
    )
}

function Bowl(props) {
    return (
        <span>
            {props.bowlShape}-shaped bowl, and it's currently {props.bowlStatus}
        </span>
    )
}

export default Dog