import "../../css/heading.css";

// Generic Heading UI component
function Heading({children}) {
    return (
        <h2 className="title">{children}</h2>
    )
}

export {Heading}