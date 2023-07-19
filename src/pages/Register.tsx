import { IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { logInOutline, personCircleOutline, checkmarkDoneOutline } from "ionicons/icons";
import React from "react";

const Register: React.FC = () => {
  const handleRegister = (event: any) => {
    event.preventDefault();
    console.log("registered");
  };
  return (
    <IonPage>
      <IonContent className='ion-padding' scrollY={false}>
        <IonCard>
          <IonCardContent>
            <form onSubmit={handleRegister}>
              <IonInput label='Email' labelPlacement='floating' fill='outline' type='email' placeholder='john.doe@gmail.com'></IonInput>
              <IonInput label='Password' className='ion-margin-top' fill='outline' labelPlacement='floating' type='password' placeholder=''></IonInput>
              <IonInput label='Confirm Password' className='ion-margin-top' fill='outline' labelPlacement='floating' type='password' placeholder=''></IonInput>
              <IonButton type='submit' className='ion-margin-top' expand='block'>
                Create an account
                <IonIcon icon={checkmarkDoneOutline} slot='end'></IonIcon>
              </IonButton>
              <IonButton routerLink='/' type='button' color={"secondary"} className='ion-margin-top' expand='block'>
                Back
              </IonButton>
            </form>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Register;
