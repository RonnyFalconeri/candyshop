pipeline {
    agent any
	stages {
		stage('build') {
			steps {
				sh 'appname=\'candyshopapp\'$(cat portfile)'
				sh 'echo "candyshop wird gebaut und gestartet"'
				sh 'docker stop $appname || true && docker rm $appname || true'
				sh 'docker build -t $appname .'
				sh 'docker run -d --network host --name $appname $appname'
			}
		}
	}
}
