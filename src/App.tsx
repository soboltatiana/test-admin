import {
    Admin,
    Resource,
    EditGuesser,
    ShowGuesser, ListGuesser,
} from "react-admin";
import {dataProvider} from "./dataProvider";
import {UserList} from "./users/users";
import {PostList} from "./posts/posts";
import {PostEdit} from "./posts/edit";
import {PostCreate} from "./posts/create";
import UserIcon from '@mui/icons-material/Group';
import PostIcon from '@mui/icons-material/Book';
import {Dashboard} from "./Dashboard";
import {authProvider} from "./authProvider";

export const App = () => (
    <Admin dataProvider={dataProvider} dashboard={Dashboard}>
        <Resource
            name="posts"
            list={PostList}
            edit={PostEdit}
            create={PostCreate}
            icon={PostIcon}
        />
        <Resource
            name="users"
            list={UserList}
            show={ShowGuesser}
            recordRepresentation="name"
            icon={UserIcon}
        />
    </Admin>);
