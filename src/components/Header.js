function Header(props) {
    console.log(props)
    return <h1>Hello from the header to {props.name} {props.color}</h1>
}

export default Header;