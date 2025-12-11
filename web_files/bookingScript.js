document.addEventListener('DOMContentLoaded', function() {
    // Získání elementů z HTML
    const form = document.getElementById('bookingForm');
    const confirmation = document.getElementById('confirmationMessage');
    const details = document.getElementById('reservationDetails');

    // Posluchač události pro odeslání formuláře
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Zabrání výchozímu odeslání formuláře (znovu načtení stránky)

        // 1. Získání hodnot z formuláře
        const sluzbaInput = document.getElementById('sluzba');
        const datumInput = document.getElementById('datum');
        const casInput = document.getElementById('cas');

        // Textové hodnoty
        const sluzba = sluzbaInput.options[sluzbaInput.selectedIndex].text; // Vezme zobrazený text
        const datum = formatDate(datumInput.value); // Formátuje datum
        const cas = casInput.value;

        // 2. Vytvoření potvrzovací zprávy
        details.innerHTML = `Váš termín pro službu <i>${sluzba}</i> je<br> <i>${datum}</i> v <i>${cas}</i>.<br><br>Potvrzení bylo odesláno na Váš email.`;

        // 3. Skrytí formuláře a zobrazení potvrzení
        form.classList.remove('form-visible');
        form.classList.add('confirmation-hidden');

        confirmation.classList.remove('confirmation-hidden');
        confirmation.classList.add('form-visible');
    });

    /**
     * Pomocná funkce pro formátování data z YYYY-MM-DD na DD. MM. YYYY
     * @param {string} dateString - Datum ve formátu YYYY-MM-DD
     * @returns {string} Formátované datum
     */
    function formatDate(dateString) {
        if (!dateString) return '';
        const [year, month, day] = dateString.split('-');
        return `${day}. ${month}. ${year}`;
    }
});