import { useLocation} from "react-router-dom"
import Button from "./components/button";
import Header from "./components/header";

export const UserDetails = (props) => {
    const {state} = useLocation();

    return (
        <div>
            <Header>User Details</Header>
            <p>Thank you {state.firstName} {state.lastName} for submitting!</p>
            <a href="/">
                <Button>Go back to homepage</Button>
            </a>
        </div>
    )
}
