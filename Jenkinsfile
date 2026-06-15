pipeline {
    agent any
    environment {
        NODE_ENV = 'production'
    }
    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/your-user/your-repo.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build Project') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                sh 'pm2 restart all || pm2 start server.js --name my-express-app'
            }
        }
    }
}