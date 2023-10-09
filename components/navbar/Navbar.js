import styles from './Navbar.module.css'

export default function Navbar({ links }){
    return (
        <ul className={styles.navContainer}>
            {
                links.map((i)=>(
                    <li key={i.id}>
                        <a className={styles.text} href={`#${i.id}`}>{i.text}</a>
                    </li>
                ))
            }
        </ul>
    )
}
