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
  { icon: Mail, label: "Email", value: () => portfolioData.email, color: "bg-blue-100 text-blue-600" },
  { icon: Phone, label: "Phone", value: () => portfolioData.phone, color: "bg-emerald-100 text-emerald-600" },
  { icon: MapPin, label: "Location", value: () => portfolioData.location, color: "bg-purple-100 text-purple-600" },
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
    <section id="contact" className="py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(59, 130, 246, 0.08) 2px, transparent 2px)`,
          backgroundSize: "50px 50px",
        }}
      />
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-20 left-20 w-56 h-56 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full blur-3xl opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">Get in touch</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mt-3 mb-4">Let's Connect</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
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
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 space-y-5">
              <h3 className="text-lg font-bold text-slate-900">Get In Touch</h3>
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className={`w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 ${item.color}`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-slate-900 font-medium text-sm">{item.label}</p>
                    <p className="text-slate-600 text-sm truncate">{item.value()}</p>
                  </div>
                </div>
              ))}

              <div className="pt-2 border-t border-slate-100">
                <h4 className="text-sm font-semibold text-slate-900 mb-3">Connect on Social</h4>
                <div className="flex gap-3">
                  <motion.a
                    href={portfolioData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
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
                    className="w-11 h-11 bg-slate-800 hover:bg-slate-900 rounded-full flex items-center justify-center transition-colors"
                    data-testid="link-github-contact"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="text-white w-5 h-5" />
                  </motion.a>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-slate-100 text-emerald-600 text-sm font-medium">
                <CheckCircle2 className="w-4 h-4" />
                Usually responds within 24 hours
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-3 bg-white rounded-2xl border border-slate-100 shadow-sm p-7"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold text-slate-900 mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="name" className="text-slate-700 mb-2 block text-sm">
                    Name
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your Name"
                    required
                    data-testid="input-name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-slate-700 mb-2 block text-sm">
                    Email
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="your.email@example.com"
                    required
                    data-testid="input-email"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="subject" className="text-slate-700 mb-2 block text-sm">
                  Subject
                </Label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="What's this about?"
                  required
                  data-testid="input-subject"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-slate-700 mb-2 block text-sm">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                  required
                  data-testid="textarea-message"
                />
              </div>

              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
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
