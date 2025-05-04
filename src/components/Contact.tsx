import React, { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { submitContactForm, validateEmail, FormData } from '@/api/FormHandler';
import { Mail, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Form Incomplete",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    // Validate email
    if (!validateEmail(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await submitContactForm(formData);
      
      if (response.success) {
        toast({
          title: "Message Sent",
          description: response.message,
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        toast({
          title: "Error",
          description: response.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="section-heading text-4xl md:text-5xl lg:text-6xl mb-12 text-center">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-triaid-green">Let's Build Something Amazing Together</h3>
              <p className="text-triaid-light/70 mb-6">
                Have a project in mind? Need a custom web solution? Or just want to say hello?
                Fill out the form, and we'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-triaid-dark-light p-3 rounded-full">
                    <Phone className="w-6 h-6 text-triaid-green" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Phone</h4>
                    <p className="text-triaid-light/70">+919049811991 / +919322172360</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-triaid-dark-light p-3 rounded-full">
                    <Mail className="w-6 h-6 text-triaid-green" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Email</h4>
                    <p className="text-triaid-light/70">triaiddev@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-triaid-dark-light p-8 rounded-lg shadow-lg relative z-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-triaid-dark border border-triaid-dark-lighter px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-triaid-green"
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-triaid-dark border border-triaid-dark-lighter px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-triaid-green"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-triaid-dark border border-triaid-dark-lighter px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-triaid-green"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-triaid-dark border border-triaid-dark-lighter px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-triaid-green resize-none"
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full btn-primary ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-triaid-green/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 left-10 w-72 h-72 bg-triaid-green/10 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default Contact;
