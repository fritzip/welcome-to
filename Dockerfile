# Use NGINX base image
FROM nginx:latest

# Copy static files into NGINX html directory
COPY ./src /usr/share/nginx/html

# Expose port 80
EXPOSE 80