import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// const isProtectedRoute = createRouteMatcher([
//   '/bookings(.*)',
//   '/checkout(.*)',
//   '/favorites(.*)',
//   '/profile(.*)',
//   '/rentals(.*)',
//   '/reviews(.*)',
// ]);
const isPublicRoute = createRouteMatcher(['/', '/properties(.*)']);

export default clerkMiddleware((auth, req) => {
  if (!isPublicRoute(req)) auth().protect();
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
