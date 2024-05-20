import './ThemeToggler.scss';

import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";



function ThemeToggler({ theme, setTheme }) {

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            setTheme('light');
            localStorage.setItem('theme', 'light');
        }


    }

    return (
        <div className="ThemeToggler cursor-pointer fixed top-1/2 translate-y-[-50%] right-3 inline text-4xl select-none " onClick={toggleTheme}>
            {theme === 'light' ? <MdOutlineLightMode className="p-1 border-2 border-slate-950 rounded-full bg-slate-800 text-white hover:bg-slate-950 active:animate-ping" /> : <MdOutlineDarkMode className="p-1  border-2 rounded-full bg-slate-100  text-black hover:bg-slate-300 active:animate-ping" />}
        </div>
    );
}

export default ThemeToggler;
