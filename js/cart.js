
document.getElementById('checkout-btn').addEventListener('click', function() {
    // Get form inputs
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const card = document.getElementById('card').value;

    // Basic validation
    if (!name || !address || !card) {
        alert("Please fill in all fields.");
        return;
    }

    // Show progress bar
    const progressBar = document.getElementById('progress-bar');
    const progressContainer = document.querySelector('.progress-container');
    progressContainer.style.display = 'block';

    let progress = 0;
    const interval = setInterval(function() {
        progress += 10;
        progressBar.style.width = progress + '%';

        // Simulate different steps of the process
        if (progress === 100) {
            clearInterval(interval);
            setTimeout(() => {
                alert('Payment Successful!');
                progressContainer.style.display = 'none';
                resetForm();
            }, 500);
        }
    }, 300);
});

function resetForm() {
    document.getElementById('name').value = '';
    document.getElementById('address').value = '';
    document.getElementById('card').value = '';
}
