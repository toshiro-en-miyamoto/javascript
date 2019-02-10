/**
without promises

login(userName, function(error, user) {
    if(error)
        throw error;
    else
        getPlayerInfor(user.id, function(error, info) {
            if(error)
                throw error;
            else
                loadGame(info, function(error, game) {
                    if(error)
                        throw error;
                    else
                        console.log('run the game');
                });
        });
});
*/

const userName = 'dianna@ninja2.com';

login(userName)
    .then(user => getPlayerInfo(user.id))
    .then(info => loadGame(info))
    .catch(error => {throw error;});

function login(userName) {}
function getPlayerInfo(userID) {}
function loadGame(info) {}
