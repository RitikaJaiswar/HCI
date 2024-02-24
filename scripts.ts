// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const teacherRegForm = document.getElementById('teacherRegForm');
    const studentRegForm = document.getElementById('studentRegForm');
    const userTypeSelect = document.getElementById('userType');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const userType = userTypeSelect.value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Perform login based on userType
        if (userType === 'teacher') {
            // Implement teacher login logic
            console.log('Teacher login:', username, password);
        } else {
            // Implement student login logic
            console.log('Student login:', username, password);
        }
    });

    teacherRegForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('teacherUsername').value;
        const password = document.getElementById('teacherPassword').value;

        // Implement teacher registration logic
        console.log('Teacher registration:', username, password);
    });

    studentRegForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('studentUsername').value;
        const password = document.getElementById('studentPassword').value;

        // Implement student registration logic
        console.log('Student registration:', username, password);
    });

    userTypeSelect.addEventListener('change', function() {
        const selectedType = this.value;
        const teacherRegSection = document.getElementById('teacherRegistration');
        const studentRegSection = document.getElementById('studentRegistration');

        if (selectedType === 'teacher') {
            teacherRegSection.classList.remove('hidden');
            studentRegSection.classList.add('hidden');
        } else {
            teacherRegSection.classList.add('hidden');
            studentRegSection.classList.remove('hidden');
        }
    });
});
