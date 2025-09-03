import { useState } from 'react';
import { Calendar, MapPin, Users, Play, Heart, Share2, MessageCircle, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AnimatedCounter from '@/components/ui/animated-counter';
import communityOutreach from '@/assets/community-outreach.jpg';

export default function Community() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const events = [
    {
      id: 1,
      title: 'Women\'s Health Awareness Workshop',
      date: '2024-03-25',
      time: '14:00',
      location: 'Johannesburg Community Center',
      category: 'Workshop',
      attendees: 45,
      description: 'Comprehensive workshop covering women\'s health topics including reproductive health, preventive care, and mental wellness.',
      image: communityOutreach
    },
    {
      id: 2,
      title: 'Diabetes Management Webinar',
      date: '2024-03-28',
      time: '10:00',
      location: 'Online',
      category: 'Webinar',
      attendees: 120,
      description: 'Learn about modern diabetes management techniques, nutrition, and lifestyle modifications.',
      image: communityOutreach
    },
    {
      id: 3,
      title: 'Community Health Screening',
      date: '2024-04-02',
      time: '09:00',
      location: 'Cape Town Clinic',
      category: 'Screening',
      attendees: 200,
      description: 'Free health screenings for blood pressure, diabetes, and general wellness checks.',
      image: communityOutreach
    }
  ];

  const forumPosts = [
    {
      id: 1,
      title: 'Managing Hypertension During Pregnancy',
      author: 'Dr. Priya Sharma',
      category: 'Women\'s Health',
      replies: 23,
      likes: 45,
      timeAgo: '2 hours ago',
      excerpt: 'Best practices for monitoring and managing high blood pressure during pregnancy...'
    },
    {
      id: 2,
      title: 'Telehealth Tips for Elderly Patients',
      author: 'Dr. Michael Johnson',
      category: 'Geriatrics',
      replies: 18,
      likes: 32,
      timeAgo: '5 hours ago',
      excerpt: 'Strategies to make virtual consultations more accessible for senior patients...'
    },
    {
      id: 3,
      title: 'Mental Health First Aid in Communities',
      author: 'Dr. Nomsa Mbeki',
      category: 'Mental Health',
      replies: 41,
      likes: 78,
      timeAgo: '1 day ago',
      excerpt: 'Training community members to recognize and respond to mental health crises...'
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'Rural Health Access Initiative',
      location: 'Eastern Cape',
      beneficiaries: 2500,
      status: 'Active',
      description: 'Bringing telehealth services to remote rural communities through mobile clinics and satellite connectivity.',
      image: communityOutreach,
      tags: ['Rural Health', 'Telehealth', 'Access']
    },
    {
      id: 2,
      title: 'School Health Program',
      location: 'Gauteng',
      beneficiaries: 5000,
      status: 'Active',
      description: 'Comprehensive health education and screening programs in schools across Gauteng province.',
      image: communityOutreach,
      tags: ['Education', 'Children', 'Prevention']
    },
    {
      id: 3,
      title: 'Maternal Health Support',
      location: 'KwaZulu-Natal',
      beneficiaries: 1200,
      status: 'Completed',
      description: 'Supporting pregnant women and new mothers with virtual consultations and health education.',
      image: communityOutreach,
      tags: ['Maternal Health', 'Support', 'Education']
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Community Healthcare in South Africa',
      author: 'Dr. Thabo Mthembu',
      date: '2025-03-20',
      category: 'Healthcare Trends',
      readTime: '5 min read',
      excerpt: 'Exploring how technology and community partnerships are reshaping healthcare delivery across South Africa.',
      image: communityOutreach,
      featured: true
    },
    {
      id: 2,
      title: 'Building Health Literacy in Underserved Communities',
      author: 'Dr. Lerato Mokoena',
      date: '2025-03-20',
      category: 'Community Health',
      readTime: '7 min read',
      excerpt: 'Strategies for improving health education and awareness in communities with limited healthcare access.',
      image: communityOutreach,
      featured: false
    },
    {
      id: 3,
      title: 'Telehealth Success Stories from Rural South Africa',
      author: 'Dr. John van Niekerk',
      date: '2025-03-20',
      category: 'Telehealth',
      readTime: '6 min read',
      excerpt: 'Real stories of how virtual healthcare is making a difference in remote communities.',
      image: communityOutreach,
      featured: false
    }
  ];

  const whatsappCommunity = () => {
    const message = encodeURIComponent("Hi! I'd like to join the Briefly Healthcare community and participate in health events and initiatives. Please add me to your community groups.");
    window.open(`https://wa.me/27723692658?text=${message}`, '_blank');
  };

  const whatsappEvent = (eventTitle: string) => {
    const message = encodeURIComponent(`Hi! I'd like to RSVP for the "${eventTitle}" event. Please send me more details and confirm my attendance.`);
    window.open(`https://wa.me/27723692658?text=${message}`, '_blank');
  };

  const filteredEvents = events.filter(event => 
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'all' || selectedCategory === '' || event.category === selectedCategory)
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={communityOutreach} 
            alt="Community healthcare outreach"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Building Healthier
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">
              Communities
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Join our mission to make quality healthcare accessible to every South African community through collaboration, education, and innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
              <Users className="mr-2 h-5 w-5" />
              Join Community
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4"
              onClick={whatsappCommunity}
            >
              WhatsApp Community
            </Button>
          </div>

          {/* Community Stats */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <AnimatedCounter end={27000} suffix="+" />
              <p className="text-lg opacity-90 mt-2">Community Members</p>
            </div>
            <div className="text-center">
              <AnimatedCounter end={150} suffix="+" />
              <p className="text-lg opacity-90 mt-2">Health Programs</p>
            </div>
            <div className="text-center">
              <AnimatedCounter end={500} suffix="+" />
              <p className="text-lg opacity-90 mt-2">Community Events</p>
            </div>
          </div>
        </div>
      </section>

      {/* Foundation Platform */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Community Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our ongoing initiatives making healthcare accessible across South Africa
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex-1">
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Rural Health">Rural Health</SelectItem>
                <SelectItem value="Education">Education</SelectItem>
                <SelectItem value="Maternal Health">Maternal Health</SelectItem>
                <SelectItem value="Mental Health">Mental Health</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="glass-card border-primary/20 hover:scale-105 transition-transform duration-300">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge 
                    className={`absolute top-4 right-4 ${
                      project.status === 'Active' ? 'bg-green-500' : 'bg-blue-500'
                    } text-white`}
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4" />
                    {project.location}
                  </div>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-primary">{project.beneficiaries.toLocaleString()}</div>
                    <div className="text-sm text-muted-foreground">Beneficiaries</div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Calendar */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Upcoming Events</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join our health workshops, webinars, and community screenings
            </p>
          </div>

          <Tabs defaultValue="upcoming" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="workshops">Workshops</TabsTrigger>
              <TabsTrigger value="webinars">Webinars</TabsTrigger>
            </TabsList>
            
            <TabsContent value="upcoming" className="mt-8">
              <div className="space-y-6">
                {filteredEvents.map((event) => (
                  <Card key={event.id} className="glass-card border-primary/20">
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-4 gap-6 items-center">
                        <div className="aspect-video rounded-lg overflow-hidden">
                          <img 
                            src={event.image} 
                            alt={event.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <Badge className="mb-2">{event.category}</Badge>
                          <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                          <p className="text-muted-foreground mb-4">{event.description}</p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {event.date} at {event.time}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {event.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              {event.attendees} registered
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Button className="bg-primary text-white hover:bg-primary/90">
                            RSVP
                          </Button>
                          <Button 
                            variant="outline"
                            onClick={() => whatsappEvent(event.title)}
                          >
                            WhatsApp RSVP
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="workshops" className="mt-8">
              <div className="text-center py-12">
                <h3 className="text-2xl font-bold mb-4">Hands-on Learning Workshops</h3>
                <p className="text-muted-foreground mb-6">
                  Interactive workshops covering health education, disease prevention, and wellness topics.
                </p>
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
                  View All Workshops
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="webinars" className="mt-8">
              <div className="text-center py-12">
                <h3 className="text-2xl font-bold mb-4">Live Health Webinars</h3>
                <p className="text-muted-foreground mb-6">
                  Expert-led online sessions on current health topics and medical advancements.
                </p>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-6">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
                        <Play className="mr-2 h-5 w-5" />
                        Join Live Stream
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                        <p className="text-lg text-muted-foreground">Live Stream Player</p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Community Forum Preview */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Community Forum</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connect with healthcare professionals and community members
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {forumPosts.map((post) => (
              <Card key={post.id} className="glass-card border-primary/20 hover:border-primary/40 transition-colors cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <Badge className="mb-2">{post.category}</Badge>
                      <h3 className="text-lg font-semibold mb-1">{post.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        by {post.author} • {post.timeAgo}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4" />
                      {post.replies} replies
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="h-4 w-4" />
                      {post.likes} likes
                    </div>
                    <Button variant="ghost" size="sm">
                      <Share2 className="h-4 w-4 mr-1" />
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
              Join Forum Discussions
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Health & Community Blog</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Latest insights on community health, medical trends, and wellness
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Featured Post */}
            <div className="lg:col-span-2">
              <Card className="glass-card border-primary/20 overflow-hidden">
                <div className="aspect-video relative">
                  <img 
                    src={blogPosts[0].image} 
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-white">
                    Featured
                  </Badge>
                </div>
                <CardContent className="p-8">
                  <Badge className="mb-4">{blogPosts[0].category}</Badge>
                  <h3 className="text-2xl font-bold mb-4">{blogPosts[0].title}</h3>
                  <p className="text-muted-foreground mb-6">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      {blogPosts[0].author} • {blogPosts[0].date}
                    </div>
                    <Badge variant="outline">{blogPosts[0].readTime}</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Posts */}
            <div className="space-y-6">
              {blogPosts.slice(1).map((post) => (
                <Card key={post.id} className="glass-card border-primary/20 hover:border-primary/40 transition-colors cursor-pointer">
                  <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <Badge className="mb-2">{post.category}</Badge>
                    <h3 className="font-semibold mb-2">{post.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{post.author}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-primary mb-4">Stay Connected</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get the latest community health updates and event notifications
          </p>
          
          <Card className="glass-card border-primary/20 max-w-md mx-auto">
            <CardContent className="p-6">
              <div className="space-y-4">
                <Input placeholder="Enter your email address" type="email" />
                <Button className="w-full bg-primary text-white hover:bg-primary/90">
                  Subscribe to Newsletter
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Partner with Us</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join our mission to build healthier communities across South Africa. Together, we can make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4"
            >
              <Heart className="mr-2 h-5 w-5" />
              Become a Partner
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4"
              onClick={whatsappCommunity}
            >
              WhatsApp Community
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}