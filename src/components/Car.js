

export default function Car(props) {
    return (
        <div className="car">
            <h2>{ props.car.name }</h2>
            <h3>{ props.car.year }</h3>
            <p>This unit is for sale: { props.car.selling_price }</p>
        </div>
    )
}