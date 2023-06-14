import Input from "./Input";
import SubmitButton from "./SubmitButton";

function LoginForm() {

    return (
        <form>
            <Input label="Email:" type='email' name="email"/>
            <Input label="Password:" type="password" name="password"/>
            <SubmitButton label="login"/>
        </form>
    )
}

export default LoginForm