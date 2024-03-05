<?php
require 'vendor/autoload.php'; // Include the Supabase PHP client library

// Initialize Supabase client
$supabaseUrl = 'https://skyrbuelauzbedgignph.supabase.co';
$supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNreXJidWVsYXV6YmVkZ2lnbnBoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk2MTY1NjQsImV4cCI6MjAyNTE5MjU2NH0.gzYzpurOFRNpFYlFzWPU9W2C23f5pttBGgnY70jmykA';
$supabase = new Supabase\Client($supabaseUrl, $supabaseKey);

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Capture form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Insert form data into Supabase table
    $response = $supabase->from('contact_form_submissions')->insert([
        ['name' => $name, 'email' => $email, 'message' => $message]
    ]);

    if ($response->error) {
        echo 'Error submitting contact form: ' . $response->error->message;
    } else {
        echo 'Contact form submitted successfully!';
    }
}
?>
