import React, { memo } from "react";
import { donuts } from "../assets/consts/donuts";
import Header from "../components/header/header";

const Home: React.FC = () => {

    return (
        <>
            <Header />
            {
                donuts.map(item => (
                    <div className="item">
                        
                    </div>
                ))
            }
        </>
    )
}

export default memo(Home);