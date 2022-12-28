pipeline {
  agent any
  stages {
    stage('Checkout Code') {
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