# Use the official Node.js image as the base image
FROM node

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Build the Next.js application (you might need to adjust this based on your project)
#RUN npm run build

# Expose the port that the Next.js application will run on
EXPOSE 3000

# Command to start the Next.js application
CMD "npm dev"