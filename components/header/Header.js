import Navbar from '../navbar/Navbar'
import Image from 'next/image'
import styles from './Header.module.css'

export default function Header(){
    const links = [
    {
        id: 'aboutCompany',
        text: 'О компании'
    },
    {
        id: 'services',
        text: 'Услуги'
    },
    {
        id: 'payment',
        text: 'Оплата'
    },
    {
        id: 'location',
        text: 'Местоположение'
    }
    ]

    return (
        <div className={styles.outerContainer}>
            <div className={styles.innerContainer}>
                <div className={styles.logoContainer}>
                    <div>
                        <Image 
                            className={styles.logo}
                            priority
                            src='images/shelter-logo.svg'
                            width={146.38}
                            height={29.91}
                            alt=""
                        />
                    </div>
                    <div style={{fontSize: '10px', color: 'var(--black)', fontWeight: 'var(--extra-bold)', lineHeight: '138%', letterSpacing: '0.36px'}}>удобства для всех</div>
                </div>
                <Navbar links={links} />
                <div className={styles.absoluteBackground}></div>
            </div>
        </div>
    )
}