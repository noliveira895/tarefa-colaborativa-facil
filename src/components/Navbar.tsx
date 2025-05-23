
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-xl">Ciência de Dados</Link>
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              <li><Link to="/" className="hover:text-opacity-80 transition-colors">Início</Link></li>
              <li><Link to="/sobre" className="hover:text-opacity-80 transition-colors">Sobre a Profissão</Link></li>
              <li><Link to="/dicas" className="hover:text-opacity-80 transition-colors">Dicas e Tendências</Link></li>
              <li><Link to="/contatos" className="hover:text-opacity-80 transition-colors">Redes e Contatos</Link></li>
              <li><Link to="/ods" className="hover:text-opacity-80 transition-colors">Contribuição ODS</Link></li>
            </ul>
          </div>
          <div className="md:hidden">
            <button className="p-2 rounded hover:bg-primary-foreground/10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
