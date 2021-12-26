module.exports = {
    ci:{
        collect: {
            url: ['http://localhost:3000'],
            startServerCommand: 'npm run dev'
        },
        assert: {
            assertions: {
                'categories:performance':['warn', {minScore:0.7}],
                'categories:accessibility':['error', {minScore: 0.9}]
            }
        },
        upload:{
            target: 'temporary-public-storage'
        }
    }
}