
import { ArrowRight, BarChart3, Brain, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
            Ciência de Dados
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
            Transformando dados em conhecimento e soluções para um mundo melhor
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/sobre">
                Conheça a profissão <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/dicas">Explore tendências</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">O que faz um Cientista de Dados?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <BarChart3 className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>Análise de Dados</CardTitle>
              <CardDescription>
                Coleta, processa e analisa grandes volumes de dados para extrair insights valiosos.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Utiliza técnicas estatísticas e ferramentas especializadas para transformar dados brutos em informações úteis para a tomada de decisões.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Brain className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>Machine Learning</CardTitle>
              <CardDescription>
                Desenvolve modelos preditivos e algoritmos de aprendizado de máquina.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Cria sistemas inteligentes capazes de aprender com dados e fazer previsões ou tomar decisões sem intervenção humana explícita.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Lightbulb className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>Visualização de Dados</CardTitle>
              <CardDescription>
                Transforma informações complexas em representações visuais compreensíveis.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Comunica resultados de forma clara e eficaz através de gráficos, dashboards e outras visualizações que facilitam o entendimento.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-muted rounded-lg p-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para explorar o mundo dos dados?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Descubra as oportunidades, desafios e o impacto positivo que a Ciência de Dados pode ter na sociedade e no seu futuro profissional.
          </p>
          <Button asChild size="lg">
            <Link to="/sobre">Saiba mais sobre a carreira</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
