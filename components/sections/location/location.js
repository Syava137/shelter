import Layout from "@/components/layout/layout"
import styles from './location.module.css'


export default function Location(){


    return (
        <div className={styles.outerContainer}>
            <Layout marginTop={35}>
                <div className={styles.title} id="location">ShelTer в Вашем городе!</div>
                <div className={styles.textCities}>Москва, Санкт-Петербург, Новосибирск, Екатеринбург,  Челябинск, Омск, Красноярск, <br/>Ростов-на-Дону, Уфа, Воронеж, Пермь, Волгоград, Краснодар</div>
                <div className={styles.contactUs}>
                    <div className={styles.text}>Вы можете связаться с нами:</div>
                    <div className={styles.textBlue}>+7(123)456-78-90</div>
                    <div className={styles.textBlue}>+7(344)611-11-55</div>
                    <div className={styles.textBlue}>shelterhelp@mail.ru</div>
                </div>
            </Layout>
        </div>
    )
}