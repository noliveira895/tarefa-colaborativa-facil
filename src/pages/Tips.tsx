
import { BookOpen, BriefcaseBusiness, Rocket, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Tips = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Dicas e Tendências</h1>
      
      <Tabs defaultValue="market" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="market">Mercado</TabsTrigger>
          <TabsTrigger value="certifications">Certificações</TabsTrigger>
          <TabsTrigger value="technologies">Tecnologias Emergentes</TabsTrigger>
        </TabsList>
        
        <TabsContent value="market">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="mr-2 h-5 w-5" />
                Tendências de Mercado
              </CardTitle>
              <CardDescription>
                Insights sobre a evolução do mercado de trabalho em Ciência de Dados
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Crescimento da Demanda</h3>
                  <p>
                    De acordo com relatórios recentes, a demanda por cientistas de dados continua em 
                    ascensão, com um crescimento projetado de 28% até 2026. Com a crescente 
                    adoção de soluções baseadas em dados em todos os setores, empresas estão 
                    competindo pelos melhores talentos.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Setores em Expansão</h3>
                  <p className="mb-3">
                    Embora tradicionalmente concentrada no setor de tecnologia, a ciência de dados 
                    está se expandindo rapidamente para outras indústrias:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Saúde: Análise de dados clínicos, medicina personalizada</li>
                    <li>Finanças: Detecção de fraudes, análise de risco</li>
                    <li>Varejo: Personalização de experiência, otimização de estoque</li>
                    <li>Agricultura: Agricultura de precisão, previsão de colheitas</li>
                    <li>Setor Público: Políticas baseadas em evidências, análise de impacto social</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Perfil Profissional Valorizado</h3>
                  <p className="mb-3">
                    Empresas estão buscando profissionais com:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Combinação de habilidades técnicas e conhecimento de negócios</li>
                    <li>Experiência em comunicação de resultados para públicos não técnicos</li>
                    <li>Capacidade de colaboração em equipes multidisciplinares</li>
                    <li>Entendimento ético sobre o uso de dados</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="certifications">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="mr-2 h-5 w-5" />
                Certificações Recomendadas
              </CardTitle>
              <CardDescription>
                Certificações que podem impulsionar sua carreira em Ciência de Dados
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    {
                      title: "IBM Data Science Professional",
                      provider: "IBM / Coursera",
                      description: "Certificação completa que aborda desde conceitos básicos até ferramentas avançadas para análise e visualização de dados."
                    },
                    {
                      title: "Microsoft Certified: Azure Data Scientist Associate",
                      provider: "Microsoft",
                      description: "Focada em implementação de soluções de ciência de dados na plataforma Azure, incluindo machine learning."
                    },
                    {
                      title: "Google Professional Data Engineer",
                      provider: "Google Cloud",
                      description: "Certificação para profissionais que projetam e constroem sistemas de processamento de dados na Google Cloud."
                    },
                    {
                      title: "AWS Certified Data Analytics - Specialty",
                      provider: "Amazon Web Services",
                      description: "Voltada para design e manutenção de soluções de análise de dados na AWS."
                    },
                    {
                      title: "Certified Data Scientist (CDS)",
                      provider: "Data Science Council of America",
                      description: "Avalia competências em aprendizado de máquina, big data e análise estatística."
                    },
                    {
                      title: "SAS Certified Data Scientist",
                      provider: "SAS",
                      description: "Série de certificações que atestam habilidades em análise avançada usando ferramentas SAS."
                    },
                  ].map((cert, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <h3 className="font-semibold text-lg">{cert.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">Fornecedor: {cert.provider}</p>
                      <p className="text-sm">{cert.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="bg-muted rounded-lg p-4 mt-4">
                  <h3 className="font-semibold mb-2">Dica Profissional</h3>
                  <p>
                    Além das certificações formais, desenvolva um portfólio de projetos práticos que demonstrem suas habilidades. Projetos no GitHub, participações em competições como Kaggle e contribuições para projetos de código aberto são altamente valorizados pelos recrutadores.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="technologies">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Rocket className="mr-2 h-5 w-5" />
                Tecnologias Emergentes
              </CardTitle>
              <CardDescription>
                Novas tecnologias e ferramentas que estão moldando o futuro da Ciência de Dados
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">IA Generativa</h3>
                  <p>
                    Modelos como GPT, BERT e Stable Diffusion estão revolucionando a geração de conteúdo baseado em dados. Cientistas de dados que dominam técnicas de prompt engineering e fine-tuning destes modelos estão em alta demanda.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">MLOps</h3>
                  <p>
                    A implementação de práticas DevOps para machine learning tem se tornado essencial para garantir que modelos possam ser deployados de forma confiável e escalável em ambientes de produção. Ferramentas como MLflow, Kubeflow e DVC estão ganhando adoção.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Data Governance e Ética</h3>
                  <p>
                    Com o aumento das preocupações sobre privacidade e uso ético de dados, ferramentas para garantir compliance, rastreabilidade e explicabilidade de modelos têm ganhado importância. A capacidade de construir modelos transparentes e auditáveis é cada vez mais valorizada.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Edge Analytics</h3>
                  <p>
                    A capacidade de realizar análises de dados em dispositivos edge (próximos à fonte de dados) está crescendo com o avanço de hardware especializado. Isso reduz a latência e permite aplicações em tempo real em IoT, veículos autônomos e wearables.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-muted rounded-lg p-4">
                    <h4 className="font-medium mb-2">Ferramentas em Ascensão</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Databricks (Plataforma unificada para dados e IA)</li>
                      <li>dbt (Transformação de dados)</li>
                      <li>Dagster/Airflow (Orquestração de pipelines)</li>
                      <li>Ray (Computação distribuída para IA)</li>
                      <li>Feature Stores (Tecton, Feast, Hopsworks)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted rounded-lg p-4">
                    <h4 className="font-medium mb-2">Linguagens e Frameworks</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Python continua dominante (PyTorch, TensorFlow)</li>
                      <li>Julia (para computação científica de alto desempenho)</li>
                      <li>Rust (para componentes de performance crítica)</li>
                      <li>JAX (para pesquisa em ML e diferenciação automática)</li>
                      <li>Elixir (para processamento de dados em tempo real)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="max-w-4xl mx-auto mt-12">
        <h2 className="text-2xl font-bold mb-6">Habilidades para se Destacar</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Code2 className="mr-2 h-5 w-5" />
                Habilidades Técnicas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                  <span>Programação (Python, R, SQL)</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                  <span>Estatística e Matemática</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                  <span>Machine Learning</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                  <span>Big Data (Spark, Hadoop)</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                  <span>Cloud Computing</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <BriefcaseBusiness className="mr-2 h-5 w-5" />
                Habilidades de Negócios
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                  <span>Comunicação Eficaz</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                  <span>Storytelling com Dados</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                  <span>Entendimento de Domínio</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                  <span>Resolução de Problemas</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                  <span>Trabalho em Equipe</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <TrendingUp className="mr-2 h-5 w-5" />
                Habilidades Emergentes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                  <span>MLOps e DevOps</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                  <span>Ética em IA e Dados</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                  <span>Computação em Nuvem</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                  <span>Prompt Engineering</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                  <span>Design de Sistemas Resilientes</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Tips;
