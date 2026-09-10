function FunctionalEventHandler(){
    function handleClick(){
        console.log("Function button clicked");
    }
    return (
        <div>
            <h1 class="FunctionalEventHandler">Hello This function event handler</h1>
            <button onClick={handleClick}>Function button</button>
        </div>
    )
}

export default FunctionalEventHandler;