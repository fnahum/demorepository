pipeline {
  agent any
  stages {
    stage('Check Code') {
      steps {
        git(url: 'https://github.com/fnahum/demorepository', branch: 'dev')
      }
    }

  }
}