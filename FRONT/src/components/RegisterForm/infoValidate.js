// here is going to be our logic to tell if the info is correct or not

export default function infoValidate(values) {
  let errors = {}

  if (!values.prénom.trim()) {
    // if prénom is not true then ...
    errors.prénom = "Prénom est requis"
  }

  if (!values.nom.trim()) {
    // if nom is not true then ... 
    errors.nom = "Nom est requis"
  }

  // email
  if (!values.email) {
    errors.email = "Email est requis"
    // this logic bellow validates if it's an actual email or not (@briancodex/github)
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    // its catches the error if something is missing like .com or @
    errors.email = "Cet email n'est pas valide"
  }

  if (!values.password) {
    errors.password = "Mot de passe requis"
    // asks for a password of min 5 characters
  } else if (values.password.length < 5) {
    errors.password = "Votre mot de passe doit contenir au moins 5 caractères"
  }

  if (!values.password2) {
    errors.password2 = "Mot de passe requis"
      // if password2 doesn't match with password
    } else if (values.password2 !== values.password) {
      errors.password2 = "Les mots de passe ne correspondent pas"
    }

    return errors;
    
}

