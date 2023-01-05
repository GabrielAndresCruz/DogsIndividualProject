
export default function validate (input){
    let errors= {}

    if (!input.name){
        errors.name = "Must be contain a name"
    } else 
    if (input.name.split('')[0] === ' '){
        errors.name = "You can't use tabulation or space in your first box"
    } else 
    if (input.name.length > 20){
        errors.name = "The name cannot be more than twenty digits"
    }
    if (!/^[ a-zA-Z\t]+$/.test(input.name)){
        errors.name = "You can only use letters"
    } else
    if (input.name.split('')[0] === input.name.split('')[0].toLowerCase()){
        errors.name = "Your first letter must be capitalized"
    }
    if(!/^\d+$/.test(input.min_height)){
        errors.min_height = "Minimum height must be a number"
    } else 
    if (input.min_height.length > 3){
        errors.min_height = "The height cannot be more than three digits"
    }
    if(!/^\d+$/.test(input.max_height)){
        errors.max_height = "Maximum height must be a number"
    } else 
    if (input.max_height.length > 3){
        errors.max_height = "The height cannot be more than three digits"
    } else
    if (parseInt(input.min_height) > parseInt(input.max_height)){
        errors.max_height = "Maximum height must be greater than the minimum height"
    }
    if(!/^\d+$/.test(input.min_weight)){
        errors.min_weight = "Minimum weight must be a number"
    } else 
    if (input.min_weight.length > 3){
        errors.min_weight = "The weight cannot be more than three digits"
    }
    if(!/^\d+$/.test(input.max_weight)){
        errors.max_weight = "Maximum height must be a number"
    } else 
    if (input.max_weight.length > 3){
        errors.max_weight = "The weight cannot be more than three digits"
    }
    if (parseInt(input.min_weight) > parseInt(input.max_weight)){
        errors.max_weight = "Maximum weight must be greater than the minimum weight"
    }
    if(input.temperament.length === 0) {
        errors.temperament = "The dog must be contain, at least, one temperament."
    } else if (input.temperament.length > 8) {
        errors.temperament = "The dog can't have more than eigth temperaments."
    }
    
    return errors;
}