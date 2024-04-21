import React from 'react'
import Layout from '../components/Layout/Layout'
import Banner from "../images/Banner.jpg"
import "../styles/HomeStyles.css"
const Home = () => {
    return (
        <Layout>
         <div className="home" style ={{backgroundImage:`url(${Banner})`}}>
            <div className="headerContainer">
                <h1>Laxmi Trading Company </h1>
                 <p> Best Quality of Maize, Wheat and Potato Provider </p>
            </div>
         </div>
        </Layout>
    )
}

export default Home
