#!/bin/sh

# Replace placeholders with environment variables in place in /usr/share/nginx/html/index.html
envsubst '${VERSION} ${RELEASE_URL}' < /usr/share/nginx/html/index.html > /usr/share/nginx/html/index.html.tmp
mv /usr/share/nginx/html/index.html.tmp /usr/share/nginx/html/index.html

# Start nginx
nginx -g 'daemon off;'