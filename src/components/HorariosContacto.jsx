
const HorariosContacto = () => {
    return (
        <>
            <h3 className="font-fredoka mt-32 mb-5 text-center text-3xl text-primary">Horarios y Contacto</h3>

            <div className="contenedor md:flex justify-center gap-24" id="horarios">
                <ul className="flex flex-col gap-5 my-14 text-xl md:text-2xl font-mukta">
                    <li className="font-bold text-primary">Lunes: <span className="font-normal text-secondary">9:00am - 9:00pm</span></li>
                    <li className="font-bold text-primary">Martes: <span className="font-normal text-secondary">9:00am - 9:00pm</span></li>
                    <li className="font-bold text-primary">Miércoles: <span className="font-normal text-secondary">9:00am - 9:00pm</span></li>
                    <li className="font-bold text-primary">Jueves: <span className="font-normal text-secondary">9:00am - 9:00pm</span></li>
                    <li className="font-bold text-primary">Viernes: <span className="font-normal text-secondary">9:00am - 9:00pm</span></li>
                    <li className="font-bold text-primary">Sábado: <span className="font-normal text-secondary">9:00am - 9:00pm</span></li>
                </ul>

                <ul className="flex flex-col gap-5 my-14 text-xl md:text-2xl">
                    <li className="font-bold text-primary">WhatsApp: <span className="font-normal text-secondary">2225943199</span></li>
                    <li className="font-bold text-primary">Email: <span className="font-normal text-secondary text-[16px] md:text-2xl">papeleria.internet.mg@gmail.com</span></li>
                    <li className="font-bold text-primary">FaceBook: <span className="font-normal text-secondary">@papeleria_mg</span></li>
                </ul>
            </div>
        </>
    )
}

export default HorariosContacto