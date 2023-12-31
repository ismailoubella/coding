function checkStatus(a, b, c) {
    const name = typeof a === 'string' ? a : (typeof b === 'string' ? b : c);
    const age = typeof a === "number" ? a : (typeof b === "number" ? b : c);
    let status = typeof a === "boolean" ? a : (typeof b === "boolean" ? b : c);
    if (status) {
        status = "You Are Available For Hire";
    }
    else {
        status = "You Are Not Available For Hire";
    }
    console.log(`Hello ${name}, Your Age Is ${age}, ${status}`);
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
