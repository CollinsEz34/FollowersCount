# Use official Node.js as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /followerscount

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port that the application will run on
EXPOSE 3000

# Start the Node.js application
CMD ["npm", "start"]
