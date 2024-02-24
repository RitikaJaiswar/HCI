// script.js
function handleAssignmentUpload(event) {
    const file = event.target.files[0];
    if (file) {
        alert('Assignment uploaded successfully: ' + file.name);
        // You can add functionality to handle the uploaded file here
    }
}

function submitAssignment(assignmentName) {
    alert('Submitting Assignment: ' + assignmentName);
    // You can add functionality to handle assignment submission here
}

function viewMaterial(materialName) {
    alert('Viewing Material: ' + materialName);
    // You can add functionality to view study materials here
}

// Dummy function to update scores (replace with actual score retrieval logic)
function updateScores() {
    document.getElementById('score-assignment1').innerText = '85%';
    document.getElementById('score-assignment2').innerText = '90%';
}

// Call updateScores function
window.onload = updateScores;