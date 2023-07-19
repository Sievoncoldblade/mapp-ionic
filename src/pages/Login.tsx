import { IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { logInOutline, personCircleOutline } from "ionicons/icons";
import React from "react";

const Login: React.FC = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("logged in");
  };
  return (
    <IonPage>
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>MApp</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <IonContent className='ion-padding' scrollY={false}>
        <IonCard>
          <IonCardContent>
            <form onSubmit={handleSubmit}>
              <IonInput label='Email' labelPlacement='floating' fill='outline' type='email' placeholder='john.doe@gmail.com'></IonInput>
              <IonInput label='Password' className='ion-margin-top' fill='outline' labelPlacement='floating' type='password' placeholder=''></IonInput>
              <IonButton type='submit' className='ion-margin-top' expand='block'>
                Login
                <IonIcon icon={logInOutline} slot='end'></IonIcon>
              </IonButton>
              <IonButton routerLink='/register' color={"secondary"} type='button' className='ion-margin-top' expand='block'>
                Create an account
                <IonIcon icon={personCircleOutline} slot='end'></IonIcon>
              </IonButton>
            </form>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Login;
