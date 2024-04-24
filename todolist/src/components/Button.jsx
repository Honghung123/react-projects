function Button({ step, increment, title }) {
    return <button className="background-green text-green-400" onClick={() => { increment(step);  increment(step);}}> { title } </button>
}

export default Button