pipeline{
    agent {
        docker {
            image 'node:14.16.1'
            args '-p 3000:3000'
        }
    }
    stages {
        stage('Build'){
            steps {
                sh 'npm install'
            }
        }
    }
}
