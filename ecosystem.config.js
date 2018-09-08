module.exports = {
  apps: [{
    name: 'project-2',
    script: './server.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-54-219-172-202.us-west-1.compute.amazonaws.com',
      key: '~/ec2key.pem',
      ref: 'origin/kt-deploy',
      repo: 'git@deployment:kjonathante/PRJ2-Express-Mysql.git',
      path: '/usr/local/workspace/PRJ2-Express-Mysql',
      'post-deploy': 'yarn install && cp ~/.env /usr/local/workspace/PRJ2-Express-Mysql/. && pm2 startOrRestart ecosystem.config.js'
    }
  }
}