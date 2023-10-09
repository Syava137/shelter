import Header from "@/components/header/Header"
import About from "@/components/sections/about/about"
import Location from "@/components/sections/location/location"
import Payment from "@/components/sections/payment/payment"
import Services from "@/components/sections/services/services"
import Footer from "@/components/footer/footer"
import Requirements from "@/components/sections/requirements/requirements"
import Head from "next/head"

export default function Home(){
    return (
        <div>
            <Head>
                <link rel="icon" href="/images/shelter.png"/>
                <title>ShelTer</title>
            </Head>
            <Header />
            <About />
            <Services />
            <Requirements />
            <Payment />
            <Location />
            <Footer />
        </div>
    )
}