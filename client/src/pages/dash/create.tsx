import {NextPage} from "next";
import Create from "@/Components/Dash/Create";
import Dashboard from "@/Components/Layouts/Dashboard";

const CreatePage : NextPage = () => {
    return <Dashboard> <Create/> </Dashboard>
}
export default CreatePage;