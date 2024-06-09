#!/bin/sh

# Replace placeholders with environment variables
envsubst '${VERSION}' < /usr/share/nginx/html/index.html.template > /usr/share/nginx/html/index.html

# Start nginx
nginx -g 'daemon off;'