
import { ChevronRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ODS = () => {
  const odsContributions = [
    {
      number: 4,
      title: "Educação de Qualidade",
      description: "A Ciência de Dados contribui para a educação por meio da análise de dados educacionais, personalização do aprendizado e identificação de fatores de sucesso acadêmico.",
      examples: [
        "Sistemas de recomendação de conteúdo educacional personalizado baseado em padrões de aprendizagem",
        "Análise preditiva para identificar estudantes em risco de evasão escolar",
        "Otimização de currículos baseada em resultados de aprendizagem"
      ]
    },
    {
      number: 8,
      title: "Trabalho Decente e Crescimento Econômico",
      description: "Cientistas de dados impulsionam a produtividade e eficiência em organizações, gerando novas oportunidades de trabalho e promovendo crescimento econômico sustentável.",
      examples: [
        "Automação inteligente de processos repetitivos",
        "Análise de mercado para identificação de tendências e oportunidades",
        "Otimização de cadeias de suprimentos para reduzir desperdício"
      ]
    },
    {
      number: 9,
      title: "Indústria, Inovação e Infraestrutura",
      description: "A Ciência de Dados é fundamental para desenvolver infraestruturas resilientes, promover industrialização inclusiva e fomentar inovação.",
      examples: [
        "Manutenção preditiva para infraestruturas críticas",
        "Otimização de processos industriais para reduzir consumo de recursos",
        "Análise de dados para desenvolvimento de produtos inovadores"
      ]
    },
    {
      number: 11,
      title: "Cidades e Comunidades Sustentáveis",
      description: "Dados são essenciais para o planejamento urbano inteligente, sistemas de transporte eficientes e gestão sustentável de recursos em cidades.",
      examples: [
        "Sistemas de controle de tráfego em tempo real",
        "Otimização de rotas de transporte público para redução de emissões",
        "Monitoramento e gestão eficiente de recursos hídricos e energéticos"
      ]
    },
    {
      number: 13,
      title: "Ação Contra a Mudança Global do Clima",
      description: "Cientistas de dados ajudam a modelar impactos climáticos, otimizar uso de recursos e desenvolver estratégias de mitigação baseadas em evidências.",
      examples: [
        "Modelos de previsão climática mais precisos",
        "Análise de eficiência energética e identificação de oportunidades de redução de emissões",
        "Monitoramento de desmatamento e degradação ambiental por imagens de satélite"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">Contribuição para os ODS</h1>
      
      <div className="max-w-4xl mx-auto mb-12">
        <p className="text-lg">
          Os Objetivos de Desenvolvimento Sustentável (ODS) da ONU representam um chamado global à ação para acabar com a pobreza, proteger o meio ambiente e garantir paz e prosperidade. A Ciência de Dados tem um papel fundamental para atingir estes objetivos, fornecendo insights baseados em evidências, otimizando recursos e permitindo soluções inovadoras para desafios globais.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {odsContributions.map((ods, idx) => (
          <Card key={idx}>
            <CardHeader className="pb-3">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mr-4">
                  {ods.number}
                </div>
                <div>
                  <CardTitle>{ods.title}</CardTitle>
                  <CardDescription>ODS {ods.number}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{ods.description}</p>
              <h4 className="font-medium mb-2">Exemplos práticos:</h4>
              <ul className="space-y-2">
                {ods.examples.map((example, exIdx) => (
                  <li key={exIdx} className="flex">
                    <ChevronRight className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span>{example}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Compromisso Ético com os Dados</h2>
        
        <div className="bg-muted rounded-lg p-6 mb-8">
          <p className="mb-4">
            Como cientistas de dados, temos a responsabilidade de garantir que nossas análises e modelos contribuam positivamente para o desenvolvimento sustentável e não agravem desigualdades existentes ou criem novos problemas sociais ou ambientais.
          </p>
          
          <h3 className="font-semibold mb-2">Nossos princípios:</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Garantir que os algoritmos sejam justos e não perpetuem vieses socioeconômicos</li>
            <li>Considerar o impacto ambiental das soluções de análise de dados e IA</li>
            <li>Priorizar a privacidade e segurança dos dados</li>
            <li>Ser transparente sobre limitações e incertezas nos modelos</li>
            <li>Buscar soluções que beneficiem toda a sociedade, especialmente os mais vulneráveis</li>
          </ul>
        </div>
        
        <h2 className="text-2xl font-bold mb-6">Projetos de Impacto</h2>
        
        <div className="space-y-6">
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Otimização de Recursos Hídricos</h3>
            <p className="mb-3">
              Desenvolvimento de um sistema de análise de dados para otimizar o uso de água na agricultura, reduzindo o desperdício e aumentando a produtividade em áreas de escassez hídrica.
            </p>
            <div className="text-sm text-muted-foreground">
              Contribui para os ODS 6 (Água Potável e Saneamento), 2 (Fome Zero) e 13 (Ação Contra a Mudança Global do Clima)
            </div>
          </div>
          
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Previsão de Epidemias</h3>
            <p className="mb-3">
              Aplicação de modelos preditivos para antecipar surtos de doenças com base em dados climáticos, mobilidade populacional e informações epidemiológicas históricas.
            </p>
            <div className="text-sm text-muted-foreground">
              Contribui para o ODS 3 (Saúde e Bem-estar) e 10 (Redução das Desigualdades)
            </div>
          </div>
          
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Combate à Desinformação</h3>
            <p className="mb-3">
              Desenvolvimento de algoritmos para detecção de notícias falsas e desinformação sobre temas críticos como saúde pública e mudanças climáticas.
            </p>
            <div className="text-sm text-muted-foreground">
              Contribui para o ODS 16 (Paz, Justiça e Instituições Eficazes) e 4 (Educação de Qualidade)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ODS;
