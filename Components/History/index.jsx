const History = (props) => {
    
    return (
        <>
            <ul>
                {props.history.map((event, index) => (
                    <li key={index} >{event[0].url}</li>
                ))}
            </ul>
        </>
    )
}

export default History;