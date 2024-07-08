import React from "react";
import { Link } from 'react-router-dom';
function AboutPage() {
    return ( 
        <>
        <h1>О нас</h1>
        <Link to={"/"}>На главную</Link>
        </>
     );
}

export default AboutPage;