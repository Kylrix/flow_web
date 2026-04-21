"use client";

import { createFileRoute } from '@tanstack/react-router';
import DashboardLayout from '@/app/(dashboard)/layout';
import Page from '@/app/(dashboard)/forms/page';
import { RouteErrorBoundary } from '@/components/RouteErrorBoundary';

export const Route = createFileRoute('/forms')({ errorComponent: RouteErrorBoundary, component: RouteComponent });

function RouteComponent() {
  return <DashboardLayout><Page /></DashboardLayout>;
}
