pipeline {
  agent any
  stages {
    stage('Check out code') {
      steps {
        git(url: 'https://github.com/fnahum/demorepository', branch: 'dev')
      }
    }

    stage('Add to logs') {
      parallel {
        stage('Add to logs') {
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