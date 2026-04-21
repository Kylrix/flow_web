"use client";

import { createFileRoute } from '@tanstack/react-router';
import DashboardLayout from '@/app/(dashboard)/layout';
import Page from '@/app/(dashboard)/settings/page';
import { RouteErrorBoundary } from '@/components/RouteErrorBoundary';

export const Route = createFileRoute('/settings')({ errorComponent: RouteErrorBoundary, component: RouteComponent });

function RouteComponent() {
  return <DashboardLayout><Page /></DashboardLayout>;
}
