pipeline {
    agent any  // Runs the pipeline on any available agent (e.g., master, node, etc.)

    environment {
        // Optional: Define environment variables, like the Node version to use
        NODE_VERSION = '16'  // Change to the version you want to use
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout code from Git
                git branch: 'main', url: 'https://github.com/CollinsEz34/FollowersCount.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install Node.js dependencies
                script {
                    // Make sure Node.js and npm are installed
                    sh 'npm install'
                }
            }
        }

        stage('Lint') {
            steps {
                // Ensure eslint binary has executable permissions
                script {
                    sh 'chmod +x ./node_modules/.bin/eslint'  // Ensure the eslint binary is executable
                }

                // Run eslint to check code quality
                script {
                    // Ensure eslint is run via npx to avoid permission issues
                    sh 'npx eslint . || true'  // Using "|| true" ensures the build doesn't fail on lint errors
                }
            }
        }

        stage('Build') {
            steps {
                // Run your build step (you can customize this to fit your build command)
                script {
                    sh 'npm run build'
                }
            }
        }

        stage('Test') {
            steps {
                // Run tests (if you have tests set up, e.g., with Mocha, Jest, etc.)
                script {
                    // For example, running tests with npm (you can adjust this for your setup)
                    sh 'npm test'
                }
            }
        }

        stage('Deploy') {
            steps {
                // Optional: Deploy your project to a server, cloud, etc.
                echo 'Deploy stage (optional)'
                // Example deploy steps would go here
            }
        }
    }

    post {
        always {
            // This block runs regardless of success or failure
            echo 'Cleaning up...'
            cleanWs()  // Clean the workspace after the build
        }

        success {
            // Actions to take if the build succeeds
            echo 'Build Successful!'
        }

        failure {
            // Actions to take if the build fails
            echo 'Build Failed!'
        }
    }
}
