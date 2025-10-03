import { ArrowLeft, Play, Image as ImageIcon } from 'lucide-react';
import Button from '../components/Button';
import FadeInSection from '../components/FadeInSection';

interface PortfolioPageProps {
  onBack: () => void;
  onGetQuote: () => void;
}

export default function PortfolioPage({ onBack, onGetQuote }: PortfolioPageProps) {
  const portfolioItems = [
    {
      id: 1,
      type: 'video',
      title: 'Brand Commercial',
      category: 'Video Production',
      thumbnail: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      type: 'photo',
      title: 'Product Photography',
      category: 'Photography',
      thumbnail: 'https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      type: 'video',
      title: 'Event Coverage',
      category: 'Videography',
      thumbnail: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      type: 'photo',
      title: 'Editorial Shoot',
      category: 'Photography',
      thumbnail: 'https://images.pexels.com/photos/2072183/pexels-photo-2072183.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 5,
      type: 'video',
      title: 'Social Media Ad',
      category: 'Content Creation',
      thumbnail: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 6,
      type: 'photo',
      title: '3D Visualization',
      category: '3D Modeling',
      thumbnail: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 7,
      type: 'video',
      title: 'Corporate Video',
      category: 'Video Editing',
      thumbnail: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 8,
      type: 'photo',
      title: 'Lifestyle Photography',
      category: 'Photography',
      thumbnail: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 9,
      type: 'video',
      title: 'Music Video',
      category: 'Video Production',
      thumbnail: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeInSection>
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#EDEDED]/70 hover:text-[#DA0037] transition-colors mb-12 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-lg">Back to Home</span>
          </button>
        </FadeInSection>

        <FadeInSection>
          <div className="text-center mb-20">
            <h1 className="text-6xl md:text-7xl font-bold text-[#EDEDED] mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-[#EDEDED]/70 max-w-3xl mx-auto">
              Explore our collection of creative projects that showcase our expertise
              and dedication to excellence.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {portfolioItems.map((item, index) => (
            <FadeInSection key={item.id} delay={index * 100}>
              <div className="group relative overflow-hidden rounded-xl bg-[#171717] border border-[#444444] hover:border-[#DA0037] transition-all duration-500 hover:scale-105 cursor-pointer">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  {item.type === 'video' ? (
                    <div className="w-16 h-16 bg-[#DA0037] rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-[#EDEDED] ml-1" />
                    </div>
                  ) : (
                    <div className="w-16 h-16 bg-[#DA0037] rounded-full flex items-center justify-center">
                      <ImageIcon className="w-8 h-8 text-[#EDEDED]" />
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <span className="text-sm text-[#DA0037] font-semibold">{item.category}</span>
                  <h3 className="text-2xl font-bold text-[#EDEDED] mt-2">{item.title}</h3>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection>
          <div className="bg-[#171717] border border-[#444444] rounded-2xl p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#EDEDED] mb-6">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-xl text-[#EDEDED]/70 mb-8 max-w-2xl mx-auto">
              Let's bring your vision to life with our professional creative services.
            </p>
            <Button onClick={onGetQuote} variant="primary">
              Get Your Quote
            </Button>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}
