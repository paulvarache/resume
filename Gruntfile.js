module.exports = function (grunt) {

    // Config
    grunt.initConfig({
        // Move dev files to prod
        copy: {
            target: {
                files: [
                    {src: "dev/build.html", dest: "prod/index.html"},
                    {expand: true, cwd: "vendor/platform", src: ['**/**'], dest: "prod/vendor/platform"},
                    {expand: true, cwd: "vendor/polymer", src: ['**/**'], dest: "prod/vendor/polymer/"},
                    {expand: true, cwd: "dev/resources/", src: ["**/**"], dest: "prod/resources/"}
                ]
            }
        },
        vulcanize: {
            default: {
                options: {},
                files: {
                    'dev/build.html': 'dev/index.html'
                }
            }
        }
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-vulcanize');

    // Tasks
    grunt.registerTask('default', ['vulcanize', 'copy']);

}
