pipeline {
    agent { docker { image 'maven:3.3.3' } }
    stages {
        stage('build') {
            steps {
				sh 'echo "candyshop wird gebaut und gestartet"'
                sh 'docker stop candyshopapp'
				sh 'docker build -t candyshopapp:candyshopapp'
				sh 'docker run -d -p 80:3000 candyshopapp'
            }
        }
    }
}