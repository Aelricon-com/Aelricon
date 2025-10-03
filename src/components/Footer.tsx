import { Mail, Phone, Instagram, Youtube, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#171717] border-t border-[#444444] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-[#EDEDED] mb-4">Aelricon Productions</h3>
            <p className="text-[#EDEDED]/60 leading-relaxed">
              International creative agency delivering exceptional content creation and digital solutions.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[#EDEDED] mb-4">Services</h4>
            <ul className="space-y-2">
              {['Video Editing', 'Photography', 'Social Media', '3D Modeling', 'Web Development'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-[#EDEDED]/60 hover:text-[#DA0037] transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[#EDEDED] mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+917679990006"
                  className="flex items-center gap-3 text-[#EDEDED]/60 hover:text-[#DA0037] transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>+91 7679990006</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:aelricon@gmail.com"
                  className="flex items-center gap-3 text-[#EDEDED]/60 hover:text-[#DA0037] transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>aelricon@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[#EDEDED] mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/aelricon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#444444] rounded-lg flex items-center justify-center hover:bg-[#DA0037] hover:shadow-[0_0_20px_rgba(218,0,55,0.6)] transition-all duration-300 group"
              >
                <Instagram className="w-6 h-6 text-[#EDEDED]" />
              </a>
              <a
                href="https://x.com/aelricon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#444444] rounded-lg flex items-center justify-center hover:bg-[#DA0037] hover:shadow-[0_0_20px_rgba(218,0,55,0.6)] transition-all duration-300 group"
              >
                <Twitter className="w-6 h-6 text-[#EDEDED]" />
              </a>
              <a
                href="https://youtube.com/@aelricon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#444444] rounded-lg flex items-center justify-center hover:bg-[#DA0037] hover:shadow-[0_0_20px_rgba(218,0,55,0.6)] transition-all duration-300 group"
              >
                <Youtube className="w-6 h-6 text-[#EDEDED]" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#444444] pt-8 text-center">
          <p className="text-[#EDEDED]/50">
            © {new Date().getFullYear()} Aelricon Productions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
