import { useState } from 'react';
import { Upload, DollarSign, Users, Calendar, Play, FileText, TrendingUp, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';
import AnimatedCounter from '@/components/ui/animated-counter';
import practitionersWorking from '@/assets/practitioners-working.jpg';
export default function ForPractitioners() {
  const [onboardingStep, setOnboardingStep] = useState(1);
  const benefits = [{
    icon: DollarSign,
    title: 'Competitive Earnings',
    description: 'Earn R800-1500 per consultation',
    metric: 'R1,200',
    label: 'Average per consultation'
  }, {
    icon: Users,
    title: 'Growing Patient Base',
    description: 'Access to 10,000+ patients nationwide',
    metric: '10K+',
    label: 'Active patients'
  }, {
    icon: Calendar,
    title: 'Flexible Schedule',
    description: 'Set your own availability and working hours',
    metric: '24/7',
    label: 'Platform availability'
  }];
  const trainingModules = [{
    title: 'Why Our Training',
    description: 'Understand the future of healthcare delivery',
    duration: '30 mins',
    completed: true
  }, {
    title: 'How It Works',
    description: 'Navigate our platform and tools effectively',
    duration: '45 mins',
    completed: true
  }, {
    title: 'What You\'ll Learn',
    description: 'Master telehealth best practices',
    duration: '60 mins',
    completed: false
  }, {
    title: 'Who Should Enroll',
    description: 'Determine if our program fits your goals',
    duration: '20 mins',
    completed: false
  }];
  const testimonials = [{
    name: 'Dr. Sarah Nkomo',
    specialty: 'General Practitioner',
    location: 'Cape Town',
    rating: 5,
    content: 'Joining Briefly Healthcare has transformed my practice. I can reach more patients and maintain a better work-life balance.',
    avatar: 'S',
    earnings: 'R45,000/month'
  }, {
    name: 'Dr. Michael van der Merwe',
    specialty: 'Pediatrician',
    location: 'Johannesburg',
    rating: 5,
    content: 'The platform is intuitive and the support team is exceptional. My patient satisfaction has never been higher.',
    avatar: 'M',
    earnings: 'R52,000/month'
  }];
  const onboardingSteps = [{
    step: 1,
    title: 'Application',
    description: 'Submit your credentials and basic information'
  }, {
    step: 2,
    title: 'Verification',
    description: 'We verify your qualifications and background'
  }, {
    step: 3,
    title: 'Training',
    description: 'Complete our telehealth certification program'
  }, {
    step: 4,
    title: 'Platform Setup',
    description: 'Set up your profile and availability'
  }, {
    step: 5,
    title: 'Go Live',
    description: 'Start seeing patients and earning'
  }];
  const whatsappOnboarding = () => {
    const message = encodeURIComponent("Hi! I'm a medical practitioner interested in joining the Briefly Healthcare network. Please guide me through the onboarding process and share the required documents.");
    window.open(`https://wa.me/27723692658?text=${message}`, '_blank');
  };
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={practitionersWorking} alt="Healthcare practitioners working" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Join Our Network
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">
              Transform Healthcare
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Be part of South Africa's leading telehealth platform. Expand your practice, increase your earnings, and make healthcare more accessible.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
              <FileText className="mr-2 h-5 w-5" />
              Apply Now
            </Button>
            <Button size="lg" variant="outline" onClick={whatsappOnboarding} className="border-white hover:bg-white text-lg px-8 py-4 text-purple-900">
              WhatsApp Onboarding
            </Button>
          </div>

          {/* Stats Row */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {benefits.map((benefit, index) => <div key={index} className="text-center">
                <AnimatedCounter end={parseInt(benefit.metric.replace(/[^\d]/g, ''))} suffix={benefit.metric.includes('+') ? '+' : ''} />
                <p className="text-lg opacity-90 mt-2">{benefit.label}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Making Medicine Accessible */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Making Medicine Accessible</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join thousands of healthcare professionals transforming patient care across South Africa
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => <Card key={index} className="glass-card border-primary/20 hover:scale-105 transition-transform duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">{benefit.description}</p>
                  <div className="text-3xl font-bold text-primary mb-2">{benefit.metric}</div>
                  <p className="text-sm text-muted-foreground">{benefit.label}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Training Program */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Comprehensive Training Program</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Master telehealth best practices with our structured learning path
            </p>
          </div>

          <Tabs defaultValue="overview" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="certification">Certification</TabsTrigger>
              <TabsTrigger value="support">Support</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-8">
              <Card className="glass-card border-primary/20">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">Why Our Training Matters</h3>
                      <p className="text-muted-foreground mb-6">
                        Our comprehensive program ensures you're equipped with the latest telehealth technologies and best practices to deliver exceptional patient care.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <Badge variant="secondary">✓</Badge>
                          Platform navigation and tools
                        </li>
                        <li className="flex items-center gap-2">
                          <Badge variant="secondary">✓</Badge>
                          Virtual consultation techniques
                        </li>
                        <li className="flex items-center gap-2">
                          <Badge variant="secondary">✓</Badge>
                          Digital prescription management
                        </li>
                        <li className="flex items-center gap-2">
                          <Badge variant="secondary">✓</Badge>
                          Patient communication strategies
                        </li>
                      </ul>
                    </div>
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
                            <Play className="mr-2 h-5 w-5" />
                            Watch Training Preview
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl">
                          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                            <p className="text-lg text-muted-foreground">Training Preview Video</p>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="curriculum" className="mt-8">
              <div className="space-y-4">
                {trainingModules.map((module, index) => <Card key={index} className="glass-card border-primary/20">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${module.completed ? 'bg-green-500' : 'bg-muted'}`}>
                            {module.completed ? '✓' : index + 1}
                          </div>
                          <div>
                            <h3 className="font-semibold">{module.title}</h3>
                            <p className="text-sm text-muted-foreground">{module.description}</p>
                          </div>
                        </div>
                        <Badge variant="outline">{module.duration}</Badge>
                      </div>
                    </CardContent>
                  </Card>)}
              </div>
            </TabsContent>

            <TabsContent value="certification" className="mt-8">
              <Card className="glass-card border-primary/20">
                <CardContent className="p-8 text-center">
                  <Award className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Get Certified</h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Upon completion of our training program, you'll receive a Briefly Healthcare Telehealth Certification, 
                    recognized across our platform and partner networks.
                  </p>
                  <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
                    Download Syllabus
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="support" className="mt-8">
              <Card className="glass-card border-primary/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Ongoing Support</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">24/7 Technical Support</h4>
                      <p className="text-muted-foreground">Get help whenever you need it with our round-the-clock support team.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Peer Community</h4>
                      <p className="text-muted-foreground">Connect with other practitioners and share best practices.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Continuous Learning</h4>
                      <p className="text-muted-foreground">Access to updated training materials and new feature guides.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Performance Analytics</h4>
                      <p className="text-muted-foreground">Track your consultation metrics and patient satisfaction scores.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Onboarding Process */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Simple Onboarding Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get started in just 5 easy steps
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {onboardingSteps.map((step, index) => <div key={index} className="flex items-center mb-8 last:mb-0">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${step.step <= onboardingStep ? 'bg-primary' : 'bg-muted'}`}>
                    {step.step}
                  </div>
                  <div className="ml-6 flex-1">
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                  {index < onboardingSteps.length - 1 && <div className="absolute left-6 mt-12 w-0.5 h-8 bg-border" />}
                </div>)}
            </div>
            
            <div className="mt-8">
              <Progress value={onboardingStep / onboardingSteps.length * 100} className="mb-4" />
              <p className="text-center text-muted-foreground">
                Step {onboardingStep} of {onboardingSteps.length}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Your Practice Dashboard</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Manage appointments, track earnings, and connect with patients from one central hub
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="glass-card border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Today's Schedule
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">09:00 - General Consultation</span>
                    <Badge>Confirmed</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">10:30 - Follow-up</span>
                    <Badge>Confirmed</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">14:00 - New Patient</span>
                    <Badge variant="outline">Pending</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Monthly Earnings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-2">R 48,650</div>
                <p className="text-sm text-muted-foreground mb-4">+12% from last month</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Consultations: 42</span>
                    <span>R 38,400</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Follow-ups: 18</span>
                    <span>R 10,250</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Patient Satisfaction
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
                <p className="text-sm text-muted-foreground mb-4">Based on 156 reviews</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">5★</span>
                    <Progress value={89} className="flex-1" />
                    <span className="text-sm">89%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">4★</span>
                    <Progress value={8} className="flex-1" />
                    <span className="text-sm">8%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from practitioners who've transformed their practice with us
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => <Card key={index} className="glass-card border-primary/20">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xl font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                      <p className="text-muted-foreground">{testimonial.specialty}</p>
                      <p className="text-sm text-purple-800">{testimonial.location}</p>
                    </div>
                  </div>
                  <blockquote className="text-lg text-muted-foreground italic mb-4">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => <span key={i} className="text-warning">★</span>)}
                    </div>
                    <Badge className="bg-green-500 text-white">{testimonial.earnings}</Badge>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Start Earning with Telehealth</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join our network of successful practitioners and transform your practice today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
              <FileText className="mr-2 h-5 w-5" />
              Apply to Join
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4" onClick={whatsappOnboarding}>
              WhatsApp Onboarding
            </Button>
          </div>
        </div>
      </section>
    </div>;
}