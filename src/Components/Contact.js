import "./Contact.css"
function Contact() {
    return (
        <div>
            <h1>Contact Us</h1>
            <input placeholder="Name" required></input>
            <input placeholder="Email" required></input>
            <input placeholder="Phone Number" required></input>
            <input placeholder="Message" required></input>
            <button>Submit</button>
            {/* Enter Email form */}
        </div>
    )
}

export default Contact
