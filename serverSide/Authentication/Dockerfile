# Use the official Node.js image as the base image
FROM node:latest

# Mention work directory
WORKDIR .

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy your entire project into the container
COPY . .

# Command to start the Next.js application
CMD ["npm", "start"]

# Expose the port that Next.js is running on
EXPOSE 3000