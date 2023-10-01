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

    clients.forEach((client, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = 
                            `<strong>ID:</strong> ${client.id}<br>

                            <strong>Name:</strong>
                             <input id="name" value="${client.name}"><br>

                            <strong>Email:</strong> 
                            <input id="email:" value="${client.email}"><br>

                            <button onclick="deleteClient(${index})">🚮</button>
                            <button onclick="updateClient(event, ${index})">📓</button>`;
        clientList.appendChild(listItem);
    });
}

function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
}

function deleteClient(index) {
    // Encontra o índice do cliente a ser excluído com base no ID
    
    clients.splice(index, 1);
    displayClients();
}


function updateClient(event, index) {

    const li = event.target.parentElement;
    const name = li.querySelector('#name').value;
    
    const email = li.querySelector('#email').value;
    const client = clients[index];

    client.name = name;
    client.email = email;

    console.log('Valor atualizado:', client);


}
