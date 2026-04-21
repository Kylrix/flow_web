"use client";

import { createFileRoute } from '@tanstack/react-router';
import DashboardLayout from '@/app/(dashboard)/layout';
import Page from '@/app/(dashboard)/events/page';
import { RouteErrorBoundary } from '@/components/RouteErrorBoundary';

export const Route = createFileRoute('/events')({ errorComponent: RouteErrorBoundary, component: RouteComponent });

function RouteComponent() {
  return <DashboardLayout><Page /></DashboardLayout>;
}
