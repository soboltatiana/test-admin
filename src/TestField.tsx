import { useRecordContext } from "react-admin";
import { Chip } from '@mui/material';

export function TestField({ source }: { source: string}){
    const record = useRecordContext();
    if(!record) return null;

    const value = record[source];

    return (
        <Chip label={value} variant="outlined" style={{color: 'green'}}/>
    )
}