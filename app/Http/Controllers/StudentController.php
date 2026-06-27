<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Student;
use App\Http\Requests\StoreStudentRequest;
use App\Http\Requests\UpdateStudentRequest;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    public function index()
    {
        return view('students.index');
    }

    public function getList()
    {
        return response()->json(Student::all());
    }

    
    public function store(StoreStudentRequest $request)
    {
        $student = Student::create($request->validated());
        return response()->json($student, 201);
    }


    public function show(Student $student)
    {
        return response()->json($student);
    }

 
    public function update(UpdateStudentRequest $request, Student $student)
    {
        $student->update($request->validated());
        return response()->json($student);
    }

    public function destroy(Student $student)
    {
        $student->delete();
        return response()->json(null, 204);
    }
}
