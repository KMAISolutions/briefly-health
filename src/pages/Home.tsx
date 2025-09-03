import { ArrowRight, Play, Calendar, MessageCircle, Shield, Clock, Users, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import AnimatedCounter from '@/components/ui/animated-counter';
import TestimonialCarousel from '@/components/ui/testimonial-carousel';
import heroImage from '@/assets/hero-telemedicine.jpg';
import doctorPortrait from '@/assets/doctor-portrait.jpg';
import familyConsultation from '@/assets/family-consultation.jpg';
import medicalEquipment from '@/assets/medical-equipment.jpg';
export default function Home() {
  const whatsappUrl = "https://wa.me/27723692658?text=Hi,%20I'd%20like%20a%20virtual%20consultation";
  const services = [{
    icon: <Calendar className="h-8 w-8 text-primary" />,
    title: "Virtual Consultations",
    description: "Connect with qualified doctors from the comfort of your home",
    whatsappText: "Hi, I'd like to book a virtual consultation"
  }, {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "Prescription Services",
    description: "Get prescriptions and medication guidance online",
    whatsappText: "Hi, I need help with prescriptions"
  }, {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: "Health Assessments",
    description: "Comprehensive health evaluations and monitoring",
    whatsappText: "Hi, I'd like a health assessment"
  }, {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: "Follow-up Care",
    description: "Continuous care and monitoring for ongoing conditions",
    whatsappText: "Hi, I need follow-up care"
  }];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                Your Health, Our Priority
              </h1>
              <p className="text-xl md:text-2xl text-primary-pale leading-relaxed">
                Expert Medical Consultations at Your Fingertips
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                  <Calendar className="h-5 w-5 mr-2" />
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-primary-pale text-primary-foreground hover:bg-primary-pale/10" asChild>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    WhatsApp
                  </a>
                </Button>
                <Button size="lg" variant="ghost" className="text-lg px-8 py-4 text-primary-foreground hover:bg-primary-pale/10">
                  <Play className="h-5 w-5 mr-2" />
                  Watch Intro
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="glass-card rounded-2xl overflow-hidden">
                <img src={heroImage} alt="Telemedicine consultation" className="w-full h-[400px] md:h-[500px] object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold rounded">24/7</div>
                  <div className="text-sm">Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
        <div className="container mx-auto px-4 bg-violet-900">
          <div className="text-center space-y-4 mb-16 bg-violet-900">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive healthcare solutions designed for your convenience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => <Card key={index} className="glass-card border-primary/20 hover:border-primary/40 transition-all hover:scale-105">
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
              </Card>)}
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
              <img src={doctorPortrait} alt="Healthcare professional" className="rounded-lg object-cover h-48" />
              <img src={familyConsultation} alt="Family consultation" className="rounded-lg object-cover h-48" />
              <img src={medicalEquipment} alt="Medical equipment" className="rounded-lg object-cover h-48 col-span-2" />
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
    </div>;
}