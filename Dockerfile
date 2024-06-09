# Use NGINX base image
FROM nginx:alpine

# Install envsubst
RUN apk add --no-cache gettext

# Copy static files into NGINX html directory
COPY ./src /usr/share/nginx/html

COPY ./entrypoint.sh /

# Make the entrypoint script executable
RUN chmod +x /entrypoint.sh

# Run entrypoint script and start nginx
CMD ["/entrypoint.sh"]
