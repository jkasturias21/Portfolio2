<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Connect to DB
$mysqli = new mysqli("localhost", "root", "Fujitrans@2025", "my-portfolio");

if ($mysqli->connect_errno) {
    echo json_encode(["status" => "error", "message" => "Failed to connect to DB"]);
    exit;
}

// Get JSON from React
$data = json_decode(file_get_contents("php://input"), true);

$name = $mysqli->real_escape_string($data['name']);
$email = $mysqli->real_escape_string($data['email']);
$message = $mysqli->real_escape_string($data['message']);

$query = "INSERT INTO messages (name, email, message) VALUES ('$name', '$email', '$message')";

if ($mysqli->query($query)) {
    echo json_encode(["status" => "success", "message" => "Message saved"]);
} else {
    echo json_encode(["status" => "error", "message" => $mysqli->error]);
}

$mysqli->close();
?>
