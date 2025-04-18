FROM node:22-slim AS build-stage
WORKDIR /usr/src/directory

COPY . .

RUN npm ci

RUN npm run build

FROM nginx:1.30
COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html