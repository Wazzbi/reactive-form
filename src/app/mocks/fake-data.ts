import { User } from '../models/user';

export const userData = () => {
    return {
        username: 'David Novotný',
        email: 'dd47@hey.com'
    } as User;
};

export const userData2 = {
    username: 'David Novotný',
    email: ' '
} as User;

/* export const userData2 = {
    username: 'David Novotný',
    email: 'dd47@hey.com'
} as User; */
