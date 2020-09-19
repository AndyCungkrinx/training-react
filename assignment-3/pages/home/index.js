import React from 'react';
import Banner from './components/Banner';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';

export default function Homepage() {
    return(
        <>
            <Banner />
            <div style={{height:200}}></div>
            <SectionOne />
            <div style={{height:200}}></div>
            <SectionTwo />
        </>
    )

}
