# ARG NODE_VERSION=24.14.1

# FROM node:${NODE_VERSION}-alpine AS builder
# WORKDIR /workspace

# COPY package*.json .

# RUN npm install

# ENV NODE_ENV=production

# COPY . .
# RUN npm run build

# FROM node:${NODE_VERSION}-alpine

# WORKDIR /workspace

# COPY --from=builder /workspace/dist/hero-app/server ./dist/hero-app/server
# COPY --from=builder /workspace/dist/hero-app/browser ./dist/hero-app/browser
# COPY --from=builder /workspace/package*.json ./

# RUN npm install --omit=dev

# EXPOSE 4000

# CMD [ "node", "dist/hero-app/server/server.mjs" ]

# Stage 1: build Angular app

ARG NODE_VERSION=24.14.1

FROM node:${NODE_VERSION}-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# build production
RUN npm run build -- --configuration production


# Stage 2: serve bằng nginx
FROM nginx:alpine

COPY --from=build /app/dist/ /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]