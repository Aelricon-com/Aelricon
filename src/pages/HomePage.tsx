import { Video, Camera, CreditCard as Edit, Megaphone, Share2, Box, Code, Sparkles } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import Button from '../components/Button';
import FadeInSection from '../components/FadeInSection';

interface HomePageProps {
  onGetQuote: () => void;
  onViewPortfolio: () => void;
}

export default function HomePage({ onGetQuote, onViewPortfolio }: HomePageProps) {
  const services = [
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Professional video editing using industry-leading software like After Effects, DaVinci Resolve, and Premiere Pro.'
    },
    {
      icon: Camera,
      title: 'Videography & Photography',
      description: 'Capture stunning moments with our professional videography and photography services for any occasion.'
    },
    {
      icon: Edit,
      title: 'Photo Editing',
      description: 'Expert photo editing and retouching using Adobe Photoshop and Illustrator for flawless results.'
    },
    {
      icon: Megaphone,
      title: 'Ads Running',
      description: 'Strategic ad campaigns that drive results and maximize your ROI across multiple platforms.'
    },
    {
      icon: Share2,
      title: 'Social Media Management',
      description: 'Complete social media management to grow your brand presence and engage your audience.'
    },
    {
      icon: Box,
      title: '3D Modeling',
      description: 'Create stunning 3D models and animations using Blender for your projects and visualizations.'
    },
    {
      icon: Code,
      title: 'AI Website Development',
      description: 'Cutting-edge website development powered by AI technology for modern, responsive web solutions.'
    },
    {
      icon: Sparkles,
      title: 'Content Creation',
      description: 'Engaging content creation that tells your story and connects with your audience effectively.'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="min-h-screen flex items-center justify-center px-6 relative">
        <FadeInSection className="text-center max-w-5xl">
          <h1 className="text-7xl md:text-8xl font-bold text-[#EDEDED] mb-6 tracking-tight">
            Aelricon Productions
          </h1>
          <p className="text-2xl md:text-3xl text-[#EDEDED]/80 mb-4">
            Elevating Brands Through Creative Excellence
          </p>
          <p className="text-lg text-[#EDEDED]/60 mb-12 max-w-2xl mx-auto">
            International creative agency specializing in content creation, video production,
            social media management, and cutting-edge digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button onClick={onGetQuote} variant="primary">
              Get a Quote
            </Button>
            <Button onClick={onViewPortfolio} variant="secondary">
              View Portfolio
            </Button>
          </div>
        </FadeInSection>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#EDEDED]/30 rounded-full p-2">
            <div className="w-1.5 h-3 bg-[#DA0037] rounded-full animate-scroll"></div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-[#EDEDED] mb-6">
                Our Services
              </h2>
              <p className="text-xl text-[#EDEDED]/70 max-w-3xl mx-auto">
                From concept to execution, we deliver exceptional creative solutions
                tailored to your brand's unique needs.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <FadeInSection key={service.title} delay={index * 100}>
                <ServiceCard {...service} />
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#DA0037]/5 to-transparent"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <FadeInSection>
            <div className="text-center">
              <h2 className="text-5xl md:text-6xl font-bold text-[#EDEDED] mb-8">
                Industry-Leading Tools
              </h2>
              <p className="text-xl text-[#EDEDED]/70 mb-12">
                We utilize the best software in the industry to deliver outstanding results
              </p>

              <div className="flex flex-wrap justify-center gap-6 mb-16">
                {[
                  'After Effects', 'DaVinci Resolve', 'Premiere Pro', 'Blender',
                  'Adobe Audition', 'Adobe Illustrator', 'Sony Vegas Pro', 'Adobe Photoshop'
                ].map((software, index) => (
                  <FadeInSection key={software} delay={index * 50}>
                    <div className="bg-[#171717] border border-[#444444] rounded-lg px-6 py-3 hover:border-[#DA0037] transition-colors duration-300">
                      <span className="text-[#EDEDED]/80 font-medium">{software}</span>
                    </div>
                  </FadeInSection>
                ))}
              </div>

              <Button onClick={onGetQuote} variant="primary">
                Start Your Project
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
