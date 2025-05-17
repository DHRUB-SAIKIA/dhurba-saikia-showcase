
import Carousel from "@/components/shared/Carousel";
import { Star } from "lucide-react";
import AnimatedText from "@/components/shared/AnimatedText";
import AnimatedCard from "@/components/shared/AnimatedCard";

interface TestimonialProps {
  content: string;
  author: string;
  position: string;
  company: string;
  image: string;
  rating?: number;
  delay?: number;
}

const Testimonial = ({ content, author, position, company, image, rating = 5, delay = 0 }: TestimonialProps) => {
  return (
    <AnimatedCard className="bg-card rounded-xl p-8 md:p-10 shadow-sm border border-border" delay={delay} hover={true}>
      <div className="flex mb-6">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-yellow-400 stroke-yellow-400" />
        ))}
      </div>
      <p className="text-lg md:text-xl mb-8 italic">"{content}"</p>
      <div className="flex items-center">
        <div className="mr-4">
          <img 
            src={image} 
            alt={author} 
            className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold text-lg">{author}</h4>
          <p className="text-muted-foreground text-sm">{position}, {company}</p>
        </div>
      </div>
    </AnimatedCard>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      content: "Working with Dhruba was a game-changer for our brand. His design sensibilities and technical expertise helped us create a digital presence that truly represents our vision.",
      author: "Alex Mitchell",
      position: "CEO",
      company: "TechVision Inc.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop",
      rating: 5
    },
    {
      content: "Dhruba's attention to detail and commitment to quality is unmatched. He took our vague ideas and transformed them into a stunning website that exceeds all expectations.",
      author: "Sarah Johnson",
      position: "Marketing Director",
      company: "Creative Solutions",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop",
      rating: 5
    },
    {
      content: "The mobile app Dhruba designed for us has received overwhelming positive feedback from our users. His user-centered approach to design makes all the difference.",
      author: "Michael Chen",
      position: "Product Manager",
      company: "AppWorks",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop",
      rating: 5
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <AnimatedText as="h2" className="heading-lg mb-4" delay={100}>
            Client Testimonials
          </AnimatedText>
          <AnimatedText as="p" className="text-muted-foreground" delay={200}>
            Don't just take my word for it - hear what my clients have to say about working with me.
          </AnimatedText>
        </div>

        <Carousel autoplay={true} interval={8000} className="max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-4 pb-12">
              <Testimonial
                content={testimonial.content}
                author={testimonial.author}
                position={testimonial.position}
                company={testimonial.company}
                image={testimonial.image}
                rating={testimonial.rating}
                delay={100 * index}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
