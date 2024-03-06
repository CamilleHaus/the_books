import Footer from "../Footer"
import Header from "../Header"

const DefaultTemplate = ({children}) => {
    return (
        <>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
        </>
    )
}

export default DefaultTemplate