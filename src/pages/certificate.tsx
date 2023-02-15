import { useTheme } from "styled-components";
import { Title } from "../components/form/title/styles";
import { CertificateContainer, Container } from "../styles/styles/certificate";
import { Text } from "../components/form/text";
import Image, { StaticImageData } from "next/image";

import image1 from "../certificate/devlinks.jpg"
import image2 from "../certificate/conectar.jpg"
import image3 from "../certificate/fundamentar.jpg"
import image4 from "../certificate/especializar.jpg"
import image5 from "../certificate/introducao_dnc.jpg"
import image6 from "../certificate/introducao_dio.jpg"
import image7 from "../certificate/react_app.jpg"
import image8 from "../certificate/react_native.jpg"
import { useEffect, useState } from "react";
// import image9 from "../certificate/.jpg"
// import image10 from "../certificate/.jpg"
// import image11 from "../certificate/.jpg"
// import image12 from "../certificate/.jpg"
// import image13 from "../certificate/.jpg"
// import image14 from "../certificate/.jpg"
// import image16 from "../certificate/.jpg"
// import image17 from "../certificate/.jpg"
// import image18 from "../certificate/.jpg"
// import image19 from "../certificate/.jpg"
// import image20 from "../certificate/.jpg"
// import image21 from "../certificate/.jpg"
// import image22 from "../certificate/.jpg"
// import image23 from "../certificate/.jpg"
// import image24 from "../certificate/.jpg"
// import image25 from "../certificate/.jpg"


type Props = {
    image: StaticImageData;
    name: string;
}

const certificateImage = [
    {
        image: image1,
        name: 'DevLinks - Rocktseat.'
    },
    {
        image: image2,
        name: 'Conectar - Rocktseat.'
    },
    {
        image: image3,
        name: 'Fundamentar - Rocktseat.'
    },
    {
        image: image4,
        name: 'Especializar - Rocktseat.'
    },
    {
        image: image5,
        name: 'introdução ao HTML e CSS - DNC.'
    },
    {
        image: image6,
        name: 'introdução ao HTML e CSS - DIO.'
    },
    {
        image: image7,
        name: 'Criação de projetos ReactJS - DIO.'
    },
    {
        image: image8,
        name: 'Criação de projetos React Native e componentes - DIO.'
    },
] as Props[];

export default function Certificate() {
    const theme = useTheme();
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount(certificateImage.length);
        });
    }, [certificateImage]);    

    return (
        <Container>
            <Title title='Certificações' fontSize='lg' tag='h2' color={theme.blue_100} />

            <Text title={`Total de Certificações: ${count}`} fontSize="lg" />

            {
                certificateImage.map((certificateImage) => {
                    return (
                        <CertificateContainer key={certificateImage.name}>
                            <>
                                <Image src={certificateImage.image} alt={certificateImage.name} />
                                <Text title={certificateImage.name} fontSize='sm' />
                            </>
                        </CertificateContainer>
                    )
                })
            }
        </Container>
    )
}