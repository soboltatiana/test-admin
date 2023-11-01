import {
    Datagrid,
    EmailField,
    List,
    SimpleList,
    TextField,
    UrlField,
    TextInput,
    ReferenceInput,
    useDataProvider, Identifier,
} from 'react-admin';
import {useMediaQuery, Theme, Checkbox, FormControlLabel } from "@mui/material";
import {TestField} from "../TestField";
import { useRecordSelection } from 'react-admin'
import React from 'react';

const filters = [
    <TextInput name="q" source="q" label="Search" alwaysOn  key="q" />,
    <ReferenceInput name="users" label="Users" source="id" reference="users" key="users" />,
]

export const UserList = () => {
    const [selectAllChecked, setSelectAllChecked] = React.useState(false);
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
    const [, { select }] = useRecordSelection('users');
    const dataProvider = useDataProvider();
    const [ ids, setIds] = React.useState<Array<number>>([]);
    React.useEffect(() => fetchAllIds(), []);

    function fetchAllIds() {
        dataProvider.getMany('users', {ids: []}).then((data) => {
            setIds(data.data.map((item: { id: number }) => item.id));
        });
    }

    function onSelectAllCheck() {
        const nextValue = !selectAllChecked;
        if (nextValue) {
            select(ids);
        } else {
            select([]);
        }
        setSelectAllChecked(nextValue);
    }

    return (
        <>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={selectAllChecked}
                        onChange={onSelectAllCheck}
                    />
                }
                label="Select All Users On All Pages"
            />
            <List filters={filters}>
            {isSmall ? (
                <SimpleList
                    primaryText={(record) => record.name}
                    secondaryText={(record) => record.username}
                    tertiaryText={(record) => record.email}
                />) : (
                <Datagrid
                    rowClick="show"
                >
                    <TestField source="id"/>
                    <TextField source="name"/>
                    <EmailField source="email"/>
                    <TextField source="phone"/>
                    <UrlField source="website"/>
                    <TextField source="company.name"/>
                </Datagrid>
            )}
        </List>
            </>
    );
}