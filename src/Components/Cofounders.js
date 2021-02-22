
function Cofounders(props) {
    return (
        <div>
             <div className="Co-Founders">
                <h3>{props.name}</h3>
                <img className="img" src={props.image}></img>
                <p id="coFounderDescripton">
                    {props.description}
                </p>
            </div>
        </div>
    )
}

export default Cofounders
