function showMessage(message) {
    const result = 2 * 21
    alert(message + " " + result)
}

function calculateAge(yearOfBirth) {
    const currentYear = new Date().getFullYear()
    return currentYear - yearOfBirth
}