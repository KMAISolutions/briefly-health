import { Users, Target, Heart, Award, Calendar, MessageCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import doctorPortrait from '@/assets/doctor-portrait.jpg';
import heroImage from '@/assets/hero-telemedicine.jpg';
export default function About() {
  const whatsappUrl = "https://wa.me/27723692658?text=Hi,%20I'd%20like%20to%20learn%20more%20about%20Briefly%20Healthcare";
  const values = [{
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: "Expert Guidance",
    description: "Our qualified medical professionals provide evidence-based care with compassion and expertise."
  }, {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: "Convenient Access",
    description: "Healthcare when you need it, where you need it. 24/7 access to medical consultations."
  }, {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Personalized Care",
    description: "Tailored treatment plans that consider your unique health needs and circumstances."
  }];
  const timeline = [{
    year: "2000",
    title: "Founded with Vision",
    description: "Established Briefly Healthcare with a mission to revolutionize healthcare access in South Africa."
  }, {
    year: "2010",
    title: "Clinic Network Expansion",
    description: "Opened multiple clinic locations across Gauteng, serving thousands of patients."
  }, {
    year: "2018",
    title: "Digital Transformation",
    description: "Launched our telemedicine platform, bringing healthcare to patients' homes."
  }, {
    year: "2025",
    title: "Leading Innovation",
    description: "Now serving 10,000+ patients with cutting-edge virtual healthcare solutions."
  }];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                Revolutionizing Healthcare
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed text-gray-100">
                Transforming Access to Quality Medical Advice Online
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Consultation
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-primary-pale text-primary-foreground hover:bg-primary-pale/10" asChild>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Join on WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="glass-card rounded-2xl overflow-hidden">
                <img src={heroImage} alt="Healthcare innovation" className="w-full h-[400px] md:h-[500px] object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Who We Are</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Briefly Healthcare is a pioneering telemedicine company committed to making quality healthcare accessible to everyone across South Africa. With over 24 years of experience, we have built a comprehensive network that serves thousands of patients through both our physical clinic locations and innovative digital platform.
                </p>
                <p>
                  Our mission is simple: to provide expert medical consultations that are convenient, affordable, and accessible from anywhere. We believe that quality healthcare should not be limited by geography, time, or circumstance.
                </p>
                <p>
                  Today, we proudly serve over 10,000 satisfied patients with our team of 900+ healthcare professionals worldwide, combining traditional medical expertise with cutting-edge technology to deliver exceptional care.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">24+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">10K+</div>
                  <div className="text-muted-foreground">Patients Served</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img src={doctorPortrait} alt="Healthcare team member" className="rounded-lg object-cover h-64" />
              <div className="space-y-4">
                <img src={heroImage} alt="Medical consultation" className="rounded-lg object-cover h-30" />
                <div className="bg-primary text-primary-foreground p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold">900+</div>
                  <div className="text-sm">Staff Worldwide</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => <Card key={index} className="glass-card border-primary/20 text-center">
                <CardContent className="p-8 space-y-4">
                  <div className="flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              25 years of innovation in healthcare delivery
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="glass-card border-primary/20">
                      <CardContent className="p-6">
                        <div className="space-y-2">
                          <div className="text-primary font-bold text-lg">{item.year}</div>
                          <h3 className="text-xl font-semibold">{item.title}</h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Leadership</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals leading the future of healthcare
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
            name: "Dr. Sarah Mthembu",
            role: "Chief Medical Officer",
            initial: "S"
          }, {
            name: "Dr. James Ndaba",
            role: "Head of Telemedicine",
            initial: "J"
          }, {
            name: "Dr. Nomsa Khumalo",
            role: "Director of Patient Care",
            initial: "N"
          }].map((member, index) => <Card key={index} className="glass-card border-primary/20 text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold mx-auto">
                    {member.initial}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary">{member.name}</h3>
                    <p className="text-muted-foreground">{member.role}</p>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Ready to Experience Our Care?
            </h2>
            <p className="text-xl text-primary-pale">
              Join thousands who trust Briefly Healthcare for their medical needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                <Calendar className="h-5 w-5 mr-2" />
                Book Consultation
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