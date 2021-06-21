import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

const CommonLayout = ({children}) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />            
        </div>
    )
}

export default CommonLayout
