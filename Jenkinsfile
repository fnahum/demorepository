pipeline {
  agent any
  stages {
    stage('Check out code') {
      steps {
        git(url: 'https://github.com/fnahum/demorepository', branch: 'dev')
      }
    }

    stage('Add to logs') {
      steps {
        sh 'ls -la'
      }
    }

  }
}