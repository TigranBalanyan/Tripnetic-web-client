import { BrowserRouter as Router, Routes , Route, Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'

const Dashboard = () => {

    return (
        <>
        <div>
            <Navbar />
                <Link to="#" path="/"  />
        </div>
        </>
    )
}


export default Dashboard