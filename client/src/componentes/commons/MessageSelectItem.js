import Alert from "@material-ui/lab/Alert";

export default function MessageSelectItem(props) {
    return (
        <Alert severity="info" variant="filled">
            {props.text}
        </Alert>
    );
}
