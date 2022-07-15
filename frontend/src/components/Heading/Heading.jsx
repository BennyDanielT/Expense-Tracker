import "../../css/heading.css";

function Heading({children}) {
    return (
        <h2 className="title">{children}</h2>
    )
}

export {Heading}