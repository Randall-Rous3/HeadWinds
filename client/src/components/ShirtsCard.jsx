

const ShirtsCard = props => {

    return(
        <div className="card">
            <h1> Size: {props.name}</h1>
            <h1>Material: {props.material}</h1>
            <img className="image" src={props.image}/>
        </div>
    )
}
export default ShirtsCard 