import { useState, useRef, MouseEvent } from 'react';
import { Video as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePos({ x, y });

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative group perspective-1000"
      style={{
        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: 'transform 0.1s ease-out',
      }}
    >
      <div className="relative bg-[#171717] border border-[#444444] rounded-xl p-8 overflow-hidden">
        {isHovered && (
          <>
            <div
              className="absolute inset-0 opacity-40 pointer-events-none transition-opacity duration-300"
              style={{
                background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(218, 0, 55, 0.15), transparent 40%)`,
              }}
            />
            <div
              className="absolute -inset-[2px] rounded-xl opacity-75 blur-xl pointer-events-none transition-opacity duration-300"
              style={{
                background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(218, 0, 55, 0.4), transparent 40%)`,
              }}
            />
          </>
        )}

        <div className="relative z-10">
          <div className="w-14 h-14 bg-[#DA0037] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(218,0,55,0.5)]">
            <Icon className="w-7 h-7 text-[#EDEDED]" />
          </div>

          <h3 className="text-2xl font-bold text-[#EDEDED] mb-4">{title}</h3>
          <p className="text-[#EDEDED]/70 leading-relaxed">{description}</p>
        </div>

        <div className="absolute inset-0 border-2 border-[#DA0037] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-[0_0_30px_rgba(218,0,55,0.6)]"></div>
      </div>
    </div>
  );
}
