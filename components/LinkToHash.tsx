import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

type Props = {
    to: string
    className?: any
    children: React.ReactNode
}

export default function LinkToHash({ to, className, children }: Props) {
    const router = useRouter()
    const pathname = usePathname()
    const path = to.slice(0, to.indexOf('#'))
    const hash = to.substring(to.indexOf("#"))

    const scrollTo = () => {
        if (pathname != path) {
            sessionStorage.setItem("to", hash)
            router.replace(path, { scroll: true })
        } else {
            const element = document.querySelector(hash)

            if (element) {
                element.scrollIntoView()
            }
        }
        
    }

    return (
        <button className={className} onClick={() => scrollTo()}>{children}</button>
    )
}
