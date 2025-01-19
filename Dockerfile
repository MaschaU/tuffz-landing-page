## BUILD STAGE

FROM node:22.13.0-alpine3.21 as build

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN NODE_ENV=development npm install

COPY . .

RUN npm run build

## UP NGINX STAGE

FROM nginx:1.27.3-alpine3.20

COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Copy the custom Nginx configuration file
COPY nginx.config /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]