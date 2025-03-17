<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    // Compose email message
    $to = "info@quillquestpublishers.com.com"; // Change this to your email address
    $subject = "New form submission";
    $email_body = '<html><body>';
    $email_body .= '<h2>New form submission</h2>';
    $email_body .= '<table border="1">';
    $email_body .= "<tr><td><strong>Name:</strong></td><td>$name</td></tr>";
    $email_body .= "<tr><td><strong>Email:</strong></td><td>$email</td></tr>";
    $email_body .= "<tr><td><strong>Phone:</strong></td><td>$phone</td></tr>";
    $email_body .= "<tr><td><strong>Message:</strong></td><td>$message</td></tr>";
    $email_body .= '</table>';
    $email_body .= '</body></html>';

    // Set headers for HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    // Send email
    if (mail($to, $subject, $email_body, $headers)) {
        echo "Email sent successfully.";
    } else {
        echo "Failed to send email.";
    }
}
