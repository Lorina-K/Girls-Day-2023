// Klasse a = 
// Klasse b = 

// Sobald der HTML-Content vom Browser komplett geladen wurde, werden die folgenden Funktionen ausgeführt:
document.addEventListener("DOMContentLoaded", function(){
    // Wähle den Button für Klasse-a aus und zeige nur Klasse-a-Bilder an
    const buttonA = document.querySelector();

    buttonA.addEventListener('click', function () {
        /**
        Anzeigen der richtigen Bilder
        **/
        // Wähle alle Elemente mit der Klasse '.b' aus und blende sie aus
        document.querySelector().classList.add();
        // Wähle alle Elemente mit der Klasse '.a' aus und zeige sie an
        document.querySelector().classList.remove();
        
        /**
        Anzeigen, dass der Button ausgewählt ist
        **/
        // Setze den Button für Klasse-a auf 'active'
        document.querySelector().classList.add();
        // Lösche das Attribut 'active' vom Alle-Button
        document.querySelector().classList.remove();
        // Lösche das Attribut 'active' vom Button für Klasse-b
        document.querySelector().classList.remove();
    });

    // Wähle den Button für Klasse-b aus und zeige Klasse-b-Bilder an
    const buttonB = document.querySelector();

    buttonB.addEventListener('click', function() {
        /**
        Anzeigen der richtigen Bilder
        **/
        // Wähle alle Elemente mit der Klasse '.a' aus und blende sie aus
        document.querySelector().classList.add();
        // Wähle alle Elemente mit der Klasse '.b' aus und zeige sie an
        document.querySelector().classList.remove();

        /**
        Anzeigen, dass der Button ausgewählt ist
        **/
        // Setze den Button für Klasse-b auf 'active'
        document.querySelector().classList.add();
        // Lösche das Attribut 'active' vom Alle-Button
        document.querySelector().classList.remove();
        // Lösche das Attribut 'active' vom Button für Klasse-a
        document.querySelector().classList.remove();
    });
    
    // Wähle den Button für alle Bilder und zeige alle Bilder an
    const buttonAll = document.querySelector();

    buttonAll.addEventListener('click', function() {
        // Wähle alle Elemente mit der Klasse '.a' aus und zeige sie an
        document.querySelector().classList.remove();
        // Wähle alle Elemente mit der Klasse '.b' aus und zeige sie an
        document.querySelector().classList.remove();

        // Aktiviere den Alle-Button
        document.querySelector().classList.add();
        // Lösche das Attribut 'active' vom Button für Klasse-a
        document.querySelector().classList.remove();
        // Lösche das Attribut 'active' vom Button für Klasse-b
        document.querySelector().classList.remove();
    });
});
