import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Lebo",
    location: "Pretoria",
    rating: 5,
    content: "Briefly Healthcare made it so easy to get medical advice from home. The doctors are professional and really care about their patients. Highly recommended!",
    avatar: "L"
  },
  {
    id: 2,
    name: "Collen Jacobs",
    location: "Midrand",
    rating: 5,
    content: "The virtual consultations are convenient and affordable. I can get prescription renewals without taking time off work. Excellent service!",
    avatar: "C"
  },
  {
    id: 3,
    name: "Sibongile T",
    location: "Polokwane",
    rating: 5,
    content: "As a working mother, Briefly Healthcare has been a lifesaver. Quick consultations for the kids when they're not feeling well. Thank you!",
    avatar: "S"
  }
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <Card className="glass-card border-primary/20">
        <CardContent className="p-8">
          <div className="text-center space-y-6">
            {/* Avatar */}
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xl font-bold mx-auto">
              {testimonials[currentIndex].avatar}
            </div>

            {/* Stars */}
            <div className="flex justify-center space-x-1">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-warning text-warning" />
              ))}
            </div>

            {/* Content */}
            <blockquote className="text-lg text-muted-foreground italic leading-relaxed">
              "{testimonials[currentIndex].content}"
            </blockquote>

            {/* Author */}
            <div className="space-y-1">
              <p className="font-semibold text-primary text-lg">
                {testimonials[currentIndex].name}
              </p>
              <p className="text-muted-foreground">
                {testimonials[currentIndex].location}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-6">
        <Button
          variant="outline"
          size="icon"
          onClick={goToPrevious}
          className="rounded-full"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        {/* Dots */}
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-primary' : 'bg-primary/30'
              }`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={goToNext}
          className="rounded-full"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}