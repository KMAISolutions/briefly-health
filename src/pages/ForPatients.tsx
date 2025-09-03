import { useState } from 'react';
import { Calendar, MapPin, User, Play, BookOpen, Heart, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import TestimonialCarousel from '@/components/ui/testimonial-carousel';
import patientConsultation from '@/assets/patient-consultation.jpg';
export default function ForPatients() {
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const specialties = ['General Medicine', 'Pediatrics', 'Women\'s Health', 'Mental Health', 'Dermatology', 'Cardiology', 'Endocrinology', 'Orthopedics'];
  const locations = ['Johannesburg', 'Cape Town', 'Durban', 'Pretoria', 'Port Elizabeth', 'Bloemfontein', 'Polokwane', 'Nelspruit'];
  const services = [{
    icon: Heart,
    title: 'Virtual Consultations',
    description: 'Connect with qualified doctors from the comfort of your home',
    features: ['24/7 Availability', 'Instant Diagnosis', 'Prescription Service']
  }, {
    icon: Shield,
    title: 'Preventive Care',
    description: 'Regular health screenings and wellness checks',
    features: ['Health Monitoring', 'Early Detection', 'Lifestyle Advice']
  }, {
    icon: Clock,
    title: 'Follow-up Care',
    description: 'Continuous support for your ongoing health needs',
    features: ['Progress Tracking', 'Medication Adjustments', 'Care Coordination']
  }];
  const educationalContent = [{
    title: 'How to Use Our Service',
    description: 'Step-by-step guide to booking and attending virtual consultations',
    videoUrl: 'https://example.com/how-to-use',
    thumbnail: patientConsultation
  }, {
    title: 'Benefits of Virtual Care',
    description: 'Discover the advantages of telehealth for you and your family',
    videoUrl: 'https://example.com/benefits',
    thumbnail: patientConsultation
  }, {
    title: 'Preparing for Your Consultation',
    description: 'Tips to make the most of your virtual doctor visit',
    videoUrl: 'https://example.com/preparation',
    thumbnail: patientConsultation
  }];
  const whatsappBooking = () => {
    const message = encodeURIComponent("Hi! I'd like to book an appointment for a virtual consultation. Please help me schedule a session with a doctor.");
    window.open(`https://wa.me/27723692658?text=${message}`, '_blank');
  };
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={patientConsultation} alt="Doctor consulting with patient" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Your Health,
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">
              Our Priority
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Access quality healthcare from anywhere in South Africa. Connect with certified doctors for consultations, prescriptions, and ongoing care.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
              <Calendar className="mr-2 h-5 w-5" />
              Book Appointment
            </Button>
            <Button size="lg" variant="outline" onClick={whatsappBooking} className="border-white hover:bg-white text-lg px-8 py-4 text-violet-800">
              WhatsApp Booking
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" variant="ghost" className="text-white border border-white/30 hover:bg-white/10 text-lg px-8 py-4">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Welcome Video
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-lg text-muted-foreground">Welcome Video Player</p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Find a Doctor Widget */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Find Your Doctor</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Search for specialists by location and availability
            </p>
          </div>

          <Card className="glass-card border-primary/20 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Book an Appointment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Specialty</label>
                  <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select specialty" />
                    </SelectTrigger>
                    <SelectContent>
                      {specialties.map(specialty => <SelectItem key={specialty} value={specialty}>
                          {specialty}
                        </SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Location</label>
                  <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map(location => <SelectItem key={location} value={location}>
                          {location}
                        </SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Availability</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="today">Today</SelectItem>
                      <SelectItem value="tomorrow">Tomorrow</SelectItem>
                      <SelectItem value="week">This Week</SelectItem>
                      <SelectItem value="month">This Month</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="text-center">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90">
                  <User className="mr-2 h-5 w-5" />
                  Find Available Doctors
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Patient Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive healthcare solutions designed around your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => <Card key={index} className="glass-card border-primary/20 hover:scale-105 transition-transform duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, i) => <Badge key={i} variant="secondary" className="mr-2">
                        {feature}
                      </Badge>)}
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Educational Content */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Learn More</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Educational resources to help you make the most of telehealth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {educationalContent.map((content, index) => <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="glass-card border-primary/20 cursor-pointer hover:scale-105 transition-transform duration-300">
                    <div className="aspect-video relative overflow-hidden rounded-t-lg">
                      <img src={content.thumbnail} alt={content.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                          <Play className="h-8 w-8 text-primary ml-1" />
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{content.title}</h3>
                      <p className="text-muted-foreground">{content.description}</p>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <p className="text-lg text-muted-foreground">Video: {content.title}</p>
                  </div>
                </DialogContent>
              </Dialog>)}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Patient Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real experiences from patients across South Africa
            </p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Consult a Doctor?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get started with your virtual consultation today. Quality healthcare is just a click away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
              <BookOpen className="mr-2 h-5 w-5" />
              Consult Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4" onClick={whatsappBooking}>
              WhatsApp Quick Start
            </Button>
          </div>
        </div>
      </section>
    </div>;
}