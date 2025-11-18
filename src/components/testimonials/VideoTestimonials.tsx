import React from 'react';
import { Play, Pause } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  videoUrl: string;
  thumbnail: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Fashion Designer",
    company: "StyleHub",
    videoUrl: "https://example.com/video1.mp4",
    thumbnail: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    quote: "The quality of products is exceptional. I've been a loyal customer for years!"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Tech Entrepreneur",
    company: "InnovateTech",
    videoUrl: "https://example.com/video2.mp4",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    quote: "Amazing customer service and fast delivery. Highly recommended!"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Fitness Instructor",
    company: "FitLife",
    videoUrl: "https://example.com/video3.mp4",
    thumbnail: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    quote: "The products have transformed my daily routine. Absolutely love it!"
  }
];

const VideoTestimonials: React.FC = () => {
  const [activeVideo, setActiveVideo] = React.useState<number | null>(null);
  const videoRefs = React.useRef<(HTMLVideoElement | null)[]>([]);

  const handleVideoClick = (index: number) => {
    if (activeVideo === index) {
      // Pause video if it's already playing
      videoRefs.current[index]?.pause();
      setActiveVideo(null);
    } else {
      // Pause any currently playing video
      if (activeVideo !== null) {
        videoRefs.current[activeVideo]?.pause();
      }
      // Play the clicked video
      videoRefs.current[index]?.play();
      setActiveVideo(index);
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Watch video testimonials from our satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
            >
              <div className="relative aspect-video w-full">
                <video
                  ref={el => videoRefs.current[index] = el}
                  className="w-full h-full object-cover rounded-t-xl"
                  poster={testimonial.thumbnail}
                  onClick={() => handleVideoClick(index)}
                  playsInline
                >
                  <source src={testimonial.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <button
                  onClick={() => handleVideoClick(index)}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  aria-label={activeVideo === index ? "Pause video" : "Play video"}
                >
                  {activeVideo === index ? (
                    <Pause className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
                  ) : (
                    <Play className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
                  )}
                </button>
              </div>

              <div className="p-4 sm:p-6">
                <blockquote className="text-sm sm:text-base text-gray-600 italic mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <img
                    src={testimonial.thumbnail}
                    alt={testimonial.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                  />
                  <div className="ml-3 sm:ml-4">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Controls Instructions */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Click on any video to play/pause. Only one video can play at a time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials; 