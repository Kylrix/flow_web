"use client";

import React from 'react';
import { ThemeProvider } from '@/theme/ThemeProvider';
import { DataNexusProvider } from '@/context/DataNexusContext';
import { AuthProvider } from '@/context/auth/AuthContext';
import { SubscriptionProvider } from '@/context/subscription/SubscriptionContext';
import { NotificationProvider } from '@/context/NotificationContext';
import { LayoutProvider } from '@/context/LayoutContext';
import { SudoProvider } from '@/context/SudoContext';

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <DataNexusProvider>
        <SubscriptionProvider>
          <AuthProvider>
            <NotificationProvider>
              <LayoutProvider>
                <SudoProvider>{children}</SudoProvider>
              </LayoutProvider>
            </NotificationProvider>
          </AuthProvider>
        </SubscriptionProvider>
      </DataNexusProvider>
    </ThemeProvider>
  );
}

export { AppProviders as Providers };
