FROM node:alpine AS development 

WORKDIR /user/src/app

COPY package.json ./

RUN npm install 

COPY ..

npm run build

FROM node:alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR  /user/src/app

COPY package.json ./

RUN npm install --only=prod

COPY ..

COPY --from=development /user/src/app/dist ./dist

CMD ["node", "dist/main"]