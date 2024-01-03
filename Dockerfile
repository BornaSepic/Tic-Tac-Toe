# Use a lightweight base image with Nginx
FROM nginx:alpine

# Set the working directory inside the container
WORKDIR /usr/share/nginx/html

# Copy the contents of the local src directory to the container
COPY src/ /usr/share/nginx/html

# Expose the port the app will run on
EXPOSE 80

# Default command to start Nginx
CMD ["nginx", "-g", "daemon off;"]

