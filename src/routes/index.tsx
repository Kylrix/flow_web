"use client";

import { useEffect } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Box, Button, Container, Paper, Stack, Typography, LinearProgress } from "@mui/material";
import { RouteErrorBoundary } from "@/components/RouteErrorBoundary";
import { useAuth } from "@/context/auth/AuthContext";
import { CalendarDays, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  errorComponent: RouteErrorBoundary,
  component: FlowLandingRoute,
});

function FlowLandingRoute() {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      navigate({ to: "/tasks", replace: true });
    }
  }, [isLoading, isAuthenticated, navigate]);

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#0A0908", color: "#fff" }}>
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Stack spacing={4} sx={{ maxWidth: 820 }}>
          <Box>
            <Typography
              variant="overline"
              sx={{ color: "rgba(255,255,255,0.55)", letterSpacing: "0.18em" }}
            >
              Kylrix Flow
            </Typography>
            <Typography
              variant="h1"
              sx={{
                mt: 1.5,
                fontSize: { xs: "3rem", md: "4.5rem" },
                fontWeight: 900,
                lineHeight: 1.02,
                fontFamily: "var(--font-clash)",
              }}
            >
              Plan work. Keep motion.
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mt: 2,
                maxWidth: 680,
                color: "rgba(255,255,255,0.68)",
                fontWeight: 400,
                lineHeight: 1.6,
              }}
            >
              Track tasks, calendar events, forms, and workflows from one calm surface.
              Your session checks in the background while the page renders immediately.
            </Typography>
          </Box>

          {isLoading && <LinearProgress sx={{ maxWidth: 360, borderRadius: 999 }} />}

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button
              component={Link}
              to="/tasks"
              variant="contained"
              endIcon={<ArrowRight size={18} />}
              sx={{
                bgcolor: "#A855F7",
                color: "#fff",
                fontWeight: 800,
                borderRadius: 3,
                px: 3,
                py: 1.5,
              }}
            >
              Open tasks
            </Button>
            <Button
              component={Link}
              to="/events"
              variant="outlined"
              sx={{
                borderColor: "rgba(255,255,255,0.14)",
                color: "#fff",
                fontWeight: 700,
                borderRadius: 3,
                px: 3,
                py: 1.5,
              }}
            >
              Browse events
            </Button>
          </Stack>

          <Stack direction={{ xs: "column", md: "row" }} spacing={2} sx={{ pt: 2 }}>
            {[
              {
                icon: CalendarDays,
                title: "Calendar-ready",
                copy: "See deadlines and events without leaving the flow.",
              },
              {
                icon: CheckCircle2,
                title: "Task-first",
                copy: "Jump into the work queue before auth finishes.",
              },
              {
                icon: Sparkles,
                title: "Fast entry",
                copy: "No blank screen while the session resolves.",
              },
            ].map(({ icon: Icon, title, copy }) => (
              <Paper
                key={title}
                sx={{
                  flex: 1,
                  p: 2.5,
                  bgcolor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 4,
                }}
              >
                <Stack spacing={1.25}>
                  <Icon size={20} />
                  <Typography sx={{ fontWeight: 800 }}>{title}</Typography>
                  <Typography sx={{ color: "rgba(255,255,255,0.6)", fontSize: "0.92rem" }}>
                    {copy}
                  </Typography>
                </Stack>
              </Paper>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
