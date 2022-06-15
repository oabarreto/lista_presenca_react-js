import './styles.css';


function Card (props) {  // or function Card ({name, time})
    return (
        <div className="card">
            <strong>{props.name}</strong>     {/* or <strong>{name}</strong>*/}
            <small>{props.time}</small>  {/* or <small>{time}</small>*/}
            <small>ID #{props.id}</small>  {/* or <small>{id}</small>*/}
        </div>
    )
}

export default Card;