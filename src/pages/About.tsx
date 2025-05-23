
import { CheckCircle2, Code2, Database, Network } from "lucide-react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Sobre a Profissão</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            O cientista de dados é um profissional especializado na análise e interpretação de grandes volumes de dados complexos. Com formação multidisciplinar que combina matemática, estatística, programação e conhecimento específico de negócios, este profissional transforma dados brutos em insights valiosos, auxiliando empresas e organizações a tomar decisões mais precisas e baseadas em evidências.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Responsabilidades Principais</h2>
          
          <div className="space-y-4 mb-8">
            {[
              {
                icon: <Database className="h-5 w-5" />,
                title: "Coleta e processamento de dados",
                description: "Obtém, limpa e organiza dados de diversas fontes, preparando-os para análise."
              },
              {
                icon: <Code2 className="h-5 w-5" />,
                title: "Análise estatística e modelagem",
                description: "Aplica técnicas estatísticas e algoritmos avançados para identificar padrões e tendências."
              },
              {
                icon: <Network className="h-5 w-5" />,
                title: "Desenvolvimento de algoritmos",
                description: "Cria algoritmos de machine learning e inteligência artificial para resolver problemas específicos."
              },
              {
                icon: <CheckCircle2 className="h-5 w-5" />,
                title: "Comunicação de resultados",
                description: "Traduz análises técnicas em insights compreensíveis para stakeholders não técnicos."
              }
            ].map((item, index) => (
              <div key={index} className="flex">
                <div className="mr-4 mt-1 text-primary">{item.icon}</div>
                <div>
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4">Formação e Habilidades</h2>
          
          <p className="mb-4">
            A formação em Ciência de Dados geralmente envolve:
          </p>
          
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Graduação em áreas como Ciência da Computação, Estatística, Matemática, Engenharia ou campos relacionados;</li>
            <li>Pós-graduação ou especialização em Ciência de Dados, Machine Learning ou áreas correlatas;</li>
            <li>Conhecimentos sólidos em linguagens de programação como Python e R;</li>
            <li>Domínio de ferramentas de análise e visualização de dados;</li>
            <li>Compreensão de técnicas estatísticas e algoritmos de machine learning;</li>
            <li>Habilidades em bancos de dados SQL e NoSQL.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4">Mercado de Trabalho</h2>
          
          <p className="mb-4">
            O mercado para profissionais de Ciência de Dados está em plena expansão. Com a crescente digitalização dos negócios e o aumento exponencial na geração de dados, organizações de todos os tamanhos e setores buscam cientistas de dados para extrair valor de suas informações.
          </p>
          
          <p className="mb-4">
            De acordo com pesquisas recentes, a demanda por cientistas de dados deve continuar crescendo nos próximos anos, com salários competitivos e oportunidades de carreira em diversos setores como tecnologia, finanças, saúde, varejo, manufatura, entre outros.
          </p>

          <div className="bg-muted p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold mb-2">Impacto Social</h3>
            <p>
              Os cientistas de dados têm um papel fundamental na resolução de problemas complexos da sociedade. Desde o desenvolvimento de modelos preditivos para diagnósticos médicos até sistemas de otimização para redução do impacto ambiental, a ciência de dados está contribuindo para um mundo melhor e mais sustentável.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
