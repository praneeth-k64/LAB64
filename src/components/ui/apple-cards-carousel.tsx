"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { ImageProps } from "next/image";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { TextRoll } from "@/components/ui/text-roll";
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogDescription,
  MorphingDialogContainer,
} from '@/components/core/morphing-dialog';

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

export type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

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
      const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none] md:py-20"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div
            className={cn(
              "absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l",
            )}
          ></div>

          <div
            className={cn(
              "flex flex-row justify-start gap-4 pl-4",
              "mx-auto max-w-7xl", // remove max-w-4xl if you want the carousel to span the full width of its container
            )}
          >
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 * index,
                  ease: "easeOut",
                }}
                key={"card" + index}
                className="rounded-3xl last:pr-[5%] md:last:pr-[33%]"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mr-10 flex justify-end gap-2">
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
          </button>
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [animationTrigger, setAnimationTrigger] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose } = useContext(CarouselContext);

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
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 h-screen overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-full w-full bg-black/80 backdrop-blur-lg"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="relative z-[60] mx-auto my-10 h-fit max-w-5xl rounded-3xl bg-black overflow-hidden font-sans"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={card.src}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay - transparent at top, black at bottom */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 md:p-12 min-h-[600px] flex flex-col">
                {/* Close button */}
                <button
                  className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors"
                  onClick={handleClose}
                >
                  <IconX className="h-6 w-6 text-white" />
                </button>

                {/* Top content - Category and Title */}
                <div className="mb-auto">
                  <motion.p
                    layoutId={layout ? `category-${card.category}` : undefined}
                    className="text-sm font-ibm-plex-sans font-medium text-white/80"
                  >
                    {card.category}
                  </motion.p>
                  <motion.p
                    layoutId={layout ? `title-${card.title}` : undefined}
                    className="mt-2 text-3xl md:text-5xl font-rajdhani font-bold text-white"
                  >
                    {card.title}
                  </motion.p>
                </div>

                {/* Bottom content - Description */}
                <div className="mt-auto pt-8">
                  {card.content}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <div className="relative z-10 h-80 w-56 rounded-3xl border border-transparent p-[2px] md:h-[40rem] md:w-96">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <motion.button
          layoutId={layout ? `card-${card.title}` : undefined}
          onClick={handleOpen}
          onMouseEnter={() => {
            setIsHovered(true);
            setAnimationTrigger((prev) => prev + 1);
          }}
          onMouseLeave={() => setIsHovered(false)}
          className="relative flex h-full w-full flex-col items-start justify-end overflow-hidden rounded-3xl bg-gray-100 dark:bg-neutral-900"
        >
          <img
            src={card.src}
            alt={card.title}
            className="absolute inset-0 w-full h-full z-10 object-cover"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-full bg-gradient-to-t from-black via-black/60 to-transparent" />
          <div className="relative z-40 p-6 md:p-8">
            <motion.p
              layoutId={layout ? `category-${card.category}` : undefined}
              className="text-left font-ibm-plex-sans text-xs font-medium text-white/80 md:text-sm"
            >
              {card.category}
            </motion.p>
            <motion.p
              layoutId={layout ? `title-${card.title}` : undefined}
              className="mt-2 max-w-xs text-left font-rajdhani text-xl font-bold [text-wrap:balance] text-white md:text-3xl"
            >
              <TextRoll
                duration={0.2}
                getEnterDelay={(i) => i * 0.01}
                getExitDelay={(i) => i * 0.01 + 0.05}
                trigger={animationTrigger}
              >
                {card.title}
              </TextRoll>
            </motion.p>
          </div>
        </motion.button>
      </div>
    </>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <img
      className={cn(
        "h-full w-full object-cover transition-opacity duration-500",
        isLoading && !hasError ? "opacity-0" : "opacity-100",
        className,
      )}
      onLoad={() => setLoading(false)}
      onError={() => {
        setHasError(true);
        setLoading(false);
      }}
      src={src as string}
      width={typeof width === "number" ? width : undefined}
      height={typeof height === "number" ? height : undefined}
      loading="eager"
      decoding="async"
      crossOrigin="anonymous"
      alt={alt ? alt : "Background of a beautiful view"}
    />
  );
};
