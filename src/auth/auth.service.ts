import { Body, Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

    async login () {

    }

    validateUser(email: string, password: string) {
        throw new Error('Method not implemented.');
    }
}
