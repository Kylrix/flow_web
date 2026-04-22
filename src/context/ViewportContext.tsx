'use client';

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';

interface ViewportContextValue {
  width: number;
}

const ViewportContext = createContext<ViewportContextValue | undefined>(undefined);

const MOBILE_FALLBACK_WIDTH = 390;

export function ViewportProvider({
  children,
  isMobileHint = false,
}: {
  children: ReactNode;
  isMobileHint?: boolean;
}) {
  const [width, setWidth] = useState(() => (isMobileHint ? MOBILE_FALLBACK_WIDTH : 1440));

  useEffect(() => {
    const update = () => {
      setWidth(window.innerWidth);
    };

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const value = useMemo(() => ({ width }), [width]);

  return <ViewportContext.Provider value={value}>{children}</ViewportContext.Provider>;
}

export function useViewport() {
  const context = useContext(ViewportContext);
  if (!context) {
    throw new Error('useViewport must be used within a ViewportProvider');
  }
  return context;
}

export function useViewportBreakpoint(breakpoint: 'sm' | 'md' | 'lg' = 'md') {
  const { width } = useViewport();
  if (breakpoint === 'sm') return width < 600;
  if (breakpoint === 'md') return width < 900;
  return width < 1200;
}
