
// Trigger file input when "Upload Resume" text is clicked
document.getElementById('uploadText').addEventListener('click', function() {
    document.getElementById('resumeUpload').click();
});

// Display selected file name in place of "Upload Resume"
document.getElementById('resumeUpload').addEventListener('change', function() {
    var fileInput = document.getElementById('resumeUpload');
    var fileName = fileInput.files.length ? fileInput.files[0].name : "Upload Resume";
    document.getElementById('uploadText').textContent = fileName;
});

