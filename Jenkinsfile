pipeline {
  agent any
  stages {
    stage('Check Code') {
      steps {
        git(url: 'https://github.com/fnahum/demorepository', branch: 'dev')
      }
    }

    stage('Add log') {
      parallel {
        stage('Add log') {
          steps {
            sh 'ls -la'
          }
        }

        stage('Front-end unit test') {
          steps {
            sh 'cd curriculum-front && npm i && npm run test:unit'
          }
        }

      }
    }

  }
}