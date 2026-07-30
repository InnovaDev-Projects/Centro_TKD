import { Shield, Flame, Sparkles, UserCheck, Activity } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { FadeIn } from "../ui/FadeIn";

const activities = [
  {
    title: "Taekwon-Do ITF",
    icon: <Shield size={24} className="text-red-500" strokeWidth={2} />,
  },
  {
    title: "Kick Boxing",
    icon: <Flame size={24} className="text-red-500" strokeWidth={2} />,
  },
  {
    title: "Acrobacia en telas",
    icon: <Sparkles size={24} className="text-red-500" strokeWidth={2} />,
  },
  {
    title: "Entrenamiento Semi Personalizado",
    icon: <UserCheck size={24} className="text-red-500" strokeWidth={2} />,
  },
  {
    title: "Entrenamiento funcional",
    icon: <Activity size={24} className="text-red-500" strokeWidth={2} />,
  },
];

export const Features = () => {
  return (
    <section id="features" aria-label="Actividades" className="py-20 sm:py-28 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <FadeIn>
          <SectionHeading tag="Disciplinas y Clases">
            Nuestras Actividades
          </SectionHeading>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {activities.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.05}>
              <div className="bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700 p-6 rounded-xl text-center h-full flex flex-col items-center justify-center transition-all duration-200 hover:bg-zinc-900 group">
                <div className="w-12 h-12 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-4 group-hover:border-red-900/50 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-sm font-bold text-white font-heading tracking-wide">
                  {item.title}
                </h3>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
