import React from 'react';
import './App.css';

import * as Element from 'react-bootstrap';
import { IntlProvider } from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import Bandas from './components/bandas'
import NavBar from './components/navbar'


var usrlang = navigator.language;


function App() {
  return (
    <Element.Container className='main-container' >
      <IntlProvider locale={usrlang === 'es-ES' ? 'es-ES' : 'en-EN'} messages={usrlang === 'es-ES' ? localeEsMessages : localeEnMessages}>
      <NavBar></NavBar>

        
        <Bandas></Bandas>

    </IntlProvider>
   
    </Element.Container>
  );
}

export default App;
