<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Student;

class StudentController extends Controller
{
    public function index() {
        $students = Student::all();
        return $students;
    }

    public function create(Request $req) {
        $student = Student::create($req->all());
        return $student;
    }

    public function update($id, Request $req) {
        $student = Student::find($id);
        $student->fill($req->all())->save();
        return $student;
    }

    public function delete($id) {
        $student = Student::find($id);
        $student->delete();
        return $student;
    }
}
