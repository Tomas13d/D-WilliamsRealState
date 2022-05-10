import img1 from "../../public/terrazas.jpg";
import img2 from "../../public/por.jpg";
import img3 from "../../public/hospital2.jpg";
import img4 from "../../public/sierras.jpg";
import img5 from "../../public/casaQ.jpg"
import Image from "next/image";
import styles from "../../styles/Carrousel.module.css";
import Search from "./Search";
import { Carousel } from "react-bootstrap";

function Carrousel() {
  const imgCarousel = [img4,img1,img3,img2,img5]; // importar imagen y agregar aqui 1920x1080 minimo
  return (
  
    <div className={styles.containerCarousel}>
        <Carousel interval={9000} controls={false} className={styles.sizeCarousel}>
          {imgCarousel.map((img,i)=> (
            <Carousel.Item key={i} className={styles.imgBack} >
              <Image
                src={img}
                alt={`Slide N ${i}`}
                layout="responsive"
                style={styles.imgBack}
              />
          </Carousel.Item>
          ))}
        </Carousel>
        <div className={styles.opacityImg}>
            <h3>Mas de 40 anos acompanandote</h3>
          <p>Elegi las propiedad ideal para vos y tu familia</p>
          <Search/>
    </div>
    </div>
  
  );
}

export default Carrousel;
