import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
    'pk_test_51Rk9X24hMMVdIqla7GiDmEPPLf1rDlcO3G8JlaX3o2QyzQhrZunxomjpsvUf2GJnlaqlMOSQBE7u0tIhEge8wihc00lxwSMg5l'
);


export default stripePromise;