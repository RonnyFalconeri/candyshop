pipeline {
    agent any
    stages {
        stage('build') {
            steps {
				sh 'echo "candyshop wird gebaut und gestartet"'
				sh 'docker stop candyshopapp || true && docker rm candyshopapp || true'
				sh 'docker build -t candyshopapp .'
				sh 'docker run -d -p 80:3000 --name candyshopapp candyshopapp'
            }
        }
    }
}