FROM node:10.11.0-slim AS install_modules
WORKDIR /build
COPY . /build
RUN npm install \
    && npm run docs:build

FROM nginx
COPY --from=install_modules /build/docs/.vuepress/dist /usr/share/nginx/html