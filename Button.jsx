const Button = (props) => {
    const { onClick, children = "Default" } = props;

    return <button onClick={onClick}>{children}</button>;
};

export default Button;