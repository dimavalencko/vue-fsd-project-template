FROM hub.energomera.ru/node:lts-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm set registry https://hub.energomera.ru/repository/npm-group/
RUN npm config set strict-ssl false

RUN npm install
COPY . .
RUN npm run build

FROM hub.energomera.ru/nginx:stable-alpine AS prod
COPY --from=build /app/dist /opt/www
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
