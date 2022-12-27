
export default function validate (input) {
    let error = ""

    if (input.length > 30) {
        error= "You can't write more than 30 characters"
    } else 
    if (!/^[a-zA-Z\s]*$/.test(input)){
        error= "You can only use letters"
    }

    return error
}