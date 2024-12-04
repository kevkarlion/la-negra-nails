import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ImagesCarrusel'



function Carrusel() {
  return (
    <Carousel data-bs-theme="white" className='w-full h-[400px] md:h-[700px]  bg-black' >
      <Carousel.Item className=''>
       
        <ExampleCarouselImage text='' src='/clases/image1.webp'/>
        
      </Carousel.Item>
      <Carousel.Item>
      <ExampleCarouselImage text='' src='/clases/image2.webp'/>
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
      <ExampleCarouselImage text='' src='/clases/image3.webp'/>
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item className=''>
       
        <ExampleCarouselImage text='' src='/clases/image4.webp'/>
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item className=''>
       
        <ExampleCarouselImage text='' src='/clases/image5.webp'/>
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item className=''>
       
        <ExampleCarouselImage text='' src='/clases/image6.webp'/>
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;