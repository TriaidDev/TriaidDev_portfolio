
import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Rocket, Code, Users, Star, Heart } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';

const AboutPage: React.FC = () => {
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = React.useState(0);
  
  const founders = [
    {
      name: "Irfan",
      role: "Stakeholder Manager",
      image: "irfan.jpeg",
      icon: <Users className="h-5 w-5 text-triaid-green" />,
      description: "Leading stakeholder relationships and ensuring alignment between business objectives and project deliverables."
    },
    {
      name: "Devvrat",
      role: "Backend Developer",
      image: "dev.jpeg",
      icon: <Code className="h-5 w-5 text-triaid-green" />,
      description: "Spearheading our backend architecture with deep expertise in cloud infrastructure and system optimization."
    },
    {
      name: "Kasif",
      role: "Frontend Developer",
      image: "kaisf.jpeg",
      icon: <Code className="h-5 w-5 text-triaid-green" />,
      description: "Architecting our frontend solutions with specialization in React and modern UI frameworks to create seamless user experiences."
    },
    {
      name: "Shreya",
      role: "Creative Strategist",
      image: "shreya.jpeg",
      icon: <Star className="h-5 w-5 text-triaid-green" />,
      description: "Driving our creative direction with expertise in digital marketing and user experience design."
    },
    {
      name: "Himanshu",
      role: "Brand Growth Lead",
      image: "himanshu.jpeg",
      icon: <Heart className="h-5 w-5 text-triaid-green" />,
      description: "Leading our brand expansion strategies and growth initiatives to enhance market presence and customer engagement."
    }
  ];

  const handleSlideChange = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative min-h-screen bg-triaid-dark text-triaid-light overflow-x-hidden">
      <Navbar />
      <div className="container mx-auto px-6 py-24">
        <h1 className="section-heading mb-12">About Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-triaid-green">Our Story</h2>
            <p className="text-triaid-light/80">
              TRIAIDDEV was founded with a vision to deliver cutting-edge digital solutions that transform businesses. Our team of passionate developers, designers, and strategists work together to create exceptional web experiences that drive growth and innovation.
            </p>
            <p className="text-triaid-light/80">
              With years of experience in both frontend and backend technologies, we've helped numerous clients across various industries build their digital presence and streamline their operations through custom web applications.
            </p>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-triaid-green">Our Approach</h2>
            <p className="text-triaid-light/80">
              We believe in a collaborative approach, working closely with our clients to understand their unique challenges and goals. Our development process is transparent, iterative, and focused on delivering value at every stage.
            </p>
            <p className="text-triaid-light/80">
              Using modern technologies like MEAN and MERN stacks, we build scalable, secure, and performant applications that are designed to evolve with your business needs.
            </p>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-triaid-green mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-triaid-dark-light rounded-lg shadow-lg hover:shadow-[0_0_25px_rgba(173,255,47,0.2)] transition-all duration-300">
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-triaid-light/80">We constantly explore new technologies and approaches to deliver innovative solutions.</p>
            </div>
            <div className="p-6 bg-triaid-dark-light rounded-lg shadow-lg hover:shadow-[0_0_25px_rgba(173,255,47,0.2)] transition-all duration-300">
              <h3 className="text-xl font-bold mb-3">Quality</h3>
              <p className="text-triaid-light/80">We are committed to excellence in every aspect of our work, from code to client communication.</p>
            </div>
            <div className="p-6 bg-triaid-dark-light rounded-lg shadow-lg hover:shadow-[0_0_25px_rgba(173,255,47,0.2)] transition-all duration-300">
              <h3 className="text-xl font-bold mb-3">Transparency</h3>
              <p className="text-triaid-light/80">We maintain open and honest communication with our clients throughout the project lifecycle.</p>
            </div>
          </div>
        </div>
        
        {/* Team Section with Improved Carousel */}
        <div className="mt-24">
          <h2 className="section-heading mb-12">Our Team</h2>
          <p className="text-triaid-light/80 max-w-3xl mb-12">
            Meet the founding team behind TRIAIDDEV. With diverse expertise across product development, 
            branding, and technology, our leadership is committed to delivering exceptional solutions for our clients.
          </p>
          
          {/* Desktop View (Grid layout, hidden on mobile) */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-8">
            {founders.map((founder, index) => (
              <TeamMemberCard key={index} founder={founder} />
            ))}
          </div>
          
          {/* Mobile and Tablet View (Enhanced Carousel) */}
          <div className="lg:hidden">
            <Carousel 
              className="w-full" 
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent>
                {founders.map((founder, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 sm:basis-full pl-4">
                    <TeamMemberCard founder={founder} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center items-center gap-4 mt-8">
                <CarouselPrevious className="relative left-0 translate-y-0 h-10 w-10 bg-triaid-dark-light border-triaid-green/50 text-triaid-green hover:bg-triaid-green hover:text-triaid-dark" />
                <div className="flex gap-2">
                  {founders.map((_, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      className={`w-3 h-3 p-0 rounded-full ${activeIndex === index ? 'bg-triaid-green border-triaid-green' : 'bg-transparent border-triaid-green/50'}`}
                      onClick={() => handleSlideChange(index)}
                    />
                  ))}
                </div>
                <CarouselNext className="relative right-0 translate-y-0 h-10 w-10 bg-triaid-dark-light border-triaid-green/50 text-triaid-green hover:bg-triaid-green hover:text-triaid-dark" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

// Extracted TeamMemberCard component for reusability
const TeamMemberCard = ({ founder }: { founder: any }) => (
  <Card className="bg-triaid-dark-light border-triaid-gray/20 overflow-hidden hover:shadow-[0_0_25px_rgba(173,255,47,0.2)] transition-all duration-300 h-full">
    <div className="h-48 bg-triaid-gray/20 relative overflow-hidden flex items-center justify-center">
      <Avatar className="h-32 w-32 border-4 border-triaid-green/20">
        <AvatarImage src={founder.image} alt={founder.name} />
        <AvatarFallback className="bg-triaid-dark text-triaid-green text-2xl">
          {founder.name.charAt(0)}
        </AvatarFallback>
      </Avatar>
    </div>
    <CardContent className="p-6">
      <div className="flex items-center gap-2 mb-2">
        {founder.icon}
        <h3 className="font-bold text-xl">{founder.name}</h3>
      </div>
      <p className="text-sm text-triaid-green mb-4">{founder.role}</p>
      <p className="text-sm text-triaid-light/70">{founder.description}</p>
    </CardContent>
  </Card>
);

export default AboutPage;
