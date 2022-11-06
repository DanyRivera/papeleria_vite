
const HorariosContacto = () => {
    return (
        <>
            <div className="mb-5">
                <h3 className="font-fredoka mt-24 text-center text-3xl text-primary mb-2">Horarios y Contacto?</h3>
                <img src="/img/spray.png" alt="spray" className="w-44 md:w-72 h-8 mx-auto" />
            </div>

            <div className="md:flex justify-between">

                <div className="ml-14 hidden lg:block">

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-56 h-5w-56 mt-20 text-primary">
                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                    </svg>

                </div>

                <div className="text-center md:text-left md:flex justify-center gap-10 md:mx-auto" id="horarios">
                    <ul className="flex flex-col gap-5 my-14 text-xl md:text-2xl font-mukta">
                        <li className="font-bold text-primary">Lunes: <span className="font-normal text-secondary">9:00am - 9:00pm</span></li>
                        <li className="font-bold text-primary">Martes: <span className="font-normal text-secondary">9:00am - 9:00pm</span></li>
                        <li className="font-bold text-primary">Miércoles: <span className="font-normal text-secondary">9:00am - 9:00pm</span></li>
                        <li className="font-bold text-primary">Jueves: <span className="font-normal text-secondary">9:00am - 9:00pm</span></li>
                        <li className="font-bold text-primary">Viernes: <span className="font-normal text-secondary">9:00am - 9:00pm</span></li>
                        <li className="font-bold text-primary">Sábado: <span className="font-normal text-secondary">9:00am - 9:00pm</span></li>
                    </ul>

                    <ul className="flex flex-col gap-5 my-14 text-xl md:text-2xl">
                        <li className="font-bold text-primary">WhatsApp:
                            <a
                                className="font-normal text-secondary md:ml-2"
                                target="_blank"
                                rel="noreferrer"
                                href="https://api.whatsapp.com/send?phone=2211831524"
                            >2225943199</a>
                        </li>
                        <li className="font-bold text-primary">Email:
                            <a
                                className="font-normal text-secondary text-[16px] md:text-2xl md:ml-2"
                                target="_blank"
                                rel="noreferrer"
                                href="mailto:papeleria.internet.mg@gmail.com"
                            >papeleria.internet.mg@gmail.com</a>
                        </li>
                        <li className="font-bold text-primary">FaceBook:
                            <a 
                                className="font-normal text-secondary md:ml-2"
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.facebook.com/PapeleriaMG"
                            >@papeleria_mg</a>
                        </li>
                    </ul>

                </div>

                <div className="mr-14 hidden lg:block">

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-62 h-60 mt-16 text-primary">
                        <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
                    </svg>

                </div>

            </div>


        </>
    )
}

export default HorariosContacto