import { useTheme } from "styled-components";
import { Title } from "../components/form/title/styles";
import { CertificateContainer, Container } from "../styles/styles/certificate";
import { Text } from "../components/form/text";
import Image, { StaticImageData } from "next/image";

import image1 from "../certificate/devlinks.jpg"
import image2 from "../certificate/conectar.jpg"
import image3 from "../certificate/fundamentar.jpg"
import image4 from "../certificate/especializar.jpg"
// import image5 from "../certificate/.jpg"
// import image6 from "../certificate/.jpg"
// import image7 from "../certificate/.jpg"
// import image8 from "../certificate/.jpg"
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

export default function Certificate() {
    const theme = useTheme();
    const certificateImage = [
        {
            image: image1,
            name: 'DevLinks Rocktseat'
        },
        {
            image: image2,
            name: 'Conectar Rocktseat'
        },
        {
            image: image3,
            name: 'Fundamentar Rocktseat'
        },
        {
            image: image4,
            name: 'Especializar Rocktseat'
        },
    ] as Props[];


    return (
        <Container>
            <Title title='Certificações' fontSize='lg' tag='h2' color={theme.blue_100} />

            {
                certificateImage.map((certificateImage) => {
                    return (
                        <CertificateContainer key={certificateImage.name}>
                            <div>
                                <Image src={certificateImage.image} alt={certificateImage.name} width={300} height={200} />
                                <Text title={certificateImage.name} fontSize='sm' />
                            </div>
                        </CertificateContainer>
                    )
                })
            }
        </Container>
    )
}