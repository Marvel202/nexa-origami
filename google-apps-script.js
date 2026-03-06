function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Add headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Email', 'Product', 'Price', 'Quantity', 'Status']);
    }
    
    // Append order row
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.name,
      data.email,
      data.productName,
      data.productPrice,
      data.quantity,
      'New'
    ]);
    
    // Send notification email to business
    var subject = 'New Order - ' + data.productName;
    var body = 'New order received!\n\n' +
      'Customer: ' + data.name + '\n' +
      'Email: ' + data.email + '\n' +
      'Product: ' + data.productName + '\n' +
      'Price: $' + data.productPrice + '\n' +
      'Quantity: ' + data.quantity + '\n' +
      'Date: ' + (data.timestamp || new Date().toISOString());
    
    MailApp.sendEmail('thenexa.ja@gmail.com', subject, body);
    
    // Send acknowledgement to customer
    var ackSubject = 'Order Confirmation - Nexa Origami';
    var ackBody = 'Dear ' + data.name + ',\n\n' +
      'Thank you for your order. We will soon contact with you.\n\n' +
      'Order Details:\n' +
      'Product: ' + data.productName + '\n' +
      'Price: $' + data.productPrice + '\n' +
      'Quantity: ' + data.quantity + '\n\n' +
      'Best regards,\nNexa Origami Team';
    
    MailApp.sendEmail(data.email, ackSubject, ackBody);
    
    return ContentService.createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput('Nexa Origami Order Webhook is active.')
    .setMimeType(ContentService.MimeType.TEXT);
}
