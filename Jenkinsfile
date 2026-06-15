pipeline {
    agent any
    environment {
        NODE_ENV = 'production'
    }
    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'feat_branch', url: 'https://github.com/YonathanIsBack/global-master.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        // stage('Run Tests') {
        //     steps {
        //         sh 'npm test'
        //     }
        // }
        // stage('Build Project') {
        //     steps {
        //         sh 'npm run build'
        //     }
        // }
        stage('Deploy') {
            steps {
                bat 'pm2 restart all || pm2 start server.js --name my-express-app'
            }
        }
    }
}