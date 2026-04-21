"use client";

import { createFileRoute } from '@tanstack/react-router';
import DashboardLayout from '@/app/(dashboard)/layout';
import Page from '@/app/(dashboard)/calendar/page';
import { RouteErrorBoundary } from '@/components/RouteErrorBoundary';

export const Route = createFileRoute('/calendar')({ errorComponent: RouteErrorBoundary, component: RouteComponent });

function RouteComponent() {
  return <DashboardLayout><Page /></DashboardLayout>;
}
