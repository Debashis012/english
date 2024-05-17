document.addEventListener('DOMContentLoaded', function () {
    const statisticsSections = document.querySelectorAll('.stat-item');

    // Add mouseenter event listener to start counting when the mouse enters any statistics section
    statisticsSections.forEach(section => {
        section.addEventListener('mouseenter', function () {
            console.log('Mouse entered a statistics section, start counting...');
            startCounting();
        });
    });

    // Start counting when the page is loaded
    startCountingOnLoad();
});

function startCounting() {
    console.log('Start counting...');
    countUp('satisfactionCount', 95, 0, 2000, '% +');
    countUp('happystudent', 2000, 0, 2000, '+');
    countUp('Hoursspent', 12000, 1000, 2000, '+');
    countUp('members', 3000);
}

function startCountingOnLoad() {
    console.log('Page loaded, start counting...');
    startCounting();
}

function countUp(id, target, startValue = 0, duration = 2000, suffix = '') {
    let element = document.getElementById(id);
    if (!element) {
        console.error(`Element with id "${id}" not found`);
        return;
    }

    let increment = (target - startValue) / (duration / 4); // Calculate increment
    let currentCount = startValue;

    function updateCount() {
        currentCount += increment;
        element.textContent = Math.round(currentCount) + suffix;

        if ((increment > 0 && currentCount < target) || (increment < 0 && currentCount > target)) {
            setTimeout(updateCount, 10);
        } else {
            // Stop the counting effect
            element.textContent = target + suffix;
        }
    }

    console.log(`Starting counting for ${id}`);
    updateCount();
}
