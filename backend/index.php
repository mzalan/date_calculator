<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

if (!isset($_GET['start']) || !isset($_GET['end'])) {
    echo json_encode(["error" => "Missing start or end date."]);
    exit;
}

$start = $_GET['start'];
$end = $_GET['end'];

try {
    $startDate = new DateTime($start);
    $endDate = new DateTime($end);

    $difference = $startDate->diff($endDate);
    $days = $difference->days;

    echo json_encode([
        "start" => $start,
        "end" => $end,
        "days" => $days
    ]);
} catch (Exception $e) {
    echo json_encode(["error" => "Invalid date format."]);
}
?>