const Button = ({idx,text,className,onClick})=>{

    return(
        <button id={idx} className={"btn "+className} onClick={onClick}>{text}</button>
    );
}
export default Button;