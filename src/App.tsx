import React, {Fragment} from 'react';

import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";


const App: React.FC = ( { children } ) => (
    <Fragment>
        <div className="wrapper">
            <Header />
            {children}
            <Footer />
        </div>
    </Fragment>
);

export default App;