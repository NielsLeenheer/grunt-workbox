module.exports = function(grunt) {
    const chalk = require('chalk');
    const {generateSW, injectManifest, copyWorkboxLibraries} = require('workbox-build');

    grunt.registerMultiTask('generateSW', async function(command) {
        let done = this.async();

        try {
            let result = await generateSW(this.data);

            grunt.log.writeln(
                chalk.green('✔ ') +
                `Generated ${this.data.swDest}, ` +
                `which will precache ${result.count} files, ` +
                `totaling ${result.size} bytes`
            );
        } catch (error) {
            grunt.warn(error);
        }

        done();
    });

    grunt.registerMultiTask('injectManifest', async function(command) {
        let done = this.async();

        try {
            let result = await injectManifest(this.data);

            grunt.log.writeln(
                chalk.green('✔ ') +
                `Generated ${this.data.swDest}, ` +
                `which will precache ${result.count} files, ` +
                `totaling ${result.size} bytes`
            );
        } catch (error) {
            grunt.warn(error);
        }

        done();
    });

    grunt.registerMultiTask('copyWorkboxLibraries', async function(command) {
        let done = this.async();

        try {
            let result = await copyWorkboxLibraries(this.data);

            grunt.log.writeln(
                chalk.green('✔ ') + `Copied Workbox to ${result}`
            );
        } catch (error) {
            grunt.warn(error);
        }

        done();
    });
};
