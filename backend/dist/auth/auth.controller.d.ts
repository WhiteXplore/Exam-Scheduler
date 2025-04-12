import { AuthService } from './auth.service';
import { Response } from 'express';
import { AuthRequest } from './types';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(email: string, password: string, res: Response): Promise<Response<any, Record<string, any>>>;
    logout(res: Response): Promise<Response<any, Record<string, any>>>;
    getProfile(req: AuthRequest): Promise<any>;
}
