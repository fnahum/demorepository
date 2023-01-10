pipeline {
  agent any
  stages {
    stage('Check Repository') {
      steps {
        git(url: 'https://github.com/fnahum/demorepository/tree/dev', branch: 'dev')
      }
    }

  }
}