"use client";

import { useEffect } from 'react';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { RouteErrorBoundary } from '@/components/RouteErrorBoundary';

export const Route = createFileRoute('/')({ errorComponent: RouteErrorBoundary, component: RedirectToTasks });

function RedirectToTasks() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate({ to: '/tasks', replace: true });
  }, [navigate]);

  return null;
}
