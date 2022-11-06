import { Link } from "react-scroll"

const Header = () => {
    return (
        <header className="contenedor">
            <div className="md:flex items-center justify-between my-8 md:my-12">
                <div className="flex flex-col gap-5 md:gap-3 text-center">
                    <h1 className="font-fredoka text-4xl text-primary">Papelería & Internet</h1>
                    <p className="font-pacifico text-3xl text-primary text-center">"Margo"</p>
                </div>
                <nav className="flex flex-col items-center md:flex-row gap-3 md:gap-16 text-xl font-mukta font-regular text-secondary mt-10 md:mt-0">
                    <a className="cursor-pointer hover:text-primary transition-all">
                        <Link
                            to="servicios"
                            smooth={true}
                            duration={1000}
                            offset={-150}
                        >Servicios</Link>
                    </a>
                    <a className="cursor-pointer hover:text-primary transition-all">
                        <Link
                            to="ubicacion"
                            smooth={true}
                            duration={1000}
                            offset={-150}
                        >Ubicación</Link>
                    </a>
                    <a className="cursor-pointer hover:text-primary transition-all">
                        <Link
                            to="horarios"
                            smooth={true}
                            duration={1000}
                            offset={-150}
                        >Horarios</Link>
                    </a>
                    <a className="cursor-pointer hover:text-primary transition-all">
                        <Link
                            to="horarios"
                            smooth={true}
                            duration={1000}
                            offset={-150}
                        >Contacto</Link>
                    </a>
                </nav>
            </div>

            <div className="flex flex-col md:flex-row gap-5 items-center md:gap-14  md:mt-20">
                <div>
                    <h2 className="text-4xl md:text-6xl text-primary tracking-wide leading-tight">Lo mejor de Papelería & Mercería</h2>
                    <p className="text-xl md:text-2xl text-secondary font-light mt-5 uppercase">Encuentra todo lo que buscas con nosotros</p>
                </div>
                <img className="" src="/img/ilustracion.svg" alt="ilustracion" />
            </div>
        </header>
    )
}

export default Header