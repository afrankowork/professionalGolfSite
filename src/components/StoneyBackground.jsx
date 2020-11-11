import React from 'react';
import { Button } from 'reactstrap';

const BackgroundImage = () => {
    return (
       <>
            <div id="landingContainer">
                <h1 id="introHeader">Stoney Creek Golf Club</h1>
                <h3 id="secondHeader">Welcome Back!</h3>
                <Button id="btnTeeTimes"outline color="success">Tee Times</Button>
            </div>
        </>
    )

}

export default BackgroundImage;