#!/bin/sh

echo "Starting Docker Compose and Nginx setup..."

# Start Docker Compose services
sleep 8


# Start your Node.js server
node /usr/local/bin/server.js &



# Start Nginx in the foreground to keep the container running
nginx -g "daemon off;"
