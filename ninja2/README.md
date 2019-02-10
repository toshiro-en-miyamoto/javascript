ninja2:jest:
    JEST=${current.project.path}/ninja2/node_modules/.bin/jest
    cd ${current.project.path}/ninja2
    $JEST --findRelatedTests ${explorer.current.file.path}

ninja2:run:
    cd ${current.project.path}/ninja2
    node_modules/.bin/http-server -p 9000
    REVIEW:
    ${server.9000/tcp}index.html

node:run:
    node ${explorer.current.file.path}
