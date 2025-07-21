 // Form Validation
   document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !email.includes('@') || !message) {
        document.getElementById('formMessage').textContent = 'Please fill in all fields with a valid email.';
    } else {
        document.getElementById('formMessage').textContent = 'Form submitted successfully!';
        this.reset();
    }
});
// To-Do List
    function addTodo() {
        const input = document.getElementById('todoInput');
        const task = input.value.trim();
        if (task) {
            const li = document.createElement('li');
            li.textContent = task;
            li.onclick = () => li.remove();
            document.getElementById('todoList').appendChild(li);
            input.value = '';
        }
    }
