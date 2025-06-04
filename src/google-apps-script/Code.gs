// === CONFIGURATION ===
const FORM_ID = "1uQSvkJiHRi90JOe7d68eBGj7ds8cLDa0WBykqWhBnUM"; // Replace this
const SLOT_QUESTION_TITLE = "Please select a date and time (Year-Month-Day)";
const EMAIL_TITLE = "Email";
const HOURS_BEFORE_TO_HIDE = 2; // Slots will disappear 2 hours before their time

// === 1. Auto-Update Form from Sheet ===
function updateTimeSlotsFromSheet() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("TimeSlots");
  if (!sheet) {
    Logger.log("Sheet 'TimeSlots' not found.");
    return;
  }

  const values = sheet.getRange("A2:B" + sheet.getLastRow()).getValues();
  // Filter out booked slots (column B === true)
  const availableSlots = values
    .filter(row => !row[1]) // row[1] is booked, keep if NOT booked (false or empty)
    .map(row => row[0])
    .filter(v => v);

  const form = FormApp.openById(FORM_ID);
  const items = form.getItems(FormApp.ItemType.MULTIPLE_CHOICE);
  const item = items.find(i => i.getTitle() === SLOT_QUESTION_TITLE);
  if (!item) {
    Logger.log(`Question '${SLOT_QUESTION_TITLE}' not found.`);
    return;
  }

  const question = item.asMultipleChoiceItem();
  const choices = availableSlots.map(v => question.createChoice(v));
  question.setChoices(choices);
}


function generateCustomTimeSlots() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("TimeSlots");
  if (!sheet) {
    throw new Error("Sheet 'TimeSlots' not found!");
  }

  const existingData = sheet.getDataRange().getValues(); // Get all rows including headers
  const bookedMap = new Map();

  // Start from row 2 to skip headers
  for (let i = 1; i < existingData.length; i++) {
    const slot = existingData[i][0];
    const booked = existingData[i][1] === true;
    if (slot) {
      bookedMap.set(slot, booked);
    }
  }

  // Clear sheet before regenerating
  sheet.clearContents();
  sheet.getRange("A1").setValue("Time Slot");
  sheet.getRange("B1").setValue("Booked");

  const today = new Date();
  const startDate = new Date(today);
  startDate.setDate(today.getDate() + 1); // Start from tomorrow
  startDate.setHours(0, 0, 0, 0);

  const daysToGenerate = 7;
  const slotTimes = [
    { hour: 10, minute: 30 },
    { hour: 13, minute: 30 },
    { hour: 16, minute: 30 },
  ];

  const newSlots = [];

  for (let day = 0; day < daysToGenerate; day++) {
    for (const time of slotTimes) {
      const slotDate = new Date(startDate);
      slotDate.setDate(startDate.getDate() + day);
      slotDate.setHours(time.hour, time.minute, 0, 0);

      const formatted = Utilities.formatDate(slotDate, Session.getScriptTimeZone(), "yyyy-MM-dd HH:mm");

      // Reuse existing TRUE value if it was already booked
      const isBooked = bookedMap.has(formatted) ? bookedMap.get(formatted) : false;
      newSlots.push([formatted, isBooked]);
    }
  }

  sheet.getRange(2, 1, newSlots.length, 2).setValues(newSlots);
}

function doGet() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1"); // Adjust name as needed
  if (!sheet) return ContentService.createTextOutput("Sheet not found");

  const data = sheet.getDataRange().getValues();
  const headers = data.shift(); // Removes header row, e.g. ["Time Slot", "Booked"]

  const result = data
    .filter(row => !row[1]) // row[1] is Booked, false means available
    .map(row => {
      const [dateStr, timeStr] = row[0].split(' ');
      return {
        Date: dateStr,
        Time: timeStr
      };
    });

  return ContentService
    .createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeader("Access-Control-Allow-Origin", "*");  // *CORS fix if Apps Script supports setHeader
}

function getScriptId() {
  Logger.log(ScriptApp.getScriptId()); // Or, use Browser.msgBox() to display in a popup
}
