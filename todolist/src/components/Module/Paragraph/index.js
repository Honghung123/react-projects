import clsx from 'clsx';
import styles from './paragraph.module.scss'
import { useState } from 'react';

function Paragraph() {
    const [heading, setHeading] = useState(false);
    return (
        <>
            <h1 className={[styles.paragraph, styles.heading, styles.hoverHighlight].join(" ")}>This is a paragraph use "css module"</h1>
            <h1 className={clsx(styles.paragraph, {[styles.heading] : heading}, styles.hoverHighlight)}>This is a paragraph use "clsx library"</h1>
            <button className='border-2 border-sky-400 rounded-[.5rem]' onClick={() => setHeading(!heading)}>Highlight heading</button>
            <p className={clsx('text-gradient', styles.hoverHighlight)}>Use global style to share common css to all child components</p>
        </>
    )
}

export default Paragraph;