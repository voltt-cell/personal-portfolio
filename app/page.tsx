import { ProfileCard } from "@/components/shared/profile-card";
import { AboutSection } from "@/components/shared/sections/about-section";
import { ProjectsSection } from "@/components/shared/sections/projects-section";
import { SkillsSection } from "@/components/shared/sections/skills-section";

export default function Home() {
  return (
    <main className="p-4 md:p-8">
      <div className="mx-auto max-w-6xl grid gap-8 md:grid-cols-[350px_1fr]">
        <aside className="space-y-6">
          <ProfileCard />
        </aside>
        <div className="space-y-12">
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
        </div>
      </div>
    </main>
  );
}
