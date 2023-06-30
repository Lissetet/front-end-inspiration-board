import { useState } from "react";

const SignUp = () => {
    const [formData, setFormData] = useState({})

    return (
        <div >
            <form>
                <h1>Sign Up</h1>
                <label htmlFor="username">Name</label>
                <input type="text" name="username" id="username" placeholder="Name" autofocus required />
                <label for="email">Email</label>
                <input type="email" name="email" id="email" placeholder="mail@website.com" required />
                <label for="password">Password</label>
                <input type="password" name="password" id="password" placeholder="password" required />
                <input type="submit" value="Sign Up" id="submit" />
                {/* <p class="have-account-line">Already have an Account? <a href="#">Log in</a></p> */}
            </form>
        </div>

    )
};

export default SignUp;