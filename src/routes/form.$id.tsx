"use client";

import { useMemo } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import PublicFormPage from '@/app/form/[id]/page';
import { RouteErrorBoundary } from '@/components/RouteErrorBoundary';

export const Route = createFileRoute('/form/$id')({
  errorComponent: RouteErrorBoundary,
  component: PublicFormRoute,
});

function PublicFormRoute() {
  const params = Route.useParams() as { id?: string };
  const paramsPromise = useMemo(() => Promise.resolve({ id: params.id || '' }), [params.id]);
  return <PublicFormPage params={paramsPromise} />;
}
