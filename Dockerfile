FROM nginx:1.22.0-alpine
COPY . /usr/share/nginx/html/active
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]