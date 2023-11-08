

pipeline {

    agent any

    tools {
        nodejs  'NodeJs'
    }
    environment {
        registry = '154114/eyefront-app'  //dockerhub username/repo-name
        registry1 = '154114/eyeserver-app'  //dockerhub username/repo-name
        registryCredential = 'dockerhub' // the credential we added for our docker in jenkins configure credentials page
    }

    stages{
        stage('Install for client') {
            steps {
            echo  'installing dependencies'
            sh 'cd client && npm install'
            }
        }
        //for code linting 
        stage('Code linting') {
            steps {
                echo 'Running code linting'
                sh 'cd client'
                sh 'npm install eslint'
                sh 'npm init @eslint/config'
                sh 'npx eslint '
            }
        }
        stage('build') {
            steps {
            echo 'Building project'
            sh 'cd client'
            sh 'npm run build'
            }
        }

        stage('Install for server') {
            steps {
            echo  'installing dependencies'
            sh 'cd server && npm install'
            }
        }
        //for code linting 
        stage('Code linting') {
            steps {
                echo 'Running code linting'
                sh 'cd server'
                sh 'npm install eslint'
                sh 'npm init @eslint/config'
                sh 'npx eslint '
            }
        }
        stage('build') {
            steps {
            echo 'Building project'
            sh 'cd server'
            sh 'npm run build'
            }
        }
        stage("Build App Image") {
            steps {
                script {
                    dockerImage = docker.build("$registry:V$BUILD_NUMBER", "./client")
                }
            }
        }
        stage("Upload Image to Docker Hub") {
            steps {
                script {
                    docker.withRegistry('', registryCredential) {
                        dockerImage.push("V$BUILD_NUMBER")
                        dockerImage.push('latest')
                    }
                }
            }
        }
            //this stage is important because as we keep the images, the size of the vm will keep increasing.
        stage("Remove Docker Image") {  
            steps {
                sh "docker rmi $registry:V$BUILD_NUMBER"
            }
        }

         stage("Build App Image") {
            steps {
                script {
                    dockerImage = docker.build("$registry1:V$BUILD_NUMBER") 
                }
            }
        }
        stage("Upload Image to Docker Hub") {
            steps {
                script {
                    docker.withRegistry('', registryCredential) {
                        dockerImage.push("V$BUILD_NUMBER")
                        dockerImage.push('latest')
                    }
                }
            }
        }
          stage("Remove Docker Image") {  
            steps {
                sh "docker rmi $registry1:V$BUILD_NUMBER"
            }
        }

        stage("Deploy App To Kubernetes") {
            agent{label 'KOPS'}
            steps {
            sh "helm upgrade --install --force eyeapp helm/montreal-chart --set eyefrontimage=${registry}:V${BUILD_NUMBER} eyeserverimage=${registry1}:V${BUILD_NUMBER} --namespace prod"
            }
        }
        
    }
}