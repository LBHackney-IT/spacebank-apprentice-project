module.exports = {
    build: {
        options: {
            paths: 'src/templates'
        },
        files: [
            {
               expand: true,
               cwd: "src/templates/pages",
               src: "*.njk",
               dest: "build/",
               ext: ".html"
            }
         ]
      }
}