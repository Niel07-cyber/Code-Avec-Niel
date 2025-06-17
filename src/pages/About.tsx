import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import avatarImg from "../../assets/ceo.jpg"
import { 
  Users, 
  Target, 
  Award, 
  Heart,
  Code,
  Zap,
  Globe,
  Mail,
  Phone,
  MapPin,
  Send
} from "lucide-react";

const About = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const stats = [
    { icon: Users, label: "Students", value: "100K+", color: "text-blue-600" },
    { icon: Award, label: "Courses", value: "50+", color: "text-green-600" },
    { icon: Globe, label: "Countries", value: "120+", color: "text-purple-600" },
    { icon: Heart, label: "Success Rate", value: "95%", color: "text-red-600" }
  ];

  const values = [
    {
      icon: Code,
      title: "Quality Education",
      description: "We provide high-quality, practical programming education that prepares students for real-world challenges."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We constantly innovate our teaching methods and curriculum to stay ahead of industry trends."
    },
    {
      icon: Users,
      title: "Community",
      description: "We foster a supportive learning community where students can grow together and help each other succeed."
    },
    {
      icon: Target,
      title: "Results-Focused",
      description: "Our courses are designed with clear learning outcomes and practical skills that employers value."
    }
  ];

  const team = [
    {
      name: "Othniel Aryee",
      role: "CEO & Founder",
      bio: "Software Engineering student at Junia ISEN with a passion for education and technology. Dedicated to making programming accessible to everyone.",
      image: "../../assets/ceo.jpg",
      skills: ["JavaScript", "Python", "React", "Node.js"]
    },
    {
      name: "Angelo De Souza",
      role: "Tech Lead",
      bio: "Experienced technical leader with expertise in full-stack development and system architecture. Passionate about building scalable solutions and mentoring developers.",
      image: "../../assets/dizzy.jpg",
      skills: ["TypeScript", "React", "Node.js", "AWS"]
    },
    {
      name: "Sharon Naa Sowah",
      role: "Talent Acquisition Manager",
      bio: "Human Resources specialist focused on creating inclusive work environments and fostering talent development. Expert in team building and organizational culture.",
      image: "../../assets/naa.jpg",
      skills: ["Team Building", "Recruitment", "Training", "Culture"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="text-blue-600 dark:text-blue-400">CodewithNiel</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            We're on a mission to democratize programming education and empower the next generation of developers 
            with practical skills and industry knowledge.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white dark:bg-gray-800 shadow-lg mb-4 ${stat.color}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              To make high-quality programming education accessible to everyone, regardless of their background or location. 
              We believe that coding skills can transform lives and create opportunities for a better future.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mb-4">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The passionate individuals behind CodewithNiel's success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {team.map((member, index) => (
              <Card key={index} className="max-w-md mx-auto hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                  />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{member.bio}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Get in Touch</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Have questions or want to collaborate? We'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                      <p className="text-gray-600 dark:text-gray-300">aryeeothniel@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Phone</h3>
                      <p className="text-gray-600 dark:text-gray-300">+33 780759499</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Location</h3>
                      <p className="text-gray-600 dark:text-gray-300">Lille, France</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
