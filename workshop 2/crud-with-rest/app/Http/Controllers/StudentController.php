<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Student;

class StudentController extends Controller
{
    public function index() {
        $students = Student::all();
        return response()->json($students, 200);
    }

    public function create(Request $req) {
        $student = Student::create($req->all());
        return response()->json($student, 201);
    }

    public function update($id, Request $req) {
        $student = Student::find($id);
        $student->fill($req->all())->save();
        return response()->json($student, 200);
    }

    public function delete($id) {
        $student = Student::find($id);
        if ($student) {
            $student->delete();
            return response()->json(null, 204);
        }
        return response()->json(null, 500);
    }
}
