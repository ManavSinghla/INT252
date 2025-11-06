function GreetingCard(props) {
    return (
        <div>
            <h1>Hello {props.name}, {props.message}</h1>
        </div>

    );
}

export default GreetingCard;