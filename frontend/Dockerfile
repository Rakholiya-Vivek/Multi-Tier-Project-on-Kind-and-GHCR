# Stage 1: Use Nginx to serve static files
FROM nginx:alpine

# Copy static HTML files into Nginx default directory
COPY . /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

