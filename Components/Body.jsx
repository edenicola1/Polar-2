import React, { useEffect, useState } from 'react';
import "../Styles/Body.css";
import Render from "../Banner Web Principal Corrección.png";
import ImgTitle from "../Logotype 1-01.png";
import BannerBeneficios from "../Banner web beneficios.jpg";
import LogoMejora from "../icon mejora de rendimiento.png";
import LogoRec from "../icon recuperación rápida.png";
import LogoRes from "../Icon Aumento Resistencia-01.png";
import LogoMood from "../icon mood.png";
import LogoMental from "../icon enfoque mental-01.png";
import LogoPlanta from "../icon Sistema inmunológico-01.png";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Product1 from "../Polar + Tapa Blanca.png";
import Product2 from "../Polar + 2 Tapas.png";
import Product3 from "../Polar+2 Tapas+ bag.png";

import IgLogo from "../instagram-logo-instagram-icon-transparent-free-png.webp";
import Foto1 from "../DSC00329.webp";
import Foto2 from "../DSC00383.webp";
import Foto3 from "../the-ice-pod.webp"

import Gif from "../Index-of-infograf2017-08-moonphasesimg.gif"


function Body() {

    const [activeQuestion, setActiveQuestion] = useState(null);

    const handleQuestionClick = (questionIndex) => {
        setActiveQuestion((prevQuestionIndex) =>
            prevQuestionIndex === questionIndex ? null : questionIndex
        );
    };

    useEffect(() => {
        const benefitsSection = document.getElementById('Benefits');
        const title = document.getElementById('BeneficiosTitle');
        const description = document.getElementById('BeneficiosDescription');
        const benefitsLeft = document.getElementById('BenefitsLeft');
        const benefitsRight = document.getElementById('BenefitsRight');

        const productsSection = document.getElementById('Products');
        const productsTitle = document.getElementById('ProductsTitle');
        const productsDescription = document.getElementById('ProductsDescription');
        const productCarousel = document.getElementById('ProductCarousel');

        const faqsSection = document.getElementById('FAQs');
        const faqsTitle = document.getElementById('FAQsTitle');
        const faqsQuestions = document.getElementById('Preguntas');

        const socialSection = document.getElementById('PolarSocial');
        const socialTitle = document.getElementById('SocialsTitle');
        const socialDescription = document.getElementById('SocialsDescription');
        const socialPics = document.getElementById('DivFotos');



        const handleScroll = () => {
            const scrollPosition = window.pageYOffset;
            const benefitsSectionTop = benefitsSection.offsetTop;
            const productsSectionTop = productsSection.offsetTop;
            const windowHeight = window.innerHeight;
            const faqsSectionTop = faqsSection.offsetTop;
            const socialSectionTop = socialSection.offsetTop;

            if (scrollPosition > benefitsSectionTop - windowHeight / 1.3) {
                title.classList.add('animate-title');
                description.classList.add('animate-description');
                benefitsLeft.classList.add('animate-left');
                benefitsRight.classList.add('animate-right');
            } else {
                title.classList.remove('animate-title');
                description.classList.remove('animate-description');
                benefitsLeft.classList.remove('animate-left');
                benefitsRight.classList.remove('animate-right');
            }

            if (scrollPosition > productsSectionTop - windowHeight / 1.3) {
                productsTitle.classList.add('animate-title');
                productsDescription.classList.add('animate-description');
                productCarousel.classList.add('animate-carousel');
            } else {
                productsTitle.classList.remove('animate-title');
                productsDescription.classList.remove('animate-description');
                productCarousel.classList.remove('animate-carousel');
            }

            if (scrollPosition > faqsSectionTop - windowHeight / 1.3) {
                faqsTitle.classList.add('animate-title');
                faqsQuestions.classList.add('animate-description');
            } else {
                faqsTitle.classList.remove('animate-title');
                faqsQuestions.classList.remove('animate-description');
            }

            if (scrollPosition > socialSectionTop - windowHeight / 1.3) {
                socialTitle.classList.add('animate-title');
                socialDescription.classList.add('animate-description');
                socialPics.classList.add('animate-description');
            } else {
                socialTitle.classList.remove('animate-title');
                socialDescription.classList.remove('animate-description');
                socialPics.classList.remove('animate-description');
            }

        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (event, targetId) => {
        event.preventDefault();
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    };



    return (
        <div id="BodyContainer">
            <section id="Render">
                <img src={Render} id="RenderImg" alt="Polar Banner"></img>

                <div className="overlay">
                    <img src={ImgTitle} id="ImgTitle"></img>
                    <p id="PolarDescription">
                        Descubrí el poder de la <strong>inmersión</strong> en frío y experimentá una <strong>recuperación</strong> y un <strong>rendimiento</strong> óptimo.
                    </p>

                    <button id="ShopAllButton" onClick={(event) => scrollToSection(event, 'Products')}>Ver Productos</button>
                </div>
                <img id="gif" src={Gif}></img>
            </section>




            <section id="Benefits">
                <img src={BannerBeneficios} id="BannerBeneficios"></img>
                <div id="TitleandDescription">
                    <p id="BeneficiosTitle" className="hide"> POR QUÉ HACER INMERSIÓN </p>
                    <p id="BeneficiosDescription" className="hide"> Conocé los beneficios de esta innovación del rendimiento </p>
                </div>
                <div id="BenefitsLeft" className="hide">
                    <img src={LogoMejora} id="LogoBenefits"></img>
                    <p id="BenefitsTitle">Mejora de Rendimiento</p>
                    <p id="BenefitsDescription">Sumergirse en agua fría después de entrenar ayuda a reducir la inflamación muscular, acelerar la recuperación y mejorar el rendimiento atlético en general.</p>
                    <img src={LogoRec} id="LogoBenefits"></img>
                    <p id="BenefitsTitle">Recuperación Rápida</p>
                    <p id="BenefitsDescription">Los baños de inmersión en frío estimulan la circulación sanguinea y ayudan a eliminar el ácido láctico y otras toxinas acumuladas durante el ejercicio, lo que acelera el proceso de recuperación muscular.</p>
                    <img src={LogoRes} id="LogoBenefitsR"></img>
                    <p id="BenefitsTitle">Aumento de la resistencia</p>
                    <p id="BenefitsDescription">Los baños fríos fortalecen el sistema cardiovascular, mejoran la resistencia y aumentan la capacidad del cuerpo para soportar el estrés físico.</p>

                </div>
                <div id="BenefitsRight" className="hide">
                    <img src={LogoMood} id="LogoBenefits"></img>
                    <p id="BenefitsTitle">Mejora del estado de ánimo</p>
                    <p id="BenefitsDescription">Sumergirse en agua fría estimula la liberación de endorfinas, hormonas responsables de mejorar el estado de ánimo y reducir el estrés.</p>
                    <img src={LogoMental} id="LogoBenefits"></img>
                    <p id="BenefitsTitle">Potenciación del enfoque mental</p>
                    <p id="BenefitsDescription">Los baños fríos aumentan la alerta mental y la concentración, lo que te ayudará a estar más presente y enfocado durante tus actividades.</p>
                    <img src={LogoPlanta} id="LogoBenefits"></img>
                    <p id="BenefitsTitle">Estimulación del sistema inmunológico</p>
                    <p id="BenefitsDescription">La exposición regular al frío fortalece el sistema inmunológico, lo que te permite mantenerte saludable y resistir mejor a las enfermedades.</p>

                </div>
            </section>

            <section id="Products">
                <p id="ProductsTitle" className="hide"> PRODUCTOS POLAR</p>
                <p id="ProductsDescription" className="hide">Polar te ofrece los mejores productos de recuperación deportiva que no se encuentran en las tiendas tradicionales </p>
                <div id="ProductCarousel" >
                    <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} showStatus={false} showIndicators={false}>
                        <div id="divProduct">
                            <img src={Product1} alt="Image 1" id="fotoProduct1" />
                            <div className="slide-legend">
                                <h3>Pod de inmersión en frío </h3>
                                {/* <p> $4000 </p> */}
                            </div>
                        </div>
                        <div id="divProduct">
                            <img src={Product2} alt="Image 2" id="fotoProduct2" />
                            <div className="slide-legend">
                                <h3 id="ProductTitle">Pod de inmersión en frío + Covertor</h3>
                                {/* <p>$5000 </p> */}
                            </div>
                        </div>
                        <div id="divProduct">
                            <img src={Product3} alt="Image 3" id="fotoProduct3" />
                            <div className="slide-legend">
                                <h3 id="ProductTitle">Pod de inmersión en frío + Covertor + Mochila para transporte </h3>
                                {/* <p>$6000 </p> */}
                            </div>
                        </div>

                    </Carousel>
                </div>
            </section>

            <section id="FAQs">
                <p id="FAQsTitle" className="hide">PREGUNTAS FRECUENTES</p>
                <div id="Preguntas" className="hide">
                    <div
                        className={`faq-question ${activeQuestion === 0 ? 'active' : ''}`}
                        onClick={() => handleQuestionClick(0)}
                    >
                        <p id="FAQsPregunta">¿Cuánto tiempo debería durar cada inmersión en frío?</p>
                        <div className="faq-answer">
                            <p>Lo ideal es permanecer en agua fría durante tres a ocho minutos. La terapia con agua fría funciona mejor con la combinación adecuada de tiempo y temperatura. Cada persona es diferente y algunas pueden tolerar temperaturas más bajas.</p>
                        </div>
                    </div>

                    <div className={`faq-question ${activeQuestion === 1 ? 'active' : ''}`} onClick={() => handleQuestionClick(1)}>
                        <p id="FAQsPregunta">¿Cuánta cantidad de hielo es necesaria?</p>
                        <div className="faq-answer">
                            <p>Recomendamos agregar entre 5 y 10 kg de hielo al Pod por sesión. La cantidad de hielo necesaria depende de lo fría que desees que esté. Además, dependiendo de la estación del año, es posible que sea necesario agregar menos hielo.
                                Dado que el pod está aislado, mantendrá el agua fría durante varios días, por lo que es posible que no tengas que agregar tanto hielo después de la primera vez.</p>
                        </div>
                    </div>

                    <div className={`faq-question ${activeQuestion === 2 ? 'active' : ''}`} onClick={() => handleQuestionClick(2)}>
                        <p id="FAQsPregunta">¿Cuál es la temperatura ideal para la inmersión?</p>
                        <div className="faq-answer">
                            <p>Para las primeras sesiones, comenzar a una temperatura de alrededor de 15°C, y luego ir bajando gradualmente la temperatura cada sesión. De esta manera, tu cuerpo se irá acostumbrando al frío.</p>
                        </div>
                    </div>

                    <div className={`faq-question ${activeQuestion === 3 ? 'active' : ''}`} onClick={() => handleQuestionClick(3)}>
                        <p id="FAQsPregunta">¿Cómo se llena el Pod?</p>
                        <div className="faq-answer">
                            <p>El Pod viene con una llave en la parte inferior para llenar. Ahí se conecta una manguera y se llena el Pod. Para sacarle el agua, simplemente se abre la llave.</p>
                        </div>
                    </div>

                    <div className={`faq-question ${activeQuestion === 4 ? 'active' : ''}`} onClick={() => handleQuestionClick(4)}>
                        <p id="FAQsPregunta">¿Cada cuánto tiempo cambio el agua del Pod?</p>
                        <div className="faq-answer">
                            <p>Para mantener el agua limpia durante períodos, lo mejor es agregar alrededor de 1kg de sal marina. Con esto, el agua del Pod puede durar hasta un mes sin ser cambiada.
                                Si no se le agrega sal, recomendamos limpiar el pod cada tres a cinco sesiones de inmersión.</p>
                        </div>
                    </div>

                    <div className={`faq-question ${activeQuestion === 5 ? 'active' : ''}`} onClick={() => handleQuestionClick(5)}>
                        <p id="FAQsPregunta">¿Se puede instalar a la intemperie y dejarlo ahí?</p>
                        <div className="faq-answer">
                            <p>El material con el que se hacen los Pods hace que sean muy resistentes a las temperaturas y las condiciones exteriores. Además, el cobertor es perfecto para cuando no se esté usando y se desee dejarlo afuera.</p>
                        </div>
                    </div>


                </div>
            </section>

            <section id="PolarSocial" >
                <p id="SocialsTitle" className="hide"> POLAR SOCIAL</p>
                <p id="SocialsDescription" className="hide"> Entrá a nuestro Instagram para ver el contenido de nuestros deportistas, coaches de salud y todos los usuarios de Polar! </p>

                <div id="DivFotos" className="hide">
                    <img src={Foto1} id="Foto1" className="image-hover" alt="Foto 1" />
                    <img src={Foto2} id="Foto2" className="image-hover" alt="Foto 2" />
                    <img src={Foto3} id="Foto3" className="image-hover" alt="Foto 3" />
                </div>

                <img src={IgLogo} id="IgLogo" className="image-hover" alt="Instagram Logo" />



            </section>
        </div>
    )
}

export default Body;