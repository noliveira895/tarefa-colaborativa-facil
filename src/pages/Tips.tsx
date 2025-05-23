
import { TrendingUp, BookOpen, Award, Code, CheckCircle, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Tips = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Dicas e Tendências em Ciência de Dados</h1>
      
      {/* Mercado de Trabalho */}
      <section className="mb-12">
        <div className="flex items-center mb-6">
          <TrendingUp className="h-8 w-8 mr-3 text-primary" />
          <h2 className="text-3xl font-bold">Mercado de Trabalho</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Oportunidades de Carreira</CardTitle>
              <CardDescription>Principais áreas de atuação para cientistas de dados</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500 mt-0.5" />
                  <span><strong>Data Scientist:</strong> Análise avançada e desenvolvimento de modelos preditivos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500 mt-0.5" />
                  <span><strong>Machine Learning Engineer:</strong> Implementação e deploy de modelos ML</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500 mt-0.5" />
                  <span><strong>Data Analyst:</strong> Análise de dados e criação de dashboards</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500 mt-0.5" />
                  <span><strong>Business Intelligence:</strong> Inteligência de negócios e relatórios estratégicos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500 mt-0.5" />
                  <span><strong>Data Engineer:</strong> Infraestrutura e pipelines de dados</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Setores em Alta</CardTitle>
              <CardDescription>Indústrias com maior demanda por cientistas de dados</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500 mt-0.5" />
                  <span><strong>Fintech:</strong> Análise de risco, detecção de fraudes, algoritmos de trading</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500 mt-0.5" />
                  <span><strong>E-commerce:</strong> Sistemas de recomendação, análise de comportamento</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500 mt-0.5" />
                  <span><strong>Saúde:</strong> Medicina preditiva, análise de imagens médicas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500 mt-0.5" />
                  <span><strong>Telecomunicações:</strong> Otimização de redes, análise de churn</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500 mt-0.5" />
                  <span><strong>Agronegócio:</strong> Agricultura de precisão, otimização de safras</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Alert>
          <TrendingUp className="h-4 w-4" />
          <AlertDescription>
            <strong>Dica de Mercado:</strong> O Brasil tem uma das maiores demandas por cientistas de dados da América Latina, 
            com salários iniciais entre R$ 5.000 a R$ 8.000 e podendo chegar a R$ 25.000+ para níveis sênior.
          </AlertDescription>
        </Alert>
      </section>

      {/* Certificações */}
      <section className="mb-12">
        <div className="flex items-center mb-6">
          <Award className="h-8 w-8 mr-3 text-primary" />
          <h2 className="text-3xl font-bold">Certificações Importantes</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Certificações Cloud</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                  <span>AWS Certified Machine Learning</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                  <span>Google Cloud Professional Data Engineer</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                  <span>Microsoft Azure Data Scientist Associate</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Certificações Especializadas</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                  <span>TensorFlow Developer Certificate</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                  <span>Databricks Certified Data Scientist</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                  <span>Tableau Desktop Specialist</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Certificações Acadêmicas</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                  <span>IBM Data Science Professional Certificate</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                  <span>Coursera Deep Learning Specialization</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                  <span>edX MicroMasters in Statistics and Data Science</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tecnologias Emergentes */}
      <section className="mb-12">
        <div className="flex items-center mb-6">
          <Code className="h-8 w-8 mr-3 text-primary" />
          <h2 className="text-3xl font-bold">Tecnologias Emergentes</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Inteligência Artificial Generativa</CardTitle>
              <CardDescription>As tecnologias que estão revolucionando o campo</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Large Language Models (LLMs)</h4>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="secondary">GPT-4</Badge>
                    <Badge variant="secondary">Claude</Badge>
                    <Badge variant="secondary">LLaMA</Badge>
                    <Badge variant="secondary">Gemini</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Modelos de linguagem que revolucionam processamento de texto e geração de conteúdo.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Computer Vision Avançada</h4>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="secondary">DALL-E</Badge>
                    <Badge variant="secondary">Stable Diffusion</Badge>
                    <Badge variant="secondary">Midjourney</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Geração e manipulação de imagens através de inteligência artificial.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>MLOps e Infraestrutura</CardTitle>
              <CardDescription>Ferramentas para produção de modelos ML</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Plataformas MLOps</h4>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="secondary">MLflow</Badge>
                    <Badge variant="secondary">Kubeflow</Badge>
                    <Badge variant="secondary">Weights & Biases</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Ferramentas para gerenciar o ciclo de vida completo de modelos ML.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Edge Computing</h4>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="secondary">TensorFlow Lite</Badge>
                    <Badge variant="secondary">ONNX</Badge>
                    <Badge variant="secondary">CoreML</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Execução de modelos ML diretamente em dispositivos móveis e IoT.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tendências Futuras */}
      <section>
        <div className="flex items-center mb-6">
          <Globe className="h-8 w-8 mr-3 text-primary" />
          <h2 className="text-3xl font-bold">Tendências para 2024-2025</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>AI Responsável</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                Crescimento da demanda por práticas éticas em IA, incluindo fairness, transparência e explicabilidade de modelos.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge>Explainable AI</Badge>
                <Badge>Bias Detection</Badge>
                <Badge>AI Ethics</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>AutoML Evolution</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                Democratização da ciência de dados através de ferramentas de machine learning automatizado.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge>Auto-Feature Engineering</Badge>
                <Badge>Neural Architecture Search</Badge>
                <Badge>Low-Code ML</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quantum Computing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                Primeiras aplicações práticas de computação quântica em problemas de otimização e ML.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge>Quantum ML</Badge>
                <Badge>Optimization</Badge>
                <Badge>Cryptography</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Tips;
