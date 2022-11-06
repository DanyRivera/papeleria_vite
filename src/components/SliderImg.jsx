import Slider from "react-slick"
import "../styles/slick.css";
import "../styles/slick-theme.css";


const SliderImg = () => {

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const urlImagemes = [
        '/img/1.jpg',
        '/img/2.jpg',
        '/img/3.jpg',
        '/img/4.jpg',
    ]

    return (
        <section className="hidden lg:block">
            <div className="mb-5">
                <h3 className="font-fredoka mt-24 text-center text-3xl text-primary mb-2">Galería</h3>
                <img src="/img/spray.png" alt="spray" className="w-44 md:w-72 h-8 mx-auto" />
            </div>

            <Slider {...settings} className=' lg:mx-[25rem] text-primary'>
                {urlImagemes.map((url, index) => (
                    <div key={index} className="outline-none my-8 md:pr-10 md:pl-14">
                        <img src={url} alt={url} className=" md:mx-auto" />
                    </div>
                ))}
            </Slider>

        </section>
    )
}

export default SliderImg