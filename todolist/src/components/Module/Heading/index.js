import styles from './heading.module.scss'

function Heading() {
    return (
        <>
            <h3 className="text-gradient">This is a heading</h3>
            <p className={ styles.heading }>Property passed in clsx will return undefined if it was set wrong name</p>
        </>
    )
}

export default Heading;