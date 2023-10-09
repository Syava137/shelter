import Layout from "@/components/layout/layout";
import styles from './services.module.css'
import Image from "next/image";

export default function Services(){

    const data = [
        {
            id: '1',
            text: 'Передержка больных питомцев и их лечение',
            img: '/images/service1.png',
        },
        {
            id: '2',
            text: 'Уход за вашим другом, груминг, купание',
            img: '/images/service2.png',
        },
        {
            id: '3',
            text: 'Обучение командам, коррекция поведения',
            img: '/images/service3.png',
        },
        {
            id: '4',
            text: 'Помощь в поиске потерянных животных',
            img: '/images/service4.png',
        },
    ]

    return (
        <Layout marginTop={35}>
            <div className={styles.title} id="services">СЕРВИС</div>
            <div className={styles.cards}>
                {
                    data.map((i)=>(
                        <div key={i.id} className={styles.card}>
                            <Image
                                src={i.img}
                                width={231}
                                height={256}
                            />
                            <div className={styles.cardText}>
                                {i.text}
                            </div>
                        </div>
                    ))
                }
            </div>
        </Layout>
    )
}