import { Link } from 'react-router-dom';
import { MessageCircle, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Footer() {
  const whatsappUrl = "https://wa.me/27723692658?text=Hi,%20I'd%20like%20more%20information%20about%20Briefly%20Healthcare";

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">B</span>
              </div>
              <span className="font-bold text-xl">Briefly Healthcare</span>
            </div>
            <p className="text-primary-pale">
              Expert Medical Consultations at Your Fingertips. Transforming healthcare access across South Africa.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-pale hover:text-primary-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-pale hover:text-primary-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-pale hover:text-primary-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-pale hover:text-primary-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-primary-pale hover:text-primary-foreground transition-colors">
                About Us
              </Link>
              <Link to="/for-patients" className="block text-primary-pale hover:text-primary-foreground transition-colors">
                For Patients
              </Link>
              <Link to="/for-practitioners" className="block text-primary-pale hover:text-primary-foreground transition-colors">
                For Practitioners
              </Link>
              <Link to="/community" className="block text-primary-pale hover:text-primary-foreground transition-colors">
                Community
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Services</h3>
            <div className="space-y-2">
              <p className="text-primary-pale">Virtual Consultations</p>
              <p className="text-primary-pale">Prescription Services</p>
              <p className="text-primary-pale">Health Assessments</p>
              <p className="text-primary-pale">Follow-up Care</p>
              <p className="text-primary-pale">Emergency Telemedicine</p>
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <div className="space-y-3">
              <a href="tel:+27723692658" className="flex items-center space-x-2 text-primary-pale hover:text-primary-foreground transition-colors">
                <Phone className="h-4 w-4" />
                <span>072 369 2658</span>
              </a>
              <a href="mailto:info@brieflyhealthcare.online" className="flex items-center space-x-2 text-primary-pale hover:text-primary-foreground transition-colors">
                <Mail className="h-4 w-4" />
                <span>info@brieflyhealthcare.online</span>
              </a>
              <div className="flex items-start space-x-2 text-primary-pale">
                <MapPin className="h-4 w-4 mt-1" />
                <span>Rivonia, Johannesburg<br />Gauteng, 2128</span>
              </div>
            </div>
            
            <div className="pt-4">
              <Button className="w-full bg-success hover:bg-success/90" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-primary-pale/20 pt-8 mb-8">
          <div className="max-w-md">
            <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>
            <div className="flex space-x-2">
              <Input 
                placeholder="Enter your email" 
                className="bg-primary-foreground text-primary"
              />
              <Button variant="secondary">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-pale/20 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-primary-pale text-sm">
              © 2025 Briefly Healthcare. All rights reserved.
            </p>
            <p className="text-primary-pale/80 text-xs mt-1">
              Powered By: <a href="https://www.kwenamai.co.za" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors underline">
                Kwena Moloto A.I Solutions
              </a>
            </p>
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-primary-pale hover:text-primary-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-pale hover:text-primary-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-primary-pale hover:text-primary-foreground transition-colors">
              Medical Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}