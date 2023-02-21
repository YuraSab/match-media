import React from 'react';
// url on library
// https://github.com/jepser/use-match-media

import {useMatchMedia} from "./hooks";
import Mobile from "./components/Mobile";
import Desktop from "./components/Desktop";
import Tablet from "./components/Tablet";


const App = () => {

    //  const {isMobile} = useMatchMedia(); = {isMobile: true, isTabled: false, isDesktop: false}
    const {isMobile, isDesktop, isTablet} = useMatchMedia();
    console.log(`isMobile`, isMobile);

    return (
        // <div>
        //     {isMobile ? (
        //         <Mobile/>
        //     ) : (
        //         <Desktop/>
        //     )
        //     }
        // </div>
        <div>
            {
                isMobile && <Mobile/>
            }
            {
                isDesktop && <Desktop/>
            }
            {
                isTablet && <Tablet/>
            }


        </div>
    );
};

export default App;
