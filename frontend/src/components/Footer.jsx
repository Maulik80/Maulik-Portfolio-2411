import { ArrowUp } from "lucide-react"


export const Footer = () => {
    return (
         <footer className="relative flex flex-wrap items-center justify-between px-4 py-12 pt-8 mt-12 border-t bg-card border-border">
      {" "}
      <p className="text-sm text-muted-foreground">
        {" "}
        &copy; {new Date().getFullYear()} Maulik.co. All rights reserved.
      </p>
      <a
        href="#hero"
        className="p-2 transition-colors rounded-full bg-primary/10 hover:bg-primary/20 text-primary"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
    )
}