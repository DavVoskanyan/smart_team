# Use the official Node.js image as the base image
FROM node:20

# Copy your entire project into the container
COPY . .

# Install project dependencies
RUN npm install

# Command to start the Next.js application
CMD ["npm", "run", "dev"]