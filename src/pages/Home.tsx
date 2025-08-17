import { ChooseSection, ClientSection, ContactSection, HeroSection, PlanSection } from '../components'

export default function Home() {

    return (
        <>
            <section id='home' className="relative pl-4">
                <HeroSection />
            </section>
            <section id='plan' className="relative">
                <PlanSection />
            </section>
            <section id='about' className="relative">
                <ChooseSection />
            </section>
            <section id='client' className="relative">
                <ClientSection />
            </section>
            <section id='contact' className="relative py-10 px-4">
                <ContactSection />
            </section>
        </>
    )
}
