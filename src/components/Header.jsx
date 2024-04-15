import { useEffect, useState } from 'react';

const Header = ({ title }) => {
    const [scrollPos, setScrollPos] = useState();

    useEffect(() => {
        const handleScroll = () => {
            setScrollPos(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header
                className={`p-5 w-full transition-transform ease-in duration-200 transform 
                ${scrollPos > 100 && `fixed top-0 opacity-100 bg-neutral-800 p-0`}
                flex justify-center items-center`}
            >
                <div className="flex lg:w-full w-[540px] md:min-w-[720px] justify-between items-center p-2">
                    <h1 className="font-serif">{title.split(' ')[0]}</h1>
                    <nav className="lg:block hidden">
                        <ul className="flex font-medium justify-center items-center gap-6">
                            <li>Home</li>
                            <li>Services</li>
                            <li>About</li>
                            <li>Projects</li>
                            <li>Reviews</li>
                            <li>Timeline</li>
                        </ul>
                    </nav>
                    <button type="button">Contact</button>
                </div>
            </header>
        </>
    );
};

export default Header;
