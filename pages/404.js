import Link from "next/link"

export default function NotFound(){
    return (
        <div>
            Не найдено
            <br/>
            <Link href={`/`}>Вернуться на главную</Link>
        </div>
    )
}