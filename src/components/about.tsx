import SectionTitle from "./sectionTitle";
import { TextReveal } from "./ui/text-reveal";

export function About() {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-white pt-20">
      <SectionTitle
        topTitle="About"
        title="what to know about Transitions"
      />
      <TextReveal>
        Enterprise Funeral Services (EFSG) trading as Transitions is Ghana&apos;s premier 
        funeral service provider. From our state-of-the-art funeral home in Haatso, 
        we deliver comprehensive funeral services with dignity and compassion. Our 
        offerings include pre-funeral planning, mortuary services, and complete funeral 
        arrangements. With our innovative funeral insurance plan, families receive 
        world-class services including modern facilities, professional undertaking, 
        and elegant reception venues. Our internationally trained team ensures every 
        detail is handled with care, allowing families to focus on honoring their 
        loved ones&apos; memory.
      </TextReveal>
    </div>
  );
}

