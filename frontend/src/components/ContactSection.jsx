import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react";
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
    honeypot: "", // Hidden field for bot detection
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

 const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Dynamic URL: Uses VITE_API_URL from .env if available, otherwise defaults to localhost
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
    <section id="contact" className="relative px-4 py-24 bg-secondary/30">
      <div className="container max-w-5xl mx-auto">
        <h2 className="mb-4 text-3xl font-bold text-center md:text-4xl">
          Get In <span className="text-primary"> Touch</span>
        </h2>
        <p className="max-w-2xl mx-auto mb-12 text-center text-muted-foreground">
          Have a project in mind? Let's discuss new opportunities.
        </p>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="mb-6 text-2xl font-semibold">Contact Information</h3>
            <div className="space-y-6">
              <ContactInfoItem icon={<Mail className="text-primary" />} label="Email" value="maulikgan80@gmail.com" href="mailto:maulikgan80@gmail.com" />
              <ContactInfoItem icon={<Phone className="text-primary" />} label="Phone" value="+91 8140313930" href="tel:+918140313930" />
              <ContactInfoItem icon={<MapPin className="text-primary" />} label="Location" value="Vadodara, Gujarat, India" />
            </div>
            <div className="pt-8">
              <h4 className="mb-4 font-medium">Connect With Me</h4>
              <div className="flex space-x-4">
                <SocialLink href="https://www.linkedin.com/in/maulik-gandhi-70b649370/" icon={<Linkedin />} />
                <SocialLink href="https://www.instagram.com/mr.gandhi_2411?igsh=NDNjcGk5Z3lwcGFx" icon={<Instagram />} />
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="p-8 rounded-lg shadow-sm bg-card">
            <h3 className="mb-6 text-2xl font-semibold">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* HONEYPOT - Hidden from humans */}
              <input type="text" name="honeypot" className="hidden" value={formData.honeypot} onChange={handleChange} tabIndex="-1" autoComplete="off" />

              <InputField label="Your Name" name="name" value={formData.name} onChange={handleChange} placeholder="Maulik Gandhi" />
              <InputField label="Your Email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="maulik@example.com" />
              <InputField label="Subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Project Inquiry" />
              
              <div>
                <label className="block mb-2 text-sm font-medium">Your Message</label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full h-32 px-4 py-3 border rounded-md resize-none border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn("cosmic-button w-full flex items-center justify-center gap-2", isSubmitting && "opacity-70")}
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

// Reusable Components
const ContactInfoItem = ({ icon, label, value, href }) => (
  <div className="flex items-start space-x-4">
    <div className="p-3 rounded-full bg-primary/10">{icon}</div>
    <div>
      <h4 className="font-medium">{label}</h4>
      {href ? <a href={href} className="transition-colors text-muted-foreground hover:text-primary">{value}</a> : <span className="text-muted-foreground">{value}</span>}
    </div>
  </div>
);

const SocialLink = ({ href, icon }) => (
  <a href={href} target="_blank" className="transition-colors text-muted-foreground hover:text-primary">{icon}</a>
);

const InputField = ({ label, type = "text", ...props }) => (
  <div>
    <label className="block mb-2 text-sm font-medium">{label}</label>
    <input type={type} required className="w-full px-4 py-3 border rounded-md border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary" {...props} />
  </div>
);