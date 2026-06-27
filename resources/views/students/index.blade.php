<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Students CRUD</title>
    @vite(['resources/js/estudiante.js'])
</head>
<body>

    <h1>Students List</h1>

    <form id="studentForm">
        <h3>Add / Edit Student</h3>
        <input type="hidden" id="id">
        <label>Name:</label>
        <input type="text" id="name" required>
        
        <label>Last Name:</label>
        <input type="text" id="last_name" required>
        
        <label>Mother Last Name:</label>
        <input type="text" id="mother_last_name" required>
        
        <label>Email:</label>
        <input type="email" id="email" required>
        
        <label>Phone:</label>
        <input type="text" id="phone" required>
        
        <br><br>
        <button type="submit" id="saveBtn">Save</button>
        <button type="button" id="cancelBtn" style="display:none;" onclick="resetForm()">Cancel</button>
    </form>

    <br><hr><br>

    <table border="1">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Last Name</th>
                <th>Mother Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody id="studentTable">
            <tr><td colspan="7">Loading...</td></tr>
        </tbody>
    </table>

</body>
</html>
