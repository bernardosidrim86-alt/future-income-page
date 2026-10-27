import { Globe } from "lucide-react";
import { ProfileCard } from "@/components/profile/ProfileCard";
import { ContentTabs } from "@/components/profile/ContentTabs";

const Index = () => (
  <div className="min-h-screen bg-backdrop">
    <main className="mx-auto min-h-screen w-full max-w-[480px] bg-background px-4 pb-10">
      <header className="flex items-center justify-between py-3">
        <span className="text-xl font-bold italic text-foreground">
          seulogo<span className="text-primary">.</span>
        </span>
        <button aria-label="Idioma" className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground">
          <Globe className="h-4 w-4" />
        </button>
      </header>
      <ProfileCard />
      <ContentTabs />
    </main>
  </div>
);

export default Index;
