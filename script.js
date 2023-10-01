let clients = [];

function showForm() {
    const form = document.getElementById('form');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

function addClient() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
   

    if (name && email) {
        const newClient = {
            id: clients.length + 1,
            name: name,
            email: email
        };

        clients.push(newClient);
        displayClients();
        clearForm();
    }
}

function displayClients() {
    const clientList = document.getElementById('clientList');
    clientList.innerHTML = '';

    clients.forEach(client => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>ID:</strong> ${client.id}<br>
                            <strong>Name:</strong> ${client.name}<br>
                            <strong>Email:</strong> ${client.email}`;
        clientList.appendChild(listItem);
    });
}

function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
}
