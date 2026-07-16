import { useState } from "react";
import { portfolioData } from "@/data/portfolio-data";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const contactInfo = [
  { icon: Mail, label: "Email", value: () => portfolioData.email, color: "bg-teal-400/10 text-teal-300 border border-teal-400/25" },
  { icon: Phone, label: "Phone", value: () => portfolioData.phone, color: "bg-indigo-400/10 text-indigo-300 border border-indigo-400/25" },
  { icon: MapPin, label: "Location", value: () => portfolioData.location, color: "bg-teal-400/10 text-teal-300 border border-teal-400/25" },
];

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message Sent!",
        description: data.message,
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  return (
    <section id="contact" className="py-24 bg-[#0b0e13] relative overflow-hidden">
      <div className="absolute top-20 right-20 w-72 h-72 bg-teal-500/[0.06] rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-20 w-56 h-56 bg-indigo-500/[0.06] rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-teal-300 font-semibold text-sm tracking-widest uppercase">Get in touch</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white mt-3 mb-4">Let's Connect</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-300 to-indigo-400 mx-auto rounded-full mb-6" />
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Ready to collaborate on innovative projects or discuss exciting opportunities? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Contact Information */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white/[0.03] rounded-lg border border-white/10 p-6 space-y-5">
              <h3 className="text-lg font-bold text-white">Get In Touch</h3>
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className={`w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 ${item.color}`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-white font-medium text-sm">{item.label}</p>
                    <p className="text-slate-400 text-sm truncate">{item.value()}</p>
                  </div>
                </div>
              ))}

              <div className="pt-2 border-t border-white/10">
                <h4 className="text-sm font-semibold text-white mb-3">Connect on Social</h4>
                <div className="flex gap-3">
                  <motion.a
                    href={portfolioData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 bg-white/5 border border-white/10 hover:bg-indigo-400/20 hover:border-indigo-400/30 rounded-full flex items-center justify-center transition-colors"
                    data-testid="link-linkedin-contact"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaLinkedin className="text-white w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href={portfolioData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 rounded-full flex items-center justify-center transition-colors"
                    data-testid="link-github-contact"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="text-white w-5 h-5" />
                  </motion.a>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-white/10 text-teal-300 text-sm font-medium">
                <CheckCircle2 className="w-4 h-4" />
                Usually responds within 24 hours
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-3 bg-white/[0.03] rounded-lg border border-white/10 p-7"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold text-white mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="name" className="text-slate-300 mb-2 block text-sm">
                    Name
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border-white/10 text-white placeholder-slate-500 focus:ring-2 focus:ring-teal-400/50 focus:border-teal-400/50"
                    placeholder="Your Name"
                    required
                    data-testid="input-name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-slate-300 mb-2 block text-sm">
                    Email
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border-white/10 text-white placeholder-slate-500 focus:ring-2 focus:ring-teal-400/50 focus:border-teal-400/50"
                    placeholder="your.email@example.com"
                    required
                    data-testid="input-email"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="subject" className="text-slate-300 mb-2 block text-sm">
                  Subject
                </Label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full bg-white/5 border-white/10 text-white placeholder-slate-500 focus:ring-2 focus:ring-teal-400/50 focus:border-teal-400/50"
                  placeholder="What's this about?"
                  required
                  data-testid="input-subject"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-slate-300 mb-2 block text-sm">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full bg-white/5 border-white/10 text-white placeholder-slate-500 focus:ring-2 focus:ring-teal-400/50 focus:border-teal-400/50 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                  required
                  data-testid="textarea-message"
                />
              </div>

              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-white text-[#0a0d12] font-semibold hover:bg-slate-100 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                data-testid="button-send-message"
              >
                {contactMutation.isPending ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
