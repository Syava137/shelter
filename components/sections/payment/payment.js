import Layout from '@/components/layout/layout'
import styles from './payment.module.css'
import Image from 'next/image'

export default function Payment(){
    return (
        <div className={styles.outerContainer}>
            <div className={styles.outerContainerGradient}>
                <Layout>
                    <div style={{height: '1px'}}></div>
                    <div className={styles.title} id='payment'>Ваши питомцы в безопасности с нами!</div>
                    <div className={styles.subTitle}>Мы принимаем</div>
                    <div className={styles.cards}>
                        <div className={styles.card}>
                            <Image
                                width={134}
                                height={137.27}
                                src={'/images/payment-cash.svg'}
                            />
                            <div className={styles.cardText}>Оплата наличными</div>
                        </div>
                        <div className={styles.card}>
                            <Image
                                width={134}
                                height={137.27}
                                src={'/images/payment-card.svg'}
                            />
                            <div className={styles.cardText}>Оплата банковской картой</div>
                        </div>
                    </div>
                    <div className={styles.text}>Вы можете пожертвовать на благотворительность <br/> для бездомных животных</div>
                    <div className={styles.phoneNumber}>Сбербанк +7(123)456-78-90</div>
                </Layout>
            </div>
        </div>
    )
}