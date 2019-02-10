async function loadGame(userName) {
    try {
        const user = await login(userName);
        const info = await getPlayerInfo(user.id);
        // load the game using the returned info
    } catch(error) {
        throw error;
    }
}