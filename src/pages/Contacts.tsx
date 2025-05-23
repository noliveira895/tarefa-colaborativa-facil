
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

const Contacts = () => {
  const teamMembers = [
    {
      name: "Ana Silva",
      role: "Cientista de Dados",
      bio: "Especialista em machine learning e visualização de dados com experiência em projetos de saúde.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80",
      social: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        twitter: "https://twitter.com"
      }
    },
    {
      name: "Carlos Oliveira",
      role: "Engenheiro de Dados",
      bio: "Focado em arquitetura de dados e construção de pipelines ETL para análise em larga escala.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=256&q=80",
      social: {
        linkedin: "https://linkedin.com",
        github: "https://github.com"
      }
    },
    {
      name: "Mariana Costa",
      role: "Analista de Dados",
      bio: "Especialista em análise estatística e desenvolvimento de dashboards para tomada de decisão.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=256&q=80",
      social: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        mail: "mailto:example@example.com"
      }
    },
    {
      name: "Pedro Santos",
      role: "ML Engineer",
      bio: "Desenvolve e implementa modelos de machine learning em ambientes de produção.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80",
      social: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        twitter: "https://twitter.com"
      }
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">Redes e Contatos</h1>
      
      <div className="max-w-4xl mx-auto mb-12">
        <p className="text-lg text-center">
          Conheça nossa equipe de profissionais e entre em contato para saber mais sobre a área de Ciência de Dados.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {teamMembers.map((member, idx) => (
          <Card key={idx} className="overflow-hidden">
            <CardHeader className="p-0">
              <AspectRatio ratio={1/1}>
                <img 
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            </CardHeader>
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg">{member.name}</h3>
              <p className="text-sm text-muted-foreground mb-2">{member.role}</p>
              <p className="text-sm">{member.bio}</p>
            </CardContent>
            <CardFooter className="flex gap-2 pt-0">
              {member.social.linkedin && (
                <Button variant="ghost" size="icon" asChild>
                  <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </Button>
              )}
              {member.social.github && (
                <Button variant="ghost" size="icon" asChild>
                  <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
              )}
              {member.social.twitter && (
                <Button variant="ghost" size="icon" asChild>
                  <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </a>
                </Button>
              )}
              {member.social.mail && (
                <Button variant="ghost" size="icon" asChild>
                  <a href={member.social.mail}>
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="max-w-3xl mx-auto bg-muted rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Entre em Contato</h2>
        <p className="mb-6">
          Tem alguma pergunta sobre Ciência de Dados ou quer saber mais sobre nossa experiência nesta área? Entre em contato conosco!
        </p>
        <Button asChild size="lg">
          <a href="mailto:contato@cienciadedados.com">
            <Mail className="mr-2 h-4 w-4" />
            contato@cienciadedados.com
          </a>
        </Button>
        
        <div className="mt-8 pt-6 border-t border-muted-foreground/20">
          <h3 className="font-semibold mb-3">Siga-nos nas redes sociais</h3>
          <div className="flex justify-center gap-4">
            <Button variant="outline" size="icon" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
