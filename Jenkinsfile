pipeline {
  agent any
  stages {
    stage('Check out code') {
      parallel {
        stage('Check out code') {
          steps {
            git(url: 'https://github.com/fnahum/demorepository', branch: 'dev')
          }
        }

        stage('Add log') {
          steps {
            sh 'ls -la'
          }
        }

      }
    }

    stage('Build') {
      steps {
        sh 'cd curriculum-front && npm i && npm run'
      }
    }

  }
}