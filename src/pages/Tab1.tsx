import React from 'react';
import { IonHeader, IonPage, IonContent } from '@ionic/react';
const logo = require('../logo.svg') as string;

const Header: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <img src={logo} alt="react" />
        <h1 className="things">things <span role="img" aria-label="bolt">⚡️</span></h1>
        <p className="react">don't overreact, get things done</p>
      </IonContent>
    </IonPage>

  );
};

export default Header;
