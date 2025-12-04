import { ArrowUp } from "lucide-react";

const handleScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const Footer = () => {
  return (
    <footer className="w-full py-8 border-t mt-12">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        <p className="text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} Sujan Shrestha. All rights reserved.
        </p>

        <button
          onClick={handleScrollToTop}
          aria-label="Scroll to top"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors
                     focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
};
