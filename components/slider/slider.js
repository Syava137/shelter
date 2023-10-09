import Image from "next/image";
import styles from './slider.module.css'
import { useState } from "react";


export default function Slider({data}){

    const [currentValue, setCurrentValue] = useState(1)

    const card = (index) => {
        setCurrentValue(index)
    }

    const previousCard = () => {
        let previous = currentValue - 1
        if (previous == -1){
            previous = data.length - 1
        }
        setCurrentValue(previous)
    }

    const nextCard = () => {
        let next = currentValue + 1
        if (next == data.length){
            next = 0
        }
        setCurrentValue(next)
    }

    let ml 
    currentValue==0?
    ml = (1280-435)/2 + 'px'
    :
    ml = (1280-435)/2-((435+80)*currentValue) + 'px'


    return (
        <div className={styles.container}>
            <div className={styles.cards} >
                <div className={styles.wrapper} style={{marginLeft: ml, transition: 'all ease .3s'}}>
                    {
                        data.map((v, i)=>(
                            <div key={v.id} className={styles.card}>
                                <Image
                                    src={v.img}
                                    width={435}
                                    height={256}
                                    alt=""
                                />
                                <div className={styles.cardText}>{v.text}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={styles.controllers}>
                <Image 
                    src={'/images/arrow.svg'}
                    width={15.74}
                    height={13.63}
                    onClick={()=>{previousCard()}}
                />

                {
                    data.map((v, i)=>(
                        i==currentValue?
                        <Image 
                            key={i}
                            src={'/images/current-circle.svg'}
                            width={27.26}
                            height={27.26}
                            alt=""
                        />
                        :
                        <Image 
                            key={i}
                            src={'/images/circle.svg'}
                            width={27.26}
                            height={27.26}
                            onClick={()=>{card(i)}}
                            alt=""
                        />
                    ))
                }

                <Image 
                    src={'/images/arrowNext.svg'}
                    width={15.74}
                    height={13.63}
                    onClick={()=>{nextCard()}}
                />
            </div>

        </div>
    )
}