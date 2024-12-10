import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} style={{width:"55%"}}>
      <Carousel.Item>
        <img width="600px" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj9C4k3tjOBGbCv4hKWP8ghlDGJRNZpu27DB0l8LfmTJc6ROEsFfs-k5nsVprUP6ZHm2WTnr1ZZJZIO69tdi2gNvuNruhWcha-M3q2NYLpm8NxJETl1RYCFSYRqtXyvWbCmdKbBixdhOv2u/s1600/CURA+VALERA+IES.jpg" alt="IES Cura Valera img1"/>
        <Carousel.Caption>
          <h3>Imagen1 IES Cura Valera</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width="600px" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiNkENgPcoWn9Vpco7n1_YYShE34GFxPXn7N7-VIOHQkQng15lf6a4uSy9scO4P9fLQGpFEXHtIGYmqdyM4pwpb98OfI-Crj71iJE99SvUw4qoTmRdF47ECk2-3GLnYssMda7asazgPFrM/w1200-h630-p-k-no-nu/cura+valera+ies+np.jpg" alt="IES Cura Valera img2"/>
        <Carousel.Caption>
          <h3>Imagen2 IES Cura Valera</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width="600px" src="https://s3.ppllstatics.com/ideal/levante/multimedia/202002/14/media/cortadas/HO-ies-cura-valera2-kbuH-U100155323650pVG-1248x770@Ideal.jpg" alt="IES Cura Valera img3" />
        <Carousel.Caption>
          <h3>Imagen3 IES Cura Valera</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;