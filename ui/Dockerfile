FROM node:14.11.0 as build

WORKDIR /app
COPY . /app
RUN yarn install
RUN yarn build

FROM nginx:1.19.2

COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]
