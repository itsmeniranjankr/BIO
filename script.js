function doPost(e) {
  var sheet = SpreadsheetApp.openById("1y6NLW9NyGDqhf6QHfrgpPul62o_QnWqs5Cu2gYbexQ8"); // Your Google Sheet ID
  var data = JSON.parse(e.postData.contents);
  
  var sheetTab = sheet.getActiveSheet();
  sheetTab.appendRow([new Date(), data.name]); // Stores Timestamp & Name
  
  return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
}