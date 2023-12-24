function generateImpressum() {
  const companyName = document.getElementById('companyName').value;
  const street = document.getElementById('street').value;
  const zipCode = document.getElementById('zipCode').value;
  const city = document.getElementById('city').value;
  const email = document.getElementById('email').value;

  const impressumText = `
    <h2>Impressum:</h2>
    <p>Firmenname: ${companyName}</p>
    <p>Adresse: ${street}, ${zipCode} ${city}</p>
    <p>E-Mail: ${email}</p>
    <p>Diese Website wird von ${companyName} betrieben.</p>
    <p>Kontaktieren Sie uns unter: ${email}</p>
  `;

  document.getElementById('impressumOutput').innerHTML = impressumText;
}
