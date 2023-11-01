import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IonContent, IonPage, IonButton, IonImg, IonAlert } from '@ionic/react';
import './Main.css';

function alerta() {
    alert('Olá, bem-vindo ao site');
};

const Main: React.FC = () => {
    const [randomImage, setRandomImage] = useState<any>(null);


    const [isOpen, setIsOpen] = useState(false);

    const fetchRandomImage = async () => {
        const accessKey = '5grfaOwnqqigNEm-86mpRksWuWdp88_fZaJ99yMW5Og';
        const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${accessKey}`;

        try {
            const response = await axios.get(apiUrl);
            setRandomImage(response.data);
        } catch (error) {
            console.error("Erro ao buscar imagem aleatória:", error);
        }
    };

    return (
        <IonPage>
            <IonContent>
                <h1>Bem-Vindo ao meu site</h1>
                <p>Este é um parágrafo de exemplo.</p>
                <IonButton onClick={() => setIsOpen(true)}>Click Me</IonButton>
                <IonAlert
                    isOpen={isOpen}
                    header="Alert"
                    subHeader="Mensagem Importate"
                    message="Alerta"
                    buttons={['OK']}
                    onDidDismiss={() => setIsOpen(false)}
                ></IonAlert>
                <h2>Secção Importante</h2>
                <h3>Esta é uma seção com conteúdo relevante</h3>
                <IonImg className="img" src='https://www.unijui.edu.br/images/stories/manual_identidade/marcas/download.php?arquivo=marca.jpg' alt="imagem" />
                <IonContent className='random-image'>
                    <IonButton onClick={fetchRandomImage}>Carregar Imagem Aleatória</IonButton>
                    {randomImage && (
                        <IonImg src={randomImage.urls.small} alt={randomImage.alt_description} className='img'></IonImg>
                    )}
                </IonContent>
            </IonContent>
        </IonPage>
    );
};

export default Main;