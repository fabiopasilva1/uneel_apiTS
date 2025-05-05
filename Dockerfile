# syntax=docker/dockerfile:1

ARG NODE_VERSION=22.13.1


########################
# Build stage
########################
FROM node:${NODE_VERSION}-slim AS builder
WORKDIR /app

# Install dependencies (only package.json and package-lock.json for cache efficiency)
COPY --link package.json ./
# If you have a package-lock.json, uncomment the next line
COPY --link package-lock.json ./

# Install all dependencies (including devDependencies for build)
RUN --mount=type=cache,target=/root/.npm \
  npm ci

# Copy the rest of the application source code
COPY --link . .

# Build the TypeScript code
RUN npm run build

# Remove devDependencies and reinstall only production dependencies
RUN --mount=type=cache,target=/root/.npm \
  npm ci --production

########################
# Production stage
########################
FROM node:${NODE_VERSION}-alpine AS final
WORKDIR /app

# Create a non-root user
RUN addgroup -S appgroup && adduser -S -G appgroup appuser

# Copy built app and production node_modules from builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

# Set environment variables
ENV NODE_ENV=production
ENV NODE_OPTIONS="--max-old-space-size=4096"

USER appuser

EXPOSE ${PORT}

CMD ["npm", "start"]