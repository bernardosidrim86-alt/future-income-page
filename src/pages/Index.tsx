import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, TrendingUp, Globe, Zap, CheckCircle2, Star } from "lucide-react";
import heroImage from "@/assets/hero-ai.jpg";

const Index = () => {
  const handleCTAClick = () => {
    window.open("https://pay.kirvano.com/5ac7af0f-0c2c-49ae-af9f-f7db5c7defc2?aff=69fbee4e-a35d-4c8e-8cf3-532793eb2a63", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm fixed top-0 w-full z-50 bg-background/80">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            IA Academy
          </h2>
          <Button onClick={handleCTAClick} variant="hero" size="default">
            Quero Aprender Agora
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background"></div>
        </div>

        {/* Gradient Overlay Effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-primary/20 backdrop-blur-sm mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Método Comprovado</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Aprenda a Ganhar Dinheiro com{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-pulse">
                Inteligência Artificial
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              O método simples e comprovado para transformar IA em renda real.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button onClick={handleCTAClick} variant="hero" size="xl" className="w-full sm:w-auto">
                Quero Começar Agora
              </Button>
            </div>

            <div className="flex items-center justify-center gap-6 pt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Sem experiência necessária</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Resultados comprovados</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              O Que Você Vai Conquistar
            </h2>
            <p className="text-muted-foreground text-lg">
              Domine as ferramentas de IA e transforme seu potencial em renda real
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,217,255,0.2)]">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lucre com Ferramentas de IA</h3>
              <p className="text-muted-foreground">
                Aprenda a usar as principais IAs para criar produtos digitais que vendem.
              </p>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-secondary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Crie Negócios Automáticos</h3>
              <p className="text-muted-foreground">
                Configure sistemas que trabalham por você 24/7, gerando renda passiva.
              </p>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,217,255,0.2)]">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ganhe Sem Aparecer</h3>
              <p className="text-muted-foreground">
                Crie conteúdo e produtos usando IA, mantendo sua privacidade total.
              </p>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-secondary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Trabalhe de Onde Quiser</h3>
              <p className="text-muted-foreground">
                Liberdade geográfica total. Só precisa de um computador e internet.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Veja Quem Já Está Lucrando
            </h2>
            <p className="text-muted-foreground text-lg">
              Alunos reais que começaram do zero e hoje têm resultados consistentes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-4">
                "Nunca imaginei que conseguiria ganhar dinheiro usando IA. Em 2 meses já estava faturando mais de R$ 3.000 por mês!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">MC</span>
                </div>
                <div>
                  <p className="font-semibold">Maria Clara</p>
                  <p className="text-sm text-muted-foreground">Professora, 34 anos</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-4">
                "Comecei sem saber nada de tecnologia. Hoje vendo infoprodutos criados com IA e já superei meu salário antigo."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <span className="text-sm font-semibold text-secondary">RS</span>
                </div>
                <div>
                  <p className="font-semibold">Roberto Silva</p>
                  <p className="text-sm text-muted-foreground">Ex-vendedor, 41 anos</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-4">
                "O método é realmente simples e funciona. Criei meu primeiro produto digital em uma semana e já tive as primeiras vendas."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">AC</span>
                </div>
                <div>
                  <p className="font-semibold">Ana Costa</p>
                  <p className="text-sm text-muted-foreground">Estudante, 23 anos</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Scarcity Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Card className="max-w-3xl mx-auto p-12 bg-card/80 backdrop-blur-sm border-primary/30 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 mb-6">
              <Zap className="w-4 h-4 text-destructive" />
              <span className="text-sm font-semibold text-destructive">Vagas Limitadas</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Não Perca Esta Oportunidade
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              As vagas para novos alunos estão quase esgotadas. Garanta a sua antes que seja tarde.
            </p>
            
            <Button onClick={handleCTAClick} variant="hero" size="xl" className="w-full sm:w-auto">
              Quero Garantir Minha Vaga Agora
            </Button>

            <p className="text-sm text-muted-foreground mt-6">
              Método criado por especialistas que já lucram usando IA
            </p>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                IA Academy
              </h3>
              <p className="text-sm text-muted-foreground">
                Como Ganhar Dinheiro com Inteligência Artificial
              </p>
            </div>
            
            <Button onClick={handleCTAClick} variant="hero" size="lg">
              Quero Aprender Agora
            </Button>
          </div>
          
          <div className="text-center mt-8 pt-8 border-t border-border/30">
            <p className="text-sm text-muted-foreground">
              © 2025 IA Academy. Transforme IA em renda real.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
