// Team Players Overlay Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create overlay background
    const overlayBg = document.createElement('div');
    overlayBg.className = 'overlay-background';
    document.body.appendChild(overlayBg);
    
    // Toggle players overlay when clicking the button
    const toggleButtons = document.querySelectorAll('.toggle-players');
    toggleButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Close any open overlays first
            document.querySelectorAll('.team-players-overlay.active').forEach(openOverlay => {
                if (openOverlay.id !== this.getAttribute('data-target')) {
                    openOverlay.classList.remove('active');
                }
            });
            
            const targetId = this.getAttribute('data-target');
            const overlay = document.getElementById(targetId);
            
            if (overlay) {
                overlay.classList.add('active');
                overlayBg.classList.add('active');
                
                // Aggiungere la classe overlay-active alla card per disabilitare l'effetto hover
                const teamCard = this.closest('.team-card');
                if (teamCard) {
                    teamCard.classList.add('overlay-active');
                }
                
                // Prevent body scrolling when overlay is open
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Close overlay when clicking the close button
    const closeButtons = document.querySelectorAll('.close-overlay');
    closeButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const overlay = this.closest('.team-players-overlay');
            if (overlay) {
                overlay.classList.remove('active');
                overlayBg.classList.remove('active');
                
                // Rimuovere la classe overlay-active da tutte le card
                document.querySelectorAll('.team-card.overlay-active').forEach(card => {
                    card.classList.remove('overlay-active');
                });
                
                // Re-enable body scrolling
                document.body.style.overflow = '';
            }
        });
    });
    
    // Close overlay when clicking on the background
    overlayBg.addEventListener('click', function() {
        document.querySelectorAll('.team-players-overlay.active').forEach(overlay => {
            overlay.classList.remove('active');
        });
        this.classList.remove('active');
        
        // Rimuovere la classe overlay-active da tutte le card
        document.querySelectorAll('.team-card.overlay-active').forEach(card => {
            card.classList.remove('overlay-active');
        });
        
        // Re-enable body scrolling
        document.body.style.overflow = '';
    });
});
