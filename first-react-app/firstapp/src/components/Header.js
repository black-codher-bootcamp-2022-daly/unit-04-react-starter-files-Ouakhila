export function Header(props) {
 const {name, color, fruit, className} = props
    return(
    <h1 className={className}>{name} was {color} like {fruit}</h1>
    )
}