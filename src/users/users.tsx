import {Datagrid, EmailField, List, SimpleList, TextField, UrlField, TextInput, ReferenceInput} from 'react-admin';
import {useMediaQuery, Theme} from "@mui/material";
import {TestField} from "../TestField";

const filters = [
    <TextInput name="q" source="q" label="Search" alwaysOn />,
    <ReferenceInput name="users" label="Users" source="id" reference="users" />,
]
export const UserList = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));

    return (
        <List filters={filters}>
            {isSmall ? (
                <SimpleList
                    primaryText={(record) => record.name}
                    secondaryText={(record) => record.username}
                    tertiaryText={(record) => record.email}
                />) : (
                <Datagrid rowClick="show">
                    <TestField source="id"/>
                    <TextField source="name"/>
                    <EmailField source="email"/>
                    <TextField source="phone"/>
                    <UrlField source="website"/>
                    <TextField source="company.name"/>
                </Datagrid>
            )}
        </List>
    );
}