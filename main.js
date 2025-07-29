document.getElementById("checkButton").addEventListener("click", function () {
    const input1 = document.getElementById("inputText1");
    const input2 = document.getElementById("inputText2");
    const resultDiv = document.getElementById("result");

    const expectedsha = input1.value.trim().toUpperCase();
    const isosha = input2.value.trim().toUpperCase();

    // Check if either input is empty
    if (!expectedsha || !isosha) {
        resultDiv.textContent = "⚠️ Both checksum fields must be filled out.";
        resultDiv.style.color = "orange";
        return;
    }

    // Compare the checksums
    if (expectedsha === isosha) {
        resultDiv.textContent = "✅ Checksums Match!";
        resultDiv.style.color = "green";

    } 
    
    else {
        resultDiv.textContent = "❌ Checksums Do Not Match.";
        resultDiv.style.color = "red";
    }
});