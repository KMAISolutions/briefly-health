import { ArrowRight, Play, Calendar, MessageCircle, Shield, Clock, Users, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import AnimatedCounter from '@/components/ui/animated-counter';
import TestimonialCarousel from '@/components/ui/testimonial-carousel';
import HeroSlideshow from '@/components/ui/hero-slideshow';
import heroSlide1 from '@/assets/hero-slide-1.jpg';
import heroSlide2 from '@/assets/hero-slide-2.jpg';
import heroSlide3 from '@/assets/hero-slide-3.jpg';
import doctorPortrait from '@/assets/doctor-portrait.jpg';
import familyConsultation from '@/assets/family-consultation.jpg';
import medicalEquipment from '@/assets/medical-equipment.jpg';

export default function Home() {
  const whatsappUrl = "https://wa.me/27723692658?text=Hi,%20I'd%20like%20a%20virtual%20consultation";

  const heroSlides = [
    {
      id: 1,
      image: heroSlide1,
      alt: "Medical consultation via video call"
    },
    {
      id: 2,
      image: heroSlide2,
      alt: "Healthcare team in modern facility"
    },
    {
      id: 3,
      image: heroSlide3,
      alt: "Family telehealth consultation"
    }
  ];

  const services = [
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Virtual Consultations",
      description: "Connect with qualified doctors from the comfort of your home",
      whatsappText: "Hi, I'd like to book a virtual consultation"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Prescription Services", 
      description: "Get prescriptions and medication guidance online",
      whatsappText: "Hi, I need help with prescriptions"
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Health Assessments",
      description: "Comprehensive health evaluations and monitoring",
      whatsappText: "Hi, I'd like a health assessment"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Follow-up Care",
      description: "Continuous care and monitoring for ongoing conditions",
      whatsappText: "Hi, I need follow-up care"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Slideshow */}
      <HeroSlideshow slides={heroSlides}>
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Your Health, Our Priority
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Expert Medical Consultations at Your Fingertips
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
              <Calendar className="h-5 w-5 mr-2" />
              Get Started
            </Button>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4"
              asChild
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp
              </a>
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
                  <Play className="h-5 w-5 mr-2" />
                  Watch Intro
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Play className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Welcome to Briefly Healthcare</h3>
                    <p className="text-muted-foreground">
                      Discover how our platform is revolutionizing healthcare access across South Africa.
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </HeroSlideshow>

      {/* Quick Stats */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <AnimatedCounter end={24} suffix="+" />
              <p className="text-muted-foreground">Years of Experience</p>
            </div>
            <div className="space-y-2">
              <AnimatedCounter end={10000} suffix="+" />
              <p className="text-muted-foreground">Satisfied Patients</p>
            </div>
            <div className="space-y-2">
              <AnimatedCounter end={900} suffix="+" />
              <p className="text-muted-foreground">Staff Worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive healthcare solutions designed for your convenience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="glass-card border-primary/20 hover:border-primary/40 transition-all hover:scale-105">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href={`https://wa.me/27723692658?text=${encodeURIComponent(service.whatsappText)}`} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Start on WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transforming healthcare accessibility across South Africa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                  <h3 className="text-xl font-semibold">Founded with Vision</h3>
                </div>
                <p className="text-muted-foreground pl-8">
                  Started our mission to make quality healthcare accessible to everyone through technology
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                  <h3 className="text-xl font-semibold">Expanded Network</h3>
                </div>
                <p className="text-muted-foreground pl-8">
                  Built a comprehensive network of qualified healthcare professionals
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                  <h3 className="text-xl font-semibold">Digital Innovation</h3>
                </div>
                <p className="text-muted-foreground pl-8">
                  Launched our advanced telemedicine platform serving thousands
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img 
                src={doctorPortrait} 
                alt="Healthcare professional" 
                className="rounded-lg object-cover h-48"
              />
              <img 
                src={familyConsultation} 
                alt="Family consultation" 
                className="rounded-lg object-cover h-48"
              />
              <img 
                src={medicalEquipment} 
                alt="Medical equipment" 
                className="rounded-lg object-cover h-48 col-span-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">What Our Patients Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real stories from real people across South Africa
            </p>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Ready to Experience Quality Healthcare?
            </h2>
            <p className="text-xl text-primary-pale">
              Join thousands of satisfied patients who trust Briefly Healthcare for their medical needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                <Calendar className="h-5 w-5 mr-2" />
                Get Started Today
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-primary-pale text-primary-foreground hover:bg-primary-pale/10" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}