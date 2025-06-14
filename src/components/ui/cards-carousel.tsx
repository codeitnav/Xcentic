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
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

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
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll || 0;
    }
  }, [initialScroll]);

  const scrollLeft = () => {
    if (carouselRef.current && !isScrolling) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current && !isScrolling) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (carouselRef.current && !isScrolling) {
      const { scrollLeft } = carouselRef.current;
      const cardWidth =
        typeof window !== "undefined" && window.innerWidth < 768 ? 230 : 320;
      const gap = 24;
      const setGap = 80;
      const setWidth = items.length * (cardWidth + gap) + setGap;

      if (scrollLeft >= setWidth * 2) {
        setIsScrolling(true);
        carouselRef.current.scrollLeft = scrollLeft - setWidth;
        setTimeout(() => setIsScrolling(false), 50);
      }

      if (scrollLeft <= 0) {
        setIsScrolling(true);
        carouselRef.current.scrollLeft = scrollLeft + setWidth;
        setTimeout(() => setIsScrolling(false), 50);
      }
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
          onScroll={handleScroll}
        >
          <div className="absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l from-[#d7f5e9] to-transparent" />
          <div className="flex flex-row justify-start pl-4">
            {/* First Set */}
            <div className="flex flex-row gap-6">
              {items.map((item, index) => (
                <div
                  key={`set1-card-${index}`}
                  className="rounded-3xl flex-shrink-0"
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Larger gap between sets with visual indicator */}
            <div className="flex items-center justify-center px-10 flex-shrink-0">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse delay-100"></div>
                <div className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse delay-200"></div>
              </div>
            </div>

            {/* Second Set */}
            <div className="flex flex-row gap-6">
              {items.map((item, index) => (
                <div
                  key={`set2-card-${index}`}
                  className="rounded-3xl flex-shrink-0"
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Larger gap between sets with visual indicator */}
            <div className="flex items-center justify-center px-10 flex-shrink-0">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse delay-100"></div>
                <div className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse delay-200"></div>
              </div>
            </div>

            {/* Third Set */}
            <div className="flex flex-row gap-6 pr-[5%] md:pr-[33%]">
              {items.map((item, index) => (
                <div
                  key={`set3-card-${index}`}
                  className="rounded-3xl flex-shrink-0"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mr-10 flex justify-end gap-2">
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

export const Card = ({ card, index }: { card: Card; index: number }) => {
  const [open, setOpen] = useState(false);
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
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, handleClose]);

  const handleOpen = () => setOpen(true);

  // Icon mapping
  const getIcon = (title: string) => {
    if (title.includes("Mobile")) return Smartphone;
    if (title.includes("Software")) return Code;
    if (title.includes("Digital")) return Globe;
    if (title.includes("Design")) return Palette;
    if (title.includes("IT")) return Database;
    if (title.includes("DevOps")) return Shield;
    if (title.includes("Cloud")) return Cloud;
    return Code;
  };

  const IconComponent = getIcon(card.title);

  return (
    <>
      {/* Enhanced Modal with Perfect Centering */}
      {open && (
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
              <div className="inline-flex items-center space-x-2 bg-emerald-100/80 backdrop-blur-sm 
              rounded-full px-4 py-2 mb-4 border border-emerald-200/50">
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
              <div className="prose prose-gray max-w-none">
                {card.content}
              </div>
            </div>

            {/* Footer with subtle gradient */}
            <div className="h-2 bg-gradient-to-r from-emerald-100 via-teal-50 to-emerald-100 rounded-b-3xl"></div>
          </div>
        </div>
      )}

      {/* Enhanced Card */}
      <button
        onClick={handleOpen}
        className="relative z-10 flex h-72 w-56 flex-col items-start justify-start overflow-hidden rounded-3xl 
        md:h-80 md:w-72 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl group"
        style={{
          background: card.bgImage
            ? "none"
            : "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.3)",
        }}
      >
        {/* Background Image (if provided) */}
        {card.bgImage && (
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={card.bgImage || "/placeholder.svg"}
              alt={card.title}
              fill
              sizes="(max-width: 768px) 224px, 288px"
              className={cn(
                "object-cover transition-opacity duration-300",
                imageLoaded ? "opacity-100" : "opacity-0"
              )}
              onLoad={() => setImageLoaded(true)}
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
          </div>
        )}

        {/* Gradient overlay */}
        <div
          className={cn(
            "absolute inset-0 transition-opacity duration-300",
            card.bgImage
              ? "bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-100"
              : "bg-gradient-to-br from-emerald-50/50 via-transparent to-teal-50/50 opacity-0 group-hover:opacity-100"
          )}
        />

        {/* Icon background */}
        <div className="absolute top-4 right-4 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity duration-300">
          <IconComponent className="w-6 h-6 text-emerald-600" />
        </div>

        {/* Content */}
        <div className="relative z-40 p-6 h-full flex flex-col justify-between">
          <div>
            <div
              className={cn(
                "inline-flex items-center space-x-2 backdrop-blur-sm rounded-full px-3 py-1 mb-4",
                card.bgImage ? "bg-black/30" : "bg-emerald-100/80"
              )}
            >
              <IconComponent
                className={cn(
                  "w-4 h-4",
                  card.bgImage ? "text-white" : "text-emerald-600"
                )}
              />
              <span
                className={cn(
                  "text-xs font-medium",
                  card.bgImage ? "text-white" : "text-emerald-700"
                )}
              >
                {card.category}
              </span>
            </div>
            <h3
              className={cn(
                "text-left font-sans text-lg font-semibold md:text-xl leading-tight",
                card.bgImage ? "text-white" : "text-gray-900"
              )}
            >
              {card.title}
            </h3>
          </div>

          {/* Bottom accent */}
          <div className="flex items-center justify-between mt-4">
            <div
              className={cn(
                "w-8 h-1 rounded-full",
                card.bgImage
                  ? "bg-white"
                  : "bg-gradient-to-r from-emerald-400 to-teal-400"
              )}
            ></div>
            <div
              className={cn(
                "w-6 h-6 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                card.bgImage ? "bg-white" : "bg-emerald-500"
              )}
            >
              <ChevronRight
                className={cn(
                  "w-4 h-4",
                  card.bgImage ? "text-black" : "text-white"
                )}
              />
            </div>
          </div>
        </div>

        {/* Hover effect border */}
        <div
          className={cn(
            "absolute inset-0 rounded-3xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
            card.bgImage ? "border-white/50" : "border-emerald-200"
          )}
        />
      </button>
    </>
  );
};
