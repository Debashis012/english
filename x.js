const apiKey = 'rzp_test_rmOM1JoRufFed2'; // actual Razorpay API key

function initiatePayment() {
    const name = $('#name').val();
    const email = $('#email').val();
    const phone = $('#phone').val();
    const amount = $('#fixed-amount').text();

    const options = {
        key: apiKey,
        amount: amount * 100, // Convert amount to paise (Indian currency)
        currency: 'INR',
        name: '0to100LearnAcademy',
        description: 'Service Payment',
        image: 'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2018/10/whatsapp-123-1540563529.jpg', // Replace with your actual logo URL
        prefill: {
            name: name,
            email: email,
            contact: phone
        },
        handler: function (response) {
            // Handle the payment success
            alert('Payment successful!');
            // You can add further logic here, like storing the transaction details in your database
        },
    };

    const rzp = new Razorpay(options);
    rzp.open();
}
