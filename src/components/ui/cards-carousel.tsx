"use client";

import type React from "react";
import {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
  useCallback,
} from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Smartphone,
  Code,
  Globe,
  Palette,
  Database,
  Shield,
  Cloud,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ContactForm } from "@/components/Contact-form";

interface CarouselProps {
  items: React.JSX.Element[];
  initialScroll?: number;
}

type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
  bgImage?: string;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
}>({
  onCardClose: () => {},
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll || 0;
    }
  }, [initialScroll]);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth =
        typeof window !== "undefined" && window.innerWidth < 768 ? 230 : 320;
      const gap = 24;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <CarouselContext.Provider value={{ onCardClose: handleCardClose }}>
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          ref={carouselRef}
        >
          <div className="absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l from-[#d7f5e9] to-transparent" />
          <div className="flex flex-row justify-start pl-4 gap-6 pr-[5%] md:pr-[10%]">
            {items.map((item, index) => (
              <div key={`card-${index}`} className="rounded-3xl flex-shrink-0">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mx-auto gap-2">
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm border border-emerald-200 hover:bg-white hover:shadow-lg transition-all duration-200"
            onClick={scrollLeft}
          >
            <ChevronLeft className="h-6 w-6 text-emerald-600" />
          </button>
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm border border-emerald-200 hover:bg-white hover:shadow-lg transition-all duration-200"
            onClick={scrollRight}
          >
            <ChevronRight className="h-6 w-6 text-emerald-600" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  isAMC = false,
}: {
  card: Card;
  index: number;
  isAMC?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose } = useContext(CarouselContext);
  const [imageLoaded, setImageLoaded] = useState(!card.bgImage);

  const handleClose = useCallback(() => {
    setOpen(false);
    onCardClose(index);
  }, [index, onCardClose]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
        setShowContactForm(false);
      }
    }

    if (open || showContactForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, showContactForm, handleClose]);

  const handleOpen = () => {
    if (isAMC) {
      setShowContactForm(true);
    } else {
      setOpen(true);
    }
  };

  // Icon mapping
  const getIcon = (title: string) => {
    if (title.includes("Mobile")) return Smartphone;
    if (title.includes("Software")) return Code;
    if (title.includes("Digital")) return Globe;
    if (title.includes("Design")) return Palette;
    if (title.includes("IT")) return Database;
    if (title.includes("DevOps")) return Shield;
    if (title.includes("Cloud")) return Cloud;
    if (title.includes("Annual") || title.includes("AMC")) return Settings;
    return Code;
  };

  const IconComponent = getIcon(card.title);

  return (
    <>
      {/* Contact Form Modal for AMC */}
      {showContactForm && (
        <ContactForm onClose={() => setShowContactForm(false)} />
      )}

      {/* Regular Service Modal */}
      {open && !isAMC && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop with enhanced blur */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xl transition-all duration-300"
            onClick={handleClose}
          />

          {/* Modal Container - Perfectly Centered */}
          <div
            ref={containerRef}
            className="relative z-[60] w-full max-w-2xl max-h-[85vh] overflow-auto
            bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl 
            border border-white/20 transform transition-all duration-300 
            animate-in fade-in-0 zoom-in-95 slide-in-from-bottom-4"
          >
            {/* Header Section with Gradient */}
            <div className="relative p-8 pb-6 bg-gradient-to-br from-emerald-50/80 via-white/50 to-teal-50/80 rounded-t-3xl">
              {/* Close Button - Enhanced */}
              <button
                className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center 
                rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/50
                hover:bg-white hover:shadow-lg hover:scale-105 transition-all duration-200
                group"
                onClick={handleClose}
              >
                <X className="h-5 w-5 text-gray-600 group-hover:text-gray-800 transition-colors" />
              </button>

              {/* Category Badge */}
              <div
                className="inline-flex items-center space-x-2 bg-emerald-100/80 backdrop-blur-sm 
              rounded-full px-4 py-2 mb-4 border border-emerald-200/50"
              >
                <IconComponent className="w-4 h-4 text-emerald-600" />
                <span className="text-sm font-medium text-emerald-700">
                  {card.category}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-2">
                {card.title}
              </h2>

              {/* Decorative line */}
              <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
            </div>

            {/* Content Section */}
            <div className="p-8 pt-6">
              <div className="prose prose-gray max-w-none">{card.content}</div>
            </div>

            {/* Footer with subtle gradient */}
            <div className="h-2 bg-gradient-to-r from-emerald-100 via-teal-50 to-emerald-100 rounded-b-3xl"></div>
          </div>
        </div>
      )}

      {/* Enhanced Card with Bottom Section Design */}
      <button
        onClick={handleOpen}
        className="relative z-10 flex h-72 w-56 flex-col items-start justify-end overflow-hidden rounded-3xl 
        md:h-80 md:w-72 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl group"
      >
        {/* Background Image */}
        {card.bgImage && (
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={card.bgImage || "/placeholder.svg"}
              alt={card.title}
              fill
              sizes="(max-width: 768px) 224px, 288px"
              className={cn(
                "object-cover transition-all duration-300 group-hover:scale-110",
                imageLoaded ? "opacity-100" : "opacity-0"
              )}
              onLoad={() => setImageLoaded(true)}
            />
          </div>
        )}

        {/* Icon in top right */}
        <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
          <IconComponent className="w-6 h-6 text-white" />
        </div>

        {/* Bottom translucent section */}
        <div className="relative z-40 w-full bg-black/70 backdrop-blur-sm p-6 border-t border-white/20 text-left">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
            <span className="text-xs font-medium text-emerald-300 uppercase tracking-wide">
              {card.category}
            </span>
          </div>

          <h3 className="text-white font-sans text-xl font-semibold leading-snug min-h-[56px] text-left">
            {card.title}
          </h3>

          {/* Bottom accent line */}
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
        </div>
      </button>
    </>
  );
};
