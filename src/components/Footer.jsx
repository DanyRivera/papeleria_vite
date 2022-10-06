
const Footer = () => {

    const date = new Date();
    const currentDate = date.getFullYear();

    return (
        <footer className="text-center bg-primary text-white py-8 mt-24 md:mt-14">
            <p>&copy; {currentDate} Papelería Margo Todos los derechos Reservados</p>
        </footer>
    )
}

export default Footer