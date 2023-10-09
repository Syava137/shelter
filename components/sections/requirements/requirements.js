import Slider from "@/components/slider/slider";
import styles from './requirements.module.css'


export default function Requirements(){
    const data = [
        {
            id: '1',
            text: 'Обеспечивайте за животным надлежащий уход, вовремя оказывайте ветеринарную помощь.',
            img: '/images/Rectangle 126.png',
        },
        {
            id: '2',
            text: 'Принимайте меры по предотвращению появления нежелательного потомства.',
            img: '/images/Rectangle 128.png',
        },
        {
            id: '3',
            text: 'Обеспечьте адекватное законам обращение с биологическими отходами животных.',
            img: '/images/Rectangle 129.png',
        },
        {
            id: '4',
            text: 'Обеспечьте адекватное законам обращение с биологическими отходами животных.',
            img: '/images/Rectangle 129.png',
        },
        {
            id: '5',
            text: 'Обеспечьте адекватное законам обращение с биологическими отходами животных.',
            img: '/images/Rectangle 129.png',
        },
    ]

    return (
        <div className={styles.container}>
            <div className={styles.title}>ТРЕБОВАНИЯ К СОДЕРЖАНИЮ ЖИВОТНЫХ</div>
            <Slider
                data={data}
            />
        </div>
    )
}