export async function sendEmail(formData) {
    try {
        const response = await fetch('https://sourcecodetesting.com/brand/hassan/sendMail.php', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();
        if (!response.ok || !data.success) {
            throw new Error(data.message || "Server error");
        }
        // console.log("Form Submitted Successfully", data);
        return data;
    } catch (error) {
        console.log("Error Submitted Form", error);
        throw error;
    }
}