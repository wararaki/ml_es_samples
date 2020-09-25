FROM node:14.11.0 as build

WORKDIR /build
COPY . /build
ENV NPM_CONFIG_LOGLEVEL warn
RUN yarn install --production
RUN yarn build

FROM node:14.11.0

WORKDIR /app
COPY --from=build /build/package.json /app/package.json
# COPY --from=build /build/package-lock.json /app/package-lock.json
COPY --from=build /build/.next /app/.next
COPY --from=build /build/public /app/public

RUN yarn install --production

CMD [ "yarn", "start" ]
