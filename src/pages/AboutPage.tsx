import React, { useEffect } from 'react';
import { Leaf, Droplets, Users, CheckCircle, Shield, Heart, Globe, Award, Scale, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import NewsletterSection from '../components/home/NewsletterSection';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us | Eseentia';
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-primary-900 py-20">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.pexels.com/photos/4068395/pexels-photo-4068395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Eseentia Corporate" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">Eseentia Corporate</h1>
            <p className="text-xl font-light opacity-90">
              Health, Wellness, and Sustainability Commitments
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <span className="text-primary-600 font-medium">Our Story</span>
              <h2 className="text-3xl font-serif font-semibold mt-2 mb-6">From Vision to Reality</h2>
              <p className="text-neutral-700 mb-6">
                At Eseentia, our journey began with a simple yet powerful vision: to revolutionize the wellness industry through sustainable, science-backed nutrition. What started as a commitment to quality has grown into a global movement for better health and environmental stewardship.
              </p>
              <p className="text-neutral-700">
                Through our exclusive quality protocols and innovative production methods, we've established ourselves as leaders in the spirulina and superfood industry, always maintaining our core values of integrity, sustainability, and transparency.
              </p>
            </motion.div>
            
            <motion.div {...fadeInUp}>
              <img 
                src="https://images.pexels.com/photos/3735155/pexels-photo-3735155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Eseentia Story" 
                className="rounded-lg shadow-lg object-cover h-80 w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <span className="text-primary-600 font-medium">Our Mission</span>
              <h2 className="text-3xl font-serif font-semibold mt-2 mb-6">Improving Lives Through Natural Wellness</h2>
              <p className="text-neutral-700 mb-6">
                At Eseentia, our mission is to improve lives by delivering safe, effective, and ethically produced spirulina and superfood-based wellness products.
              </p>
              <p className="text-neutral-700">
                Every product is manufactured following Eseentia's exclusive quality protocols, ensuring precision, purity, and purpose in every formulation.
              </p>
            </motion.div>
            
            <motion.div {...fadeInUp}>
              <span className="text-primary-600 font-medium">Our Vision</span>
              <h2 className="text-3xl font-serif font-semibold mt-2 mb-6">Global Leadership in Sustainable Wellness</h2>
              <p className="text-neutral-700 mb-6">
                We envision Eseentia as a global leader in sustainable wellness, where each product reflects our commitment to authenticity, scientific precision, and environmental stewardship.
              </p>
              <ul className="space-y-3 text-neutral-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Developing products under proprietary standards</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Fostering lasting partnerships with authorized production units</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Driving innovation through nature and research</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section id="values" className="py-16 bg-neutral-50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-medium">Core Values & Ethics</span>
            <h2 className="text-3xl font-serif font-semibold mt-2 mb-4">What Defines Us</h2>
            <p className="max-w-2xl mx-auto text-neutral-700">
              Our values are not aspirational — they are operational realities that define our relationships, decisions, and products.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div {...fadeInUp} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
                <Scale size={24} />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">Integrity</h3>
              <p className="text-neutral-700">
                We uphold the highest ethical standards across our integrated production and supply operations.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-secondary-100 text-secondary-600 rounded-full flex items-center justify-center mb-4">
                <Leaf size={24} />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">Sustainability</h3>
              <p className="text-neutral-700">
                Environmental stewardship guides everything from sourcing to production protocols.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center mb-4">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">Transparency</h3>
              <p className="text-neutral-700">
                We guarantee transparency at every level of our operations and product development.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">Innovation</h3>
              <p className="text-neutral-700">
                Our processes are continually refined using evidence-backed research and advanced methodologies.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-secondary-100 text-secondary-600 rounded-full flex items-center justify-center mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">Respect & Inclusion</h3>
              <p className="text-neutral-700">
                We foster diversity, equality, and mutual respect across our certified networks.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section id="quality" className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-medium">Quality Assurance & Compliance</span>
            <h2 className="text-3xl font-serif font-semibold mt-2 mb-4">Our Commitment to Excellence</h2>
            <p className="max-w-2xl mx-auto text-neutral-700">
              Quality is not a checkpoint — it is the foundation of everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div {...fadeInUp} className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-serif font-semibold mb-4">Testing & Validation</h3>
              <ul className="space-y-3 text-neutral-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Purity & Potency Testing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Microbiological Analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Heavy Metal Screening</span>
                </li>
              </ul>
            </motion.div>

            <motion.div {...fadeInUp} className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-serif font-semibold mb-4">Manufacturing Standards</h3>
              <ul className="space-y-3 text-neutral-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-1 flex-shrink-0" />
                  <span>GMP Compliance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-1 flex-shrink-0" />
                  <span>ISO 9001 & 22000</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Global Regulatory Standards</span>
                </li>
              </ul>
            </motion.div>

            <motion.div {...fadeInUp} className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-serif font-semibold mb-4">Traceability</h3>
              <ul className="space-y-3 text-neutral-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Batch-Level Control</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Ingredient Origin Tracking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Continuous Improvement</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section id="sustainability" className="py-16 bg-neutral-50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-medium">Sustainability Policy</span>
            <h2 className="text-3xl font-serif font-semibold mt-2 mb-4">Our Environmental Commitment</h2>
            <p className="max-w-2xl mx-auto text-neutral-700">
              Sustainability is woven into the very fabric of our operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div {...fadeInUp} className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-4">
                  <Globe size={24} />
                </div>
                <h3 className="text-xl font-serif font-semibold">Environmental Impact Reduction</h3>
              </div>
              <ul className="space-y-3 text-neutral-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Energy Efficiency Upgrades</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Water Stewardship</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Carbon Footprint Reduction</span>
                </li>
              </ul>
            </motion.div>

            <motion.div {...fadeInUp} className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-secondary-100 text-secondary-600 rounded-full flex items-center justify-center mr-4">
                  <Leaf size={24} />
                </div>
                <h3 className="text-xl font-serif font-semibold">Sustainable Packaging</h3>
              </div>
              <ul className="space-y-3 text-neutral-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Eco-Friendly Materials</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Zero-Waste Targets</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Packaging Innovations</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Data & Privacy */}
      <section id="privacy" className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-medium">Data & Privacy Policy</span>
            <h2 className="text-3xl font-serif font-semibold mt-2 mb-4">Your Trust Matters</h2>
            <p className="max-w-2xl mx-auto text-neutral-700">
              We safeguard the privacy and data security of our customers, partners, and stakeholders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div {...fadeInUp} className="bg-neutral-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Lock className="w-6 h-6 text-primary-600 mr-3" />
                <h3 className="text-xl font-serif font-semibold">Data Protection</h3>
              </div>
              <p className="text-neutral-700">
                Secure infrastructure with encrypted servers and multi-layer access controls.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} className="bg-neutral-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-primary-600 mr-3" />
                <h3 className="text-xl font-serif font-semibold">Privacy Rights</h3>
              </div>
              <p className="text-neutral-700">
                Complete control over your data with access, correction, and deletion rights.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} className="bg-neutral-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Globe className="w-6 h-6 text-primary-600 mr-3" />
                <h3 className="text-xl font-serif font-semibold">Global Compliance</h3>
              </div>
              <p className="text-neutral-700">
                Adherence to international data protection standards and regulations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />
    </div>
  );
};

export default AboutPage;