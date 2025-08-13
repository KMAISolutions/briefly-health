import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Video, HeadphonesIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import contactCenter from '@/assets/contact-center.jpg';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our support team',
      contact: '072 369 2658',
      action: 'tel:+27723692658',
      available: '24/7',
      response: 'Immediate'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Chat',
      description: 'Quick responses via WhatsApp',
      contact: 'WhatsApp',
      action: () => whatsappContact('general'),
      available: '24/7',
      response: 'Within minutes'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Detailed inquiries and documentation',
      contact: 'info@brieflyhealthcare.online',
      action: 'mailto:info@brieflyhealthcare.online',
      available: 'Mon-Fri',
      response: 'Within 24 hours'
    },
    {
      icon: Video,
      title: 'Video Consultation',
      description: 'Face-to-face virtual meetings',
      contact: 'Book Online',
      action: () => whatsappContact('consultation'),
      available: 'By appointment',
      response: 'Scheduled'
    }
  ];

  const faqs = [
    {
      question: 'How do I book a virtual consultation?',
      answer: 'You can book a consultation through our website, WhatsApp, or by calling our support line. Simply choose your preferred doctor, select a time slot, and complete the payment process.',
      videoId: 'booking-tutorial'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, medical aid payments, EFT transfers, and mobile payment solutions like PayFast and SnapScan.',
      videoId: 'payment-tutorial'
    },
    {
      question: 'How do I access my prescription after consultation?',
      answer: 'Prescriptions are automatically sent to your registered email and can be downloaded from your patient portal. We also partner with major pharmacies for direct delivery.',
      videoId: 'prescription-tutorial'
    },
    {
      question: 'Is my medical information secure?',
      answer: 'Yes, we use bank-level encryption and comply with POPIA regulations. All consultations and medical records are stored securely and only accessible to authorized personnel.',
      videoId: 'security-tutorial'
    },
    {
      question: 'Can I get a medical certificate online?',
      answer: 'Yes, our registered doctors can issue valid medical certificates during virtual consultations. These are legally recognized and can be used for employer or insurance purposes.',
      videoId: 'certificate-tutorial'
    }
  ];

  const operatingHours = [
    { day: 'Monday - Friday', hours: '08:00 - 20:00', type: 'Full Service' },
    { day: 'Saturday', hours: '09:00 - 17:00', type: 'Limited Service' },
    { day: 'Sunday', hours: '10:00 - 16:00', type: 'Emergency Only' },
    { day: '24/7 Emergency', hours: 'Always Available', type: 'Critical Care' }
  ];

  const whatsappContact = (type: string) => {
    let message = '';
    switch (type) {
      case 'general':
        message = "Hi! I have a general inquiry about Briefly Healthcare services. Please assist me.";
        break;
      case 'consultation':
        message = "Hi! I'd like to book a virtual consultation. Please help me schedule an appointment.";
        break;
      case 'support':
        message = "Hi! I need technical support with the Briefly Healthcare platform. Please assist me.";
        break;
      case 'emergency':
        message = "Hi! I have an urgent medical inquiry and need immediate assistance.";
        break;
      default:
        message = "Hi! I'd like to get in touch with Briefly Healthcare.";
    }
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/27723692658?text=${encodedMessage}`, '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission with background sync for PWA
    try {
      // In a real app, this would sync with the server or queue for offline sync
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message Sent Successfully",
        description: "We'll get back to you within 24 hours.",
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Message Queued",
        description: "Your message will be sent when connection is restored.",
        variant: "default",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={contactCenter} 
            alt="Healthcare contact center"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Get in Touch
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">
              We're Here to Help
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Reach out for expert healthcare advice, technical support, or general inquiries. Our team is ready to assist you 24/7.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4"
              onClick={() => whatsappContact('general')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Send Message
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Multiple Ways to Reach Us</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the contact method that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="glass-card border-primary/20 hover:scale-105 transition-transform duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">{method.description}</p>
                  <div className="space-y-2 mb-6">
                    <div className="font-semibold text-primary">{method.contact}</div>
                    <div className="text-sm text-muted-foreground">
                      Available: {method.available}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      Response: {method.response}
                    </Badge>
                  </div>
                  <Button 
                    className="w-full bg-primary text-white hover:bg-primary/90"
                    onClick={typeof method.action === 'function' ? method.action : () => window.open(method.action as string, '_blank')}
                  >
                    Contact Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Details & Map */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-bold text-primary mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                <Card className="glass-card border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Head Office</h3>
                        <p className="text-muted-foreground">
                          Rivonia, Johannesburg<br />
                          Gauteng, 2128<br />
                          South Africa
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Phone</h3>
                        <p className="text-muted-foreground">
                          <a href="tel:+27723692658" className="hover:text-primary transition-colors">
                            072 369 2658
                          </a>
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Available 24/7 for emergencies
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Email</h3>
                        <p className="text-muted-foreground">
                          <a href="mailto:info@brieflyhealthcare.online" className="hover:text-primary transition-colors">
                            info@brieflyhealthcare.online
                          </a>
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Response within 24 hours
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Operating Hours */}
                <Card className="glass-card border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      Operating Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {operatingHours.map((schedule, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <div>
                            <div className="font-medium">{schedule.day}</div>
                            <div className="text-sm text-muted-foreground">{schedule.type}</div>
                          </div>
                          <Badge variant="outline">{schedule.hours}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Interactive Map */}
            <div>
              <h2 className="text-4xl font-bold text-primary mb-8">Find Us</h2>
              <Card className="glass-card border-primary/20">
                <CardContent className="p-0">
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Interactive Map</h3>
                      <p className="text-muted-foreground mb-4">
                        View our location and nearby healthcare facilities
                      </p>
                      <Button className="bg-primary text-white hover:bg-primary/90">
                        Open in Maps
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Send Us a Message</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Fill out the form below and we'll get back to you as soon as possible
            </p>
          </div>

          <Card className="glass-card border-primary/20">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What is this regarding?"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please provide details about your inquiry..."
                    className="min-h-32"
                    required
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    type="submit" 
                    className="flex-1 bg-primary text-white hover:bg-primary/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </div>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                  <Button 
                    type="button"
                    variant="outline"
                    className="flex-1"
                    onClick={() => whatsappContact('general')}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Instead
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Quick answers to common questions with helpful video tutorials
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-card border-primary/20 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <p className="text-muted-foreground mb-4">{faq.answer}</p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        <Video className="mr-2 h-4 w-4" />
                        Watch Tutorial
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                        <p className="text-lg text-muted-foreground">Tutorial Video: {faq.question}</p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Still have questions? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-primary text-white hover:bg-primary/90"
                onClick={() => whatsappContact('support')}
              >
                <HeadphonesIcon className="mr-2 h-5 w-5" />
                Live Support
              </Button>
              <Button variant="outline">
                <Mail className="mr-2 h-5 w-5" />
                Email Support
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Medical Emergency?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            For immediate medical emergencies, contact us right away or call emergency services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-red-600 hover:bg-white/90 text-lg px-8 py-4"
              onClick={() => window.open('tel:+27723692658', '_blank')}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Emergency Line
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-red-600 text-lg px-8 py-4"
              onClick={() => whatsappContact('emergency')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Emergency
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}