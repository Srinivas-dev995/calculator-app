

const ButtonsContainer = ({onButtonClick}) =>{
    
    const buttonNames = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];
    
    return <div className="buttonscontainer">
        {buttonNames.map((btna) => (<button className="custom btn btn-primary"
        onClick={() => onButtonClick(btna)}
        >{btna}</button>))}
    </div>
}

export default ButtonsContainer;