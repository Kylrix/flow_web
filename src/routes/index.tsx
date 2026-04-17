"use client";

import { useEffect } from 'react';
import { createFileRoute, useNavigate } from '@tanstack/react-router';

export const Route = createFileRoute('/')({ component: RedirectToTasks });

function RedirectToTasks() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate({ to: '/tasks', replace: true });
  }, [navigate]);

  return null;
}
