import React, { useEffect, useRef, useState } from "react";

interface HighlightBit {
  text: string;
  occurrence?: number;
}

interface BlurHighlightAnimatedParagraphProps {
  children: React.ReactNode;
  highlightedBits: (string | HighlightBit)[];
  highlightColor?: string;
  highlightClassName?: string;
  blurAmount?: number;
  inactiveOpacity?: number;
  blurDelay?: number;
  blurDuration?: number;
  highlightDelay?: number;
  highlightDuration?: number;
  highlightDirection?: "left" | "right" | "top" | "bottom";
  viewportOptions?: { once?: boolean; amount?: number };
  className?: string;
}

export const BlurHighlightAnimatedParagraph: React.FC<
  BlurHighlightAnimatedParagraphProps
> = ({
  children,
  highlightedBits,
  highlightColor = "hsl(119, 99%, 44%)",
  highlightClassName = "",
  blurAmount = 8,
  inactiveOpacity = 0.3,
  blurDelay = 0,
  blurDuration = 0.8,
  highlightDelay = 0.4,
  highlightDuration = 1,
  highlightDirection = "right",
  viewportOptions = { once: false, amount: 0.5 },
  className = "",
}) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHighlighted, setIsHighlighted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => {
            setIsHighlighted(true);
          }, highlightDelay * 1000);
        } else {
          if (!viewportOptions.once) {
            setIsVisible(false);
            setIsHighlighted(false);
          }
        }
      },
      {
        threshold: viewportOptions.amount || 0.5,
        rootMargin: "-20%",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [highlightDelay, viewportOptions]);

  const processText = (text: string) => {
    let processedText = text;
    highlightedBits.forEach((bit) => {
      const searchText = typeof bit === "string" ? bit : bit.text;
      const occurrence = typeof bit === "string" ? 0 : (bit.occurrence || 0);
      
      const regex = new RegExp(
        `(${searchText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
        "gi"
      );
      
      let matchCount = 0;
      processedText = processedText.replace(regex, (match) => {
        if (occurrence === 0 || matchCount === occurrence) {
          matchCount++;
          return `<span class="highlight-text ${highlightClassName}" data-highlight="true">${match}</span>`;
        }
        matchCount++;
        return match;
      });
    });
    return processedText;
  };

  const getBackgroundStyle = () => {
    const backgrounds = {
      left: `linear-gradient(to right, ${highlightColor} 0%, transparent 100%)`,
      right: `linear-gradient(to left, ${highlightColor} 0%, transparent 100%)`,
      top: `linear-gradient(to bottom, ${highlightColor} 0%, transparent 100%)`,
      bottom: `linear-gradient(to top, ${highlightColor} 0%, transparent 100%)`,
    };
    return backgrounds[highlightDirection];
  };

  const containerStyle: React.CSSProperties = {
    opacity: isVisible ? 1 : inactiveOpacity,
    filter: isVisible ? "blur(0px)" : `blur(${blurAmount}px)`,
    transition: `opacity ${blurDuration}s ease-in-out, filter ${blurDuration}s ease-in-out`,
    transitionDelay: `${blurDelay}s`,
  };

  const textContent = typeof children === "string" ? children : "";
  const processedHTML = processText(textContent);
  const backgroundStyle = getBackgroundStyle();

  // Apply highlight styles dynamically
  useEffect(() => {
    if (ref.current) {
      const highlightedElements = ref.current.querySelectorAll('.highlight-text');
      highlightedElements.forEach((el) => {
        const span = el as HTMLElement;
        span.style.backgroundImage = backgroundStyle;
        span.style.backgroundRepeat = "no-repeat";
        span.style.padding = "0.1em 0";
        
        // Set initial state first
        if (highlightDirection === "left" || highlightDirection === "right") {
          span.style.backgroundSize = "0% 100%";
        } else {
          span.style.backgroundSize = "100% 0%";
        }
        
        // Force reflow
        void span.offsetWidth;
        
        // Set transition
        span.style.transition = `background-size ${highlightDuration}s ease-in-out`;
        
        // Then set final state if highlighted
        if (isHighlighted) {
          span.style.backgroundSize = "100% 100%";
        }
      });
    }
  }, [isHighlighted, backgroundStyle, highlightDuration, highlightDirection]);

  return (
    <p
      ref={ref}
      className={className}
      style={containerStyle}
      dangerouslySetInnerHTML={{ __html: processedHTML }}
    />
  );
};
