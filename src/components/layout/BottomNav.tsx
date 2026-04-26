'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Box,
  Paper,
  IconButton,
  useTheme,
} from '@mui/material';
import {
  CheckSquare as TasksIcon,
  FileText as FormIcon,
  Zap as EventsIcon,
  Settings as SettingsIcon,
} from 'lucide-react';

export default function BottomNav() {
  const theme = useTheme();
  const pathname = usePathname();

  const navItems = [
    { label: 'Tasks', href: '/tasks', icon: TasksIcon },
    { label: 'Forms', href: '/forms', icon: FormIcon },
    { label: 'Events', href: '/events', icon: EventsIcon },
    { label: 'Settings', href: '/settings', icon: SettingsIcon },
  ];

  const isActive = (href: string) => {
     if (href === '/tasks' && (pathname === '/' || pathname === '/tasks')) return true;
     return pathname.startsWith(href);
  };

  return (
    <Box
      component="footer"
      sx={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1300,
        display: { xs: 'block', md: 'none' }
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: '100%',
          bgcolor: '#161412',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          borderBottom: 0,
          borderRadius: '24px 24px 0 0',
          px: 2,
          pt: 1.5,
          pb: 'calc(1.5rem + env(safe-area-inset-bottom))',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 -12px 32px rgba(0,0,0,0.45)',
          backgroundImage: 'none'
        }}
      >
        {navItems.map((item) => {
          const active = isActive(item.href);
          const Icon = item.icon;
          return (
            <IconButton
              key={item.href}
              component={Link}
              href={item.href}
              sx={{
                color: active ? '#000' : 'rgba(255, 255, 255, 0.6)',
                bgcolor: active ? '#A855F7' : 'transparent',
                borderRadius: '16px',
                p: 1.5,
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  bgcolor: active ? '#A855F7' : 'rgba(255, 255, 255, 0.05)',
                  transform: 'translateY(-2px)'
                },
                ...(active && {
                  boxShadow: '0 0 15px rgba(168, 85, 247, 0.4)',
                  transform: 'translateY(-4px)'
                })
              }}
            >
              <Icon size={24} strokeWidth={1.5} />
            </IconButton>
          );
        })}
      </Paper>
    </Box>
  );
}
