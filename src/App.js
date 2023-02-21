import React, {Suspense} from 'react';
// url on library
// https://github.com/jepser/use-match-media

import {useMatchMedia} from "./hooks";
// import Mobile from "./components/Mobile";
// import Desktop from "./components/Desktop";
// import Tablet from "./components/Tablet";

const Mobile = React.lazy(() => import("./components/Mobile"));
const Desktop = React.lazy(() => import("./components/Desktop"));
const Tablet = React.lazy(() => import("./components/Tablet"));

const App = () => {

    //  const {isMobile} = useMatchMedia(); = {isMobile: true, isTabled: false, isDesktop: false}
    const {isMobile, isDesktop, isTablet} = useMatchMedia();
    // console.log(`isMobile`, isMobile);

    return (
        // <div>
        //     {isMobile ? (
        //         <Mobile/>
        //     ) : (
        //         <Desktop/>
        //     )
        //     }
        // </div>
        // <div>
        //     {
        //         isMobile && <Mobile/>
        //     }
        //     {
        //         isDesktop && <Desktop/>
        //     }
        //     {
        //         isTablet && <Tablet/>
        //     }
        // </div>
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                {
                    isMobile && <Mobile/>
                }
                {
                    isDesktop && <Desktop/>
                }
                {
                    isTablet && <Tablet/>
                }
            </Suspense>
        </div>
    );
};

export default App;
