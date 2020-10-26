FROM node as build

WORKDIR /website

# copy the react app to the container
COPY ./package.json /website

# prepare the container for building the react app
RUN npm install
# RUN npm run build

COPY . .

CMD [ "npm", "run", "start" ]

# prepare nginx
# FROM nginx:1.13
# COPY --from=build /website/build /usr/share/nginx/html
# COPY --from=build /website /usr/share/nginx/html
# RUN rm /etc/nginx/conf.d/default.conf
# COPY nginx/nginx.conf /etc/nginx/conf.d

# # start nginx
# EXPOSE 80
# RUN service nginx start
# CMD ["nginx", "-g", "daemon off;"]