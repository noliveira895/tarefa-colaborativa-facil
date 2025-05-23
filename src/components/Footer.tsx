
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="font-bold text-lg mb-2">Ciência de Dados</h3>
            <p className="text-sm opacity-80">Explorando o mundo dos dados e suas possibilidades</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Links Rápidos</h4>
            <ul className="text-sm space-y-1">
              <li><Link to="/" className="hover:underline">Início</Link></li>
              <li><Link to="/sobre" className="hover:underline">Sobre a Profissão</Link></li>
              <li><Link to="/dicas" className="hover:underline">Dicas e Tendências</Link></li>
              <li><Link to="/contatos" className="hover:underline">Redes e Contatos</Link></li>
              <li><Link to="/ods" className="hover:underline">Contribuição ODS</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-primary-foreground/20 text-sm opacity-80 text-center">
          <p>&copy; {currentYear} Ciência de Dados. Todos os direitos reservados.</p>
          <p className="mt-1">Desenvolvido para fins educacionais.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
