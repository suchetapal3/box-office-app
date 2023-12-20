export default function AppTitle(props) {
    const { title = "Box Office", subtitle = "Get breaking Box Office information" } = props;

    return (
        <div>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
    );


}


