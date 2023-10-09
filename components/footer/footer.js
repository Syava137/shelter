import Image from "next/image";
import Layout from "../layout/layout";
import styles from './footer.module.css'


export default function Footer(){


    return (
        <div className={styles.outerContainer}>
            <Layout>
                <div className={styles.logoContainer}>
                    <Image
                        className={styles.logo}
                        src='images/shelter-logo.svg'
                        width={146.38}
                        height={29.91}
                    />
                    <div style={{fontSize: '24px', color: 'var(--black)', fontWeight: 'var(--medium)', lineHeight: '138%', letterSpacing: '0.36px'}}>удобства для всех</div>
                </div>

            </Layout>
            <div className={styles.creator}>Sursiakova Anastasia</div>
        </div>
    )
}