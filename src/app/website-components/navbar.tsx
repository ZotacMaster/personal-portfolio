import { User } from "lucide-react"
import Link from "next/link"

export default function Navbar() {
    return(
        <>
        <header className="sticky top-0 z-40 w-full border-b bg-background">
            <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
            <div className="flex gap-6 md:gap-10">
                <Link href="#" className="flex items-center space-x-2">
                <User />
                <span className="text-lg inline-block font-bold">Suchetan Chakraborty</span>
                </Link>
            </div>
            <div className="flex flex-1 items-center justify-end space-x-4">
                <nav className="flex items-center space-x-1 ">
                    <Link href="#about" className="text-lg font-medium hover:underline underline-offset-4">
                        About
                    </Link>
                    <Link href="#projects" className="text-lg font-medium hover:underline underline-offset-4">
                        Projects
                    </Link>
                    <Link href="#contact" className="text-lg font-medium hover:underline underline-offset-4">
                        Contact
                    </Link>
                </nav>
            </div>
            </div>
        </header>
        </>
    )

}