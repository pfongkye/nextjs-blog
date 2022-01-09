module.exports = {
    ci:{
        collect: {
            url: ['http://localhost:3000', 'http://localhost:3000/posts/lighthouse_ci'],
            startServerCommand: 'npm run lighthouse:start'
        },
        assert: {
            assertions: {
                'categories:performance':['warn', {minScore:0.9}],
                'categories:accessibility':['error', {minScore: 0.9}]
            }
        },
        upload:{
            target: 'temporary-public-storage'
        }
    }
}