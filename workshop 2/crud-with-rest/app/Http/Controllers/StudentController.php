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
}
