const scoreFinder = (score) => {
    if (score <= 3) {
        return "Vous êtes une personne hétérosexuelle";
    } else if (score <= 7) {
        return "Vous êtes une personne hétèrosexuelle avec des tendances homosexuelles";
    } else if (score <= 11) {
        return "Vous êtes une personne hétécurieuse";
    } else if (score <= 14) {
        return "Vous êtes une personne homosexuelle sur les bords";
    } else if (score <= 17) {
        return "Vous êtes une personne homosexuelle";
    } else {
        return "Vous êtes une personne homosexuelle qui saute tout ce qui bouge, posez vous des questions";
    }
}
export default scoreFinder;