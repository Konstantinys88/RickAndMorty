import error from "./error.svg"

const ErrorMesage = () => {
    return (
        <img 
        className="charList__error"
        src={error} 
        alt="error" 
        style={{ display: 'block', width: "250px", height: "250px", objectFit: 'contain', margin: "auto" }} />
    )
}

export default ErrorMesage;