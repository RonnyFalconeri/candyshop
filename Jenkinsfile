pipeline {
    agent any
	stages {
		stage('build') {
			steps {
				sh 'echo "candyshop wird gebaut und gestartet"'
				sh 'docker stop \'candyshopapp\'$(cat portfile) || true && docker rm \'candyshopapp\'$(cat portfile) || true'
				sh 'docker build -t \'candyshopapp\'$(cat portfile) .'
				sh 'docker run -d --network host --name \'candyshopapp\'$(cat portfile) \'candyshopapp\'$(cat portfile)'
			}
		}
	}
}
