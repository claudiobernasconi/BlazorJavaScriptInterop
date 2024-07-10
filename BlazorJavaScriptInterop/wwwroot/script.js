function showMessage(message) {
    const result = 2 * 21
    alert(message + " " + result)
}

function calculateAge(yearOfBirth) {
    const currentYear = new Date().getFullYear()
    return currentYear - yearOfBirth
}

function createChart(htmlElementId, data, label) {
    new Chart(
        document.getElementById(htmlElementId),
        {
            type: 'bar',
            data: {
                labels: data.map(row => row.year),
                datasets: [
                    {
                        label: label,
                        data: data.map(row => row.salary)
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            },
        }
    );
}

function disposeChart(htmlElementId) {
    const chartStatus = Chart.getChart(htmlElementId);
    if (chartStatus != undefined) {
        chartStatus.destroy();
    }
}