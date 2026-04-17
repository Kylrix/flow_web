"use client";

import { createFileRoute } from '@tanstack/react-router';
import DashboardLayout from '@/app/(dashboard)/layout';
import Page from '@/app/(dashboard)/tasks/page';

export const Route = createFileRoute('/tasks')({ component: RouteComponent });

function RouteComponent() {
  return <DashboardLayout><Page /></DashboardLayout>;
}
