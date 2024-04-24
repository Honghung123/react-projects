function ExpenseDate(props) {
    const date = props.date;
    const day = date.toLocaleString('en-US', {day : '2-digit'})
    const month = date.toLocaleString('en-US', {month : 'long'})
    const year = date.getFullYear();

    return (
        <div className="flex flex-column">
            <div className="">{ day }</div>
            <div className="">{ month }</div>
            <div className="">{ year }</div>
        </div>
    );
}

export default ExpenseDate;