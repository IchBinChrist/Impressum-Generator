# Impressum-Generator

  <form id="impressumForm">
    <label for="companyName">Firmenname:</label>
    <input type="text" id="companyName" required><br><br>

    <label for="street">Straße und Hausnummer:</label>
    <input type="text" id="street" required><br><br>

    <label for="zipCode">Postleitzahl:</label>
    <input type="text" id="zipCode" required><br><br>

    <label for="city">Stadt:</label>
    <input type="text" id="city" required><br><br>

    <label for="email">E-Mail:</label>
    <input type="email" id="email" required><br><br>

    <button type="button" onclick="generateImpressum()">Impressum generieren</button>
  </form>

  <hr>

  <div id="impressumOutput">
    <!-- Hier wird das generierte Impressum angezeigt -->
  </div>

  <script src="impressumGenerator.js"></script>
