
/**
 * TRIAIDDEV Animation Utilities
 * 
 * These utilities help create smooth animations and transitions
 * throughout the website for a premium user experience.
 */

export const fadeInUp = (delay: number = 0): React.CSSProperties => ({
  opacity: 0,
  transform: 'translateY(20px)',
  animation: 'fade-in 0.5s ease-out forwards',
  animationDelay: `${delay}ms`,
});

export const staggerChildren = (selector: string, baseDelay: number = 100): void => {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el, index) => {
    (el as HTMLElement).style.animationDelay = `${index * baseDelay}ms`;
  });
};

export const parallaxEffect = (element: HTMLElement, speed: number = 0.1) => {
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const yPos = scrollY * speed;
    element.style.transform = `translateY(${yPos}px)`;
  };

  window.addEventListener('scroll', handleScroll);
  
  // Return a cleanup function
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};

export const animateCounter = (
  element: HTMLElement, 
  target: number, 
  duration: number = 2000
): void => {
  let startTime: number | null = null;
  const startValue = 0;
  
  const step = (timestamp: number) => {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    const currentValue = Math.floor(progress * (target - startValue) + startValue);
    
    element.textContent = currentValue.toString();
    
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      element.textContent = target.toString();
    }
  };
  
  window.requestAnimationFrame(step);
};

export const revealOnScroll = (): void => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px' 
    }
  );
  
  const elements = document.querySelectorAll('.reveal-element');
  elements.forEach((el) => {
    observer.observe(el);
  });
};

export const smoothScrollTo = (elementId: string): void => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

export const createBackToTopButton = (): () => void => {
  // Create the button element
  const button = document.createElement('button');
  button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up"><path d="m18 15-6-6-6 6"/></svg>`;
  button.className = 'back-to-top opacity-0 invisible transition-all duration-300 fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-triaid-green text-triaid-dark flex items-center justify-center shadow-lg hover:scale-110';
  button.title = 'Back to Top';
  document.body.appendChild(button);
  
  // Handle scroll event to show/hide button
  const toggleVisibility = () => {
    if (window.scrollY > 500) {
      button.classList.remove('opacity-0', 'invisible');
      button.classList.add('opacity-100', 'visible');
    } else {
      button.classList.add('opacity-0', 'invisible');
      button.classList.remove('opacity-100', 'visible');
    }
  };
  
  // Add event listeners
  window.addEventListener('scroll', toggleVisibility);
  button.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Return cleanup function
  return () => {
    window.removeEventListener('scroll', toggleVisibility);
    if (document.body.contains(button)) {
      document.body.removeChild(button);
    }
  };
};
