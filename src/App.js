import React, { useState } from "react";
 
import "./App.css";
 
function App() {
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="App">
            <h3>React Example to Show/Hide password</h3>
            <div>
                <label for="pass">Enter password: </label>
                <input
                    id="pass"
                    type={
                        showPassword ? "text" : "password"
                    }
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                />
                <br />
                <br />
                <label for="check">Show Password</label>
                <input
                    id="check"
                    type="checkbox"
                    value={showPassword}
                    onChange={() =>
                        setShowPassword((prev) => !prev)
                    }
                />
            </div>
            <br />
        </div>
    );
}
 
export default App;