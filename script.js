function updateCurrentTime() {
    const currentTimeElement = document.getElementById("currentTime");
    const now = new Date();
    
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    // Convert to 12-hour format with AM/PM
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'
    
    // Add leading zeros if necessary
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    const currentTime = `${hours}:${minutes}:${seconds} ${ampm}`;
    
    currentTimeElement.innerHTML = currentTime;
    
    // Update every second
    setTimeout(updateCurrentTime, 1000);
}

// Start updating the time
updateCurrentTime();
