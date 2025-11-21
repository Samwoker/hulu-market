import Header from "@/components/Header"
import HeaderOffer from "@/components/HeaderOffer"
import NavBar from "@/components/NavBar"
import { Separator } from "@/components/ui/separator"

export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){

    return(
        <div>
            <HeaderOffer />
            <Header/>
            <Separator />
            <NavBar/>
            <main>
                {children}
            </main>
        </div>
    )

}