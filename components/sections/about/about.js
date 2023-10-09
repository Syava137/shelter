import Layout from '@/components/layout/layout'
import styles from './about.module.css'
import Image from 'next/image'

export default function About(){
    return (
        <Layout marginTop={40}>
            <div className={styles.container} id='aboutCompany'>
                <div className={styles.text}>
                    Компания <span className={styles.bigText}>“ShelTer”</span> предоставляет услуги для Вас и Ваших питомцев. <br/><br/> Мы работаем с 2019 года, оказываем помощь и поддержку в любой трудной ситуации, касающеяся домашних животных!
                </div>
                    <Image 
                        className={styles.img}
                        priority
                        width={610}
                        height={301}
                        src={'/images/title-img01.png'}
                    />
            </div>
        </Layout>
    )
}