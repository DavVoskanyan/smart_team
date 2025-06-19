# Use the official Node.js image as the base image
FROM node:latest

# Mention work directory
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

COPY . .

# Command to start the Next.js application
CMD ["npm", "run", "dev"]