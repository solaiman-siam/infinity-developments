'use client';

import React, { useRef } from 'react';
import type { ReactElement, Ref } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(SplitText, ScrollTrigger);

interface AnimateTextWrapperProps {
  children: ReactElement<{ ref?: Ref<HTMLDivElement> }>;
  animateOnScroll?: boolean;
  delay?: number;
}

export default function AnimateTextWrapper({
  children,
  animateOnScroll = true,
  delay = 0,
}: AnimateTextWrapperProps): ReactElement {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const elements =
        container.hasAttribute('data-copy-wrapper')
          ? Array.from(container.children)
          : [container];

      const lines: HTMLElement[] = [];
      const splitInstances: SplitText[] = [];

      elements.forEach((element) => {
        const split = new SplitText(element as HTMLElement, {
          type: 'lines',
          linesClass: 'line++',
          mask: 'lines',
        });

        splitInstances.push(split);

        const textIndent = window.getComputedStyle(element).textIndent;
        if (textIndent === '0px' && split.lines.length > 0) {
          (split.lines[0] as HTMLElement).style.paddingLeft = textIndent;
          (element as HTMLElement).style.textIndent = '0';
        }

        lines.push(...(split.lines as HTMLElement[]));
      });

      gsap.set(lines, { y: '100%' });

      const animationProps = {
        y: '0%',
        duration: 2,
        stagger: 0.1,
        ease: 'power4.out',
        delay,
      };

      if (animateOnScroll) {
        gsap.to(lines, {
          ...animationProps,
          scrollTrigger: {
            trigger: container,
            start: 'top 75%',
            once: true,
          },
        });
      } else {
        gsap.to(lines, animationProps);
      }

      return () => {
        splitInstances.forEach((split) => split.revert());
      };
    },
    { scope: containerRef, dependencies: [animateOnScroll, delay] }
  );

  return React.cloneElement(children, {
    ref: containerRef,
  });
}
