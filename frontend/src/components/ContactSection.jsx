import { Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) throw new Error(result.message || "Submission failed");

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", subject: "", message: "", honeypot: "" });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error!",
        description: error.message || "Could not send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative px-4 py-32">
      <div className="container max-w-5xl mx-auto">
        <h2 className="mb-6 text-3xl font-bold text-center md:text-5xl">
          Get In <span className="text-primary text-glow"> Touch</span>
        </h2>
        <p className="max-w-2xl mx-auto mb-16 text-lg text-center text-muted-foreground">
          Have a project in mind? Let's discuss new opportunities.
        </p>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="mb-6 text-2xl font-bold">Contact Information</h3>
            <div className="space-y-6">
              <ContactInfoItem icon={<Mail className="w-5 h-5" />} label="Email" value="maulikgan80@gmail.com" href="mailto:maulikgan80@gmail.com" />
              <ContactInfoItem icon={<Phone className="w-5 h-5" />} label="Phone" value="+91 8140313930" href="tel:+918140313930" />
              <ContactInfoItem icon={<MapPin className="w-5 h-5" />} label="Location" value="Vadodara, Gujarat, India" />
            </div>
            
            <div className="pt-8 border-t border-border/50">
              <h4 className="mb-4 font-medium text-muted-foreground">Connect With Me</h4>
              <div className="flex space-x-4">
                <SocialLink href="https://www.linkedin.com/in/maulik-gandhi-70b649370/" icon={<Linkedin />} />
                <SocialLink href="https://www.instagram.com/mr.gandhi_2411?igsh=NDNjcGk5Z3lwcGFx" icon={<Instagram />} />
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="p-8 glass-card">
            <h3 className="mb-6 text-2xl font-semibold">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <input type="text" name="honeypot" className="hidden" value={formData.honeypot} onChange={handleChange} tabIndex="-1" autoComplete="off" />

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <InputField label="Your Name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" />
                <InputField label="Your Email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" />
              </div>
              
              <InputField label="Subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Project Inquiry" />
              
              <div>
                <label className="block mb-2 text-sm font-medium text-foreground/80">Your Message</label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full h-32 px-4 py-3 transition-all border rounded-lg outline-none resize-none bg-secondary/30 border-white/10 focus:border-primary focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground/50"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn("cosmic-button w-full flex items-center justify-center gap-2", isSubmitting && "opacity-70 cursor-not-allowed")}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfoItem = ({ icon, label, value, href }) => (
  <div className="flex items-center space-x-4">
    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">{icon}</div>
    <div>
      <h4 className="text-sm font-medium text-muted-foreground">{label}</h4>
      {href ? <a href={href} className="text-lg font-semibold transition-colors hover:text-primary">{value}</a> : <span className="text-lg font-semibold">{value}</span>}
    </div>
  </div>
);

const SocialLink = ({ href, icon }) => (
  <a href={href} target="_blank" rel="noreferrer" className="flex items-center justify-center w-10 h-10 transition-all rounded-full bg-secondary hover:bg-primary hover:text-white">
    {icon}
  </a>
);

const InputField = ({ label, type = "text", ...props }) => (
  <div>
    <label className="block mb-2 text-sm font-medium text-foreground/80">{label}</label>
    <input type={type} required className="w-full px-4 py-3 transition-all border rounded-lg outline-none bg-secondary/30 border-white/10 focus:border-primary focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground/50" {...props} />
  </div>
);