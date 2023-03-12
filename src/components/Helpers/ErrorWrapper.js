import classes from './ErrorWrapper.module.css';
const ErrorWrapper = (props) => {
    return (
        <p className={classes.error}>{props.httpError}</p>
    )
}

export default ErrorWrapper;