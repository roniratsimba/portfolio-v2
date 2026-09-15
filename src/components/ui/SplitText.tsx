import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: 'chars' | 'words' | 'lines';
  from?: { opacity?: number; y?: number; x?: number };
  to?: { opacity?: number; y?: number; x?: number };
  threshold?: number;
  rootMargin?: string;
  textAlign?: 'left' | 'center' | 'right';
  onLetterAnimationComplete?: () => void;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  useScrollTrigger?: boolean;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 50,
  duration = 1.25,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  onLetterAnimationComplete,
  tag = 'p',
  useScrollTrigger = false
}) => {
  const ref = useRef<HTMLElement>(null);
  const animationCompletedRef = useRef(false);
  const onCompleteRef = useRef(onLetterAnimationComplete);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    onCompleteRef.current = onLetterAnimationComplete;
  }, [onLetterAnimationComplete]);

  useEffect(() => {
    if (document.fonts.status === 'loaded') {
      setFontsLoaded(true);
    } else {
      document.fonts.ready.then(() => {
        setFontsLoaded(true);
      });
    }
  }, []);

  useGSAP(
    () => {
      if (!ref.current || !text || !fontsLoaded) return;
      if (animationCompletedRef.current) return;
      
      const el = ref.current;
      
      // Manually split text based on splitType
      let targets: HTMLElement[] = [];
      
      if (splitType === 'chars') {
        const chars = text.split('').map(char => {
          const span = document.createElement('span');
          span.textContent = char === ' ' ? '\u00A0' : char;
          span.className = 'split-char';
          span.style.display = 'inline-block';
          span.style.whiteSpace = 'pre';
          return span;
        });
        el.innerHTML = '';
        chars.forEach(char => el.appendChild(char));
        targets = chars;
      } else if (splitType === 'words') {
        const words = text.split(' ').map(word => {
          const span = document.createElement('span');
          span.textContent = word;
          span.className = 'split-word';
          span.style.display = 'inline-block';
          span.style.marginRight = '0.25em';
          return span;
        });
        el.innerHTML = '';
        words.forEach((word, index) => {
          el.appendChild(word);
          if (index < words.length - 1) {
            const space = document.createElement('span');
            space.textContent = ' ';
            space.style.display = 'inline-block';
            el.appendChild(space);
          }
        });
        targets = words;
      }

      const tween = gsap.fromTo(
        targets,
        from,
        {
          ...to,
          duration,
          ease,
          stagger: delay / 1000,
          onComplete: () => {
            animationCompletedRef.current = true;
            onCompleteRef.current?.();
          },
          willChange: 'transform, opacity',
          force3D: true
        }
      );

      return () => {
        tween.kill();
      };
    },
    {
      dependencies: [
        text,
        delay,
        duration,
        ease,
        splitType,
        JSON.stringify(from),
        JSON.stringify(to),
        fontsLoaded
      ],
      scope: ref
    }
  );

  const style = {
    textAlign,
    overflow: 'hidden',
    display: 'inline-block',
    whiteSpace: 'normal',
    wordWrap: 'break-word' as const,
    willChange: 'transform, opacity' as const
  };

  const classes = `split-parent ${className}`;
  const Tag = tag;

  return (
    <Tag ref={ref} style={style} className={classes}>
      {text}
    </Tag>
  );
};

export default SplitText;
