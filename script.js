// Sobald das Document vom Browser komplett geladen wurde, führe die folgenden Funktionen aus:
document.addEventListener("DOMContentLoaded", function(){

    // Wähle den Button für Hundebilder aus und zeige nur Hunde an, dh blende Katzen aus
    document.querySelector('.buttonDogs').addEventListener('click', function () {
        // Wähle alle Elemente mit der Klasse '.cat' aus und blende sie aus
        document.querySelectorAll('.cat').forEach(elem => elem.classList.add('hidden'));
        // Wähle alle Elemente mit der Klasse '.dog' aus und zeige sie an
        document.querySelectorAll('.dog').forEach(elem => elem.classList.remove('hidden'));

        // Setze den Hunde-Button auf 'active'
        document.querySelector('.buttonDogs').classList.add('active');
        // Deaktiviere den Alle-Button
        document.querySelector('.buttonALL').classList.remove('active');
        // Deaktiviere den Katzen-Button
        document.querySelector('.buttonCats').classList.remove('active');
    });

    // Wähle den Katzen-Button aus, und blende alle Hunde aus und alle Katzen ein
    document.querySelector('.buttonCats').addEventListener('click', function() {
        // Wähle alle Elemente mit der Klasse '.dog' aus und blende sie aus
        document.querySelectorAll('.dog').forEach(elem => elem.classList.add('hidden'));
        // Wähle alle Elemente mit der Klasse '.cat' aus und zeige sie an
        document.querySelectorAll('.cat').forEach(elem => elem.classList.remove('hidden'));

        // Setze den Katzen-Button auf 'active'
        document.querySelector('.buttonCats').classList.add('active');
        // Deaktiviere den Alle-Button
        document.querySelector('.buttonALL').classList.remove('active');
        // Deaktiviere den Hunde-Button
        document.querySelector('.buttonDogs').classList.remove('active');
    });

    document.querySelector('.buttonALL').addEventListener('click', function() {
        // Wähle alle Elemente mit der Klasse '.dog' aus und zeige sie an
        document.querySelectorAll('.dog').forEach(elem => elem.classList.remove('hidden'));
        // Wähle alle Elemente mit der Klasse '.cat' aus und zeige sie an
        document.querySelectorAll('.cat').forEach(elem => elem.classList.remove('hidden'));

        // Aktiviere den Alle-Button
        document.querySelector('.buttonALL').classList.add('active');
        // Deaktiviere den Katzen-Button
        document.querySelector('.buttonCats').classList.remove('active');
        // Deaktiviere den Hunde-Button
        document.querySelector('.buttonDogs').classList.remove('active');
    });
});
