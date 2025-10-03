import { useState, FormEvent } from 'react';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import Button from '../components/Button';
import FadeInSection from '../components/FadeInSection';

interface QuotePageProps {
  onBack: () => void;
}

export default function QuotePage({ onBack }: QuotePageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    additionalInfo: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Content Creation',
    'Video Editing',
    'Photo Editing',
    'Videography',
    'Photography',
    'Ads Running',
    'Social Media Management',
    '3D Modeling',
    'AI Website Development',
    'Other'
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xzzjgkae', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          additionalInfo: ''
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <FadeInSection>
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-[#DA0037] rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-12 h-12 text-[#EDEDED]" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#EDEDED] mb-6">
              Thank You!
            </h1>
            <p className="text-xl text-[#EDEDED]/70 mb-8">
              We've received your quote request. Our team will get back to you within 24 hours.
            </p>
            <Button onClick={onBack} variant="primary">
              Back to Home
            </Button>
          </div>
        </FadeInSection>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto">
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
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-[#EDEDED] mb-6">
              Get a Quote
            </h1>
            <p className="text-xl text-[#EDEDED]/70">
              Fill out the form below and we'll get back to you with a customized quote.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={200}>
          <form onSubmit={handleSubmit} className="bg-[#171717] border border-[#444444] rounded-2xl p-8 md:p-12">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#EDEDED] font-semibold mb-2">
                  Full Name <span className="text-[#DA0037]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#171717] border border-[#444444] rounded-lg px-4 py-3 text-[#EDEDED] focus:border-[#DA0037] focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#EDEDED] font-semibold mb-2">
                  Email Address <span className="text-[#DA0037]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#171717] border border-[#444444] rounded-lg px-4 py-3 text-[#EDEDED] focus:border-[#DA0037] focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-[#EDEDED] font-semibold mb-2">
                  Phone Number <span className="text-[#DA0037]">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#171717] border border-[#444444] rounded-lg px-4 py-3 text-[#EDEDED] focus:border-[#DA0037] focus:outline-none transition-colors"
                  placeholder="+91 1234567890"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-[#EDEDED] font-semibold mb-2">
                  Service Required <span className="text-[#DA0037]">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#171717] border border-[#444444] rounded-lg px-4 py-3 text-[#EDEDED] focus:border-[#DA0037] focus:outline-none transition-colors"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="additionalInfo" className="block text-[#EDEDED] font-semibold mb-2">
                  Additional Information <span className="text-[#EDEDED]/50 text-sm">(Optional)</span>
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-[#171717] border border-[#444444] rounded-lg px-4 py-3 text-[#EDEDED] focus:border-[#DA0037] focus:outline-none transition-colors resize-none"
                  placeholder="Tell us more about your project..."
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                className="w-full"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
              </Button>
            </div>
          </form>
        </FadeInSection>
      </div>
    </div>
  );
}
