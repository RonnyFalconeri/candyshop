pipeline {
    agent any
	if (env.BRANCH_NAME == 'master'){
		stages {
			stage('build') {
				steps {
						sh 'echo massteeer'
						sh 'echo "candyshop wird gebaut und gestartet"'
						sh 'docker stop candyshopapp || true && docker rm candyshopapp || true'
						sh 'docker build -t candyshopapp .'
						sh 'docker run -d --network host --name candyshopapp candyshopapp'
				}
					
			}
		}
	}
	else{
		stages {
			stage('build') {
				steps {
						sh 'echo no massteeer'
				}
					
			}
		}
	}
}
