const apiUrl = '/students';

// Load data on start
window.onload = function() {
    loadStudents();
};

function loadStudents() {
    fetch('/students-list')
        .then(response => response.json())
        .then(data => {
            const table = document.getElementById('studentTable');
            table.innerHTML = '';
            if (data.length === 0) {
                table.innerHTML = '<tr><td colspan="7">No data</td></tr>';
            } else {
                data.forEach(student => {
                    table.innerHTML += `
                        <tr>
                            <td>${student.id}</td>
                            <td>${student.name}</td>
                            <td>${student.last_name}</td>
                            <td>${student.mother_last_name}</td>
                            <td>${student.email}</td>
                            <td>${student.phone}</td>
                            <td>
                                <button onclick="editStudent(${student.id})">Edit</button>
                                <button onclick="deleteStudent(${student.id})">Delete</button>
                            </td>
                        </tr>
                    `;
                });
            }
        });
}

document.getElementById('studentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const id = document.getElementById('id').value;
    const method = id ? 'PUT' : 'POST';
    const url = id ? `${apiUrl}/${id}` : apiUrl;
    
    const data = {
        name: document.getElementById('name').value,
        last_name: document.getElementById('last_name').value,
        mother_last_name: document.getElementById('mother_last_name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value
    };

    fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            alert('Saved successfully!');
            resetForm();
            loadStudents();
        } else {
            alert('Error saving data. Check if email is unique.');
        }
    });
});

window.editStudent = function(id) {
    fetch(`${apiUrl}/${id}`)
        .then(response => response.json())
        .then(student => {
            document.getElementById('id').value = student.id;
            document.getElementById('name').value = student.name;
            document.getElementById('last_name').value = student.last_name;
            document.getElementById('mother_last_name').value = student.mother_last_name;
            document.getElementById('email').value = student.email;
            document.getElementById('phone').value = student.phone;
            document.getElementById('cancelBtn').style.display = 'inline';
        });
}

window.deleteStudent = function(id) {
    if (confirm('Delete this student?')) {
        fetch(`${apiUrl}/${id}`, {
            method: 'DELETE',
            headers: { 
                'Accept': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            }
        })
        .then(response => {
            if (response.ok) {
                alert('Deleted successfully');
                loadStudents();
            }
        });
    }
}

window.resetForm = function() {
    document.getElementById('studentForm').reset();
    document.getElementById('id').value = '';
    document.getElementById('cancelBtn').style.display = 'none';
}