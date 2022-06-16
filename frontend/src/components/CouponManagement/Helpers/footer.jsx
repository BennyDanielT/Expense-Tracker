const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <footer className="text-center text-capitalize">
                {/*copyright CSCI 5409 : group-24 &copy; {year}*/}
            </footer>
        </>
    );
};

export default Footer;
