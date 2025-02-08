document.addEventListener('DOMContentLoaded', function() {
    // Game initialization code
    initGame();
    
    // Load related games
    loadRelatedGames();

    // Fullscreen button functionality
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    const gameFrame = document.querySelector('.responsive-iframe');

    fullscreenBtn.addEventListener('click', function() {
        if (!document.fullscreenElement) {
            gameFrame.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
            });
        } else {
            document.exitFullscreen();
        }
    });
}); 