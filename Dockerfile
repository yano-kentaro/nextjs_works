FROM node:18 AS build
ADD . /dist
WORKDIR /dist
RUN yarn install --production=false
RUN yarn build

FROM gcr.io/distroless/nodejs:18
WORKDIR /dist
COPY --from=build /dist/next.config.js ./
COPY --from=build /dist/public ./public
COPY --from=build /dist/package.json ./package.json
COPY --from=build /dist/.next/static ./.next/static
COPY --from=build /dist/.next/standalone ./

CMD ["server.js"]